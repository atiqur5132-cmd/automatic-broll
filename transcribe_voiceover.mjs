import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

const wav16k = path.resolve("public", "voiceover_16k.wav");
const whisperExe = path.resolve("whisper", "main.exe");
const modelPath = path.resolve("whisper", "ggml-tiny.en.bin");

console.log("Transcribing", wav16k, "with Whisper...");
const res = spawnSync(whisperExe, [
  "-m", modelPath,
  "-f", wav16k,
  "-oj",
  "-of", path.resolve("public", "gemini_transcript"),
  "-osrt",
  "-ovtt"
], { stdio: "inherit" });

if (res.status !== 0) {
  console.error("Whisper execution failed with status", res.status);
  process.exit(1);
}

const transcriptJsonPath = path.resolve("public", "gemini_transcript.json");
if (!fs.existsSync(transcriptJsonPath)) {
  console.error("Transcript file not found:", transcriptJsonPath);
  process.exit(1);
}

const transcriptData = JSON.parse(fs.readFileSync(transcriptJsonPath, "utf-8"));
console.log("\n=== Transcription Results ===");
console.log("Transcription segments:", transcriptData.transcription?.length || 0);

// Also format into src/subtitles.json for Remotion
const subtitles = (transcriptData.transcription || []).map((seg, idx) => {
  // convert timestamp strings "00:00:01,000" to ms
  const parseTime = (tStr) => {
    if (!tStr) return 0;
    const [hms, ms] = tStr.split(",");
    const [h, m, s] = hms.split(":").map(Number);
    return (h * 3600 + m * 60 + s) * 1000 + Number(ms || 0);
  };

  const startMs = parseTime(seg.timestamps?.from);
  const endMs = parseTime(seg.timestamps?.to);

  return {
    id: idx + 1,
    text: (seg.text || "").trim(),
    startMs,
    endMs,
    startFrame: Math.floor((startMs / 1000) * 30),
    endFrame: Math.ceil((endMs / 1000) * 30)
  };
});

fs.writeFileSync(path.resolve("src", "subtitles.json"), JSON.stringify(subtitles, null, 2), "utf-8");
console.log(`Saved ${subtitles.length} subtitle segments to src/subtitles.json`);

// Calculate total duration
const totalDurationSec = subtitles.length > 0 ? subtitles[subtitles.length - 1].endMs / 1000 : 0;
console.log(`Total Audio Duration: ${totalDurationSec.toFixed(2)}s (${Math.ceil(totalDurationSec * 30)} frames @ 30fps)`);
