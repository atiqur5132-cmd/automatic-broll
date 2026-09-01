import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../../components/ParallaxCameraScene";
import { CodingHorizonBackground } from "../../components/CodingHorizonBackground";
import { Perspective3DCard, HighlightedTextLine } from "../../components/DocumentInspection";
import { GoogleLogo } from "../../components/RealLogos";
import { ShieldAlert, Cpu, Terminal, Activity } from "lucide-react";

export const Act1SuddenShockwave: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance animations
  const headerEntrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const cardEntrance = spring({
    frame: frame - 25,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const secondCardEntrance = spring({
    frame: frame - 180,
    fps,
    config: { damping: 15, stiffness: 90 },
  });

  const badgePulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.95, 1.05]);

  return (
    <AbsoluteFill>
      <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12} panX={-15} panY={-10}>
        <CodingHorizonBackground glowColor="rgba(66, 133, 244, 0.15)" />

        <AbsoluteFill style={{ padding: "70px 100px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          
          {/* Top HUD Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transform: `translateY(${(1 - headerEntrance) * -30}px)`,
              opacity: headerEntrance,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(66, 133, 244, 0.15)",
                  border: "1px solid rgba(66, 133, 244, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GoogleLogo size={28} />
              </div>
              <div>
                <div style={{ color: "#94A3B8", fontSize: "14px", fontFamily: "monospace", letterSpacing: "2px" }}>
                  GOOGLE DEEPMIND // INTELLIGENCE REGISTRY
                </div>
                <div style={{ color: "#FFFFFF", fontSize: "24px", fontWeight: 800, fontFamily: "sans-serif" }}>
                  GEMINI 3.8 FLASH <span style={{ color: "#00E5FF", fontWeight: 600 }}>// DEPLOYMENT SCOOP</span>
                </div>
              </div>
            </div>

            {/* Alert Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                borderRadius: "30px",
                backgroundColor: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.5)",
                transform: `scale(${badgePulse})`,
              }}
            >
              <ShieldAlert size={18} color="#EF4444" />
              <span style={{ color: "#EF4444", fontSize: "14px", fontWeight: 800, letterSpacing: "1.5px" }}>
                INTERNAL DEPLOYMENT CONFIRMED
              </span>
            </div>
          </div>

          {/* Center Stage: 2.5D Technical Inspection Cards */}
          <div style={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
            
            {/* Card 1: @Priyannkaaaa Scoop Card */}
            <div
              style={{
                flex: 1,
                maxWidth: "620px",
                transform: `translateY(${(1 - cardEntrance) * 60}px) scale(${cardEntrance})`,
                opacity: cardEntrance,
              }}
            >
              <Perspective3DCard rotateX={6} rotateY={-4} borderColor="rgba(0, 229, 255, 0.3)" glowColor="rgba(0, 229, 255, 0.15)">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: "#1E293B",
                        border: "2px solid #00E5FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#00E5FF",
                        fontWeight: 800,
                        fontSize: "16px",
                      }}
                    >
                      P
                    </div>
                    <div>
                      <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "17px" }}>Priya (@Priyannkaaaa)</div>
                      <div style={{ color: "#64748B", fontSize: "13px" }}>AI News & Growth // Verified Source</div>
                    </div>
                  </div>
                  <div style={{ color: "#00E5FF", fontFamily: "monospace", fontSize: "12px", border: "1px solid rgba(0,229,255,0.3)", padding: "3px 10px", borderRadius: "12px" }}>
                    TWEET VERIFIED
                  </div>
                </div>

                <div style={{ color: "#E2E8F0", fontSize: "19px", lineHeight: "1.6", fontWeight: 500 }}>
                  🚨 <HighlightedTextLine startFrame={45} duration={30} color="rgba(0, 229, 255, 0.4)">
                    SCOOP: Gemini 3.8 Flash is reportedly dropping today
                  </HighlightedTextLine>
                </div>

                <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ color: "#94A3B8", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#00E5FF" }}>&gt;</span> gemini-3.8-flash has reportedly been deployed ahead of launch
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#00E5FF" }}>&gt;</span> <HighlightedTextLine startFrame={90} duration={25} color="rgba(250, 204, 21, 0.4)">
                      New build reportedly fixes several issues from 3.7 Flash
                    </HighlightedTextLine>
                  </div>
                  <div style={{ color: "#94A3B8", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#00E5FF" }}>&gt;</span> Google has cut down model "slop" significantly
                  </div>
                </div>
              </Perspective3DCard>
            </div>

            {/* Card 2: Technical Architecture / Status Wireframe */}
            <div
              style={{
                flex: 1,
                maxWidth: "580px",
                transform: `translateY(${(1 - secondCardEntrance) * 60}px) scale(${secondCardEntrance})`,
                opacity: secondCardEntrance,
              }}
            >
              <Perspective3DCard rotateX={6} rotateY={4} borderColor="rgba(59, 130, 246, 0.3)" glowColor="rgba(59, 130, 246, 0.15)">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Terminal size={20} color="#3B82F6" />
                    <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px", letterSpacing: "1px" }}>
                      PRODUCTION MODEL PIPELINE
                    </span>
                  </div>
                  <span style={{ color: "#10B981", fontSize: "12px", fontFamily: "monospace", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Activity size={14} /> LIVE STAGING
                  </span>
                </div>

                <div style={{ backgroundColor: "rgba(15, 23, 42, 0.8)", borderRadius: "14px", padding: "18px", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "10px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color: "#94A3B8", fontSize: "14px" }}>Active Generation:</span>
                    <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "14px" }}>gemini-3.7-flash (Legacy)</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color: "#94A3B8", fontSize: "14px" }}>Candidate Build:</span>
                    <span style={{ color: "#00E5FF", fontWeight: 800, fontSize: "14px" }}>gemini-3.8-flash-preview-0901</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "10px" }}>
                    <span style={{ color: "#94A3B8", fontSize: "14px" }}>Deployment State:</span>
                    <span style={{ color: "#F59E0B", fontWeight: 700, fontSize: "14px" }}>Internal A/B Partner Testing</span>
                  </div>
                </div>

                <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
                  <div style={{ flex: 1, backgroundColor: "rgba(0, 229, 255, 0.08)", border: "1px solid rgba(0, 229, 255, 0.2)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
                    <div style={{ color: "#94A3B8", fontSize: "12px" }}>RELEASE CADENCE</div>
                    <div style={{ color: "#00E5FF", fontSize: "20px", fontWeight: 800 }}>MONTHLY</div>
                  </div>
                  <div style={{ flex: 1, backgroundColor: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
                    <div style={{ color: "#94A3B8", fontSize: "12px" }}>TARGET LATENCY</div>
                    <div style={{ color: "#10B981", fontSize: "20px", fontWeight: 800 }}>&lt; 180ms</div>
                  </div>
                </div>
              </Perspective3DCard>
            </div>

          </div>

          {/* Bottom Telemetry Ticker */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              paddingTop: "16px",
            }}
          >
            <div style={{ color: "#64748B", fontSize: "13px", fontFamily: "monospace" }}>
              SYS_CHECK: 0x9F44 // MODEL IDENTIFIER: GEMINI_3.8_FLASH // PROTOCOL: TS-DOCU-V1
            </div>
            <div style={{ color: "#94A3B8", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Cpu size={14} color="#00E5FF" />
              <span>TPU v5p CLUSTERS ALLOCATED</span>
            </div>
          </div>

        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};
