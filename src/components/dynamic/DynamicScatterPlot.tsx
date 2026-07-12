import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";

export const DynamicScatterPlot: React.FC = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [0, 40], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#FF5A5F", letterSpacing: "0.2em" }}>
            EMPIRICAL RESEARCH FINDING
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
            INVERSE CORRELATION: PAPER BENCHMARK vs REAL PRODUCTION
          </div>
        </div>
        <div style={{ background: "rgba(255, 90, 95, 0.2)", border: "2px solid #FF5A5F", padding: "12px 28px", borderRadius: 20, color: "#FF5A5F", fontWeight: 800, fontSize: 24 }}>
          INVERSE TREND
        </div>
      </div>

      <div
        style={{
          flex: 1,
          background: "rgba(18, 22, 32, 0.95)",
          border: "3px solid rgba(255,255,255,0.2)",
          borderRadius: 32,
          padding: "40px 60px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Y Axis Label */}
        <div style={{ position: "absolute", left: 30, top: 40, fontSize: 20, color: "#00F0FF", fontWeight: 700 }}>
          ▲ REAL-WORLD PRODUCTION VOLUME (TOKENS/WK)
        </div>

        {/* X Axis Label */}
        <div style={{ position: "absolute", right: 60, bottom: 30, fontSize: 20, color: "#FFD700", fontWeight: 700 }}>
          ACADEMIC PhD BENCHMARK SCORE ►
        </div>

        {/* Animated Curve SVG */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
          <path
            d="M 140 120 Q 600 350 1450 480"
            fill="none"
            stroke="#FF5A5F"
            strokeWidth="10"
            strokeDasharray="2000"
            strokeDashoffset={2000 * (1 - progress)}
          />
          {/* Scatter Data Dots */}
          <circle cx="160" cy="130" r="14" fill="#00F0FF" opacity={progress} />
          <circle cx="450" cy="220" r="12" fill="#00F0FF" opacity={progress} />
          <circle cx="850" cy="360" r="12" fill="#FFD700" opacity={progress} />
          <circle cx="1400" cy="475" r="14" fill="#FF5A5F" opacity={progress} />
        </svg>

        {/* Annotation Cards */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", zIndex: 5 }}>
          <div style={{ background: "rgba(0, 240, 255, 0.15)", border: "2px solid #00F0FF", padding: "16px 24px", borderRadius: 16 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#00F0FF" }}>MODERATE BENCHMARK (#10)</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#FFF" }}>#1 IN REAL USAGE (2.4B/wk)</div>
          </div>

          <div style={{ background: "rgba(255, 90, 95, 0.15)", border: "2px solid #FF5A5F", padding: "16px 24px", borderRadius: 16 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#FF5A5F" }}>PEAK BENCHMARK (#1)</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#FFF" }}>LOWER CONTINUOUS USAGE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
