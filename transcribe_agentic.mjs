import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

const mainExe = path.resolve("whisper", "main.exe");
const modelPath = fs.existsSync(path.resolve("ggml-base.en.bin"))
  ? path.resolve("ggml-base.en.bin")
  : path.resolve("whisper", "ggml-tiny.en.bin");

const audioPath = path.resolve("public", "voiceover_agentic_16k.wav");
const outPrefix = path.resolve("public", "agentic_transcript");

console.log("Transcribing with Whisper...");
console.log("Model:", modelPath);
console.log("Audio:", audioPath);

const res = spawnSync(mainExe, [
  "-m", modelPath,
  "-f", audioPath,
  "-oj",
  "-of", outPrefix,
  "-ml", "1"
], { encoding: "utf-8" });

console.log("Whisper finished.");
if (fs.existsSync(`${outPrefix}.json`)) {
  const data = JSON.parse(fs.readFileSync(`${outPrefix}.json`, "utf-8"));
  console.log(`Extracted ${data.transcription?.length || 0} segments from Whisper.`);
  
  // Format for Remotion Subtitles
  const formattedSegments = (data.transcription || []).map((seg, idx) => ({
    id: idx,
    startMs: Math.round(seg.timestamps.from.split(':').reduce((acc, time) => (60 * acc) + +time) * 1000),
    endMs: Math.round(seg.timestamps.to.split(':').reduce((acc, time) => (60 * acc) + +time) * 1000),
    text: seg.text.trim()
  }));

  fs.writeFileSync(
    path.resolve("src", "data", "agentic_subtitles.json"),
    JSON.stringify(formattedSegments, null, 2),
    "utf-8"
  );
  console.log("Saved formatted subtitles to src/data/agentic_subtitles.json");
} else {
  console.error("Transcription JSON not found!");
}
