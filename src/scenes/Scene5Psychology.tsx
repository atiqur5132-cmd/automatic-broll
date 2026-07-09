import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Brain, Columns } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene5Psychology: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 495], [1, 1.1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY = Math.sin(frame / 18) * 10;

  const psychReveal = interpolate(frame, [150, 185], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#0f172a"
        secondaryColor="#1e1b4b"
        accentColor="#a855f7"
      />

      <AbsoluteFill
        style={{
          scale,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 120px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginTop: 20 }}>
          <AnimatedTypography
            subtitle="WHY THREE TIERS?"
            keyword="THE PSYCHOLOGY OF CHOICE"
            accentColor="#a855f7"
            delayFrames={10}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 80,
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              width: 480,
              height: 360,
              borderRadius: 30,
              backgroundColor: "rgba(30, 27, 75, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              translate: `0px ${floatY}px`,
            }}
          >
            <Columns size={72} color="#818cf8" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 28,
                fontWeight: 700,
                color: "#e0e7ff",
                textAlign: "center",
              }}
            >
              Compute Explains 2 Tiers
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#a5b4fc",
                marginTop: 12,
              }}
            >
              Rich Model vs Cheap Model
            </div>
          </div>

          <div
            style={{
              width: 480,
              height: 360,
              borderRadius: 30,
              backgroundColor: "rgba(88, 28, 135, 0.65)",
              border: "2px solid #a855f7",
              boxShadow: "0 20px 60px rgba(168, 85, 247, 0.35)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: psychReveal,
              translate: `0px ${-floatY}px`,
            }}
          >
            <Brain size={80} color="#c084fc" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 28,
                fontWeight: 800,
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              IT'S ABOUT YOU
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#e9d5ff",
                marginTop: 12,
              }}
            >
              How Your Brain Chooses
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
