import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const BackgroundLayers: React.FC = () => {
  const frame = useCurrentFrame();

  const driftX = interpolate(frame, [0, 7542], [0, 100]);
  const driftY = Math.sin(frame / 60) * 20;
  const zoom = interpolate(frame, [0, 7542], [1, 1.05]);

  let bgGradient = "radial-gradient(circle at 50% 30%, #11131a 0%, #08090d 70%, #050508 100%)";
  let accentGlow = "rgba(255, 184, 0, 0.12)"; // Amber
  let secondaryGlow = "rgba(0, 240, 255, 0.06)"; // Cyan

  if (frame >= 869 && frame < 1937) {
    // Environment 2: Timeline / Data Flow
    bgGradient = "radial-gradient(circle at 40% 40%, #0d121f 0%, #060912 70%, #030408 100%)";
    accentGlow = "rgba(0, 240, 255, 0.15)"; // Cyan
    secondaryGlow = "rgba(255, 90, 95, 0.1)"; // Crimson
  } else if (frame >= 1937 && frame < 3595) {
    // Environment 3: Device / Tokens Dashboard
    bgGradient = "radial-gradient(circle at 60% 35%, #1f0f13 0%, #0d0709 70%, #050204 100%)";
    accentGlow = "rgba(255, 90, 95, 0.18)"; // Crimson
    secondaryGlow = "rgba(255, 184, 0, 0.08)"; // Amber
  } else if (frame >= 3595 && frame < 4745) {
    // Environment 4: Coinbase Routing Dashboard
    bgGradient = "radial-gradient(circle at 50% 50%, #0a1b24 0%, #050e12 70%, #020608 100%)";
    accentGlow = "rgba(0, 240, 255, 0.16)"; // Cyan
    secondaryGlow = "rgba(255, 184, 0, 0.12)"; // Amber
  } else if (frame >= 4745 && frame < 6048) {
    // Environment 5: Pricing / Market Shift Analysis
    bgGradient = "radial-gradient(circle at 35% 45%, #1c1810 0%, #0a0906 70%, #040402 100%)";
    accentGlow = "rgba(255, 184, 0, 0.15)"; // Amber
    secondaryGlow = "rgba(255, 90, 95, 0.08)"; // Crimson
  } else if (frame >= 6048) {
    // Environment 6: Outro / Question Environment
    bgGradient = "radial-gradient(circle at 50% 40%, #0e1220 0%, #070912 70%, #030408 100%)";
    accentGlow = "rgba(0, 240, 255, 0.14)"; // Cyan
    secondaryGlow = "rgba(255, 184, 0, 0.1)"; // Amber
  }

  const gridOffset = (frame * 0.5) % 80;

  return (
    <AbsoluteFill
      style={{
        background: bgGradient,
        overflow: "hidden",
        transform: `scale(${zoom}) translate(${-driftX * 0.1}px, ${driftY * 0.1}px)`,
      }}
    >
      {/* Glow 1 */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: `${15 + Math.sin(frame / 90) * 10}%`,
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      {/* Glow 2 */}
      <div
        style={{
          position: "absolute",
          bottom: "-25%",
          right: `${10 + Math.cos(frame / 100) * 12}%`,
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: `0px ${gridOffset}px`,
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      {/* Subtle Noise Texture Overlay using SVG */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Floating Particles (Data Packets) */}
      {[...Array(15)].map((_, i) => {
        const x = ((i * 127 + frame * (0.2 + (i % 3) * 0.15)) % 1920);
        const y = ((i * 79 + Math.sin(frame / 50 + i) * 20) % 1080);
        const size = 3 + (i % 3) * 2;
        const opacity = 0.1 + (i % 3) * 0.12;
        const color = i % 2 === 0 ? "#00F0FF" : "#FF5A5F";
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: Math.abs(x),
              top: Math.abs(y),
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: color,
              opacity,
              boxShadow: `0 0 10px ${color}`,
            }}
          />
        );
      })}

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.65) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
