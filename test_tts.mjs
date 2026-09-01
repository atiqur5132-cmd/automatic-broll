import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import ffmpegPath from "ffmpeg-static";

// Let's test Google Translate TTS
async function testGoogleTTS(text) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en-US&client=tw-ob`;
  const resp = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
  });
  if (!resp.ok) throw new Error(`Google TTS failed: ${resp.status}`);
  const buf = Buffer.from(await resp.arrayBuffer());
  return buf;
}

// Or Windows native SAPI / System.Speech
function generateWindowsTTS(text, outputPath) {
  const psScript = `
    Add-Type -AssemblyName System.Speech
    $synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
    $synth.Rate = 0
    $synth.Volume = 100
    $synth.SetOutputToWaveFile('${outputPath.replace(/'/g, "''")}')
    $synth.Speak('${text.replace(/'/g, "''")}')
    $synth.Dispose()
  `;
  const res = spawnSync("powershell", ["-Command", psScript], { encoding: "utf-8" });
  if (res.error) throw res.error;
  return fs.existsSync(outputPath);
}

async function main() {
  console.log("Testing Google TTS...");
  try {
    const buf = await testGoogleTTS("Testing Gemini 3.8 Flash voiceover.");
    fs.writeFileSync("public/test_google.mp3", buf);
    console.log("Google TTS Success!", buf.length, "bytes");
  } catch (e) {
    console.log("Google TTS error:", e.message);
  }

  console.log("Testing Windows Speech...");
  try {
    const ok = generateWindowsTTS("Testing Gemini 3.8 Flash voiceover.", path.resolve("public", "test_win.wav"));
    console.log("Windows Speech Success:", ok);
  } catch (e) {
    console.log("Windows Speech error:", e.message);
  }
}

main();
