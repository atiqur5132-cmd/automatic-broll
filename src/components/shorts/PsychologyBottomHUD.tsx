import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { displayFontFamily } from "../../fonts";

export const PsychologyBottomHUD: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progressPct = Math.min(100, Math.max(0, (frame / durationInFrames) * 100));

  return (
    <div
      style={{
        position: "absolute",
        top: 1510,
        left: 70,
        width: 940,
        height: 310,
        background: "linear-gradient(155deg, rgba(14, 18, 32, 0.88), rgba(6, 8, 16, 0.94))",
        border: "1.5px solid rgba(0, 240, 255, 0.35)",
        borderRadius: 32,
        boxShadow: "0 20px 60px rgba(0,0,0,0.85), 0 0 40px rgba(0, 240, 255, 0.15)",
        padding: "26px 36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 30,
      }}
    >
      {/* Header Info Row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#FF2E63",
              boxShadow: "0 0 12px #FF2E63",
            }}
          />
          <span
            style={{
              fontFamily: displayFontFamily,
              fontSize: 18,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: 2,
            }}
          >
            BEHAVIORAL PSYCHOLOGY LAB
          </span>
        </div>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 16,
            fontWeight: 800,
            color: "#00F0FF",
            letterSpacing: 1.5,
          }}
        >
          SUBCONSCIOUS PATTERNS
        </div>
      </div>

      {/* Animated Live Audio Spectrum Waveform */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 110, padding: "0 10px" }}>
        {Array.from({ length: 28 }).map((_, i) => {
          const baseHeight = 25 + Math.abs(Math.sin(frame * 0.22 + i * 0.45)) * 75;
          const isAccent = i % 4 === 0;
          return (
            <div
              key={i}
              style={{
                width: 18,
                height: baseHeight,
                backgroundColor: isAccent ? "#FF2E63" : i % 2 === 0 ? "#00F0FF" : "#FFD700",
                borderRadius: 9,
                boxShadow: isAccent
                  ? "0 0 14px rgba(255,46,99,0.7)"
                  : "0 0 10px rgba(0,240,255,0.5)",
                transition: "height 0.05s ease",
              }}
            />
          );
        })}
      </div>

      {/* Bottom Progress Bar & Timing Label */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>
          <span>NEUROLOGICAL BREAKDOWN IN PROGRESS</span>
          <span>{Math.round(progressPct)}% COMPLETE</span>
        </div>
        <div
          style={{
            width: "100%",
            height: 8,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progressPct}%`,
              height: "100%",
              background: "linear-gradient(90deg, #FF2E63, #00F0FF)",
              boxShadow: "0 0 10px #00F0FF",
            }}
          />
        </div>
      </div>
    </div>
  );
};
