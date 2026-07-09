import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { BrainCircuit, GitMerge, Cpu } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene4StructuredLogic: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 319], [1, 1.07]);

  // Morph transition around frame 120
  const morphProgress = interpolate(frame, [110, 180], [0, 1], {
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
      <CinematicBackground themeColor="rgba(168, 85, 247, 0.22)" secondaryColor="rgba(14, 165, 233, 0.2)" />

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
        <AnimatedBadge label="CLINICAL INTUITION DECODED" delay={10} color="#38bdf8" />

        <div style={{ position: "relative", width: "260px", height: "260px", display: "flex", alignItems: "center", justifyContent: "center", margin: "30px 0 50px 0" }}>
          {/* Phase 1: Brain */}
          <div
            style={{
              position: "absolute",
              opacity: 1 - morphProgress,
              transform: `scale(${1 - morphProgress * 0.3}) rotate(${morphProgress * 45}deg)`,
              width: "210px",
              height: "210px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
              border: "2px solid #a855f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 50px rgba(168, 85, 247, 0.5)",
            }}
          >
            <BrainCircuit size={110} color="#c084fc" />
          </div>

          {/* Phase 2: Algorithmic Flowchart / Circuit */}
          <div
            style={{
              position: "absolute",
              opacity: morphProgress,
              transform: `scale(${0.7 + morphProgress * 0.3})`,
              width: "220px",
              height: "220px",
              borderRadius: "40px",
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)",
              border: "2px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 50px rgba(56, 189, 248, 0.5)",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <Cpu size={85} color="#38bdf8" />
              <GitMerge size={85} color="#7dd3fc" />
            </div>
          </div>
        </div>

        <AnimatedHeadline
          text="STRUCTURED ALGORITHMIC LOGIC"
          delay={20}
          highlightWords={["ALGORITHMIC", "LOGIC"]}
          highlightColor="#38bdf8"
        />
      </div>
    </div>
  );
};
