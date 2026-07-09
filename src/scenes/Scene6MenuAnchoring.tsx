import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Utensils, Anchor, Tag, CheckCircle2 } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedTypography } from "../components/AnimatedTypography";
import { bodyFontFamily } from "../fonts";

export const Scene6MenuAnchoring: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 1035], [1, 1.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const steakOpacity = interpolate(frame, [15, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pastaOpacity = interpolate(frame, [300, 335], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const floatY1 = Math.sin(frame / 20) * 10;
  const floatY2 = Math.sin((frame + 30) / 20) * 10;

  return (
    <AbsoluteFill>
      <CinematicBackground
        primaryColor="#17130f"
        secondaryColor="#291a0c"
        accentColor="#f59e0b"
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
            subtitle="RESTAURANT MENU PSYCHOLOGY"
            keyword="ANCHORING EFFECT"
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
              height: 380,
              borderRadius: 30,
              backgroundColor: "rgba(41, 26, 12, 0.8)",
              border: "2px solid #f59e0b",
              boxShadow: "0 20px 60px rgba(245, 158, 11, 0.3)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: steakOpacity,
              translate: `0px ${floatY1}px`,
            }}
          >
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <Utensils size={64} color="#f59e0b" />
              <Anchor size={64} color="#fbbf24" />
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 48,
                fontWeight: 900,
                color: "#fef3c7",
              }}
            >
              $80 STEAK
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 20,
                fontWeight: 600,
                color: "#fde68a",
                marginTop: 12,
              }}
            >
              TOP OF MENU ANCHOR
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 16,
                color: "#d97706",
                marginTop: 8,
              }}
            >
              Makes Everything Else Look Cheap
            </div>
          </div>

          <div
            style={{
              width: 480,
              height: 380,
              borderRadius: 30,
              backgroundColor: "rgba(16, 36, 26, 0.85)",
              border: "2px solid #10b981",
              boxShadow: "0 20px 60px rgba(16, 185, 129, 0.35)",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: pastaOpacity,
              translate: `0px ${floatY2}px`,
            }}
          >
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <Tag size={64} color="#10b981" />
              <CheckCircle2 size={64} color="#34d399" />
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 48,
                fontWeight: 900,
                color: "#ffffff",
              }}
            >
              $30 PASTA
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 20,
                fontWeight: 700,
                color: "#34d399",
                marginTop: 12,
              }}
            >
              SUDDENLY FEELS LIKE A STEAL
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 16,
                color: "#6ee7b7",
                marginTop: 8,
              }}
            >
              The Real Target Sales Item
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
