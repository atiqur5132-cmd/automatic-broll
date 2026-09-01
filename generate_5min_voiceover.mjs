import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";

const ffmpegBin = ffmpegPath || "ffmpeg";

const ACTS = [
  {
    id: "act1",
    title: "The Sudden Shockwave & The Leaks",
    text: "Just when the developer ecosystem was beginning to digest the release of Gemini 3.7, Google has quietly prepared another massive shockwave. Reports circulating across the tech industry confirm that Gemini 3.8 Flash is not just in active development; it has already been compiled, deployed, and placed into internal testing ahead of a surprise public drop. For developers who thought the model cycle would settle down, this sudden revelation signals that the era of annual AI upgrades is officially over. Today, we are breaking down everything leaked about Google's next frontier model, from internal platform tests to architectural shifts that could redefine how we build software."
  },
  {
    id: "act2",
    title: "Inside Google's Secret Testing Platform Jetski",
    text: "The earliest traces of Gemini 3.8 Flash surfaced from an unexpected place: Google's proprietary internal development platform, known internally as Jetski. On Jetski, Google engineers have reportedly been running side-by-side evaluations against existing production models. Early employee feedback has been remarkably consistent. Rather than incremental benchmarking gains, users report noticeable jumps in raw execution speed, multi-turn reasoning consistency, and responsiveness. By testing the model directly on real-world engineering workflows inside Jetski, Google appears to be tuning 3.8 Flash specifically for continuous code synthesis and developer productivity before any public announcement."
  },
  {
    id: "act3",
    title: "The Technical Overhaul - Killing AI Slop & Latency",
    text: "To understand why Gemini 3.8 Flash matters, we have to examine where Gemini 3.7 Flash struggled. Despite impressive multimodal capabilities, users frequently complained about two critical bottlenecks: conversational verbosity, often termed AI slop, and unpredictable latency in automated agentic loops. In 3.8 Flash, Google's engineering team appears to have aggressively overhauled the decoding pipeline. By trimming unnecessary conversational filler and penalizing hallucinations during code generation, the model delivers concise, high-density outputs. For autonomous agent loops where every millisecond and token counts, this architectural focus directly translates to faster completions and lower compute overhead."
  },
  {
    id: "act4",
    title: "The 2026 AI Shipping War",
    text: "This rapid release cadence reveals a profound shift in Big Tech strategy. We are no longer witnessing a conventional research race; we are in the middle of a brutal, high-velocity shipping war. OpenAI has countered with its next-generation Astra models, while Anthropic continues to push the boundaries of reasoning with Fable 5.1. Google's response is a relentless monthly deployment tempo. By treating the Flash series as an agile, rapidly iterating product line rather than a static annual milestone, Google is applying unprecedented pressure on competitor margins and capturing developer mindshare before the competition can react."
  },
  {
    id: "act5",
    title: "Disrupting Token Economics & The Road to Gemini 4",
    text: "Perhaps the most disruptive aspect of Gemini 3.8 Flash is its aggressive unit economics. Industry insiders suggest that 3.8 Flash is targeted to achieve performance parity with Anthropic's flagship Fable 5, but at a fraction of the inference cost. If Google successfully delivers tier-one intelligence at sub-dollar per million token pricing, it will fundamentally rewrite the economics of AI software and high-volume agent swarms. As we look ahead to the eventual arrival of Gemini 4, Gemini 3.8 Flash proves that the real revolution isn't just bigger parameters; it is hyper-efficient intelligence made accessible at scale."
  }
];

async function main() {
  console.log("==================================================================");
  console.log(" Generating 5-Minute Studio Quality Neural Voiceover (MsEdgeTTS)");
  console.log("==================================================================");

  const tts = new MsEdgeTTS();
  await tts.setMetadata("en-US-ChristopherNeural", OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  const tempDir = path.resolve("public", "tts_5min_temp");
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const generatedFiles = [];

  for (let i = 0; i < ACTS.length; i++) {
    const act = ACTS[i];
    console.log(`\n[${i + 1}/${ACTS.length}] Synthesizing ${act.title}...`);
    
    // Generate audio for this act
    const actDir = path.resolve(tempDir, `act_${i + 1}`);
    if (!fs.existsSync(actDir)) fs.mkdirSync(actDir, { recursive: true });

    const res = await tts.toFile(actDir, act.text);
    console.log(`  -> Generated Act ${i + 1} MP3 (${(fs.statSync(res.audioFilePath).size / 1024).toFixed(1)} KB)`);
    generatedFiles.push(res.audioFilePath);
  }

  // Create concat file with subtle 0.4s natural breathing room between acts
  const concatPath = path.resolve(tempDir, "concat_list.txt");
  const concatBody = generatedFiles.map((f) => `file '${f.replace(/\\/g, "/")}'`).join("\n");
  fs.writeFileSync(concatPath, concatBody, "utf-8");

  const finalVoiceoverWav = path.resolve("public", "voiceover.wav");
  const voiceover16kWav = path.resolve("public", "voiceover_16k.wav");

  console.log("\nMerging and mastering into public/voiceover.wav...");
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

  console.log("Creating 16kHz mono public/voiceover_16k.wav for Whisper...");
  spawnSync(ffmpegBin, [
    "-y",
    "-i", finalVoiceoverWav,
    "-ar", "16000",
    "-ac", "1",
    voiceover16kWav
  ]);

  const stats = fs.statSync(finalVoiceoverWav);
  console.log(`\n✨ SUCCESS! 5-Minute Studio Voiceover Created.`);
  console.log(`Path: ${finalVoiceoverWav} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
}

main().catch(console.error);
