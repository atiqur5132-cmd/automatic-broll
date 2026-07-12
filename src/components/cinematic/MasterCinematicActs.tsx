import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { displayFontFamily } from "../../fonts";

// Helper: Subtle Continuous 2.5D Camera Drift so frame is NEVER static
const useCameraDrift = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 600], [1, 1.05], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });
  const panY = interpolate(frame, [0, 600], [0, -12], {
    extrapolateRight: "clamp",
  });
  return { transform: `scale(${scale}) translateY(${panY}px)` };
};

// Helper: Animated Background Grid Lines
const CinematicGridBackground: React.FC<{ accentColor?: string }> = ({ accentColor = "#00F0FF" }) => {
  const frame = useCurrentFrame();
  const offset = (frame * 1.5) % 60;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity: 0.18,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -100,
          backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: `translateY(${offset}px)`,
        }}
      />
    </div>
  );
};

// ==========================================
// ACT I: THE GREAT AI PARADOX (#1 USAGE vs #10 BENCHMARK)
// ==========================================
export const ActI_TheGreatParadox: React.FC = () => {
  const frame = useCurrentFrame();
  const camera = useCameraDrift();

  // Dynamic counter from 0 to 2.4 Billion
  const tokenCount = Math.round(
    interpolate(frame, [0, 90], [0, 2400], {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    })
  );

  // Scanline revealing #10 benchmark
  const scanProgress = interpolate(frame, [30, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        background: "radial-gradient(circle at center, #161A26 0%, #0B0D13 100%)",
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
        padding: "70px 90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...camera,
      }}
    >
      <CinematicGridBackground accentColor="#10B981" />

      {/* Hero Header */}
      <div style={{ zIndex: 10, textAlign: "center" }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#10B981", letterSpacing: "0.25em" }}>
          GLOBAL AI MARKETPLACE ADOPTION
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, marginTop: "8px" }}>
          THE SINGLE MOST USED AI MODEL IN REAL PRODUCTION
        </div>
      </div>

      {/* Dual Monolith Clash */}
      <div style={{ zIndex: 10, display: "flex", gap: "60px", alignItems: "stretch", flex: 1, margin: "40px 0" }}>
        {/* Left Monolith: #1 Usage */}
        <div
          style={{
            flex: 1.2,
            background: "linear-gradient(145deg, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.05) 100%)",
            border: "3px solid #10B981",
            borderRadius: "36px",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 30px 100px rgba(0,0,0,0.8), 0 0 80px rgba(16, 185, 129, 0.35)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: "#10B981", letterSpacing: "0.15em" }}>
            ACTUAL EVERYDAY USAGE RANK
          </div>
          <div style={{ fontSize: 190, fontWeight: 900, color: "#FFFFFF", lineHeight: 1, margin: "20px 0" }}>
            #1
          </div>
          <div style={{ fontSize: 48, fontWeight: 900, color: "#10B981" }}>
            {tokenCount}M+ TOKENS / WEEK
          </div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.75)", marginTop: "16px" }}>
            BILLIONS OF REQUESTS ACROSS ENTERPRISE PLATFORMS
          </div>
        </div>

        {/* Center VS Clash Badge */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "#FFD700",
              color: "#0B0D13",
              fontSize: 36,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 50px #FFD700",
            }}
          >
            VS
          </div>
        </div>

        {/* Right Monolith: #10 Benchmark */}
        <div
          style={{
            flex: 1,
            background: "linear-gradient(145deg, rgba(255, 90, 95, 0.25) 0%, rgba(255, 90, 95, 0.05) 100%)",
            border: "3px solid #FF5A5F",
            borderRadius: "36px",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 30px 100px rgba(0,0,0,0.8), 0 0 80px rgba(255, 90, 95, 0.35)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: "#FF5A5F", letterSpacing: "0.15em" }}>
            ACADEMIC REASONING BENCHMARK
          </div>
          <div
            style={{
              fontSize: 190,
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1,
              margin: "20px 0",
              opacity: scanProgress,
            }}
          >
            #10
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#FF5A5F", textAlign: "center" }}>
            DOES NOT CRACK GLOBAL TOP TIER
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ACT II: XIAOMI & THE DECOUPLING ENGINE
// ==========================================
export const ActII_XiaomiEcosystem: React.FC = () => {
  const frame = useCurrentFrame();
  const camera = useCameraDrift();
  const rotation = frame * 0.8;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        background: "radial-gradient(circle at center, #231812 0%, #0D0E12 100%)",
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
        padding: "70px 90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...camera,
      }}
    >
      <CinematicGridBackground accentColor="#FF6700" />

      {/* Header */}
      <div style={{ zIndex: 10 }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#FF6700", letterSpacing: "0.25em" }}>
          INDUSTRY DECOUPLING PATTERN
        </div>
        <div style={{ fontSize: 46, fontWeight: 900, marginTop: "8px" }}>
          XIAOMI AI WORKHORSE — ENGINEERED FOR CONTINUOUS PRODUCTION
        </div>
      </div>

      {/* 3-Panel Cinematic Ecosystem Diagram */}
      <div style={{ zIndex: 10, display: "flex", gap: "50px", flex: 1, margin: "40px 0" }}>
        {/* Left Hero Core Engine */}
        <div
          style={{
            flex: 1.3,
            background: "rgba(24, 20, 22, 0.92)",
            border: "3px solid #FF6700",
            borderRadius: "36px",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 80px rgba(255, 103, 0, 0.3)",
          }}
        >
          {/* Rotating Orbital Data Ring */}
          <div
            style={{
              position: "absolute",
              right: -100,
              top: -100,
              width: 500,
              height: 500,
              border: "2px dashed rgba(255, 103, 0, 0.35)",
              borderRadius: "50%",
              transform: `rotate(${rotation}deg)`,
            }}
          />

          <div
            style={{
              width: 130,
              height: 130,
              borderRadius: "32px",
              background: "#FF6700",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 74,
              fontWeight: 900,
              color: "#FFFFFF",
              boxShadow: "0 0 50px rgba(255, 103, 0, 0.9)",
              marginBottom: "36px",
            }}
          >
            mi
          </div>
          <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.15 }}>
            XIAOMI SMART ECOSYSTEM
          </div>
          <div style={{ fontSize: 28, color: "#FF6700", fontWeight: 700, marginTop: "16px" }}>
            MILLIONS OF DEVICES • CONSTANT AUTOMATION REQUESTS
          </div>
        </div>

        {/* Right Stack Metrics */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px", justifyContent: "space-between" }}>
          <div
            style={{
              flex: 1,
              background: "rgba(18, 22, 32, 0.95)",
              border: "2px solid #00F0FF",
              borderRadius: "28px",
              padding: "36px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, color: "#00F0FF", letterSpacing: "0.15em" }}>
              WEEKLY TRAFFIC VOLUME
            </div>
            <div style={{ fontSize: 48, fontWeight: 900, marginTop: "10px" }}>
              2.4B+ Enterprise Tokens
            </div>
          </div>

          <div
            style={{
              flex: 1,
              background: "rgba(18, 22, 32, 0.95)",
              border: "2px solid #10B981",
              borderRadius: "28px",
              padding: "36px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 700, color: "#10B981", letterSpacing: "0.15em" }}>
              LATENCY & THROUGHPUT
            </div>
            <div style={{ fontSize: 48, fontWeight: 900, marginTop: "10px" }}>
              Instant • High Concurrency
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ACT III: THE INVERSE CORRELATION CURVE
// ==========================================
export const ActIII_InverseCorrelation: React.FC = () => {
  const frame = useCurrentFrame();
  const camera = useCameraDrift();

  // Animated curve drawing
  const progress = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        background: "radial-gradient(circle at center, #1C1522 0%, #0D0E12 100%)",
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
        padding: "70px 90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...camera,
      }}
    >
      <CinematicGridBackground accentColor="#FF5A5F" />

      {/* Header */}
      <div style={{ zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#FF5A5F", letterSpacing: "0.2em" }}>
            RESEARCH DISCOVERY
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, marginTop: "8px" }}>
            BENCHMARK LEADERBOARD vs REAL-WORLD MARKET SHARE
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: "#FF5A5F",
            background: "rgba(255,90,95,0.2)",
            border: "3px solid #FF5A5F",
            padding: "14px 36px",
            borderRadius: "30px",
          }}
        >
          INVERSE CORRELATION
        </div>
      </div>

      {/* Full-Screen Coordinate Chart */}
      <div
        style={{
          zIndex: 10,
          flex: 1,
          margin: "40px 0",
          background: "rgba(18, 20, 28, 0.95)",
          border: "3px solid rgba(255,255,255,0.2)",
          borderRadius: "36px",
          padding: "50px 70px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}>
          <path
            d="M 120 80 Q 750 250 1600 450"
            fill="none"
            stroke="#FF5A5F"
            strokeWidth="12"
            strokeDasharray="2000"
            strokeDashoffset={2000 * (1 - progress)}
          />
        </svg>

        <div style={{ fontSize: 36, fontWeight: 800, color: "#00F0FF", zIndex: 2 }}>
          HIGHER BENCHMARK SCORE = OFTEN LOWER PRODUCTION VOLUME
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ACT IV: THE CODING DOMINANCE (CYBERNETIC WORKSTATION)
// ==========================================
export const ActIV_CodingWorkstation: React.FC = () => {
  const frame = useCurrentFrame();
  const camera = useCameraDrift();

  // Animated code lines typing
  const lineCount = Math.min(5, Math.floor(frame / 12) + 1);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        background: "radial-gradient(circle at center, #181E2A 0%, #0D0E12 100%)",
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
        padding: "70px 90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...camera,
      }}
    >
      <CinematicGridBackground accentColor="#00F0FF" />

      {/* Header */}
      <div style={{ zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.2em" }}>
            THE SINGLE LARGEST USE CASE TODAY
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, marginTop: "8px" }}>
            CODING HAS TAKEN OVER &gt;50% OF ALL PLATFORM TRAFFIC
          </div>
        </div>
      </div>

      {/* IDE Cybernetic Workstation */}
      <div
        style={{
          zIndex: 10,
          flex: 1,
          margin: "40px 0",
          background: "#16161A",
          borderRadius: "36px",
          border: "3px solid #33333D",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "24px 40px", background: "#1E1E24", borderBottom: "2px solid #2B2B33" }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FF5F56" }} />
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#27C93F" }} />
          <span style={{ marginLeft: 24, fontSize: 24, fontWeight: 700, color: "#A0A0B0", fontFamily: "monospace" }}>
            production_workload.ts — Autocomplete • Refactor • Bug Fix
          </span>
        </div>

        <div style={{ padding: "50px 70px", fontFamily: "monospace", fontSize: 36, lineHeight: 1.9, color: "#E2E2E8" }}>
          {lineCount >= 1 && (
            <div><span style={{ color: "#FF7B72" }}>async function</span> <span style={{ color: "#D2A8FF" }}>handleEverydayEngineeringTask</span>() &#123;</div>
          )}
          {lineCount >= 2 && (
            <div style={{ paddingLeft: 50, color: "#8B949E" }}>
              // Everyday repetitive tasks: Autocomplete function, refactor module, fix bug
            </div>
          )}
          {lineCount >= 3 && (
            <div style={{ paddingLeft: 50 }}>
              <span style={{ color: "#FF7B72" }}>const</span> requirement = <span style={{ color: "#A5D6FF" }}>"FAST • CHEAP • GOOD ENOUGH FOR 24/7 SCALE"</span>;
            </div>
          )}
          {lineCount >= 4 && (
            <div style={{ paddingLeft: 50 }}>
              <span style={{ color: "#FF7B72" }}>return</span> workhorseModel.execute(&#123; latency: <span style={{ color: "#79C0FF" }}>"14ms"</span>, uptime: <span style={{ color: "#79C0FF" }}>"99.99%"</span> &#125;);
            </div>
          )}
          {lineCount >= 5 && <div>&#125;</div>}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ACT V: FRONTIER INSTRUMENT vs DAILY WORKHORSE
// ==========================================
export const ActV_FrontierVsWorkhorse: React.FC = () => {
  const camera = useCameraDrift();

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        background: "radial-gradient(circle at center, #1F1D2B 0%, #0D0E12 100%)",
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
        padding: "70px 90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...camera,
      }}
    >
      <CinematicGridBackground accentColor="#FFB800" />

      {/* Header */}
      <div style={{ zIndex: 10 }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: "#FFB800", letterSpacing: "0.2em" }}>
          TWO DIVERGENT LEADERBOARDS
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, marginTop: "8px" }}>
          SMARTEST MODEL ON PAPER ≠ DEFACTO WORKHORSE IN PRODUCTION
        </div>
      </div>

      {/* Split Comparison */}
      <div style={{ zIndex: 10, display: "flex", gap: "50px", flex: 1, margin: "40px 0" }}>
        <div
          style={{
            flex: 1,
            background: "rgba(20, 24, 34, 0.95)",
            border: "3px solid #00F0FF",
            borderRadius: 36,
            padding: "50px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: "#00F0FF" }}>BENCHMARK LEADERBOARD</div>
          <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.2 }}>
            "What is the most capable model?"
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.85)" }}>
            PhD Reasoning • Complex High-Stakes Debugging
          </div>
        </div>

        <div
          style={{
            flex: 1,
            background: "rgba(34, 20, 24, 0.95)",
            border: "3px solid #FFB800",
            borderRadius: 36,
            padding: "50px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: "#FFB800" }}>USAGE LEADERBOARD</div>
          <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.2 }}>
            "What do people trust every day?"
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.85)" }}>
            Fast • Cheap • 24/7 Repetitive Coding Scale
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ACT VI: THE FUTURE OF AI STRATEGY
// ==========================================
export const ActVI_FutureHorizon: React.FC = () => {
  const camera = useCameraDrift();

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: 1920,
        height: 1080,
        background: "radial-gradient(circle at center, #1B263B 0%, #0D0E12 100%)",
        fontFamily: displayFontFamily,
        color: "#FFFFFF",
        padding: "70px 90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        ...camera,
      }}
    >
      <CinematicGridBackground accentColor="#00F0FF" />

      <div style={{ zIndex: 10, maxWidth: 1500 }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: "#00F0FF", letterSpacing: "0.2em" }}>
          THE STRATEGIC QUESTION
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, margin: "30px 0", lineHeight: 1.2 }}>
          DOES BEING "SMARTEST" MATTER AS MUCH AS OPERATING AT SCALE?
        </div>
        <div style={{ fontSize: 36, color: "rgba(255,255,255,0.85)", marginTop: "20px" }}>
          Let me know your thoughts on where the AI industry is headed in the comments below.
        </div>
      </div>
    </div>
  );
};
