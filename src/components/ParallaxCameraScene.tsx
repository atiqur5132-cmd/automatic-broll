import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

interface ParallaxCameraProps {
  children: React.ReactNode;
  zoomFrom?: number;
  zoomTo?: number;
  panX?: number;
  panY?: number;
  tiltDeg?: number;
}

export const ParallaxCameraScene: React.FC<ParallaxCameraProps> = ({
  children,
  zoomFrom = 1,
  zoomTo = 1.08,
  panX = 0,
  panY = 0,
  tiltDeg = 0,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(progress, [0, 1], [zoomFrom, zoomTo]);
  const translateX = interpolate(progress, [0, 1], [0, panX]);
  const translateY = interpolate(progress, [0, 1], [0, panY]);
  const rotate = interpolate(progress, [0, 1], [0, tiltDeg]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#08090C",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};
