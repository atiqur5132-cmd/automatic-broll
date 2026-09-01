import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

interface CodingHorizonBackgroundProps {
  glowColor?: string;
  gridOpacity?: number;
  showParticles?: boolean;
}

export const CodingHorizonBackground: React.FC<CodingHorizonBackgroundProps> = ({
  glowColor = "rgba(0, 229, 255, 0.12)",
  gridOpacity = 0.25,
  showParticles = true,
}) => {
  const frame = useCurrentFrame();

  // Subtle breathing pulse
  const pulse = interpolate(Math.sin(frame * 0.05), [-1, 1], [0.85, 1.15]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#07080C",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* 1. Technical Dot / Grid Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, ${gridOpacity}) 1px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px, 144px 144px, 144px 144px",
          opacity: 0.8,
        }}
      />

      {/* 2. Radial Ambient Glow Spotlights */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${pulse})`,
          width: "900px",
          height: "600px",
          background: `radial-gradient(ellipse at center, ${glowColor} 0%, rgba(0,0,0,0) 70%)`,
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "15%",
          transform: `scale(${pulse})`,
          width: "700px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(66, 133, 244, 0.08) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
          filter: "blur(70px)",
        }}
      />

      {/* 3. Subtle Laser Scanline Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
          backgroundSize: "100% 4px",
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />

      {/* 4. CodingHorizon HUD Corner Bracket Accents */}
      <div
        style={{
          position: "absolute",
          top: "32px",
          left: "32px",
          width: "28px",
          height: "28px",
          borderTop: "2px solid rgba(0, 229, 255, 0.4)",
          borderLeft: "2px solid rgba(0, 229, 255, 0.4)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "32px",
          right: "32px",
          width: "28px",
          height: "28px",
          borderTop: "2px solid rgba(0, 229, 255, 0.4)",
          borderRight: "2px solid rgba(0, 229, 255, 0.4)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "32px",
          width: "28px",
          height: "28px",
          borderBottom: "2px solid rgba(0, 229, 255, 0.4)",
          borderLeft: "2px solid rgba(0, 229, 255, 0.4)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          right: "32px",
          width: "28px",
          height: "28px",
          borderBottom: "2px solid rgba(0, 229, 255, 0.4)",
          borderRight: "2px solid rgba(0, 229, 255, 0.4)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
