import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { GEMINI_LEAKS_TRANSCRIPT } from "../../data/geminiLeaksTranscript";

export const GeminiMillisecondCaptions: React.FC = () => {
  const frame = useCurrentFrame();

  // Find active segment
  const currentSeg = GEMINI_LEAKS_TRANSCRIPT.find(
    (seg) => frame >= seg.fromFrame && frame <= seg.toFrame + 5
  );

  if (!currentSeg) {
    return null;
  }

  // Calculate entrance progress
  const localFrame = frame - currentSeg.fromFrame;
  const opacity = interpolate(localFrame, [0, 4], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(localFrame, [0, 5], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Calculate word-level highlighting based on segment progress
  const words = currentSeg.text.trim().split(/\s+/);
  const segDuration = Math.max(1, currentSeg.toFrame - currentSeg.fromFrame);
  const progressRatio = Math.min(1, Math.max(0, localFrame / segDuration));
  const activeWordIndex = Math.min(
    words.length - 1,
    Math.floor(progressRatio * words.length)
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 55,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 9500,
        opacity,
        translate: `0px ${translateY}px`,
      }}
    >
      <div
        style={{
          background: "rgba(8, 10, 16, 0.92)",
          backdropFilter: "blur(20px)",
          border: "2px solid rgba(0, 240, 255, 0.5)",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.85), 0 0 30px rgba(0, 240, 255, 0.2)",
          borderRadius: 24,
          padding: "20px 48px",
          maxWidth: "84%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {words.map((word, i) => {
          const isActive = i === activeWordIndex;
          const isPassed = i < activeWordIndex;

          return (
            <span
              key={i}
              style={{
                fontSize: 36,
                fontWeight: isActive ? 900 : 800,
                color: isActive
                  ? "#00F0FF"
                  : isPassed
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.65)",
                textShadow: isActive
                  ? "0 0 20px rgba(0, 240, 255, 0.8)"
                  : "0 2px 10px rgba(0,0,0,0.8)",
                transform: isActive ? "scale(1.08)" : "scale(1)",
                display: "inline-block",
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
