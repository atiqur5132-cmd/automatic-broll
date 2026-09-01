---
name: remotion-tech-minimalist-motion-graphics
description: Master skill for creating high-retention Tech Minimalist Documentary videos in Remotion, inspired by Kai Explains (@kaiexplainsYT). Covers dark matte canvases, neon line-art wireframes, 2.5D tilted UI cards, glowing laser frames, benchmark stat counters, segmented progress meters, and dynamic node flowcharts.
---

# Remotion Tech Minimalist Motion Graphics (Kai Style)

This skill provides the complete visual engineering pattern for producing high-retention, minimalist tech documentary videos in Remotion, modeled after creators like **Kai Explains**.

---

## 🎨 1. Core Visual Tokens & Design System

### Color Palette
- **Canvas Base**: `#0D0D0D` / `#121212` (Matte Dark Charcoal / Deep Black).
- **Primary Accent**: `#00E5FF` / `#38BDF8` (Electric Neon Cyan Glow).
- **Secondary Accent**: `#FF2A55` / `#FF3B30` (Neon Warning Red / Coral Red).
- **Highlight Accent**: `#FFD600` / `#FACC15` (Electric Gold / Benchmark Yellow).
- **Subtle Border / Stroke**: `rgba(255, 255, 255, 0.15)` or `rgba(255, 255, 255, 0.8)`.
- **Text White**: `#FFFFFF` (Heading 100%), `#A1A1AA` (Muted Label 60%).

### Typography Hierarchy
- **Main Titles / Hooks**: SF Pro Display Bold / Inter Black, ALL-CAPS, tight line-height (`leading-tight`), wide letter-spacing (`tracking-wider`).
- **Data Callouts & Monospace**: JetBrains Mono / Fira Code, uppercase, high tracking.
- **Watermark Badge**: Subtle `<kaiexplainsyt>` in muted monospace at bottom-right.

---

## 🧩 2. Core Visual Components Breakdown

### A. Minimalist Glowing Line-Art Vectors
Used for intuitive mental models and comparisons (e.g. Sedan vs F1 Race Car, Battery/RAM chips, Server Racks).
- Built with SVG `<path>` and `<rect>` elements.
- Animated using `strokeDasharray` and `strokeDashoffset` or spring-in scale.
- Filter: `drop-shadow(0 0 12px #00E5FF)`.

### B. Vox-Style 2.5D Tilted UI & Terminal Cards
- Perspective wrapper: `perspective: 1200px; transform: rotateX(8deg) rotateY(-6deg)`.
- Solid offset drop shadow: `box-shadow: 6px 6px 0px #FF2A55` or `0 0 35px rgba(0, 229, 255, 0.3)`.
- Terminal header with 3 Mac traffic light dots (Red `#FF5F56`, Yellow `#FFBD2E`, Green `#27C93F`).

### C. Benchmark & Stat Callout Cards
- Horizontal card container with Gold/Yellow 2px border (`#FFD600`).
- Upper label: Small bold monospace title with icon (e.g., Stopwatch ⏱️ `SPEED` or Book 📖 `CONTEXT WINDOW`).
- Giant Metric Value: Animated numeric counter (e.g. `0` -> `131,000` or `29 tok/s`) in Cyan (`#00E5FF`).
- Segmented/Dotted Progress Line: Horizontal row of cyan dashes `[ ■ ■ ■ ■ ■ ]` that light up in sequence.

### D. Connected Flowchart Nodes
- 3 or 4 floating dark cards ("MODEL" $\rightarrow$ "QUANTIZATION" $\rightarrow$ "SOFTWARE").
- Connected by white directional arrows with subtle pulse.
- Selected/Active Node triggers an animated Cyan glowing border pulse.

### E. Floating Price & Concept Tags
- Small capsule badges (e.g. `≈$300K` or `GUN`, `CROSSHAIR`) with thin connecting SVG pointer lines pinned to hardware or code snippets.

---

## 📐 3. Remotion Composition Architecture

```tsx
import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';

export const KaiTechScene: React.FC<{
  title: string;
  metricLabel: string;
  metricValue: number;
  metricUnit: string;
}> = ({ title, metricLabel, metricValue, metricUnit }) => {
  const frame = useCurrentFrame();

  // Subtle Continuous Camera Dolly Zoom (Scale 1.0 -> 1.06)
  const cameraScale = interpolate(frame, [0, 150], [1.0, 1.06], {
    extrapolateRight: 'clamp',
  });

  // Animated Metric Counter
  const count = Math.round(
    interpolate(frame, [15, 60], [0, metricValue], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0D0D0D',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.06) 0%, transparent 70%)',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* 2.5D Camera Wrapper */}
      <div
        style={{
          transform: `scale(${cameraScale})`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 900,
            color: '#FFFFFF',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}
        >
          {title}
        </h1>

        {/* Benchmark Stat Card */}
        <div
          style={{
            background: '#161618',
            border: '2px solid #FFD600',
            borderRadius: '16px',
            padding: '28px 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 0 30px rgba(255, 214, 0, 0.2)',
          }}
        >
          <span
            style={{
              color: '#FFD600',
              fontFamily: 'monospace',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              marginBottom: '10px',
            }}
          >
            {metricLabel}
          </span>
          <span
            style={{
              color: '#00E5FF',
              fontSize: '84px',
              fontWeight: 900,
              fontFamily: 'monospace',
            }}
          >
            {count.toLocaleString()} <span style={{ fontSize: '36px', color: '#FFFFFF' }}>{metricUnit}</span>
          </span>
        </div>
      </div>

      {/* Subtle Monospace Watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '32px',
          fontFamily: 'monospace',
          fontSize: '14px',
          color: '#52525B',
        }}
      >
        &lt;kaiexplainsyt&gt;
      </div>
    </AbsoluteFill>
  );
};
```

---

## ⚡ 4. Production Checklist for Kai-Style Videos

1. **Dark High-Contrast Staging**: Matte dark charcoal canvas (`#0D0D0D`), never muddy grey.
2. **Neon Accent Pop**: Cyan (`#00E5FF`) for data/highlights, Red (`#FF2A55`) for price/warnings, Gold (`#FFD600`) for metrics.
3. **No Static Frames**: Every scene has continuous subtle dolly zoom (`scale: 1.0 -> 1.08`).
4. **Segmented Progress & Counters**: Always animate numbers counting up and progress strips.
5. **Clean 2.5D Perspective**: Use subtle tilt (`perspective: 1200px`) for cards and mockups.
