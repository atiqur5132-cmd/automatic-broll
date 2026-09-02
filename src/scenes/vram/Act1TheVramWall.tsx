import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { TechCanvas } from "../../components/vram/TechCanvas";
import { RivetCard } from "../../components/vram/RivetCard";
import { SpreadsheetCard } from "../../components/vram/SpreadsheetCard";

export const Act1TheVramWall: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 4 Distinct Micro-Pacing Phases within Act 1 (Total: 1806 frames)
  // Phase 1: 0 - 450 (The 40-Year Law & Silicon Multipliers)
  // Phase 2: 450 - 900 (The Spreadsheet Table & 24GB VRAM Limit)
  // Phase 3: 900 - 1350 (Out-Of-Memory Crash Analysis)
  // Phase 4: 1350 - 1806 (The 1-Bit Ternary Revelation)

  return (
    <TechCanvas chapter="A1 · THE 40-YEAR LAW & THE VRAM WALL" subTitle="THE SILICON ASSUMPTION">
      {/* ============================================================ */}
      {/* PHASE 1: Frames 0 - 450 (The 40-Year FP16 Law)              */}
      {/* ============================================================ */}
      {frame < 460 && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            opacity: frame < 430 ? 1 : interpolate(frame, [430, 460], [1, 0]),
            transform: `scale(${interpolate(
              spring({ frame, fps, config: { damping: 14 } }),
              [0, 1],
              [0.9, 1]
            )})`,
          }}
        >
          <RivetCard
            title="STANDARD TRANSFORMER SPECIFICATION"
            subTitle="FP32 / FP16 COMPUTE MATRIX"
            borderColor="#0088FF"
            bannerText="RIGID 40-YEAR RULE: MULTIPLIERS MANDATORY"
            bannerRightText="O(N³) MULTIPLICATION"
            bannerBgColor="#0088FF"
            width={860}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: "13px", color: "#64748B", letterSpacing: "0.15em" }}>
                CORE NEURAL NETWORK FORWARD PASS
              </div>
              
              <div
                style={{
                  backgroundColor: "#07080B",
                  borderRadius: 8,
                  padding: "20px 24px",
                  border: "1px solid rgba(0, 136, 255, 0.3)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.05em" }}>
                    Y = W · X + B
                  </div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: 6 }}>
                    Floating-Point Multiplication: 16 bits per weight parameter
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(244, 63, 94, 0.15)",
                    border: "1px solid #F43F5E",
                    padding: "10px 16px",
                    borderRadius: 6,
                    color: "#F43F5E",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                  }}
                >
                  HIGH THERMAL WATTS
                </div>
              </div>

              <div style={{ display: "flex", gap: 20, marginTop: 4 }}>
                <div style={{ flex: 1, backgroundColor: "#0A0B0E", padding: "12px 16px", borderRadius: 6, border: "1px solid #1E293B" }}>
                  <div style={{ fontSize: "11px", color: "#64748B" }}>NVIDIA MARKET CAP</div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#38BDF8", marginTop: 4 }}>$3.2 TRILLION</div>
                </div>
                <div style={{ flex: 1, backgroundColor: "#0A0B0E", padding: "12px 16px", borderRadius: 6, border: "1px solid #1E293B" }}>
                  <div style={{ fontSize: "11px", color: "#64748B" }}>CONSUMER CEILING</div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#FFC72C", marginTop: 4 }}>24 GB VRAM</div>
                </div>
              </div>
            </div>
          </RivetCard>
        </div>
      )}

      {/* ============================================================ */}
      {/* PHASE 2: Frames 450 - 920 (The Kai Spreadsheet Table)       */}
      {/* ============================================================ */}
      {frame >= 440 && frame < 920 && (
        <div
          style={{
            position: "absolute",
            opacity:
              frame < 470
                ? interpolate(frame, [440, 470], [0, 1])
                : frame > 890
                ? interpolate(frame, [890, 920], [1, 0])
                : 1,
          }}
        >
          <SpreadsheetCard highlightedRow={frame > 650 ? 5 : 1} />
        </div>
      )}

      {/* ============================================================ */}
      {/* PHASE 3: Frames 900 - 1380 (The 24GB OOM Hardware Wall)      */}
      {/* ============================================================ */}
      {frame >= 900 && frame < 1380 && (
        <div
          style={{
            position: "absolute",
            opacity:
              frame < 930
                ? interpolate(frame, [900, 930], [0, 1])
                : frame > 1350
                ? interpolate(frame, [1350, 1380], [1, 0])
                : 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <RivetCard
            title="HARDWARE LIMITATION BENCHMARK"
            subTitle="NVIDIA GEFORCE RTX 4090"
            borderColor="#F43F5E"
            bannerText="OUT OF MEMORY ERROR — 70B PARAMETER CHOKE"
            bannerRightText="24GB LIMIT HIT"
            bannerBgColor="#F43F5E"
            width={940}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: "13px", color: "#64748B", letterSpacing: "0.15em" }}>
                MEMORY CAPACITY VS 70B PARAMETER WEIGHT REQUIREMENTS
              </div>

              {/* Memory comparison bar */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 700 }}>
                  <span style={{ color: "#94A3B8" }}>70B PARAMETERS (FP16 WEIGHT ALLOCATION)</span>
                  <span style={{ color: "#F43F5E" }}>140 GB REQUIRED</span>
                </div>
                <div style={{ height: 26, backgroundColor: "#1E293B", borderRadius: 6, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "#F43F5E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                    }}
                  >
                    140 GB (CANNOT FIT ON CONSUMER GPU)
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: 700, marginTop: 8 }}>
                  <span style={{ color: "#94A3B8" }}>CONSUMER FLAGSHIP (RTX 4090 VRAM)</span>
                  <span style={{ color: "#38BDF8" }}>24 GB MAX CAPACITY</span>
                </div>
                <div style={{ height: 26, backgroundColor: "#1E293B", borderRadius: 6, overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${(24 / 140) * 100}%`,
                      backgroundColor: "#0088FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "#FFFFFF",
                    }}
                  >
                    24 GB
                  </div>
                </div>
              </div>
            </div>
          </RivetCard>
        </div>
      )}

      {/* ============================================================ */}
      {/* PHASE 4: Frames 1360 - 1806 (The 1-Bit Ternary Revelation)   */}
      {/* ============================================================ */}
      {frame >= 1360 && (
        <div
          style={{
            position: "absolute",
            opacity: interpolate(frame, [1360, 1400], [0, 1], { extrapolateRight: "clamp" }),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* Spatial Rivet-Pinned Banner (From Frame 1:15 screenshot) */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              color: "#08090C",
              padding: "24px 60px",
              borderRadius: 6,
              border: "2px solid #0088FF",
              transform: "perspective(800px) rotateZ(-3deg) rotateX(6deg)",
              boxShadow: "0 30px 80px rgba(0, 136, 255, 0.4)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Corner Rivet Screws */}
            <div style={{ position: "absolute", top: 8, left: 8, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000000" }} />
            <div style={{ position: "absolute", top: 8, right: 8, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000000" }} />
            <div style={{ position: "absolute", bottom: 8, left: 8, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000000" }} />
            <div style={{ position: "absolute", bottom: 8, right: 8, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#000000" }} />

            <div style={{ fontSize: "36px", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              BITNET b1.58 — TERNARY REVOLUTION
            </div>
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFC72C",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginTop: 18,
            }}
          >
            DELETING MULTIPLICATION FROM THE NEURAL ENGINE
          </div>
        </div>
      )}
    </TechCanvas>
  );
};
