---
name: ai-documentary-production-workflow
description: End-to-end workflow for producing cinematic AI documentary and B-roll videos in Remotion from X posts, website links, or raw voiceovers. Includes deep research, script generation, link-to-visual mapping, audio sync, real brand logos, 2.5D parallax camera, Vox-style 3D inspection, and automated GitHub rendering.
metadata:
  tags: remotion, documentary, workflow, x-posts, web-research, audio-sync, real-logos, parallax, github-actions
---

# AI Documentary & Cinematic Video Production Workflow

Follow this mandatory pipeline whenever producing or updating Remotion videos:

## 1. Link Intake & Deep Web/X Research
- When the user provides X (Twitter) post links or website URLs:
  1. Deeply inspect and research the linked content, extracting core arguments, metrics, visual assets, quotes, and video demonstrations.
  2. Synthesize an engaging, high-retention documentary voiceover script.
  3. Map each reference directly to the visual storyboard (e.g. *"At [00:15 - 00:25], show 3D card of this specific X post [Link: URL] or embed its video snippet"*).

## 2. Voiceover Audio Intake & Timestamp Sync
1. Once the voiceover audio is provided/generated inside `public/` (e.g. `public/voiceover.wav` or `public/voiceover.mp3`).
2. Transcribe the audio using Whisper/local scripts to extract exact sentence and word-level timestamps.
3. Set composition `durationInFrames = Math.ceil(durationInSeconds * 30)` in `Root.tsx` and `calculateMetadata` to guarantee 100% audio sync without cutoffs or dead silence.

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
