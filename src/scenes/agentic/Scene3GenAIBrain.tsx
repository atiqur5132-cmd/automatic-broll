import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";
import { KaiWireframeBrain } from "../../components/kai/KaiWireframeBrain";

export const Scene3GenAIBrain: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });

  return (
    <KaiCanvas activeAccent="#38BDF8">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(56, 189, 248, 0.1)",
            border: "1px solid rgba(56, 189, 248, 0.4)",
            borderRadius: "20px",
            padding: "8px 22px",
            color: "#38BDF8",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            transform: `scale(${titleSpring})`,
          }}
        >
          <span>🧠</span> LAYER 01 • GENERATIVE AI
        </div>

        <h2
          style={{
            fontSize: "60px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            textAlign: "center",
            textTransform: "uppercase",
            margin: 0,
            transform: `scale(${titleSpring})`,
          }}
        >
          The Isolated <span style={{ color: "#38BDF8" }}>Predictive Brain</span>
        </h2>

        <KaiWireframeBrain />
      </div>
    </KaiCanvas>
  );
};
