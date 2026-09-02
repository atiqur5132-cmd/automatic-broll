import React from "react";
import { RivetCard } from "./RivetCard";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const TernaryArrayVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.9, stiffness: 90 },
  });

  // Animated pulse on the 3 states
  const activePulse = (frame % 90) / 90;

  return (
    <div
      style={{
        transform: `scale(${interpolate(entrance, [0, 1], [0.92, 1])})`,
        opacity: interpolate(entrance, [0, 1], [0, 1]),
      }}
    >
      <RivetCard
        title="BITNET b1.58 — TERNARY COMPUTATION ENGINE"
        subTitle="ELIMINATION OF FP16 MULTIPLIERS"
        borderColor="#FFC72C"
        bannerText="MULTIPLICATIONS DELETED → PURE ADDITIONS ONLY"
        bannerRightText="90% ENERGY CUT"
        bannerBgColor="#FFC72C"
        width={1020}
        anchorPins="both"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: "10px 0" }}>
          
          {/* 1. The 3-State Ternary Array */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
            {/* State -1 */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 136, 255, 0.1)",
                border: "1.5px solid #0088FF",
                borderRadius: 8,
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                boxShadow: activePulse < 0.33 ? "0 0 20px rgba(0, 136, 255, 0.4)" : "none",
              }}
            >
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#38BDF8" }}>[-1]</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", letterSpacing: "0.15em" }}>WEIGHT STATE</div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  backgroundColor: "rgba(0, 136, 255, 0.25)",
                  padding: "6px 12px",
                  borderRadius: 4,
                  marginTop: 6,
                }}
              >
                SIGN FLIP (−X)
              </div>
            </div>

            {/* State 0 */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1.5px solid #475569",
                borderRadius: 8,
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                boxShadow: activePulse >= 0.33 && activePulse < 0.66 ? "0 0 20px rgba(255, 255, 255, 0.2)" : "none",
              }}
            >
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#94A3B8" }}>[ 0 ]</div>
              <div style={{ fontSize: "12px", color: "#64748B", letterSpacing: "0.15em" }}>SPARSITY STATE</div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#94A3B8",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  padding: "6px 12px",
                  borderRadius: 4,
                  marginTop: 6,
                }}
              >
                SKIP (ZERO)
              </div>
            </div>

            {/* State +1 */}
            <div
              style={{
                flex: 1,
                backgroundColor: "rgba(255, 199, 44, 0.1)",
                border: "1.5px solid #FFC72C",
                borderRadius: 8,
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                boxShadow: activePulse >= 0.66 ? "0 0 20px rgba(255, 199, 44, 0.4)" : "none",
              }}
            >
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#FFC72C" }}>[+1]</div>
              <div style={{ fontSize: "12px", color: "#94A3B8", letterSpacing: "0.15em" }}>WEIGHT STATE</div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255, 199, 44, 0.25)",
                  padding: "6px 12px",
                  borderRadius: 4,
                  marginTop: 6,
                }}
              >
                PASS-THROUGH (+X)
              </div>
            </div>
          </div>

          {/* 2. Silicon Comparison Metric Bar */}
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: 8,
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "12px", color: "#64748B", letterSpacing: "0.12em" }}>MATMUL OPERATOR COMPLEXITY</div>
              <div style={{ fontSize: "17px", fontWeight: 700, color: "#E2E8F0", marginTop: 4 }}>
                <span style={{ color: "#F43F5E", textDecoration: "line-through" }}>O(N³) Multipliers</span>{" "}
                <span style={{ color: "#10B981", marginLeft: 12 }}>→ O(N²) Pure Accumulator Additions</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid #10B981",
                padding: "8px 18px",
                borderRadius: 6,
                color: "#10B981",
                fontWeight: 800,
                fontSize: "14px",
                letterSpacing: "0.1em",
              }}
            >
              ZERO MULTIPLIER SILICON
            </div>
          </div>
        </div>
      </RivetCard>
    </div>
  );
};
