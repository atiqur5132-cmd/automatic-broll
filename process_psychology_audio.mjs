import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";
import fs from "fs";
import path from "path";

const inputAudio = path.join("public", "Why toxic relationships become addictive_.m4a");
const cleanedWav = path.join("public", "toxic_relationships_clean.wav");
const wav16k = path.join("public", "toxic_relationships_16k.wav");
const transcriptPrefix = path.join("public", "toxic_relationships_transcript");
const transcriptJson = `${transcriptPrefix}.json`;
const outputTs = path.join("src", "data", "toxicRelationshipsTranscript.ts");

console.log("1. Checking input audio:", inputAudio);
if (!fs.existsSync(inputAudio)) {
  console.error("Input audio not found:", inputAudio);
  process.exit(1);
}

// Rule: Audio Cleanup Rule: Always remove pauses > 0.5s from raw voiceovers
console.log("2. Cleaning audio (removing silence > 0.5s) -> public/toxic_relationships_clean.wav...");
const res1 = spawnSync(ffmpegPath, [
  "-y",
  "-i", inputAudio,
  "-af", "silenceremove=stop_periods=-1:stop_duration=0.5:stop_threshold=-35dB",
  "-ar", "44100",
  "-ac", "2",
  cleanedWav
], { stdio: "inherit" });

if (res1.status !== 0) {
  console.error("Error cleaning audio silence");
  process.exit(1);
}

console.log("3. Converting to 16kHz mono for Whisper...");
const res2 = spawnSync(ffmpegPath, [
  "-y",
  "-i", cleanedWav,
  "-ar", "16000",
  "-ac", "1",
  "-c:a", "pcm_s16le",
  wav16k
], { stdio: "inherit" });

if (res2.status !== 0) {
  console.error("Error converting to 16kHz wav");
  process.exit(1);
}

console.log("4. Running Whisper transcription...");
const whisperExe = path.join("whisper", "main.exe");
const modelPath = path.join("whisper", "ggml-tiny.en.bin");

const res3 = spawnSync(whisperExe, [
  "-m", modelPath,
  "-f", wav16k,
  "-ml", "30",
  "-of", transcriptPrefix,
  "-oj"
], { stdio: "inherit" });

if (res3.status !== 0) {
  console.error("Error running whisper transcription");
  process.exit(1);
}

console.log("5. Formatting transcript to TypeScript...");
if (!fs.existsSync(transcriptJson)) {
  console.error("Transcript JSON file not found:", transcriptJson);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(transcriptJson, "utf-8"));
const segments = (raw.transcription || []).map((seg, i) => {
  const fromMs = seg.offsets.from;
  const toMs = seg.offsets.to;
  const fromFrame = Math.floor((fromMs / 1000) * 30);
  const toFrame = Math.ceil((toMs / 1000) * 30);
  return {
    id: i + 1,
    fromMs,
    toMs,
    fromFrame,
    toFrame,
    text: seg.text.trim(),
  };
});

const tsContent = `export interface TranscriptSegment {
  id: number;
  fromMs: number;
  toMs: number;
  fromFrame: number;
  toFrame: number;
  text: string;
}

export const TOXIC_RELATIONSHIPS_TRANSCRIPT: TranscriptSegment[] = ${JSON.stringify(segments, null, 2)};
`;

fs.writeFileSync(outputTs, tsContent, "utf-8");
console.log(`Generated ${outputTs} with ${segments.length} segments.`);
