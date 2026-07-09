import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { Stethoscope, MessageSquare, Sparkles } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene1MotherJourney: React.FC = () => {
  const frame = useCurrentFrame();

  // Continuous subtle Ken Burns camera zoom
  const cameraScale = interpolate(frame, [0, 492], [1, 1.08]);

  // Doctor count up (starts around frame 60 to frame 280)
  const doctorCount = Math.min(
    17,
    Math.max(1, Math.floor(interpolate(frame, [60, 240], [1, 17], { extrapolateRight: "clamp", extrapolateLeft: "clamp" })))
  );

  // Transition to ChatGPT AI around frame 300
  const aiTransition = interpolate(frame, [300, 360], [0, 1], {
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
      <CinematicBackground themeColor="rgba(14, 165, 233, 0.22)" secondaryColor="rgba(56, 189, 248, 0.15)" />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <AnimatedBadge label="CASE STUDY: MEDICAL MYSTERY" delay={15} color="#38bdf8" />

        {/* Dynamic Center Visual: Doctors vs AI */}
        <div style={{ position: "relative", width: "420px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px" }}>
          {/* Phase 1: Multiplying Doctors */}
          <div
            style={{
              position: "absolute",
              opacity: 1 - aiTransition,
              transform: `scale(${1 - aiTransition * 0.3})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)",
                  border: "2px solid rgba(56, 189, 248, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 40px rgba(56, 189, 248, 0.3)",
                }}
              >
                <Stethoscope size={90} color="#38bdf8" />
              </div>
              {/* Floating count badge */}
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-15px",
                  background: "#0284c7",
                  color: "#fff",
                  fontSize: 32,
                  fontWeight: 900,
                  padding: "6px 18px",
                  borderRadius: "9999px",
                  border: "2px solid #38bdf8",
                  boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
                }}
              >
                {doctorCount}/17
              </div>
            </div>
          </div>

          {/* Phase 2: Glowing AI Diagnosis */}
          <div
            style={{
              position: "absolute",
              opacity: aiTransition,
              transform: `scale(${0.7 + aiTransition * 0.3})`,
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
                border: "2px solid #10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 60px rgba(16, 185, 129, 0.5)",
              }}
            >
              <MessageSquare size={85} color="#34d399" />
              <Sparkles size={40} color="#6ee7b7" style={{ position: "absolute", top: 30, right: 35 }} />
            </div>
          </div>
        </div>

        {/* Dynamic Headline */}
        {frame < 300 ? (
          <AnimatedHeadline
            text="17 DOCTORS NO ANSWER"
            delay={25}
            highlightWords={["17", "DOCTORS"]}
            highlightColor="#38bdf8"
          />
        ) : (
          <AnimatedHeadline
            text="AI SOLVED THE DIAGNOSIS"
            delay={300}
            highlightWords={["AI", "SOLVED"]}
            highlightColor="#34d399"
          />
        )}
      </div>
    </div>
  );
};
