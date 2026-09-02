import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import ffmpegPath from "ffmpeg-static";

const ffmpegBin = ffmpegPath || "ffmpeg";
const wav16k = path.resolve("public", "voiceover_16k.wav");
const whisperExe = path.resolve("whisper", "main.exe");
const modelPath = path.resolve("whisper", "ggml-tiny.en.bin");

console.log("==================================================================");
console.log(" Transcribing VRAM Documentary Audio with Whisper...");
console.log("==================================================================");

// 1. Measure duration of each Act from the generated act audio files
const tempDir = path.resolve("public", "tts_vram_temp");
const actsMeta = JSON.parse(fs.readFileSync(path.resolve("src", "vramActsMetadata.json"), "utf-8"));

let accumulatedSeconds = 0;
const actTimings = [];

for (let i = 0; i < actsMeta.length; i++) {
  const actFile = path.resolve(tempDir, `act_${i + 1}`, "audio.mp3");
  
  // Use ffprobe or ffmpeg to get duration
  const probe = spawnSync(ffmpegBin, ["-i", actFile], { encoding: "utf-8" });
  const durMatch = (probe.stderr || "").match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/);
  
  let actDurationSec = 0;
  if (durMatch) {
    const hours = parseFloat(durMatch[1]);
    const mins = parseFloat(durMatch[2]);
    const secs = parseFloat(durMatch[3]);
    actDurationSec = hours * 3600 + mins * 60 + secs;
  } else {
    // fallback estimate: ~96kbps
    const size = fs.statSync(actFile).size;
    actDurationSec = size / 12000;
  }

  const startSec = accumulatedSeconds;
  accumulatedSeconds += actDurationSec;
  const endSec = accumulatedSeconds;

  actTimings.push({
    id: actsMeta[i].id,
    title: actsMeta[i].title,
    durationSec: actDurationSec,
    startFrame: Math.floor(startSec * 30),
    endFrame: Math.ceil(endSec * 30),
    durationFrames: Math.ceil(actDurationSec * 30)
  });
}

console.log("Act Timings:", JSON.stringify(actTimings, null, 2));

// 2. Run Whisper on the full audio
const whisperRes = spawnSync(whisperExe, [
  "-m", modelPath,
  "-f", wav16k,
  "-oj",
  "-of", path.resolve("public", "vram_transcript"),
  "-osrt",
  "-ovtt"
], { stdio: "inherit" });

const transcriptJsonPath = path.resolve("public", "vram_transcript.json");
let subtitles = [];
if (fs.existsSync(transcriptJsonPath)) {
  const transcriptData = JSON.parse(fs.readFileSync(transcriptJsonPath, "utf-8"));
  
  const parseTime = (tStr) => {
    if (!tStr) return 0;
    const [hms, ms] = tStr.split(",");
    const [h, m, s] = hms.split(":").map(Number);
    return (h * 3600 + m * 60 + s) * 1000 + Number(ms || 0);
  };

  subtitles = (transcriptData.transcription || []).map((seg, idx) => {
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
}

// Get final master voiceover duration
const probeMaster = spawnSync(ffmpegBin, ["-i", path.resolve("public", "voiceover.wav")], { encoding: "utf-8" });
const masterMatch = (probeMaster.stderr || "").match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/);
let totalMasterSec = accumulatedSeconds;
if (masterMatch) {
  totalMasterSec = parseFloat(masterMatch[1]) * 3600 + parseFloat(masterMatch[2]) * 60 + parseFloat(masterMatch[3]);
}
const totalFrames = Math.ceil(totalMasterSec * 30);

console.log(`\n✨ TOTAL MASTER DURATION: ${totalMasterSec.toFixed(2)}s -> ${totalFrames} frames @ 30fps`);

const syncPayload = {
  totalDurationSec: totalMasterSec,
  totalFrames,
  actTimings,
  subtitles
};

fs.writeFileSync(path.resolve("src", "vramSyncData.json"), JSON.stringify(syncPayload, null, 2), "utf-8");
console.log("Saved master sync payload to src/vramSyncData.json");
