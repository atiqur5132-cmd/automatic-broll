import React from "react";
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig } from "remotion";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { OpenAILogo, AnthropicLogo, GoogleLogo } from "../components/RealLogos";
import { KineticTitle } from "../components/AnimatedTypography";
import { Sparkles, Layers, Cpu, Zap, DollarSign } from "lucide-react";

export const Scene1TrioIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const card1Spring = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const card2Spring = spring({ frame: frame - 30, fps, config: { damping: 14 } });
  const card3Spring = spring({ frame: frame - 45, fps, config: { damping: 14 } });

  const openAISpring = spring({ frame: frame - 230, fps, config: { damping: 12 } });
  const anthropicSpring = spring({ frame: frame - 270, fps, config: { damping: 12 } });
  const googleSpring = spring({ frame: frame - 310, fps, config: { damping: 12 } });

  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12} panX={-15} panY={-10}>
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
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "10px 24px",
            borderRadius: "100px",
          }}
        >
          <Sparkles size={20} color="#00F0FF" />
          <span style={{ fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, color: "#00F0FF" }}>
            The AI Architecture Illusion
          </span>
        </div>

        {frame < 240 ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", width: "100%" }}>
            <KineticTitle
              text="EVERY AI COMPANY SUDDENLY HAS THREE VERSIONS"
              fontSize={46}
              accentColor="#00F0FF"
            />

            <div style={{ display: "flex", justifyContent: "center", gap: "32px", width: "100%", maxWidth: "1200px" }}>
              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(180deg, rgba(255, 75, 75, 0.12) 0%, rgba(10, 10, 15, 0.9) 100%)",
                  border: "1px solid rgba(255, 75, 75, 0.3)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "18px",
                  transform: `scale(${card1Spring}) translateY(${(1 - card1Spring) * 40}px)`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ background: "rgba(255, 75, 75, 0.2)", padding: "16px", borderRadius: "18px" }}>
                  <Cpu size={42} color="#FF4B4B" />
                </div>
                <div style={{ fontSize: "28px", fontWeight: 800 }}>THE BIG ONE</div>
                <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
                  Heavy Compute • Expensive • Ultra Flagship
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(180deg, rgba(0, 240, 255, 0.15) 0%, rgba(10, 10, 15, 0.9) 100%)",
                  border: "2px solid rgba(0, 240, 255, 0.5)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "18px",
                  transform: `scale(${card2Spring * 1.05}) translateY(${(1 - card2Spring) * 40}px)`,
                  boxShadow: "0 25px 50px rgba(0, 240, 255, 0.2)",
                }}
              >
                <div style={{ background: "rgba(0, 240, 255, 0.2)", padding: "16px", borderRadius: "18px" }}>
                  <Zap size={42} color="#00F0FF" />
                </div>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#00F0FF" }}>THE MEDIUM ONE</div>
                <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", textAlign: "center" }}>
                  Balanced • The Sweet Spot • Everyday Driver
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(180deg, rgba(50, 220, 120, 0.12) 0%, rgba(10, 10, 15, 0.9) 100%)",
                  border: "1px solid rgba(50, 220, 120, 0.3)",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "18px",
                  transform: `scale(${card3Spring}) translateY(${(1 - card3Spring) * 40}px)`,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ background: "rgba(50, 220, 120, 0.2)", padding: "16px", borderRadius: "18px" }}>
                  <DollarSign size={42} color="#32DC78" />
                </div>
                <div style={{ fontSize: "28px", fontWeight: 800 }}>THE CHEAP ONE</div>
                <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
                  Fast • Low Memory • High Throughput
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
            <KineticTitle
              text="OPENAI DOES IT. ANTHROPIC DOES IT. GOOGLE DOES IT."
              fontSize={44}
              accentColor="#FFD700"
            />

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "48px", width: "100%", maxWidth: "1100px" }}>
              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(145deg, rgba(16, 163, 127, 0.15) 0%, rgba(15, 20, 25, 0.9) 100%)",
                  border: "1px solid rgba(16, 163, 127, 0.4)",
                  borderRadius: "28px",
                  padding: "44px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  transform: `scale(${openAISpring}) translateY(${(1 - openAISpring) * 40}px)`,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(16, 163, 127, 0.2)",
                }}
              >
                <div style={{ background: "rgba(16, 163, 127, 0.15)", padding: "20px", borderRadius: "50%" }}>
                  <OpenAILogo size={64} color="#10A37F" />
                </div>
                <div style={{ fontSize: "26px", fontWeight: 800, letterSpacing: "1px" }}>OpenAI</div>
                <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", padding: "6px 16px", borderRadius: "20px" }}>
                  o1 • 4o • 4o-mini
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(145deg, rgba(217, 119, 87, 0.15) 0%, rgba(25, 20, 20, 0.9) 100%)",
                  border: "1px solid rgba(217, 119, 87, 0.4)",
                  borderRadius: "28px",
                  padding: "44px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  transform: `scale(${anthropicSpring}) translateY(${(1 - anthropicSpring) * 40}px)`,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(217, 119, 87, 0.2)",
                }}
              >
                <div style={{ background: "rgba(217, 119, 87, 0.15)", padding: "20px", borderRadius: "50%" }}>
                  <AnthropicLogo size={64} color="#D97757" />
                </div>
                <div style={{ fontSize: "26px", fontWeight: 800, letterSpacing: "1px" }}>Anthropic</div>
                <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", padding: "6px 16px", borderRadius: "20px" }}>
                  Opus • Sonnet • Haiku
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(145deg, rgba(66, 133, 244, 0.15) 0%, rgba(20, 22, 28, 0.9) 100%)",
                  border: "1px solid rgba(66, 133, 244, 0.4)",
                  borderRadius: "28px",
                  padding: "44px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  transform: `scale(${googleSpring}) translateY(${(1 - googleSpring) * 40}px)`,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(66, 133, 244, 0.2)",
                }}
              >
                <div style={{ background: "rgba(255, 255, 255, 0.08)", padding: "20px", borderRadius: "50%" }}>
                  <GoogleLogo size={64} />
                </div>
                <div style={{ fontSize: "26px", fontWeight: 800, letterSpacing: "1px" }}>Google DeepMind</div>
                <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", padding: "6px 16px", borderRadius: "20px" }}>
                  Ultra • Pro • Flash
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "1px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Layers size={18} />
          <span>Different use cases... or a calculated psychological ladder?</span>
        </div>
      </AbsoluteFill>
    </ParallaxCameraScene>
  );
};
