import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";

const ffmpegBin = ffmpegPath || "ffmpeg";

const SCRIPT_SECTIONS = [
  {
    act: "Act 1",
    scene: "Scene 1: The Prompt Illusion",
    text: "Most people still believe artificial intelligence is just a chatbot waiting for your prompt. You type a question into a text box, it predicts the next token, and gives you a clean paragraph. But inside top engineering labs, that era is already over. In 2026, the entire industry quietly abandoned simple chat interfaces. We stopped obsessing over bigger frontier models, and started building autonomous machines that do not just talk, but execute."
  },
  {
    act: "Act 1",
    scene: "Scene 2: The Three-Tier Paradigm Shift",
    text: "There is a massive tectonic shift happening right now between three fundamentally different architectures: Generative AI, AI Agents, and Agentic Systems. If you do not understand the mechanics separating these three tiers, you are building for an AI landscape that no longer exists."
  },
  {
    act: "Act 2",
    scene: "Scene 3: Generative AI - The Isolated Brain",
    text: "Let us break down layer one: Generative AI. At its core, Generative AI is purely reactive. Think of it as a brilliant, isolated brain locked in a dark room. It has ingested trillions of parameters of human knowledge. When you ask it to write a Python script, summarize a legal contract, or design a user interface, it calculates mathematical probabilities to produce the most statistically accurate next token."
  },
  {
    act: "Act 2",
    scene: "Scene 4: The Zero-Action Ceiling",
    text: "But notice what Generative AI cannot do. It cannot check if the code actually runs. It cannot open your terminal, test a database connection, or read a live server log. Once it outputs text on your screen, its job is completely finished. It has zero agency, zero real-time memory, and zero capability to interact with the physical or digital world. Generative AI is a brilliant creator, but it is completely helpless on its own."
  },
  {
    act: "Act 3",
    scene: "Scene 5: AI Agents - The Tool-Wielding Doer",
    text: "That fundamental limitation forced the birth of layer two: AI Agents. An AI Agent takes that raw neural network and equips it with hands, eyes, and tools. Instead of merely answering questions, an agent is given a specific objective, a loop of execution, and direct access to external tools through function calling and APIs."
  },
  {
    act: "Act 3",
    scene: "Scene 6: Real-World Function Calling",
    text: "When you tell an AI Agent to find the lowest flight price to Tokyo and book the hotel, it does not just write advice. It triggers a function call to search live airline databases, parses the incoming JSON response, validates prices against your budget, and prepares a payment webhook. The AI transitions from a passive conversation partner into an active task execution worker."
  },
  {
    act: "Act 4",
    scene: "Scene 7: The Single-Loop Bottleneck",
    text: "Yet early AI agents hit a brutal production bottleneck: the single-loop failure. When a single model tries to plan, execute, debug, and verify simultaneously in one prompt loop, context windows quickly overflow, hallucinations compound exponentially, and the agent gets trapped in infinite retry loops. Beyond four or five consecutive steps, single-agent reliability drops by over sixty percent."
  },
  {
    act: "Act 5",
    scene: "Scene 8: Agentic AI & The Multi-Agent Swarm",
    text: "This brings us to layer three: Agentic AI. As revealed at LangChain's Interrupt 26 conference, modern production AI is no longer a single model in a loop. It is a structured graph of specialized micro-agents orchestrated by a thin supervisor. In an Agentic Architecture, you do not have one model doing everything. You have a Supervisor Agent that breaks complex requirements into directed acyclic graphs."
  },
  {
    act: "Act 5",
    scene: "Scene 9: Specialized Micro-Workers",
    text: "In this swarm, a Researcher Agent queries vector embeddings, a Coder Agent writes modular code inside sandboxed virtual environments, and a dedicated Critic Agent runs unit tests while inspecting for security vulnerabilities. If a test fails, the supervisor routes the exact stack trace back to the coder, iterating autonomously for hours without a single human keystroke."
  },
  {
    act: "Act 6",
    scene: "Scene 10: The Software Harness Moat",
    text: "This brings us to the most critical revelation of 2026: raw model intelligence is rapidly becoming commoditized. The real technological moat is the software harness. An open-source twenty-seven billion parameter model wrapped inside a stateful graph harness, with sandboxed execution and deterministic evaluation, routinely outperforms massive closed frontier models trapped inside a basic web UI."
  },
  {
    act: "Act 7",
    scene: "Scene 11: The 2027 Divergence & Systems Architecture",
    text: "By 2027, the artificial intelligence landscape will split into two primary paths: sub-second interactive voice agents handling real-time customer experiences, and deeply resilient, asynchronous multi-agent swarms running eight-hour engineering workflows. The era of prompt engineering is over. The era of systems architecture has begun."
  }
];

function splitIntoChunks(text, maxLen = 140) {
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
  console.log(" Generating 5-Minute Agentic AI Voiceover Audio");
  console.log("=================================================");

  const tempFiles = [];
  const publicDir = path.resolve("public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  for (let i = 0; i < SCRIPT_SECTIONS.length; i++) {
    const sec = SCRIPT_SECTIONS[i];
    console.log(`\n[${i + 1}/${SCRIPT_SECTIONS.length}] Processing ${sec.scene}...`);
    const chunks = splitIntoChunks(sec.text);
    
    for (let c = 0; c < chunks.length; c++) {
      const chunk = chunks[c];
      console.log(`  - Fetching chunk ${c + 1}/${chunks.length}: "${chunk.slice(0, 45)}..."`);
      
      let attempts = 0;
      let buf = null;
      while (attempts < 3) {
        try {
          buf = await fetchGoogleTTS(chunk);
          break;
        } catch (e) {
          attempts++;
          console.log(`    TTS Retry ${attempts}... (${e.message})`);
          await new Promise((r) => setTimeout(r, 1000));
        }
      }
      
      if (!buf) throw new Error(`Failed to fetch TTS for chunk: ${chunk}`);
      
      const chunkFile = path.resolve("public", `agentic_chunk_${i}_${c}.mp3`);
      fs.writeFileSync(chunkFile, buf);
      tempFiles.push(chunkFile);
      await new Promise((r) => setTimeout(r, 150));
    }
  }

  // Create concat file
  const concatPath = path.resolve("public", "agentic_tts_concat.txt");
  const concatBody = tempFiles.map((f) => `file '${f.replace(/\\/g, "/")}'`).join("\n");
  fs.writeFileSync(concatPath, concatBody, "utf-8");

  const finalVoiceoverWav = path.resolve("public", "voiceover_agentic.wav");
  const voiceover16kWav = path.resolve("public", "voiceover_agentic_16k.wav");

  console.log("\nMerging and mastering audio with FFmpeg...");
  
  // Concat and apply gentle compression + loudness normalization for documentary feel
  const resMerge = spawnSync(ffmpegBin, [
    "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", concatPath,
    "-af", "loudnorm=I=-16:TP=-1.5:LRA=11,atempo=1.02",
    "-ar", "44100",
    "-ac", "2",
    finalVoiceoverWav
  ], { stdio: "inherit" });

  if (resMerge.error) {
    console.error("FFmpeg merge error:", resMerge.error);
    process.exit(1);
  }

  console.log("Generating 16kHz mono audio for Whisper transcription...");
  spawnSync(ffmpegBin, [
    "-y",
    "-i", finalVoiceoverWav,
    "-ar", "16000",
    "-ac", "1",
    voiceover16kWav
  ], { stdio: "inherit" });

  // Clean up temporary chunks
  for (const f of tempFiles) {
    try { fs.unlinkSync(f); } catch {}
  }
  try { fs.unlinkSync(concatPath); } catch {}

  console.log("\n Voiceover generated successfully!");
  console.log("  -> Master Audio:", finalVoiceoverWav);
  console.log("  -> 16kHz Whisper Audio:", voiceover16kWav);
}

main().catch(console.error);
