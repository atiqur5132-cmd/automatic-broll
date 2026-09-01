import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";

export const Scene1PromptIllusion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 100 } });
  const chatSpring = spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 90 } });

  // Shatter animation after frame 250
  const shatter = interpolate(frame, [250, 320], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <KaiCanvas activeAccent="#00E5FF">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "36px",
          textAlign: "center",
        }}
      >
        {/* Top Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0, 229, 255, 0.1)",
            border: "1px solid rgba(0, 229, 255, 0.4)",
            borderRadius: "20px",
            padding: "8px 20px",
            color: "#00E5FF",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            transform: `scale(${titleSpring})`,
          }}
        >
          <span>⚡</span> THE 2026 ARCHITECTURAL PIVOT
        </div>

        {/* Massive Headline */}
        <h1
          style={{
            fontSize: "80px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: "1300px",
            textTransform: "uppercase",
            transform: `scale(${titleSpring})`,
            margin: 0,
          }}
        >
          The Chatbot Era Is <span style={{ color: "#FF2A55", textShadow: "0 0 30px #FF2A5560" }}>Dead.</span>
        </h1>

        {/* Chat UI Box (Shattering / Morphing) */}
        <div
          style={{
            transform: `scale(${chatSpring}) rotate(${shatter * 8}deg)`,
            opacity: 1 - shatter * 0.4,
            filter: `blur(${shatter * 8}px)`,
            width: "700px",
            background: "rgba(18, 20, 26, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "18px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(0, 229, 255, 0.15)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "20px" }}>💬</span>
            <span style={{ color: "#71717A", fontSize: "18px", fontFamily: "'Inter', sans-serif" }}>
              Ask anything or type a prompt...
            </span>
          </div>
          <div
            style={{
              background: "#00E5FF",
              color: "#000000",
              fontWeight: 800,
              padding: "8px 18px",
              borderRadius: "10px",
              fontSize: "14px",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            SEND
          </div>
        </div>

        {/* High-Impact Stat Sub-card */}
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "15px",
            color: "#A1A1AA",
            letterSpacing: "0.1em",
            transform: `scale(${titleSpring})`,
          }}
        >
          SHIFTING FROM <span style={{ color: "#FFFFFF", fontWeight: 800 }}>PROMPT TOKENS</span> ➔{" "}
          <span style={{ color: "#00E5FF", fontWeight: 800 }}>AUTONOMOUS EXECUTION</span>
        </div>
      </div>
    </KaiCanvas>
  );
};
