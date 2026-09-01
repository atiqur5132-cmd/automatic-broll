import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const KaiCanvas: React.FC<{
  children: React.ReactNode;
  activeAccent?: string;
  watermark?: string;
}> = ({ children, activeAccent = "#00E5FF", watermark = "<kaiexplainsyt>" }) => {
  const frame = useCurrentFrame();

  // Subtle Camera Dolly Zoom (Scale 1.0 -> 1.05 over 300 frames)
  const cameraScale = interpolate(frame % 300, [0, 300], [1.0, 1.05], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0B0C0E",
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.04) 0%, transparent 65%),
          radial-gradient(circle at 20% 80%, rgba(255, 42, 85, 0.02) 0%, transparent 50%)
        `,
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Outer Neon Glowing Laser Border */}
      <div
        style={{
          position: "absolute",
          inset: "24px",
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          boxShadow: `inset 0 0 30px rgba(0, 229, 255, 0.03), 0 0 40px rgba(0, 229, 255, 0.02)`,
          borderRadius: "16px",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      {/* 2.5D Camera Dolly Zoom Container */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${cameraScale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {children}
      </div>

      {/* Subtle Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.7) 100%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />

      {/* Bottom Monospace Watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          right: "48px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "14px",
          color: "rgba(255, 255, 255, 0.3)",
          letterSpacing: "0.1em",
          zIndex: 30,
        }}
      >
        {watermark}
      </div>
    </AbsoluteFill>
  );
};
