import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Server, Flame, Zap } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene3Compute: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 570], [1, 1.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY = Math.sin(frame / 15) * 12;

  const leftOpacity = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rightOpacity = interpolate(frame, [150, 185], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#1f1013"
        secondaryColor="#3b0711"
        accentColor="#f43f5e"
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
            subtitle="STUPID AMOUNT OF MONEY"
            keyword="BURNING ELECTRICITY LIKE A CITY"
            accentColor="#f43f5e"
            delayFrames={10}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 90,
            flex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              width: 520,
              height: 380,
              borderRadius: 32,
              backgroundColor: "rgba(24, 10, 14, 0.8)",
              border: "2px solid rgba(244, 63, 94, 0.4)",
              boxShadow: "0 20px 60px rgba(244, 63, 94, 0.25)",
              padding: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: leftOpacity,
              translate: `0px ${floatY}px`,
            }}
          >
            <Server size={80} color="#f43f5e" style={{ marginBottom: 24 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffe4e6",
              }}
            >
              DATA CENTERS OF GPUs
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#fda4af",
                marginTop: 12,
              }}
            >
              Not Expensive Laptop Money
            </div>
          </div>

          <div
            style={{
              width: 520,
              height: 380,
              borderRadius: 32,
              backgroundColor: "rgba(31, 16, 19, 0.85)",
              border: "2px solid #fb7185",
              boxShadow: "0 20px 60px rgba(251, 113, 133, 0.35)",
              padding: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: rightOpacity,
              translate: `0px ${-floatY}px`,
            }}
          >
            <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
              <Flame size={72} color="#fb7185" />
              <Zap size={72} color="#facc15" />
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              MASSIVE ENERGY BURN
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#fecdd3",
                marginTop: 12,
              }}
            >
              Every Time Someone Hits Enter
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
