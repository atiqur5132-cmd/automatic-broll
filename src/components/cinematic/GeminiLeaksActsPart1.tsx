import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import {
  GoogleLogoSVG,
  GeminiLogoSVG,
  DeepMindLogoSVG,
  OpenAILogoSVG,
  ClaudeLogoSVG,
  FullScreenSplitShowcase,
} from "./BrandLogos";
import { CinematicBroadcastFrame } from "./BroadcastFrame";

// Helper background grid & radial glow
export const FullScreenTechBg: React.FC<{
  primaryColor?: string;
  secondaryColor?: string;
}> = ({ primaryColor = "#00F0FF", secondaryColor = "#8A2BE2" }) => {
  const frame = useCurrentFrame();
  const gridOffset = (frame * 1.5) % 60;

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 30%, #111827 0%, #080A10 75%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -100,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${gridOffset}px)`,
          opacity: 0.8,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -150,
          left: "20%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${primaryColor}22 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          right: "15%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${secondaryColor}20 0%, transparent 70%)`,
          filter: "blur(70px)",
        }}
      />
    </AbsoluteFill>
  );
};

// SCENE 1: Emergency Hook (Frames 0 to 125)
export const Scene01Hook: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 125], [1.02, 1.14], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const textScale = interpolate(frame, [0, 20], [0.85, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });

  return (
    <AbsoluteFill style={{ scale }}>
      <FullScreenTechBg primaryColor="#FF2E63" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 30 }}>
          <div
            style={{
              background: "linear-gradient(90deg, rgba(255, 46, 99, 0.2), rgba(255, 46, 99, 0.05))",
              border: "2px solid #FF2E63",
              padding: "16px 40px",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              gap: 14,
              boxShadow: "0 0 30px rgba(255, 46, 99, 0.35)",
            }}
          >
            <span style={{ color: "#FF2E63", fontSize: 24, fontWeight: 900 }}>BREAKING ALERT</span>
            <span style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>AI RACE UPDATE</span>
          </div>

          <div
            style={{
              fontSize: 82,
              fontWeight: 900,
              textAlign: "center",
              lineHeight: 1.1,
              color: "#FFFFFF",
              maxWidth: 1500,
              scale: textScale,
              fontFamily: "Inter, system-ui, sans-serif",
              letterSpacing: -2,
            }}
          >
            THE AI RACE JUST TOOK A <br />
            <span
              style={{
                background: "linear-gradient(90deg, #FF2E63, #00F0FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(255, 46, 99, 0.5)",
              }}
            >
              MASSIVE TURN
            </span>
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 2: Google Brand Evolution (Frames 125 - 211)
export const Scene02GoogleEvolution: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#4285F4" secondaryColor="#34A853" />
      <CinematicBroadcastFrame>
        <FullScreenSplitShowcase
          logo={<GoogleLogoSVG size={110} />}
          brandName="Google DeepMind"
          tagline="Reclaiming the AI Frontier Lead"
          accentColor="#00F0FF"
          highlights={[
            { title: "Shattering The Narrative", desc: "Putting an end to claims that Google is lagging competitors", metric: "NEW RECORD" },
            { title: "Flagship Architecture", desc: "Codename Cappuccino internal eval build exceeding targets", metric: "PRO BUILD" },
            { title: "2M Context Integration", desc: "Longest unified context window across production LLMs", metric: "2M TOKENS" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 3: Confidential Dossier 3D Inspection (Frames 211 - 329)
export const Scene03ConfidentialDossier: React.FC = () => {
  const frame = useCurrentFrame();
  const rotateY = interpolate(frame, [0, 118], [-10, 5], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FFD700" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div
          style={{
            width: 1700,
            background: "rgba(10, 14, 24, 0.94)",
            border: "2px solid rgba(255, 215, 0, 0.45)",
            borderRadius: 32,
            padding: "50px 70px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(255, 215, 0, 0.15)",
            transform: "perspective(1400px)",
            rotate: `0deg ${rotateY}deg`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ fontSize: 58, fontWeight: 900, color: "#FFFFFF", marginBottom: 35 }}>
            NEXT FLAGSHIP AI ARCHITECTURE SPECIFICATIONS
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 28 }}>
            {[
              { label: "CONTEXT WINDOW", val: "2,000,000 TOKENS" },
              { label: "CODENAME", val: "CAPPUCCINO" },
              { label: "NEW CAPABILITY", val: "DEEP THINKING MODE" },
              { label: "ARENA STATUS", val: "#1 OVERALL ELO" },
            ].map((metric, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  padding: "28px 32px",
                  borderRadius: 18,
                }}
              >
                <div style={{ fontSize: 18, color: "#A0AEC0", marginBottom: 10 }}>{metric.label}</div>
                <div style={{ fontSize: 30, fontWeight: 800, color: "#00F0FF" }}>{metric.val}</div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 4: Hero Title Reveal (Frames 329 - 472)
export const Scene04HeroTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 143], [0.94, 1.05], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ scale }}>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#4285F4" />
      <CinematicBroadcastFrame>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 24 }}>
          <GeminiLogoSVG size={140} />

          <div
            style={{
              fontSize: 124,
              fontWeight: 900,
              background: "linear-gradient(135deg, #FFFFFF 0%, #00F0FF 50%, #4285F4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: -3,
              lineHeight: 1,
              textAlign: "center",
            }}
          >
            GEMINI 3.5 PRO
          </div>
          <div style={{ fontSize: 34, color: "#E2E8F0", fontWeight: 600, letterSpacing: 1.5 }}>
            THE NUMBERS ARE ABSOLUTELY TURNING HEADS
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 5: Multi-Layer Tech HUD (Frames 472 - 616)
export const Scene05TechHUD: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#8A2BE2" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 34, width: 1760 }}>
          {[
            { title: "ZERO-SHOT REASONING", score: "96.4%", change: "+18.2% vs 3.1" },
            { title: "LONG HORIZON AGENTS", score: "94.8%", change: "NEW FRONTIER RECORD" },
            { title: "FRONTEND QUALITY", score: "98.1%", change: "HUMAN PARITY ACHIEVED" },
          ].map((hud, i) => (
            <div
              key={i}
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(0, 240, 255, 0.35)",
                padding: 48,
                borderRadius: 28,
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 700, color: "#FFFFFF", marginBottom: 20 }}>{hud.title}</div>
              <div style={{ fontSize: 78, fontWeight: 900, color: "#00F0FF", marginBottom: 16 }}>{hud.score}</div>
              <div style={{ fontSize: 22, color: "#34D399", fontWeight: 700 }}>▲ {hud.change}</div>
            </div>
          ))}
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 6: Official Google DeepMind Logo Badge Showcase (Frames 616 - 735)
export const Scene06LogoBadge: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#4285F4" secondaryColor="#8A2BE2" />
      <CinematicBroadcastFrame>
        <FullScreenSplitShowcase
          logo={<DeepMindLogoSVG size={110} />}
          brandName="Google DeepMind"
          tagline="Developing The Gemini 3.5 Pro Core"
          accentColor="#00F0FF"
          highlights={[
            { title: "Unifying Research & Product", desc: "Direct engineering pipeline from cutting-edge labs to API serving", metric: "FRONTIER" },
            { title: "Multi-Modal Training", desc: "Native understanding across text, audio, video, and complex visuals", metric: "NATIVE" },
            { title: "Hardware-Model Co-Design", desc: "Optimized specifically for TPU v6E supercomputing clusters", metric: "TPU v6E" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 7: 2M Token Visualizer (Frames 735 - 852)
export const Scene07TokenVisualizer: React.FC = () => {
  const frame = useCurrentFrame();
  const tokens = Math.min(2000000, Math.round(interpolate(frame, [0, 60], [100000, 2000000])));

  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#FFD700" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 50, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 118,
                fontWeight: 900,
                color: "#00F0FF",
                textShadow: "0 0 50px rgba(0, 240, 255, 0.5)",
                fontFamily: "monospace",
                lineHeight: 1,
              }}
            >
              {tokens.toLocaleString()}
            </div>
            <div style={{ fontSize: 48, fontWeight: 800, color: "#FFFFFF" }}>TOKEN CONTEXT WINDOW</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              { label: "EQUIVALENT CAPACITY", val: "1,500+ PAGE BOOKS AT ONCE" },
              { label: "CROSS-FILE INGESTION", val: "FULL GITHUB REPOSITORIES" },
              { label: "RETRIEVAL FIDELITY", val: "NEAR 100% NEEDLE RECALL" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(255, 215, 0, 0.35)",
                  padding: "28px 36px",
                  borderRadius: 22,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>{row.label}</span>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#FFD700" }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 8: Closed-Door Evaluation Room (Frames 852 - 990)
export const Scene08ClosedDoorEval: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FF2E63" secondaryColor="#4285F4" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "#080A10",
              border: "2px solid #1E293B",
              borderRadius: 28,
              padding: 48,
              fontFamily: "monospace",
            }}
          >
            <div style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 800, marginBottom: 25 }}>
              PRODUCTION VALIDATION SUITE
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.9, color: "#34D399" }}>
              &gt; Claude Fable 5 Comparison: <span style={{ color: "#00F0FF" }}>OUTPERFORMED (+6.8%)</span> <br />
              &gt; GPT-5.6 Comparison: <span style={{ color: "#00F0FF" }}>OUTPERFORMED (+4.2%)</span> <br />
              &gt; Overall Status: <span style={{ color: "#FFD700", fontWeight: "bold" }}>PRIVATE VALIDATION SUCCESS</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
            {[
              { title: "ENTERPRISE TESTING", desc: "Select Fortune 500 engineering partners running real codebases" },
              { title: "STABILITY VERIFICATION", desc: "Extended multi-day autonomous runs without context drift" },
              { title: "PRODUCTION READY", desc: "Latency and throughput verified for large-scale serving" },
            ].map((box, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  borderRadius: 22,
                  padding: "28px 36px",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>{box.title}</div>
                <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 8 }}>{box.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 9: Tri-Model Clash (Frames 990 - 1118)
export const Scene09TriModelClash: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#FF2E63" />
      <CinematicBroadcastFrame>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: 36, width: 1760 }}>
          <div
            style={{
              background: "rgba(15, 23, 42, 0.75)",
              border: "1px solid #334155",
              borderRadius: 28,
              padding: 42,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <OpenAILogoSVG size={88} />
            <div style={{ fontSize: 40, fontWeight: 800, color: "#FFFFFF" }}>GPT-5.6</div>
            <div style={{ fontSize: 20, color: "#94A3B8" }}>Surpassed in reasoning &amp; multi-step planning</div>
          </div>

          <div
            style={{
              background: "linear-gradient(145deg, rgba(0, 240, 255, 0.25), rgba(13, 17, 23, 0.95))",
              border: "2px solid #00F0FF",
              borderRadius: 28,
              padding: 44,
              textAlign: "center",
              boxShadow: "0 0 50px rgba(0, 240, 255, 0.35)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              scale: 1.04,
            }}
          >
            <GeminiLogoSVG size={104} />
            <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF" }}>GEMINI 3.5 PRO</div>
            <div style={{ fontSize: 24, color: "#34D399", fontWeight: 700 }}>#1 FRONTIER PERFORMANCE</div>
          </div>

          <div
            style={{
              background: "rgba(15, 23, 42, 0.75)",
              border: "1px solid #334155",
              borderRadius: 28,
              padding: 42,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <ClaudeLogoSVG size={88} />
            <div style={{ fontSize: 40, fontWeight: 800, color: "#FFFFFF" }}>CLAUDE FABLE 5</div>
            <div style={{ fontSize: 20, color: "#94A3B8" }}>Surpassed in coding &amp; agent workflows</div>
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 10: July Launch Calendar (Frames 1118 - 1245)
export const Scene10JulyCalendar: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FFD700" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 50, alignItems: "center" }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.92)",
              border: "2px solid #FFD700",
              borderRadius: 32,
              padding: "60px 80px",
              textAlign: "center",
              boxShadow: "0 25px 70px rgba(255, 215, 0, 0.25)",
            }}
          >
            <div style={{ fontSize: 88, fontWeight: 900, color: "#FFFFFF" }}>JULY 2026</div>
            <div style={{ fontSize: 30, color: "#CBD5E1", marginTop: 16 }}>Targeting release later this month</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              { phase: "PHASE 1", label: "Developer SDK & Vertex AI Preview", time: "EARLY JULY" },
              { phase: "PHASE 2", label: "Gemini Advanced Web App Upgrade", time: "MID JULY" },
              { phase: "PHASE 3", label: "Global API General Availability", time: "LATE JULY" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(255, 215, 0, 0.35)",
                  borderRadius: 22,
                  padding: "28px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: 26, fontWeight: 700, color: "#FFFFFF" }}>{item.label}</div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#FFD700", fontFamily: "monospace" }}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 11: Specs Sheet HUD (Frames 1245 - 1370)
export const Scene11SpecsHUD: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#8A2BE2" />
      <CinematicBroadcastFrame>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, width: 1760 }}>
          {[
            { label: "CONTEXT WINDOW", value: "2,000,000 TOKENS", desc: "Longest unified production memory" },
            { label: "INTERNAL CODENAME", value: "CAPPUCCINO", desc: "Verified in secret enterprise evaluation rooms" },
            { label: "SPECIALIZED REASONING", value: "DEEP THINKING MODE", desc: "Autonomous self-correction & planning loop" },
            { label: "HYBRID ARCHITECTURE", value: "MoE + REASONING 3.5", desc: "Optimized hardware-software co-design" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(15, 23, 42, 0.88)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                borderRadius: 24,
                padding: 44,
              }}
            >
              <div style={{ fontSize: 42, fontWeight: 800, color: "#00F0FF" }}>{item.value}</div>
              <div style={{ fontSize: 26, color: "#FFFFFF", fontWeight: 700, marginTop: 12 }}>{item.label}</div>
              <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 8 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 12: Internal Tracking Terminal (Frames 1370 - 1500)
export const Scene12InternalTracking: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#34D399" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "#0A0E17",
              border: "2px solid #1E293B",
              borderRadius: 28,
              padding: 48,
              fontFamily: "monospace",
            }}
          >
            <div style={{ color: "#34D399", fontSize: 26, fontWeight: 800, marginBottom: 20 }}>GIT REPOSITORY TRACKING:</div>
            <div style={{ color: "#E2E8F0", fontSize: 24, lineHeight: 1.9 }}>
              commit 8f9a2b1 -- "Prep model cappuccino_eval_pipeline" <br />
              commit 4c1d8e0 -- "Scale context window handling to 2M tokens" <br />
              commit 9a3e1b7 -- "Enable deep_thinking_mode validation suites"
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { title: "COMMIT FREQUENCY", stat: "PEAK ACTIVITY" },
              { title: "BENCHMARK HARNESS", stat: "ALL SUITES PASSED" },
              { title: "RELEASE BLOCKERS", stat: "ZERO CRITICAL ISSUES" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(52, 211, 153, 0.35)",
                  borderRadius: 22,
                  padding: "28px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>{row.title}</span>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#34D399", fontFamily: "monospace" }}>{row.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};
