---
name: remotion-cinematic-motion-graphics
description: Professional motion design patterns for Remotion including Virtual 2.5D Camera (pan, tilt, dolly zoom, parallax), Kinetic Typography, Animated Charts/Infographics, and Vox/Documentary style 3D document inspection. Use when creating high-end YouTube, documentary, B-roll, promo, or cinematic motion graphics videos.
metadata:
  tags: remotion, motion-graphics, typography, camera, charts, documentary
---

# Remotion Cinematic Motion Graphics

Use this skill to elevate standard Remotion compositions into professional, broadcast/documentary-grade motion graphics (Vox, Apple Keynote, Iman Gadzhi style).

## 1. Virtual 2.5D Camera & Parallax System

Instead of flat cuts, use a virtual camera container that zooms, pans, and tilts across scenes while creating depth through parallax layers.

```tsx
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import React from "react";

export const ParallaxCameraScene: React.FC<{
  children: React.ReactNode;
  zoomFrom?: number;
  zoomTo?: number;
  panX?: number;
  panY?: number;
}> = ({ children, zoomFrom = 1, zoomTo = 1.15, panX = 0, panY = 0 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(progress, [0, 1], [zoomFrom, zoomTo]);
  const translateX = interpolate(progress, [0, 1], [0, panX]);
  const translateY = interpolate(progress, [0, 1], [0, panY]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

### Parallax Layering Rule
- **Background Layer**: Scales slowly (`scale: 1.0 -> 1.05`), lower blur or subtle darkening.
- **Midground Layer (Subject/Card)**: Scales normally (`scale: 1.0 -> 1.15`).
- **Foreground Layer (Particles/Frame elements)**: Moves faster (`scale: 1.1 -> 1.35`, slight motion blur) to create physical depth.

---

## 2. Kinetic Typography & Word-by-Word Staging

Avoid displaying long static paragraphs. Reveal words dynamically with spring physics or highlight key phrases.

```tsx
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import React from "react";

export const KineticTitle: React.FC<{
  text: string;
  delayPerWord?: number;
  highlightWords?: string[];
}> = ({ text, delayPerWord = 4, highlightWords = [] }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
        const isHighlighted = highlightWords.includes(cleanWord);
        const startFrame = index * delayPerWord;

        const enter = spring({
          frame: frame - startFrame,
          fps,
          config: { damping: 14, stiffness: 120 },
        });

        const translateY = (1 - enter) * 24;
        const opacity = enter;

        return (
          <span
            key={index}
            style={{
              display: "inline-block",
              transform: `translateY(${translateY}px)`,
              opacity,
              color: isHighlighted ? "#FFD700" : "#FFFFFF",
              textShadow: isHighlighted
                ? "0 0 20px rgba(255, 215, 0, 0.6)"
                : "none",
              fontWeight: isHighlighted ? 800 : 600,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
```

---

## 3. Documentary Document Inspection & Marker Highlight (Vox Style)

When showing articles, newspaper clippings, or code/documents:
1. Tilt the document in 3D perspective (`perspective: 1000px`, `rotateX(8deg)`, `rotateY(-6deg)`).
2. Animate a yellow/neon highlighter strip across important lines.

```tsx
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import React from "react";

export const HighlightedTextLine: React.FC<{
  children: React.ReactNode;
  startFrame: number;
  duration?: number;
  color?: string;
}> = ({ children, startFrame, duration = 20, color = "rgba(250, 204, 21, 0.45)" }) => {
  const frame = useCurrentFrame();

  const widthPct = interpolate(
    frame - startFrame,
    [0, duration],
    [0, 100],
    {
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: "absolute",
          left: 0,
          bottom: "4px",
          height: "65%",
          width: `${widthPct}%`,
          backgroundColor: color,
          borderRadius: "4px",
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
};
```

---

## 4. Animated Data Visualizations (Rolling Counters & SVG Line Charts)

### Rolling Number Counter
```tsx
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import React from "react";

export const RollingCounter: React.FC<{
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  durationInFrames?: number;
}> = ({ from = 0, to, prefix = "", suffix = "", durationInFrames = 45 }) => {
  const frame = useCurrentFrame();

  const val = interpolate(frame, [0, durationInFrames], [from, to], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <span style={{ fontVariantNumeric: "tabular-nums", fontWeight: "bold" }}>
      {prefix}{Math.round(val).toLocaleString()}{suffix}
    </span>
  );
};
```

### SVG Animated Line Chart Path
Animate SVG paths cleanly using `strokeDasharray` and `strokeDashoffset`:
```tsx
const pathLength = 1000; // Normalized path length
const dashOffset = interpolate(frame, [10, 55], [pathLength, 0], {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
  easing: Easing.bezier(0.25, 1, 0.5, 1),
});

// Inside SVG <path>:
// strokeDasharray: pathLength,
// strokeDashoffset: dashOffset
```
