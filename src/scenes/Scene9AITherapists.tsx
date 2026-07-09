import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { MessageSquareHeart, Activity, HeartHandshake } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene9AITherapists: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 662], [1, 1.08]);

  // Wave smoothing transition over time
  const waveSmooth = interpolate(frame, [100, 350], [1, 0.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
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
      <CinematicBackground themeColor="rgba(236, 72, 153, 0.22)" secondaryColor="rgba(168, 85, 247, 0.2)" />

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
        <AnimatedBadge label="THE WILD FRONTIER OF AI THERAPY" delay={10} color="#f472b6" />

        <div style={{ position: "relative", width: "260px", height: "260px", display: "flex", alignItems: "center", justifyContent: "center", margin: "30px 0 50px 0" }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
              border: "2px solid #f472b6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 50px rgba(244, 114, 182, 0.5)",
              position: "relative",
            }}
          >
            <MessageSquareHeart size={95} color="#f472b6" />
            <Activity
              size={55}
              color="#38bdf8"
              style={{
                position: "absolute",
                bottom: 25,
                transform: `scaleY(${0.5 + waveSmooth * 1.2})`,
              }}
            />
            <HeartHandshake size={35} color="#fca5a5" style={{ position: "absolute", top: 25, right: 30 }} />
          </div>
        </div>

        <AnimatedHeadline
          text="AI CHATBOTS AS DIGITAL THERAPISTS"
          delay={20}
          highlightWords={["AI", "THERAPISTS"]}
          highlightColor="#f472b6"
        />
      </div>
    </div>
  );
};
