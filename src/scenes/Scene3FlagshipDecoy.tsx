import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { KineticTitle } from "../components/AnimatedTypography";
import { HighlightedTextLine, Perspective3DCard } from "../components/DocumentInspection";
import { AlertOctagon, TrendingDown, FileText, Skull } from "lucide-react";

export const Scene3FlagshipDecoy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isSecondPhase = frame >= 600;

  const cardSpring = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const dilemmaSpring = spring({ frame: frame - 615, fps, config: { damping: 14 } });

  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12} panX={-12} panY={8}>
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          color: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255, 215, 0, 0.1)",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            padding: "10px 24px",
            borderRadius: "100px",
          }}
        >
          <AlertOctagon size={20} color="#FFD700" />
          <span style={{ fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, color: "#FFD700" }}>
            {isSecondPhase ? "The Three-Tier Paradox" : "Flagship Economics & Bankruptcy"}
          </span>
        </div>

        {!isSecondPhase ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
            <KineticTitle
              text="IF EVERY USER GOT THE FLAGSHIP MODEL FOR FREE... BANKRUPTCY"
              fontSize={42}
              accentColor="#FF4B4B"
            />

            <div style={{ width: "100%", maxWidth: "1000px", transform: `scale(${cardSpring})` }}>
              <Perspective3DCard rotateX={10} rotateY={-8} borderColor="rgba(255, 75, 75, 0.3)" glowColor="rgba(255, 75, 75, 0.2)">
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "850px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <FileText size={24} color="#FF4B4B" />
                      <span style={{ fontSize: "18px", letterSpacing: "1px", fontWeight: 700 }}>AI LAB UNIT ECONOMICS AUDIT</span>
                    </div>
                    <span style={{ background: "rgba(255, 75, 75, 0.2)", color: "#FF4B4B", padding: "4px 14px", borderRadius: "12px", fontSize: "13px", fontWeight: 800 }}>
                      CRITICAL DEFICIT
                    </span>
                  </div>

                  <div style={{ fontSize: "24px", lineHeight: "1.7", color: "rgba(255,255,255,0.85)" }}>
                    <div>
                      Flagship Model (Opus / Ultra) Cost Per Query:{" "}
                      <HighlightedTextLine startFrame={45} color="rgba(255, 75, 75, 0.5)">
                        $0.04 - $0.12 PER PROMPT
                      </HighlightedTextLine>
                    </div>
                    <div>
                      Average Daily Queries Per User:{" "}
                      <HighlightedTextLine startFrame={90} color="rgba(250, 204, 21, 0.45)">
                        45 QUERIES = ~$3.60 / DAY
                      </HighlightedTextLine>
                    </div>
                    <div>
                      Annual Loss Per Free User:{" "}
                      <HighlightedTextLine startFrame={140} color="rgba(255, 75, 75, 0.6)">
                        -$1,314.00 (INSOLVENCY RISK)
                      </HighlightedTextLine>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255, 75, 75, 0.15)",
                      border: "1px solid rgba(255, 75, 75, 0.3)",
                      borderRadius: "16px",
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <Skull size={32} color="#FF4B4B" />
                    <div>
                      <div style={{ fontSize: "16px", fontWeight: 800, color: "#FF4B4B" }}>PURE ECONOMIC REALITY</div>
                      <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                        No VC treasury can subsidize unconstrained flagship queries indefinitely.
                      </div>
                    </div>
                  </div>
                </div>
              </Perspective3DCard>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
            <KineticTitle
              text="COSTS ALONE EXPLAIN TWO TIERS. SO WHY THREE?"
              fontSize={44}
              accentColor="#00F0FF"
            />

            <div style={{ display: "flex", justifyContent: "center", gap: "48px", width: "100%", maxWidth: "1100px", transform: `scale(${dilemmaSpring})` }}>
              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(10,10,15,0.9) 100%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "24px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: 800, color: "rgba(255,255,255,0.6)" }}>PURE LOGIC (2 TIERS)</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ background: "rgba(255,75,75,0.15)", border: "1px solid rgba(255,75,75,0.3)", padding: "16px", borderRadius: "14px", fontWeight: 700 }}>
                    1. Rich / Expensive Model ($)
                  </div>
                  <div style={{ background: "rgba(50,220,120,0.15)", border: "1px solid rgba(50,220,120,0.3)", padding: "16px", borderRadius: "14px", fontWeight: 700 }}>
                    2. Cheap / Fast Model (Free)
                  </div>
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>Compute is matched to capacity. Done.</div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(10,10,15,0.9) 100%)",
                  border: "2px solid rgba(0, 240, 255, 0.5)",
                  borderRadius: "24px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  boxShadow: "0 25px 50px rgba(0, 240, 255, 0.2)",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#00F0FF" }}>PSYCHOLOGY (3 TIERS)</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 16px", borderRadius: "12px" }}>1. Ultra Flagship (The Anchor)</div>
                  <div style={{ background: "rgba(0,240,255,0.25)", border: "1px solid #00F0FF", padding: "12px 16px", borderRadius: "12px", fontWeight: 800, color: "#00F0FF" }}>
                    2. Mid-Tier (The Target Trap)
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.06)", padding: "12px 16px", borderRadius: "12px" }}>3. Budget (The Habit Hook)</div>
                </div>
                <div style={{ fontSize: "14px", color: "rgba(0,240,255,0.8)" }}>It stops being about compute... and starts being about how you choose.</div>
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <TrendingDown size={18} />
          <span>It stops being about compute... and starts being about human cognitive bias.</span>
        </div>
      </AbsoluteFill>
    </ParallaxCameraScene>
  );
};
