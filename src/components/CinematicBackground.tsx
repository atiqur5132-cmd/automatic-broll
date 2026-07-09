import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";

export interface CinematicBackgroundProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({
  primaryColor = "#0f172a",
  secondaryColor = "#1e1b4b",
  accentColor = "#38bdf8",
}) => {
  const frame = useCurrentFrame();

  // Floating ambient light orb 1 (slow drift & breathing)
  const orb1X = interpolate(frame, [0, 900], [20, 75], {
    easing: Easing.inOut(Easing.sin),
    extrapolateLeft: "extend",
    extrapolateRight: "extend",
  });
  const orb1Y = interpolate(frame, [0, 900], [15, 65], {
    easing: Easing.inOut(Easing.sin),
    extrapolateLeft: "extend",
    extrapolateRight: "extend",
  });
  const orb1Scale = interpolate(frame, [0, 450, 900], [1, 1.15, 1], {
    extrapolateLeft: "extend",
    extrapolateRight: "extend",
  });

  // Floating ambient light orb 2 (opposite slow drift)
  const orb2X = interpolate(frame, [0, 900], [80, 25], {
    easing: Easing.inOut(Easing.sin),
    extrapolateLeft: "extend",
    extrapolateRight: "extend",
  });
  const orb2Y = interpolate(frame, [0, 900], [80, 20], {
    easing: Easing.inOut(Easing.sin),
    extrapolateLeft: "extend",
    extrapolateRight: "extend",
  });

  // Subtle global hue pulse
  const glowOpacity = interpolate(frame, [0, 150, 300], [0.35, 0.55, 0.35], {
    extrapolateLeft: "extend",
    extrapolateRight: "extend",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: primaryColor,
        overflow: "hidden",
      }}
    >
      {/* Deep gradient base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${secondaryColor} 0%, ${primaryColor} 85%)`,
        }}
      />

      {/* Moving Ambient Orb 1 */}
      <div
        style={{
          position: "absolute",
          left: `${orb1X}%`,
          top: `${orb1Y}%`,
          width: 900,
          height: 900,
          marginLeft: -450,
          marginTop: -450,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
          filter: "blur(90px)",
          scale: orb1Scale,
          opacity: glowOpacity,
        }}
      />

      {/* Moving Ambient Orb 2 */}
      <div
        style={{
          position: "absolute",
          left: `${orb2X}%`,
          top: `${orb2Y}%`,
          width: 800,
          height: 800,
          marginLeft: -400,
          marginTop: -400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryColor}80 0%, transparent 75%)`,
          filter: "blur(110px)",
          opacity: 0.6,
        }}
      />

      {/* Subtle grid pattern overlay for cinematic depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
        }}
      />

      {/* Subtle animated Vignette edge shadow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 55%, rgba(0, 0, 0, 0.65) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
