import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TechCanvas } from "../../components/vram/TechCanvas";
import { RivetCard } from "../../components/vram/RivetCard";
import { ArchitectureFlowDiagram } from "../../components/vram/ArchitectureFlowDiagram";

export const Act5PostNvidiaEra: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 3 Micro-Pacing Beats (Total 1098 frames)
  // Beat 1: 0 - 360 (The Datacenter Moat Dissolves)
  // Beat 2: 360 - 720 (The Architecture Flow: Edge Intelligence)
  // Beat 3: 720 - 1098 (Grand Conclusion: The Math Has Already Won)

  return (
    <TechCanvas chapter="A5 · THE POST-NVIDIA ERA & LOCAL SWARMS" subTitle="THE ARCHITECTURAL SHIFT">
      {/* BEAT 1: Datacenter Monopoly Disruption */}
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
            title="GEOPOLITICAL & ECONOMIC IMPLICATIONS"
            subTitle="THE CENTRALIZED SERVER PARADIGM COLLAPSE"
            borderColor="#0088FF"
            bannerText="TRANSITION FROM CENTRALIZED CLOUDS TO LOCAL SOVEREIGNTY"
            bannerRightText="DECENTRALIZED COMPUTE"
            bannerBgColor="#0088FF"
            width={940}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: "13px", color: "#64748B", letterSpacing: "0.15em" }}>
                WHERE VALUE MIGRATES IN THE TERNARY ERA
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div style={{ backgroundColor: "#07080B", padding: "18px", borderRadius: 8, border: "1px solid #334155" }}>
                  <div style={{ fontSize: "12px", color: "#F43F5E", fontWeight: 700 }}>THE OLD CLUSTER MODEL</div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", marginTop: 4 }}>$50B Nuclear Datacenters</div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: 6, lineHeight: "1.4" }}>
                    High recurring token fees, captive API pricing, and single-vendor lock-in.
                  </div>
                </div>

                <div style={{ backgroundColor: "#07080B", padding: "18px", borderRadius: 8, border: "1px solid #10B981" }}>
                  <div style={{ fontSize: "12px", color: "#10B981", fontWeight: 700 }}>THE 1-BIT TERNARY MODEL</div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#10B981", marginTop: 4 }}>Ubiquitous Sovereign Intelligence</div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: 6, lineHeight: "1.4" }}>
                    Zero token billing. Pure integer accumulation running on everyday edge devices.
                  </div>
                </div>
              </div>
            </div>
          </RivetCard>
        </div>
      )}

      {/* BEAT 2: Architecture Flow Diagram */}
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
          <ArchitectureFlowDiagram />
        </div>
      )}

      {/* BEAT 3: Grand Conclusion (The Math Has Already Won) */}
      {frame >= 720 && (
        <div
          style={{
            position: "absolute",
            opacity: interpolate(frame, [720, 760], [0, 1], { extrapolateRight: "clamp" }),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          {/* Rivet White Pinned Banner (Kai Explains Climax) */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              color: "#07080A",
              padding: "26px 64px",
              borderRadius: 6,
              border: "2px solid #FFC72C",
              transform: "perspective(800px) rotateZ(-2deg) rotateX(4deg)",
              boxShadow: "0 30px 80px rgba(255, 199, 44, 0.35)",
              position: "relative",
              textAlign: "center",
            }}
          >
            {/* Corner Screws */}
            <div style={{ position: "absolute", top: 8, left: 8, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000000" }} />
            <div style={{ position: "absolute", top: 8, right: 8, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000000" }} />
            <div style={{ position: "absolute", bottom: 8, left: 8, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000000" }} />
            <div style={{ position: "absolute", bottom: 8, right: 8, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000000" }} />

            <div style={{ fontSize: "36px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              ARCHITECTURAL EFFICIENCY &gt; RAW COMPUTE
            </div>
          </div>

          <div
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#10B981",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
            }}
          >
            AND THE MATH HAS ALREADY WON.
          </div>
        </div>
      )}
    </TechCanvas>
  );
};
