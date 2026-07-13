import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";
import fs from "fs";
import path from "path";

const inputAudio = path.join("public", "Gemini 3.5 pro leaks.m4a");
const editedWav = path.join("public", "gemini_35_leaks.wav");
const wav16k = path.join("public", "gemini_35_leaks_16k.wav");

console.log("1. Checking input audio:", inputAudio);
if (!fs.existsSync(inputAudio)) {
  console.error("Input audio not found:", inputAudio);
  process.exit(1);
}

console.log("2. Converting to clean WAV 'public/gemini_35_leaks.wav'...");
const res1 = spawnSync(ffmpegPath, [
  "-y",
  "-i", inputAudio,
  "-ar", "44100",
  "-ac", "2",
  editedWav
], { stdio: "inherit" });

if (res1.status !== 0) {
  console.error("Error converting to clean WAV");
  process.exit(1);
}

console.log("3. Converting to 16kHz mono 'public/gemini_35_leaks_16k.wav' for Whisper...");
const res2 = spawnSync(ffmpegPath, [
  "-y",
  "-i", inputAudio,
  "-ar", "16000",
  "-ac", "1",
  "-c:a", "pcm_s16le",
  wav16k
], { stdio: "inherit" });

if (res2.status !== 0) {
  console.error("Error converting to 16kHz wav");
  process.exit(1);
}

console.log("4. Running Whisper transcription to public/gemini_35_leaks_transcript.json...");
const whisperExe = path.join("whisper", "main.exe");
const modelPath = path.join("whisper", "ggml-tiny.en.bin");

const res3 = spawnSync(whisperExe, [
  "-m", modelPath,
  "-f", wav16k,
  "-ml", "60",
  "-of", path.join("public", "gemini_35_leaks_transcript"),
  "-oj"
], { stdio: "inherit" });

if (res3.status !== 0) {
  console.error("Error running whisper transcription");
  process.exit(1);
}

console.log("5. Checking output transcript...");
const transcriptPath = path.join("public", "gemini_35_leaks_transcript.json");
if (fs.existsSync(transcriptPath)) {
  const data = JSON.parse(fs.readFileSync(transcriptPath, "utf-8"));
  console.log("Total segments:", data.transcription?.length || 0);
  console.log("SUCCESS! Saved to public/gemini_35_leaks_transcript.json");
} else {
  console.error("Transcript JSON file not found after whisper run.");
}
