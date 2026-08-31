import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { ParallaxCameraScene } from "../components/ParallaxCameraScene";
import { KineticTitle } from "../components/AnimatedTypography";
import { Eye, Sparkles, Compass } from "lucide-react";

export const Scene7IllusionOfChoice: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isFinalPunchline = frame >= 450;

  const cardSpring = spring({ frame: frame - 15, fps, config: { damping: 14 } });
  const finalSpring = spring({ frame: frame - 465, fps, config: { damping: 12 } });

  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.16} panX={0} panY={-12}>
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
            background: "rgba(255, 215, 0, 0.15)",
            border: "1px solid rgba(255, 215, 0, 0.4)",
            padding: "10px 28px",
            borderRadius: "100px",
          }}
        >
          <Compass size={20} color="#FFD700" />
          <span style={{ fontSize: "18px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 800, color: "#FFD700" }}>
            The Architecture of Choice
          </span>
        </div>

        {!isFinalPunchline ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
            <KineticTitle
              text="THAT'S NOT EFFICIENCY... THAT'S A MENU"
              fontSize={48}
              accentColor="#FFD700"
            />

            <div
              style={{
                width: "100%",
                maxWidth: "1050px",
                background: "linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(10, 10, 15, 0.95) 100%)",
                border: "2px solid rgba(255, 215, 0, 0.4)",
                borderRadius: "28px",
                padding: "48px",
                transform: `scale(${cardSpring})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                boxShadow: "0 30px 60px rgba(0,0,0,0.8), 0 0 50px rgba(255, 215, 0, 0.15)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#FFD700" }}>
                "MENUS ARE NEVER NEUTRAL."
              </div>
              <div style={{ fontSize: "20px", color: "rgba(255,255,255,0.85)", lineHeight: "1.8", maxWidth: "800px" }}>
                If this were only about compute engineering, you would have invisible automatic routing.
                Instead, you are shown three shiny tiers engineered to steer you toward the middle.
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px", width: "100%" }}>
            <KineticTitle
              text="WHO ACTUALLY DECIDED YOUR 'SMART' CHOICE?"
              fontSize={50}
              accentColor="#00F0FF"
            />

            <div
              style={{
                width: "100%",
                maxWidth: "1050px",
                background: "linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(15, 10, 25, 0.95) 100%)",
                border: "2px solid #00F0FF",
                borderRadius: "28px",
                padding: "48px",
                transform: `scale(${finalSpring})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                boxShadow: "0 30px 70px rgba(0, 240, 255, 0.25)",
                textAlign: "center",
              }}
            >
              <div style={{ background: "rgba(0, 240, 255, 0.2)", padding: "20px", borderRadius: "50%" }}>
                <Eye size={48} color="#00F0FF" />
              </div>
              <div style={{ fontSize: "40px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.5px" }}>
                BECAUSE IT PROBABLY WASN'T YOU.
              </div>
              <div style={{ fontSize: "18px", color: "rgba(255,255,255,0.7)" }}>
                Choice architecture is designed before you ever open the app.
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
          <Sparkles size={18} color="#00F0FF" />
          <span>The psychology of AI model pricing • Automatic B-Roll Studio</span>
        </div>
      </AbsoluteFill>
    </ParallaxCameraScene>
  );
};
