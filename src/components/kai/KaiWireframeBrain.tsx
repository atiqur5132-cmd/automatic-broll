import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const KaiWireframeBrain: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const brainSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const probability = (99.1 + Math.sin(frame / 8) * 0.7).toFixed(1);

  return (
    <div
      style={{
        transform: `scale(${brainSpring})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        width: "1200px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left: Glowing Cyber Brain SVG */}
      <div
        style={{
          width: "360px",
          height: "360px",
          borderRadius: "24px",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, rgba(14, 16, 22, 0.95) 80%)",
          border: "2px solid #00E5FF",
          boxShadow: "0 0 45px rgba(0, 229, 255, 0.3), inset 0 0 30px rgba(0, 229, 255, 0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 0 15px #00E5FF)" }}
        >
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04" />
        </svg>

        <div
          style={{
            marginTop: "16px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            color: "#00E5FF",
            letterSpacing: "0.2em",
            fontWeight: 800,
          }}
        >
          ISOLATED NEURAL CORE
        </div>
      </div>

      {/* Right: Technical Token Predictor Card */}
      <div
        style={{
          flex: 1,
          background: "rgba(18, 20, 26, 0.95)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "20px",
          padding: "36px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#38BDF8",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.15em",
          }}
        >
          <span>●</span> STATISTICAL NEXT-TOKEN PROJECTION
        </div>

        <div style={{ color: "#FFFFFF", fontSize: "32px", fontWeight: 900, lineHeight: 1.2 }}>
          P(token<sub>t+1</sub> | token<sub>1...t</sub>)
        </div>

        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(0, 229, 255, 0.2)",
            borderRadius: "12px",
            padding: "16px 20px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            color: "#A1A1AA",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Confidence Score:</span>
          <span style={{ color: "#00E5FF", fontWeight: 800, fontSize: "18px" }}>
            {probability}%
          </span>
        </div>

        <div
          style={{
            color: "#EF4444",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "6px",
          }}
        >
          <span>❌</span> Sandbox Execution: <strong>DISABLED</strong>
        </div>
      </div>
    </div>
  );
};
