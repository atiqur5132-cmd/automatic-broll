import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { Plug, Lightbulb, Filter, Zap } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene15ForceMultiplier: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 657], [1, 1.07]);

  // Glow brightening over time
  const glowIntensity = interpolate(frame, [50, 250], [0.3, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
      <CinematicBackground themeColor="rgba(245, 158, 11, 0.28)" secondaryColor="rgba(14, 165, 233, 0.2)" />

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
        <AnimatedBadge label="THE ULTIMATE FORCE MULTIPLIER" delay={10} color="#fbbf24" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "70px", margin: "30px 0 50px 0" }}>
          {/* Plug + Electricity */}
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              background: "rgba(14, 165, 233, 0.15)",
              border: "2px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 35px rgba(56, 189, 248, 0.4)",
            }}
          >
            <Plug size={80} color="#38bdf8" />
          </div>

          {/* Glowing Lightbulb */}
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(245, 158, 11, ${0.3 + glowIntensity * 0.4}) 0%, transparent 70%)`,
              border: "3px solid #fbbf24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxShadow: `0 0 ${40 + glowIntensity * 60}px rgba(245, 158, 11, ${glowIntensity})`,
            }}
          >
            <Lightbulb size={95} color="#fde047" />
            <Zap size={40} color="#fbbf24" style={{ position: "absolute", top: 20, right: 25 }} />
          </div>

          {/* Triage Funnel */}
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.15)",
              border: "2px solid #34d399",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 35px rgba(52, 211, 153, 0.4)",
            }}
          >
            <Filter size={80} color="#34d399" />
          </div>
        </div>

        <AnimatedHeadline
          text="NEW ELECTRICITY OF MEDICINE"
          delay={25}
          highlightWords={["NEW", "ELECTRICITY"]}
          highlightColor="#fde047"
        />
      </div>
    </div>
  );
};
