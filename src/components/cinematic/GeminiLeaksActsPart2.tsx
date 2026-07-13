import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { FullScreenTechBg } from "./GeminiLeaksActsPart1";
import {
  GoogleLogoSVG,
  ClaudeLogoSVG,
  LMArenaLogoSVG,
  FullScreenSplitShowcase,
} from "./BrandLogos";
import { CinematicBroadcastFrame } from "./BroadcastFrame";

// SCENE 13: Codename Cappuccino Reveal (Frames 1500 - 1620)
export const Scene13CodenameCappuccino: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 120], [0.95, 1.05]);

  return (
    <AbsoluteFill style={{ scale }}>
      <FullScreenTechBg primaryColor="#D97706" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}>
          <div>
            <div
              style={{
                fontSize: 115,
                fontWeight: 900,
                color: "#FFFFFF",
                textShadow: "0 0 50px rgba(245, 158, 11, 0.5)",
                letterSpacing: -2,
                lineHeight: 1,
              }}
            >
              CAPPUCCINO
            </div>
            <div style={{ fontSize: 36, color: "#E2E8F0", marginTop: 20 }}>Google's Next Flagship AI Architecture</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { label: "INTERNAL LEAK ID", val: "CAPPUCCINO-EVAL-09" },
              { label: "ARCHITECTURE TYPE", val: "HYBRID MoE + REASONING" },
              { label: "TEST ENVIRONMENT", val: "CLOSED DOOR ENTERPRISE" },
            ].map((box, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1px solid rgba(217, 119, 6, 0.4)",
                  padding: "28px 36px",
                  borderRadius: 22,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 24, color: "#94A3B8" }}>{box.label}</span>
                <span style={{ fontSize: 26, fontWeight: 800, color: "#F59E0B" }}>{box.val}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 14: Energy Surge Animation (Frames 1620 - 1734)
export const Scene14EnergySurge: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [0, 114], [20, 80]);

  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FF2E63" secondaryColor="#FFD700" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "radial-gradient(circle, rgba(255, 46, 99, 0.25) 0%, rgba(15, 23, 42, 0.95) 80%)",
              border: "2px solid #FF2E63",
              borderRadius: 36,
              padding: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: `0 0 ${glow}px #FF2E63`,
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.15 }}>MASSIVE PARAMETER SURGE</div>
            <div style={{ fontSize: 28, color: "#CBD5E1", marginTop: 18 }}>Frontier Architecture Overhaul</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
            {[
              { title: "EXASCALE TRAINING PODS", stat: "TPU v6E HYPERCLUSTERS" },
              { title: "ROUTING EFFICIENCY", stat: "3X ACTIVE PARAMETERS" },
              { title: "LATENCY REDUCTION", stat: "-42% TTFT LATENCY" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: 22,
                  padding: "28px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>{row.title}</span>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#FF2E63", fontFamily: "monospace" }}>{row.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 15: Deep Context Infinity Stack (Frames 1734 - 1884)
export const Scene15ContextTunnel: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#8A2BE2" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          {[
            { title: "CODEBASE INGESTION", desc: "Entire multi-repository projects indexed simultaneously", badge: "1,200+ FILES" },
            { title: "PERFECT RECALL", desc: "Needle-in-a-haystack accuracy maintained up to 2M tokens", badge: "99.8% RECALL" },
            { title: "CROSS-DOCUMENT REASONING", desc: "Synthesizes complex legal, medical & scientific dossiers", badge: "MULTI-MODAL" },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: "rgba(13, 17, 23, 0.92)",
                border: "2px solid #00F0FF",
                borderRadius: 28,
                padding: 42,
                boxShadow: "0 20px 50px rgba(0, 240, 255, 0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 380,
              }}
            >
              <div>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#FFFFFF", marginBottom: 16 }}>{card.title}</div>
                <div style={{ fontSize: 22, color: "#94A3B8", lineHeight: 1.6 }}>{card.desc}</div>
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "rgba(0, 240, 255, 0.15)",
                  color: "#00F0FF",
                  padding: "10px 24px",
                  borderRadius: 14,
                  fontFamily: "monospace",
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                {card.badge}
              </div>
            </div>
          ))}
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 16: Deep Thinking Mode Activation (Frames 1884 - 2033)
export const Scene16DeepThinkingMode: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 149], [0.96, 1.03]);

  return (
    <AbsoluteFill style={{ scale }}>
      <FullScreenTechBg primaryColor="#FFD700" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(15, 23, 42, 0.95))",
              border: "3px solid #FFD700",
              borderRadius: 36,
              padding: "60px",
              boxShadow: "0 0 60px rgba(255, 215, 0, 0.35)",
            }}
          >
            <div style={{ fontSize: 80, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1 }}>DEEP THINKING MODE</div>
            <div style={{ fontSize: 28, color: "#CBD5E1", marginTop: 18 }}>Multi-Step Verification &amp; Autonomous Planning Engine</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { label: "VERIFICATION CYCLES", val: "N-STEP SELF REFLECTION" },
              { label: "HALLUCINATION RATE", val: "-68% ERROR REDUCTION" },
              { label: "CODING PARITY", val: "AUTONOMOUS SANDBOX" },
            ].map((box, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(15, 23, 42, 0.9)",
                  border: "1px solid rgba(255, 215, 0, 0.4)",
                  padding: "28px 36px",
                  borderRadius: 22,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>{box.label}</span>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#FFD700", fontFamily: "monospace" }}>{box.val}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 17: Tree of Thoughts Graph (Frames 2033 - 2160)
export const Scene17ReasoningTree: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#4285F4" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          {[
            { step: "PHASE 1: DECONSTRUCTION", desc: "Deconstructs complex goals into verified sub-tasks & execution paths" },
            { step: "PHASE 2: TOOL ORCHESTRATION", desc: "Runs multi-step tool calls & dynamic sandbox code tests" },
            { step: "PHASE 3: SELF-CORRECTION", desc: "Verifies output accuracy against constraints before final return" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(13, 17, 23, 0.92)",
                border: "2px solid rgba(0, 240, 255, 0.45)",
                borderRadius: 28,
                padding: 42,
                boxShadow: "0 15px 40px rgba(0,0,0,0.7)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 340,
              }}
            >
              <div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#00F0FF", marginBottom: 16 }}>{item.step}</div>
                <div style={{ fontSize: 24, color: "#FFFFFF", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
              <div style={{ fontSize: 18, color: "#34D399", fontWeight: 700 }}>● VERIFIED PASS</div>
            </div>
          ))}
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 18: Widescreen Full-Width Benchmark Chart (Frames 2160 - 2295)
export const Scene18BenchmarkChart: React.FC = () => {
  const frame = useCurrentFrame();
  const w1 = interpolate(frame, [0, 60], [0, 100], { easing: Easing.out(Easing.cubic) });
  const w2 = interpolate(frame, [0, 60], [0, 84], { easing: Easing.out(Easing.cubic) });
  const w3 = interpolate(frame, [0, 60], [0, 78], { easing: Easing.out(Easing.cubic) });

  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#34D399" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "0.85fr 1.35fr", gap: 50, alignItems: "center" }}>
          <div
            style={{
              background: "rgba(15, 23, 42, 0.92)",
              border: "2px solid #00F0FF",
              borderRadius: 28,
              padding: 48,
              boxShadow: "0 20px 50px rgba(0, 240, 255, 0.2)",
            }}
          >
            <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.15, marginBottom: 20 }}>
              LEAKED TEST RUNS SHOW CLEAR DOMINANCE
            </div>
            <div style={{ fontSize: 24, color: "#94A3B8", lineHeight: 1.6 }}>
              Gemini 3.5 Pro consistently outperforms leading models across demanding technical and multi-step reasoning evaluations.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            {[
              { label: "GEMINI 3.5 PRO", score: "98.4%", widthPct: w1, color: "#00F0FF" },
              { label: "CLAUDE FABLE 5", score: "91.6%", widthPct: w2, color: "#34D399" },
              { label: "OPENAI GPT-5.6", score: "89.2%", widthPct: w3, color: "#94A3B8" },
            ].map((bar, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(13, 17, 23, 0.9)",
                  border: `1px solid ${bar.color}55`,
                  borderRadius: 22,
                  padding: "26px 34px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                  <span style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>{bar.label}</span>
                  <span style={{ fontSize: 30, fontWeight: 900, color: bar.color, fontFamily: "monospace" }}>{bar.score}</span>
                </div>
                <div style={{ width: "100%", height: 18, background: "rgba(255,255,255,0.08)", borderRadius: 9, overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${bar.widthPct}%`,
                      height: "100%",
                      background: bar.color,
                      boxShadow: `0 0 15px ${bar.color}`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 19: Code & WebDev Showcase (Frames 2295 - 2430)
export const Scene19CodeShowcase: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#8A2BE2" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "#080A10",
              border: "2px solid #00F0FF",
              borderRadius: 28,
              padding: 46,
              fontFamily: "monospace",
              boxShadow: "0 20px 50px rgba(0, 240, 255, 0.2)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", color: "#FFFFFF", marginBottom: 20, fontSize: 22, fontWeight: 800 }}>
              <span>REACT + WEBGL ENGINE</span>
              <span style={{ color: "#00F0FF" }}>97.9%</span>
            </div>
            <div style={{ fontSize: 24, color: "#34D399", lineHeight: 1.8 }}>
              &gt; Generating full-stack dashboard... <br />
              &gt; Verified against modern design tokens... <br />
              &gt; Performance: Instant production build pass
            </div>
          </div>

          <div
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "2px solid #8A2BE2",
              borderRadius: 28,
              padding: 46,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginBottom: 16 }}>HUMAN-LEVEL DESIGN QUALITY</div>
              <div style={{ fontSize: 22, color: "#94A3B8", lineHeight: 1.6 }}>
                Produces rich typography, harmonious palettes, and responsive interfaces without manual tweaking.
              </div>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ background: "#34D39922", border: "1px solid #34D399", color: "#34D399", padding: "12px 26px", borderRadius: 14, fontWeight: 800, fontSize: 18 }}>
                UI PASSED
              </div>
              <div style={{ background: "#00F0FF22", border: "1px solid #00F0FF", color: "#00F0FF", padding: "12px 26px", borderRadius: 14, fontWeight: 800, fontSize: 18 }}>
                WEBGL ACTIVE
              </div>
            </div>
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 20: SVG & Autonomous Agent Matrix (Frames 2430 - 2565)
export const Scene20SVGAgents: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FFD700" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "2px solid #FFD700",
              borderRadius: 28,
              padding: 48,
              boxShadow: "0 20px 50px rgba(255, 215, 0, 0.2)",
            }}
          >
            <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", marginBottom: 18 }}>Flawless Vector Infographics</div>
            <div style={{ fontSize: 24, color: "#94A3B8", lineHeight: 1.6 }}>
              Generates complex diagrams, architectural layouts, and charts with clean vector coordinates on the first attempt.
            </div>
          </div>

          <div
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "2px solid #00F0FF",
              borderRadius: 28,
              padding: 48,
              boxShadow: "0 20px 50px rgba(0, 240, 255, 0.2)",
            }}
          >
            <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", marginBottom: 18 }}>Long-Horizon Agent Tasks</div>
            <div style={{ fontSize: 24, color: "#94A3B8", lineHeight: 1.6 }}>
              Can autonomously plan, code, test, and deploy multi-file software repositories across extended workflows.
            </div>
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 21: UI/UX Transformation Split (Frames 2565 - 2724)
export const Scene21UIUXSplit: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#8A2BE2" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "2px solid #8A2BE2",
              borderRadius: 32,
              padding: 50,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.15 }}>STUNNING USER-FACING OUTPUTS</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", lineHeight: 1.6 }}>
              No more plain generic layouts. Built-in design system adherence creates premium interfaces out of the box.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
            {[
              { tag: "DYNAMIC ANIMATIONS", val: "Micro-interactions & 60fps springs" },
              { tag: "CURATED PALETTES", val: "Harmonious HSL dark mode contrast" },
              { tag: "RESPONSIVE GRIDS", val: "Full widescreen layout utilization" },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  borderRadius: 22,
                  padding: "28px 38px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>{card.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 22: LMArena Leaderboard Radar (Frames 2724 - 2865)
export const Scene22LMArenaRadar: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#34D399" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <FullScreenSplitShowcase
          logo={<LMArenaLogoSVG size={110} />}
          brandName="LMArena Leaderboard"
          tagline="Leaked Build Surging to #1 ELO Rank"
          accentColor="#34D399"
          highlights={[
            { title: "Overall Arena Elo", desc: "Consistently ranking above all existing public frontier models", metric: "1485 ELO" },
            { title: "Coding & Agent Elo", desc: "Dominating software engineering & autonomous task benchmarks", metric: "#1 RANK" },
            { title: "Multi-Turn Conversation", desc: "Zero context degradation across 50+ back-and-forth turns", metric: "+18 GAP" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 23: Anti-Gravity Platform Portal (Frames 2865 - 3045)
export const Scene23AntiGravityPortal: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#4285F4" />
      <CinematicBroadcastFrame>
        <FullScreenSplitShowcase
          logo={<GoogleLogoSVG size={110} />}
          brandName="Google Anti-Gravity"
          tagline="Next-Gen Agentic Coding Engine"
          accentColor="#00F0FF"
          highlights={[
            { title: "Full Repository Workspace", desc: "Multi-file awareness across complex enterprise architectures", metric: "2M TOKENS" },
            { title: "Deep Verification Loop", desc: "Automated linting, building, and self-repair capabilities", metric: "ZERO BUG" },
            { title: "Enterprise Integration", desc: "Seamless pipeline orchestration & deployment workflows", metric: "READY" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 24: Claude Fable 5 Badge (Frames 3045 - 3180)
export const Scene24ClaudeFable5: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#F59E0B" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame>
        <FullScreenSplitShowcase
          logo={<ClaudeLogoSVG size={110} />}
          brandName="Anthropic Claude Fable 5"
          tagline="Previous Ultimate Benchmark Target Cleared"
          accentColor="#F59E0B"
          highlights={[
            { title: "Direct Peer Comparison", desc: "Tested across identical complex software engineering suites", metric: "BEATEN" },
            { title: "Reasoning Margin", desc: "Gemini 3.5 Pro achieves clear separation in multi-step planning", metric: "+6.8%" },
            { title: "Long-Horizon Execution", desc: "Sustained accuracy over extended developer trajectories", metric: "SUPERIOR" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};
