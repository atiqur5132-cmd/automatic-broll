import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

export interface MaskRevealWipeProps {
  children: React.ReactNode;
  mode?: "angled-slice" | "circle-iris" | "vertical-shutter";
  durationFrames?: number;
  startFrame?: number;
}

export const MaskRevealWipe: React.FC<MaskRevealWipeProps> = ({
  children,
  mode = "angled-slice",
  durationFrames = 18,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - startFrame);

  const progress = interpolate(localFrame, [0, durationFrames], [0, 100], {
    easing: Easing.bezier(0.2, 0.9, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  let clipPath = "";

  if (mode === "angled-slice") {
    // Angled wipe across diagonal
    const p1 = Math.min(100, progress * 1.2);
    const p2 = Math.max(0, progress * 1.2 - 20);
    clipPath = `polygon(0% 0%, ${p1}% 0%, ${p2}% 100%, 0% 100%)`;
  } else if (mode === "circle-iris") {
    // Expanding circular iris from center
    const radius = progress * 1.5;
    clipPath = `circle(${radius}% at 50% 50%)`;
  } else {
    // Vertical shutter down
    clipPath = `polygon(0% 0%, 100% 0%, 100% ${progress}%, 0% ${progress}%)`;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        clipPath,
      }}
    >
      {children}
    </div>
  );
};
