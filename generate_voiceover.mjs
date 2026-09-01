import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";

const ffmpegBin = ffmpegPath || "ffmpeg";

const SCRIPT_SECTIONS = [
  {
    scene: "Scene 1: Sudden Leak",
    text: "Gemini 3.7 barely had time to settle, and Google is already preparing to drop another massive shockwave. Internal leaks confirm that Gemini 3.8 Flash is already deployed and undergoing aggressive testing."
  },
  {
    scene: "Scene 2: Jetski Platform",
    text: "Spotted on Google's internal development platform Jetski, employees report early preview builds are noticeably faster and far more capable than 3.7 Flash."
  },
  {
    scene: "Scene 3: Anti-Slop & Agentic Speed",
    text: "Google's engineering team focused heavily on eliminating conversational AI slop, cutting coding hallucinations, and driving agentic latency down to near zero."
  },
  {
    scene: "Scene 4: The Titan Shipping War",
    text: "This is no longer a traditional benchmark race. It is a relentless shipping war against OpenAI's Astra and Anthropic's Fable 5.1, with Google deploying monthly flash updates."
  },
  {
    scene: "Scene 5: Economics & Disruption",
    text: "With rumors suggesting Fable 5-level performance at a fraction of the cost, Gemini 3.8 Flash is set to rewrite AI token economics before Gemini 4 even arrives."
  }
];

function splitIntoChunks(text, maxLen = 150) {
  const words = text.split(" ");
  const chunks = [];
  let current = [];

  for (const word of words) {
    if ((current.join(" ") + " " + word).length > maxLen) {
      chunks.push(current.join(" "));
      current = [word];
    } else {
      current.push(word);
    }
  }
  if (current.length > 0) chunks.push(current.join(" "));
  return chunks;
}

async function fetchGoogleTTS(chunk) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk)}&tl=en-US&client=tw-ob`;
  const resp = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    }
  });
  if (!resp.ok) throw new Error(`Google TTS Error: ${resp.status}`);
  return Buffer.from(await resp.arrayBuffer());
}

async function main() {
  console.log("=================================================");
  console.log(" Generating English AI Documentary Voiceover");
  console.log("=================================================");

  const tempFiles = [];

  for (let i = 0; i < SCRIPT_SECTIONS.length; i++) {
    const sec = SCRIPT_SECTIONS[i];
    console.log(`\n[${i + 1}/${SCRIPT_SECTIONS.length}] Processing ${sec.scene}...`);
    const chunks = splitIntoChunks(sec.text);
    
    for (let c = 0; c < chunks.length; c++) {
      const chunk = chunks[c];
      console.log(`  - Fetching TTS chunk: "${chunk.slice(0, 40)}..."`);
      const buf = await fetchGoogleTTS(chunk);
      const chunkFile = path.resolve("public", `chunk_${i}_${c}.mp3`);
      fs.writeFileSync(chunkFile, buf);
      tempFiles.push(chunkFile);
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  // Create concat file
  const concatPath = path.resolve("public", "tts_concat.txt");
  const concatBody = tempFiles.map((f) => `file '${f.replace(/\\/g, "/")}'`).join("\n");
  fs.writeFileSync(concatPath, concatBody, "utf-8");

  const rawMergedWav = path.resolve("public", "raw_merged.wav");
  const finalVoiceoverWav = path.resolve("public", "voiceover.wav");
  const voiceover16kWav = path.resolve("public", "voiceover_16k.wav");

  console.log("\nMerging and mastering audio with FFmpeg...");
  // Concat and apply gentle compression + loudness normalization for documentary feel
  spawnSync(ffmpegBin, [
    "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", concatPath,
    "-af", "loudnorm=I=-16:TP=-1.5:LRA=11,atempo=1.05",
    "-ar", "44100",
    "-ac", "2",
    finalVoiceoverWav
  ]);

  console.log("Generating 16kHz mono WAV for Whisper transcription...");
  spawnSync(ffmpegBin, [
    "-y",
    "-i", finalVoiceoverWav,
    "-ar", "16000",
    "-ac", "1",
    voiceover16kWav
  ]);

  // Clean up chunks
  tempFiles.forEach((f) => { if (fs.existsSync(f)) fs.unlinkSync(f); });
  if (fs.existsSync(concatPath)) fs.unlinkSync(concatPath);
  if (fs.existsSync(rawMergedWav)) fs.unlinkSync(rawMergedWav);

  const stats = fs.statSync(finalVoiceoverWav);
  console.log(`\n✅ VOICE OVER GENERATED SUCCESSFULLY!`);
  console.log(`Path: ${finalVoiceoverWav} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
}

main().catch(console.error);
