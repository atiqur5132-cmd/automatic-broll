import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

export interface WhisperSegment {
  offsets: {
    from: number; // in ms
    to: number;   // in ms
  };
  text: string;
}

export interface RealtimeSpokenCaptionsProps {
  transcription: WhisperSegment[];
  fps?: number;
}

/**
 * Real-Time Dynamic Word-by-Word Spoken Captions for YouTube Shorts.
 * Highlights the exact word being spoken in real-time with neon glow & kinetic punch.
 */
export const RealtimeSpokenCaptions: React.FC<RealtimeSpokenCaptionsProps> = ({
  transcription,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentMs = (frame / fps) * 1000;

  // Filter out empty or special token items
  const words = transcription
    .map((item, idx) => ({
      idx,
      text: item.text.trim().replace(/^[,.-]+|[,.-]+$/g, ""),
      rawText: item.text.trim(),
      fromMs: item.offsets.from,
      toMs: item.offsets.to,
      fromFrame: Math.floor((item.offsets.from / 1000) * fps),
      toFrame: Math.ceil((item.offsets.to / 1000) * fps),
    }))
    .filter((w) => w.text.length > 0);

  // Find the currently spoken word index
  let activeIdx = words.findIndex(
    (w) => currentMs >= w.fromMs - 80 && currentMs <= w.toMs + 120
  );

  // Fallback: nearest previous word if between gaps
  if (activeIdx === -1) {
    for (let i = words.length - 1; i >= 0; i--) {
      if (currentMs >= words[i].fromMs) {
        activeIdx = i;
        break;
      }
    }
  }

  if (activeIdx === -1 || !words[activeIdx]) {
    return null;
  }

  // Group 3 to 4 words around active word for context chunk
  const chunkStart = Math.max(0, Math.floor(activeIdx / 4) * 4);
  const chunkWords = words.slice(chunkStart, chunkStart + 4);

  return (
    <div
      style={{
        position: "absolute",
        top: 1320,
        left: 0,
        width: 1080,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          padding: "18px 40px",
          borderRadius: 24,
          background: "rgba(8, 10, 20, 0.88)",
          border: "2px solid rgba(0, 255, 194, 0.3)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.85), inset 0 0 30px rgba(0,255,194,0.1)",
          maxWidth: 960,
        }}
      >
        {chunkWords.map((word) => {
          const isActive = word.idx === activeIdx;

          // Kinetic word scale when active
          const wordScale = isActive ? 1.15 : 1.0;
          const wordColor = isActive ? "#00FFC2" : "#FFFFFF";
          const wordShadow = isActive
            ? "0 0 25px rgba(0,255,194,0.9), 0 0 45px rgba(0,255,194,0.5)"
            : "0 2px 8px rgba(0,0,0,0.8)";

          return (
            <span
              key={word.idx}
              style={{
                fontFamily: "SpaceGrotesk, sans-serif",
                fontSize: 56,
                fontWeight: 900,
                textTransform: "uppercase",
                color: wordColor,
                textShadow: wordShadow,
                transform: `scale(${wordScale})`,
                letterSpacing: 1.5,
                lineHeight: 1.1,
              }}
            >
              {word.rawText}
            </span>
          );
        })}
      </div>
    </div>
  );
};
