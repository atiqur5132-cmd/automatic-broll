import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { displayFontFamily, bodyFontFamily } from "../fonts";

export interface NameCardProps {
  name: string;
  role?: string;
}

export const NameCard: React.FC<NameCardProps> = ({ name, role }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Entrance animation (fade + slide up + blur clear)
  const enterProgress = interpolate(frame, [0, Math.round(fps * 0.6)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Exit animation (fade out + subtle slide)
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
  const translateY = interpolate(enterProgress, [0, 1], [36, 0]) +
    interpolate(exitProgress, [0, 1], [18, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: 100,
        bottom: 110,
        opacity: combinedOpacity,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "24px 36px",
        background: "rgba(11, 16, 29, 0.82)",
        backdropFilter: "blur(20px)",
        borderLeft: "5px solid #4f6ef7",
        borderRadius: "0 18px 18px 0",
        boxShadow: "0 20px 45px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          fontFamily: displayFontFamily,
          fontSize: 44,
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {name}
      </div>
      {role && (
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 22,
            fontWeight: 500,
            color: "#94a3b8",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {role}
        </div>
      )}
    </div>
  );
};
