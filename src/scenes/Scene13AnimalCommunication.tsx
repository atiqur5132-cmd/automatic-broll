import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { Dog, AudioLines, Smartphone, Sparkles } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene13AnimalCommunication: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 1070], [1, 1.08]);

  // Transition from sound wave pulses to readable smartphone translation around frame 300
  const translateReveal = interpolate(frame, [280, 350], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Sound pulse animation
  const pulseScale = 1 + Math.sin(frame * 0.15) * 0.08;

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
      <CinematicBackground themeColor="rgba(16, 185, 129, 0.22)" secondaryColor="rgba(14, 165, 233, 0.18)" />

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
        <AnimatedBadge label="ACOUSTIC & COMPUTER VISION AI" delay={15} color="#34d399" />

        <div style={{ position: "relative", width: "380px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", margin: "30px 0 50px 0" }}>
          {/* Phase 1: Dog + Acoustic Sound Wave */}
          <div
            style={{
              position: "absolute",
              opacity: 1 - translateReveal,
              transform: `scale(${(1 - translateReveal * 0.3) * pulseScale})`,
              display: "flex",
              alignItems: "center",
              gap: "35px",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.2)",
                border: "2px solid #34d399",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 45px rgba(52, 211, 153, 0.4)",
              }}
            >
              <Dog size={90} color="#34d399" />
            </div>
            <AudioLines size={85} color="#6ee7b7" />
          </div>

          {/* Phase 2: Smartphone Translation */}
          <div
            style={{
              position: "absolute",
              opacity: translateReveal,
              transform: `scale(${0.7 + translateReveal * 0.3})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "40px",
                background: "radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, transparent 70%)",
                border: "3px solid #38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(56, 189, 248, 0.6)",
              }}
            >
              <Smartphone size={95} color="#38bdf8" />
              <Sparkles size={45} color="#7dd3fc" style={{ position: "absolute", top: 25, right: 25 }} />
            </div>
          </div>
        </div>

        {translateReveal < 0.5 ? (
          <AnimatedHeadline
            text="DECODE ANIMAL COMMUNICATION"
            delay={20}
            highlightWords={["DECODE", "ANIMAL"]}
            highlightColor="#34d399"
          />
        ) : (
          <AnimatedHeadline
            text="INSTANT PET EMOTION TRANSLATION"
            delay={290}
            highlightWords={["INSTANT", "TRANSLATION"]}
            highlightColor="#38bdf8"
          />
        )}
      </div>
    </div>
  );
};
