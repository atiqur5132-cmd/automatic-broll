import fs from 'fs';

if (fs.existsSync('public/gemini_transcript.json')) {
  const content = JSON.parse(fs.readFileSync('public/gemini_transcript.json', 'utf8'));
  console.log('Gemini transcript sample:', JSON.stringify(content).slice(0, 300));
}

// Check duration of edited_audio.wav
const wavHeader = fs.readFileSync('public/edited_audio.wav').slice(0, 44);
const sampleRate = wavHeader.readUInt32LE(24);
const byteRate = wavHeader.readUInt32LE(28);
const dataSize = fs.statSync('public/edited_audio.wav').size - 44;
const durationSec = dataSize / byteRate;
console.log(`edited_audio.wav sampleRate=${sampleRate}, byteRate=${byteRate}, duration=${durationSec}s (${durationSec*30} frames)`);

// Check duration of voiceover_16k.wav
const wavHeader2 = fs.readFileSync('public/voiceover_16k.wav').slice(0, 44);
const byteRate2 = wavHeader2.readUInt32LE(28);
const dataSize2 = fs.statSync('public/voiceover_16k.wav').size - 44;
const durationSec2 = dataSize2 / byteRate2;
console.log(`voiceover_16k.wav byteRate=${byteRate2}, duration=${durationSec2}s (${durationSec2*30} frames)`);
