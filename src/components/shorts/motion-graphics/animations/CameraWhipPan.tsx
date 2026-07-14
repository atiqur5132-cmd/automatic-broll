import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

export interface CameraWhipPanProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  durationFrames?: number;
  startFrame?: number;
}

export const CameraWhipPan: React.FC<CameraWhipPanProps> = ({
  children,
  direction = "left",
  durationFrames = 14,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const localFrame = Math.max(0, frame - startFrame);

  const progress = interpolate(localFrame, [0, durationFrames], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Calculate position offset
  const distanceX = direction === "left" ? width : direction === "right" ? -width : 0;
  const distanceY = direction === "up" ? height : direction === "down" ? -height : 0;

  const translateX = interpolate(progress, [0, 1], [distanceX, 0]);
  const translateY = interpolate(progress, [0, 1], [distanceY, 0]);

  // Directional motion blur during highest velocity (middle of transition)
  const velocityBlur = interpolate(progress, [0, 0.3, 0.7, 1], [0, 24, 18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const filterStyle =
    direction === "left" || direction === "right"
      ? `blur(${velocityBlur}px)`
      : `blur(${velocityBlur}px)`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `translate3d(${translateX}px, ${translateY}px, 0px)`,
          filter: velocityBlur > 1 ? filterStyle : "none",
          willChange: "transform, filter",
        }}
      >
        {children}
      </div>
    </div>
  );
};
