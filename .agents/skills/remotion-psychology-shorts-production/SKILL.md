---
name: remotion-psychology-shorts-production
description: Specialized guidelines and production architecture for creating high-retention 9:16 Vertical Psychology YouTube Shorts and Instagram Reels in Remotion. Covers 1080x1920 vertical UI safe zones, Hormozi-style word-by-word center kinetic captions, fast-paced micro-cuts (1.5s-2.5s), psychology visual metaphors (cognitive bias diagrams, split screens, dark mood lighting), and audio/SFX synchronization.
---

# Remotion Psychology Shorts Production Mastery (9:16 Vertical Format)

Use this skill whenever creating, scaffolding, or editing **Vertical YouTube Shorts, Instagram Reels, or TikTok videos (9:16 aspect ratio, 1080x1920)**, especially for Psychology, Human Behavior, Dark Psychology, and Mindset topics.

---

## 1. Vertical 9:16 Resolution & Safe Zone Architecture

Vertical short-form video platforms overlay UI elements (Channel title, Like/Comment/Share icons, progress bar) over the video. Never place critical text or visual focal points outside the **Safe Zone**.

```
+-----------------------------------+  0px
|      UNSAFE TOP ZONE (15%)       |  Header / Title / Platform Top Bar
+-----------------------------------+  288px (15% of 1920)
|                                   |
|                                   |
|        SAFE CENTER ZONE           |  <-- ALL Kinetic Captions, Hook Text,
|             (65%)                 |      & Key Visual Diagrams Go Here
|                                   |
|                                   |
+-----------------------------------+  1536px (80% of 1920)
|     UNSAFE BOTTOM ZONE (20%)      |  Caption bar, Like button, Sound info
+-----------------------------------+  1920px
```

### Composition Settings
- **Width:** `1080`
- **Height:** `1920`
- **FPS:** `30`
- **Background:** Deep dark atmosphere (`#08080C` to `#111218`) with cinematic vignette and subtle glow.

---

## 2. Pacing & Cut Frequency (1.5s – 2.5s Micro-Scenes)

Shorts require much faster pacing than horizontal documentaries to maintain viewer retention:
- **Maximum Static Frame:** No single visual state should remain unchanged for more than **2.5 seconds**.
- **Continuous Micro-Motion:** Every scene must employ either:
  - Subtle 2.5D Camera scale/dolly push (`1.0 -> 1.08` over scene duration)
  - Floating ambient light/particle drifts
  - Staged visual element entrances (staggered by 6–10 frames using `spring()`)

---

## 3. Hormozi-Style Word-by-Word Center Kinetic Captions

Captions are essential for high retention on Shorts. Place them centered vertically around `y = 960` to `y = 1150`.

### Key Caption Rules:
1. **Word-by-Word Active Highlight:**
   - Active word scales up slightly (`scale: 1.12` via spring) and uses a vivid accent color (Cyan `#00F0FF`, Crimson `#FF2E63`, or Gold `#FFD700`).
   - Inactive/past words remain crisp white (`#FFFFFF`) or slightly dimmed (`rgba(255,255,255,0.7)`).
2. **Typography:**
   - Bold sans-serif fonts (`Montserrat`, `Outfit`, `Inter`, `Impact`).
   - Strong drop shadow or dark backplate (`rgba(0, 0, 0, 0.75)`) so text reads clearly over bright or complex visuals.
3. **Keyword Emphasis:**
   - Psychology trigger words (*"Manipulate"*, *"Trap"*, *"Secret"*, *"Subconscious"*, *"Bias"*) should trigger an instant color shift or subtle shake effect.

---

## 4. Psychology Visual Metaphors & Layout Patterns

Instead of generic stock footage, build dynamic programmatic visual patterns suited for psychology concepts:

### A. Top/Bottom Split-Screen Comparison
- **Top Half (`y: 288 to 900`):** "What People Think" or "Conscious Behavior"
- **Bottom Half (`y: 920 to 1536`):** "Reality / Subconscious Reality"
- Great for paradoxes, cognitive biases, and expectations vs. reality.

### B. Animated Cognitive Cards & Scales
- Glassmorphism cards (`rgba(25, 27, 38, 0.7)` with `backdropFilter: blur(16px)`) displaying psychological laws (e.g., *"Rule #1: The Halo Effect"*).
- Animated percentage dials, brain-wave frequency bars, or decision-tree nodes.

### C. Dark Psychology Atmospheric Lighting
- Use radial gradients with deep indigo (`#1A0B2E`), crimson (`#3B0A14`), or cyan (`#0A2E36`) glow centers.
- Add subtle vignette and film grain overlay to evoke curiosity and mystery.

---

## 5. Sound Design Staging for Shorts

Sync sound effects to visual changes:
- **Hook (Frame 0–15):** Sub-bass boom / cinematic impact hit.
- **Text Reveal / Keyword Highlight:** Crisp UI tick or soft pop (`tick.mp3`).
- **Scene Cut (Every 1.5–2.5s):** Fast low-end whoosh or swipe SFX.
- **Background Music:** Deep ambient dark synth drone auto-ducked (`volume: 0.15`) below the voiceover (`volume: 1.0`).
