import React from "react";
import { useCurrentFrame } from "remotion";
import sentencesData from "../../data/agentic_sentences.json";

export const KaiSubtitleOverlay: React.FC = () => {
  const frame = useCurrentFrame();

  const currentSentence = sentencesData.find(
    (s) => frame >= s.startFrame && frame <= s.endFrame + 5
  );

  if (!currentSentence) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          background: "rgba(10, 11, 14, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "14px",
          padding: "16px 36px",
          color: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
          fontSize: "26px",
          fontWeight: 800,
          textAlign: "center",
          letterSpacing: "0.02em",
          lineHeight: 1.3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(0, 229, 255, 0.15)",
        }}
      >
        <span style={{ color: "#00E5FF", marginRight: "8px" }}>●</span>
        {currentSentence.text}
      </div>
    </div>
  );
};
