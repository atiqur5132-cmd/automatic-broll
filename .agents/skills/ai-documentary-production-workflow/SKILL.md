---
name: ai-documentary-production-workflow
description: End-to-end workflow for producing cinematic AI documentary and B-roll videos in Remotion. Includes voiceover intake, transcript timestamp sync, real company brand logos, 2.5D parallax camera, Vox-style 3D document inspection, automated GitHub push, and GitHub Actions cloud rendering.
metadata:
  tags: remotion, documentary, workflow, audio-sync, real-logos, parallax, github-actions
---

# AI Documentary & Cinematic Video Production Workflow

Follow this mandatory pipeline whenever producing or updating Remotion videos:

## 1. Voiceover Intake & Timestamp Extraction
1. Locate the voiceover audio inside `public/` (e.g. `public/voiceover.wav` or `public/voiceover.mp3`).
2. Transcribe the audio (using Whisper or local transcription script) to extract word-level and sentence-level timestamps.
3. Compute the exact duration: `durationInFrames = Math.ceil(durationInSeconds * 30)`.
4. Ensure `calculateMetadata` and composition definitions in `Root.tsx` match the exact duration.

## 2. Real Brand Logos & Assets
- When companies or tech brands are mentioned (OpenAI, Anthropic, Google DeepMind, Nvidia, Apple, Microsoft, etc.), NEVER use flat placeholder boxes or generic SVG shapes.
- Use authentic brand vector SVGs in 3D glowing glassmorphism cards (`RealLogos.tsx`).

## 3. Cinematic 2.5D Parallax Camera
- Wrap every scene in `<ParallaxCameraScene>`:
  - Continuous subtle dolly zoom (`zoomFrom: 1.0` to `zoomTo: 1.12 - 1.14`).
  - Positional pans (`panX`, `panY`).
  - Ensures no visual frame is ever completely static.

## 4. Vox-Style 3D Document Inspection & Highlighting
- For financial statements, unit economics, code, or articles:
  - Tilt in 3D perspective (`perspective: 1200px`, `rotateX(8deg)`, `rotateY(-6deg)`).
  - Animate neon highlighter strips (`HighlightedTextLine`) across key statistics.

## 5. Director Storyboard & Permission Gate
- Draft a frame-accurate Scene Breakdown table with exact timecodes and visual descriptions.
- Present the storyboard to the user for explicit review and feedback.

## 6. Implementation & TypeScript Verification
- Build clean, modular scene components in `src/scenes/`.
- Verify with `npx tsc --noEmit` ensuring zero compilation errors.

## 7. Automated GitHub Push & Cloud Rendering Workflow
1. Stage, commit, and push all code and workflow files to GitHub `origin main`.
2. Configure `.github/workflows/render-video.yml` with `--concurrency=2` (matching GitHub Actions 2-core runner limit).
3. Provide the user with:
   - Direct GitHub Actions URL for 1-click cloud rendering.
   - Remotion Studio local URL (`http://localhost:3000`) for interactive browser preview.
