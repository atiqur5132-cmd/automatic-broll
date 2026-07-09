import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Crown, AlertOctagon, TrendingDown } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene4FlagshipRisk: React.FC = () => {
  const frame = useCurrentFrame();

  const panY = interpolate(frame, [0, 405], [20, -20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY = Math.sin(frame / 16) * 10;

  const bankruptcyOpacity = interpolate(frame, [150, 185], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#1c111e"
        secondaryColor="#31102f"
        accentColor="#e879f9"
      />

      <AbsoluteFill
        style={{
          translate: `0px ${panY}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 120px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginTop: 20 }}>
          <AnimatedTypography
            subtitle="PURE ECONOMICS OF TIER 1"
            keyword="FLAGSHIP MODEL BANKRUPTCY RISK"
            accentColor="#e879f9"
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
              width: 480,
              height: 360,
              borderRadius: 30,
              backgroundColor: "rgba(35, 18, 38, 0.8)",
              border: "2px solid #e879f9",
              boxShadow: "0 20px 60px rgba(232, 121, 249, 0.3)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              translate: `0px ${floatY}px`,
            }}
          >
            <Crown size={80} color="#e879f9" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              FLAGSHIP POWER
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#f5d0fe",
                marginTop: 12,
              }}
            >
              Opus / SoTA / Premium
            </div>
          </div>

          <div
            style={{
              width: 480,
              height: 360,
              borderRadius: 30,
              backgroundColor: "rgba(69, 10, 10, 0.8)",
              border: "2px solid #ef4444",
              boxShadow: "0 20px 60px rgba(239, 68, 68, 0.4)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: bankruptcyOpacity,
              translate: `0px ${-floatY}px`,
            }}
          >
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <AlertOctagon size={72} color="#ef4444" />
              <TrendingDown size={72} color="#fca5a5" />
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              FREE = BANKRUPTCY
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#fca5a5",
                marginTop: 12,
              }}
            >
              Pure Economics Reality
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
