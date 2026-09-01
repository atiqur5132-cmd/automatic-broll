import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const KaiSupervisorGraph: React.FC<{
  activeStep?: "supervisor" | "research" | "code" | "critic";
}> = ({ activeStep = "code" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const supervisorSpring = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const subSpring = spring({ frame: frame - 15, fps, config: { damping: 14, stiffness: 120 } });

  const agents = [
    {
      id: "research",
      title: "RESEARCH AGENT",
      role: "Vector RAG & Docs",
      status: "32 Docs Retrieved",
      color: "#38BDF8",
      icon: "🔍",
    },
    {
      id: "code",
      title: "CODER AGENT",
      role: "Sandboxed Sandbox Code",
      status: "Generating src/api.py",
      color: "#4ADE80",
      icon: "⚡",
    },
    {
      id: "critic",
      title: "CRITIC AGENT",
      role: "Evals & PyTest Harness",
      status: "Running 14 Unit Tests",
      color: "#F43F5E",
      icon: "🛡️",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "1300px",
        gap: "40px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top Supervisor Node */}
      <div
        style={{
          transform: `scale(${supervisorSpring})`,
          background: "linear-gradient(135deg, rgba(28, 32, 42, 0.95) 0%, rgba(16, 18, 24, 0.95) 100%)",
          border: "2px solid #FFD600",
          borderRadius: "18px",
          padding: "22px 48px",
          boxShadow: "0 0 40px rgba(255, 214, 0, 0.25), 0 20px 40px rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          gap: "18px",
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: "36px" }}>👑</div>
        <div>
          <div
            style={{
              color: "#FFD600",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.2em",
            }}
          >
            CENTRAL ORCHESTRATOR
          </div>
          <div style={{ color: "#FFFFFF", fontSize: "26px", fontWeight: 900 }}>
            THIN SUPERVISOR AGENT
          </div>
        </div>
      </div>

      {/* Directional Split Connectors */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          color: "#00E5FF",
          fontSize: "24px",
          fontWeight: 900,
          marginTop: "-15px",
          marginBottom: "-15px",
        }}
      >
        <span>↙</span>
        <span>↓</span>
        <span>↘</span>
      </div>

      {/* Micro-Agent Swarm Row */}
      <div
        style={{
          display: "flex",
          gap: "28px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {agents.map((agent) => {
          const isActive = agent.id === activeStep;

          return (
            <div
              key={agent.id}
              style={{
                flex: 1,
                transform: `scale(${subSpring}) ${isActive ? "translateY(-8px)" : "translateY(0)"}`,
                background: isActive
                  ? "rgba(22, 25, 34, 0.95)"
                  : "rgba(16, 18, 22, 0.7)",
                border: isActive ? `2px solid ${agent.color}` : "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "26px 28px",
                boxShadow: isActive
                  ? `0 0 35px ${agent.color}35, 0 15px 30px rgba(0,0,0,0.6)`
                  : "0 10px 20px rgba(0,0,0,0.4)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                transition: "all 0.25s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "26px" }}>{agent.icon}</span>
                <div>
                  <div
                    style={{
                      color: isActive ? agent.color : "#A1A1AA",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                    }}
                  >
                    WORKER 0{agents.indexOf(agent) + 1}
                  </div>
                  <div style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 800 }}>
                    {agent.title}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: "14px", color: "#A1A1AA", marginTop: "4px" }}>
                {agent.role}
              </div>

              {/* Real-time status badge */}
              <div
                style={{
                  marginTop: "12px",
                  background: "rgba(0,0,0,0.5)",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: isActive ? agent.color : "#71717A",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? agent.color : "#52525B",
                    boxShadow: isActive ? `0 0 8px ${agent.color}` : "none",
                  }}
                />
                {agent.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
