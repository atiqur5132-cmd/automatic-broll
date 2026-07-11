import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import ffmpegPath from "ffmpeg-static";

const ffmpegBin = ffmpegPath || "ffmpeg";
const srcAudio = path.resolve("public", "edited_audio.wav");
const targetAudio = path.resolve("public", "voiceover.wav");

console.log("Trimming audio to exactly 261.00 seconds (04:21.00)...");
if (fs.existsSync(targetAudio)) fs.unlinkSync(targetAudio);

// -t 261 trims the audio to exactly 261 seconds (end of narration "defining Google's AI year.")
spawnSync(ffmpegBin, [
  "-y",
  "-i", srcAudio,
  "-t", "261.00",
  "-c:a", "pcm_s16le",
  "-ar", "48000",
  "-ac", "2",
  targetAudio
], { stdio: "inherit" });

const stats = fs.statSync(targetAudio);
console.log(`voiceover.wav created successfully (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
