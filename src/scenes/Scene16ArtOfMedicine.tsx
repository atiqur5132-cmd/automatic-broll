import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { HeartHandshake, Ear, AudioLines } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene16ArtOfMedicine: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 310], [1, 1.06]);

  const heartbeat = 1 + Math.sin(frame * 0.18) * 0.08;

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
      <CinematicBackground themeColor="rgba(236, 72, 153, 0.22)" secondaryColor="rgba(14, 165, 233, 0.18)" />

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
        <AnimatedBadge label="HUMAN VALUE & EMPATHY" delay={10} color="#f472b6" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "90px", margin: "35px 0 55px 0" }}>
          {/* Hands cupping heart */}
          <div
            style={{
              width: "190px",
              height: "190px",
              borderRadius: "50%",
              background: "rgba(236, 72, 153, 0.2)",
              border: "3px solid #f472b6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 50px rgba(244, 114, 182, 0.5)",
              transform: `scale(${heartbeat})`,
            }}
          >
            <HeartHandshake size={95} color="#f472b6" />
          </div>

          {/* Active Listening Ear & Sound Wave */}
          <div
            style={{
              width: "190px",
              height: "190px",
              borderRadius: "50%",
              background: "rgba(14, 165, 233, 0.2)",
              border: "3px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxShadow: "0 0 50px rgba(56, 189, 248, 0.5)",
            }}
          >
            <Ear size={85} color="#38bdf8" />
            <AudioLines size={45} color="#7dd3fc" style={{ position: "absolute", bottom: 25, right: 25 }} />
          </div>
        </div>

        <AnimatedHeadline
          text="THE TRUE ART OF MEDICINE"
          delay={20}
          highlightWords={["ART", "MEDICINE"]}
          highlightColor="#f472b6"
        />
      </div>
    </div>
  );
};
