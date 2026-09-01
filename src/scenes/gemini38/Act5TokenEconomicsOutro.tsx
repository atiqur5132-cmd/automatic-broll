import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../../components/ParallaxCameraScene";
import { CodingHorizonBackground } from "../../components/CodingHorizonBackground";
import { Perspective3DCard, HighlightedTextLine } from "../../components/DocumentInspection";
import { GoogleLogo } from "../../components/RealLogos";
import { TrendingDown, Coins, Award, CheckCircle2 } from "lucide-react";

export const Act5TokenEconomicsOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const chartEntrance = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Animated cost drop counter
  const costDropProgress = interpolate(frame, [40, 220], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const price = interpolate(costDropProgress, [0, 1], [15.00, 0.10]).toFixed(2);
  const costReduction = Math.floor(interpolate(costDropProgress, [0, 1], [0, 99]));

  return (
    <AbsoluteFill>
      <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.14} panX={-8} panY={8}>
        <CodingHorizonBackground glowColor="rgba(0, 229, 255, 0.16)" />

        <AbsoluteFill style={{ padding: "70px 100px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          
          {/* Top Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transform: `translateY(${(1 - entrance) * -30}px)`,
              opacity: entrance,
            }}
          >
            <div>
              <div style={{ color: "#00E5FF", fontSize: "14px", fontFamily: "monospace", letterSpacing: "2px", fontWeight: 700 }}>
                ACT V // TOKEN ECONOMICS & THE ROAD TO GEMINI 4
              </div>
              <div style={{ color: "#FFFFFF", fontSize: "26px", fontWeight: 800 }}>
                FABLE 5 INTELLIGENCE AT <span style={{ color: "#10B981" }}>FLASH PRICING</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                borderRadius: "10px",
                backgroundColor: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
              }}
            >
              <Coins size={18} color="#10B981" />
              <span style={{ color: "#10B981", fontSize: "15px", fontFamily: "monospace", fontWeight: 700 }}>
                TOKEN PRICE CRASH: -{costReduction}%
              </span>
            </div>
          </div>

          {/* Center Stage: Token Economics Breakdown & Outro Card */}
          <div style={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "center" }}>
            
            {/* Left Card: 3D Unit Economics Chart */}
            <div style={{ flex: 1, maxWidth: "580px", transform: `scale(${chartEntrance})`, opacity: chartEntrance }}>
              <Perspective3DCard rotateX={6} rotateY={-6} borderColor="rgba(16, 185, 129, 0.4)" glowColor="rgba(16, 185, 129, 0.2)">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <TrendingDown size={20} color="#10B981" />
                    <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>
                      COST PER 1M TOKENS (INFERENCE)
                    </span>
                  </div>
                  <span style={{ color: "#10B981", fontFamily: "monospace", fontSize: "12px", border: "1px solid rgba(16,185,129,0.4)", padding: "2px 8px", borderRadius: "6px" }}>
                    MARKET DISRUPTION
                  </span>
                </div>

                {/* Pricing Comparison Bars */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#94A3B8", fontSize: "13px", marginBottom: "6px" }}>
                      <span>Traditional Frontier Tier (Fable 5 / GPT-4o)</span>
                      <span style={{ color: "#EF4444", fontWeight: 700 }}>$15.00 / M</span>
                    </div>
                    <div style={{ width: "100%", height: "14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "7px", overflow: "hidden" }}>
                      <div style={{ width: "100%", height: "100%", backgroundColor: "#EF4444", borderRadius: "7px" }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#94A3B8", fontSize: "13px", marginBottom: "6px" }}>
                      <span>Gemini 3.8 Flash (Target Pricing)</span>
                      <span style={{ color: "#10B981", fontWeight: 800, fontSize: "16px" }}>${price} / M</span>
                    </div>
                    <div style={{ width: "100%", height: "14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "7px", overflow: "hidden" }}>
                      <div style={{ width: `${Math.max(4, (parseFloat(price) / 15.00) * 100)}%`, height: "100%", backgroundColor: "#10B981", borderRadius: "7px" }} />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "20px", color: "#CBD5E1", fontSize: "15px", lineHeight: "1.5" }}>
                  <HighlightedTextLine startFrame={60} duration={35} color="rgba(16, 185, 129, 0.4)">
                    "Matching Fable 5 intelligence would change the pricing conversation overnight."
                  </HighlightedTextLine>
                </div>
              </Perspective3DCard>
            </div>

            {/* Right Card: Grand Outro & Gemini 4 Horizon */}
            <div style={{ flex: 1, maxWidth: "580px", transform: `scale(${chartEntrance})`, opacity: chartEntrance }}>
              <Perspective3DCard rotateX={6} rotateY={6} borderColor="rgba(0, 229, 255, 0.4)" glowColor="rgba(0, 229, 255, 0.25)">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "10px 0" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      backgroundColor: "rgba(66, 133, 244, 0.15)",
                      border: "1px solid rgba(66, 133, 244, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <GoogleLogo size={36} />
                  </div>

                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "22px" }}>
                    GEMINI 3.8 FLASH
                  </div>
                  <div style={{ color: "#00E5FF", fontSize: "14px", fontFamily: "monospace", letterSpacing: "1.5px", marginTop: "4px" }}>
                    THE NEW EFFICIENCY BENCHMARK
                  </div>

                  <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "10px", width: "100%", textAlign: "left" }}>
                    <div style={{ backgroundColor: "rgba(15, 23, 42, 0.7)", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span style={{ color: "#E2E8F0", fontSize: "14px" }}>Hyper-efficient agent token loops</span>
                    </div>
                    <div style={{ backgroundColor: "rgba(15, 23, 42, 0.7)", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <CheckCircle2 size={16} color="#10B981" />
                      <span style={{ color: "#E2E8F0", fontSize: "14px" }}>Massive unit economics advantage</span>
                    </div>
                    <div style={{ backgroundColor: "rgba(15, 23, 42, 0.7)", borderRadius: "10px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <CheckCircle2 size={16} color="#00E5FF" />
                      <span style={{ color: "#00E5FF", fontSize: "14px", fontWeight: 600 }}>Stepping stone to Gemini 4</span>
                    </div>
                  </div>
                </div>
              </Perspective3DCard>
            </div>

          </div>

          {/* Bottom Telemetry Ticker */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "14px" }}>
            <div style={{ color: "#64748B", fontSize: "13px", fontFamily: "monospace" }}>
              DOCUMENTARY_COMPLETE // GOOGLE_GEMINI_3.8_FLASH_ANALYSIS // STATUS: BROADCAST_READY
            </div>
            <div style={{ color: "#94A3B8", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={14} color="#00E5FF" />
              <span>CODINGHORIZON MOTION SPECIFICATION</span>
            </div>
          </div>

        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};
