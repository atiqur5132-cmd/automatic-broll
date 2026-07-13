import fs from "fs";
import path from "path";

const transcriptPath = path.join("public", "gemini_35_leaks_transcript.json");
const data = JSON.parse(fs.readFileSync(transcriptPath, "utf-8"));

console.log("Total Segments:", data.transcription.length);
const lastSeg = data.transcription[data.transcription.length - 1];
const totalMs = lastSeg.offsets.to;
const fps = 30;
const totalFrames = Math.ceil((totalMs / 1000) * fps) + 30; // +1s padding at end

console.log(`Total duration ms: ${totalMs} ms (${(totalMs/1000).toFixed(2)}s)`);
console.log(`Total frames at 30fps: ${totalFrames}`);
