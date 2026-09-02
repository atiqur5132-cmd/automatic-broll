---
name: ai-documentary-production-workflow
description: End-to-end workflow for producing cinematic AI documentary and B-roll videos in Remotion from X posts, website links, or raw voiceovers. Includes deep research, script generation, link-to-visual mapping, audio sync, real brand logos, 2.5D parallax camera, Vox-style 3D inspection, and automated GitHub rendering.
metadata:
  tags: remotion, documentary, workflow, x-posts, web-research, audio-sync, real-logos, parallax, github-actions
---

# AI Documentary & Cinematic Video Production Workflow

Follow this mandatory pipeline whenever producing or updating Remotion videos:

## 1. Deep Web/X Research & High-Retention Hook Scriptwriting
- When research material (X posts, articles, benchmarks) is provided:
  1. Extract the core revelation, technical contradictions, raw metrics, and architectural shift.
  2. **Mandatory Cold-Open Hook Formula (First 0-15s)**:
     - **Strict Zero-Filler Rule**: NEVER start with "Welcome back", "In this video", "Today we will explore", or conversational pleasantries.
     - **Sentence 1 (Immediate Disruption)**: Drop the viewer directly into the conflict or paradigm shift (e.g. *"What you are looking at is not another incremental benchmark leak. It is the architectural shift that just killed the VRAM bottleneck."*).
     - **Sentence 2 (The Hidden Stake)**: State the massive implication for the viewer or industry within 8 seconds.
     - **Sentence 3 (The Roadmap)**: Tease the non-obvious revelation they can't afford to miss.
  3. **Pacing & Information Density**: High-retention technical storytelling inspired by Kai Explains & Vox. Short, punchy sentences interspersed with authoritative deep dives.
  4. **Link-to-Visual Mapping**: Map every technical statement directly to the visual storyboard with source tweet/article links.

## 2. Voiceover Studio Synthesis & Broadcast Mastering
1. **Canonical Tech Explainer Voice**: Always use `msedge-tts` with fixed voice `en-US-ChristopherNeural` (100% Free & Commercial use).
2. **Speech Physics & Tuning**:
   - Rate: `-3%` (thoughtful, deliberate tech documentary pace — eliminates robotic rush).
   - Pitch: `-2Hz` (grounded, authoritative resonance).
   - Natural Pause Breaks: Inject `<break time="350ms"/>` between thought blocks and `<break time="500ms"/>` between narrative acts.
3. **Broadcast Loudness Mastering (FFmpeg)**:
   - Always run mastering through `loudnorm=I=-16:TP=-1.5:LRA=11,atempo=1.0` (YouTube EBU R128 standard).
   - Output high-fidelity master `public/voiceover.wav` and 16kHz mono `public/voiceover_16k.wav`.
4. **Frame-Accurate Whisper Transcription**:
   - Transcribe `voiceover_16k.wav` using local Whisper to extract exact word-level and sentence-level timestamps.
   - Set composition `durationInFrames = Math.ceil(durationInSeconds * 30)` in `Root.tsx` and `calculateMetadata`. Guarantee zero audio cutoff or trailing silence.

## 3. Real Brand Logos & Official Vectors
- Whenever companies or products (OpenAI, Anthropic, Google DeepMind, Nvidia, Apple, Microsoft, etc.) are mentioned:
  - NEVER use flat generic shapes or basic boxes.
  - Always render official brand vector SVGs in 3D glowing glassmorphism cards (`RealLogos.tsx`).

## 4. Cinematic 2.5D Parallax Camera
- Wrap every scene in `<ParallaxCameraScene>`:
  - Continuous subtle dolly zoom (`scale: 1.0 -> 1.14`) and smooth position pans (`panX`, `panY`).
  - Zero static scenes across the runtime.

## 5. Vox-Style 3D Document & Tweet Inspection
- For articles, tweets, unit economics, or code:
  - Render with 3D perspective tilt (`perspective: 1200px`, `rotateX(8deg)`, `rotateY(-6deg)`).
  - Animate neon highlighter strips (`HighlightedTextLine`) sweeping across key text.

## 6. Storyboard & Link Mapping Permission Gate
- Present the complete Visual Storyboard table with exact timecodes, script sentences, visual descriptions, and **specific X post / media links** to the user.
- Await explicit user approval before generating Remotion composition code.

## 7. Automated GitHub Push & Cloud Rendering Workflow
1. Verify TypeScript compilation (`npx tsc --noEmit`).
2. Stage, commit, and push all files to GitHub `origin main`.
3. Configure `.github/workflows/render-video.yml` with `--concurrency=4` for rendering.
4. Provide direct GitHub Actions URL for 1-click cloud rendering and `http://localhost:3000` for Remotion Studio preview.
