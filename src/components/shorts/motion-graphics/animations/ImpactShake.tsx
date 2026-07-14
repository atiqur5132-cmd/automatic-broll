import React from "react";
import { useCurrentFrame } from "remotion";

export interface ImpactShakeProps {
  children: React.ReactNode;
  triggerFrame?: number;
  intensity?: number;
  decayFrames?: number;
}

export const ImpactShake: React.FC<ImpactShakeProps> = ({
  children,
  triggerFrame = 0,
  intensity = 18,
  decayFrames = 14,
}) => {
  const frame = useCurrentFrame();
  const elapsed = frame - triggerFrame;

  let dx = 0;
  let dy = 0;
  let split = 0;

  if (elapsed >= 0 && elapsed <= decayFrames) {
    const decay = Math.pow(1 - elapsed / decayFrames, 2);
    dx = Math.sin(elapsed * 4.2) * intensity * decay;
    dy = Math.cos(elapsed * 5.1) * intensity * decay;
    split = intensity * decay * 0.4;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        transform: `translate3d(${dx}px, ${dy}px, 0px)`,
        filter:
          split > 1.5
            ? `drop-shadow(${split}px 0px 0px rgba(255, 0, 85, 0.75)) drop-shadow(-${split}px 0px 0px rgba(0, 240, 255, 0.75))`
            : "none",
      }}
    >
      {children}
    </div>
  );
};
