import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { Activity, HeartPulse, Grid, Sparkles } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene5CardiologySymmetry: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 312], [1, 1.06]);

  const leftReveal = interpolate(frame, [20, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const rightReveal = interpolate(frame, [110, 170], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        transform: `scale(${cameraScale})`,
      }}
    >
      <CinematicBackground themeColor="rgba(239, 68, 68, 0.2)" secondaryColor="rgba(16, 185, 129, 0.18)" />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <AnimatedBadge label="LEARNABLE MEDICAL PATTERNS" delay={10} color="#34d399" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "100px", margin: "40px 0 60px 0" }}>
          {/* Left: Cardiology EKG */}
          <div
            style={{
              opacity: leftReveal,
              transform: `translateY(${interpolate(leftReveal, [0, 1], [40, 0])}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "36px",
                background: "rgba(239, 68, 68, 0.15)",
                border: "2px solid #f87171",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 0 45px rgba(248, 113, 113, 0.4)",
              }}
            >
              <HeartPulse size={80} color="#f87171" />
              <Activity size={50} color="#fca5a5" style={{ position: "absolute", bottom: 25 }} />
            </div>
            <span style={{ color: "#f87171", fontSize: 24, fontWeight: 800 }}>CARDIOLOGY GUIDELINES</span>
          </div>

          {/* Right: Plastic Surgery Mathematical Symmetry */}
          <div
            style={{
              opacity: rightReveal,
              transform: `translateY(${interpolate(rightReveal, [0, 1], [40, 0])}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "36px",
                background: "rgba(16, 185, 129, 0.15)",
                border: "2px solid #34d399",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 0 45px rgba(52, 211, 153, 0.4)",
              }}
            >
              <Grid size={80} color="#34d399" />
              <Sparkles size={45} color="#6ee7b7" style={{ position: "absolute", top: 25, right: 25 }} />
            </div>
            <span style={{ color: "#34d399", fontSize: 24, fontWeight: 800 }}>MATHEMATICAL SYMMETRY</span>
          </div>
        </div>

        <AnimatedHeadline
          text="AI LEARNS PRECISE PATTERNS"
          delay={25}
          highlightWords={["PRECISE", "PATTERNS"]}
          highlightColor="#34d399"
        />
      </div>
    </div>
  );
};
