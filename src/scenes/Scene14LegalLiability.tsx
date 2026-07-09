import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { Scale, UserCheck, ShieldAlert } from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { AnimatedHeadline, AnimatedBadge } from "../components/Typography";

export const Scene14LegalLiability: React.FC = () => {
  const frame = useCurrentFrame();

  const cameraScale = interpolate(frame, [0, 807], [1, 1.07]);

  const scaleTilt = Math.sin(frame * 0.08) * 8;

  const rightReveal = interpolate(frame, [60, 120], [0, 1], {
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
      <CinematicBackground themeColor="rgba(245, 158, 11, 0.22)" secondaryColor="rgba(239, 68, 68, 0.18)" />

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
        <AnimatedBadge label="ARE DOCTORS GOING OUT OF BUSINESS?" delay={10} color="#fbbf24" />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "90px", margin: "35px 0 55px 0" }}>
          {/* Scales of Justice */}
          <div
            style={{
              width: "190px",
              height: "190px",
              borderRadius: "40px",
              background: "rgba(245, 158, 11, 0.15)",
              border: "2px solid #f59e0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 45px rgba(245, 158, 11, 0.4)",
              transform: `rotate(${scaleTilt}deg)`,
            }}
          >
            <Scale size={95} color="#fbbf24" />
          </div>

          {/* Human Doctor carrying Legal Liability */}
          <div
            style={{
              opacity: rightReveal,
              transform: `translateY(${interpolate(rightReveal, [0, 1], [40, 0])}px)`,
              width: "190px",
              height: "190px",
              borderRadius: "40px",
              background: "rgba(14, 165, 233, 0.15)",
              border: "2px solid #38bdf8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxShadow: "0 0 45px rgba(56, 189, 248, 0.4)",
            }}
          >
            <UserCheck size={95} color="#38bdf8" />
            <ShieldAlert size={42} color="#f87171" style={{ position: "absolute", top: 20, right: 20 }} />
          </div>
        </div>

        <AnimatedHeadline
          text="HUMANS CARRY LEGAL LIABILITY"
          delay={25}
          highlightWords={["LEGAL", "LIABILITY"]}
          highlightColor="#fbbf24"
        />
      </div>
    </div>
  );
};
