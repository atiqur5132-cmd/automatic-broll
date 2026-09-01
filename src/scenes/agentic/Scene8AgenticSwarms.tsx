import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";
import { KaiSupervisorGraph } from "../../components/kai/KaiSupervisorGraph";

export const Scene8AgenticSwarms: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });

  return (
    <KaiCanvas activeAccent="#FFD600">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255, 214, 0, 0.1)",
            border: "1px solid rgba(255, 214, 0, 0.4)",
            borderRadius: "20px",
            padding: "8px 22px",
            color: "#FFD600",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            transform: `scale(${titleSpring})`,
          }}
        >
          <span>👑</span> LAYER 03 • AGENTIC AI (LANGGRAPH)
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
          Multi-Agent <span style={{ color: "#FFD600" }}>Orchestration Swarms</span>
        </h2>

        <KaiSupervisorGraph activeStep="code" />
      </div>
    </KaiCanvas>
  );
};
