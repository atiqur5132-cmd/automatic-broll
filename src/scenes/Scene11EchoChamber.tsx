import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { Repeat, AlertTriangle, MessageSquareWarning } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene11EchoChamber: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 544], [1, 1.07]);

  const loopSpin = (frame * 1.5) % 360;

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
      <CinematicBackground themeColor="rgba(239, 68, 68, 0.25)" secondaryColor="rgba(245, 158, 11, 0.2)" />

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
        <AnimatedBadge label="MASSIVE THERAPY RED FLAG" delay={10} color="#f87171" />

        <div style={{ position: "relative", width: "280px", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", margin: "30px 0 50px 0" }}>
          {/* Rotating loop mirror */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              border: "3px dashed rgba(248, 113, 113, 0.6)",
              transform: `rotate(${loopSpin}deg)`,
            }}
          />

          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, transparent 70%)",
              border: "3px solid #f87171",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 55px rgba(239, 68, 68, 0.5)",
              position: "relative",
            }}
          >
            <Repeat size={85} color="#f87171" />
            <AlertTriangle size={45} color="#fbbf24" style={{ position: "absolute", top: 20, right: 25 }} />
            <MessageSquareWarning size={40} color="#fca5a5" style={{ position: "absolute", bottom: 20, left: 25 }} />
          </div>
        </div>

        <AnimatedHeadline
          text="DANGEROUS ECHO CHAMBER LOOP"
          delay={20}
          highlightWords={["ECHO", "CHAMBER"]}
          highlightColor="#f87171"
        />
      </div>
    </div>
  );
};
