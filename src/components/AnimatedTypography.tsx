import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily, bodyFontFamily } from "../fonts";

export interface AnimatedTypographyProps {
  keyword: string;
  subtitle?: string;
  accentColor?: string;
  delayFrames?: number;
  scaleAmount?: number;
}

export const AnimatedTypography: React.FC<AnimatedTypographyProps> = ({
  keyword,
  subtitle,
  accentColor = "#38bdf8",
  delayFrames = 0,
  scaleAmount = 1,
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - delayFrames);

  const words = keyword.split(" ");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      {subtitle && (
        <SubTitleText
          text={subtitle}
          localFrame={localFrame}
          accentColor={accentColor}
        />
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "18px",
          marginTop: subtitle ? "14px" : "0px",
          scale: scaleAmount,
        }}
      >
        {words.map((word, idx) => (
          <WordReveal
            key={idx}
            word={word}
            index={idx}
            localFrame={localFrame}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
};

const WordReveal: React.FC<{
  word: string;
  index: number;
  localFrame: number;
  accentColor: string;
}> = ({ word, index, localFrame, accentColor }) => {
  const wordDelay = index * 4;
  const wordFrame = Math.max(0, localFrame - wordDelay);

  const opacity = interpolate(wordFrame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const translateY = interpolate(wordFrame, [0, 16], [35, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const blur = interpolate(wordFrame, [0, 12], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(wordFrame, [0, 16], [0.88, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <span
      style={{
        fontFamily: displayFontFamily,
        fontSize: 78,
        fontWeight: 900,
        color: "#ffffff",
        letterSpacing: "-0.03em",
        opacity,
        translate: `0px ${translateY}px`,
        scale,
        filter: `blur(${blur}px)`,
        textShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 40px ${accentColor}40`,
      }}
    >
      {word}
    </span>
  );
};

const SubTitleText: React.FC<{
  text: string;
  localFrame: number;
  accentColor: string;
}> = ({ text, localFrame, accentColor }) => {
  const opacity = interpolate(localFrame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(localFrame, [0, 15], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        fontFamily: bodyFontFamily,
        fontSize: 26,
        fontWeight: 600,
        color: accentColor,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        opacity,
        translate: `0px ${translateY}px`,
      }}
    >
      {text}
    </div>
  );
};
