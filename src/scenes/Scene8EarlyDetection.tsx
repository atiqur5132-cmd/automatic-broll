import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { Droplet, Search, History, Sparkles } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene8EarlyDetection: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 471], [1, 1.07]);

  // Transition from blood analysis to timeline 10-15 years earlier around frame 180
  const timelineReveal = interpolate(frame, [170, 230], [0, 1], {
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
      <CinematicBackground themeColor="rgba(239, 68, 68, 0.25)" secondaryColor="rgba(14, 165, 233, 0.2)" />

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
        <AnimatedBadge label="BREAKTHROUGH EARLY DETECTION" delay={10} color="#f87171" />

        <div style={{ position: "relative", width: "350px", height: "280px", display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0 50px 0" }}>
          {/* Phase 1: Blood drop + search */}
          <div
            style={{
              position: "absolute",
              opacity: 1 - timelineReveal,
              transform: `scale(${1 - timelineReveal * 0.3})`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)",
                border: "2px solid #f87171",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 50px rgba(239, 68, 68, 0.5)",
              }}
            >
              <Droplet size={80} color="#f87171" />
              <Search size={45} color="#38bdf8" style={{ position: "absolute", bottom: 25, right: 30 }} />
            </div>
          </div>

          {/* Phase 2: Timeline 10-15 Years Earlier */}
          <div
            style={{
              position: "absolute",
              opacity: timelineReveal,
              transform: `scale(${0.7 + timelineReveal * 0.3})`,
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
              <History size={95} color="#38bdf8" />
              <Sparkles size={45} color="#7dd3fc" style={{ position: "absolute", top: 25, right: 25 }} />
            </div>
          </div>
        </div>

        {timelineReveal < 0.5 ? (
          <AnimatedHeadline
            text="BLOOD SAMPLE AI ANALYSIS"
            delay={15}
            highlightWords={["BLOOD", "AI"]}
            highlightColor="#f87171"
          />
        ) : (
          <AnimatedHeadline
            text="PREDICT DEMENTIA 10-15 YEARS EARLIER"
            delay={170}
            highlightWords={["10-15", "YEARS", "EARLIER"]}
            highlightColor="#38bdf8"
          />
        )}
      </div>
    </div>
  );
};
