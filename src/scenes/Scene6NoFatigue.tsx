import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { Cpu, Zap, Activity } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene6NoFatigue: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 298], [1, 1.08]);

  // Data stream pulse
  const streamOffset = (frame * 6) % 360;

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
      <CinematicBackground themeColor="rgba(14, 165, 233, 0.25)" secondaryColor="rgba(168, 85, 247, 0.2)" />

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
        <AnimatedBadge label="ZERO FATIGUE COMPUTE" delay={10} color="#38bdf8" />

        {/* Dynamic flowing neural stream */}
        <div style={{ position: "relative", width: "300px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0 50px 0" }}>
          {/* Rotating ambient ring */}
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              border: "2px dashed rgba(56, 189, 248, 0.5)",
              transform: `rotate(${streamOffset}deg)`,
            }}
          />

          {/* Central AI Processor */}
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "40px",
              background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)",
              border: "3px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 55px rgba(56, 189, 248, 0.6)",
            }}
          >
            <Cpu size={85} color="#38bdf8" />
            <Zap size={40} color="#7dd3fc" style={{ position: "absolute", top: 35, right: 35 }} />
            <Activity size={40} color="#38bdf8" style={{ position: "absolute", bottom: 35, left: 35 }} />
          </div>
        </div>

        <AnimatedHeadline
          text="MILLIONS OF VARIABLES ZERO FATIGUE"
          delay={15}
          highlightWords={["MILLIONS", "VARIABLES", "ZERO"]}
          highlightColor="#38bdf8"
        />
      </div>
    </div>
  );
};
