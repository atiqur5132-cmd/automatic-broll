import fs from 'fs';
import path from 'path';

// Let's check audio files
const files = ['public/edited_audio.wav', 'public/voiceover_16k.wav', 'public/kimi audio.m4a'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    const stats = fs.statSync(f);
    console.log(`${f}: size = ${stats.size} bytes`);
  }
});
