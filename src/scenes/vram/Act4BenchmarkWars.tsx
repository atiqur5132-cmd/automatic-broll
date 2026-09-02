import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TechCanvas } from "../../components/vram/TechCanvas";
import { RivetCard } from "../../components/vram/RivetCard";
import { HardwareComparisonBench } from "../../components/vram/HardwareComparisonBench";

export const Act4BenchmarkWars: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 4 Micro-Pacing Beats (Total 1422 frames)
  // Beat 1: 0 - 360 (The Intelligence & Perplexity Benchmark)
  // Beat 2: 360 - 720 (4x Speedup & 80 Tokens/Sec)
  // Beat 3: 720 - 1100 (Hardware Comparison Bench: $2K GPU vs $499 Mac Mini)
  // Beat 4: 1100 - 1422 (Local Autonomous Agentic Loops)

  return (
    <TechCanvas chapter="A4 · BENCHMARK WARS & HARDWARE REALITY" subTitle="EMPIRICAL VALIDATION">
      {/* BEAT 1: Perplexity & Intelligence Parity */}
      {frame < 380 && (
        <div
          style={{
            position: "absolute",
            opacity: frame < 340 ? 1 : interpolate(frame, [340, 380], [1, 0]),
            transform: `scale(${interpolate(
              spring({ frame, fps, config: { damping: 14 } }),
              [0, 1],
              [0.92, 1]
            )})`,
          }}
        >
          <RivetCard
            title="ACCURACY VS BIT-PRECISION ANALYSIS"
            subTitle="WIKITEXT & COMMON SENSE REASONING"
            borderColor="#FFC72C"
            bannerText="PERPLEXITY PARITY: ZERO LOSS OF REASONING CAPACITY"
            bannerRightText="NEAR-ZERO LOSS"
            bannerBgColor="#FFC72C"
            width={940}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: "13px", color: "#64748B", letterSpacing: "0.15em" }}>
                BENCHMARK EVALUATION (70B PARAMETER SCALE)
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                <div style={{ backgroundColor: "#07080B", padding: "18px", borderRadius: 8, border: "1px solid #334155" }}>
                  <div style={{ fontSize: "12px", color: "#64748B" }}>MMLU (REASONING)</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#38BDF8", marginTop: 6 }}>78.4% vs 78.9%</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>Within 0.5% margin of FP16 baseline</div>
                </div>

                <div style={{ backgroundColor: "#07080B", padding: "18px", borderRadius: 8, border: "1px solid #334155" }}>
                  <div style={{ fontSize: "12px", color: "#64748B" }}>GSM8K (MATH)</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#10B981", marginTop: 6 }}>84.2% vs 84.6%</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>Complex multi-step chain-of-thought intact</div>
                </div>

                <div style={{ backgroundColor: "#07080B", padding: "18px", borderRadius: 8, border: "1px solid #334155" }}>
                  <div style={{ fontSize: "12px", color: "#64748B" }}>WIKITEXT PERPLEXITY</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#FFC72C", marginTop: 6 }}>5.42 vs 5.38</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>Zero degradation in language structure</div>
                </div>
              </div>

              <div style={{ backgroundColor: "rgba(255, 199, 44, 0.08)", border: "1px solid rgba(255, 199, 44, 0.3)", borderRadius: 6, padding: "12px 18px", fontSize: "13px", color: "#E2E8F0" }}>
                Conclusion: LLM intelligence is encoded in the network connectivity topology, not in the decimal precision of individual weight matrices.
              </div>
            </div>
          </RivetCard>
        </div>
      )}

      {/* BEAT 2: Token Generation Speedup */}
      {frame >= 360 && frame < 740 && (
        <div
          style={{
            position: "absolute",
            opacity:
              frame < 400
                ? interpolate(frame, [360, 400], [0, 1])
                : frame > 700
                ? interpolate(frame, [700, 740], [1, 0])
                : 1,
          }}
        >
          <RivetCard
            title="THROUGHPUT SPEEDUP METRICS"
            subTitle="CPU & UNIFIED HARDWARE PERFORMANCE"
            borderColor="#10B981"
            bannerText="SPEEDUP FACTOR: 4.1X FASTER ON STANDARD SILICON"
            bannerRightText="80+ TOKENS/SEC"
            bannerBgColor="#10B981"
            width={940}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div style={{ backgroundColor: "#07080B", padding: "20px", borderRadius: 8, border: "1px solid #1E293B" }}>
                <div style={{ fontSize: "12px", color: "#64748B" }}>STANDARD CPU FP16 INFERENCE</div>
                <div style={{ fontSize: "36px", fontWeight: 800, color: "#F43F5E", marginTop: 8 }}>1.8 Tok/s</div>
                <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: 4 }}>Completely unusable for real-time agents</div>
              </div>

              <div style={{ backgroundColor: "#07080B", padding: "20px", borderRadius: 8, border: "1px solid #1E293B" }}>
                <div style={{ fontSize: "12px", color: "#64748B" }}>BITNET b1.58 INFERENCE (SAME HARDWARE)</div>
                <div style={{ fontSize: "36px", fontWeight: 800, color: "#10B981", marginTop: 8 }}>82.4 Tok/s</div>
                <div style={{ fontSize: "12px", color: "#38BDF8", marginTop: 4 }}>Fast conversational & autonomous loop speed</div>
              </div>
            </div>
          </RivetCard>
        </div>
      )}

      {/* BEAT 3: Hardware Comparison Bench ($2K GPU vs $499 Mac Mini) */}
      {frame >= 720 && frame < 1120 && (
        <div
          style={{
            position: "absolute",
            opacity:
              frame < 760
                ? interpolate(frame, [720, 760], [0, 1])
                : frame > 1080
                ? interpolate(frame, [1080, 1120], [1, 0])
                : 1,
          }}
        >
          <HardwareComparisonBench />
        </div>
      )}

      {/* BEAT 4: Autonomous Workflows Without Dedicated GPU */}
      {frame >= 1100 && (
        <div
          style={{
            position: "absolute",
            opacity: interpolate(frame, [1100, 1140], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <RivetCard
            title="SYSTEM DEPLOYMENT LANDSCAPE"
            subTitle="WHAT CAN BE EXECUTED TODAY"
            borderColor="#0088FF"
            bannerText="COMPLEX REASONING WORKFLOWS RUNNING ON SUB-$500 HARDWARE"
            bannerRightText="ACCESSIBLE AI"
            bannerBgColor="#0088FF"
            width={960}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <div style={{ backgroundColor: "#07080B", padding: "18px 16px", borderRadius: 8, borderLeft: "4px solid #38BDF8" }}>
                <div style={{ fontSize: "12px", color: "#38BDF8", fontWeight: 700 }}>LOCAL CODING AGENTS</div>
                <div style={{ fontSize: "14px", color: "#E2E8F0", marginTop: 6, lineHeight: "1.4" }}>
                  Autonomous full-repo refactors without streaming code to cloud providers.
                </div>
              </div>

              <div style={{ backgroundColor: "#07080B", padding: "18px 16px", borderRadius: 8, borderLeft: "4px solid #10B981" }}>
                <div style={{ fontSize: "12px", color: "#10B981", fontWeight: 700 }}>EDGE ROBOTICS</div>
                <div style={{ fontSize: "14px", color: "#E2E8F0", marginTop: 6, lineHeight: "1.4" }}>
                  Sub-watt spatial reasoning running directly on battery-operated robotic platforms.
                </div>
              </div>

              <div style={{ backgroundColor: "#07080B", padding: "18px 16px", borderRadius: 8, borderLeft: "4px solid #FFC72C" }}>
                <div style={{ fontSize: "12px", color: "#FFC72C", fontWeight: 700 }}>ZERO API SUBSCRIPTIONS</div>
                <div style={{ fontSize: "14px", color: "#E2E8F0", marginTop: 6, lineHeight: "1.4" }}>
                  Sovereign 70B models processing infinite tokens for the cost of household electricity.
                </div>
              </div>
            </div>
          </RivetCard>
        </div>
      )}
    </TechCanvas>
  );
};
