import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";

export const Scene4ZeroActionCeiling: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });
  const terminalSpring = spring({ frame: frame - 20, fps, config: { damping: 12, stiffness: 90 } });

  const limitations = [
    { label: "Cannot Execute Code", icon: "❌" },
    { label: "Cannot Access Live Database", icon: "❌" },
    { label: "Zero Action Memory", icon: "❌" },
    { label: "Zero External Agency", icon: "❌" },
  ];

  return (
    <KaiCanvas activeAccent="#FF2A55">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "36px",
          width: "1300px",
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
          <span>🛑</span> THE ZERO-ACTION CEILING
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
          Brilliant Creator, <span style={{ color: "#FF2A55" }}>Completely Helpless</span>
        </h2>

        {/* 2.5D Split Terminal & Limitation Grid */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            width: "100%",
            perspective: "1200px",
          }}
        >
          {/* Terminal Window Mockup */}
          <div
            style={{
              flex: 1.2,
              transform: `scale(${terminalSpring}) rotateX(6deg) rotateY(-4deg)`,
              background: "rgba(16, 18, 24, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(255, 42, 85, 0.15)",
            }}
          >
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FF5F56" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FFBD2E" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27C93F" }} />
            </div>
            <pre
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "14px",
                color: "#38BDF8",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <code>{`# Generative AI Output:
def deploy_infrastructure():
    # Model generates syntax perfectly
    cluster = KubernetesCluster.create()
    return "Ready!"

>>> Result: Text printed to screen.
>>> Execution Status: NEVER EXECUTED (No Sandbox)`}</code>
            </pre>
          </div>

          {/* Hard Limitations List */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              justifyContent: "center",
            }}
          >
            {limitations.map((item, idx) => {
              const itemSpring = spring({
                frame: frame - 30 - idx * 10,
                fps,
                config: { damping: 14, stiffness: 120 },
              });
              return (
                <div
                  key={item.label}
                  style={{
                    transform: `scale(${itemSpring})`,
                    background: "rgba(25, 15, 20, 0.9)",
                    border: "1px solid rgba(255, 42, 85, 0.3)",
                    borderRadius: "14px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </KaiCanvas>
  );
};
