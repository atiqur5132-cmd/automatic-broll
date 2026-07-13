import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export interface PsychologyShortBackgroundProps {
  accentColor?: string;
  secondaryColor?: string;
  darkness?: number;
}

export const PsychologyShortBackground: React.FC<PsychologyShortBackgroundProps> = ({
  accentColor = "#FF2E63",
  secondaryColor = "#00F0FF",
}) => {
  const frame = useCurrentFrame();

  // Floating ambient motion
  const orb1X = Math.sin(frame * 0.02) * 120;
  const orb1Y = Math.cos(frame * 0.018) * 100;
  const orb2X = Math.cos(frame * 0.022) * -110;
  const orb2Y = Math.sin(frame * 0.015) * 140;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#08080E",
        overflow: "hidden",
      }}
    >
      {/* Subtle subtle grid overlay */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.6,
        }}
      />

      {/* Floating Neon Glow Orb 1 */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          transform: `translate(-50%, -50%) translate(${orb1X}px, ${orb1Y}px)`,
          background: `radial-gradient(circle, ${accentColor}25 0%, transparent 70%)`,
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating Neon Glow Orb 2 */}
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          width: 650,
          height: 650,
          borderRadius: "50%",
          transform: `translate(-50%, -50%) translate(${orb2X}px, ${orb2Y}px)`,
          background: `radial-gradient(circle, ${secondaryColor}20 0%, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Cinematic Dark Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(3, 3, 7, 0.88) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Horizontal Scanline Subtle Atmosphere */}
      <AbsoluteFill
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 3px)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
