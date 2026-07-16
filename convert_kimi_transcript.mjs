import fs from "fs";
import path from "path";

const inputPath = path.join("public", "gemini_transcript.json");
const outputPath = path.join("src", "data", "kimiTranscript.ts");

const raw = JSON.parse(fs.readFileSync(inputPath, "utf-8"));
const segments = raw.transcription.map((seg, i) => {
  const fromMs = seg.offsets.from;
  const toMs = seg.offsets.to;
  const fromFrame = Math.floor((fromMs / 1000) * 30);
  const toFrame = Math.ceil((toMs / 1000) * 30);
  
  // Clean up Whisper transcription errors for display
  let cleanText = seg.text.trim();
  cleanText = cleanText.replace(/\bKime\b/g, "Kimi");
  cleanText = cleanText.replace(/\bKime's\b/g, "Kimi's");
  cleanText = cleanText.replace(/\bchitacula\b/gi, "Chetaslua");
  cleanText = cleanText.replace(/\bchitacula on X\b/gi, "@chetaslua on X");

  return {
    id: i + 1,
    fromMs,
    toMs,
    fromFrame,
    toFrame,
    text: cleanText,
  };
});

const tsContent = `export interface TranscriptSegment {
  id: number;
  fromMs: number;
  toMs: number;
  fromFrame: number;
  toFrame: number;
  text: string;
}

export const KIMI_K3_TRANSCRIPT: TranscriptSegment[] = ${JSON.stringify(segments, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log(`Generated ${outputPath} with ${segments.length} segments.`);
