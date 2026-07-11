import fs from "fs";
import path from "path";

const jsonPath = path.resolve("public", "gemini_transcript.json");
const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
const segments = data.transcription || [];

// Let's print out all segments so we can inspect every timestamp and sentence accurately
console.log("=== FULL TRANSCRIPT TIMESTAMPS ===");
segments.forEach((seg, i) => {
  console.log(`${String(i).padStart(3, ' ')} | [${seg.timestamps.from} -> ${seg.timestamps.to}] | ${seg.text.trim()}`);
});
