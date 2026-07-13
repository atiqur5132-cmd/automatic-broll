import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { FullScreenTechBg } from "./GeminiLeaksActsPart1";
import {
  GeminiLogoSVG,
  DeepMindLogoSVG,
  PolymarketLogoSVG,
  FullScreenSplitShowcase,
} from "./BrandLogos";
import { CinematicBroadcastFrame } from "./BroadcastFrame";

// SCENE 37: Developer Community Grid (Frames 4890 - 5040)
export const Scene37DevCommunity: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#8A2BE2" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="DEVELOPER SENTIMENT // GLOBAL COMMUNITY FEED">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
          {[
            { tag: "DISCORD // REDDIT", title: "HYPER-ANTICIPATION", desc: "Dev communities tracking every internal commit & LMArena rank movement." },
            { tag: "GITHUB INSIDERS", title: "API SDK PREP", desc: "Open-source libraries already staging Cappuccino v3.5 endpoints." },
            { tag: "BENCHMARK LABS", title: "INDEPENDENT VERIFICATION", desc: "Third-party evals ready to validate the +18% reasoning leap." },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: "rgba(13, 17, 23, 0.92)",
                border: "2px solid #8A2BE2",
                borderRadius: 28,
                padding: 42,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 340,
              }}
            >
              <div>
                <div style={{ fontSize: 16, color: "#00F0FF", fontFamily: "monospace", marginBottom: 12 }}>{card.tag}</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#FFFFFF", marginBottom: 14 }}>{card.title}</div>
                <div style={{ fontSize: 20, color: "#94A3B8", lineHeight: 1.6 }}>{card.desc}</div>
              </div>
              <div style={{ fontSize: 16, color: "#34D399", fontFamily: "monospace" }}>● STATUS: VERIFIED ACTIVE</div>
            </div>
          ))}
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 38: Polymarket Live Odds Card (Frames 5040 - 5175)
export const Scene38PolymarketOdds: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#2563EB" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="PREDICTION MARKET // LIVE BETTING ODDS">
        <FullScreenSplitShowcase
          logo={<PolymarketLogoSVG size={110} />}
          brandName="Polymarket Market Odds"
          tagline="Prediction Market Implied Probability Surge"
          accentColor="#00F0FF"
          highlights={[
            { title: "Market: Gemini 3.5 Released By July?", desc: "Traders aggressively buying YES shares on immediate release", metric: "84% YES" },
            { title: "24h Trading Volume", desc: "Surging liquidity on Google AI launch prediction contracts", metric: "$4.2M VOL" },
            { title: "Market Consensus", desc: "Overwhelming confidence in an imminent keynote announcement", metric: "BULLISH" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 39: Odds Surge Chart (Frames 5175 - 5333)
export const Scene39OddsSurge: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#34D399" />
      <CinematicBroadcastFrame category="PREDICTION CHART // PROBABILITY TRAJECTORY">
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
            <div style={{ fontSize: 20, color: "#00F0FF", fontFamily: "monospace", marginBottom: 15 }}>IMPLIED MARKET PROBABILITY</div>
            <div style={{ fontSize: 88, fontWeight: 900, color: "#FFFFFF" }}>SURGE TO 84%</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Up from 32% just two weeks ago</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { time: "JUNE 1", prob: "32% PROBABILITY" },
              { time: "JUNE 20", prob: "58% PROBABILITY" },
              { time: "NOW (EARLY JULY)", prob: "84% PROBABILITY" },
            ].map((row, i) => (
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
                <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>{row.time}</span>
                <span style={{ fontSize: 26, fontWeight: 800, color: "#34D399", fontFamily: "monospace" }}>{row.prob}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 40: What to Expect Breakdown (Frames 5333 - 5475)
export const Scene40DeepMindSocial: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FFD700" secondaryColor="#4285F4" />
      <CinematicBroadcastFrame category="RELEASE BREAKDOWN // FEATURE EXPECTATIONS">
        <FullScreenSplitShowcase
          logo={<DeepMindLogoSVG size={110} />}
          brandName="Google DeepMind Specifications"
          tagline="What Developers Can Expect on Day 1"
          accentColor="#FFD700"
          highlights={[
            { title: "True Multi-Step Verification", desc: "Built-in autonomous self-correction mode for zero-shot tasks", metric: "VERIFIED" },
            { title: "Production 2M Context", desc: "Flawless multi-document & repository reasoning without latency penalty", metric: "2M TOKENS" },
            { title: "Immediate API Availability", desc: "Direct endpoint rollouts across Google Cloud & AI Studio", metric: "DAY 1 ACCESS" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 41: Multi-Modal Code Dashboard (Frames 5475 - 5640)
export const Scene41Recap1: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#8A2BE2" />
      <CinematicBroadcastFrame category="MULTI-MODAL ENGINE // UNIFIED AUDIO VIDEO TEXT">
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
            <div style={{ fontSize: 20, color: "#00F0FF", fontFamily: "monospace", marginBottom: 15 }}>NATIVE MULTI-MODAL REASONING</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>ALL MODALITIES IN 1</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Simultaneous video, voice, code, and diagram comprehension</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { mod: "HIGH FRAME-RATE VIDEO", status: "REAL-TIME STREAM INGESTION" },
              { mod: "FULL CODEBASE PARSER", status: "SYNTAX TREE AWARENESS" },
              { mod: "VOICE & AUDIO SPECTRUM", status: "ZERO-LATENCY PROCESSING" },
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
                <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>{box.mod}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#34D399", fontFamily: "monospace" }}>{box.status}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 42: Production Deployment Pipeline (Frames 5640 - 5800)
export const Scene42Recap2: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#34D399" secondaryColor="#00F0FF" />
      <CinematicBroadcastFrame category="ENTERPRISE DEPLOYMENT // PRODUCTION PIPELINES">
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
            <div style={{ fontSize: 20, color: "#34D399", fontFamily: "monospace", marginBottom: 15 }}>ENTERPRISE DEPLOYMENT</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>PRODUCTION SCALE</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Built for mission-critical enterprise workloads</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { title: "AUTOMATED CI/CD VERIFICATION", val: "NATIVE COMPATIBILITY" },
              { title: "ENTERPRISE PRIVACY & SLA", val: "99.99% UPTIME GUARANTEE" },
              { title: "LOW TTFT LATENCY", val: "OPTIMIZED SERVING" },
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
                <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>{row.title}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#34D399", fontFamily: "monospace" }}>{row.val}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 43: Final AI Race Horizon (Frames 5800 - 5980)
export const Scene43Recap3: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#8A2BE2" secondaryColor="#FF2E63" />
      <CinematicBroadcastFrame category="AI FRONTIER RACE // THE NEW LANDSCAPE">
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
            <div style={{ fontSize: 20, color: "#8A2BE2", fontFamily: "monospace", marginBottom: 15 }}>AI RACE LANDSCAPE</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>THE FRONTIER RE-DEFINED</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Google takes the definitive capability lead</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { aspect: "REASONING BENCHMARKS", lead: "GOOGLE GEMINI 3.5 PRO" },
              { aspect: "LONG CONTEXT CAPACITY", lead: "GOOGLE (2M TOKENS)" },
              { aspect: "ENTERPRISE ECOSYSTEM", lead: "UNIFIED VERTEX AI" },
            ].map((box, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(138, 43, 226, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>{box.aspect}</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#00F0FF", fontFamily: "monospace" }}>{box.lead}</span>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 44: Hero Title Reprise (Frames 5980 - 6180)
export const Scene44GrandFinale: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#4285F4" />
      <CinematicBroadcastFrame category="FLAGSHIP ARCHITECTURE // GEMINI 3.5 PRO">
        <FullScreenSplitShowcase
          logo={<GeminiLogoSVG size={110} />}
          brandName="Gemini 3.5 Pro"
          tagline="Codename Cappuccino: The Next Frontier"
          accentColor="#00F0FF"
          highlights={[
            { title: "2 Million Token Window", desc: "Longest unified production memory with near 100% recall", metric: "2M TOKENS" },
            { title: "Deep Thinking Mode", desc: "Autonomous self-reflection and multi-step reasoning engine", metric: "ACTIVE" },
            { title: "July Public Rollout", desc: "Scheduled release window for worldwide developer access", metric: "JULY 2026" },
          ]}
        />
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 45: Call To Action Subscribe Card (Frames 6180 - 6340)
export const Scene45CommunityPoll: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#FF2E63" secondaryColor="#FFD700" />
      <CinematicBroadcastFrame category="COMMUNITY CHANNEL // SUBSCRIBE & TRACK">
        <div style={{ width: 1760, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }}>
          <div
            style={{
              background: "rgba(13, 17, 23, 0.95)",
              border: "3px solid #FF2E63",
              borderRadius: 36,
              padding: "60px 80px",
              textAlign: "center",
              boxShadow: "0 0 70px rgba(255, 46, 99, 0.35)",
            }}
          >
            <div style={{ fontSize: 22, color: "#FFD700", fontFamily: "monospace", marginBottom: 15 }}>STAY ON THE FRONTIER</div>
            <div style={{ fontSize: 84, fontWeight: 900, color: "#FFFFFF" }}>SUBSCRIBE &amp; TURN ON NOTIFICATIONS</div>
            <div style={{ fontSize: 26, color: "#CBD5E1", marginTop: 15 }}>Never miss a breaking AI intelligence brief</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              { perk: "INSTANT BENCHMARK BREAKDOWNS", desc: "Deep technical analysis the moment models drop" },
              { perk: "EXCLUSIVE CODE & DEMOS", desc: "Hands-on projects with Gemini 3.5 & Agent engines" },
              { perk: "LIVE LEAK COVERAGE", desc: "Corroborated news directly from frontier AI labs" },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(255, 46, 99, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>{card.perk}</div>
                <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 6 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 46: Share & Comment Prompt (Frames 6340 - 6490)
export const Scene46CommentPrompt: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#8A2BE2" />
      <CinematicBroadcastFrame category="COMMUNITY DISCUSSION // JOIN THE CONVERSATION">
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
            <div style={{ fontSize: 20, color: "#00F0FF", fontFamily: "monospace", marginBottom: 15 }}>COMMUNITY DISCUSSION</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>WHAT ARE YOUR THOUGHTS?</div>
            <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 15 }}>Will Gemini 3.5 Pro stay #1 through 2026?</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22, justifyContent: "center" }}>
            {[
              { prompt: "DROP A COMMENT BELOW", sub: "Share your predictions on Claude & OpenAI's next move" },
              { prompt: "SHARE WITH DEVELOPERS", sub: "Send this briefing to your engineering team" },
              { prompt: "STAR THE REPO", sub: "Check video description for full benchmark sources" },
            ].map((box, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(15, 23, 42, 0.88)",
                  border: "1px solid rgba(0, 240, 255, 0.35)",
                  borderRadius: 22,
                  padding: "26px 36px",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>{box.prompt}</div>
                <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 6 }}>{box.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};

// SCENE 47: Outro Logo Fade Out (Frames 6490 - 6652)
export const Scene47OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 100, 162], [1, 1, 0]);

  return (
    <AbsoluteFill style={{ opacity }}>
      <FullScreenTechBg primaryColor="#00F0FF" secondaryColor="#4285F4" />
      <CinematicBroadcastFrame category="END OF BRIEFING // FRONTIER INTELLIGENCE">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 24 }}>
          <GeminiLogoSVG size={140} />
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              background: "linear-gradient(135deg, #FFFFFF 0%, #00F0FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: -2,
            }}
          >
            SEE YOU ON THE FRONTIER
          </div>
          <div style={{ fontSize: 28, color: "#94A3B8", fontFamily: "monospace" }}>DOCUMENTARY ID: GEMINI-35-LEAKS-2026</div>
        </div>
      </CinematicBroadcastFrame>
    </AbsoluteFill>
  );
};
