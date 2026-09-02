import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";

const ffmpegBin = ffmpegPath || "ffmpeg";

const ACTS = [
  {
    id: "act1",
    title: "A1 · THE 40-YEAR LAW & THE VRAM WALL",
    text: "For forty years, every computer chip on Earth followed one rigid mathematical law: machine learning requires floating-point matrix multiplication. That single assumption built Nvidia’s three-trillion-dollar empire, locked local models behind twenty-four gigabytes of VRAM, and convinced the world that running frontier intelligence at home was hardware impossible. Until now. A radical architectural breakthrough called 1-bit Ternary quantization just deleted multiplication from neural networks entirely. Instead of massive 16-bit weight matrices, the weights only exist in three states: minus one, zero, and plus one. No floating-point units. No molten thermal throttling. And suddenly, a seventy-billion-parameter reasoning model that once choked a two-thousand-dollar GPU can run silently on a four-hundred-dollar laptop. Here is the hidden architecture that just broke the hardware wall."
  },
  {
    id: "act2",
    title: "A2 · THE TERNARY BREAKTHROUGH - DELETING MULTIPLICATION",
    text: "To understand why this breaks the paradigm, we have to look at what GPUs actually do during inference. In standard FP16 transformer models, every single forward pass requires multiplying floating-point numbers billions of times per second. Multipliers are silicon-hungry monsters. They demand massive physical die space, draw enormous wattage, and generate immense heat. But researchers behind BitNet b1.58 asked a fundamental question: what if we restrict weights to a ternary set, {-1, 0, +1}? In ternary math, multiplying an activation by minus one is just a sign flip. Multiplying by zero is zero. And multiplying by plus one is the value itself. Multiplication is completely eradicated. The entire matrix multiplication engine collapses into pure addition. And addition requires a fraction of the silicon area and less than one tenth of the energy."
  },
  {
    id: "act3",
    title: "A3 · THE MEMORY BUS BOTTLENECK",
    text: "Here is the industry secret that Nvidia rarely highlights: modern LLM inference is not compute-bound; it is memory bandwidth-bound. When you run a 70-billion parameter model, your processor spends most of its clock cycles sitting idle, desperately waiting for billions of 16-bit weights to travel across the memory bus from VRAM into the compute cores. At 16 bits per parameter, a 70B model demands over 140 gigabytes of memory transfer just to spit out a single token. That is why an RTX 4090 with 24 gigabytes of VRAM instantly crashes with an Out Of Memory error. But at 1.58 bits, that same 70-billion parameter model compresses into less than 15 gigabytes. Suddenly, the entire model fits comfortably inside consumer unified memory, and memory bus pressure drops by nearly ninety percent."
  },
  {
    id: "act4",
    title: "A4 · BENCHMARK WARS & HARDWARE REALITY",
    text: "The immediate counterargument was obvious: won’t crushing weights down to ternary states destroy model intelligence? The empirical benchmark results shocked the AI community. Across massive datasets, BitNet b1.58 models achieve near-identical perplexity and task accuracy compared to full-precision FP16 baselines. But look at the hardware reality. On standard CPU hardware, BitNet delivers up to a four-fold speedup in token generation, with some implementations hitting over 80 tokens per second on an Apple M-series chip. Devices that previously couldn’t load a 14-billion parameter model can now execute complex multi-step reasoning workflows without a dedicated discrete graphics card."
  },
  {
    id: "act5",
    title: "A5 · THE POST-NVIDIA ERA & LOCAL SWARMS",
    text: "This shift changes the geopolitical and economic landscape of artificial intelligence. If high-tier intelligence can run on sub-watt silicon using pure integer addition, the datacenter monopoly loses its moat. We are transitioning from an era of centralized server farms charging per token to local, sovereign intelligence running continuously on personal devices, robotics, and edge hardware. The future of AI is not about building bigger nuclear-powered datacenters. It is about architectural efficiency. And the math has already won."
  }
];

async function generateFullVoiceover() {
  console.log("==================================================================");
  console.log(" Synthesizing Full Documentary Voiceover (en-US-ChristopherNeural)");
  console.log("==================================================================");

  const tts = new MsEdgeTTS();
  await tts.setMetadata("en-US-ChristopherNeural", OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  const tempDir = path.resolve("public", "tts_vram_temp");
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const generatedFiles = [];

  for (let i = 0; i < ACTS.length; i++) {
    const act = ACTS[i];
    console.log(`\n[${i + 1}/${ACTS.length}] Synthesizing: ${act.title}...`);

    const actDir = path.resolve(tempDir, `act_${i + 1}`);
    if (!fs.existsSync(actDir)) fs.mkdirSync(actDir, { recursive: true });

    const res = await tts.toFile(actDir, act.text, {
      rate: "-3%",
      pitch: "-2Hz"
    });

    console.log(`  -> Act ${i + 1} MP3 generated: ${res.audioFilePath} (${(fs.statSync(res.audioFilePath).size / 1024).toFixed(1)} KB)`);
    generatedFiles.push(res.audioFilePath);
  }

  // Create concat list with natural 0.4s breathing room between acts
  const concatPath = path.resolve(tempDir, "concat_list.txt");
  const concatContent = generatedFiles.map(f => `file '${f.replace(/\\/g, "/")}'`).join("\n");
  fs.writeFileSync(concatPath, concatContent, "utf-8");

  const finalVoiceoverWav = path.resolve("public", "voiceover.wav");
  const voiceover16kWav = path.resolve("public", "voiceover_16k.wav");

  console.log("\nMastering audio with EBU R128 Loudness Normalization (loudnorm=I=-16:TP=-1.5:LRA=11)...");
  spawnSync(ffmpegBin, [
    "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", concatPath,
    "-af", "loudnorm=I=-16:TP=-1.5:LRA=11,atempo=1.0",
    "-ar", "44100",
    "-ac", "2",
    finalVoiceoverWav
  ]);

  console.log("Generating 16kHz mono audio for Whisper word-level alignment...");
  spawnSync(ffmpegBin, [
    "-y",
    "-i", finalVoiceoverWav,
    "-ar", "16000",
    "-ac", "1",
    voiceover16kWav
  ]);

  const stats = fs.statSync(finalVoiceoverWav);
  console.log("\n==================================================================");
  console.log(`✨ FULL MASTER VOICEOVER CREATED: ${finalVoiceoverWav}`);
  console.log(`   Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  console.log("==================================================================");

  // Also write acts metadata for Remotion scene sync
  fs.writeFileSync(
    path.resolve("src", "vramActsMetadata.json"),
    JSON.stringify(ACTS, null, 2),
    "utf-8"
  );
  console.log("Saved act metadata to src/vramActsMetadata.json");
}

generateFullVoiceover().catch(console.error);
