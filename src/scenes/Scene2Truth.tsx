import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { ShieldCheck, Eye } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene2Truth: React.FC = () => {
  const frame = useCurrentFrame();

  const panX = interpolate(frame, [0, 220], [-25, 25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const prOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const prScale = interpolate(frame, [10, 35], [0.85, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const truthOpacity = interpolate(frame, [95, 125], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const truthTranslateY = interpolate(frame, [95, 130], [60, 0], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY = Math.sin(frame / 18) * 10;

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#111827"
        secondaryColor="#1e293b"
        accentColor="#f59e0b"
      />

      <AbsoluteFill
        style={{
          translate: `${panX}px 0px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 120px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginTop: 20 }}>
          <AnimatedTypography
            subtitle="OFFICIAL MARKETING EXCUSE"
            keyword="SOUNDS NICE BUT IS THAT WHY?"
            accentColor="#f59e0b"
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
              borderRadius: 28,
              backgroundColor: "rgba(30, 41, 59, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: prOpacity,
              scale: prScale,
              translate: `0px ${floatY}px`,
            }}
          >
            <ShieldCheck size={72} color="#38bdf8" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 28,
                fontWeight: 700,
                color: "#e2e8f0",
                textAlign: "center",
              }}
            >
              "Optimized for Different Use Cases"
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#94a3b8",
                marginTop: 12,
              }}
            >
              Polished Corporate Narrative
            </div>
          </div>

          <div
            style={{
              width: 480,
              height: 360,
              borderRadius: 28,
              backgroundColor: "rgba(127, 29, 29, 0.4)",
              border: "2px solid #ef4444",
              boxShadow: "0 0 60px rgba(239, 68, 68, 0.3)",
              padding: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: truthOpacity,
              translate: `0px ${truthTranslateY - floatY}px`,
            }}
          >
            <Eye size={72} color="#ef4444" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 28,
                fontWeight: 800,
                color: "#fee2e2",
                textAlign: "center",
              }}
            >
              The Unspoken Truth
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#fca5a5",
                marginTop: 12,
              }}
            >
              Nobody Says This Out Loud
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
