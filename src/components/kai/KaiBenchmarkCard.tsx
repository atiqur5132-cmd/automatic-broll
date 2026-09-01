import React from "react";
import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const KaiBenchmarkCard: React.FC<{
  title: string;
  subtitle?: string;
  metricValue: number;
  metricPrefix?: string;
  metricSuffix?: string;
  accentColor?: string;
  borderColor?: string;
  segmentsCount?: number;
  delay?: number;
}> = ({
  title,
  subtitle,
  metricValue,
  metricPrefix = "",
  metricSuffix = "",
  accentColor = "#00E5FF",
  borderColor = "#FFD600",
  segmentsCount = 12,
  delay = 10,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardSpring = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const count = Math.round(
    interpolate(frame - delay, [0, 45], [0, metricValue], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  const activeSegments = Math.round(
    interpolate(frame - delay, [0, 50], [0, segmentsCount], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  return (
    <div
      style={{
        transform: `scale(${cardSpring})`,
        opacity: cardSpring,
        background: "rgba(18, 19, 23, 0.95)",
        border: `2px solid ${borderColor}`,
        borderRadius: "18px",
        padding: "28px 44px",
        boxShadow: `0 0 35px ${borderColor}25, 0 20px 40px rgba(0,0,0,0.6)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "380px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top Tag */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: borderColor,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontSize: "16px" }}>⚡</span> {title}
      </div>

      {/* Giant Metric Counter */}
      <div
        style={{
          color: accentColor,
          fontSize: "72px",
          fontWeight: 900,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          textShadow: `0 0 25px ${accentColor}40`,
        }}
      >
        {metricPrefix}
        {count.toLocaleString()}
        {metricSuffix && (
          <span style={{ fontSize: "28px", color: "#FFFFFF", marginLeft: "8px", fontWeight: 600 }}>
            {metricSuffix}
          </span>
        )}
      </div>

      {subtitle && (
        <div
          style={{
            fontSize: "15px",
            color: "#A1A1AA",
            marginTop: "6px",
            marginBottom: "16px",
            fontWeight: 500,
          }}
        >
          {subtitle}
        </div>
      )}

      {/* Segmented Dotted Progress Bar */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginTop: "16px",
          alignItems: "center",
        }}
      >
        {Array.from({ length: segmentsCount }).map((_, i) => {
          const isActive = i < activeSegments;
          return (
            <div
              key={i}
              style={{
                width: "16px",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: isActive ? accentColor : "rgba(255, 255, 255, 0.12)",
                boxShadow: isActive ? `0 0 10px ${accentColor}` : "none",
                transition: "background-color 0.1s ease",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
