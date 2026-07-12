import React from "react";
import { displayFontFamily } from "../../fonts";

export const DynamicDualMonoliths: React.FC<{
  leftTitle: string;
  leftHero: string;
  leftSubtitle: string;
  leftColor: string;
  rightTitle: string;
  rightHero: string;
  rightSubtitle: string;
  rightColor: string;
  centerBadge?: string;
}> = ({
  leftTitle,
  leftHero,
  leftSubtitle,
  leftColor,
  rightTitle,
  rightHero,
  rightSubtitle,
  rightColor,
  centerBadge = "VS",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: 50,
        alignItems: "stretch",
        fontFamily: displayFontFamily,
      }}
    >
      {/* Left Monolith */}
      <div
        style={{
          flex: 1,
          background: `${leftColor}1A`,
          border: `3px solid ${leftColor}`,
          borderRadius: 36,
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          boxShadow: `0 30px 80px rgba(0,0,0,0.8), 0 0 60px ${leftColor}33`,
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, color: leftColor, letterSpacing: "0.2em" }}>
          {leftTitle}
        </div>
        <div style={{ fontSize: 130, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, margin: "30px 0" }}>
          {leftHero}
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: leftColor }}>
          {leftSubtitle}
        </div>
      </div>

      {/* Center Badge */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "#FFD700",
            color: "#0B0C10",
            fontSize: 32,
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px #FFD700",
          }}
        >
          {centerBadge}
        </div>
      </div>

      {/* Right Monolith */}
      <div
        style={{
          flex: 1,
          background: `${rightColor}1A`,
          border: `3px solid ${rightColor}`,
          borderRadius: 36,
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          boxShadow: `0 30px 80px rgba(0,0,0,0.8), 0 0 60px ${rightColor}33`,
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, color: rightColor, letterSpacing: "0.2em" }}>
          {rightTitle}
        </div>
        <div style={{ fontSize: 130, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, margin: "30px 0" }}>
          {rightHero}
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: rightColor }}>
          {rightSubtitle}
        </div>
      </div>
    </div>
  );
};
