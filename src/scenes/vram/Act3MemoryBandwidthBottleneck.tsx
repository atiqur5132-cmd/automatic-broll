import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TechCanvas } from "../../components/vram/TechCanvas";
import { RivetCard } from "../../components/vram/RivetCard";
import { HardwareBandwidthMeter } from "../../components/vram/HardwareBandwidthMeter";

export const Act3MemoryBandwidthBottleneck: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 4 Micro-Pacing Beats (Total 1682 frames)
  // Beat 1: 0 - 420 (Compute-Bound vs Memory Bandwidth-Bound)
  // Beat 2: 420 - 880 (The Memory Bus Transfer Meter)
  // Beat 3: 880 - 1300 (140GB/Token vs 14.2GB/Token)
  // Beat 4: 1300 - 1682 (Unified Memory & 90% Bus Pressure Relief)

  return (
    <TechCanvas chapter="A3 · THE MEMORY BUS BOTTLENECK" subTitle="THE REAL INFERENCE CHOKEPOINT">
      {/* BEAT 1: Compute-Bound vs Memory Bandwidth-Bound */}
      {frame < 440 && (
        <div
          style={{
            position: "absolute",
            opacity: frame < 400 ? 1 : interpolate(frame, [400, 440], [1, 0]),
            transform: `scale(${interpolate(
              spring({ frame, fps, config: { damping: 14 } }),
              [0, 1],
              [0.92, 1]
            )})`,
          }}
        >
          <RivetCard
            title="HARDWARE ARCHITECTURE TRUTH"
            subTitle="COMPUTE VS MEMORY BANDWIDTH"
            borderColor="#0088FF"
            bannerText="AI INFERENCE IS NOT COMPUTE-BOUND — IT IS BANDWIDTH-BOUND"
            bannerRightText="MEMORY CHOKEPOINT"
            bannerBgColor="#0088FF"
            width={940}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontSize: "13px", color: "#64748B", letterSpacing: "0.15em" }}>
                WHERE TIME IS ACTUALLY SPENT DURING TOKEN GENERATION
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ backgroundColor: "#07080B", padding: "18px", borderRadius: 8, border: "1px solid #1E293B" }}>
                  <div style={{ fontSize: "12px", color: "#64748B" }}>PROCESSOR CORES CLOCK STATUS</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#F43F5E", marginTop: 6 }}>92% IDLE WAITING</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>Cores starved of weights waiting on bus</div>
                </div>

                <div style={{ backgroundColor: "#07080B", padding: "18px", borderRadius: 8, border: "1px solid #1E293B" }}>
                  <div style={{ fontSize: "12px", color: "#64748B" }}>MEMORY BUS TRAFFIC</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#FFC72C", marginTop: 6 }}>100% SATURATED</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: 4 }}>Transferring 140GB from VRAM to compute</div>
                </div>
              </div>

              <div style={{ backgroundColor: "rgba(0, 136, 255, 0.08)", border: "1px solid rgba(0, 136, 255, 0.3)", borderRadius: 6, padding: "14px 18px", fontSize: "14px", color: "#E2E8F0" }}>
                Every single token requires reading all model weights from memory into the cores. High compute capability is meaningless if the memory bus is saturated.
              </div>
            </div>
          </RivetCard>
        </div>
      )}

      {/* BEAT 2 & 3: Hardware Bandwidth Meter */}
      {frame >= 420 && frame < 1320 && (
        <div
          style={{
            position: "absolute",
            opacity:
              frame < 460
                ? interpolate(frame, [420, 460], [0, 1])
                : frame > 1280
                ? interpolate(frame, [1280, 1320], [1, 0])
                : 1,
          }}
        >
          <HardwareBandwidthMeter />
        </div>
      )}

      {/* BEAT 4: Unified Memory Breakthrough */}
      {frame >= 1300 && (
        <div
          style={{
            position: "absolute",
            opacity: interpolate(frame, [1300, 1340], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          <RivetCard
            title="THE UNIFIED MEMORY PARADIGM"
            subTitle="ELIMINATING THE DISCRETE GPU WALL"
            borderColor="#10B981"
            bannerText="70B MODEL COMPRESSED TO 14.2 GB — FITS CONSUMER RAM"
            bannerRightText="BUS RELIEVED"
            bannerBgColor="#10B981"
            width={980}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ backgroundColor: "#07080B", padding: "16px 20px", borderRadius: 8, borderLeft: "4px solid #10B981" }}>
                  <div style={{ fontSize: "12px", color: "#10B981", fontWeight: 700 }}>1.58-BIT UNIFIED ARCHITECTURE</div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", marginTop: 4 }}>
                    Zero PCIe Bottleneck
                  </div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: 4 }}>
                    Weights live directly in unified memory shared by CPU and neural engines.
                  </div>
                </div>

                <div style={{ backgroundColor: "#07080B", padding: "16px 20px", borderRadius: 8, borderLeft: "4px solid #0088FF" }}>
                  <div style={{ fontSize: "12px", color: "#0088FF", fontWeight: 700 }}>BANDWIDTH PRESSURE RELIEF</div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", marginTop: 4 }}>
                    89.8% Bus Bandwidth Liberated
                  </div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: 4 }}>
                    Allows simultaneous agent reasoning, web scraping, and multi-threaded tools.
                  </div>
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
                  gap: 8,
                }}
              >
                <div style={{ fontSize: "12px", color: "#64748B", letterSpacing: "0.15em" }}>VRAM REQUIRED</div>
                <div style={{ fontSize: "44px", fontWeight: 900, color: "#FFC72C" }}>14.2 GB</div>
                <div style={{ fontSize: "13px", color: "#10B981", fontWeight: 700 }}>Runs on standard 16GB / 24GB Macs & PCs</div>
              </div>
            </div>
          </RivetCard>
        </div>
      )}
    </TechCanvas>
  );
};
