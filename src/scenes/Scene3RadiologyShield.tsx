import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { ShieldAlert, Scan, ShieldOff } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene3RadiologyShield: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 309], [1, 1.06]);

  // Shield dissolve around frame 140
  const shieldBreak = interpolate(frame, [140, 200], [0, 1], {
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
      <CinematicBackground themeColor="rgba(239, 68, 68, 0.2)" secondaryColor="rgba(14, 165, 233, 0.18)" />

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
        <AnimatedBadge label="MEDICAL MYTH" delay={10} color="#f87171" />

        <div style={{ position: "relative", width: "240px", height: "240px", display: "flex", alignItems: "center", justifyContent: "center", margin: "30px 0 50px 0" }}>
          {/* X-ray / Radiologist core */}
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              background: "rgba(14, 165, 233, 0.2)",
              border: "2px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)",
            }}
          >
            <Scan size={85} color="#38bdf8" />
          </div>

          {/* Intact Shield overlay before dissolve */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 1 - shieldBreak,
              transform: `scale(${1 + shieldBreak * 0.2})`,
            }}
          >
            <ShieldAlert size={220} color="#f87171" />
          </div>

          {/* Broken Shield after dissolve */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: shieldBreak,
              transform: `scale(${0.8 + shieldBreak * 0.2})`,
            }}
          >
            <ShieldOff size={220} color="#fb7185" />
          </div>
        </div>

        {shieldBreak < 0.5 ? (
          <AnimatedHeadline
            text="TOO HUMAN TO AUTOMATE?"
            delay={15}
            highlightWords={["TOO", "HUMAN"]}
            highlightColor="#f87171"
          />
        ) : (
          <AnimatedHeadline
            text="THE UNCOMFORTABLE TRUTH"
            delay={140}
            highlightWords={["UNCOMFORTABLE", "TRUTH"]}
            highlightColor="#fb7185"
          />
        )}
      </div>
    </div>
  );
};
