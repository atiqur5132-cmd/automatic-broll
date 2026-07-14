import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { displayFontFamily } from "../../../fonts";

export interface MassiveKineticTitleProps {
  /** Concise punchy headline (1-5 words max) */
  text: string;
  /** Index of word to emphasize with neon accent */
  activeWordIndex?: number;
  /** Primary text color */
  textColor?: string;
  /** Accent / neon glow color for active keyword */
  accentColor?: string;
  /** Massive font size (default 72px) */
  fontSize?: number;
}

export const MassiveKineticTitle: React.FC<MassiveKineticTitleProps> = ({
  text,
  activeWordIndex = 0,
  textColor = "#FFFFFF",
  accentColor = "#00F0FF",
  fontSize = 72,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "18px 24px",
        width: "100%",
        padding: "20px 30px",
        textAlign: "center",
      }}
    >
      {words.map((word, idx) => {
        const isActive = idx === activeWordIndex;
        const delay = idx * 3;

        const scale = spring({
          frame: Math.max(0, frame - delay),
          fps,
          config: { damping: 14, stiffness: 120, mass: 0.8 },
        });

        const activeScale = isActive ? 1.15 : 1.0;

        return (
          <span
            key={`${word}-${idx}`}
            style={{
              fontFamily: displayFontFamily,
              fontSize: isActive ? fontSize * 1.08 : fontSize,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: 2,
              lineHeight: 1.1,
              color: isActive ? accentColor : textColor,
              transform: `scale(${scale * activeScale})`,
              display: "inline-block",
              textShadow: isActive
                ? `0 0 35px ${accentColor}, 0 15px 30px rgba(0,0,0,0.95)`
                : `0 15px 30px rgba(0,0,0,0.95)`,
              filter: isActive
                ? `drop-shadow(0 0 15px ${accentColor}88)`
                : "none",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
