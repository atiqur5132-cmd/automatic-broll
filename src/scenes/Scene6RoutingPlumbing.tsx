import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { KineticTitle } from "../components/AnimatedTypography";
import { GitFork, Mail, Brain, ArrowRight, CheckCircle } from "lucide-react";

export const Scene6RoutingPlumbing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const routerSpring = spring({ frame: frame - 15, fps, config: { damping: 14 } });

  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12} panX={10} panY={6}>
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
            background: "rgba(0, 240, 255, 0.12)",
            border: "1px solid rgba(0, 240, 255, 0.35)",
            padding: "10px 24px",
            borderRadius: "100px",
          }}
        >
          <GitFork size={20} color="#00F0FF" />
          <span style={{ fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, color: "#00F0FF" }}>
            The Legitimate Side: Efficient Plumbing
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
          <KineticTitle
            text="SUMMARIZING AN EMAIL DOESN'T NEED A SUPERCOMPUTER"
            fontSize={42}
            accentColor="#00F0FF"
          />

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", width: "100%", maxWidth: "1200px", transform: `scale(${routerSpring})` }}>
            <div
              style={{
                flex: 1,
                background: "linear-gradient(135deg, rgba(50, 220, 120, 0.12) 0%, rgba(10, 20, 15, 0.95) 100%)",
                border: "1px solid rgba(50, 220, 120, 0.4)",
                borderRadius: "24px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ background: "rgba(50, 220, 120, 0.2)", padding: "12px", borderRadius: "14px" }}>
                  <Mail size={28} color="#32DC78" />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#32DC78" }}>LIGHTWEIGHT TASK</div>
                  <div style={{ fontSize: "20px", fontWeight: 800 }}>Summarize 2-Line Email</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                <ArrowRight size={18} color="#32DC78" />
                <span>Routed to <strong>Cheap / Flash Model</strong></span>
              </div>

              <div style={{ background: "rgba(0,0,0,0.4)", padding: "16px", borderRadius: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>Compute Cost:</span>
                <span style={{ fontSize: "16px", fontWeight: 900, color: "#32DC78" }}>0.0001¢ (Fast & Cheap)</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ background: "rgba(0, 240, 255, 0.15)", border: "2px solid #00F0FF", padding: "20px", borderRadius: "50%", boxShadow: "0 0 30px rgba(0,240,255,0.3)" }}>
                <GitFork size={36} color="#00F0FF" />
              </div>
              <span style={{ fontSize: "12px", letterSpacing: "1.5px", fontWeight: 800, color: "#00F0FF" }}>ROUTING</span>
            </div>

            <div
              style={{
                flex: 1,
                background: "linear-gradient(135deg, rgba(255, 75, 75, 0.12) 0%, rgba(20, 10, 15, 0.95) 100%)",
                border: "1px solid rgba(255, 75, 75, 0.4)",
                borderRadius: "24px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ background: "rgba(255, 75, 75, 0.2)", padding: "12px", borderRadius: "14px" }}>
                  <Brain size={28} color="#FF4B4B" />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#FF4B4B" }}>HEAVYWEIGHT TASK</div>
                  <div style={{ fontSize: "20px", fontWeight: 800 }}>PhD Research Synthesis</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                <ArrowRight size={18} color="#FF4B4B" />
                <span>Routed to <strong>Flagship Reasoning Model</strong></span>
              </div>

              <div style={{ background: "rgba(0,0,0,0.4)", padding: "16px", borderRadius: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>Compute Cost:</span>
                <span style={{ fontSize: "16px", fontWeight: 900, color: "#FF4B4B" }}>0.08¢ (Deep Reasoning)</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <CheckCircle size={18} color="#32DC78" />
          <span>That part isn't manipulation... that part is genuine, efficient infrastructure plumbing.</span>
        </div>
      </AbsoluteFill>
    </ParallaxCameraScene>
  );
};
