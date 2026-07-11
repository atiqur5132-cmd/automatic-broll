import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const BackgroundLayers: React.FC = () => {
  const frame = useCurrentFrame();

  // Determine current macro setting based on frame
  const driftX = interpolate(frame, [0, 7830], [0, 120]);
  const driftY = Math.sin(frame / 60) * 25;
  const zoom = interpolate(frame, [0, 7830], [1, 1.08]);

  let bgGradient = "radial-gradient(circle at 50% 30%, #1a1e36 0%, #080a12 70%, #030408 100%)";
  let accentGlow = "rgba(79, 110, 247, 0.18)";
  let secondaryGlow = "rgba(147, 83, 211, 0.12)";

  if (frame >= 611 && frame < 1434) {
    bgGradient = "radial-gradient(circle at 60% 40%, #0f2231 0%, #070e16 70%, #020408 100%)";
    accentGlow = "rgba(14, 165, 233, 0.22)";
    secondaryGlow = "rgba(15, 118, 110, 0.14)";
  } else if (frame >= 1434 && frame < 2644) {
    bgGradient = "radial-gradient(circle at 40% 35%, #2a151b 0%, #11090d 70%, #050204 100%)";
    accentGlow = "rgba(244, 63, 94, 0.20)";
    secondaryGlow = "rgba(245, 158, 11, 0.14)";
  } else if (frame >= 2644 && frame < 2945) {
    bgGradient = "radial-gradient(circle at 50% 50%, #311018 0%, #0f0508 70%, #040102 100%)";
    accentGlow = "rgba(225, 29, 72, 0.28)";
    secondaryGlow = "rgba(159, 18, 57, 0.18)";
  } else if (frame >= 2945 && frame < 4038) {
    bgGradient = "radial-gradient(circle at 50% 35%, #182242 0%, #080c18 70%, #03050a 100%)";
    accentGlow = "rgba(59, 130, 246, 0.24)";
    secondaryGlow = "rgba(234, 179, 8, 0.16)";
  } else if (frame >= 4038 && frame < 5188) {
    bgGradient = "radial-gradient(circle at 65% 45%, #1e1338 0%, #0b0716 70%, #04020a 100%)";
    accentGlow = "rgba(168, 85, 247, 0.24)";
    secondaryGlow = "rgba(6, 182, 212, 0.18)";
  } else if (frame >= 5188 && frame < 6403) {
    bgGradient = "radial-gradient(circle at 45% 40%, #0f2926 0%, #061110 70%, #020606 100%)";
    accentGlow = "rgba(16, 185, 129, 0.22)";
    secondaryGlow = "rgba(59, 130, 246, 0.15)";
  } else if (frame >= 6403) {
    bgGradient = "radial-gradient(circle at 50% 40%, #1c1d3b 0%, #0a0a14 70%, #030308 100%)";
    accentGlow = "rgba(99, 102, 241, 0.22)";
    secondaryGlow = "rgba(251, 191, 36, 0.16)";
  }

  const gridOffset = (frame * 0.4) % 80;

  return (
    <AbsoluteFill
      style={{
        background: bgGradient,
        overflow: "hidden",
        transform: `scale(${zoom}) translate(${-driftX * 0.1}px, ${driftY * 0.1}px)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: `${20 + Math.sin(frame / 70) * 15}%`,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: `${15 + Math.cos(frame / 80) * 18}%`,
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: `0px ${gridOffset}px`,
          opacity: 0.65,
          pointerEvents: "none",
        }}
      />
      {[...Array(12)].map((_, i) => {
        const x = ((i * 157 + frame * (0.3 + (i % 3) * 0.2)) % 1920);
        const y = ((i * 89 + Math.sin(frame / 40 + i) * 30) % 1080);
        const size = 3 + (i % 4) * 2;
        const opacity = 0.15 + (i % 3) * 0.1;
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
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              opacity,
              boxShadow: "0 0 12px rgba(255, 255, 255, 0.5)",
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, transparent 65%, rgba(0, 0, 0, 0.6) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
