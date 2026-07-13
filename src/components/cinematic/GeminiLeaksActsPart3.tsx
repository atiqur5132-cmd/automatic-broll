import React from "react";
import { AbsoluteFill } from "remotion";
import { FullScreenTechBg } from "./GeminiLeaksActsPart1";
import {
  GoogleLogoSVG,
  GeminiLogoSVG,
  OpenAILogoSVG,
  FullScreenSplitShowcase,
} from "./BrandLogos";
import { CinematicBroadcastFrame } from "./BroadcastFrame";

// SCENE 25: Benchmark Score Jump (Frames 3180 - 3300)
export const Scene25BenchmarkJump: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#34D399" />
      <CinematicBroadcastFrame category="REASONING PERFORMANCE // REVOLUTIONARY GAINS">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.95)",
              border: "3px solid #00F0FF",
              borderRadius: 36,
              padding: "50px 70px",
              textAlign: "center",
              boxShadow: "0 0 70px rgba(0, 240, 255, 0.35)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 24, color: "#00F0FF", fontFamily: "monospace", marginBottom: 15 }}>BENCHMARK LEAP</div>
            <div style={{ fontSize: 96, fontWeight: 900, color: "#FFFFFF" }}>+18.4%</div>
            <div style={{ fontSize: 26, color: "#CBD5E1", marginTop: 15 }}>Over Gemini 3.1 Pro across complex reasoning tasks</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
            {[
              { domain: "ADVANCED MATH & LOGIC", gain: "+22.1% GAIN" },
              { domain: "MULTI-STEP CODING EVALS", gain: "+19.8% GAIN" },
              { domain: "SCIENTIFIC REASONING", gain: "+13.3% GAIN" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(0, 240, 255, 0.35)",
                  borderRadius: 24,
                  padding: "28px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>{row.domain}</span>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#00F0FF", fontFamily: "monospace" }}>{row.gain}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 26: Twitter Insider Social Feed (Frames 3300 - 3450)
export const Scene26SocialFeed: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#4285F4" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="INSIDER COMMUNITY FEED // LEAK BULLETIN">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.95)",
              border: "2px solid #4285F4",
              borderRadius: 32,
              padding: 50,
              boxShadow: "0 25px 80px rgba(66, 133, 244, 0.3)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#4285F4", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: 28, color: "#FFF" }}>
                X
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>AI Frontier Insider</div>
                <div style={{ fontSize: 18, color: "#94A3B8" }}>@AI_Insider_Leaks • Just now</div>
              </div>
            </div>
            <div style={{ fontSize: 30, color: "#E2E8F0", lineHeight: 1.6 }}>
              "Closed-door evals for Gemini 3.5 Pro (Cappuccino) are off the charts. It's consistently beating Fable 5 &amp; GPT-5.6 across real production tasks."
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              { metric: "COMMUNITY ENGAGEMENT", val: "48.2K REPOSTS" },
              { metric: "VERIFICATION STATUS", val: "CORROBORATED BY LABS" },
              { metric: "DEVELOPER SENTIMENT", val: "BULLISH EXTREME" },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(66, 133, 244, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF" }}>{card.metric}</span>
                <span style={{ fontSize: 22, fontWeight: 800, color: "#00F0FF", fontFamily: "monospace" }}>{card.val}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 27: Victory Scorecard Card (Frames 3450 - 3600)
export const Scene27VictoryScorecard: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#34D399" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="FRONTIER SCORECARD // HEAD-TO-HEAD RESULTS">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, width: 1760 }}>
          <div style={{ background: "rgba(15,23,42,0.9)", border: "2px solid #34D399", borderRadius: 28, padding: 50, textAlign: "center" }}>
            <div style={{ fontSize: 20, color: "#34D399", fontFamily: "monospace" }}>VS CLAUDE FABLE 5</div>
            <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", margin: "20px 0" }}>VICTORY</div>
            <div style={{ fontSize: 26, color: "#E2E8F0" }}>+6.8% in Autonomous Agent &amp; Coding Benchmarks</div>
          </div>
          <div style={{ background: "rgba(15,23,42,0.9)", border: "2px solid #00F0FF", borderRadius: 28, padding: 50, textAlign: "center" }}>
            <div style={{ fontSize: 20, color: "#00F0FF", fontFamily: "monospace" }}>VS OPENAI GPT-5.6</div>
            <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", margin: "20px 0" }}>VICTORY</div>
            <div style={{ fontSize: 26, color: "#E2E8F0" }}>+4.2% in Multi-Step Deep Reasoning</div>
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 28: OpenAI Clash (Frames 3600 - 3735)
export const Scene28OpenAIClash: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FF2E63" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="FRONTIER DOMINANCE // OPENAI VS GOOGLE">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 0.2fr 1fr", gap: 30, alignItems: "center" }}>
          <div
            style={{
              background: "rgba(15, 23, 42, 0.92)",
              border: "2px solid #10A37F",
              borderRadius: 32,
              padding: 50,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <OpenAILogoSVG size={110} />
            <div style={{ fontSize: 38, fontWeight: 900, color: "#FFFFFF" }}>OpenAI GPT-5.6</div>
            <div style={{ fontSize: 22, color: "#10A37F", fontWeight: 700 }}>PREVIOUS INDUSTRY BENCHMARK</div>
          </div>

          <div style={{ textAlign: "center", fontSize: 52, fontWeight: 900, color: "#FF2E63" }}>VS</div>

          <div
            style={{
              background: "linear-gradient(145deg, rgba(0, 240, 255, 0.25), rgba(15, 23, 42, 0.95))",
              border: "3px solid #00F0FF",
              borderRadius: 32,
              padding: 50,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              boxShadow: "0 0 50px rgba(0, 240, 255, 0.35)",
            }}
          >
            <GeminiLogoSVG size={110} />
            <div style={{ fontSize: 38, fontWeight: 900, color: "#FFFFFF" }}>Gemini 3.5 Pro</div>
            <div style={{ fontSize: 22, color: "#00F0FF", fontWeight: 700 }}>NEW FRONT-RUNNER ARCHITECTURE</div>
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 29: Architecture Leap Engine Diagram (Frames 3735 - 3893)
export const Scene29ArchitectureLeap: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#8A2BE2" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="CORE ENGINE // HYBRID MoE + REASONING">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.92)",
              border: "2px solid #8A2BE2",
              borderRadius: 32,
              padding: "55px 70px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, color: "#8A2BE2", fontFamily: "monospace", marginBottom: 15 }}>HYBRID MoE + REASONING PIPELINE</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>ARCHITECTURAL LEAP</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Not just raw scaling—smarter dynamic routing &amp; verification</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { title: "DYNAMIC EXPERT SELECTION", desc: "Activates only the most specialized parameter paths per prompt" },
              { title: "INTEGRATED REASONING CORE", desc: "Continuous reflection layer prevents reasoning shortcuts" },
              { title: "HIGH THROUGHPUT SERVING", desc: "Low token latency despite massive internal parameter volume" },
            ].map((box, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(138, 43, 226, 0.35)",
                  borderRadius: 22,
                  padding: "24px 34px",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>{box.title}</div>
                <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 6 }}>{box.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 30: World Network Map Visualization (Frames 3893 - 4037)
export const Scene30WorldNetwork: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#34D399" />
      <CinematicBroadcastFrame category="GLOBAL INFRASTRUCTURE // WORLDWIDE NETWORK">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.92)",
              border: "2px solid #00F0FF",
              borderRadius: 32,
              padding: "55px 70px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, color: "#00F0FF", fontFamily: "monospace", marginBottom: 15 }}>GLOBAL TPUs CONNECTED</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>WORLDWIDE AI NETWORK</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Powering low-latency global deployment</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { region: "NORTH AMERICA PODS", status: "ONLINE // LOW LATENCY" },
              { region: "EUROPEAN SUPERCLUSTERS", status: "ONLINE // FULL CAPACITY" },
              { region: "ASIA-PACIFIC NODES", status: "ONLINE // HIGH THROUGHPUT" },
            ].map((node, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(0, 240, 255, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>{node.region}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#34D399", fontFamily: "monospace" }}>{node.status}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 31: No Catch-up Narrative Card (Frames 4037 - 4176)
export const Scene31NoCatchup: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FFD700" secondaryColor="#FF2E63" />
      <CinematicBroadcastFrame category="STRATEGIC SHIFT // GOOGLE LEADERSHIP">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.92)",
              border: "2px solid #FFD700",
              borderRadius: 32,
              padding: "55px 70px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, color: "#FFD700", fontFamily: "monospace", marginBottom: 15 }}>PARADIGM SHIFT</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>NO LONGER PLAYING CATCH-UP</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Setting the pace for the entire AI industry</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { title: "PROACTIVE FRONTIER TARGETS", desc: "Architecting capabilities ahead of rival release cycles" },
              { title: "PROPRIETARY TPU DOMINANCE", desc: "No dependency on external third-party GPU constraints" },
              { title: "ENTERPRISE ECOSYSTEM", desc: "Seamless integration across Google Workspace and Cloud" },
            ].map((box, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(255, 215, 0, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>{box.title}</div>
                <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 6 }}>{box.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 32: Leapfrog Visual Arrow Card (Frames 4176 - 4320)
export const Scene32Leapfrog: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#34D399" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="FRONTIER TRAJECTORY // LEAPFROGGING THE RIVALS">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.92)",
              border: "2px solid #34D399",
              borderRadius: 32,
              padding: "55px 70px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, color: "#34D399", fontFamily: "monospace", marginBottom: 15 }}>FRONTIER TRAJECTORY</div>
            <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF" }}>LEAPFROGGING THE RIVALS</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Directly targeting state-of-the-art dominance</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { label: "TARGETING GPT-5.6 ELO", status: "LEAPFROGGED (+4.2%)" },
              { label: "TARGETING FABLE 5 CODING", status: "LEAPFROGGED (+6.8%)" },
              { label: "LONG CONTEXT LATENCY", status: "LEAPFROGGED (2M FAST)" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(52, 211, 153, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>{row.label}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#34D399", fontFamily: "monospace" }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 33: Private Validation Badge (Frames 4320 - 4474)
export const Scene33PrivateValidation: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#8A2BE2" />
      <CinematicBroadcastFrame category="ENTERPRISE EVALUATION // CLOSED BETA RESULTS">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.92)",
              border: "2px solid #00F0FF",
              borderRadius: 32,
              padding: "55px 70px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, color: "#00F0FF", fontFamily: "monospace", marginBottom: 15 }}>CLOSED BETA RESULTS</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>PRIVATE VALIDATION SUCCESS</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Verified by select enterprise AI partners</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { partner: "FORTUNE 100 CLOUD PARTNERS", feedback: "PASSED STABILITY SUITE" },
              { partner: "LEADING CODE GENERATION LABS", feedback: "TOP PREFERENCE RATING" },
              { partner: "ENTERPRISE SECURITY HARNESS", feedback: "ZERO DATA LEAKAGE" },
            ].map((box, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(0, 240, 255, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>{box.partner}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#00F0FF", fontFamily: "monospace" }}>{box.feedback}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 34: When Launch Card (Frames 4474 - 4605)
export const Scene34WhenLaunch: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FFD700" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="ROADMAP TRACKER // GOOGLE PUBLIC ACCESS">
        <FullScreenSplitShowcase
          logo={<GoogleLogoSVG size={110} />}
          brandName="Google Launch Roadmap"
          tagline="When Does The World Get Access?"
          accentColor="#FFD700"
          highlights={[
            { title: "Closed-Door Alpha", desc: "Currently running with key developer & enterprise partners", metric: "COMPLETED" },
            { title: "Public Release Window", desc: "Expected official keynote announcement this month", metric: "JULY 2026" },
            { title: "API General Availability", desc: "Immediate access through Google AI Studio & Vertex AI", metric: "SCHEDULED" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 35: TPU Cluster Compute Power Visual (Frames 4605 - 4757)
export const Scene35TPUCluster: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#4285F4" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="HARDWARE ARCHITECTURE // TPU v6E PODS">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.92)",
              border: "2px solid #4285F4",
              borderRadius: 32,
              padding: "55px 70px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 20, color: "#4285F4", fontFamily: "monospace", marginBottom: 15 }}>INFRASTRUCTURE BACKBONE</div>
            <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF" }}>CUSTOM TPU v6E PODS</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Unrivaled hardware throughput for 2M token processing</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { spec: "INTERCONNECT BANDWIDTH", val: "4.8 TB/s BI-DIRECTIONAL" },
              { spec: "ENERGY EFFICIENCY", val: "+65% PERFORMANCE / WATT" },
              { spec: "MOE ROUTING SPEED", val: "SUB-MILLISECOND HOP" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(66, 133, 244, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>{row.spec}</span>
                <span style={{ fontSize: 22, fontWeight: 800, color: "#00F0FF", fontFamily: "monospace" }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 36: Target Release Date Card (Frames 4757 - 4890)
export const Scene36TargetJuly: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#FFD700" />
      <CinematicBroadcastFrame category="LAUNCH COUNTDOWN // TARGET JULY 2026">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.95)",
              border: "3px solid #FFD700",
              borderRadius: 36,
              padding: "60px 80px",
              textAlign: "center",
              boxShadow: "0 0 70px rgba(255, 215, 0, 0.35)",
            }}
          >
            <div style={{ fontSize: 22, color: "#FFD700", fontFamily: "monospace", marginBottom: 15 }}>MARK YOUR CALENDAR</div>
            <div style={{ fontSize: 88, fontWeight: 900, color: "#FFFFFF" }}>JULY 2026 ROLLOUT</div>
            <div style={{ fontSize: 26, color: "#CBD5E1", marginTop: 15 }}>Public rollout window approaching rapidly</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              { milestone: "OFFICIAL BLOG POST", status: "READY FOR PUBLICATION" },
              { milestone: "DEVELOPER KEYNOTE", status: "SCHEDULED THIS MONTH" },
              { milestone: "VERTEX AI PREVIEW", status: "INSTANT ACCESS ON LAUNCH" },
            ].map((box, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(255, 215, 0, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF" }}>{box.milestone}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#00F0FF", fontFamily: "monospace" }}>{box.status}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};
