import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../../components/ParallaxCameraScene";
import { CodingHorizonBackground } from "../../components/CodingHorizonBackground";
import { Perspective3DCard, HighlightedTextLine } from "../../components/DocumentInspection";
import { Code2, Gauge, CheckCircle2, Layers } from "lucide-react";

export const Act2JetskiPlatform: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const cardTwoEntrance = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  const speedCounter = Math.floor(interpolate(frame, [80, 500], [42, 186], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }));

  return (
    <AbsoluteFill>
      <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.11} panX={15} panY={-8}>
        <CodingHorizonBackground glowColor="rgba(0, 229, 255, 0.14)" />

        <AbsoluteFill style={{ padding: "70px 100px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          
          {/* Top HUD Header */}
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
                ACT II // INTERNAL TESTING ENVIRONMENT
              </div>
              <div style={{ color: "#FFFFFF", fontSize: "26px", fontWeight: 800 }}>
                GOOGLE INTERNAL PLATFORM: <span style={{ color: "#F59E0B" }}>"JETSKI"</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 20px",
                borderRadius: "10px",
                backgroundColor: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(0, 229, 255, 0.3)",
              }}
            >
              <Gauge size={18} color="#00E5FF" />
              <span style={{ color: "#FFFFFF", fontSize: "15px", fontFamily: "monospace", fontWeight: 700 }}>
                TESTING THROUGHPUT: <span style={{ color: "#00E5FF" }}>{speedCounter} TOKENS/SEC</span>
              </span>
            </div>
          </div>

          {/* Center Stage: Jetski Workbench & Leaked Tweets */}
          <div style={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "center" }}>
            
            {/* Left: @Mr_Salio Leaked Document Inspection */}
            <div
              style={{
                flex: 1,
                maxWidth: "600px",
                transform: `translateY(${(1 - entrance) * 50}px)`,
                opacity: entrance,
              }}
            >
              <Perspective3DCard rotateX={7} rotateY={-5} borderColor="rgba(245, 158, 11, 0.3)" glowColor="rgba(245, 158, 11, 0.15)">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        backgroundColor: "#1E293B",
                        border: "2px solid #F59E0B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#F59E0B",
                        fontWeight: 800,
                      }}
                    >
                      S
                    </div>
                    <div>
                      <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "16px" }}>Salio (@Mr_Salio)</div>
                      <div style={{ color: "#64748B", fontSize: "13px" }}>AI Benchmarks & Leaks</div>
                    </div>
                  </div>
                  <span style={{ color: "#F59E0B", fontSize: "12px", fontFamily: "monospace", border: "1px solid rgba(245,158,11,0.3)", padding: "3px 8px", borderRadius: "8px" }}>
                    LEAK DOSSIER
                  </span>
                </div>

                <div style={{ color: "#F8FAFC", fontSize: "18px", fontWeight: 600, lineHeight: "1.6" }}>
                  🚨 <HighlightedTextLine startFrame={60} duration={35} color="rgba(245, 158, 11, 0.4)">
                    Gemini 3.8 Flash spotted on Google's Jetski coding platform
                  </HighlightedTextLine>
                </div>

                <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ color: "#CBD5E1", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>Employees already have direct preview access</span>
                  </div>
                  <div style={{ color: "#CBD5E1", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle2 size={16} color="#10B981" />
                    <HighlightedTextLine startFrame={130} duration={30} color="rgba(0, 229, 255, 0.4)">
                      Early impressions: Noticeably faster than 3.7 Flash
                    </HighlightedTextLine>
                  </div>
                  <div style={{ color: "#CBD5E1", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle2 size={16} color="#10B981" />
                    <span>A/B evaluations against live code repositories</span>
                  </div>
                </div>
              </Perspective3DCard>
            </div>

            {/* Right: Jetski Code IDE Simulation Card */}
            <div
              style={{
                flex: 1,
                maxWidth: "600px",
                transform: `translateY(${(1 - cardTwoEntrance) * 50}px)`,
                opacity: cardTwoEntrance,
              }}
            >
              <Perspective3DCard rotateX={7} rotateY={5} borderColor="rgba(0, 229, 255, 0.3)" glowColor="rgba(0, 229, 255, 0.15)">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Code2 size={18} color="#00E5FF" />
                    <span style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "15px", fontFamily: "monospace" }}>
                      JETSKI_IDE // SYNTHESIS_TEST.ts
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                  </div>
                </div>

                {/* Simulated Code Body */}
                <div
                  style={{
                    backgroundColor: "#030712",
                    borderRadius: "10px",
                    padding: "16px",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#94A3B8",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div><span style={{ color: "#3B82F6" }}>const</span> model = <span style={{ color: "#10B981" }}>"gemini-3.8-flash"</span>;</div>
                  <div><span style={{ color: "#3B82F6" }}>const</span> response = <span style={{ color: "#F59E0B" }}>await</span> executeAgentLoop({`{`}</div>
                  <div style={{ paddingLeft: "16px" }}>slopReduction: <span style={{ color: "#00E5FF" }}>true</span>,</div>
                  <div style={{ paddingLeft: "16px" }}>targetLatency: <span style={{ color: "#00E5FF" }}>"ultra-low"</span>,</div>
                  <div style={{ paddingLeft: "16px" }}>benchmarkMatch: <span style={{ color: "#10B981" }}>"FABLE-5-PARITY"</span>,</div>
                  <div>{`}`});</div>
                </div>

                {/* Performance Metrics Bar */}
                <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
                  <div style={{ flex: 1, backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                    <div style={{ color: "#94A3B8", fontSize: "12px" }}>FIRST TOKEN LATENCY</div>
                    <div style={{ color: "#10B981", fontSize: "18px", fontWeight: 800 }}>-42% vs 3.7</div>
                  </div>
                  <div style={{ flex: 1, backgroundColor: "rgba(0, 229, 255, 0.1)", border: "1px solid rgba(0, 229, 255, 0.3)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                    <div style={{ color: "#94A3B8", fontSize: "12px" }}>CODE REASONING</div>
                    <div style={{ color: "#00E5FF", fontSize: "18px", fontWeight: 800 }}>+28% ACCURACY</div>
                  </div>
                </div>
              </Perspective3DCard>
            </div>

          </div>

          {/* Bottom Telemetry Ticker */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "16px" }}>
            <div style={{ color: "#64748B", fontSize: "13px", fontFamily: "monospace" }}>
              PLATFORM_SIGNATURE: JETSKI-INTERNAL-CANARY-BUILD // EVALUATION: STABLE
            </div>
            <div style={{ color: "#94A3B8", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Layers size={14} color="#F59E0B" />
              <span>MULTIPLE REPO EVALUATION IN PROGRESS</span>
            </div>
          </div>

        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};
