import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily, bodyFontFamily } from "../fonts";

export const AnimatedHeadline: React.FC<{
  text: string;
  delay?: number;
  highlightWords?: string[];
  highlightColor?: string;
  fontSize?: number;
}> = ({
  text,
  delay = 0,
  highlightWords = [],
  highlightColor = "#38bdf8",
  fontSize = 68,
}) => {
  const frame = useCurrentFrame();
  const words = text.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "18px",
        fontFamily: displayFontFamily,
        fontSize,
        fontWeight: 900,
        lineHeight: 1.15,
        textAlign: "center",
        maxWidth: "1400px",
      }}
    >
      {words.map((word, i) => {
        const wordDelay = delay + i * 4;
        const progress = interpolate(
          frame - wordDelay,
          [0, 15],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }
        );

        const opacity = progress;
        const translateY = interpolate(progress, [0, 1], [30, 0]);
        const scale = interpolate(progress, [0, 1], [0.88, 1]);

        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={i}
            style={{
              opacity,
              transform: `translateY(${translateY}px) scale(${scale})`,
              color: isHighlighted ? highlightColor : "#f8fafc",
              textShadow: isHighlighted
                ? `0 0 30px ${highlightColor}66`
                : "0 4px 20px rgba(0,0,0,0.5)",
              display: "inline-block",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const AnimatedBadge: React.FC<{
  label: string;
  delay?: number;
  color?: string;
}> = ({ label, delay = 0, color = "#38bdf8" }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame - delay,
    [0, 18],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }
  );

  const opacity = progress;
  const translateY = interpolate(progress, [0, 1], [-20, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        padding: "10px 24px",
        borderRadius: "9999px",
        backgroundColor: `${color}1A`,
        border: `1px solid ${color}66`,
        color,
        fontFamily: bodyFontFamily,
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        boxShadow: `0 0 25px ${color}33`,
        marginBottom: "24px",
      }}
    >
      {label}
    </div>
  );
};
