import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TechCanvas } from "../../components/vram/TechCanvas";
import { RivetCard } from "../../components/vram/RivetCard";
import { TernaryArrayVisualizer } from "../../components/vram/TernaryArrayVisualizer";

export const Act2DeletingMultiplication: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 4 Micro-Pacing Beats (Total 1908 frames)
  // Beat 1: 0 - 500 (The Silicon Cost of FP16 Multipliers)
  // Beat 2: 500 - 1000 (The 3-State Ternary Array)
  // Beat 3: 1000 - 1450 (Sign Flips & Pure Addition)
  // Beat 4: 1450 - 1908 (1/10th Energy & Silicon Area Savings)

  return (
    <TechCanvas chapter="A2 · DELETING MULTIPLICATION" subTitle="THE MATHEMATICAL REBELLION">
      {/* BEAT 1: FP16 Silicon Multiplier Breakdown */}
      {frame < 520 && (
        <div
          style={{
            position: "absolute",
            opacity: frame < 480 ? 1 : interpolate(frame, [480, 520], [1, 0]),
            transform: `scale(${interpolate(
              spring({ frame, fps, config: { damping: 14 } }),
              [0, 1],
              [0.92, 1]
            )})`,
          }}
        >
          <RivetCard
            title="PHYSICAL SILICON ARCHITECTURE"
            subTitle="THE HARDWARE COST OF MULTIPLICATION"
            borderColor="#F43F5E"
            bannerText="MULTIPLIERS CONSUME 80% OF PROCESSOR DIE SPACE"
            bannerRightText="THERMAL HEAT BOTTLENECK"
            bannerBgColor="#F43F5E"
            width={940}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ fontSize: "13px", color: "#64748B", letterSpacing: "0.15em" }}>
                GPU FLOATING POINT MULTIPLIER CORE
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ backgroundColor: "#07080B", padding: "18px 20px", borderRadius: 8, border: "1px solid #334155" }}>
                  <div style={{ fontSize: "12px", color: "#F43F5E", fontWeight: 700 }}>FP16 MULTIPLIER DIE AREA</div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", marginTop: 6 }}>~4,000 μm²</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>High gate count, massive power consumption</div>
                </div>

                <div style={{ backgroundColor: "#07080B", padding: "18px 20px", borderRadius: 8, border: "1px solid #10B981" }}>
                  <div style={{ fontSize: "12px", color: "#10B981", fontWeight: 700 }}>INT ADDER DIE AREA</div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#10B981", marginTop: 6 }}>~120 μm²</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>97% smaller physical silicon footprint</div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(244, 63, 94, 0.1)",
                  border: "1px solid rgba(244, 63, 94, 0.3)",
                  borderRadius: 6,
                  padding: "14px 18px",
                  fontSize: "14px",
                  color: "#E2E8F0",
                  lineHeight: "1.5",
                }}
              >
                In standard inference, GPUs spend enormous electrical energy performing billions of floating-point multiplies per token. Multipliers are the primary source of thermal throttling.
              </div>
            </div>
          </RivetCard>
        </div>
      )}

      {/* BEAT 2: The Ternary Array Visualizer */}
      {frame >= 500 && frame < 1020 && (
        <div
          style={{
            position: "absolute",
            opacity:
              frame < 540
                ? interpolate(frame, [500, 540], [0, 1])
                : frame > 980
                ? interpolate(frame, [980, 1020], [1, 0])
                : 1,
          }}
        >
          <TernaryArrayVisualizer />
        </div>
      )}

      {/* BEAT 3: How Math Collapses into Sign Flips */}
      {frame >= 1000 && frame < 1480 && (
        <div
          style={{
            position: "absolute",
            opacity:
              frame < 1040
                ? interpolate(frame, [1000, 1040], [0, 1])
                : frame > 1440
                ? interpolate(frame, [1440, 1480], [1, 0])
                : 1,
          }}
        >
          <RivetCard
            title="TERNARY ARITHMETIC REWRITING"
            subTitle="WHY MULTIPLICATION IS NO LONGER REQUIRED"
            borderColor="#0088FF"
            bannerText="PURE INTEGER ADDITION ENGINE ACTIVE"
            bannerRightText="NO FLOATING POINT UNITS"
            bannerBgColor="#0088FF"
            width={960}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ backgroundColor: "#07080B", padding: "14px 18px", borderRadius: 6, borderLeft: "4px solid #38BDF8" }}>
                    <div style={{ fontSize: "12px", color: "#38BDF8", fontWeight: 700 }}>CASE 1: WEIGHT = −1</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "#FFFFFF", marginTop: 4 }}>Y = −X (One-cycle sign bit flip)</div>
                  </div>

                  <div style={{ backgroundColor: "#07080B", padding: "14px 18px", borderRadius: 6, borderLeft: "4px solid #64748B" }}>
                    <div style={{ fontSize: "12px", color: "#94A3B8", fontWeight: 700 }}>CASE 2: WEIGHT = 0</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "#FFFFFF", marginTop: 4 }}>Y = 0 (Zero compute, skipped)</div>
                  </div>

                  <div style={{ backgroundColor: "#07080B", padding: "14px 18px", borderRadius: 6, borderLeft: "4px solid #FFC72C" }}>
                    <div style={{ fontSize: "12px", color: "#FFC72C", fontWeight: 700 }}>CASE 3: WEIGHT = +1</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "#FFFFFF", marginTop: 4 }}>Y = +X (Pass-through accumulation)</div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#07080B",
                    borderRadius: 8,
                    border: "1px solid #1E293B",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ fontSize: "13px", color: "#64748B", letterSpacing: "0.15em" }}>OPERATOR RESULT</div>
                  <div style={{ fontSize: "42px", fontWeight: 900, color: "#10B981" }}>0 FPUs</div>
                  <div style={{ fontSize: "13px", color: "#94A3B8", lineHeight: "1.4" }}>
                    Every multiplier circuit can be completely removed from the silicon wafer.
                  </div>
                </div>
              </div>
            </div>
          </RivetCard>
        </div>
      )}

      {/* BEAT 4: Energy & Silicon Die Area Savings */}
      {frame >= 1460 && (
        <div
          style={{
            position: "absolute",
            opacity: interpolate(frame, [1460, 1500], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <RivetCard
            title="ENERGY CONSUMPTION BENCHMARK"
            subTitle="BITNET b1.58 SILICON SAVINGS"
            borderColor="#10B981"
            bannerText="ENERGY REDUCTION: UP TO 89% LESS JOULES PER TOKEN"
            bannerRightText="SUB-WATT INFERENCE"
            bannerBgColor="#10B981"
            width={980}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <div style={{ backgroundColor: "#07080B", padding: "20px 16px", borderRadius: 8, border: "1px solid #334155" }}>
                <div style={{ fontSize: "12px", color: "#64748B" }}>MATMUL ENERGY</div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#10B981", marginTop: 6 }}>−89.2%</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>Addition vs Multiplication</div>
              </div>

              <div style={{ backgroundColor: "#07080B", padding: "20px 16px", borderRadius: 8, border: "1px solid #334155" }}>
                <div style={{ fontSize: "12px", color: "#64748B" }}>PHYSICAL DIE AREA</div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#38BDF8", marginTop: 6 }}>−85.0%</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>Simplified accumulator circuits</div>
              </div>

              <div style={{ backgroundColor: "#07080B", padding: "20px 16px", borderRadius: 8, border: "1px solid #334155" }}>
                <div style={{ fontSize: "12px", color: "#64748B" }}>THERMAL HEADROOM</div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFC72C", marginTop: 6 }}>PASSIVE COOLING</div>
                <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>No fan throttling required</div>
              </div>
            </div>
          </RivetCard>
        </div>
      )}
    </TechCanvas>
  );
};
