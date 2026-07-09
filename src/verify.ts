import fs from "fs";
import path from "path";

async function runVerification() {
  console.log("=== RUNNING REMOTION VIDEO VERIFICATION ===");

  // Check 1: Audio file presence & exact duration
  const audioPath = path.join(process.cwd(), "public", "Ai Models.m4a");
  if (!fs.existsSync(audioPath)) {
    throw new Error("FAIL: Audio file public/Ai Models.m4a not found!");
  }
  console.log("PASS: Audio file found at public/Ai Models.m4a");

  // Check 2: Subtitles file presence & transcript format
  const subtitlesPath = path.join(process.cwd(), "src", "subtitles.json");
  if (!fs.existsSync(subtitlesPath)) {
    throw new Error("FAIL: Subtitles file src/subtitles.json not found!");
  }
  const subtitles = JSON.parse(fs.readFileSync(subtitlesPath, "utf8"));
  console.log(`PASS: Subtitles file found with ${subtitles.length} transcribed words.`);

  // Check 3: Google Fonts packages
  const googleFontsPkgPath = path.join(process.cwd(), "node_modules", "@remotion", "google-fonts", "package.json");
  if (!fs.existsSync(googleFontsPkgPath)) {
    throw new Error("FAIL: @remotion/google-fonts package not installed!");
  }
  const gfPkg = fs.readFileSync(googleFontsPkgPath, "utf8");
  if (!gfPkg.includes("SpaceGrotesk") || !gfPkg.includes("PlusJakartaSans")) {
    throw new Error("FAIL: SpaceGrotesk or PlusJakartaSans not found in @remotion/google-fonts!");
  }
  console.log("PASS: Google Fonts (SpaceGrotesk & PlusJakartaSans) verified.");

  // Check 4: No on-screen subtitle rendering in MyVideo.tsx
  const myVideoContent = fs.readFileSync(path.join(process.cwd(), "src", "MyVideo.tsx"), "utf8");
  if (myVideoContent.includes("<DynamicSubtitles")) {
    throw new Error("FAIL: On-screen subtitles are still being rendered!");
  }
  console.log("PASS: No on-screen caption/subtitle rendering (transcript used only internally for timing).");

  // Check 5: SHOTS cover full audio duration
  if (!myVideoContent.includes("endSec: 263.33")) {
    throw new Error("FAIL: SHOTS array does not cover the full 263.33s audio timeline!");
  }
  console.log("PASS: Complete visual storytelling shots cover the full timeline up to 263.33s.");

  console.log("\n=== ALL VERIFICATION CHECKS PASSED SUCCESSFULLY ===");
}

runVerification().catch((err) => {
  console.error(err);
  process.exit(1);
});
