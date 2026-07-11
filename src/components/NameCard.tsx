import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { displayFontFamily, bodyFontFamily } from "../fonts";

export interface NameCardProps {
  name: string;
  role?: string;
  borderColor?: string;
}

export const NameCard: React.FC<NameCardProps> = ({ name, role, borderColor = "#FFB800" }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Slide-from-left entrance
  const enterProgress = interpolate(frame, [0, Math.round(fps * 0.6)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const exitProgress = interpolate(
    frame,
    [durationInFrames - Math.round(fps * 0.5), durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.4, 0, 1, 1),
    }
  );

  const combinedOpacity = enterProgress * exitProgress;
  const translateX = interpolate(enterProgress, [0, 1], [-100, 0]) +
    interpolate(exitProgress, [0, 1], [0, -50]);

  return (
    <div
      style={{
        position: "absolute",
        left: 100,
        bottom: 110,
        opacity: combinedOpacity,
        transform: `translateX(${translateX}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: "20px 32px",
        background: "rgba(13, 14, 18, 0.88)",
        backdropFilter: "blur(20px)",
        borderLeft: `5px solid ${borderColor}`,
        borderRadius: "0 18px 18px 0",
        boxShadow: "0 20px 45px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          fontFamily: displayFontFamily,
          fontSize: 40,
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
        }}
      >
        {name}
      </div>
      {role && (
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 20,
            fontWeight: 600,
            color: "#94a3b8",
            letterSpacing: "0.02em",
          }}
        >
          {role}
        </div>
      )}
    </div>
  );
};
