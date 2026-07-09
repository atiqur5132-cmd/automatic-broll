import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { User, Monitor, HeartPulse } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene12IsolationRisk: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 202], [1, 1.06]);

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
      <CinematicBackground themeColor="rgba(59, 130, 246, 0.2)" secondaryColor="rgba(14, 165, 233, 0.15)" />

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
        <AnimatedBadge label="SCREEN ISOLATION RISK" delay={5} color="#60a5fa" />

        <div style={{ position: "relative", width: "260px", height: "240px", display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0 45px 0" }}>
          {/* Screen cold glow background */}
          <div
            style={{
              position: "absolute",
              width: "220px",
              height: "220px",
              borderRadius: "40px",
              background: "radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, transparent 70%)",
              border: "2px solid #60a5fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 50px rgba(96, 165, 250, 0.45)",
            }}
          >
            <Monitor size={140} color="#60a5fa" style={{ opacity: 0.3 }} />
          </div>

          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              background: "rgba(15, 23, 42, 0.8)",
              border: "2px solid #93c5fd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 35px rgba(147, 197, 253, 0.5)",
              position: "relative",
            }}
          >
            <User size={80} color="#93c5fd" />
            <HeartPulse size={36} color="#f87171" style={{ position: "absolute", bottom: 15, right: 15 }} />
          </div>
        </div>

        <AnimatedHeadline
          text="WE NEED ACTUAL HUMAN CONNECTION"
          delay={10}
          highlightWords={["HUMAN", "CONNECTION"]}
          highlightColor="#60a5fa"
        />
      </div>
    </div>
  );
};
