import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const KaiLoopBottleneck: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = interpolate(Math.sin(frame / 6), [-1, 1], [0.7, 1.0]);

  const cardSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  return (
    <div
      style={{
        transform: `scale(${cardSpring})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Alert Warning Box */}
      <div
        style={{
          background: "rgba(35, 12, 18, 0.95)",
          border: "2px solid #FF2A55",
          borderRadius: "16px",
          padding: "16px 36px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          boxShadow: `0 0 ${30 * pulse}px rgba(255, 42, 85, 0.4)`,
        }}
      >
        <span style={{ fontSize: "28px" }}>⚠️</span>
        <span
          style={{
            color: "#FF2A55",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "0.15em",
          }}
        >
          CRITICAL FAILURE: SINGLE-LOOP DRIFT
        </span>
      </div>

      {/* Main 2.5D Inspection Box */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
        }}
      >
        {/* Left: Infinite Loop Visual */}
        <div
          style={{
            flex: 1,
            background: "rgba(18, 19, 24, 0.9)",
            border: "1px solid rgba(255, 42, 85, 0.4)",
            borderRadius: "20px",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              border: "3px dashed #FF2A55",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `rotate(${frame * 2}deg)`,
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "36px", transform: `rotate(-${frame * 2}deg)` }}>
              🔄
            </span>
          </div>

          <div
            style={{
              color: "#FFFFFF",
              fontSize: "22px",
              fontWeight: 800,
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            Context Window Degradation
          </div>
          <div
            style={{
              color: "#A1A1AA",
              fontSize: "14px",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Prompt $\rightarrow$ Tool Output $\rightarrow$ Error $\rightarrow$ Hallucination $\rightarrow$ Crash
          </div>
        </div>

        {/* Right: Dropoff Stat Counter */}
        <div
          style={{
            flex: 1,
            background: "rgba(18, 19, 24, 0.9)",
            border: "2px solid #FFD600",
            borderRadius: "20px",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 0 35px rgba(255, 214, 0, 0.2), 0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              color: "#FFD600",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.2em",
              marginBottom: "12px",
            }}
          >
            MULTI-STEP RELIABILITY
          </div>
          <div
            style={{
              color: "#FF2A55",
              fontSize: "80px",
              fontWeight: 900,
              fontFamily: "'JetBrains Mono', monospace",
              lineHeight: 1,
            }}
          >
            -64%
          </div>
          <div
            style={{
              color: "#E4E4E7",
              fontSize: "16px",
              fontWeight: 600,
              marginTop: "12px",
            }}
          >
            Collapse Rate Beyond 4 Consecutive Steps
          </div>
        </div>
      </div>
    </div>
  );
};
