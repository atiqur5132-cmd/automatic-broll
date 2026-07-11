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
      }}
    >
      <div
        style={{
          fontSize: 130,
          fontWeight: 900,
          color: accentColor,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          textShadow: `0 0 50px ${accentColor}66, 0 10px 30px rgba(0,0,0,0.8)`,
        }}
      >
        {value}
      </div>
      {label && (
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#FFFFFF",
            marginTop: 20,
            letterSpacing: "0.02em",
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
  separator = "➜",
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 60,
        width: "100%",
      }}
    >
      {/* Left Item */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontSize: 96, fontWeight: 900, color: leftColor, lineHeight: 1 }}>
          {leftValue}
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginTop: 16 }}>
          {leftLabel}
        </div>
      </div>

      {/* Separator */}
      <div style={{ fontSize: 44, fontWeight: 800, color: "rgba(255,255,255,0.35)" }}>
        {separator}
      </div>

      {/* Right Item */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontSize: 96, fontWeight: 900, color: rightColor, lineHeight: 1 }}>
          {rightValue}
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginTop: 16 }}>
          {rightLabel}
        </div>
      </div>
    </div>
  );
};

export const CinematicBarChart: React.FC<{
  westernShare: number;
  chineseShare: number;
  westernLabel?: string;
  chineseLabel?: string;
}> = ({
  westernShare,
  chineseShare,
  westernLabel = "WESTERN LABS (OPENAI / ANTHROPIC)",
  chineseLabel = "CHINESE PROVIDERS (XIAOMI / Z.AI)",
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1300,
        display: "flex",
        flexDirection: "column",
        gap: 40,
        padding: "20px 0",
      }}
    >
      {/* Western Bar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 700 }}>
          <span style={{ color: "#00F0FF" }}>{westernLabel}</span>
          <span style={{ color: "#00F0FF" }}>{westernShare.toFixed(1)}%</span>
        </div>
        <div
          style={{
            width: "100%",
            height: 48,
            borderRadius: 14,
            backgroundColor: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${westernShare * progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #0080FF 0%, #00F0FF 100%)",
              boxShadow: "0 0 24px rgba(0,240,255,0.5)",
              borderRadius: 14,
            }}
          />
        </div>
      </div>

      {/* Chinese Bar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 700 }}>
          <span style={{ color: "#FF5A5F" }}>{chineseLabel}</span>
          <span style={{ color: "#FF5A5F" }}>{chineseShare.toFixed(1)}%</span>
        </div>
        <div
          style={{
            width: "100%",
            height: 48,
            borderRadius: 14,
            backgroundColor: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${chineseShare * progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #FF3366 0%, #FF5A5F 100%)",
              boxShadow: "0 0 24px rgba(255,90,95,0.5)",
              borderRadius: 14,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const CinematicRouterFlow: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 36,
        width: "100%",
        maxWidth: 1380,
      }}
    >
      <div
        style={{
          padding: "36px 44px",
          borderRadius: 20,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.2)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
          INCOMING TASKS
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: "#FFFFFF" }}>
          100% of Workload
        </div>
      </div>

      <div style={{ fontSize: 36, color: "rgba(255,255,255,0.4)" }}>➜</div>

      <div
        style={{
          padding: "40px 48px",
          borderRadius: 20,
          background: "linear-gradient(135deg, rgba(0,240,255,0.15) 0%, rgba(0,240,255,0.04) 100%)",
          border: "2px solid #00F0FF",
          boxShadow: "0 0 40px rgba(0,240,255,0.3)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.12em", marginBottom: 10 }}>
          COINBASE AUTOMATED ROUTER
        </div>
        <div style={{ fontSize: 34, fontWeight: 800, color: "#FFFFFF" }}>
          Complexity & Cost Assessment
        </div>
      </div>

      <div style={{ fontSize: 36, color: "rgba(255,255,255,0.4)" }}>➜</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            padding: "22px 32px",
            borderRadius: 16,
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid #10B981",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "#10B981" }}>90% EVERYDAY TASKS</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>Routed to Efficient Models</div>
        </div>

        <div
          style={{
            padding: "22px 32px",
            borderRadius: 16,
            background: "rgba(255, 184, 0, 0.15)",
            border: "1px solid #FFB800",
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: "#FFB800" }}>10% EDGE CASES</div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF" }}>Routed to Frontier Models</div>
        </div>
      </div>
    </div>
  );
};
