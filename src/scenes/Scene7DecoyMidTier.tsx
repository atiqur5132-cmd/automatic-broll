import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Target, Sparkles, CheckSquare, Layers } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene7DecoyMidTier: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 750], [1, 1.1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const spotlightOpacity = interpolate(frame, [150, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY = Math.sin(frame / 18) * 12;

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#0a0f1d"
        secondaryColor="#1e1b4b"
        accentColor="#818cf8"
      />

      <AbsoluteFill
        style={{
          scale,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 100px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginTop: 20 }}>
          <AnimatedTypography
            subtitle="THE REAL PURPOSE OF THE FLAGSHIP"
            keyword="MAKE MID TIER THE SMART CHOICE"
            accentColor="#818cf8"
            delayFrames={10}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 60,
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              width: 320,
              height: 360,
              borderRadius: 24,
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              border: "1px dashed rgba(255, 255, 255, 0.2)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.5,
              translate: `0px ${floatY}px`,
            }}
          >
            <Layers size={48} color="#94a3b8" style={{ marginBottom: 16 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 22,
                fontWeight: 700,
                color: "#94a3b8",
              }}
            >
              FLAGSHIP
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 14,
                color: "#64748b",
                marginTop: 8,
              }}
            >
              Slow & Overkill Anchor
            </div>
          </div>

          <div
            style={{
              width: 440,
              height: 440,
              borderRadius: 32,
              backgroundColor: "rgba(30, 27, 75, 0.9)",
              border: "3px solid #818cf8",
              boxShadow: "0 25px 70px rgba(129, 140, 248, 0.4)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              translate: `0px ${-floatY}px`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                backgroundColor: "rgba(129, 140, 248, 0.2)",
                padding: "8px 20px",
                borderRadius: 999,
                marginBottom: 24,
              }}
            >
              <Target size={24} color="#818cf8" />
              <span
                style={{
                  fontFamily: bodyFontFamily,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#e0e7ff",
                }}
              >
                TARGET CONVERSION
              </span>
            </div>
            <Sparkles size={72} color="#818cf8" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 36,
                fontWeight: 900,
                color: "#ffffff",
              }}
            >
              MID-TIER BALANCED
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                fontWeight: 600,
                color: "#c7d2fe",
                marginTop: 12,
                textAlign: "center",
              }}
            >
              "The Sensible & Smart Option"
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 16,
                color: "#a5b4fc",
                marginTop: 20,
                opacity: spotlightOpacity,
              }}
            >
              Picked Exactly What They Wanted
            </div>
          </div>

          <div
            style={{
              width: 320,
              height: 360,
              borderRadius: 24,
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              border: "1px dashed rgba(255, 255, 255, 0.2)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.5,
              translate: `0px ${floatY}px`,
            }}
          >
            <CheckSquare size={48} color="#94a3b8" style={{ marginBottom: 16 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 22,
                fontWeight: 700,
                color: "#94a3b8",
              }}
            >
              BUDGET
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 14,
                color: "#64748b",
                marginTop: 8,
              }}
            >
              Onboarding Hook
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
