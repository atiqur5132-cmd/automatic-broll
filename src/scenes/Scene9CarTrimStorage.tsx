import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Gauge, Smartphone, HardDrive, Sliders } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene9CarTrimStorage: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 1195], [1, 1.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY1 = Math.sin(frame / 18) * 10;
  const floatY2 = Math.sin((frame + 30) / 18) * 10;

  const storageOpacity = interpolate(frame, [600, 640], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#111827"
        secondaryColor="#1e1b4b"
        accentColor="#38bdf8"
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
            subtitle="THE UPSELL ARCHITECTURE"
            keyword="PSYCHOLOGICAL GAP NOT ACTUAL COST"
            accentColor="#38bdf8"
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
              border: "2px solid #38bdf8",
              boxShadow: "0 20px 60px rgba(56, 189, 248, 0.3)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              translate: `0px ${floatY1}px`,
            }}
          >
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <Gauge size={64} color="#38bdf8" />
              <Sliders size={64} color="#7dd3fc" />
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              CAR TRIM LADDER
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#bae6fd",
                marginTop: 12,
              }}
            >
              Top Trim Exists So Mid Doesn't Feel Cheap
            </div>
          </div>

          <div
            style={{
              width: 480,
              height: 380,
              borderRadius: 30,
              backgroundColor: "rgba(30, 27, 75, 0.8)",
              border: "2px solid #a855f7",
              boxShadow: "0 20px 60px rgba(168, 85, 247, 0.35)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: storageOpacity,
              translate: `0px ${floatY2}px`,
            }}
          >
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <Smartphone size={64} color="#a855f7" />
              <HardDrive size={64} color="#c084fc" />
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 32,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              64GB • 256GB • 1TB
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#e9d5ff",
                marginTop: 12,
              }}
            >
              Paying For Peace of Mind, Not Chips
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
