import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";
import fs from "fs";
import path from "path";

const inputAudio = path.join("public", "Voiceover Audio.m4a");
const editedWav = path.join("public", "edited_audio.wav");
const wav16k = path.join("public", "voiceover_16k.wav");

console.log("1. Converting 'Voiceover Audio.m4a' to 'public/edited_audio.wav' (No silence trimming)...");
const res1 = spawnSync(ffmpegPath, [
  "-y",
  "-i", inputAudio,
  "-ar", "44100",
  "-ac", "2",
  editedWav
], { stdio: "inherit" });

if (res1.status !== 0) {
  console.error("Error converting to edited_audio.wav");
  process.exit(1);
}

console.log("2. Converting to 16kHz mono 'public/voiceover_16k.wav' for Whisper...");
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

console.log("3. Running Whisper transcription to public/gemini_transcript.json...");
const whisperExe = path.join("whisper", "main.exe");
const modelPath = path.join("whisper", "ggml-tiny.en.bin");

const res3 = spawnSync(whisperExe, [
  "-m", modelPath,
  "-f", wav16k,
  "-ml", "80",
  "-of", path.join("public", "gemini_transcript"),
  "-oj"
], { stdio: "inherit" });

if (res3.status !== 0) {
  console.error("Error running whisper transcription");
  process.exit(1);
}

console.log("SUCCESS! Transcription completed and saved to public/gemini_transcript.json.");
