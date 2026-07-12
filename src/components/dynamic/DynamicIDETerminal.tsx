import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";

export const DynamicIDETerminal: React.FC = () => {
  const frame = useCurrentFrame();

  const donutProgress = interpolate(frame, [10, 45], [0, 0.53], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const lineCount = Math.min(5, Math.floor(frame / 10) + 1);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: 40,
        alignItems: "stretch",
        fontFamily: displayFontFamily,
      }}
    >
      {/* Left: Cybernetic IDE Terminal */}
      <div
        style={{
          flex: 1.4,
          background: "#14161C",
          border: "3px solid #2B2F3E",
          borderRadius: 32,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* Window Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "20px 32px", background: "#1C1F28", borderBottom: "2px solid #2B2F3E" }}>
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#FF5F56" }} />
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#27C93F" }} />
          <span style={{ marginLeft: 16, fontSize: 20, color: "#8B949E", fontFamily: "monospace" }}>
            enterprise_workhorse.ts — Live Production Pipeline
          </span>
        </div>

        {/* Code Content */}
        <div style={{ padding: "40px 48px", fontFamily: "monospace", fontSize: 32, lineHeight: 1.8, color: "#E2E2E8" }}>
          {lineCount >= 1 && (
            <div><span style={{ color: "#FF7B72" }}>async function</span> <span style={{ color: "#D2A8FF" }}>processDailyWorkload</span>() &#123;</div>
          )}
          {lineCount >= 2 && (
            <div style={{ paddingLeft: 40, color: "#8B949E" }}>
              // Routine task: autocomplete function, refactor file, fix bug
            </div>
          )}
          {lineCount >= 3 && (
            <div style={{ paddingLeft: 40 }}>
              <span style={{ color: "#FF7B72" }}>const</span> status = <span style={{ color: "#A5D6FF" }}>"AUTOMATED_CODING_TASK"</span>;
            </div>
          )}
          {lineCount >= 4 && (
            <div style={{ paddingLeft: 40 }}>
              <span style={{ color: "#FF7B72" }}>return</span> xiaomiEngine.run(&#123; latency: <span style={{ color: "#79C0FF" }}>"14ms"</span>, scale: <span style={{ color: "#79C0FF" }}>"MAX"</span> &#125;);
            </div>
          )}
          {lineCount >= 5 && <div>&#125;</div>}
        </div>
      </div>

      {/* Right: Animated Donut Chart (>50% Coding Traffic) */}
      <div
        style={{
          flex: 1,
          background: "rgba(18, 22, 32, 0.95)",
          border: "3px solid #00F0FF",
          borderRadius: 32,
          padding: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.15em" }}>
          LARGEST USE CASE TODAY
        </div>

        {/* Donut SVG */}
        <div style={{ position: "relative", width: 280, height: 280, margin: "30px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <circle cx="140" cy="140" r="110" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="28" />
            <circle
              cx="140"
              cy="140"
              r="110"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="28"
              strokeDasharray={2 * Math.PI * 110}
              strokeDashoffset={2 * Math.PI * 110 * (1 - donutProgress)}
              strokeLinecap="round"
              transform="rotate(-90 140 140)"
            />
          </svg>
          <div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>
              &gt;{(donutProgress * 100).toFixed(0)}%
            </div>
            <div style={{ fontSize: 20, color: "#00F0FF", fontWeight: 700 }}>PLATFORM TRAFFIC</div>
          </div>
        </div>

        <div style={{ fontSize: 32, fontWeight: 800, color: "#FFF" }}>
          CODING HAS TAKEN OVER
        </div>
      </div>
    </div>
  );
};
