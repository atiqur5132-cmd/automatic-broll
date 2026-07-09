import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Gift, Repeat, Search } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene8HabitLoop: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 480], [1, 1.1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY = Math.sin(frame / 16) * 10;

  const habitReveal = interpolate(frame, [120, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#0f1f18"
        secondaryColor="#064e3b"
        accentColor="#10b981"
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
            subtitle="THE BUDGET TIER STRATEGY"
            keyword="FREE TRIAL DISGUISED AS A PRODUCT"
            accentColor="#10b981"
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
              backgroundColor: "rgba(6, 78, 59, 0.75)",
              border: "2px solid #10b981",
              boxShadow: "0 20px 60px rgba(16, 185, 129, 0.3)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              translate: `0px ${floatY}px`,
            }}
          >
            <Gift size={72} color="#34d399" style={{ marginBottom: 20 }} />
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 30,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              FREE / CHEAP TIER
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#a7f3d0",
                marginTop: 12,
              }}
            >
              Hook You On The Interface
            </div>
          </div>

          <div
            style={{
              width: 480,
              height: 360,
              borderRadius: 30,
              backgroundColor: "rgba(4, 120, 87, 0.75)",
              border: "2px solid #34d399",
              boxShadow: "0 20px 60px rgba(52, 211, 153, 0.35)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: habitReveal,
              translate: `0px ${-floatY}px`,
            }}
          >
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <Repeat size={64} color="#34d399" />
              <Search size={64} color="#6ee7b7" />
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 30,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              REPLACE GOOGLING
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#d1fae5",
                marginTop: 12,
              }}
            >
              Upgrading Feels Like Natural Next Step
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
