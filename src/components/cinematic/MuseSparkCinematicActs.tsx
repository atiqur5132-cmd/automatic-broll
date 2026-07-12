import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";
import { OpenAILogo, AnthropicLogo, MetaLogo } from "../design/BrandLogosSVG";

// Helper: 2.5D Parallax Camera Scene Wrapper
export const ParallaxCameraScene: React.FC<{
  children: React.ReactNode;
  zoomFrom?: number;
  zoomTo?: number;
  panX?: number;
  panY?: number;
}> = ({ children, zoomFrom = 1, zoomTo = 1.08, panX = 0, panY = 0 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(progress, [0, 1], [zoomFrom, zoomTo]);
  const translateX = interpolate(progress, [0, 1], [0, panX]);
  const translateY = interpolate(progress, [0, 1], [0, panY]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          transformOrigin: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Helper: Frosted Glass Card
export const GlassCard: React.FC<{
  children: React.ReactNode;
  glowColor?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  glowColor = "rgba(0, 240, 255, 0.15)",
  style = {},
}) => {
  return (
    <div
      style={{
        background: "rgba(14, 18, 28, 0.72)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.16)",
        borderRadius: "24px",
        boxShadow: `0 30px 80px rgba(0, 0, 0, 0.6), 0 0 45px ${glowColor}`,
        padding: "40px",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Helper: Kinetic Typography Title
export const KineticTitle: React.FC<{
  text: string;
  delayPerWord?: number;
  highlightWords?: string[];
  fontSize?: number;
}> = ({ text, delayPerWord = 3, highlightWords = [], fontSize = 58 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
        const isHighlighted = highlightWords.some((h) => cleanWord.toLowerCase().includes(h.toLowerCase()));
        const startFrame = index * delayPerWord;

        const enter = spring({
          frame: frame - startFrame,
          fps,
          config: { damping: 14, stiffness: 120 },
        });

        const translateY = (1 - enter) * 28;
        const opacity = enter;

        return (
          <span
            key={index}
            style={{
              display: "inline-block",
              transform: `translateY(${translateY}px)`,
              opacity,
              fontSize: `${fontSize}px`,
              fontFamily: "'Inter', sans-serif",
              color: isHighlighted ? "#00F0FF" : "#FFFFFF",
              textShadow: isHighlighted
                ? "0 0 25px rgba(0, 240, 255, 0.75)"
                : "none",
              fontWeight: isHighlighted ? 900 : 700,
              letterSpacing: "-0.03em",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

// Scene 01: Hook Card (0 - 102 frames)
export const Scene01Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 6) * 10;
  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12}>
      <GlassCard glowColor="rgba(255, 42, 84, 0.35)" style={{ maxWidth: 1050, textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 24px",
            borderRadius: 999,
            background: "rgba(255, 42, 84, 0.18)",
            border: "1px solid rgba(255, 42, 84, 0.5)",
            color: "#FF2A54",
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: "0.15em",
            marginBottom: 28,
            boxShadow: `0 0 ${15 + pulse}px rgba(255, 42, 84, 0.6)`,
          }}
        >
          🚨 BREAKING AI ALERT
        </div>
        <KineticTitle
          text="THE AI RACE JUST TOOK A MASSIVE UNEXPECTED TURN"
          highlightWords={["MASSIVE", "UNEXPECTED", "TURN"]}
          fontSize={60}
        />
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 02: Rivalry Grid Card (102 - 204 frames)
export const Scene02Rivalry: React.FC = () => {
  const frame = useCurrentFrame();
  const shake = Math.sin(frame * 0.8) * 4;
  return (
    <ParallaxCameraScene zoomFrom={1.05} zoomTo={1.0}>
      <div style={{ display: "flex", gap: 50, alignItems: "center", transform: `translateX(${shake}px)` }}>
        <GlassCard glowColor="rgba(16, 163, 127, 0.35)" style={{ width: 440, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <OpenAILogo size={100} color="#10A37F" />
          </div>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF" }}>OPENAI</div>
          <div style={{ fontSize: 18, color: "#FF5A5F", fontWeight: 700, marginTop: 12 }}>⚠️ THREAT DETECTED</div>
        </GlassCard>

        <GlassCard glowColor="rgba(217, 119, 87, 0.35)" style={{ width: 440, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <AnthropicLogo size={100} color="#D97757" />
          </div>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF" }}>ANTHROPIC</div>
          <div style={{ fontSize: 18, color: "#FF5A5F", fontWeight: 700, marginTop: 12 }}>⚠️ HIGH ALERT</div>
        </GlassCard>
      </div>
    </ParallaxCameraScene>
  );
};

// Scene 03: Meta Muse Spark 1.1 Reveal (204 - 315 frames)
export const Scene03MetaReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame, fps, config: { damping: 13, stiffness: 90 } });
  return (
    <ParallaxCameraScene zoomFrom={0.95} zoomTo={1.08}>
      <GlassCard
        glowColor="rgba(0, 164, 255, 0.5)"
        style={{
          width: 900,
          textAlign: "center",
          transform: `scale(${0.85 + enter * 0.15})`,
          opacity: enter,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <MetaLogo size={110} color="#00A4FF" />
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#00A4FF",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          META JUST DROPPED
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: "linear-gradient(135deg, #FFFFFF 0%, #00F0FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 40px rgba(0, 240, 255, 0.6)",
          }}
        >
          MUSE SPARK 1.1
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 04: Multimodal Architecture Inspection (315 - 410 frames)
export const Scene04Multimodal: React.FC = () => {
  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.1}>
      <GlassCard style={{ width: 1050 }}>
        <div style={{ fontSize: 22, color: "#00F0FF", fontWeight: 800, letterSpacing: "0.12em", marginBottom: 24 }}>
          REDEFINING MULTIMODAL REASONING
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {["HIGH-RES VISION", "SYSTEM LOGIC", "DESKTOP UI CONTROL"].map((label, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(0, 240, 255, 0.08)",
                border: "1px solid rgba(0, 240, 255, 0.35)",
                borderRadius: 16,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 10 }}>⚡</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>{label}</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 05: Not Just Poetry / Struck-Out Chatbot (410 - 541 frames)
export const Scene05NotPoetry: React.FC = () => {
  const frame = useCurrentFrame();
  const slashWidth = interpolate(frame, [10, 40], [0, 100], { extrapolateRight: "clamp" });
  return (
    <ParallaxCameraScene zoomFrom={1.05} zoomTo={1.0}>
      <GlassCard glowColor="rgba(255, 42, 84, 0.3)" style={{ width: 850, textAlign: "center", position: "relative" }}>
        <div style={{ fontSize: 24, color: "#A0A8B8", fontWeight: 700, marginBottom: 16 }}>
          OLD CHATBOT PARADIGM
        </div>
        <div style={{ fontSize: 44, fontWeight: 800, color: "#FFFFFF", marginBottom: 12 }}>
          "Writes Poetry & Summarizes PDFs"
        </div>
        {/* Red Strike-through Slash */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            width: `${slashWidth * 0.8}%`,
            height: 8,
            backgroundColor: "#FF2A54",
            transform: "rotate(-6deg)",
            boxShadow: "0 0 20px #FF2A54",
            borderRadius: 4,
          }}
        />
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 06-07: Desktop UI Takeover (541 - 785 frames)
export const Scene06DesktopTakeover: React.FC = () => {
  const frame = useCurrentFrame();
  const scanLineY = (frame * 6) % 360;
  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.15}>
      <GlassCard glowColor="rgba(0, 240, 255, 0.4)" style={{ width: 1100, padding: 30 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FF5F56" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FFBD2E" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#27C93F" }} />
          </div>
          <div style={{ color: "#00F0FF", fontWeight: 800, fontSize: 18, letterSpacing: "0.1em" }}>
            🖥️ AUTONOMOUS SCREEN TAKEOVER
          </div>
        </div>

        <div
          style={{
            background: "#080B11",
            borderRadius: 16,
            height: 340,
            border: "1px solid rgba(0, 240, 255, 0.25)",
            position: "relative",
            overflow: "hidden",
            padding: 24,
          }}
        >
          {/* Scanline */}
          <div
            style={{
              position: "absolute",
              top: scanLineY,
              left: 0,
              right: 0,
              height: 2,
              background: "linear-gradient(90deg, transparent, #00F0FF, transparent)",
              boxShadow: "0 0 15px #00F0FF",
            }}
          />

          <div style={{ fontFamily: "monospace", color: "#00F0FF", fontSize: 18, lineHeight: 1.8 }}>
            <div>$ muse-spark --target enterprise-workflow --mode autonomous</div>
            <div style={{ color: "#27C93F" }}>[✔] Desktop Environment Mapped (1920x1080 @ 60fps)</div>
            <div style={{ color: "#FFFFFF" }}>[{">"}] Navigating Complex Software Interfaces...</div>
            <div style={{ color: "#FFD700" }}>[{">"}] Resolving Enterprise Problems Natively...</div>
          </div>
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 08-10: Roadmap Breakdown Cards (785 - 1142 frames)
export const Scene08Roadmap: React.FC = () => {
  return (
    <ParallaxCameraScene zoomFrom={1.05} zoomTo={1.0}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30, width: 1280 }}>
        {[
          { title: "RAW BENCHMARKS", desc: "Crushing VALVE's AI Eval", color: "#00F0FF" },
          { title: "X DEMOS", desc: "Bulletproof Computer Use", color: "#FFD700" },
          { title: "DISRUPTIVE ECONOMICS", desc: "$1.25 / $4.25 Pricing Smash", color: "#27C93F" },
        ].map((item, idx) => (
          <GlassCard key={idx} glowColor={item.color} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, fontWeight: 900, color: item.color, marginBottom: 12 }}>0{idx + 1}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF", marginBottom: 10 }}>{item.title}</div>
            <div style={{ fontSize: 18, color: "#A0A8B8" }}>{item.desc}</div>
          </GlassCard>
        ))}
      </div>
    </ParallaxCameraScene>
  );
};

// Scene 11-15: VALVE's AI Benchmark & Zero Hallucination Shield (1142 - 1994 frames)
export const Scene11ValveBenchmark: React.FC = () => {
  const frame = useCurrentFrame();
  const barProgress = interpolate(frame, [0, 45], [0, 1], { extrapolateRight: "clamp" });
  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.1}>
      <GlassCard glowColor="rgba(0, 240, 255, 0.4)" style={{ width: 1150 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>VALVE'S AI BENCHMARKS</div>
          <div style={{ fontSize: 18, color: "#00F0FF", fontWeight: 800 }}>DOMAIN-SPECIFIC REASONING</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            { name: "MUSE SPARK 1.1", score: 94.8, color: "#00F0FF", isWinner: true },
            { name: "CLAUDE 3.5", score: 86.4, color: "#D97757", isWinner: false },
            { name: "GPT-4o / FIVE", score: 85.1, color: "#10A37F", isWinner: false },
            { name: "GROK 2", score: 82.0, color: "#A0A8B8", isWinner: false },
          ].map((model, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 200, fontSize: 20, fontWeight: 800, color: model.isWinner ? "#00F0FF" : "#FFFFFF" }}>
                {model.name}
              </div>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", height: 32, borderRadius: 8, overflow: "hidden" }}>
                <div
                  style={{
                    width: `${model.score * barProgress}%`,
                    height: "100%",
                    background: model.color,
                    boxShadow: model.isWinner ? "0 0 20px #00F0FF" : "none",
                  }}
                />
              </div>
              <div style={{ width: 80, fontSize: 22, fontWeight: 900, color: model.color }}>
                {(model.score * barProgress).toFixed(1)}%
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 36,
            padding: "16px 24px",
            background: "rgba(39, 201, 63, 0.15)",
            border: "1px solid rgba(39, 201, 63, 0.4)",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "#27C93F", fontWeight: 800, fontSize: 20 }}>🛡️ NEAR-ZERO HALLUCINATION RATE</div>
          <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 18 }}>Precision Tax & Medical Workflows</div>
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 16-18: Narrative Shatter (1994 - 2298 frames)
export const Scene16NarrativeShatter: React.FC = () => {
  return (
    <ParallaxCameraScene zoomFrom={1.08} zoomTo={1.0}>
      <GlassCard glowColor="rgba(255, 215, 0, 0.4)" style={{ width: 950, textAlign: "center" }}>
        <div style={{ fontSize: 22, color: "#FFD700", fontWeight: 800, letterSpacing: "0.15em", marginBottom: 20 }}>
          MYTH SHATTERED
        </div>
        <div style={{ fontSize: 46, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.3 }}>
          Open Weights Can't Compete With Elite Closed-Source?
        </div>
        <div
          style={{
            marginTop: 30,
            padding: "16px 32px",
            borderRadius: 999,
            background: "linear-gradient(90deg, #00A4FF, #00F0FF)",
            color: "#000000",
            fontWeight: 900,
            fontSize: 24,
            display: "inline-block",
          }}
        >
          META PROVED THEM WRONG
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 19-23: Computer Use HUD & Real-Time Screenshot Vision Loop (2298 - 3237 frames)
export const Scene19ComputerUseHUD: React.FC = () => {
  const frame = useCurrentFrame();
  const crossX = 140 + Math.sin(frame / 15) * 60;
  const crossY = 100 + Math.cos(frame / 15) * 40;
  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12}>
      <GlassCard glowColor="rgba(0, 240, 255, 0.45)" style={{ width: 1150 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>HYPER-ADVANCED COMPUTER USE</div>
          <div style={{ fontSize: 18, color: "#00F0FF", fontWeight: 800 }}>OPTIMIZED VISION LOOP</div>
        </div>

        <div
          style={{
            background: "#070A10",
            border: "1px solid rgba(0, 240, 255, 0.3)",
            borderRadius: 16,
            height: 360,
            position: "relative",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ padding: 16, background: "rgba(255,255,255,0.05)", borderRadius: 12, flex: 1 }}>
              <div style={{ fontSize: 16, color: "#A0A8B8" }}>Target Element</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF" }}>Enterprise CRM Dashboard</div>
            </div>
            <div style={{ padding: 16, background: "rgba(0, 240, 255, 0.1)", borderRadius: 12, flex: 1 }}>
              <div style={{ fontSize: 16, color: "#00F0FF" }}>Mapped UI Coordinates</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#00F0FF" }}>X: 1420 // Y: 840 // PRECISION LOCK</div>
            </div>
          </div>

          {/* Crosshair target overlay */}
          <div
            style={{
              position: "absolute",
              left: `${crossX}px`,
              top: `${crossY}px`,
              width: 50,
              height: 50,
              border: "2px solid #00F0FF",
              borderRadius: 8,
              boxShadow: "0 0 15px #00F0FF",
            }}
          />

          <div style={{ fontSize: 20, fontWeight: 700, color: "#27C93F" }}>
            ✔ Human-Like Precision // 0 Misclicks Detected
          </div>
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 24-26: Autonomous Self-Healing Error Resolution (3237 - 3755 frames)
export const Scene24SelfHealing: React.FC = () => {
  const frame = useCurrentFrame();
  const isPatched = frame > 25;
  return (
    <ParallaxCameraScene zoomFrom={1.08} zoomTo={1.0}>
      <GlassCard glowColor={isPatched ? "rgba(39, 201, 63, 0.45)" : "rgba(255, 90, 95, 0.45)"} style={{ width: 1050 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>AUTONOMOUS SELF-HEALING LOGIC</div>
          <div style={{ fontSize: 18, color: isPatched ? "#27C93F" : "#FF5A5F", fontWeight: 800 }}>
            {isPatched ? "✔ PATCH APPLIED AUTONOMOUSLY" : "⚠️ ERROR ENCOUNTERED"}
          </div>
        </div>

        <div style={{ background: "#090B12", borderRadius: 12, padding: 24, fontFamily: "monospace", fontSize: 18 }}>
          <div style={{ color: "#FF5A5F", marginBottom: 12 }}>
            [ERROR] API_CALL_FAILED: Unexpected response token on line 48
          </div>
          <div style={{ color: "#00F0FF", marginBottom: 12 }}>
            [MUSE SPARK] Inspecting console logs & background logic...
          </div>
          {isPatched && (
            <div style={{ color: "#27C93F", fontWeight: 700 }}>
              [SUCCESS] Background logic patched. Workflow resumed autonomously.
            </div>
          )}
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 27-32: Disruptive Economics & Pricing Smash (3755 - 4650 frames)
export const Scene27PricingSmash: React.FC = () => {
  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.12}>
      <GlassCard glowColor="rgba(39, 201, 63, 0.45)" style={{ width: 1200 }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 22, color: "#27C93F", fontWeight: 800, letterSpacing: "0.15em", marginBottom: 10 }}>
            THE REAL KILLER FEATURE
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF" }}>
            DISRUPTIVE ECONOMICS SHATTER ENTERPRISE PRICING
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
          {/* Legacy Top-Tier Models */}
          <div
            style={{
              background: "rgba(255, 90, 95, 0.1)",
              border: "2px solid rgba(255, 90, 95, 0.4)",
              borderRadius: 20,
              padding: 30,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 20, color: "#FF5A5F", fontWeight: 800, marginBottom: 16 }}>
              PROPRIETARY TOP-TIER MODELS
            </div>
            <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", marginBottom: 8 }}>$10 / $50</div>
            <div style={{ fontSize: 16, color: "#A0A8B8" }}>Per 1 Million Tokens (Input / Output)</div>
          </div>

          {/* Muse Spark 1.1 */}
          <div
            style={{
              background: "rgba(39, 201, 63, 0.15)",
              border: "2px solid #27C93F",
              borderRadius: 20,
              padding: 30,
              textAlign: "center",
              boxShadow: "0 0 30px rgba(39, 201, 63, 0.3)",
            }}
          >
            <div style={{ fontSize: 20, color: "#27C93F", fontWeight: 800, marginBottom: 16 }}>
              META MUSE SPARK 1.1
            </div>
            <div style={{ fontSize: 48, fontWeight: 900, color: "#00F0FF", marginBottom: 8 }}>$1.25 / $4.25</div>
            <div style={{ fontSize: 18, color: "#27C93F", fontWeight: 800 }}>87% COST REDUCTION</div>
          </div>
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 33-37: Massive AI Workforces & The Default Engine (4650 - 5484 frames)
export const Scene33DefaultEngine: React.FC = () => {
  return (
    <ParallaxCameraScene zoomFrom={1.05} zoomTo={1.0}>
      <GlassCard glowColor="rgba(0, 240, 255, 0.5)" style={{ width: 1100, textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <MetaLogo size={90} color="#00F0FF" />
        </div>
        <div style={{ fontSize: 24, color: "#00F0FF", fontWeight: 800, letterSpacing: "0.15em", marginBottom: 16 }}>
          FINANCIALLY VIABLE FOR EVERYONE
        </div>
        <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.25 }}>
          THE DEFAULT ENGINE FOR NEXT-GEN AI AGENTS
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};

// Scene 38-40: Outro CTA Card (5484 - 5925 frames)
export const Scene38OutroCTA: React.FC = () => {
  return (
    <ParallaxCameraScene zoomFrom={1.0} zoomTo={1.1}>
      <GlassCard glowColor="rgba(255, 215, 0, 0.4)" style={{ width: 950, textAlign: "center" }}>
        <div style={{ fontSize: 40, fontWeight: 900, color: "#FFFFFF", marginBottom: 20 }}>
          WILL YOU MIGRATE YOUR TECH STACK?
        </div>
        <div style={{ fontSize: 22, color: "#A0A8B8", marginBottom: 32 }}>
          Let me know your technical thoughts and comments below.
        </div>
        <div
          style={{
            display: "inline-block",
            padding: "16px 36px",
            borderRadius: 999,
            background: "#00F0FF",
            color: "#000000",
            fontWeight: 900,
            fontSize: 22,
            boxShadow: "0 0 25px #00F0FF",
          }}
        >
          SUBSCRIBE FOR MORE BREAKDOWNS
        </div>
      </GlassCard>
    </ParallaxCameraScene>
  );
};
