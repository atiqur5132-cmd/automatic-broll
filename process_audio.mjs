import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

// Find default wav file in public folder if not provided
function getDefaultInputFile() {
  if (process.argv[2]) return process.argv[2];
  const pubDir = path.resolve('public');
  if (fs.existsSync(pubDir)) {
    const files = fs.readdirSync(pubDir);
    const elevenLabs = files.find(f => f.startsWith('ElevenLabs') && f.endsWith('.wav'));
    if (elevenLabs) return elevenLabs;
    const anyWav = files.find(f => f.endsWith('.wav') && !['edited_audio.wav', 'voiceover.wav', 'voiceover16k.wav'].includes(f));
    if (anyWav) return anyWav;
  }
  return 'ElevenLabs_2026-07-11T15_13_25__s100_v3.wav';
}

const inputFileName = getDefaultInputFile();
const inputPath = path.resolve('public', inputFileName);
const outputPath = path.resolve('public', 'edited_audio.wav');

const ffmpegBin = ffmpegPath || 'ffmpeg';

console.log('====================================================');
console.log('Audio Silence Cutter (Threshold: > 0.6 seconds)');
console.log('====================================================');
console.log('Input file:', inputPath);
console.log('Output file:', outputPath);
console.log('FFmpeg binary:', ffmpegBin);

if (!fs.existsSync(inputPath)) {
  console.error('Error: Input file not found:', inputPath);
  process.exit(1);
}

// Step 1: Detect silence > 0.6 seconds at -40dB
console.log('\n[Step 1] Detecting silent gaps > 0.6 seconds...');
const detectArgs = [
  '-i', inputPath,
  '-af', 'silencedetect=noise=-40dB:d=0.6',
  '-f', 'null',
  '-'
];

const detectProc = spawnSync(ffmpegBin, detectArgs, { encoding: 'utf-8' });
const stderr = detectProc.stderr || '';

// Parse silence_start and silence_end
const silenceStarts = [];
const silenceEnds = [];

const startRegex = /silence_start:\s*([0-9.]+)/g;
const endRegex = /silence_end:\s*([0-9.]+)\s*\|\s*silence_duration:\s*([0-9.]+)/g;

let match;
while ((match = startRegex.exec(stderr)) !== null) {
  silenceStarts.push(parseFloat(match[1]));
}
while ((match = endRegex.exec(stderr)) !== null) {
  silenceEnds.push({
    end: parseFloat(match[1]),
    duration: parseFloat(match[2])
  });
}

// Also get total duration of the input audio
let totalDuration = null;
const durationMatch = /Duration:\s*([0-9]{2}):([0-9]{2}):([0-9]{2}\.[0-9]+)/.exec(stderr);
if (durationMatch) {
  const hours = parseFloat(durationMatch[1]);
  const mins = parseFloat(durationMatch[2]);
  const secs = parseFloat(durationMatch[3]);
  totalDuration = hours * 3600 + mins * 60 + secs;
}

console.log(`Total Original Duration: ${totalDuration ? totalDuration.toFixed(2) + 's' : 'Unknown'}`);
console.log(`Detected ${silenceEnds.length} silent gap(s) > 0.6s.`);

if (silenceEnds.length === 0) {
  console.log('\nNo gaps longer than 0.6s detected at -40dB threshold.');
  console.log('Copying original file to output...');
  fs.copyFileSync(inputPath, outputPath);
  process.exit(0);
}

// Print detected silences
console.log('\nDetected Gaps (> 0.6s):');
for (let i = 0; i < silenceEnds.length; i++) {
  const start = silenceStarts[i] ?? 0;
  const { end, duration } = silenceEnds[i];
  console.log(`  Gap #${i + 1}: ${start.toFixed(2)}s -> ${end.toFixed(2)}s (Duration: ${duration.toFixed(2)}s)`);
}

// Step 2: Build non-silent segments
// We keep a tiny safety padding (e.g. 0.05s) around cuts so speech doesn't sound abruptly clipped
const padding = 0.05;
const segments = [];
let currentPos = 0;

for (let i = 0; i < silenceEnds.length; i++) {
  const silStart = silenceStarts[i];
  const silEnd = silenceEnds[i].end;

  const segEnd = Math.max(currentPos, silStart + padding);
  if (segEnd - currentPos > 0.05) {
    segments.push({ start: currentPos, end: segEnd });
  }
  currentPos = Math.max(currentPos, silEnd - padding);
}

if (totalDuration && totalDuration - currentPos > 0.05) {
  segments.push({ start: currentPos, end: totalDuration });
} else if (!totalDuration) {
  // If totalDuration unknown, read until end
  segments.push({ start: currentPos, end: null });
}

console.log('\n[Step 2] Non-silent speech segments to keep:');
segments.forEach((seg, idx) => {
  console.log(`  Speech #${idx + 1}: ${seg.start.toFixed(2)}s -> ${seg.end ? seg.end.toFixed(2) + 's' : 'End'}`);
});

// Step 3: Use FFmpeg filter complex to concatenate segments smoothly
console.log('\n[Step 3] Cutting gaps and merging speech segments...');

// Build filter complex string
// Example: [0:a]atrim=start=0:end=2.1,asetpts=PTS-STARTPTS[a0]; ... [a0][a1]concat=n=2:v=0:a=1[out]
let filterParts = [];
let concatInputs = '';

segments.forEach((seg, idx) => {
  let trimFilter = `[0:a]atrim=start=${seg.start.toFixed(3)}`;
  if (seg.end !== null) {
    trimFilter += `:end=${seg.end.toFixed(3)}`;
  }
  trimFilter += `,asetpts=PTS-STARTPTS[a${idx}]`;
  filterParts.push(trimFilter);
  concatInputs += `[a${idx}]`;
});

filterParts.push(`${concatInputs}concat=n=${segments.length}:v=0:a=1[out]`);
const filterComplex = filterParts.join(';');

const cutArgs = [
  '-y',
  '-i', inputPath,
  '-filter_complex', filterComplex,
  '-map', '[out]',
  outputPath
];

const cutProc = spawnSync(ffmpegBin, cutArgs, { stdio: 'inherit' });

if (cutProc.status !== 0) {
  console.error('Error cutting audio. FFmpeg exited with status:', cutProc.status);
  process.exit(1);
}

fs.copyFileSync(outputPath, path.resolve('public', 'voiceover.wav'));

console.log('\n====================================================');
console.log('SUCCESS! Edited audio saved to:', outputPath);
console.log('SUCCESS! Updated voiceover.wav as well.');
console.log('====================================================');
