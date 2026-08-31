import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

export const HighlightedTextLine: React.FC<{
  children: React.ReactNode;
  startFrame: number;
  duration?: number;
  color?: string;
}> = ({
  children,
  startFrame,
  duration = 24,
  color = "rgba(250, 204, 21, 0.4)",
}) => {
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
    <span style={{ position: "relative", display: "inline-block", padding: "0 4px" }}>
      <span
        style={{
          position: "absolute",
          left: 0,
          bottom: "10%",
          height: "80%",
          width: `${widthPct}%`,
          backgroundColor: color,
          borderRadius: "4px",
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1, color: "#FFFFFF", fontWeight: 700 }}>
        {children}
      </span>
    </span>
  );
};

export const Perspective3DCard: React.FC<{
  children: React.ReactNode;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  translateZ?: number;
  borderColor?: string;
  glowColor?: string;
}> = ({
  children,
  rotateX = 8,
  rotateY = -6,
  rotateZ = 0,
  translateZ = 0,
  borderColor = "rgba(255, 255, 255, 0.12)",
  glowColor = "rgba(0, 163, 255, 0.15)",
}) => {
  return (
    <div
      style={{
        perspective: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) translateZ(${translateZ}px)`,
          transformStyle: "preserve-3d",
          background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
          border: `1px solid ${borderColor}`,
          borderRadius: "24px",
          boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 40px ${glowColor}`,
          padding: "36px",
          backdropFilter: "blur(8px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
