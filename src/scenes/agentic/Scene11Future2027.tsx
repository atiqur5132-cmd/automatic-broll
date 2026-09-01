import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";

export const Scene11Future2027: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });
  const card1Spring = spring({ frame: frame - 20, fps, config: { damping: 14, stiffness: 110 } });
  const card2Spring = spring({ frame: frame - 35, fps, config: { damping: 14, stiffness: 110 } });

  return (
    <KaiCanvas activeAccent="#38BDF8">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          width: "1350px",
          textAlign: "center",
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
          <span>🔮</span> 2027 PARADIGM DIVERGENCE
        </div>

        <h2
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            margin: 0,
            transform: `scale(${titleSpring})`,
          }}
        >
          The Two Branches of <span style={{ color: "#38BDF8" }}>Future AI</span>
        </h2>

        {/* 2 Diverging Paths */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            width: "100%",
          }}
        >
          {/* Branch 1: Real-time Voice Agents */}
          <div
            style={{
              flex: 1,
              transform: `scale(${card1Spring})`,
              background: "rgba(18, 22, 30, 0.95)",
              border: "2px solid #38BDF8",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 0 35px rgba(56, 189, 248, 0.25), 0 20px 40px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ fontSize: "36px" }}>🎙️</div>
            <div style={{ color: "#38BDF8", fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: "14px", letterSpacing: "0.15em" }}>
              BRANCH A: INTERACTIVE
            </div>
            <div style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 900 }}>
              Sub-Second Voice Agents
            </div>
            <div style={{ color: "#A1A1AA", fontSize: "14px" }}>
              &lt;150ms Latency • Real-Time Customer Experience
            </div>
          </div>

          {/* Branch 2: Deep Swarms */}
          <div
            style={{
              flex: 1,
              transform: `scale(${card2Spring})`,
              background: "rgba(18, 22, 30, 0.95)",
              border: "2px solid #FFD600",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 0 35px rgba(255, 214, 0, 0.25), 0 20px 40px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div style={{ fontSize: "36px" }}>⚙️</div>
            <div style={{ color: "#FFD600", fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: "14px", letterSpacing: "0.15em" }}>
              BRANCH B: ASYNCHRONOUS
            </div>
            <div style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 900 }}>
              Deep Engineering Swarms
            </div>
            <div style={{ color: "#A1A1AA", fontSize: "14px" }}>
              8+ Hour Horizon • Enterprise Systems Architecture
            </div>
          </div>
        </div>

        {/* Final Takeaway */}
        <div
          style={{
            marginTop: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "22px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Don't Prompt AI. <span style={{ color: "#00E5FF", textShadow: "0 0 20px #00E5FF" }}>Architect The System.</span>
        </div>
      </div>
    </KaiCanvas>
  );
};
