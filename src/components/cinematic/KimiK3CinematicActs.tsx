/* eslint-disable @remotion/no-object-fit-on-media-video */
import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";
import {
  OpenAILogoSVG,
  ClaudeLogoSVG,
} from "./BrandLogos";
import { FullScreenTechBg } from "./GeminiLeaksActsPart1";

// ==========================================
// RICH BROADCAST DESIGN HELPER COMPONENTS
// ==========================================

// 1. High-Tech Glassmorphic HUD Panel (Multi-layer depth, dynamic neon borders)
export const CyberHUDPanel: React.FC<{
  children: React.ReactNode;
  borderColor?: string;
  glowColor?: string;
  style?: React.CSSProperties;
  titleBadge?: string;
}> = ({ children, borderColor = "#00F0FF", glowColor = "rgba(0, 240, 255, 0.25)", style, titleBadge }) => {
  const frame = useCurrentFrame();
  const floatY = Math.sin(frame * 0.05) * 6;
  const borderPulse = interpolate(Math.cos(frame * 0.08), [-1, 1], [0.4, 1]);

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(8, 14, 28, 0.96) 100%)",
        backdropFilter: "blur(24px)",
        border: `2px solid ${borderColor}`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 40px ${glowColor}, inset 0 0 20px rgba(255,255,255,0.05)`,
        borderRadius: 24,
        padding: "36px 44px",
        transform: `translateY(${floatY}px)`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ...style,
      }}
    >
      {/* Top Cyber Badge */}
      {titleBadge && (
        <div
          style={{
            alignSelf: "flex-start",
            background: borderColor,
            color: "#080A10",
            padding: "6px 16px",
            borderRadius: 8,
            fontWeight: 900,
            fontSize: 16,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 20,
            boxShadow: `0 0 15px ${glowColor}`,
          }}
        >
          {titleBadge}
        </div>
      )}
      {/* Animated Corner Accents */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 24, height: 24, borderTop: `4px solid ${borderColor}`, borderLeft: `4px solid ${borderColor}`, opacity: borderPulse }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: 24, height: 24, borderTop: `4px solid ${borderColor}`, borderRight: `4px solid ${borderColor}`, opacity: borderPulse }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 24, height: 24, borderBottom: `4px solid ${borderColor}`, borderLeft: `4px solid ${borderColor}`, opacity: borderPulse }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 24, height: 24, borderBottom: `4px solid ${borderColor}`, borderRight: `4px solid ${borderColor}`, opacity: borderPulse }} />
      {children}
    </div>
  );
};

// 2. Broadcast Kinetic Title Header (Always massive, clean typography)
export const BroadcastHeadline: React.FC<{
  mainText: string;
  subText?: string;
  accentColor?: string;
}> = ({ mainText, subText, accentColor = "#00F0FF" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, transform: `scale(${scale})`, zIndex: 10 }}>
      <h1
        style={{
          fontSize: 68,
          fontWeight: 900,
          color: "#FFFFFF",
          margin: 0,
          letterSpacing: -2,
          lineHeight: 1.05,
          textTransform: "uppercase",
          textShadow: `0 0 35px ${accentColor}80`,
        }}
      >
        {mainText}
      </h1>
      {subText && (
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 4, background: accentColor, borderRadius: 2 }} />
          <p
            style={{
              fontSize: 28,
              color: accentColor,
              margin: 0,
              fontWeight: 800,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {subText}
          </p>
        </div>
      )}
    </div>
  );
};

// 3. Animated Progress Bar / Telemetry Gauge
export const TelemetryBar: React.FC<{
  label: string;
  percentage: number;
  color?: string;
}> = ({ label, percentage, color = "#00FF88" }) => {
  const frame = useCurrentFrame();
  const fill = interpolate(frame, [10, 45], [0, percentage], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 22, fontWeight: 800, color: "#E2E8F0", letterSpacing: 1 }}>{label}</span>
        <span style={{ fontSize: 26, fontWeight: 900, color }}>{Math.round(fill)}%</span>
      </div>
      <div style={{ width: "100%", height: 16, background: "rgba(255,255,255,0.08)", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
        <div
          style={{
            width: `${fill}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${color}40, ${color})`,
            boxShadow: `0 0 20px ${color}`,
            borderRadius: 8,
          }}
        />
      </div>
    </div>
  );
};

// -------------------------------------------------------------------
// ACT I: THE HOOK (0 - 1831 frames)
// -------------------------------------------------------------------

// Scene 01: Seismic Shockwave (0 -> 276 frames)
export const Scene01HookSeismic: React.FC = () => {
  const frame = useCurrentFrame();
  const zoom = interpolate(frame, [0, 276], [1.12, 1.0]);
  const shockRing = interpolate(frame, [0, 60], [0, 1500], { extrapolateRight: "clamp" });
  const ringOpacity = interpolate(frame, [0, 60], [0.8, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ transform: `scale(${zoom})`, display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      {/* Expanding Shockwave Ring */}
      <div
        style={{
          position: "absolute",
          width: shockRing,
          height: shockRing,
          borderRadius: "50%",
          border: "6px solid #FF3366",
          opacity: ringOpacity,
          boxShadow: "0 0 80px #FF3366",
        }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, width: "100%", alignItems: "center" }}>
        <BroadcastHeadline mainText="SEISMIC SHOCKWAVE" subText="AI LANDSCAPE RIPPED APART" accentColor="#FF3366" />
        <CyberHUDPanel borderColor="#FF3366" glowColor="rgba(255,51,102,0.3)" titleBadge="GLOBAL ALERT">
          <h2 style={{ fontSize: 36, color: "#FFFFFF", margin: 0 }}>FRONTIER PARADIGM SHIFT</h2>
          <p style={{ fontSize: 24, color: "#94A3B8", marginTop: 16, lineHeight: 1.5 }}>
            Developer communities and global tech giants caught completely off-guard as Eastern open-weight scale emerges.
          </p>
          <div style={{ marginTop: 24 }}>
            <TelemetryBar label="INDUSTRY DISRUPTION INDEX" percentage={98} color="#FF3366" />
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 02: WAIC Shanghai & Yang Zhilin (276 -> 535 frames)
export const Scene02WAICShanghai: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, width: "100%", height: "80%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="LIVE FROM SHANGHAI" style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: 60, fontWeight: 900, color: "#00F0FF", margin: 0, lineHeight: 1.1 }}>WORLD AI CONFERENCE 2026</h1>
          <p style={{ fontSize: 28, color: "#E2E8F0", marginTop: 20 }}>MIDWAY THROUGH THE GLOBAL SUMMIT</p>
          <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
            <div style={{ padding: "16px 24px", background: "rgba(0,240,255,0.1)", border: "1px solid #00F0FF", borderRadius: 12, fontSize: 22, color: "#00F0FF", fontWeight: 800 }}>KEYNOTE STAGE</div>
            <div style={{ padding: "16px 24px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 12, fontSize: 22, color: "#FFFFFF", fontWeight: 800 }}>GLOBAL ATTENTION</div>
          </div>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="ARCHITECT & SCIENTIST" style={{ justifyContent: "center", background: "rgba(15, 23, 42, 0.95)" }}>
          <h2 style={{ fontSize: 44, color: "#FFD700", margin: 0, fontWeight: 900 }}>YANG ZHILIN</h2>
          <p style={{ fontSize: 24, color: "#94A3B8", marginTop: 12 }}>MOONSHOT AI VISIONARY FOUNDER</p>
          <div style={{ marginTop: 30, padding: 20, background: "rgba(255, 215, 0, 0.08)", borderRadius: 12, borderLeft: "4px solid #FFD700" }}>
            <span style={{ fontSize: 22, color: "#FFFFFF", fontStyle: "italic" }}>&ldquo;Unleashing the most ambitious, powerful flagship model to date.&rdquo;</span>
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 03: Kimi K3 Titan Drop (535 -> 802 frames)
export const Scene03KimiK3Titan: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", transform: `scale(${scale})` }}>
        <div style={{ display: "flex", gap: 30, alignItems: "center", marginBottom: 30 }}>
          <div style={{ width: 100, height: 100, borderRadius: 24, background: "linear-gradient(135deg, #00F0FF, #A855F7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, fontWeight: 900, color: "#080A10", boxShadow: "0 0 50px rgba(0,240,255,0.8)" }}>K3</div>
          <h1 style={{ fontSize: 110, fontWeight: 900, color: "#FFFFFF", margin: 0, letterSpacing: -4, textShadow: "0 0 60px rgba(0,240,255,0.7)" }}>KIMI K3</h1>
        </div>
        <div style={{ padding: "16px 40px", background: "rgba(168, 85, 247, 0.2)", border: "2px solid #A855F7", borderRadius: 100, fontSize: 32, fontWeight: 900, color: "#A855F7", letterSpacing: 4, textTransform: "uppercase" }}>
          NOT AN INCREMENTAL UPDATE — FLAGSHIP TITAN
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 04: 2.8 Trillion Open-Weight Giant (802 -> 1087 frames)
export const Scene0428TrillionGiant: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, width: "100%", height: "80%" }}>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="RECORD BREAKING SCALE" style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: 86, fontWeight: 900, color: "#00FF88", margin: 0, lineHeight: 0.95 }}>2.8 TRILLION</h1>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#FFFFFF", marginTop: 16 }}>TOTAL PARAMETERS</h2>
          <p style={{ fontSize: 26, color: "#94A3B8", marginTop: 24 }}>China&apos;s largest open-weight AI model in history unleashed to the world.</p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="OPEN-WEIGHT LANDMARK" style={{ justifyContent: "center", gap: 24 }}>
          <TelemetryBar label="MODEL SCALE vs PREDECESSOR" percentage={100} color="#FFD700" />
          <TelemetryBar label="OPEN ACCESS LEVEL" percentage={100} color="#00FF88" />
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 05: Open vs Closed Clash (1087 -> 1457 frames)
export const Scene05OpenVsClosedClash: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 60 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, width: "100%", height: "85%" }}>
        {/* Left: Western Proprietary */}
        <CyberHUDPanel borderColor="#FF3366" titleBadge="WESTERN TECH GIANTS" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <OpenAILogoSVG size={70} />
            <ClaudeLogoSVG size={70} />
          </div>
          <div>
            <h2 style={{ fontSize: 44, fontWeight: 900, color: "#FF3366", margin: 0 }}>CLOSED APIs</h2>
            <p style={{ fontSize: 24, color: "#CBD5E1", marginTop: 12 }}>Frontier intelligence locked behind proprietary fortress walls and paywalls.</p>
          </div>
          <div style={{ padding: "12px 20px", background: "rgba(255,51,102,0.15)", border: "1px solid #FF3366", borderRadius: 8, color: "#FF3366", fontWeight: 800, textAlign: "center", fontSize: 20 }}>VENDOR LOCK-IN & RESTRICTIONS</div>
        </CyberHUDPanel>
        {/* Right: Kimi Open Ecosystem */}
        <CyberHUDPanel borderColor="#00FF88" titleBadge="MOONSHOT AI REVOLUTION" style={{ justifyContent: "space-between" }}>
          <div style={{ width: 70, height: 70, borderRadius: 16, background: "#00FF88", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, fontWeight: 900, color: "#080A10" }}>K3</div>
          <div>
            <h2 style={{ fontSize: 44, fontWeight: 900, color: "#00FF88", margin: 0 }}>OPEN ECOSYSTEM</h2>
            <p style={{ fontSize: 24, color: "#CBD5E1", marginTop: 12 }}>Massive 2.8T scale unleashed directly to developers and global enterprises.</p>
          </div>
          <div style={{ padding: "12px 20px", background: "rgba(0,255,136,0.15)", border: "1px solid #00FF88", borderRadius: 8, color: "#00FF88", fontWeight: 800, textAlign: "center", fontSize: 20 }}>FULL SELF-HOST FREEDOM</div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 06: Frontier Challenge Arena (1457 -> 1831 frames)
export const Scene06FrontierChallengeArena: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, width: "100%", height: "80%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="DEEP TECHNICAL TEARDOWN" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="UNDER THE HOOD" subText="DISSECTING THE TITAN ARCHITECTURE" accentColor="#00F0FF" />
          <p style={{ fontSize: 26, color: "#94A3B8", marginTop: 30, lineHeight: 1.5 }}>
            Going deep inside the Mixture-of-Experts engine to see why Kimi K3 directly challenges Claude Opus 4.8 and OpenAI flagships.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#A855F7" titleBadge="FRONTIER TARGETS" style={{ justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 20, background: "rgba(255,255,255,0.05)", borderRadius: 16 }}>
            <span style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF" }}>CLAUDE OPUS 4.8</span>
            <span style={{ fontSize: 20, color: "#FF3366", fontWeight: 800 }}>CHALLENGED</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 20, background: "rgba(255,255,255,0.05)", borderRadius: 16 }}>
            <span style={{ fontSize: 28, fontWeight: 900, color: "#FFFFFF" }}>OPENAI FLAGSHIPS</span>
            <span style={{ fontSize: 20, color: "#FF3366", fontWeight: 800 }}>CHALLENGED</span>
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------------
// ACT II: UNDER THE HOOD - ARCHITECTURE (1831 - 4130 frames)
// -------------------------------------------------------------------

// Scene 07: MoE Brain Architecture (1831 -> 2234 frames)
export const Scene07MoEBrainArchitecture: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#A855F7" titleBadge="CORE SPECIFICATIONS" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="ARCHITECTURAL POWERHOUSE" subText="OPTIMIZED MoE DESIGN" accentColor="#A855F7" />
          <p style={{ fontSize: 24, color: "#CBD5E1", marginTop: 24 }}>
            Engineered on a highly advanced Mixture-of-Experts architecture designed to scale reasoning without compute bottlenecks.
          </p>
        </CyberHUDPanel>
        {/* MoE Network Grid */}
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="DYNAMIC EXPERT NETWORK" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignContent: "center" }}>
          {["EXPERT 01: MATH & LOGIC", "EXPERT 02: CODE SYNTAX", "EXPERT 03: 3D SPATIAL", "EXPERT 04: LONG REASONING"].map((exp, idx) => (
            <div key={idx} style={{ padding: 24, background: "rgba(0, 240, 255, 0.08)", border: "1px solid #00F0FF", borderRadius: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 18, color: "#00F0FF", fontWeight: 800 }}>ROUTER PATH {idx + 1}</span>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#00FF88", boxShadow: "0 0 10px #00FF88" }} />
              </div>
              <span style={{ fontSize: 22, fontWeight: 900, color: "#FFFFFF" }}>{exp}</span>
            </div>
          ))}
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 08: Dynamic Expert Routing (2234 -> 2717 frames)
export const Scene08DynamicExpertRouting: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="SPARSE ACTIVATION EFFICIENCY" style={{ justifyContent: "center", gap: 30 }}>
          <h1 style={{ fontSize: 56, fontWeight: 900, color: "#00FF88", margin: 0, lineHeight: 1.1 }}>ONLY SPECIALIZED EXPERTS ACTIVATED</h1>
          <p style={{ fontSize: 26, color: "#E2E8F0" }}>
            Out of 2.8 Trillion total parameters, only dedicated neural sub-networks light up for any specific query.
          </p>
          <TelemetryBar label="ACTIVE PARAMETER COMPUTATIONAL LOAD" percentage={18} color="#00FF88" />
          <TelemetryBar label="FRONTIER REASONING CAPACITY" percentage={100} color="#00F0FF" />
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="PERFORMANCE GAIN" style={{ justifyContent: "center" }}>
          <h2 style={{ fontSize: 64, color: "#FFD700", fontWeight: 900, margin: 0 }}>5.5X</h2>
          <h3 style={{ fontSize: 32, color: "#FFFFFF", margin: "10px 0" }}>COMPUTATIONAL EFFICIENCY</h3>
          <p style={{ fontSize: 22, color: "#94A3B8", marginTop: 10 }}>Delivering ultra-fast inference speed without sacrificing frontier cognitive depth.</p>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 09: 1 Million Context Digester (2717 -> 3146 frames)
export const Scene09OneMillionContextDigester: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="MASSIVE CONTEXT WINDOW" style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: 80, fontWeight: 900, color: "#FFD700", margin: 0, lineHeight: 1 }}>1,000,000</h1>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF", marginTop: 16 }}>TOKENS CONTEXT</h2>
          <p style={{ fontSize: 26, color: "#94A3B8", marginTop: 24 }}>
            Digest entire enterprise codebases, research libraries, and hours of audio transcriptions in a single inference pass.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="DIGESTION CAPACITY" style={{ justifyContent: "space-around" }}>
          {[
            { title: "ENTERPRISE CODEBASES", subtitle: "500K+ Lines of Code Analyzed" },
            { title: "RESEARCH LIBRARIES", subtitle: "100+ Medical & Scientific PDFs" },
            { title: "MEETING TRANSCRIPTS", subtitle: "10+ Hours of Voiceover Processed" },
          ].map((item, i) => (
            <div key={i} style={{ padding: 20, background: "rgba(255,255,255,0.05)", borderRadius: 12, borderLeft: "4px solid #00F0FF" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#FFFFFF" }}>{item.title}</div>
              <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>{item.subtitle}</div>
            </div>
          ))}
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 10: Attention Residuals Stream (3146 -> 3674 frames)
export const Scene10AttentionResidualsStream: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="CORE ARCHITECTURAL BREAKTHROUGH" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="ATTENTION RESIDUALS" subText="NOVEL INFORMATION FLOW" accentColor="#00FF88" />
          <p style={{ fontSize: 26, color: "#CBD5E1", marginTop: 24, lineHeight: 1.5 }}>
            By replacing traditional residual connections, Moonshot AI has streamlined information flow across deep neural layers.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="RELIABILITY METRICS" style={{ justifyContent: "center", gap: 30 }}>
          <TelemetryBar label="HALLUCINATION REDUCTION" percentage={94} color="#00FF88" />
          <TelemetryBar label="MEMORY DEGRADATION PREVENTED" percentage={98} color="#00F0FF" />
          <TelemetryBar label="LONG-HORIZON ACCURACY" percentage={96} color="#FFD700" />
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 11: Native 3D Spatial Multimodal (3674 -> 4130 frames)
export const Scene11Native3DMultimodalCore: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#FF3366" titleBadge="NO BOLTED-ON VISION" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="NATIVE 3D & VISION" subText="BAKED INTO CORE WEIGHTS" accentColor="#FF3366" />
          <p style={{ fontSize: 24, color: "#CBD5E1", marginTop: 24 }}>
            Advanced 3D spatial reasoning and multimodal perception are natively trained from day one, not patched on as external modules.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#A855F7" titleBadge="SPATIAL PERCEPTION MATRIX" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 280, height: 280, border: "3px dashed #A855F7", borderRadius: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(168,85,247,0.1)", boxShadow: "0 0 50px rgba(168,85,247,0.3)" }}>
            <span style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF" }}>3D VOXEL</span>
            <span style={{ fontSize: 22, color: "#A855F7", fontWeight: 800, marginTop: 10 }}>SPATIAL REASONING</span>
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------------
// ACT III: AGENT SWARM REVOLUTION (4130 - 5995 frames)
// -------------------------------------------------------------------

// Scene 12: Autonomous Execution Engine (4130 -> 4536 frames)
export const Scene12AutonomousExecutionEngine: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="PARADIGM SHIFT IN ACTION" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="EXECUTION ENGINE" subText="BEYOND SIMPLE CONVERSATION" accentColor="#00F0FF" />
          <p style={{ fontSize: 26, color: "#CBD5E1", marginTop: 24, lineHeight: 1.5 }}>
            Previous generation chatbots were designed to converse. Kimi K3 is fundamentally architected as an autonomous execution engine.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="OPERATIONAL CAPABILITY" style={{ justifyContent: "space-around" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#00FF88" }} />
            <span style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>AUTONOMOUS PLANNING</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#00F0FF" }} />
            <span style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>MULTI-STEP EXECUTION</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FFD700" }} />
            <span style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>SELF-CORRECTION LOOP</span>
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 13: Swarm Spin Up Hub (4536 -> 5042 frames)
export const Scene13SwarmSpinUpHub: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#A855F7" titleBadge="THE BREAKTHROUGH" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="AGENT SWARMS" subText="PARALLEL SUB-AGENT ORCHESTRATION" accentColor="#A855F7" />
          <p style={{ fontSize: 24, color: "#CBD5E1", marginTop: 24 }}>
            Assign a complex task like refactoring massive software architecture—Kimi K3 doesn&apos;t run serially. It spins up hundreds of parallel sub-agents.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="SWARM TOPOLOGY" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignContent: "center" }}>
          {["SWARM NODE #101: REFACTOR", "SWARM NODE #102: DATABASE", "SWARM NODE #103: API BRIDGE", "SWARM NODE #104: UI LAYER"].map((node, i) => (
            <div key={i} style={{ padding: 24, background: "rgba(168,85,247,0.15)", border: "1px solid #A855F7", borderRadius: 16 }}>
              <div style={{ fontSize: 20, color: "#A855F7", fontWeight: 800 }}>ACTIVE SUB-AGENT</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>{node}</div>
            </div>
          ))}
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 14: Parallel 4 Sub-Agents (5042 -> 5587 frames)
export const Scene14Parallel4SubAgents: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 60 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 40, width: "100%", height: "90%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="SUB-AGENT 01" style={{ justifyContent: "center" }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#00F0FF", margin: 0 }}>ARCHITECTURAL PLANNER</h2>
          <p style={{ fontSize: 22, color: "#94A3B8", marginTop: 10 }}>Maps full-stack blueprint and data flow dependencies.</p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="SUB-AGENT 02" style={{ justifyContent: "center" }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#00FF88", margin: 0 }}>CLEAN MODULAR CODER</h2>
          <p style={{ fontSize: 22, color: "#94A3B8", marginTop: 10 }}>Writes optimized, modular syntax across front and back end.</p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="SUB-AGENT 03" style={{ justifyContent: "center" }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#FFD700", margin: 0 }}>REAL-TIME BUG HUNTER</h2>
          <p style={{ fontSize: 22, color: "#94A3B8", marginTop: 10 }}>Executes automated unit testing and instant regression checking.</p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FF3366" titleBadge="SUB-AGENT 04" style={{ justifyContent: "center" }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#FF3366", margin: 0 }}>SECURITY COMPLIANCE AUDIT</h2>
          <p style={{ fontSize: 22, color: "#94A3B8", marginTop: 10 }}>Scans vulnerability loopholes and enforces enterprise security.</p>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 15: SWE-Bench Pro Senior Team (5587 -> 5995 frames)
export const Scene15SWEBenchSeniorTeam: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="BENCHMARK DOMINANCE" style={{ justifyContent: "center", gap: 24 }}>
          <BroadcastHeadline mainText="SENIOR ENG TEAM" subText="FIRING ON ALL CYLINDERS" accentColor="#00FF88" />
          <p style={{ fontSize: 26, color: "#CBD5E1", lineHeight: 1.5 }}>
            Doesn&apos;t feel like a single AI chatbot—operates like a coordinated senior software engineering team working synchronously.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="SWE-BENCH PRO TELEMETRY" style={{ justifyContent: "center", gap: 30 }}>
          <TelemetryBar label="LONG-HORIZON TASK RESOLUTION" percentage={95} color="#00FF88" />
          <TelemetryBar label="MULTI-FILE REFACTOR ACCURACY" percentage={92} color="#FFD700" />
          <TelemetryBar label="PARALLEL EXECUTION SPEED" percentage={98} color="#00F0FF" />
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------------
// ACT IV: OPEN-WEIGHT EARTHQUAKE VS OPUS 4.8 (5995 - 7987 frames)
// -------------------------------------------------------------------

// Scene 16: Clash vs Opus 4.8 (5995 -> 6456 frames)
export const Scene16ClashVsOpus48: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 60 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="REIGNING WESTERN CHAMPION" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <ClaudeLogoSVG size={100} />
          <h2 style={{ fontSize: 52, fontWeight: 900, color: "#00F0FF", marginTop: 24 }}>CLAUDE OPUS 4.8</h2>
          <p style={{ fontSize: 24, color: "#CBD5E1", marginTop: 12 }}>Proprietary Benchmark Heavyweight</p>
          <div style={{ marginTop: 30, width: "100%" }}>
            <TelemetryBar label="DEEP REASONING INDEX" percentage={96} color="#00F0FF" />
          </div>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="EASTERN OPEN TITAN" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div style={{ width: 100, height: 100, borderRadius: 20, background: "#00FF88", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, fontWeight: 900, color: "#080A10" }}>K3</div>
          <h2 style={{ fontSize: 52, fontWeight: 900, color: "#00FF88", marginTop: 24 }}>KIMI K3 TITAN</h2>
          <p style={{ fontSize: 24, color: "#CBD5E1", marginTop: 12 }}>2.8T Open-Weight Challenger</p>
          <div style={{ marginTop: 30, width: "100%" }}>
            <TelemetryBar label="DEEP REASONING INDEX" percentage={96} color="#00FF88" />
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 17: Open-Weight Advantage (6456 -> 6850 frames)
export const Scene17OpenWeightAdvantage: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="MOST DISRUPTIVE ADVANTAGE" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="OPEN WEIGHT STRATEGY" subText="TRADING BLOWS WITH FRONTIER LABS" accentColor="#FFD700" />
          <p style={{ fontSize: 26, color: "#CBD5E1", marginTop: 24 }}>
            Across deep reasoning, math, and complex software engineering, Kimi K3 trades blows directly with top U.S. models—without locking weights inside closed APIs.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="FREEDOM METRICS" style={{ justifyContent: "space-around" }}>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#00FF88" }}>ZERO PROPRIETARY PAYWALLS</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#00F0FF" }}>UNRESTRICTED INSPECTION</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF" }}>FULL FINE-TUNING CONTROL</div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 18: Self-Host Private Infra (6850 -> 7368 frames)
export const Scene18SelfHostPrivateInfra: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="ENTERPRISE SOVEREIGNTY" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="PRIVATE INFRASTRUCTURE" subText="SELF-HOST AT GLOBAL SCALE" accentColor="#00FF88" />
          <p style={{ fontSize: 24, color: "#CBD5E1", marginTop: 24 }}>
            Empowers developers and enterprises to fine-tune and deploy 2.8 Trillion parameters directly inside secure, on-premise cloud servers.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="SOVEREIGN DEPLOYMENT LAYERS" style={{ justifyContent: "space-around" }}>
          <div style={{ padding: 24, background: "rgba(0,255,136,0.1)", borderRadius: 16, borderLeft: "6px solid #00FF88" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>ON-PREMISE PRIVATE GPU CLUSTERS</div>
            <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 6 }}>Complete data privacy & zero third-party leakage</div>
          </div>
          <div style={{ padding: 24, background: "rgba(0,240,255,0.1)", borderRadius: 16, borderLeft: "6px solid #00F0FF" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>CUSTOM DOMAIN FINE-TUNING</div>
            <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 6 }}>Adapt weights precisely to medical, legal, or finance data</div>
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 19: $3 / Million Tokens Unit Economics (7368 -> 7686 frames)
export const Scene19ThreeDollarUnitEconomics: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="AGGRESSIVE PRICING DISRUPTION" style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: 96, fontWeight: 900, color: "#00FF88", margin: 0 }}>$3 / MILLION</h1>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#FFFFFF", marginTop: 10 }}>REPORTED API PRICING</h2>
          <p style={{ fontSize: 26, color: "#94A3B8", marginTop: 24 }}>
            Delivering aggressive unit economics for those leveraging Moonshot AI&apos;s open cloud platform.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FF3366" titleBadge="COST COMPARISON" style={{ justifyContent: "center", gap: 30 }}>
          <div>
            <div style={{ fontSize: 24, color: "#FF3366", fontWeight: 800 }}>PROPRIETARY FRONTIER APIs</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#FFFFFF" }}>$15 - $30 / M Tokens</div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 20 }}>
            <div style={{ fontSize: 24, color: "#00FF88", fontWeight: 800 }}>KIMI K3 OPEN PLATFORM</div>
            <div style={{ fontSize: 56, fontWeight: 900, color: "#00FF88" }}>~$3 / M Tokens</div>
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 20: DeepSeek Mirror Scale (7686 -> 7987 frames)
export const Scene20DeepSeekMirrorScale: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="PRICE TO PERFORMANCE REVOLUTION" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="MIRRORS DEEPSEEK" subText="SCALED TO 2.8 TRILLION" accentColor="#00F0FF" />
          <p style={{ fontSize: 26, color: "#CBD5E1", marginTop: 24 }}>
            Continues the aggressive price-to-performance revolution initiated by DeepSeek, now scaled up to massive frontier capacity.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#A855F7" titleBadge="EFFICIENCY MILESTONES" style={{ justifyContent: "space-around" }}>
          <div style={{ fontSize: 30, fontWeight: 900, color: "#FFFFFF" }}>DEEPSEEK V3 / R1 SHOCKWAVE</div>
          <div style={{ fontSize: 30, fontWeight: 900, color: "#00F0FF" }}>MOONSHOT KIMI K3 TITAN</div>
          <div style={{ fontSize: 30, fontWeight: 900, color: "#00FF88" }}>GLOBAL UNIT ECONOMICS FOREVER CHANGED</div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------------
// ACT V: GEOPOLITICAL SHIFT & DEVELOPERS (7987 - 9643 frames)
// -------------------------------------------------------------------

// Scene 21: Mid-2026 Geopolitical Shift (7987 -> 8412 frames)
export const Scene21GeopoliticalShift2026: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#FF3366" titleBadge="MID-2026 LANDSCAPE ANALYSIS" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="GEOPOLITICAL SHIFT" subText="FAR MORE THAN A MODEL DROP" accentColor="#FF3366" />
          <p style={{ fontSize: 26, color: "#CBD5E1", marginTop: 24 }}>
            Signifies a fundamental turning point in artificial intelligence balance of power across Eastern and Western development hubs.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="GLOBAL DYNAMICS" style={{ justifyContent: "center", gap: 30 }}>
          <TelemetryBar label="EASTERN OPEN-WEIGHT MOMENTUM" percentage={96} color="#FFD700" />
          <TelemetryBar label="WESTERN CLOSED API DOMINANCE" percentage={52} color="#FF3366" />
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 22: Gap Closed & Price War (8412 -> 8852 frames)
export const Scene22GapClosedPriceWar: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="THE FRONTIER GAP" style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: 64, fontWeight: 900, color: "#00F0FF", margin: 0, lineHeight: 1.1 }}>GAP EFFECTIVELY CLOSED</h1>
          <p style={{ fontSize: 26, color: "#E2E8F0", marginTop: 20 }}>
            Technological parity reached between top U.S. labs and leading Chinese AI research institutions.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="THE GREAT MODEL PRICE WAR" style={{ justifyContent: "space-around" }}>
          {[
            { name: "MOONSHOT AI (KIMI K3)", status: "2.8T Open-Weight Titan" },
            { name: "DEEPSEEK (V3/R1)", status: "Aggressive Reasoning Efficiency" },
            { name: "ALIBABA (QWEN)", status: "Global Open Source Scale" },
          ].map((lab, i) => (
            <div key={i} style={{ padding: 18, background: "rgba(0,255,136,0.1)", borderRadius: 12, borderLeft: "4px solid #00FF88" }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>{lab.name}</div>
              <div style={{ fontSize: 20, color: "#00FF88", marginTop: 4 }}>{lab.status}</div>
            </div>
          ))}
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 23: Zero Vendor Lock-In (8852 -> 9389 frames)
export const Scene23ZeroVendorLockIn: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="THE CLEAR TAKEAWAY" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="ZERO VENDOR LOCK-IN" subText="BUILD AGENTIC SYSTEMS FREELY" accentColor="#00FF88" />
          <p style={{ fontSize: 26, color: "#CBD5E1", marginTop: 24, lineHeight: 1.5 }}>
            Developers, founders, and global enterprises no longer require dependency on a single closed provider to build state-of-the-art agentic AI.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="ENTERPRISE FREEDOM" style={{ justifyContent: "space-around" }}>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF" }}>MULTI-CLOUD PORTABILITY</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#FFD700" }}>SOVEREIGN WEIGHT CONTROL</div>
          <div style={{ fontSize: 32, fontWeight: 900, color: "#00FF88" }}>ZERO API DEPENDENCY RISK</div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 24: Decentralized Scale (9389 -> 9643 frames)
export const Scene24DecentralizedScale: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, width: "100%", height: "80%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="NEW ERA OF INTELLIGENCE" style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: 72, fontWeight: 900, color: "#00F0FF", margin: 0 }}>INTELLIGENCE DECENTRALIZED</h1>
          <p style={{ fontSize: 28, color: "#FFFFFF", marginTop: 20 }}>Accessible and economically viable at global scale.</p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#A855F7" titleBadge="GLOBAL REACH" style={{ justifyContent: "center", gap: 30 }}>
          <TelemetryBar label="OPEN ACCESSIBILITY" percentage={100} color="#00F0FF" />
          <TelemetryBar label="ECONOMIC VIABILITY" percentage={100} color="#A855F7" />
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// -------------------------------------------------------------------
// ACT VI: CONCLUSION & CALL TO ACTION (9643 - 10696 frames)
// -------------------------------------------------------------------

// Scene 25: Moonshot Titan Summary (9643 -> 9998 frames)
export const Scene25MoonshotTitanSummary: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#FFD700" titleBadge="WRAPPING UP THE DEEP DIVE" style={{ justifyContent: "center" }}>
          <BroadcastHeadline mainText="MOONSHOT TITAN" subText="THE 2.8 TRILLION PARAMETER GIANT" accentColor="#FFD700" />
          <p style={{ fontSize: 26, color: "#CBD5E1", marginTop: 24 }}>
            That wraps up our technical dissection of Kimi K3—the open-weight heavyweight reshaping the mid-2026 AI landscape.
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#00FF88" titleBadge="KEY SPECIFICATIONS RECAP" style={{ justifyContent: "space-around" }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: "#FFFFFF" }}>2.8T MoE ARCHITECTURE</div>
          <div style={{ fontSize: 26, fontWeight: 900, color: "#00FF88" }}>1,000,000 TOKEN CONTEXT</div>
          <div style={{ fontSize: 26, fontWeight: 900, color: "#00F0FF" }}>NATIVE AGENT SWARMS</div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 26: Take The Crown Poll (9998 -> 10390 frames)
export const Scene26TakeTheCrownPoll: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, width: "100%", height: "85%" }}>
        <CyberHUDPanel borderColor="#00F0FF" titleBadge="COMMUNITY DISCUSSION" style={{ justifyContent: "center" }}>
          <h1 style={{ fontSize: 60, fontWeight: 900, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>WILL OPEN-WEIGHT TAKE THE CROWN?</h1>
          <p style={{ fontSize: 26, color: "#00F0FF", marginTop: 20 }}>
            Do you think 2.8 Trillion open parameters will dethrone Claude Opus and GPT? Or are we just entering the opening rounds of an even bigger price war?
          </p>
        </CyberHUDPanel>
        <CyberHUDPanel borderColor="#FF3366" titleBadge="VOTE IN THE COMMENTS" style={{ justifyContent: "space-around" }}>
          <div style={{ padding: 20, background: "rgba(0,255,136,0.15)", borderRadius: 14, border: "2px solid #00FF88", textAlign: "center", fontSize: 26, fontWeight: 900, color: "#00FF88" }}>OPTION A: OPEN-WEIGHT CROWN</div>
          <div style={{ padding: 20, background: "rgba(255,51,102,0.15)", borderRadius: 14, border: "2px solid #FF3366", textAlign: "center", fontSize: 26, fontWeight: 900, color: "#FF3366" }}>OPTION B: CLOSED PROPRIETARY</div>
          <div style={{ padding: 20, background: "rgba(0,240,255,0.15)", borderRadius: 14, border: "2px solid #00F0FF", textAlign: "center", fontSize: 26, fontWeight: 900, color: "#00F0FF" }}>OPTION C: BIGGER PRICE WAR</div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// Scene 27: Subscribe Outro CTA (10390 -> 10696 frames)
export const Scene27SubscribeOutroCTA: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 80 }}>
      <FullScreenTechBg />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "85%", height: "80%" }}>
        <CyberHUDPanel borderColor="#FF3366" titleBadge="THANK YOU FOR WATCHING" style={{ width: "100%", alignItems: "center", textAlign: "center", padding: 60 }}>
          <h1 style={{ fontSize: 84, fontWeight: 900, color: "#FFFFFF", margin: 0 }}>LIKE & SUBSCRIBE</h1>
          <p style={{ fontSize: 32, color: "#FF3366", fontWeight: 800, marginTop: 20 }}>FOR MORE CUTTING-EDGE TECH & AI BREAKDOWNS</p>
          <div style={{ display: "flex", gap: 30, marginTop: 40 }}>
            <div style={{ padding: "18px 40px", background: "#FF3366", borderRadius: 100, color: "#FFFFFF", fontWeight: 900, fontSize: 28, boxShadow: "0 0 35px #FF3366" }}>LIKE VIDEO</div>
            <div style={{ padding: "18px 40px", background: "#00F0FF", borderRadius: 100, color: "#080A10", fontWeight: 900, fontSize: 28, boxShadow: "0 0 35px #00F0FF" }}>SUBSCRIBE NOW</div>
          </div>
        </CyberHUDPanel>
      </div>
    </AbsoluteFill>
  );
};
