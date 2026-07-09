import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Pointer, HelpCircle } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene11MenuIllusion: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 1090], [1.12, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY1 = Math.sin(frame / 18) * 10;
  const floatY2 = Math.sin((frame + 30) / 18) * 10;

  const mirrorOpacity = interpolate(frame, [300, 350], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#090d16"
        secondaryColor="#1a1024"
        accentColor="#f43f5e"
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
            subtitle="THE FINAL QUESTION"
            keyword="MENUS ARE NEVER NEUTRAL"
            accentColor="#f43f5e"
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
              backgroundColor: "rgba(30, 41, 59, 0.75)",
              border: "2px solid #f43f5e",
              boxShadow: "0 20px 60px rgba(244, 63, 94, 0.3)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              translate: `0px ${floatY1}px`,
            }}
          >
            <Pointer size={72} color="#f43f5e" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              CURATED MENU
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#fecdd3",
                marginTop: 12,
              }}
            >
              Engineered To Guide Your Choice
            </div>
          </div>

          <div
            style={{
              width: 480,
              height: 380,
              borderRadius: 30,
              backgroundColor: "rgba(24, 10, 20, 0.85)",
              border: "2px solid #ec4899",
              boxShadow: "0 20px 60px rgba(236, 72, 153, 0.4)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: mirrorOpacity,
              translate: `0px ${floatY2}px`,
            }}
          >
            <HelpCircle size={72} color="#ec4899" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              WHO DECIDED?
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#fbcfe8",
                marginTop: 12,
              }}
            >
              "Because It Probably Wasn't You."
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
