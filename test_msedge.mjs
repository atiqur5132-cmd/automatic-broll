import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import fs from "fs";
import path from "path";

async function testTTS() {
  console.log("Testing MsEdgeTTS with en-US-ChristopherNeural...");
  const tts = new MsEdgeTTS();
  await tts.setMetadata("en-US-ChristopherNeural", OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

  const testText = "Welcome to the documentary. In today's deep dive, we are dissecting the real architecture behind next generation artificial intelligence models.";
  
  const outDir = path.resolve("public");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const res = await tts.toFile(outDir, testText, {
    rate: "-3%",
    pitch: "-2Hz"
  });

  console.log("Audio generated successfully at:", res.audioFilePath);
  const stats = fs.statSync(res.audioFilePath);
  console.log("File size:", stats.size, "bytes");
}

testTTS().catch(console.error);
