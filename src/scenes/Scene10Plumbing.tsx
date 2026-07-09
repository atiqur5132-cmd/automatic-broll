import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Mail, Microscope } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene10Plumbing: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 1165], [1, 1.1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY1 = Math.sin(frame / 16) * 10;
  const floatY2 = Math.sin((frame + 20) / 16) * 10;

  const plumbingReveal = interpolate(frame, [300, 340], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#0a192f"
        secondaryColor="#1e293b"
        accentColor="#06b6d4"
      />

      <AbsoluteFill
        style={{
          scale,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 120px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginTop: 20 }}>
          <AnimatedTypography
            subtitle="WHERE THE LOGIC IS REAL"
            keyword="GENUINE TRIAGE & EFFICIENT PLUMBING"
            accentColor="#06b6d4"
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
              height: 380,
              borderRadius: 30,
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              border: "2px solid #06b6d4",
              boxShadow: "0 20px 60px rgba(6, 182, 212, 0.3)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              translate: `0px ${floatY1}px`,
            }}
          >
            <Mail size={72} color="#06b6d4" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              EMAIL SUMMARY
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#a5f3fc",
                marginTop: 12,
              }}
            >
              Routed To Fast & Cheap Model
            </div>
          </div>

          <div
            style={{
              width: 480,
              height: 380,
              borderRadius: 30,
              backgroundColor: "rgba(30, 41, 59, 0.85)",
              border: "2px solid #3b82f6",
              boxShadow: "0 20px 60px rgba(59, 130, 246, 0.35)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: plumbingReveal,
              translate: `0px ${floatY2}px`,
            }}
          >
            <Microscope size={72} color="#3b82f6" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              DEEP RESEARCH
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#bfdbfe",
                marginTop: 12,
              }}
            >
              Routed To Flagship High-Compute
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
