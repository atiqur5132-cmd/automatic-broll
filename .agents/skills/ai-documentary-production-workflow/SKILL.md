---
name: ai-documentary-production-workflow
description: End-to-end 7-step workflow for producing AI documentary and B-roll videos in Remotion. Includes automated audio gap cleanup (>0.5s silence removal), director storyboard planning, visual pacing (cuts every 3-5s), real company logo synchronization, and explicit permission gates.
metadata:
  tags: remotion, documentary, workflow, audio-cleanup, storyboard
---

# AI Documentary Production Workflow

Follow this mandatory 7-step pipeline whenever creating or producing a video in this workspace:

## Step 1: Topic Selection
Suggest gripping, viral AI documentary topics with clear hooks and visual opportunities.

## Step 2: Voiceover Intake
Wait for the user to provide the ElevenLabs voiceover audio file inside the `public/` directory.

## Step 3: Automated Silence Removal (>0.5s Gaps)
Before animating, trim any silent pauses exceeding 0.5 to 0.6 seconds using FFmpeg to ensure fast-paced narration:
1. Detect silences:
   ```bash
   ffmpeg -i public/voiceover.mp3 -af silencedetect=noise=-38dB:d=0.5 -f null -
   ```
2. Remove/tighten silences or slice audio segments so no dead air exceeds 0.5s. Save the cleaned file as `public/voiceover-cleaned.mp3`.

## Step 4: Director's Storyboard & Timestamp Mapping
Extract word/sentence timestamps and draft a comprehensive **Visual & Motion Storyboard**:
- **Pacing**: Ensure visual changes or camera movements occur every 3–5 seconds.
- **Logos & Badges**: Identify company names in the audio and stage real brand logos inside `DocumentaryLogoBadge` cards.
- **Visual Variety**: Map out 3D document inspection, kinetic titles, SVG charts, and B-roll frames.
- **Screen Utilization**: Plan full-screen layouts so no region looks empty or static.

## Step 5: Explicit User Permission Gate
Present the complete Storyboard table to the user. **DO NOT write Remotion composition code until the user explicitly approves the storyboard.**

## Step 6: Remotion Implementation
Build the composition using:
- `remotion-cinematic-motion-graphics`
- `remotion-sound-design-mastery`
- `remotion-visual-polish-and-grading`

## Step 7: Local Preview & GitHub Push
Instruct the user to preview with `npm run dev`. Once verified, execute git commit and push upon user request.
