import fs from 'fs';

const data = JSON.parse(fs.readFileSync('transcript.json', 'utf8'));
let out = '';
data.transcription.forEach(t => {
    out += `[${t.timestamps.from} - ${t.timestamps.to}] ${t.text}\n`;
});
fs.writeFileSync('transcript.txt', out);
console.log('Done writing transcript.txt');
