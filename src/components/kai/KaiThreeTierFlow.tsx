import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";

export const KaiThreeTierFlow: React.FC<{
  activeTier?: 1 | 2 | 3;
}> = ({ activeTier = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tiers = [
    {
      id: 1,
      name: "GENERATIVE AI",
      tag: "THE CREATOR",
      desc: "Reactive • Next-Token Prediction • Zero Execution",
      color: "#38BDF8",
    },
    {
      id: 2,
      name: "AI AGENTS",
      tag: "THE DOER",
      desc: "Task Loops • Tool Calling • Single Context Bottleneck",
      color: "#FACC15",
    },
    {
      id: 3,
      name: "AGENTIC SYSTEMS",
      tag: "THE ORCHESTRATOR",
      desc: "Multi-Agent DAGs • Supervisors • 8-Hour Autonomous Swarms",
      color: "#FF2A55",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        width: "1400px",
        perspective: "1200px",
      }}
    >
      {tiers.map((tier, idx) => {
        const isCurrent = tier.id === activeTier;
        const entrySpring = spring({
          frame: frame - idx * 12,
          fps,
          config: { damping: 14, stiffness: 100 },
        });

        return (
          <React.Fragment key={tier.id}>
            {/* Tier Card */}
            <div
              style={{
                flex: 1,
                transform: `scale(${entrySpring}) ${isCurrent ? "translateY(-12px) rotateX(4deg)" : "translateY(0)"}`,
                opacity: entrySpring,
                background: isCurrent
                  ? `linear-gradient(180deg, rgba(24, 27, 34, 0.95) 0%, rgba(15, 17, 21, 0.95) 100%)`
                  : `rgba(18, 19, 23, 0.6)`,
                border: isCurrent ? `2px solid ${tier.color}` : "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "36px 32px",
                boxShadow: isCurrent
                  ? `0 0 45px ${tier.color}35, 0 25px 50px rgba(0,0,0,0.8)`
                  : "0 10px 30px rgba(0,0,0,0.4)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              {/* Active Glow Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  backgroundColor: isCurrent ? `${tier.color}20` : "rgba(255, 255, 255, 0.05)",
                  color: isCurrent ? tier.color : "#71717A",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  marginBottom: "16px",
                }}
              >
                TIER 0{tier.id} • {tier.tag}
              </div>

              {/* Title */}
              <div
                style={{
                  color: isCurrent ? "#FFFFFF" : "#A1A1AA",
                  fontSize: "30px",
                  fontWeight: 900,
                  letterSpacing: "-0.01em",
                  marginBottom: "12px",
                  lineHeight: 1.15,
                }}
              >
                {tier.name}
              </div>

              {/* Description */}
              <div
                style={{
                  color: isCurrent ? "#E4E4E7" : "#52525B",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {tier.desc}
              </div>

              {/* Status Indicator at bottom */}
              <div
                style={{
                  marginTop: "28px",
                  width: "100%",
                  height: "4px",
                  borderRadius: "2px",
                  backgroundColor: isCurrent ? tier.color : "rgba(255, 255, 255, 0.05)",
                  boxShadow: isCurrent ? `0 0 12px ${tier.color}` : "none",
                }}
              />
            </div>

            {/* Connecting Arrow */}
            {idx < tiers.length - 1 && (
              <div
                style={{
                  color: isCurrent || tier.id < activeTier ? "#00E5FF" : "rgba(255, 255, 255, 0.2)",
                  fontSize: "28px",
                  fontWeight: 900,
                  transform: `scale(${entrySpring})`,
                }}
              >
                ➔
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
