import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";

export interface OrigamiFoldCardProps {
  children: React.ReactNode;
  axis?: "Y" | "X";
  origin?: string;
  delay?: number;
}

export const OrigamiFoldCard: React.FC<OrigamiFoldCardProps> = ({
  children,
  axis = "Y",
  origin = "left center",
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = Math.max(0, frame - delay);

  const foldAngle = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 85, mass: 0.9 },
  });

  // Angle swings from 95deg (folded away) to 0deg (flat)
  const angle = (1 - foldAngle) * 95;
  const opacity = Math.min(1, foldAngle * 1.8);

  const transform =
    axis === "Y" ? `rotateY(${angle}deg)` : `rotateX(${-angle}deg)`;

  return (
    <div
      style={{
        perspective: 1600,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          transform,
          transformOrigin: origin,
          transformStyle: "preserve-3d",
          opacity,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            angle > 5
              ? `20px 30px 60px rgba(0,0,0,0.85)`
              : `0 20px 45px rgba(0,0,0,0.7)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
