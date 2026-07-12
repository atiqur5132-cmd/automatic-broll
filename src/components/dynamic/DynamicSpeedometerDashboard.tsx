import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";

export const DynamicSpeedometerDashboard: React.FC = () => {
  const frame = useCurrentFrame();

  const dialProgress = interpolate(frame, [0, 35], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const dials = [
    { label: "LATENCY", value: "14ms", status: "FAST", color: "#10B981", percent: 0.95 },
    { label: "ENTERPRISE COST", value: "$0.10/M", status: "CHEAP", color: "#00F0FF", percent: 0.92 },
    { label: "RELIABILITY AT SCALE", value: "99.99%", status: "GOOD ENOUGH", color: "#FFD700", percent: 0.98 },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: displayFontFamily,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#10B981", letterSpacing: "0.2em" }}>
          HIGH-VOLUME CODING REQUIREMENTS
        </div>
        <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
          THE THREE STRATEGIC PILLARS FOR 24/7 PRODUCTION
        </div>
      </div>

      <div style={{ display: "flex", gap: 50, width: "100%" }}>
        {dials.map((dial, idx) => {
          const angle = interpolate(dialProgress * dial.percent, [0, 1], [-130, 130]);

          return (
            <div
              key={idx}
              style={{
                flex: 1,
                background: "rgba(18, 22, 32, 0.95)",
                border: `3px solid ${dial.color}`,
                borderRadius: 36,
                padding: "40px 30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: `0 20px 60px rgba(0,0,0,0.7), 0 0 40px ${dial.color}33`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: dial.color, letterSpacing: "0.15em" }}>
                {dial.label}
              </div>

              {/* Speedometer Arc SVG */}
              <div style={{ position: "relative", width: 220, height: 160, marginTop: 30, display: "flex", justifyContent: "center" }}>
                <svg width="220" height="160" viewBox="0 0 220 160">
                  <path
                    d="M 20 140 A 90 90 0 0 1 200 140"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 20 140 A 90 90 0 0 1 200 140"
                    fill="none"
                    stroke={dial.color}
                    strokeWidth="18"
                    strokeDasharray="282"
                    strokeDashoffset={282 * (1 - dialProgress * dial.percent)}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Needle */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    width: 6,
                    height: 80,
                    background: "#FFFFFF",
                    transformOrigin: "bottom center",
                    transform: `rotate(${angle}deg)`,
                    borderRadius: 3,
                  }}
                />
              </div>

              <div style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF", marginTop: 10 }}>
                {dial.value}
              </div>
              <div style={{ fontSize: 28, fontWeight: 800, color: dial.color, marginTop: 8 }}>
                {dial.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
