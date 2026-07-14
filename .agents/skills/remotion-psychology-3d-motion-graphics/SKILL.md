---
name: remotion-psychology-3d-motion-graphics
description: Specialized 3D Motion Graphics, Real 3D Icon Staging, Glassmorphic 3D Perspective Cards, and High-Retention Visual Metaphors for Vertical Psychology Shorts (YouTube Shorts, Instagram Reels) in Remotion.
metadata:
  tags: remotion, psychology, 3d-icons, motion-graphics, 3d-perspective, glassmorphism, vertical-shorts
---

# Remotion Psychology 3D Motion Graphics & Real 3D Icon Architecture

Use this skill whenever building or enhancing **Psychology, Mindset, Dark Psychology, or Human Behavior Shorts (9:16 Vertical 1080x1920)** to eliminate flat 2D visuals and replace them with **Broadcast-Grade 3D Motion Graphics, Real 3D Icons, and True 3D Perspective Layouts**.

---

## 1. Core Visual Problem & The "3D Depth" Solution

Standard programmatic shorts often look "flat" because they rely on basic 2D SVG icons, flat CSS panels, and static layouts. High-retention psychology shorts (Hormozi, Vox, Iman Gadzhi style) require **3D Depth, Volumetric Lighting, and Tangible Materials**.

### 4 Pillars of Psychology 3D Visuals:
1. **Real 3D Icon & Asset Staging:** Using high-fidelity 3D rendered assets (transparent PNG/WebP 3D icons or Three.js/CSS 3D models) suspended in realistic floating 3D space.
2. **True 3D CSS Perspective Cards:** Glassmorphism cards with `perspective(1400px)`, dynamic `rotateX`/`rotateY` tilt, specular sheen sweeps, and layered `translateZ` content.
3. **Volumetric Lighting & Dynamic Shadows:** Every 3D icon or card must cast realistic ambient shadows and sit in front of a dynamic pulsating radial backlight.
4. **Active Neural & Synaptic Motion Graphics:** Animated particle trails, laser connections, and synaptic pulse nodes that move continuously.

---

## 2. STRICT ANTI-POPUP RULE & ADVANCED CINEMATIC ANIMATIONS

> **CRITICAL RULE (ANTI-POPUP ANIMATION):**
> **NEVER** rely solely on basic scale-up / popup animations (`scale: 0 -> 1` spring) for entrances or transitions. Lazy popup animation makes videos look amateur and repetitive.
> Instead, every scene entrance and transition MUST use one of these **5 Professional Broadcast Animation Paradigms**:

### 1. Cinematic Rack Focus / Depth-of-Field Pull (`FocusPullStage`)
- Transition focus between layers: Foreground starts crisp (`blur(0px)`) while background is blurred (`blur(14px)`).
- On transition trigger, camera pulls focus: Foreground blurs out and recedes (`scale: 0.95, blur: 16px`) while background sharpens and moves forward (`scale: 1.0, blur: 0px`).

### 2. High-Speed Whip Pan with Motion Blur (`CameraWhipPan`)
- Horizontal or vertical high-velocity camera pan (`translateX` / `translateY`) accompanied by directional CSS motion blur (`filter: blur(18px 0px)`) during the peak velocity frames.

### 3. Origami 3D Hinge Fold (`OrigamiFoldCard`)
- Cards and panels unfold along a 3D hinge axis (`transformOrigin: "left center"` or `"top center"`) using `rotateY(90deg) -> 0deg` or `rotateX(-90deg) -> 0deg` with 3D perspective lighting changes.

### 4. Angled Cyber Shutter / Clip-Path Slice Reveal (`MaskRevealWipe`)
- Panels reveal via animated angled polygonal slicing (`clip-path: polygon(0% 0%, X% 0%, Y% 100%, 0% 100%)`) or circular iris expand (`circle(0% at 50% 50%) -> circle(150% at 50% 50%)`).

### 5. Dramatic Camera Impact Shake & Chromatic Aberration (`ImpactShake`)
- For psychological plot twists or hard sound hook hits, apply a multi-axis decay shake (`translate(dx, dy) rotate(deg)`) combined with a split RGB chromatic aberration flash (`drop-shadow(4px 0 0 red) drop-shadow(-4px 0 0 cyan)`).

---

## 3. Real 3D Icon & Image Staging Pattern

When placing a 3D icon or illustration (e.g., 3D Glowing Brain, 3D Shattered Heart, 3D Puppet Strings, 3D Mask, 3D Lock), **NEVER** render a static `<img>`. Always wrap it in a **Real 3D Stage**:

```tsx
import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const Real3DIconStage: React.FC<{
  src: string;
  size?: number;
  glowColor?: string;
  altText?: string;
}> = ({ src, size = 360, glowColor = "#00F0FF", altText = "3D Icon" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Entrance Spring Scale & Overshoot
  const scaleEntrance = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.8 },
  });

  // 2. Continuous 3D Floating Parallax
  const floatY = Math.sin(frame * 0.05) * 16;
  const tiltX = Math.sin(frame * 0.04) * 6;
  const tiltY = Math.cos(frame * 0.033) * 8;

  // 3. Dynamic Floor Shadow Scaling
  const shadowScale = 1 - (floatY / 16) * 0.15;
  const shadowOpacity = 0.45 - (floatY / 16) * 0.15;

  return (
    <div
      style={{
        position: "relative",
        width: size * 1.3,
        height: size * 1.4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1200,
      }}
    >
      {/* Volumetric Backlight Glow */}
      <div
        style={{
          position: "absolute",
          width: size * 1.1,
          height: size * 1.1,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor}55 0%, ${glowColor}11 45%, transparent 70%)`,
          filter: "blur(35px)",
          transform: `scale(${1 + Math.sin(frame * 0.06) * 0.1})`,
          pointerEvents: "none",
        }}
      />

      {/* Floating 3D Icon Container */}
      <div
        style={{
          width: size,
          height: size,
          transform: `scale(${scaleEntrance}) translate3d(0px, ${floatY}px, 0px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformStyle: "preserve-3d",
          filter: `drop-shadow(0px 24px 35px rgba(0,0,0,0.85)) drop-shadow(0px 0px 20px ${glowColor}44)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={src}
          alt={altText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Floor Perspective Shadow */}
      <div
        style={{
          width: size * 0.65,
          height: size * 0.16,
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 75%)",
          transform: `scale(${shadowScale}) rotateX(75deg)`,
          opacity: shadowOpacity,
          filter: "blur(8px)",
          marginTop: -20,
        }}
      />
    </div>
  );
};
```

---

## 3. True 3D Perspective Glassmorphism Cards

To make text, psychological rules, and statistics jump off the screen, use a **3D Perspective Card** where the inner elements float in front of the card backplate using `translateZ`:

```tsx
import React from "react";
import { useCurrentFrame } from "remotion";

export const Perspective3DCard: React.FC<{
  title: string;
  badge: string;
  borderColor?: string;
  children: React.ReactNode;
}> = ({ title, badge, borderColor = "#00F0FF", children }) => {
  const frame = useCurrentFrame();

  // Dynamic 3D Card Orbit Tilt
  const rotateY = Math.sin(frame * 0.04) * 7;
  const rotateX = Math.cos(frame * 0.035) * 5;

  return (
    <div style={{ perspective: 1400, width: 880 }}>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(145deg, rgba(22, 26, 44, 0.85), rgba(10, 12, 22, 0.95))",
          backdropFilter: "blur(28px)",
          border: `1.5px solid ${borderColor}77`,
          borderRadius: 36,
          padding: "48px 44px",
          boxShadow: `0 35px 80px rgba(0,0,0,0.9), 0 0 50px ${borderColor}25`,
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Specular Sheen Sweep */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${((frame * 4) % 180) - 40}%`,
            width: "35%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            transform: "skewX(-25deg)",
            pointerEvents: "none",
          }}
        />

        {/* Floating Layer (+35px Z-Depth) */}
        <div style={{ transform: "translateZ(35px)" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: 20,
              background: `${borderColor}22`,
              border: `1px solid ${borderColor}`,
              color: borderColor,
              fontWeight: 800,
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 16,
            }}
          >
            {badge}
          </div>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: "0 0 24px 0",
              lineHeight: 1.15,
            }}
          >
            {title}
          </h2>

          <div style={{ transform: "translateZ(20px)" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

## 4. High-Impact Psychology Visual Metaphors (Motion Graphics Systems)

### A. Neural / Synaptic Network Pulse (`Neural3DNetwork`)
- Displays floating nodes representing brain states or subconscious connections.
- Animated glowing laser pulses travel along connection paths.
- Ideal for topics like *Neuroplasticity, Subconscious Programming, Cognitive Biases, Trauma Bonds*.

### B. Reality vs. Distortion Glass Overlay (`PsychologyDistortionStage`)
- Creates a 3D fractured mirror / chromatic aberration split effect.
- Top half shows *Conscious Mask / Surface Reality*, bottom half shows *Subconscious Reality / Dark Motive*.
- Ideal for *Gaslighting, Love Bombing, Narcissistic Dynamics, Hidden Intentions*.

### C. Dopamine Addiction / Reward Loop Gauge (`DopamineLoopGauge`)
- A futuristic circular 3D HUD ring with animated percentage dial, pulse frequency bar, and glowing particle ring.
- Ideal for *Dopamine Spike, Social Media Addiction, Instant Gratification, Toxic Loop*.

---

## 5. VISUAL-FIRST ARCHITECTURE & MASSIVE TYPOGRAPHY RULE (ZERO SMALL TEXT)

> **CRITICAL RULE (NO SMALL TEXT & CONCISE PHRASING):**
> In 9:16 Vertical Shorts viewed on mobile screens, **small text looks terrible and unreadable**. Furthermore, lengthy text blocks distract viewers from watching the visuals.
> **All Psychology Shorts must obey:**
> 1. **Visual-First Storytelling (80% Visual Ratio):** 80% of the screen space MUST be dedicated to **Real 3D Icons, Motion Graphics, and Animations**.
> 2. **Max 3–5 Words per Scene Card:** Explain psychological concepts visually rather than through sentences. Use punchy, memorable keywords (e.g., `"THE HALO EFFECT"`, `"DOPAMINE TRAP"`, `"SILENT GASLIGHTING"`).
> 3. **Massive Typography Only (`fontSize >= 56px`):**
>    - Primary Hook / Concept Titles: **`64px to 88px+`** (Black/Heavy weight 900).
>    - Badges / Pill Tags: **`24px to 32px`** (Bold uppercase with tracking).
>    - **NEVER** use font sizes below `40px` for any on-screen text in Shorts.
> 4. **Word-by-Word Kinetic Emphasis (`MassiveKineticTitle`):**
>    - Active keywords scale up (`1.15x`) with neon glow (`#00F0FF` or `#FF2E63`) and high contrast over a deep cinematic backplate.

---

## 6. Checklist for Studio-Grade Psychology Shorts

1. **Visual-First (80% Visual Ratio):** Prioritize 3D icons, neural diagrams, and cinematic motion over blocks of text.
2. **Zero Small Text:** Ensure no title or label is smaller than `56px` and max 3–5 punchy words per scene.
3. **Zero Flat Elements:** Replace plain flat panels with `Perspective3DCard` or glassmorphic 3D containers.
4. **Real 3D Icons / Illustrations:** Use high-resolution 3D rendered assets inside `Real3DIconStage`.
5. **No Lazy Popup Animations:** Use Whip Pans (`CameraWhipPan`), Origami Folds (`OrigamiFoldCard`), and Focus Pulls.
6. **Pacing Rules:** Change visual micro-state every **1.5 to 2.5 seconds** (camera push, node pulse, text highlight).
7. **Vertical Safe Zone Compliance:** Keep all key 3D motion graphics between `y = 288px` and `y = 1536px`.
8. **Sound Design Staging:** Sync sub-bass hits on 3D icon entrance and crisp tick SFX on kinetic word highlights.
