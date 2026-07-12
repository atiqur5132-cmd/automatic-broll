import React from "react";
import { useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";

export const LeaderboardParadoxCard: React.FC<{
  modelName?: string;
  usageRank?: string;
  benchmarkRank?: string;
}> = ({
  modelName = "XIAOMI AI WORKHORSE",
  usageRank = "#1 IN WORLD USAGE",
  benchmarkRank = "#10 ON BENCHMARKS",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: "40px",
        width: "100%",
        height: "100%",
        transform: `scale(${enter})`,
      }}
    >
      {/* Left Column: Everyday Usage */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(145deg, rgba(16, 185, 129, 0.22) 0%, rgba(16, 185, 129, 0.05) 100%)",
          border: "3px solid #10B981",
          borderRadius: "36px",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "0 30px 90px rgba(0,0,0,0.8), 0 0 70px rgba(16, 185, 129, 0.3)",
        }}
      >
        <div style={{ fontSize: 26, fontWeight: 800, color: "#10B981", letterSpacing: "0.15em" }}>
          REAL WORLD PRODUCTION SCALE
        </div>
        <div style={{ fontSize: 160, fontWeight: 900, color: "#FFFFFF", margin: "20px 0", lineHeight: 1 }}>
          #1
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: "rgba(255,255,255,0.95)" }}>
          BILLIONS OF TOKENS RUN EVERY WEEK
        </div>
      </div>

      {/* Center VS Badge */}
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
            fontSize: 40,
            fontWeight: 900,
            color: "#FFD700",
            background: "rgba(255, 215, 0, 0.18)",
            border: "3px solid #FFD700",
            borderRadius: "50%",
            width: 110,
            height: 110,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 50px rgba(255, 215, 0, 0.5)",
          }}
        >
          VS
        </div>
      </div>

      {/* Right Column: Benchmark Score */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(145deg, rgba(255, 90, 95, 0.22) 0%, rgba(255, 90, 95, 0.05) 100%)",
          border: "3px solid #FF5A5F",
          borderRadius: "36px",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "0 30px 90px rgba(0,0,0,0.8), 0 0 70px rgba(255, 90, 95, 0.3)",
        }}
      >
        <div style={{ fontSize: 26, fontWeight: 800, color: "#FF5A5F", letterSpacing: "0.15em" }}>
          ACADEMIC REASONING BENCHMARK
        </div>
        <div style={{ fontSize: 160, fontWeight: 900, color: "#FFFFFF", margin: "20px 0", lineHeight: 1 }}>
          #10
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: "rgba(255,255,255,0.95)" }}>
          DOES NOT CRACK TOP TIER
        </div>
      </div>
    </div>
  );
};

export const XiaomiBrandCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 110 },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: "40px",
        width: "100%",
        height: "100%",
        transform: `scale(${scale})`,
      }}
    >
      {/* Left Hero Brand Panel (60% width) */}
      <div
        style={{
          flex: 1.3,
          background: "radial-gradient(circle at center, rgba(255, 103, 0, 0.25) 0%, rgba(22, 24, 32, 0.95) 100%)",
          border: "3px solid #FF6700",
          borderRadius: "36px",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 80px rgba(255, 103, 0, 0.35)",
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "36px",
            background: "#FF6700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 84,
            fontWeight: 900,
            color: "#FFFFFF",
            boxShadow: "0 0 50px rgba(255, 103, 0, 0.8)",
            marginBottom: "36px",
          }}
        >
          mi
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.15 }}>
          XIAOMI AI WORKHORSE
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#FF6700", marginTop: "16px", letterSpacing: "0.08em" }}>
          YES, THE SMARTPHONE & ECOSYSTEM GIANT
        </div>
      </div>

      {/* Right Stats Stack Panel (40% width) */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "rgba(22, 26, 36, 0.9)",
            border: "2px solid rgba(255,255,255,0.18)",
            borderRadius: "28px",
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "#00F0FF", letterSpacing: "0.1em" }}>
            PRODUCTION SCALE
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: "10px" }}>
            2.4B+ Tokens / Week
          </div>
        </div>

        <div
          style={{
            flex: 1,
            background: "rgba(22, 26, 36, 0.9)",
            border: "2px solid rgba(255,255,255,0.18)",
            borderRadius: "28px",
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "#10B981", letterSpacing: "0.1em" }}>
            PRIMARY WORKLOAD
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: "10px" }}>
            &gt;50% Automated Coding
          </div>
        </div>

        <div
          style={{
            flex: 1,
            background: "rgba(22, 26, 36, 0.9)",
            border: "2px solid rgba(255,255,255,0.18)",
            borderRadius: "28px",
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "#FFD700", letterSpacing: "0.1em" }}>
            KEY STRATEGY
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: "10px" }}>
            Fast • Cheap • Reliable
          </div>
        </div>
      </div>
    </div>
  );
};

export const InverseCorrelationChart: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [5, 35], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(18, 20, 28, 0.95)",
        border: "3px solid rgba(255,255,255,0.2)",
        borderRadius: "36px",
        padding: "50px 70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 40px 90px rgba(0,0,0,0.85)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 36, fontWeight: 900, color: "#00F0FF" }}>
          BENCHMARK SCORE vs REAL-WORLD MARKET ADOPTION
        </span>
        <span
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: "#FF5A5F",
            background: "rgba(255,90,95,0.18)",
            padding: "10px 28px",
            borderRadius: "24px",
            border: "2px solid #FF5A5F",
          }}
        >
          INVERSE CORRELATION
        </span>
      </div>

      <div style={{ position: "relative", height: 420, width: "100%", borderBottom: "4px solid #666", borderLeft: "4px solid #666", margin: "20px 0" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
          <path
            d="M 60 50 Q 600 180 1550 350"
            fill="none"
            stroke="#FF5A5F"
            strokeWidth="10"
            strokeDasharray="1800"
            strokeDashoffset={1800 * (1 - progress)}
          />
        </svg>

        <div style={{ position: "absolute", left: -160, top: 160, transform: "rotate(-90deg)", fontSize: 22, fontWeight: 800, color: "#ccc" }}>
          PhD BENCHMARK SCORE
        </div>
        <div style={{ position: "absolute", bottom: -50, right: 40, fontSize: 22, fontWeight: 800, color: "#ccc" }}>
          REAL-WORLD MASSIVE USAGE VOLUME ➜
        </div>
      </div>
    </div>
  );
};

export const TerminalIDECodeCard: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#16161A",
        borderRadius: "36px",
        border: "3px solid #33333D",
        overflow: "hidden",
        boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top IDE Window Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "24px 40px", background: "#1E1E24", borderBottom: "2px solid #2B2B33" }}>
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FF5F56" }} />
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FFBD2E" }} />
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#27C93F" }} />
        <span style={{ marginLeft: 24, fontSize: 26, fontWeight: 700, color: "#A0A0B0", fontFamily: "monospace" }}>
          workhorse_automation.py — Over 50% of Global AI Traffic
        </span>
      </div>

      {/* Code Area Filling Frame */}
      <div style={{ padding: "50px 70px", fontFamily: "monospace", fontSize: 36, lineHeight: 1.9, color: "#E2E2E8" }}>
        <div><span style={{ color: "#FF7B72" }}>def</span> <span style={{ color: "#D2A8FF" }}>handle_production_workload</span>(request):</div>
        <div style={{ paddingLeft: 50 }}>
          <span style={{ color: "#8B949E" }}># Everyday repetitive tasks: Autocomplete, refactor, quick bug fixes</span>
        </div>
        <div style={{ paddingLeft: 50 }}>
          <span style={{ color: "#FF7B72" }}>if</span> request.task <span style={{ color: "#FF7B72" }}>in</span> [<span style={{ color: "#A5D6FF" }}>"autocomplete"</span>, <span style={{ color: "#A5D6FF" }}>"refactor"</span>, <span style={{ color: "#A5D6FF" }}>"unit_test"</span>]:
        </div>
        <div style={{ paddingLeft: 100 }}>
          <span style={{ color: "#FF7B72" }}>return</span> xiaomi_model.execute(speed=<span style={{ color: "#79C0FF" }}>"INSTANT"</span>, cost=<span style={{ color: "#79C0FF" }}>"LOW"</span>)
        </div>
      </div>
    </div>
  );
};

export const TwoLeaderboardsCard: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: "40px",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          background: "rgba(20, 24, 34, 0.95)",
          border: "3px solid #00F0FF",
          borderRadius: 36,
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          boxShadow: "0 0 60px rgba(0, 240, 255, 0.3)",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.15em" }}>
          INTELLIGENCE LEADERBOARD
        </div>
        <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.2 }}>
          "What is the most capable model?"
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.8)" }}>
          PhD Reasoning • Novel Complex Debugging
        </div>
      </div>

      <div
        style={{
          flex: 1,
          background: "rgba(34, 20, 24, 0.95)",
          border: "3px solid #FFB800",
          borderRadius: 36,
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
          boxShadow: "0 0 60px rgba(255, 184, 0, 0.3)",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 800, color: "#FFB800", letterSpacing: "0.15em" }}>
          USAGE LEADERBOARD
        </div>
        <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.2 }}>
          "What do people trust every day?"
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.8)" }}>
          Fast • Cheap • 24/7 Repetitive Code Scale
        </div>
      </div>
    </div>
  );
};
