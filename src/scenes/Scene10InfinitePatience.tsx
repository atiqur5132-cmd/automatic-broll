import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { UserX, Infinity as InfinityIcon, Clock, Heart } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene10InfinitePatience: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 502], [1, 1.07]);

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
      <CinematicBackground themeColor="rgba(14, 165, 233, 0.22)" secondaryColor="rgba(236, 72, 153, 0.18)" />

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
        <AnimatedBadge label="STUDY RESULTS: EMPATHY COMPARISON" delay={10} color="#38bdf8" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "100px", margin: "30px 0 50px 0" }}>
          {/* Left: Burned out physician (5 mins) */}
          <div
            style={{
              opacity: leftReveal,
              transform: `translateY(${interpolate(leftReveal, [0, 1], [40, 0])}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "18px",
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
                boxShadow: "0 0 40px rgba(248, 113, 113, 0.35)",
              }}
            >
              <UserX size={80} color="#f87171" />
              <Clock size={40} color="#fca5a5" style={{ position: "absolute", bottom: 20, right: 25 }} />
            </div>
            <span style={{ color: "#f87171", fontSize: 24, fontWeight: 800 }}>BURNED OUT (5 MINS)</span>
          </div>

          {/* Right: AI Unlimited Time & Patience */}
          <div
            style={{
              opacity: rightReveal,
              transform: `translateY(${interpolate(rightReveal, [0, 1], [40, 0])}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "18px",
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
              <InfinityIcon size={85} color="#34d399" />
              <Heart size={40} color="#6ee7b7" style={{ position: "absolute", top: 20, right: 25 }} />
            </div>
            <span style={{ color: "#34d399", fontSize: 24, fontWeight: 800 }}>UNLIMITED TIME</span>
          </div>
        </div>

        <AnimatedHeadline
          text="AI PERCEIVED WITH INFINITE PATIENCE"
          delay={25}
          highlightWords={["INFINITE", "PATIENCE"]}
          highlightColor="#34d399"
        />
      </div>
    </div>
  );
};
