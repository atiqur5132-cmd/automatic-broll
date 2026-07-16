import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { KIMI_K3_TRANSCRIPT } from "../../data/kimiTranscript";

export const KimiMillisecondCaptions: React.FC = () => {
  const frame = useCurrentFrame();

  // Find active segment based on current frame
  const currentSeg = KIMI_K3_TRANSCRIPT.find(
    (seg) => frame >= seg.fromFrame && frame <= seg.toFrame + 5
  );

  if (!currentSeg) {
    return null;
  }

  // Calculate entrance animation properties
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

  // Split segment text into words
  const words = currentSeg.text.trim().split(/\s+/);
  const segDuration = Math.max(1, currentSeg.toFrame - currentSeg.fromFrame);

  // Proportional word highlighting based on word character lengths
  // This aligns much better with natural speaking speeds than a flat linear division
  const wordLengths = words.map(w => w.replace(/[^\w]/g, "").length || 1);
  const totalLength = wordLengths.reduce((sum, len) => sum + len, 0);

  // Calculate cumulative timeline for each word
  let cumulativeWeight = 0;
  const wordThresholds = wordLengths.map(len => {
    cumulativeWeight += len;
    return cumulativeWeight / totalLength;
  });

  const progressRatio = Math.min(1, Math.max(0, localFrame / segDuration));
  
  // Find which word matches the current progress ratio
  let activeWordIndex = 0;
  for (let idx = 0; idx < wordThresholds.length; idx++) {
    if (progressRatio <= wordThresholds[idx]) {
      activeWordIndex = idx;
      break;
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: 75,
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
          background: "rgba(8, 10, 16, 0.94)",
          backdropFilter: "blur(20px)",
          border: "2px solid rgba(0, 240, 255, 0.55)",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.85), 0 0 30px rgba(0, 240, 255, 0.25)",
          borderRadius: 24,
          padding: "20px 48px",
          maxWidth: "86%",
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
                fontSize: 38,
                fontWeight: isActive ? 900 : 800,
                color: isActive
                  ? "#00F0FF"
                  : isPassed
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.6)",
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
