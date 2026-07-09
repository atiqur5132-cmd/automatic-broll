import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { ThumbsUp, Bell, MessageSquarePlus, Sparkles } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene17CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 510], [1, 1.07]);

  const iconScale1 = interpolate(frame, [30, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const iconScale2 = interpolate(frame, [70, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const iconScale3 = interpolate(frame, [110, 160], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const floatY = Math.sin(frame * 0.1) * 8;

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
      <CinematicBackground themeColor="rgba(14, 165, 233, 0.25)" secondaryColor="rgba(168, 85, 247, 0.22)" />

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
        <AnimatedBadge label="JOIN THE DISCUSSION" delay={10} color="#38bdf8" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "70px", margin: "40px 0 60px 0" }}>
          {/* Like Button */}
          <div
            style={{
              transform: `scale(${iconScale1}) translateY(${floatY}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "36px",
                background: "rgba(14, 165, 233, 0.2)",
                border: "2px solid #38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(56, 189, 248, 0.4)",
              }}
            >
              <ThumbsUp size={75} color="#38bdf8" />
            </div>
            <span style={{ color: "#38bdf8", fontSize: 22, fontWeight: 800 }}>LIKE</span>
          </div>

          {/* Comment */}
          <div
            style={{
              transform: `scale(${iconScale2}) translateY(${-floatY}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "36px",
                background: "rgba(168, 85, 247, 0.2)",
                border: "2px solid #a855f7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)",
              }}
            >
              <MessageSquarePlus size={75} color="#c084fc" />
            </div>
            <span style={{ color: "#c084fc", fontSize: 22, fontWeight: 800 }}>COMMENT</span>
          </div>

          {/* Subscribe / Bell */}
          <div
            style={{
              transform: `scale(${iconScale3}) translateY(${floatY}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "36px",
                background: "rgba(16, 185, 129, 0.2)",
                border: "2px solid #34d399",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 0 40px rgba(52, 211, 153, 0.4)",
              }}
            >
              <Bell size={75} color="#34d399" />
              <Sparkles size={35} color="#6ee7b7" style={{ position: "absolute", top: 15, right: 15 }} />
            </div>
            <span style={{ color: "#34d399", fontSize: 22, fontWeight: 800 }}>SUBSCRIBE</span>
          </div>
        </div>

        <AnimatedHeadline
          text="WOULD YOU TRUST AI WITH HEALTH?"
          delay={25}
          highlightWords={["TRUST", "AI"]}
          highlightColor="#38bdf8"
        />
      </div>
    </div>
  );
};
