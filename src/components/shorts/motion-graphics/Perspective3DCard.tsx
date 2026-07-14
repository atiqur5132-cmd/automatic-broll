import React from "react";
import { useCurrentFrame } from "remotion";

export interface Perspective3DCardProps {
  title: string;
  badge: string;
  borderColor?: string;
  glowColor?: string;
  children?: React.ReactNode;
  width?: number;
}

export const Perspective3DCard: React.FC<Perspective3DCardProps> = ({
  title,
  badge,
  borderColor = "#00F0FF",
  glowColor = "rgba(0, 240, 255, 0.25)",
  children,
  width = 920,
}) => {
  const frame = useCurrentFrame();

  // Dynamic 3D Card Orbit Tilt
  const rotateY = Math.sin(frame * 0.04) * 6;
  const rotateX = Math.cos(frame * 0.035) * 5;

  // Moving Laser Scanline across top border
  const scanLinePos = (frame * 5) % 100;

  return (
    <div style={{ perspective: 1400, width }}>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(155deg, rgba(18, 22, 38, 0.88), rgba(8, 10, 18, 0.96))",
          backdropFilter: "blur(30px)",
          border: `1.5px solid ${borderColor}66`,
          borderRadius: 36,
          padding: "46px 44px",
          boxShadow: `0 35px 85px rgba(0,0,0,0.92), 0 0 55px ${glowColor}`,
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Laser Top Border Highlight */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${scanLinePos - 20}%`,
            width: "30%",
            height: 3,
            background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
            boxShadow: `0 0 15px ${borderColor}`,
          }}
        />

        {/* Specular Sheen Sweep */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${((frame * 3.5) % 200) - 50}%`,
            width: "35%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
            transform: "skewX(-25deg)",
            pointerEvents: "none",
          }}
        />

        {/* Inner Floating Layer (+35px Z-Depth) */}
        <div style={{ transform: "translateZ(35px)" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 22px",
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

          <div style={{ transform: "translateZ(20px)" }}>{children}</div>
        </div>
      </div>
    </div>
  );
};
