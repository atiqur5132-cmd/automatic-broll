import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { Network, PlusSquare, MessageCircleHeart, PawPrint } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene2NotSciFi: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow continuous zoom
  const cameraScale = interpolate(frame, [0, 754], [1, 1.07]);

  // Nodes reveal staggered
  const branch1 = interpolate(frame, [80, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
  const branch2 = interpolate(frame, [220, 270], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
  const branch3 = interpolate(frame, [360, 410], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });

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
      <CinematicBackground themeColor="rgba(139, 92, 246, 0.22)" secondaryColor="rgba(14, 165, 233, 0.18)" />

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
        <AnimatedBadge label="THE AI REVOLUTION" delay={10} color="#a855f7" />

        {/* Central Hub Branching Out */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "60px", margin: "40px 0 60px 0" }}>
          {/* Hospital Branch */}
          <div
            style={{
              opacity: branch1,
              transform: `translateY(${interpolate(branch1, [0, 1], [30, 0])}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "28px",
                background: "rgba(14, 165, 233, 0.15)",
                border: "2px solid #38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 35px rgba(56, 189, 248, 0.35)",
              }}
            >
              <PlusSquare size={65} color="#38bdf8" />
            </div>
            <span style={{ color: "#e2e8f0", fontSize: 22, fontWeight: 700, letterSpacing: "0.05em" }}>HOSPITALS</span>
          </div>

          {/* Central AI Network Node */}
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
              border: "3px solid #a855f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 50px rgba(168, 85, 247, 0.5)",
            }}
          >
            <Network size={80} color="#c084fc" />
          </div>

          {/* Therapy Branch */}
          <div
            style={{
              opacity: branch2,
              transform: `translateY(${interpolate(branch2, [0, 1], [30, 0])}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "28px",
                background: "rgba(236, 72, 153, 0.15)",
                border: "2px solid #f472b6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 35px rgba(244, 114, 182, 0.35)",
              }}
            >
              <MessageCircleHeart size={65} color="#f472b6" />
            </div>
            <span style={{ color: "#e2e8f0", fontSize: 22, fontWeight: 700, letterSpacing: "0.05em" }}>THERAPY</span>
          </div>

          {/* Pets Branch */}
          <div
            style={{
              opacity: branch3,
              transform: `translateY(${interpolate(branch3, [0, 1], [30, 0])}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "28px",
                background: "rgba(16, 185, 129, 0.15)",
                border: "2px solid #34d399",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 35px rgba(52, 211, 153, 0.35)",
              }}
            >
              <PawPrint size={65} color="#34d399" />
            </div>
            <span style={{ color: "#e2e8f0", fontSize: 22, fontWeight: 700, letterSpacing: "0.05em" }}>PETS</span>
          </div>
        </div>

        <AnimatedHeadline
          text="NOT SCI-FI IT IS REALITY"
          delay={20}
          highlightWords={["REALITY"]}
          highlightColor="#c084fc"
        />
      </div>
    </div>
  );
};
