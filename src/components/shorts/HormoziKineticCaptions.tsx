import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { TOXIC_RELATIONSHIPS_TRANSCRIPT, TranscriptSegment } from "../../data/toxicRelationshipsTranscript";
import { displayFontFamily } from "../../fonts";

const NEGATIVE_KEYWORDS = [
  "hurting",
  "impossible",
  "addicted",
  "toxic",
  "ignore",
  "chaos",
  "pain",
  "withdrawal",
  "breaking",
];

const POSITIVE_KEYWORDS = [
  "love",
  "dopamine",
  "shower",
  "hope",
  "different",
  "connection",
  "rewarding",
  "psychology",
];

export const HormoziKineticCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find active segment
  const activeSegment: TranscriptSegment | undefined = TOXIC_RELATIONSHIPS_TRANSCRIPT.find(
    (seg) => frame >= seg.fromFrame && frame <= seg.toFrame
  );

  if (!activeSegment) {
    return null;
  }

  const words = activeSegment.text.split(/\s+/).filter(Boolean);
  const segDuration = Math.max(1, activeSegment.toFrame - activeSegment.fromFrame);
  const elapsed = Math.max(0, frame - activeSegment.fromFrame);
  const activeWordIdx = Math.min(
    words.length - 1,
    Math.floor((elapsed / segDuration) * words.length)
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 1250,
        left: 0,
        width: 1080,
        padding: "0 60px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "14px 18px",
        zIndex: 50,
      }}
    >
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
        const isActive = idx === activeWordIdx;
        const isNegative = NEGATIVE_KEYWORDS.some((kw) => cleanWord.includes(kw));
        const isPositive = POSITIVE_KEYWORDS.some((kw) => cleanWord.includes(kw));

        let color = "#FFFFFF";
        if (isActive) {
          if (isNegative) color = "#FF2E63";
          else if (isPositive) color = "#00F0FF";
          else color = "#FFD700";
        } else if (isNegative) {
          color = "#FF8BA7";
        } else if (isPositive) {
          color = "#8CEFFF";
        }

        const scale = isActive
          ? spring({
              frame: Math.max(0, frame - activeSegment.fromFrame - Math.floor((idx / words.length) * segDuration)),
              fps,
              config: { damping: 12, stiffness: 220 },
            })
          : 1;

        return (
          <span
            key={idx}
            style={{
              fontFamily: displayFontFamily,
              fontSize: isActive ? 60 : 48,
              fontWeight: 900,
              color,
              transform: isActive ? `scale(${Math.min(1.15, Math.max(1, scale * 1.15))})` : "scale(1)",
              textShadow: isActive
                ? `0 0 25px ${color}, 0 6px 20px rgba(0,0,0,0.95)`
                : "0 4px 15px rgba(0,0,0,0.85)",
              letterSpacing: isActive ? "2px" : "1px",
              textTransform: "uppercase",
              transition: "color 0.1s ease",
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
