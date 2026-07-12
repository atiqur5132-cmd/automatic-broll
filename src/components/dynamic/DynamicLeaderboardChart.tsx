import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";

interface LeaderboardItem {
  name: string;
  tokensPerWeek: number; // in Billions
  rank: number;
  isHero?: boolean;
}

export const DynamicLeaderboardChart: React.FC<{
  title: string;
  subtitle: string;
  items: LeaderboardItem[];
}> = ({ title, subtitle, items }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: displayFontFamily,
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#10B981", letterSpacing: "0.2em" }}>
          {subtitle}
        </div>
        <div style={{ fontSize: 46, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
          {title}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {items.map((item, index) => {
          const delay = index * 4;
          const progress = interpolate(frame - delay, [0, 25], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });

          const maxVal = Math.max(...items.map((i) => i.tokensPerWeek));
          const widthPercent = (item.tokensPerWeek / maxVal) * 100 * progress;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                background: item.isHero ? "rgba(16, 185, 129, 0.15)" : "rgba(255, 255, 255, 0.05)",
                border: item.isHero ? "2px solid #10B981" : "1px solid rgba(255,255,255,0.1)",
                padding: "20px 32px",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  width: 60,
                  color: item.isHero ? "#10B981" : "#888",
                }}
              >
                #{item.rank}
              </div>

              <div style={{ width: 300, fontSize: 28, fontWeight: 700, color: "#FFF" }}>
                {item.name}
              </div>

              <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", height: 32, borderRadius: 16, overflow: "hidden" }}>
                <div
                  style={{
                    width: `${widthPercent}%`,
                    height: "100%",
                    background: item.isHero
                      ? "linear-gradient(90deg, #10B981, #00F0FF)"
                      : "rgba(255,255,255,0.3)",
                    borderRadius: 16,
                  }}
                />
              </div>

              <div style={{ fontSize: 28, fontWeight: 800, width: 220, textAlign: "right", color: item.isHero ? "#00F0FF" : "#BBB" }}>
                {(item.tokensPerWeek * progress).toFixed(1)}B / wk
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
