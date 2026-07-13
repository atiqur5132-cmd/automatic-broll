import fs from "fs";
import path from "path";

const inputPath = path.join("public", "gemini_35_leaks_transcript.json");
const outputPath = path.join("src", "data", "geminiLeaksTranscript.ts");

const raw = JSON.parse(fs.readFileSync(inputPath, "utf-8"));
const segments = raw.transcription.map((seg, i) => {
  const fromMs = seg.offsets.from;
  const toMs = seg.offsets.to;
  const fromFrame = Math.floor((fromMs / 1000) * 30);
  const toFrame = Math.ceil((toMs / 1000) * 30);
  return {
    id: i + 1,
    fromMs,
    toMs,
    fromFrame,
    toFrame,
    text: seg.text.trim(),
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

export const GEMINI_LEAKS_TRANSCRIPT: TranscriptSegment[] = ${JSON.stringify(segments, null, 2)};
`;

fs.writeFileSync(outputPath, tsContent, "utf-8");
console.log(`Generated ${outputPath} with ${segments.length} segments.`);
