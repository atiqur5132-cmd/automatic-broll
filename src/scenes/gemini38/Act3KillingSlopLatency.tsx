import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../../components/ParallaxCameraScene";
import { CodingHorizonBackground } from "../../components/CodingHorizonBackground";
import { Perspective3DCard, HighlightedTextLine } from "../../components/DocumentInspection";
import { XCircle, CheckCircle2, Zap, Sliders } from "lucide-react";

export const Act3KillingSlopLatency: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const latencyProgress = interpolate(frame, [30, 300], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const latency37 = Math.floor(interpolate(latencyProgress, [0, 1], [480, 520]));
  const latency38 = Math.floor(interpolate(latencyProgress, [0, 1], [350, 145]));

  return (
    <AbsoluteFill>
      <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12} panX={-10} panY={12}>
        <CodingHorizonBackground glowColor="rgba(16, 185, 129, 0.12)" />

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
              <div style={{ color: "#10B981", fontSize: "14px", fontFamily: "monospace", letterSpacing: "2px", fontWeight: 700 }}>
                ACT III // DECODING PIPELINE OPTIMIZATION
              </div>
              <div style={{ color: "#FFFFFF", fontSize: "26px", fontWeight: 800 }}>
                KILLING <span style={{ color: "#EF4444" }}>"AI SLOP"</span> & DRIVING LATENCY TO ZERO
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
              <Zap size={18} color="#10B981" />
              <span style={{ color: "#10B981", fontSize: "15px", fontFamily: "monospace", fontWeight: 700 }}>
                AGENTIC RE-ARCHITECTED
              </span>
            </div>
          </div>

          {/* Center Stage: Split Comparison Matrix */}
          <div style={{ display: "flex", gap: "40px", alignItems: "center", justifyContent: "center" }}>
            
            {/* Left Card: Gemini 3.7 Bottlenecks */}
            <div style={{ flex: 1, maxWidth: "580px", transform: `translateY(${(1 - entrance) * 40}px)` }}>
              <Perspective3DCard rotateX={6} rotateY={-6} borderColor="rgba(239, 68, 68, 0.3)" glowColor="rgba(239, 68, 68, 0.15)">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span style={{ color: "#EF4444", fontWeight: 800, fontSize: "16px", letterSpacing: "1px" }}>
                    GEMINI 3.7 FLASH (BOTTLENECKS)
                  </span>
                  <span style={{ color: "#94A3B8", fontSize: "12px", fontFamily: "monospace" }}>LEGACY BEHAVIOR</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <XCircle size={18} color="#EF4444" style={{ marginTop: "3px" }} />
                    <div>
                      <div style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "15px" }}>Verbose Conversational "Slop"</div>
                      <div style={{ color: "#64748B", fontSize: "13px" }}>Unnecessary preambles and repetitive padding tokens</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <XCircle size={18} color="#EF4444" style={{ marginTop: "3px" }} />
                    <div>
                      <div style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "15px" }}>Coding Hallucinations</div>
                      <div style={{ color: "#64748B", fontSize: "13px" }}>Phantom parameter generation in complex tool calls</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <XCircle size={18} color="#EF4444" style={{ marginTop: "3px" }} />
                    <div>
                      <div style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "15px" }}>Agentic Loop Latency (~{latency37}ms)</div>
                      <div style={{ color: "#64748B", fontSize: "13px" }}>Compounding delays across multi-step agent graphs</div>
                    </div>
                  </div>
                </div>
              </Perspective3DCard>
            </div>

            {/* Right Card: Gemini 3.8 Overhaul */}
            <div style={{ flex: 1, maxWidth: "580px", transform: `translateY(${(1 - entrance) * 40}px)` }}>
              <Perspective3DCard rotateX={6} rotateY={6} borderColor="rgba(16, 185, 129, 0.4)" glowColor="rgba(16, 185, 129, 0.2)">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span style={{ color: "#10B981", fontWeight: 800, fontSize: "16px", letterSpacing: "1px" }}>
                    GEMINI 3.8 FLASH (OVERHAUL)
                  </span>
                  <span style={{ color: "#00E5FF", fontSize: "12px", fontFamily: "monospace", border: "1px solid rgba(0,229,255,0.3)", padding: "2px 8px", borderRadius: "8px" }}>
                    OPTIMIZED
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#10B981" style={{ marginTop: "3px" }} />
                    <div>
                      <div style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "15px" }}>
                        <HighlightedTextLine startFrame={60} duration={30} color="rgba(16, 185, 129, 0.4)">
                          Zero-Slop Concise Output Decoding
                        </HighlightedTextLine>
                      </div>
                      <div style={{ color: "#64748B", fontSize: "13px" }}>Direct instruction execution with minimal filler</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#10B981" style={{ marginTop: "3px" }} />
                    <div>
                      <div style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "15px" }}>Strict Code Grounding</div>
                      <div style={{ color: "#64748B", fontSize: "13px" }}>Heavy penalties on syntax errors & hallucinated APIs</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={18} color="#10B981" style={{ marginTop: "3px" }} />
                    <div>
                      <div style={{ color: "#F8FAFC", fontWeight: 600, fontSize: "15px" }}>
                        Sub-150ms Agent Execution (<span style={{ color: "#10B981", fontWeight: 800 }}>{latency38}ms</span>)
                      </div>
                      <div style={{ color: "#64748B", fontSize: "13px" }}>Ultra-responsive tool-use loops for fast workflows</div>
                    </div>
                  </div>
                </div>
              </Perspective3DCard>
            </div>

          </div>

          {/* Bottom Telemetry Ticker */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "16px" }}>
            <div style={{ color: "#64748B", fontSize: "13px", fontFamily: "monospace" }}>
              DECODING_LAYER: DENSE-PENALTY-V3 // HALLUCINATION_SCORE: -68% // STATUS: VERIFIED
            </div>
            <div style={{ color: "#94A3B8", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Sliders size={14} color="#10B981" />
              <span>TOKEN COMPRESSION RATIO: 1.48x</span>
            </div>
          </div>

        </AbsoluteFill>
      </ParallaxCameraScene>
    </AbsoluteFill>
  );
};
