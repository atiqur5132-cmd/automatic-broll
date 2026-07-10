import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const VisualDiagram: React.FC<{ visualType: string; accentColor: string }> = ({
  visualType,
  accentColor,
}) => {
  const frame = useCurrentFrame();

  // Continuous background pulse and drift
  const pulse = 1 + Math.sin(frame * 0.06) * 0.04;
  const driftY = Math.sin(frame * 0.04) * 8;

  if (visualType === "toggle_default_on") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          scale: `${pulse}`,
          translate: `0px ${driftY}px`,
        }}
      >
        <div
          style={{
            width: 280,
            height: 110,
            borderRadius: 65,
            background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}66)`,
            border: `2px solid ${accentColor}`,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            justifyContent: "flex-end",
            boxShadow: `0 0 45px ${accentColor}55`,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: `0 4px 15px rgba(0,0,0,0.5), 0 0 25px ${accentColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 800,
              color: "#0f172a",
            }}
          >
            ON
          </div>
        </div>
        <div
          style={{
            fontSize: 18,
            letterSpacing: 3,
            color: accentColor,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          DEFAULT TRAINING SETTING
        </div>
      </div>
    );
  }

  if (visualType === "five_years_retention" || visualType === "three_years_retention") {
    const years = visualType === "five_years_retention" ? "5" : "3";
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          scale: `${pulse}`,
          translate: `0px ${driftY}px`,
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#ffffff",
            textShadow: `0 0 50px ${accentColor}`,
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          {years} YEARS
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: `${accentColor}`,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginTop: 15,
          }}
        >
          RETENTION ARCHIVE WINDOW
        </div>
      </div>
    );
  }

  if (visualType === "twenty_dollars_phone") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          scale: `${pulse}`,
          translate: `0px ${driftY}px`,
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: "#ffffff",
            textShadow: `0 0 45px ${accentColor}`,
            lineHeight: 1,
          }}
        >
          $20 <span style={{ fontSize: 50, color: accentColor }}>/ MO</span>
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#e2e8f0",
            letterSpacing: 3,
            marginTop: 12,
          }}
        >
          PREMIUM CONSUMER SUBSCRIPTION
        </div>
      </div>
    );
  }

  if (visualType === "time_screen_glow" || visualType === "return_to_1am") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          scale: `${pulse}`,
          translate: `0px ${driftY}px`,
        }}
      >
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: "#ffffff",
            textShadow: `0 0 70px ${accentColor}`,
            letterSpacing: -3,
            lineHeight: 0.9,
          }}
        >
          1:00 <span style={{ fontSize: 70, color: accentColor }}>AM</span>
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: accentColor,
            letterSpacing: 6,
            marginTop: 20,
            textTransform: "uppercase",
          }}
        >
          THE MIDNIGHT PROMPT
        </div>
      </div>
    );
  }

  // Generic geometric data pipeline node visualizer for abstract beats
  const progress = interpolate(frame % 90, [0, 90], [0, 100]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        scale: `${pulse}`,
        translate: `0px ${driftY}px`,
      }}
    >
      <div
        style={{
          width: 140,
          height: 140,
          borderRadius: 28,
          border: `2px solid ${accentColor}`,
          background: `radial-gradient(circle at center, ${accentColor}22, rgba(0,0,0,0.5))`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 40px ${accentColor}33`,
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: accentColor,
            boxShadow: `0 0 25px ${accentColor}`,
            opacity: 0.85,
          }}
        />
      </div>

      {/* Connection flow bar */}
      <div
        style={{
          width: 180,
          height: 4,
          background: "rgba(255,255,255,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            background: accentColor,
            boxShadow: `0 0 15px ${accentColor}`,
            position: "absolute",
            left: `${progress - 50}%`,
          }}
        />
      </div>

      <div
        style={{
          width: 140,
          height: 140,
          borderRadius: 28,
          border: `2px solid rgba(255,255,255,0.25)`,
          background: "rgba(255,255,255,0.03)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: 12,
            border: `2px dashed ${accentColor}`,
          }}
        />
      </div>
    </div>
  );
};
