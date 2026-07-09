import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const CinematicBackground: React.FC<{
  themeColor?: string;
  secondaryColor?: string;
}> = ({
  themeColor = "rgba(14, 165, 233, 0.18)", // cyan glow
  secondaryColor = "rgba(139, 92, 246, 0.15)", // violet glow
}) => {
  const frame = useCurrentFrame();

  // Floating ambient glow 1
  const glow1X = interpolate(frame % 900, [0, 450, 900], [20, 75, 20]);
  const glow1Y = interpolate(frame % 700, [0, 350, 700], [25, 65, 25]);

  // Floating ambient glow 2
  const glow2X = interpolate(frame % 800, [0, 400, 800], [80, 25, 80]);
  const glow2Y = interpolate(frame % 600, [0, 300, 600], [75, 30, 75]);

  // Grid line drift
  const gridOffsetY = (frame * 0.4) % 60;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#070913", // Deep rich dark navy
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Dynamic ambient gradient glow 1 */}
      <div
        style={{
          position: "absolute",
          top: `${glow1Y}%`,
          left: `${glow1X}%`,
          width: "900px",
          height: "900px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${themeColor} 0%, rgba(0,0,0,0) 70%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Dynamic ambient gradient glow 2 */}
      <div
        style={{
          position: "absolute",
          top: `${glow2Y}%`,
          left: `${glow2X}%`,
          width: "850px",
          height: "850px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${secondaryColor} 0%, rgba(0,0,0,0) 70%)`,
          filter: "blur(50px)",
        }}
      />

      {/* Subtle modern cyber grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: `0px ${gridOffsetY}px`,
          opacity: 0.7,
        }}
      />

      {/* Subtle radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 40%, rgba(4, 6, 12, 0.75) 100%)",
        }}
      />
    </div>
  );
};
