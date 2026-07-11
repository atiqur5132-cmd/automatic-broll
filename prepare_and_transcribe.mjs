import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import ffmpegPath from "ffmpeg-static";

const ffmpegBin = ffmpegPath || "ffmpeg";
const srcAudio = path.resolve("public", "edited_audio.wav");
const voiceoverWav = path.resolve("public", "voiceover.wav");
const voiceover16k = path.resolve("public", "voiceover16k.wav");

console.log("1. Ensuring public/voiceover.wav exists...");
fs.copyFileSync(srcAudio, voiceoverWav);

console.log("2. Converting to 16kHz mono WAV for whisper...");
if (fs.existsSync(voiceover16k)) fs.unlinkSync(voiceover16k);
spawnSync(ffmpegBin, [
  "-y",
  "-i", voiceoverWav,
  "-ar", "16000",
  "-ac", "1",
  "-c:a", "pcm_s16le",
  voiceover16k
], { stdio: "inherit" });

console.log("3. Running whisper/main.exe...");
const mainExe = path.resolve("whisper", "main.exe");
const modelPath = path.resolve("whisper", "ggml-tiny.en.bin");

const res = spawnSync(mainExe, [
  "-m", modelPath,
  "-f", voiceover16k,
  "-oj",
  "-of", path.resolve("public", "gemini_transcript")
], { encoding: "utf-8" });

const jsonPath = path.resolve("public", "gemini_transcript.json");
if (fs.existsSync(jsonPath)) {
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  console.log("Transcribed segments count:", data.transcription?.length);
  const segments = data.transcription || [];
  for (let i = 0; i < Math.min(10, segments.length); i++) {
    console.log(`[${segments[i].timestamps.from} -> ${segments[i].timestamps.to}] ${segments[i].text}`);
  }
} else {
  console.error("Transcription JSON not generated.");
}
