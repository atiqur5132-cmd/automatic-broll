import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { MACRO_ENVIRONMENTS } from "../data/privacyBeats";

export const MacroBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Find active macro environment
  const currentEnv =
    MACRO_ENVIRONMENTS.find(
      (env) => frame >= env.fromFrame && frame < env.fromFrame + env.durationInFrames
    ) || MACRO_ENVIRONMENTS[MACRO_ENVIRONMENTS.length - 1];

  // Continuous subtle zoom and drift motion
  const scale = 1 + Math.sin(frame * 0.012) * 0.03;
  const transX = Math.sin(frame * 0.008) * 15;
  const transY = Math.cos(frame * 0.009) * 12;

  // Pattern styling
  const patternStyles: React.CSSProperties =
    currentEnv.theme.patternType === "grid"
      ? {
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }
      : currentEnv.theme.patternType === "dots"
        ? {
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.07) 1.5px, transparent 1.5px)`,
            backgroundSize: "36px 36px",
          }
        : currentEnv.theme.patternType === "matrix"
          ? {
              backgroundImage: `
            linear-gradient(rgba(192, 132, 252, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192, 132, 252, 0.05) 1px, transparent 1px)
          `,
              backgroundSize: "40px 40px",
            }
          : {
              backgroundImage: `radial-gradient(${currentEnv.theme.glowColor} 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            };

  return (
    <AbsoluteFill
      style={{
        background: currentEnv.theme.bgGradient,
        overflow: "hidden",
      }}
    >
      {/* Moving pattern mesh layer */}
      <AbsoluteFill
        style={{
          ...patternStyles,
          scale: `${scale}`,
          translate: `${transX}px ${transY}px`,
          opacity: 0.8,
        }}
      />

      {/* Dynamic ambient glowing orb top-left */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${currentEnv.theme.glowColor} 0%, transparent 70%)`,
          filter: "blur(70px)",
          translate: `${transX * 1.8}px ${transY * 1.5}px`,
          pointerEvents: "none",
        }}
      />

      {/* Dynamic ambient glowing orb bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-15%",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${currentEnv.theme.glowColor} 0%, transparent 75%)`,
          filter: "blur(90px)",
          translate: `${-transX * 1.5}px ${-transY * 1.2}px`,
          pointerEvents: "none",
        }}
      />

      {/* Ambient cinematic vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.65) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
