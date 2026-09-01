import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../../components/ParallaxCameraScene";
import { CodingHorizonBackground } from "../../components/CodingHorizonBackground";
import { Perspective3DCard, HighlightedTextLine } from "../../components/DocumentInspection";
import { OpenAILogo, AnthropicLogo, GoogleLogo } from "../../components/RealLogos";
import { Flame, Rocket } from "lucide-react";

export const Act4TitanShippingWar: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const titan1 = spring({ frame: frame - 15, fps, config: { damping: 14, stiffness: 110 } });
  const titan2 = spring({ frame: frame - 35, fps, config: { damping: 14, stiffness: 110 } });
  const titan3 = spring({ frame: frame - 55, fps, config: { damping: 14, stiffness: 110 } });

  const pulse = interpolate(Math.sin(frame * 0.12), [-1, 1], [0.95, 1.05]);

  return (
    <AbsoluteFill>
      <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12} panX={12} panY={-10}>
        <CodingHorizonBackground glowColor="rgba(217, 119, 87, 0.12)" />

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
              <div style={{ color: "#D97757", fontSize: "14px", fontFamily: "monospace", letterSpacing: "2px", fontWeight: 700 }}>
                ACT IV // COMPETITIVE AI FRONTIER 2026
              </div>
              <div style={{ color: "#FFFFFF", fontSize: "26px", fontWeight: 800 }}>
                THE 2026 BIG TECH <span style={{ color: "#EF4444" }}>"SHIPPING WAR"</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                borderRadius: "10px",
                backgroundColor: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
              }}
            >
              <Flame size={18} color="#EF4444" />
              <span style={{ color: "#EF4444", fontSize: "15px", fontFamily: "monospace", fontWeight: 700 }}>
                HYPER-CADENCE CYCLE
              </span>
            </div>
          </div>

          {/* Center Stage: The 3 Titans Pedestals */}
          <div style={{ display: "flex", gap: "28px", alignItems: "center", justifyContent: "center" }}>
            
            {/* Titan 1: OpenAI */}
            <div style={{ flex: 1, transform: `scale(${titan1})`, opacity: titan1 }}>
              <Perspective3DCard rotateX={8} rotateY={-8} borderColor="rgba(16, 163, 127, 0.4)" glowColor="rgba(16, 163, 127, 0.2)">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "18px",
                      backgroundColor: "rgba(16, 163, 127, 0.15)",
                      border: "1px solid rgba(16, 163, 127, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <OpenAILogo size={40} color="#10A37F" />
                  </div>
                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "19px" }}>OPENAI</div>
                  <div style={{ color: "#10A37F", fontWeight: 700, fontSize: "14px", fontFamily: "monospace", marginTop: "4px" }}>
                    ASTRA SERIES
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: "13px", marginTop: "10px", lineHeight: "1.4" }}>
                    Real-time multimodal agents & frontier reasoning
                  </div>
                </div>
              </Perspective3DCard>
            </div>

            {/* Titan 2: Anthropic */}
            <div style={{ flex: 1, transform: `scale(${titan2})`, opacity: titan2 }}>
              <Perspective3DCard rotateX={8} rotateY={0} borderColor="rgba(217, 119, 87, 0.4)" glowColor="rgba(217, 119, 87, 0.2)">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "18px",
                      backgroundColor: "rgba(217, 119, 87, 0.15)",
                      border: "1px solid rgba(217, 119, 87, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <AnthropicLogo size={40} color="#D97757" />
                  </div>
                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "19px" }}>ANTHROPIC</div>
                  <div style={{ color: "#D97757", fontWeight: 700, fontSize: "14px", fontFamily: "monospace", marginTop: "4px" }}>
                    FABLE 5.1
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: "13px", marginTop: "10px", lineHeight: "1.4" }}>
                    High-depth synthesis & elite benchmark dominance
                  </div>
                </div>
              </Perspective3DCard>
            </div>

            {/* Titan 3: Google DeepMind */}
            <div style={{ flex: 1, transform: `scale(${titan3})`, opacity: titan3 }}>
              <Perspective3DCard rotateX={8} rotateY={8} borderColor="rgba(66, 133, 244, 0.5)" glowColor="rgba(66, 133, 244, 0.3)">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "18px",
                      backgroundColor: "rgba(66, 133, 244, 0.15)",
                      border: "1px solid rgba(66, 133, 244, 0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                      transform: `scale(${pulse})`,
                    }}
                  >
                    <GoogleLogo size={40} />
                  </div>
                  <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: "19px" }}>GOOGLE DEEPMIND</div>
                  <div style={{ color: "#00E5FF", fontWeight: 700, fontSize: "14px", fontFamily: "monospace", marginTop: "4px" }}>
                    GEMINI 3.8 FLASH
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: "13px", marginTop: "10px", lineHeight: "1.4" }}>
                    Monthly agile deployment & high-volume economics
                  </div>
                </div>
              </Perspective3DCard>
            </div>

          </div>

          {/* Quote Card from @buildwithrajath */}
          <div
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "14px",
              padding: "16px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ color: "#00E5FF", fontWeight: 700, fontSize: "15px" }}>@buildwithrajath:</div>
              <div style={{ color: "#F8FAFC", fontSize: "16px", fontWeight: 600 }}>
                <HighlightedTextLine startFrame={45} duration={35} color="rgba(239, 68, 68, 0.4)">
                  "This isn't a model race anymore. It's a shipping war."
                </HighlightedTextLine>
              </div>
            </div>
            <div style={{ color: "#94A3B8", fontSize: "13px", fontFamily: "monospace" }}>
              STRATEGIC IMPACT: 100% CADENCE ACCELERATION
            </div>
          </div>

          {/* Bottom Telemetry Ticker */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "14px" }}>
            <div style={{ color: "#64748B", fontSize: "13px", fontFamily: "monospace" }}>
              BIG_TECH_SPRINT: Q3-2026 // OPENAI-ASTRA vs ANTHROPIC-FABLE vs GOOGLE-FLASH
            </div>
            <div style={{ color: "#94A3B8", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Rocket size={14} color="#D97757" />
              <span>SHIPPING VELOCITY: MONTHLY SPRINT CYCLES</span>
            </div>
          </div>

        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};
