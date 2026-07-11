import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

const mainExe = path.resolve("whisper", "main.exe");
const modelPath = path.resolve("whisper", "ggml-tiny.en.bin");
const audioPath = path.resolve("public", "edited_audio.wav");

console.log("Transcribing", audioPath, "...");
const res = spawnSync(mainExe, [
  "-m", modelPath,
  "-f", audioPath,
  "-oj",
  "-of", path.resolve("public", "gemini_transcript")
], { encoding: "utf-8" });

console.log("Stdout:", res.stdout ? res.stdout.slice(0, 500) : "none");
console.log("Stderr:", res.stderr ? res.stderr.slice(-500) : "none");

if (fs.existsSync(path.resolve("public", "gemini_transcript.json"))) {
  console.log("Transcript saved successfully!");
} else {
  console.log("Failed to create transcript JSON.");
}
