import React from "react";
import { useCurrentFrame, spring, useVideoConfig } from "remotion";
import { KaiCanvas } from "../../components/kai/KaiCanvas";

export const Scene6FunctionCalling: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 100 } });

  const steps = [
    { step: "01", name: "User Objective", val: "'Book cheapest flight to Tokyo'", color: "#38BDF8" },
    { step: "02", name: "Tool Invocation", val: "flight_api.search(origin='SFO', dest='HND')", color: "#FACC15" },
    { step: "03", name: "Live JSON Parse", val: "{ status: 200, price: '$640', airline: 'ANA' }", color: "#4ADE80" },
    { step: "04", name: "Execute Action", val: "stripe.webhook.trigger_payment()", color: "#F43F5E" },
  ];

  return (
    <KaiCanvas activeAccent="#4ADE80">
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
            background: "rgba(74, 222, 128, 0.1)",
            border: "1px solid rgba(74, 222, 128, 0.4)",
            borderRadius: "20px",
            padding: "8px 22px",
            color: "#4ADE80",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.2em",
            transform: `scale(${titleSpring})`,
          }}
        >
          <span>⚡</span> REAL-TIME FUNCTION EXECUTION
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
          From Conversation to <span style={{ color: "#4ADE80" }}>Task Completion</span>
        </h2>

        {/* 4-Step Execution Flow */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
            width: "100%",
          }}
        >
          {steps.map((item, idx) => {
            const itemSpring = spring({
              frame: frame - 25 - idx * 12,
              fps,
              config: { damping: 14, stiffness: 120 },
            });
            return (
              <div
                key={item.step}
                style={{
                  transform: `scale(${itemSpring})`,
                  background: "rgba(18, 20, 26, 0.95)",
                  border: `1px solid rgba(255, 255, 255, 0.12)`,
                  borderLeft: `4px solid ${item.color}`,
                  borderRadius: "14px",
                  padding: "20px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span
                    style={{
                      color: item.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 800,
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    STEP {item.step} • {item.name}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "14px",
                    color: "#FFFFFF",
                    background: "rgba(0,0,0,0.4)",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    marginTop: "6px",
                  }}
                >
                  <code>{item.val}</code>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </KaiCanvas>
  );
};
