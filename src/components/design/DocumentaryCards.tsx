import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";

export const CinematicNumber: React.FC<{
  value: string;
  label?: string;
  accentColor?: string;
}> = ({ value, label, accentColor = "#00F0FF" }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 15], [0.93, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale})`,
        textAlign: "center",
        width: "100%",
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          fontSize: 185,
          fontWeight: 900,
          color: accentColor,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          textShadow: `0 0 70px ${accentColor}88, 0 15px 40px rgba(0,0,0,0.9)`,
        }}
      >
        {value}
      </div>
      {label && (
        <div
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "#FFFFFF",
            marginTop: 30,
            letterSpacing: "0.04em",
            maxWidth: 1500,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export const CinematicComparison: React.FC<{
  leftValue: string;
  leftLabel: string;
  leftColor?: string;
  rightValue: string;
  rightLabel: string;
  rightColor?: string;
  separator?: string;
}> = ({
  leftValue,
  leftLabel,
  leftColor = "#FF5A5F",
  rightValue,
  rightLabel,
  rightColor = "#00F0FF",
  separator = "VS",
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        width: "100%",
        height: 580,
        gap: 50,
      }}
    >
      {/* Left Full-Screen Panel */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(145deg, rgba(255, 90, 95, 0.16) 0%, rgba(255, 90, 95, 0.04) 100%)",
          border: "2px solid #FF5A5F",
          borderRadius: "32px",
          padding: "50px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 50px rgba(255, 90, 95, 0.25)",
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 900, color: leftColor, lineHeight: 1 }}>
          {leftValue}
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: "rgba(255,255,255,0.9)", marginTop: 24 }}>
          {leftLabel}
        </div>
      </div>

      {/* Center Separator Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 900,
            color: "#FFD700",
            background: "rgba(255, 215, 0, 0.15)",
            border: "2px solid #FFD700",
            borderRadius: "50%",
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
          }}
        >
          {separator}
        </div>
      </div>

      {/* Right Full-Screen Panel */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(145deg, rgba(0, 240, 255, 0.16) 0%, rgba(0, 240, 255, 0.04) 100%)",
          border: "2px solid #00F0FF",
          borderRadius: "32px",
          padding: "50px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 50px rgba(0, 240, 255, 0.25)",
        }}
      >
        <div style={{ fontSize: 110, fontWeight: 900, color: rightColor, lineHeight: 1 }}>
          {rightValue}
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: "rgba(255,255,255,0.9)", marginTop: 24 }}>
          {rightLabel}
        </div>
      </div>
    </div>
  );
};
