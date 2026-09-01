import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";
import { KaiLoopBottleneck } from "../../components/kai/KaiLoopBottleneck";

export const Scene7SingleLoopBottleneck: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });

  return (
    <KaiCanvas activeAccent="#FF2A55">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255, 42, 85, 0.1)",
            border: "1px solid rgba(255, 42, 85, 0.4)",
            borderRadius: "20px",
            padding: "8px 22px",
            color: "#FF2A55",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            transform: `scale(${titleSpring})`,
          }}
        >
          <span>📉</span> PRODUCTION BOTTLENECK
        </div>

        <h2
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            textAlign: "center",
            textTransform: "uppercase",
            margin: 0,
            transform: `scale(${titleSpring})`,
          }}
        >
          The Single-Loop <span style={{ color: "#FF2A55" }}>Failure Mode</span>
        </h2>

        <KaiLoopBottleneck />
      </div>
    </KaiCanvas>
  );
};
