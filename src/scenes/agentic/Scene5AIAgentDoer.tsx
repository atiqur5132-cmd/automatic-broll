import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";
import { KaiAgentToolBelt } from "../../components/kai/KaiAgentToolBelt";

export const Scene5AIAgentDoer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });

  // Cycle highlighted tools
  const activeTool = Math.floor((frame / 80) % 4);

  return (
    <KaiCanvas activeAccent="#FACC15">
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
            background: "rgba(250, 204, 21, 0.1)",
            border: "1px solid rgba(250, 204, 21, 0.4)",
            borderRadius: "20px",
            padding: "8px 22px",
            color: "#FACC15",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            transform: `scale(${titleSpring})`,
          }}
        >
          <span>🛠️</span> LAYER 02 • AI AGENTS
        </div>

        <h2
          style={{
            fontSize: "58px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            textAlign: "center",
            textTransform: "uppercase",
            margin: 0,
            transform: `scale(${titleSpring})`,
          }}
        >
          Equipped with <span style={{ color: "#FACC15" }}>Hands, Eyes & Tools</span>
        </h2>

        <KaiAgentToolBelt activeToolIndex={activeTool} />
      </div>
    </KaiCanvas>
  );
};
