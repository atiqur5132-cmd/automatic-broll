import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { Files, Clock } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene7Admin10Seconds: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 487], [1, 1.07]);

  // Transition from slow stack of papers to lightning 10s clock around frame 200
  const speedTransition = interpolate(frame, [180, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Fast clock rotation
  const clockSpin = interpolate(frame, [180, 240], [0, 720], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
      <CinematicBackground themeColor="rgba(245, 158, 11, 0.22)" secondaryColor="rgba(16, 185, 129, 0.2)" />

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
        <AnimatedBadge label="HEALTHCARE ADMIN WORKFLOW" delay={10} color="#fbbf24" />

        <div style={{ position: "relative", width: "320px", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0 50px 0" }}>
          {/* Phase 1: Stack of Papers */}
          <div
            style={{
              position: "absolute",
              opacity: 1 - speedTransition,
              transform: `scale(${1 - speedTransition * 0.3})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "36px",
                background: "rgba(245, 158, 11, 0.15)",
                border: "2px solid #f59e0b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(245, 158, 11, 0.4)",
              }}
            >
              <Files size={85} color="#fbbf24" />
            </div>
          </div>

          {/* Phase 2: Instant 10 Seconds Clock */}
          <div
            style={{
              position: "absolute",
              opacity: speedTransition,
              transform: `scale(${0.7 + speedTransition * 0.3})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%)",
                border: "3px solid #10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(16, 185, 129, 0.6)",
                transform: `rotate(${clockSpin}deg)`,
              }}
            >
              <Clock size={95} color="#34d399" />
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                background: "#059669",
                color: "#fff",
                fontSize: 32,
                fontWeight: 900,
                padding: "8px 24px",
                borderRadius: "9999px",
                border: "2px solid #34d399",
                boxShadow: "0 0 25px rgba(52, 211, 153, 0.6)",
              }}
            >
              10s
            </div>
          </div>
        </div>

        {speedTransition < 0.5 ? (
          <AnimatedHeadline
            text="ADMINISTRATIVE NIGHTMARE HOURS"
            delay={20}
            highlightWords={["NIGHTMARE", "HOURS"]}
            highlightColor="#fbbf24"
          />
        ) : (
          <AnimatedHeadline
            text="DISCHARGE SUMMARIES IN 10 SECONDS"
            delay={180}
            highlightWords={["10", "SECONDS"]}
            highlightColor="#34d399"
          />
        )}
      </div>
    </div>
  );
};
