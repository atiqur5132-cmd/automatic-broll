import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

const inputPath = path.resolve('public', 'edited_audio.wav');
const ffmpegBin = ffmpegPath || 'ffmpeg';

const res = spawnSync(ffmpegBin, ['-i', inputPath], { encoding: 'utf-8' });
console.log(res.stderr.split('\n').filter(line => line.includes('Duration') || line.includes('Audio')).join('\n'));
