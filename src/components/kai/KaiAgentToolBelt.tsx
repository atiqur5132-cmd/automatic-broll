import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const KaiAgentToolBelt: React.FC<{
  activeToolIndex?: number;
}> = ({ activeToolIndex = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const coreSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const tools = [
    { name: "REST APIS", icon: "⚡", code: "GET /v2/flights", color: "#38BDF8" },
    { name: "WEB SCRAPER", icon: "🌐", code: "page.evaluate()", color: "#4ADE80" },
    { name: "BASH SHELL", icon: "💻", code: "npm run test", color: "#FACC15" },
    { name: "STRIPE PAY", icon: "💳", code: "stripe.charges.create()", color: "#F43F5E" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "650px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Central Agent Core */}
      <div
        style={{
          transform: `scale(${coreSpring})`,
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, rgba(14, 16, 21, 0.95) 70%)",
          border: "2px solid #00E5FF",
          boxShadow: "0 0 50px rgba(0, 229, 255, 0.35), inset 0 0 30px rgba(0, 229, 255, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: "42px", marginBottom: "8px" }}>🤖</div>
        <div
          style={{
            color: "#FFFFFF",
            fontWeight: 900,
            fontSize: "22px",
            letterSpacing: "0.1em",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          AI AGENT CORE
        </div>
        <div
          style={{
            color: "#00E5FF",
            fontSize: "13px",
            fontFamily: "'JetBrains Mono', monospace",
            marginTop: "4px",
            letterSpacing: "0.15em",
          }}
        >
          [ EXECUTION LOOP ]
        </div>
      </div>

      {/* Radiating Connected Tool Cards */}
      {tools.map((tool, idx) => {
        const positions = [
          { top: "60px", left: "80px" },
          { top: "60px", right: "80px" },
          { bottom: "60px", left: "80px" },
          { bottom: "60px", right: "80px" },
        ];

        const isHighlighted = idx === activeToolIndex;
        const toolSpring = spring({
          frame: frame - idx * 10,
          fps,
          config: { damping: 14, stiffness: 120 },
        });

        return (
          <div
            key={tool.name}
            style={{
              position: "absolute",
              ...positions[idx],
              transform: `scale(${toolSpring}) ${isHighlighted ? "scale(1.05)" : ""}`,
              background: "rgba(18, 20, 26, 0.95)",
              border: isHighlighted ? `2px solid ${tool.color}` : "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "16px",
              padding: "20px 28px",
              minWidth: "260px",
              boxShadow: isHighlighted
                ? `0 0 35px ${tool.color}40, 0 15px 30px rgba(0,0,0,0.7)`
                : "0 10px 25px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              zIndex: 5,
              transition: "all 0.25s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "24px" }}>{tool.icon}</span>
              <span
                style={{
                  color: isHighlighted ? tool.color : "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "18px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {tool.name}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "#A1A1AA",
                background: "rgba(0,0,0,0.4)",
                padding: "6px 10px",
                borderRadius: "6px",
                marginTop: "4px",
              }}
            >
              <code>{tool.code}</code>
            </div>
          </div>
        );
      })}
    </div>
  );
};
