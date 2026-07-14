# Project Rules: Automatic B-Roll & AI Documentary Studio

- **Mandatory 7-Step Workflow**: Always follow the `ai-documentary-production-workflow` skill for video production.
- **Audio Cleanup Rule**: Always remove pauses > 0.5s from raw voiceovers before creating Remotion timeline sequences.
- **Storyboard Permission Gate**: Never generate Remotion composition code without first presenting a detailed visual/pacing storyboard and receiving explicit user approval.
- **Pacing Rule**: Ensure no single visual scene remains static for longer than 3 to 5 seconds.
- **Psychology 3D Motion Graphics Rule**: When creating or editing vertical Psychology Shorts (`9:16`), always consult and apply the `remotion-psychology-3d-motion-graphics` skill. Never use flat 2D SVG shapes or plain CSS boxes; use real 3D asset stages (`Real3DIconStage`) and 3D perspective glassmorphism (`Perspective3DCard`).
- **Anti-Popup Animation Rule**: Never rely solely on basic scale-up/popup spring animations (`scale: 0 -> 1`) for scene entrances or transitions. Every entrance or transition must use broadcast-grade cinematic animations: Whip Pan with Motion Blur (`CameraWhipPan`), Origami 3D Hinge Fold (`OrigamiFoldCard`), Angled Cyber Shutter/Slice Reveal (`MaskRevealWipe`), Rack Focus (`FocusPullStage`), or Dramatic Impact Shake (`ImpactShake`).
- **Visual-First & Massive Typography Rule (Zero Small Text)**: In 9:16 Vertical Shorts, dedicate 80% of vertical screen space to 3D imagery and motion graphics (`VisualFirstSceneStage`). Never use text smaller than `56px`. Main concept titles must use massive display typography (`72px to 84px+`) with concise phrasing (max 3–5 words per scene card) via `MassiveKineticTitle`.
