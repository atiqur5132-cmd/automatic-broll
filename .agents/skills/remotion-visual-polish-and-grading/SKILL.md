---
name: remotion-visual-polish-and-grading
description: Visual polish, cinematic color atmosphere, film grain overlays, vignette, glow bloom, glassmorphism, and B-roll split/grid framing for Remotion compositions. Use when giving videos a high-production, cinematic finish.
metadata:
  tags: remotion, polish, color-grading, film-grain, vignette, b-roll
---

# Remotion Visual Polish & Grading

Transform clean, sterile vector layouts into rich, atmospheric video compositions with cinematic texture and depth.

## 1. Cinematic Atmosphere Overlays (Vignette & Film Grain)

Always overlay a subtle vignette and organic film texture over full-screen documentary or B-roll scenes.

```tsx
import React from "react";

export const CinematicOverlay: React.FC<{
  vignetteOpacity?: number;
  grainOpacity?: number;
}> = ({ vignetteOpacity = 0.5, grainOpacity = 0.04 }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999,
      }}
    >
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, transparent 45%, rgba(0, 0, 0, ${vignetteOpacity}) 100%)`,
        }}
      />

      {/* SVG Procedural Noise / Grain Texture */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: grainOpacity,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="cinematic-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinematic-grain)" />
      </svg>
    </div>
  );
};
```

---

## 2. Premium Glassmorphism Card Wrapper

When presenting UI mockups, statistics, or quotes, wrap them in frosted glassmorphism cards with multi-layered shadows:

```tsx
import React from "react";

export const GlassCard: React.FC<{
  children: React.ReactNode;
  glowColor?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  glowColor = "rgba(255, 255, 255, 0.08)",
  style = {},
}) => {
  return (
    <div
      style={{
        background: "rgba(20, 20, 25, 0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "20px",
        boxShadow: `0 24px 60px rgba(0, 0, 0, 0.4), 0 0 40px ${glowColor}`,
        padding: "32px",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
```

---

## 3. Animated B-Roll & Picture-In-Picture (PIP) Framing

When displaying B-roll footage or screen captures over background footage:
- Never use sharp, borderless rectangles.
- Add rounded corners (`borderRadius: 16px`), a subtle 1px border (`rgba(255, 255, 255, 0.15)`), and deep ambient drop shadow.

```tsx
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import React from "react";

export const StyledBRollFrame: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  return (
    <div
      style={{
        transform: `scale(${0.9 + enter * 0.1})`,
        opacity: enter,
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 30px 80px rgba(0, 0, 0, 0.65)",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};
```
