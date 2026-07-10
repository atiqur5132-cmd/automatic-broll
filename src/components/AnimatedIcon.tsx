import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import * as LucideIcons from "lucide-react";

export interface AnimatedIconProps {
  name: string;
  size?: number;
  color?: string;
  delay?: number;
  index?: number;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  name,
  size = 72,
  color = "#60a5fa",
  delay = 0,
  index = 0,
}) => {
  const frame = useCurrentFrame();

  // Entrance scale and opacity
  const enterFrame = Math.max(0, frame - delay);
  const opacity = interpolate(enterFrame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const enterScale = interpolate(enterFrame, [0, 18], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Continuous floating and breathing motion
  const floatY = Math.sin((frame + index * 15) * 0.05) * 6;
  const floatRotate = Math.sin((frame + index * 20) * 0.04) * 3;

  // Resolve Lucide Icon dynamically
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Activity;

  return (
    <div
      style={{
        opacity,
        scale: `${enterScale}`,
        translate: `0px ${floatY}px`,
        rotate: `${floatRotate}deg`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "24px",
        background: "rgba(20, 26, 43, 0.85)",
        border: `1px solid ${color}44`,
        boxShadow: `0 12px 35px ${color}25, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
      }}
    >
      <IconComponent size={size} color={color} strokeWidth={1.8} />
    </div>
  );
};
