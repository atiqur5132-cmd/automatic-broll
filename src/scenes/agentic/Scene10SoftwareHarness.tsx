import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";
import { KaiBenchmarkCard } from "../../components/kai/KaiBenchmarkCard";

export const Scene10SoftwareHarness: React.FC = () => {
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
          gap: "36px",
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
          <span>⚖️</span> 2026 BENCHMARK REALITY
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
          The Moat Is The <span style={{ color: "#FFD600" }}>Software Harness</span>
        </h2>

        {/* 2 Benchmark Cards Comparison */}
        <div
          style={{
            display: "flex",
            gap: "36px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KaiBenchmarkCard
            title="QWEN 27B + STATE GRAPH HARNESS"
            subtitle="Sandboxed Execution • Deterministic Evals"
            metricValue={84.2}
            metricSuffix="%"
            accentColor="#00E5FF"
            borderColor="#FFD600"
            delay={10}
          />

          <KaiBenchmarkCard
            title="CLOSED FRONTIER MODEL (CHAT UI)"
            subtitle="Zero-Shot Web Interface • No Verification"
            metricValue={52.6}
            metricSuffix="%"
            accentColor="#EF4444"
            borderColor="rgba(255, 255, 255, 0.2)"
            delay={25}
          />
        </div>
      </div>
    </KaiCanvas>
  );
};
