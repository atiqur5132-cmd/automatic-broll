import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { KineticTitle, RollingCounter } from "../components/AnimatedTypography";
import { NvidiaLogo } from "../components/RealLogos";
import { Flame, Server, Zap, AlertTriangle } from "lucide-react";

export const Scene2DatacenterCost: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const serverSpring = spring({ frame: frame - 10, fps, config: { damping: 14 } });
  const gpuCardSpring = spring({ frame: frame - 30, fps, config: { damping: 14 } });
  const counterSpring = spring({ frame: frame - 50, fps, config: { damping: 14 } });

  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.14} panX={10} panY={-12}>
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
            background: "rgba(255, 75, 75, 0.1)",
            border: "1px solid rgba(255, 75, 75, 0.3)",
            padding: "10px 24px",
            borderRadius: "100px",
          }}
        >
          <Flame size={20} color="#FF4B4B" />
          <span style={{ fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, color: "#FF4B4B" }}>
            The Hidden Cost of Compute
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
          <KineticTitle
            text="DATA CENTERS FULL OF GPUS BURNING ELECTRICITY"
            fontSize={44}
            accentColor="#76B900"
          />

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", width: "100%", maxWidth: "1200px" }}>
            <div
              style={{
                flex: 1.1,
                background: "linear-gradient(135deg, rgba(30, 35, 45, 0.8) 0%, rgba(15, 18, 22, 0.95) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "24px",
                padding: "36px",
                transform: `scale(${serverSpring})`,
                boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Server size={28} color="#00F0FF" />
                  <span style={{ fontSize: "22px", fontWeight: 800 }}>DATACENTER MATRIX</span>
                </div>
                <span style={{ color: "#FF4B4B", fontSize: "14px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                  <Zap size={16} color="#FF4B4B" /> 1.2 GIGAWATTS
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
                {[1, 2, 3, 4, 5, 6].map((node) => (
                  <div
                    key={node}
                    style={{
                      background: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(0, 240, 255, 0.2)",
                      borderRadius: "12px",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>NODE #{node}</span>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: node % 2 === 0 ? "#76B900" : "#00F0FF",
                          boxShadow: `0 0 8px ${node % 2 === 0 ? "#76B900" : "#00F0FF"}`,
                        }}
                      />
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>100% LOAD</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                flex: 0.9,
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(118, 185, 0, 0.15) 0%, rgba(15, 20, 15, 0.9) 100%)",
                  border: "1px solid rgba(118, 185, 0, 0.4)",
                  borderRadius: "24px",
                  padding: "30px",
                  transform: `scale(${gpuCardSpring})`,
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ background: "rgba(118, 185, 0, 0.15)", padding: "16px", borderRadius: "20px" }}>
                  <NvidiaLogo size={52} />
                </div>
                <div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#76B900" }}>H100 & B200 CLUSTER</div>
                  <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>
                    35,000+ GPUs Connected in Parallel
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, rgba(255, 75, 75, 0.15) 0%, rgba(25, 15, 15, 0.9) 100%)",
                  border: "1px solid rgba(255, 75, 75, 0.4)",
                  borderRadius: "24px",
                  padding: "30px",
                  transform: `scale(${counterSpring})`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ fontSize: "14px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>
                  TRAINING & INFERENCE BURN RATE
                </div>
                <div style={{ fontSize: "44px", fontWeight: 900, color: "#FF4B4B", marginTop: "8px" }}>
                  <RollingCounter to={128450000} prefix="$" durationInFrames={fps * 10} />
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "6px" }}>
                  Per Training Run + Millions Daily in Query Electricity
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <AlertTriangle size={18} color="#FFD700" />
          <span>Burning electricity like a small city... just to answer recipe substitutions.</span>
        </div>
      </AbsoluteFill>
    </ParallaxCameraScene>
  );
};
