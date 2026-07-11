import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Easing } from "remotion";
import { displayFontFamily, bodyFontFamily } from "../../fonts";

// Reusable HeroNumber Component
export const HeroNumber: React.FC<{
  value: string | number;
  suffix?: string;
  prefix?: string;
  startValue?: number;
  endValue?: number;
  color?: string;
}> = ({ value, suffix = "", prefix = "", startValue, endValue, color = "#FF5A5F" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  let displayVal = value;
  if (startValue !== undefined && endValue !== undefined) {
    const progress = interpolate(frame, [0, Math.round(fps * 1.2)], [0, 1], {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    });
    displayVal = Math.floor(startValue + progress * (endValue - startValue));
  }

  return (
    <div
      style={{
        fontFamily: displayFontFamily,
        fontSize: 90,
        fontWeight: 900,
        color,
        transform: `scale(${scale})`,
        letterSpacing: "-0.04em",
        textShadow: `0 10px 30px ${color}33, 0 0 80px ${color}1a`,
        display: "inline-block",
      }}
    >
      {prefix}
      {displayVal}
      {suffix}
    </div>
  );
};

// Reusable KeyPhraseHighlight Component
export const KeyPhraseHighlight: React.FC<{ text: string; color?: string }> = ({
  text,
  color = "#FFB800",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 10, mass: 0.8 },
  });

  return (
    <div
      style={{
        fontFamily: displayFontFamily,
        fontSize: 50,
        fontWeight: 800,
        color,
        textAlign: "center",
        transform: `scale(${scale})`,
        letterSpacing: "-0.02em",
        padding: "16px 36px",
        background: "rgba(13, 14, 18, 0.85)",
        borderRadius: 20,
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
        maxWidth: 800,
      }}
    >
      {text}
    </div>
  );
};

// Reusable SVG Container with spring scale & subtle pattern interrupt bounce
export const SvgContainer: React.FC<{ children: React.ReactNode; size?: number }> = ({ children, size = 200 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const baseScale = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  // Pattern interrupt: subtle scale bounce at 3 seconds (90 frames)
  const bounce = interpolate(frame, [85, 90, 95], [0, 0.08, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 1, 0.5, 1),
  });

  return (
    <div
      style={{
        transform: `scale(${baseScale + bounce})`,
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

// Beat 0: Hook 2%
export const Beat0: React.FC = () => {
  const frame = useCurrentFrame();
  const drawLength = 251.2;
  const progress = interpolate(frame, [0, 50], [0, 0.02], { extrapolateRight: "clamp" });
  const strokeOffset = drawLength * (1 - progress);

  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
      <SvgContainer>
        <svg width="180" height="180" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#FF5A5F"
            strokeWidth="6"
            fill="none"
            strokeDasharray={drawLength}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </SvgContainer>
      <HeroNumber value="2%" color="#FF5A5F" />
    </AbsoluteFill>
  );
};

// Beat 1: Hook 2% -> 45%
export const Beat1: React.FC = () => {
  const frame = useCurrentFrame();
  const drawLength = 251.2;
  const progress = interpolate(frame, [0, 60], [0.02, 0.45], { extrapolateRight: "clamp" });
  const strokeOffset = drawLength * (1 - progress);

  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
      <SvgContainer>
        <svg width="180" height="180" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#FF5A5F"
            strokeWidth="6"
            fill="none"
            strokeDasharray={drawLength}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </SvgContainer>
      <HeroNumber value={45} startValue={2} endValue={45} suffix="%" color="#FF5A5F" />
    </AbsoluteFill>
  );
};

// Beat 2: Xiaomi mystery silhouette vs OpenAI
export const Beat2: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 80 }}>
      <SvgContainer>
        <svg width="160" height="160" viewBox="0 0 100 100" fill="none">
          <rect x="25" y="10" width="50" height="80" rx="8" stroke="#FF5A5F" strokeWidth="4" />
          <line x1="35" y1="20" x2="65" y2="20" stroke="#FF5A5F" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="78" r="5" stroke="#FF5A5F" strokeWidth="4" />
          {/* Mystery question mark */}
          <text x="44" y="55" fill="#FF5A5F" fontSize="24" fontWeight="bold">?</text>
        </svg>
      </SvgContainer>
      <div style={{ fontSize: 48, fontWeight: 900, color: "#fff" }}>&gt;</div>
      <SvgContainer>
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.4 }}>
          {/* Generic OpenAI replacement logo */}
          <circle cx="50" cy="50" r="30" stroke="#00F0FF" strokeWidth="4" />
          <path d="M50 20 L50 80 M20 50 L80 50 M29 29 L71 71 M29 71 L71 29" stroke="#00F0FF" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 3: OpenRouter expliqué (nodes branching out)
export const Beat3: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={260}>
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="14" stroke="#FFB800" strokeWidth="4" />
          <circle cx="15" cy="20" r="8" stroke="#00F0FF" strokeWidth="3" />
          <circle cx="85" cy="20" r="8" stroke="#FF5A5F" strokeWidth="3" />
          <circle cx="15" cy="80" r="8" stroke="#FF5A5F" strokeWidth="3" />
          <circle cx="85" cy="80" r="8" stroke="#00F0FF" strokeWidth="3" />
          {/* Connection lines */}
          <line x1="39" y1="41" x2="23" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="61" y1="41" x2="77" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="39" y1="59" x2="23" y2="72" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="61" y1="59" x2="77" y2="72" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 4: Scaring Western AI companies (Cracking shield)
export const Beat4: React.FC = () => {
  const frame = useCurrentFrame();
  const crackOffset = interpolate(frame, [15, 60], [100, 0], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <path d="M50 10 L85 25 L85 60 C85 80 50 92 50 92 C50 92 15 80 15 60 L15 25 Z" stroke="#00F0FF" strokeWidth="4" />
          {/* Crack lines */}
          <path
            d="M50 10 L45 35 L58 55 L42 75 L50 92"
            stroke="#FF5A5F"
            strokeWidth="3"
            strokeDasharray="100"
            strokeDashoffset={crackOffset}
          />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 5: Timeline
export const Beat5: React.FC = () => {
  const frame = useCurrentFrame();
  const length = interpolate(frame, [0, 45], [0, 160], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
        <svg width="600" height="100" viewBox="0 0 600 100" fill="none">
          <line x1="50" y1="50" x2="550" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
          <line x1="50" y1="50" x2={50 + length * 3.125} y2="50" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
          {/* Points */}
          <circle cx="50" cy="50" r="8" fill="#FFB800" />
          <text x="35" y="85" fill="#94a3b8" fontFamily={bodyFontFamily} fontSize="14">1 Year Ago</text>

          {frame >= 25 && <circle cx="350" cy="50" r="8" fill="#FF5A5F" />}
          {frame >= 25 && <text x="325" y="85" fill="#94a3b8" fontFamily={bodyFontFamily} fontSize="14">Months Flipping</text>}

          {frame >= 45 && <circle cx="550" cy="50" r="8" fill="#00F0FF" />}
          {frame >= 45 && <text x="535" y="85" fill="#94a3b8" fontFamily={bodyFontFamily} fontSize="14">Today</text>}
        </svg>
      </div>
    </AbsoluteFill>
  );
};

// Beat 6: App nodes plug in
export const Beat6: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <rect x="35" y="35" width="30" height="30" rx="6" stroke="#FFB800" strokeWidth="4" />
          <line x1="50" y1="35" x2="50" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="50" y1="65" x2="50" y2="85" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="35" y1="50" x2="15" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="65" y1="50" x2="85" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <circle cx="50" cy="15" r="4" fill="#00F0FF" />
          <circle cx="50" cy="85" r="4" fill="#FF5A5F" />
          <circle cx="15" cy="50" r="4" fill="#FF5A5F" />
          <circle cx="85" cy="50" r="4" fill="#00F0FF" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 7: Invisible <2% Chinese share
export const Beat7: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
      <SvgContainer>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          {/* Almost complete Teal circle */}
          <circle cx="50" cy="50" r="40" stroke="#00F0FF" strokeWidth="6" strokeDasharray="246 251.2" strokeLinecap="round" transform="rotate(-90 50 50)" />
          {/* Tiny Crimson slice */}
          <circle cx="50" cy="50" r="40" stroke="#FF5A5F" strokeWidth="6" strokeDasharray="5 251.2" strokeLinecap="round" transform="rotate(265 50 50)" />
        </svg>
      </SvgContainer>
      <div style={{ display: "flex", gap: 40 }}>
        <HeroNumber value="98%" color="#00F0FF" />
        <HeroNumber value="2%" color="#FF5A5F" />
      </div>
    </AbsoluteFill>
  );
};

// Beat 8: Steady Bleed
export const Beat8: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
      <SvgContainer>
        <svg width="160" height="160" viewBox="0 0 100 100" fill="none">
          {/* Grid card calendar flipping */}
          <rect x="20" y="20" width="60" height="60" rx="8" stroke="#FFB800" strokeWidth="4" />
          <line x1="20" y1="40" x2="80" y2="40" stroke="#FFB800" strokeWidth="4" />
          <line x1="40" y1="20" x2="40" y2="40" stroke="#FFB800" strokeWidth="2" />
          <line x1="60" y1="20" x2="60" y2="40" stroke="#FFB800" strokeWidth="2" />
          {/* Bleed drop */}
          <path d="M50 50 C55 60 55 70 50 75 C45 70 45 60 50 50" fill="#FF5A5F" opacity="0.8" />
        </svg>
      </SvgContainer>
      <KeyPhraseHighlight text="Steady Bleed Flipping the Table" color="#FFB800" />
    </AbsoluteFill>
  );
};

// Beat 9: Chinese commanding close to half (45%)
export const Beat9: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
      <SvgContainer>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="#00F0FF" strokeWidth="6" strokeDasharray="138 251.2" strokeLinecap="round" transform="rotate(-90 50 50)" />
          <circle cx="50" cy="50" r="40" stroke="#FF5A5F" strokeWidth="6" strokeDasharray="113 251.2" strokeLinecap="round" transform="rotate(110 50 50)" />
        </svg>
      </SvgContainer>
      <HeroNumber value="45%" color="#FF5A5F" />
    </AbsoluteFill>
  );
};

// Beat 10: Who did this?
export const Beat10: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame / 10) * 0.05 + 1;
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
      <SvgContainer>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" style={{ transform: `scale(${pulse})` }}>
          <circle cx="50" cy="50" r="40" stroke="rgba(255, 184, 0, 0.1)" strokeWidth="2" />
          <circle cx="50" cy="50" r="30" stroke="rgba(255, 184, 0, 0.2)" strokeWidth="3" />
          <text x="42" y="62" fill="#FFB800" fontSize="36" fontWeight="900">?</text>
        </svg>
      </SvgContainer>
      <KeyPhraseHighlight text="Who Actually Did This?" color="#FFB800" />
    </AbsoluteFill>
  );
};

// Beat 11: Xiaomi Reveal
export const Beat11: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={240}>
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
          <rect x="25" y="10" width="50" height="80" rx="8" stroke="#FF5A5F" strokeWidth="4" />
          {/* Abstract smartphone details */}
          <line x1="45" y1="18" x2="55" y2="18" stroke="#FF5A5F" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="78" r="5" fill="#FF5A5F" />
          {/* Generic chip icon inside the phone */}
          <rect x="38" y="32" width="24" height="24" rx="4" stroke="#FF5A5F" strokeWidth="3" />
          <path d="M50 26 L50 32 M50 56 L50 62 M32 44 L38 44 M56 44 L62 44" stroke="#FF5A5F" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 12: 4.21 Trillion tokens/week
export const Beat12: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30 }}>
      {/* Token flow visualization */}
      <svg width="400" height="120" viewBox="0 0 400 120" fill="none">
        {[...Array(6)].map((_, i) => {
          const xOffset = ((frame * 3 + i * 70) % 400);
          return (
            <circle key={i} cx={xOffset} cy={60} r="8" fill="#FF5A5F" opacity={0.8} />
          );
        })}
        <rect x="180" y="30" width="40" height="60" rx="6" stroke="#fff" strokeWidth="3" />
        <line x1="200" y1="30" x2="200" y2="90" stroke="#fff" strokeWidth="2" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <HeroNumber value="4.21 TRILLION" color="#FF5A5F" />
        <div style={{ fontFamily: displayFontFamily, fontSize: 24, fontWeight: 700, color: "#fff" }}>TOKENS EVERY SINGLE WEEK</div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 13: 21.1% Share comparison vs OpenAI
export const Beat13: React.FC = () => {
  const frame = useCurrentFrame();
  const xiaomiHeight = interpolate(frame, [0, 45], [0, 160], { extrapolateRight: "clamp" });
  const openAIHeight = interpolate(frame, [0, 45], [0, 140], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 100 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ height: 200, display: "flex", alignItems: "flex-end" }}>
          <div style={{ width: 80, height: xiaomiHeight, background: "linear-gradient(0deg, #b91c1c, #FF5A5F)", borderRadius: "8px 8px 0 0" }} />
        </div>
        <HeroNumber value="21.1%" color="#FF5A5F" />
        <div style={{ fontFamily: displayFontFamily, fontSize: 20, color: "#94a3b8" }}>Xiaomi</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ height: 200, display: "flex", alignItems: "flex-end" }}>
          <div style={{ width: 80, height: openAIHeight, background: "linear-gradient(0deg, #0e7490, #00F0FF)", borderRadius: "8px 8px 0 0" }} />
        </div>
        <HeroNumber value="19.0%" color="#00F0FF" />
        <div style={{ fontFamily: displayFontFamily, fontSize: 20, color: "#94a3b8" }}>OpenAI</div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 14: Z.ai GLM-5.2
export const Beat14: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={240}>
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
          {/* Dual chip overlay layout */}
          <rect x="20" y="20" width="45" height="45" rx="6" stroke="#FF5A5F" strokeWidth="4" />
          <rect x="35" y="35" width="45" height="45" rx="6" stroke="#FFB800" strokeWidth="4" />
          <path d="M15 30 L20 30 M15 45 L20 45 M15 60 L20 60" stroke="#FF5A5F" strokeWidth="3" />
          <path d="M80 40 L85 40 M80 55 L85 55 M80 70 L85 70" stroke="#FFB800" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 15: US vs China Map Node
export const Beat15: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={320}>
        <svg width="280" height="200" viewBox="0 0 140 100" fill="none">
          {/* Abstract Country Node Maps */}
          <circle cx="35" cy="50" r="22" stroke="#00F0FF" strokeWidth="3" strokeDasharray="4 4" />
          <circle cx="35" cy="50" r="4" fill="#00F0FF" />
          <text x="25" y="85" fill="#00F0FF" fontFamily={displayFontFamily} fontSize="14" fontWeight="bold">US</text>

          {/* VS center indicator */}
          <circle cx="70" cy="50" r="10" stroke="#fff" strokeWidth="2" />
          <text x="64" y="55" fill="#fff" fontFamily={displayFontFamily} fontSize="12" fontWeight="bold">VS</text>

          <circle cx="105" cy="50" r="22" stroke="#FF5A5F" strokeWidth="3" strokeDasharray="4 4" />
          <circle cx="105" cy="50" r="4" fill="#FF5A5F" />
          <text x="92" y="85" fill="#FF5A5F" fontFamily={displayFontFamily} fontSize="14" fontWeight="bold">CHINA</text>
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 16: Benchmark charts
export const Beat16: React.FC = () => {
  const frame = useCurrentFrame();
  const barWidth1 = interpolate(frame, [0, 45], [0, 200], { extrapolateRight: "clamp" });
  const barWidth2 = interpolate(frame, [0, 45], [0, 192], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, width: 400 }}>
        <div>
          <div style={{ fontFamily: displayFontFamily, fontSize: 18, color: "#fff", marginBottom: 8 }}>Top US Model Benchmark</div>
          <div style={{ height: 24, width: barWidth1, background: "linear-gradient(90deg, #0e7490, #00F0FF)", borderRadius: 6 }} />
        </div>
        <div>
          <div style={{ fontFamily: displayFontFamily, fontSize: 18, color: "#fff", marginBottom: 8 }}>GLM-5.2 Benchmark</div>
          <div style={{ height: 24, width: barWidth2, background: "linear-gradient(90deg, #b91c1c, #FF5A5F)", borderRadius: 6 }} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 17: Close enough, for less
export const Beat17: React.FC = () => {
  const frame = useCurrentFrame();
  const tilt = Math.sin(frame / 15) * 8; // Tipping animation
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
      <SvgContainer>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" style={{ transform: `rotate(${tilt}deg)` }}>
          {/* Balance Scale */}
          <line x1="50" y1="20" x2="50" y2="80" stroke="#fff" strokeWidth="4" />
          <line x1="20" y1="80" x2="80" y2="80" stroke="#fff" strokeWidth="4" />
          <line x1="20" y1="35" x2="80" y2="35" stroke="#fff" strokeWidth="4" />
          {/* Tipping pans */}
          <circle cx="20" cy="55" r="10" stroke="#FF5A5F" strokeWidth="3" />
          <text x="14" y="88" fill="#FF5A5F" fontSize="11" fontWeight="bold">Price</text>

          <circle cx="80" cy="55" r="10" stroke="#00F0FF" strokeWidth="3" />
          <text x="68" y="88" fill="#00F0FF" fontSize="11" fontWeight="bold">Quality</text>
        </svg>
      </SvgContainer>
      <KeyPhraseHighlight text="Close Enough, For Less" color="#FF5A5F" />
    </AbsoluteFill>
  );
};

// Beat 18: Price tag scaling up
export const Beat18: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <path d="M20 50 L50 20 L80 50 L80 80 L20 80 Z" stroke="#FFB800" strokeWidth="4" />
          <circle cx="50" cy="35" r="5" stroke="#FFB800" strokeWidth="3" />
          {/* Dollar symbol */}
          <text x="42" y="68" fill="#FFB800" fontSize="24" fontWeight="bold">$</text>
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 19: Case study folder
export const Beat19: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <path d="M15 25 L40 25 L48 35 L85 35 L85 80 L15 80 Z" stroke="#FFB800" strokeWidth="4" />
          {/* Paper lines inside */}
          <line x1="28" y1="48" x2="72" y2="48" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="28" y1="58" x2="72" y2="58" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="28" y1="68" x2="58" y2="68" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 20: Coinbase Exchange
export const Beat20: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          {/* Styled generic shield/coin representing exchange */}
          <circle cx="50" cy="50" r="35" stroke="#FFB800" strokeWidth="4" />
          <path d="M50 25 C65 25 70 35 70 50 C70 65 65 75 50 75" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="50" r="10" fill="#FFB800" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 21: Auto Sweep (sweeping tasks)
export const Beat21: React.FC = () => {
  const frame = useCurrentFrame();
  const sweep = interpolate(frame, [0, 45], [-120, 240], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: 300, height: 160, border: "2px solid rgba(255,255,255,0.1)", borderRadius: 12, overflow: "hidden" }}>
        {/* Task boxes */}
        <div style={{ position: "absolute", left: 30, top: 40, width: 60, height: 30, border: "2px solid #00F0FF", borderRadius: 6 }} />
        <div style={{ position: "absolute", left: 110, top: 40, width: 60, height: 30, border: "2px solid #00F0FF", borderRadius: 6 }} />
        <div style={{ position: "absolute", left: 190, top: 40, width: 60, height: 30, border: "2px solid #00F0FF", borderRadius: 6 }} />

        <div style={{ position: "absolute", left: 30, top: 90, width: 60, height: 30, border: "2px solid #FF5A5F", borderRadius: 6 }} />
        <div style={{ position: "absolute", left: 110, top: 90, width: 60, height: 30, border: "2px solid #FF5A5F", borderRadius: 6 }} />
        <div style={{ position: "absolute", left: 190, top: 90, width: 60, height: 30, border: "2px solid #FF5A5F", borderRadius: 6 }} />

        {/* Sweep laser line */}
        <div
          style={{
            position: "absolute",
            left: sweep,
            top: 0,
            width: 4,
            height: "100%",
            backgroundColor: "#FFB800",
            boxShadow: "0 0 15px #FFB800",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

// Beat 22: Automated Routing Decision Tree
export const Beat22: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={240}>
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="18" r="8" stroke="#FFB800" strokeWidth="3" />
          {/* Decision pathways */}
          <line x1="45" y1="24" x2="25" y2="44" stroke="#fff" strokeWidth="3" />
          <line x1="55" y1="24" x2="75" y2="44" stroke="#fff" strokeWidth="3" />

          <rect x="10" y="44" width="30" height="20" rx="4" stroke="#FF5A5F" strokeWidth="3" />
          <text x="14" y="58" fill="#FF5A5F" fontSize="9" fontWeight="bold">Routine</text>

          <rect x="60" y="44" width="30" height="20" rx="4" stroke="#00F0FF" strokeWidth="3" />
          <text x="64" y="58" fill="#00F0FF" fontSize="9" fontWeight="bold">Complex</text>

          {/* Outputs */}
          <line x1="25" y1="64" x2="25" y2="82" stroke="#FF5A5F" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="75" y1="64" x2="75" y2="82" stroke="#00F0FF" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="25" cy="86" r="4" fill="#FF5A5F" />
          <circle cx="75" cy="86" r="4" fill="#00F0FF" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 23: Complexity & Cost gauges
export const Beat23: React.FC = () => {
  const frame = useCurrentFrame();
  const angle1 = interpolate(frame, [0, 40], [-60, 45], { extrapolateRight: "clamp" });
  const angle2 = interpolate(frame, [0, 40], [60, -45], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 80 }}>
      <div>
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
          <path d="M20 80 A40 40 0 0 1 80 80" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
          <path d="M20 80 A40 40 0 0 1 80 80" stroke="#00F0FF" strokeWidth="8" strokeLinecap="round" strokeDasharray="80 180" />
          {/* Dial Needle */}
          <line x1="50" y1="80" x2="50" y2="45" stroke="#fff" strokeWidth="4" strokeLinecap="round" transform={`rotate(${angle1} 50 80)`} />
          <text x="26" y="95" fill="#fff" fontFamily={displayFontFamily} fontSize="12" fontWeight="bold">Complexity</text>
        </svg>
      </div>

      <div>
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
          <path d="M20 80 A40 40 0 0 1 80 80" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
          <path d="M20 80 A40 40 0 0 1 80 80" stroke="#FF5A5F" strokeWidth="8" strokeLinecap="round" strokeDasharray="50 180" />
          {/* Dial Needle */}
          <line x1="50" y1="80" x2="50" y2="45" stroke="#fff" strokeWidth="4" strokeLinecap="round" transform={`rotate(${angle2} 50 80)`} />
          <text x="38" y="95" fill="#fff" fontFamily={displayFontFamily} fontSize="12" fontWeight="bold">Cost</text>
        </svg>
      </div>
    </AbsoluteFill>
  );
};

// Beat 24: Diverging arrows (Cost down, Usage up)
export const Beat24: React.FC = () => {
  const frame = useCurrentFrame();
  const arrowScale1 = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 120 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <svg width="120" height="160" viewBox="0 0 80 120" fill="none" style={{ transform: `scaleY(${arrowScale1})` }}>
          <path d="M40 10 L40 110 M20 90 L40 110 L60 90" stroke="#FF5A5F" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <HeroNumber value="HALF" color="#FF5A5F" />
        <div style={{ fontFamily: displayFontFamily, fontSize: 18, color: "#94a3b8" }}>Spending</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <svg width="120" height="160" viewBox="0 0 80 120" fill="none" style={{ transform: `scaleY(${arrowScale1})` }}>
          <path d="M40 110 L40 10 M20 30 L40 10 L60 30" stroke="#00F0FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <HeroNumber value="UP" color="#00F0FF" />
        <div style={{ fontFamily: displayFontFamily, fontSize: 18, color: "#94a3b8" }}>Usage</div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 25: Spending down, usage up (Exclamation warning)
export const Beat25: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
      <SvgContainer>
        <svg width="160" height="160" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="42" stroke="#FFB800" strokeWidth="4" />
          <circle cx="50" cy="50" r="34" stroke="#FFB800" strokeWidth="2" strokeDasharray="4 4" />
          {/* Warning sign */}
          <line x1="50" y1="30" x2="50" y2="58" stroke="#FFB800" strokeWidth="5" strokeLinecap="round" />
          <circle cx="50" cy="70" r="4.5" fill="#FFB800" />
        </svg>
      </SvgContainer>
      <KeyPhraseHighlight text="Spending Down, Usage Up" color="#FFB800" />
    </AbsoluteFill>
  );
};

// Beat 26: Premium prices warning triangles
export const Beat26: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
      <div style={{ display: "flex", gap: 40 }}>
        <SvgContainer size={120}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M50 15 L90 85 L10 85 Z" stroke="#FF5A5F" strokeWidth="4" />
            <text x="44" y="65" fill="#FF5A5F" fontSize="20" fontWeight="bold">$</text>
          </svg>
        </SvgContainer>
        <SvgContainer size={120}>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M50 15 L90 85 L10 85 Z" stroke="#FF5A5F" strokeWidth="4" />
            <text x="44" y="65" fill="#FF5A5F" fontSize="20" fontWeight="bold">$</text>
          </svg>
        </SvgContainer>
      </div>
      <KeyPhraseHighlight text="Read That Twice" color="#00F0FF" />
    </AbsoluteFill>
  );
};

// Beat 27: Premium crown
export const Beat27: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <path d="M15 75 L25 35 L45 55 L50 25 L55 25 L60 55 L75 35 L85 75 Z" stroke="#FFB800" strokeWidth="4" strokeLinejoin="round" />
          <line x1="10" y1="75" x2="90" y2="75" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 28: Crown cracking
export const Beat28: React.FC = () => {
  const frame = useCurrentFrame();
  const crack = interpolate(frame, [10, 50], [100, 0], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <path d="M15 75 L25 35 L45 55 L50 25 L55 25 L60 55 L75 35 L85 75 Z" stroke="rgba(255, 184, 0, 0.4)" strokeWidth="4" strokeLinejoin="round" />
          <line x1="10" y1="75" x2="90" y2="75" stroke="rgba(255, 184, 0, 0.4)" strokeWidth="4" strokeLinecap="round" />
          {/* Crack lightning bolt */}
          <path d="M50 25 L45 45 L55 60 L40 75" stroke="#FF5A5F" strokeWidth="3" strokeDasharray="100" strokeDashoffset={crack} />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 29: Checkbox folder (everyday workload)
export const Beat29: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <path d="M15 25 L40 25 L48 35 L85 35 L85 80 L15 80 Z" stroke="#00F0FF" strokeWidth="4" />
          {/* Checkmark box */}
          <rect x="30" y="48" width="16" height="16" rx="3" stroke="#00F0FF" strokeWidth="3" />
          <path d="M34 56 L38 60 L46 50" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" />
          <line x1="54" y1="56" x2="74" y2="56" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 30: Smart enough at this price
export const Beat30: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
      <SvgContainer>
        <svg width="160" height="160" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" stroke="#FFB800" strokeWidth="4" />
          {/* Question mark split between dollar and smart */}
          <path d="M42 42 A12 12 0 0 1 58 42 C58 50 50 52 50 60" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="72" r="4.5" fill="#FFB800" />
        </svg>
      </SvgContainer>
      <KeyPhraseHighlight text="Smart Enough, At This Price" color="#FFB800" />
    </AbsoluteFill>
  );
};

// Beat 31: Pricing structure collapses (blocks sliding)
export const Beat31: React.FC = () => {
  const frame = useCurrentFrame();
  const slide1 = interpolate(frame, [10, 45], [0, 40], { extrapolateRight: "clamp", easing: Easing.bezier(0.25, 1, 0.5, 1) });
  const slide2 = interpolate(frame, [15, 50], [0, -35], { extrapolateRight: "clamp", easing: Easing.bezier(0.25, 1, 0.5, 1) });

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: 200, height: 200 }}>
        {/* Pyramid Blocks */}
        <div style={{ position: "absolute", left: 80, top: 40, width: 40, height: 40, border: "3px solid #00F0FF", borderRadius: 4, transform: `translateY(${slide1}px) rotate(${slide1 * 0.5}deg)` }} />
        <div style={{ position: "absolute", left: 50, top: 90, width: 45, height: 40, border: "3px solid #FF5A5F", borderRadius: 4, transform: `translateX(${slide2}px) rotate(${slide2 * 0.4}deg)` }} />
        <div style={{ position: "absolute", left: 105, top: 90, width: 45, height: 40, border: "3px solid #FF5A5F", borderRadius: 4, transform: `translateX(${slide1}px) rotate(${-slide1 * 0.3}deg)` }} />
        <div style={{ position: "absolute", left: 20, top: 140, width: 50, height: 40, border: "3px solid #FFB800", borderRadius: 4 }} />
        <div style={{ position: "absolute", left: 75, top: 140, width: 50, height: 40, border: "3px solid #FFB800", borderRadius: 4 }} />
        <div style={{ position: "absolute", left: 130, top: 140, width: 50, height: 40, border: "3px solid #FFB800", borderRadius: 4 }} />
      </div>
    </AbsoluteFill>
  );
};

// Beat 32: Grid routing map
export const Beat32: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={240}>
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
          {/* Grid nodes */}
          <rect x="15" y="15" width="20" height="20" rx="4" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <rect x="65" y="15" width="20" height="20" rx="4" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <rect x="15" y="65" width="20" height="20" rx="4" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <rect x="65" y="65" width="20" height="20" rx="4" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

          {/* Active routing path */}
          <circle cx="25" cy="25" r="4" fill="#FFB800" />
          <circle cx="75" cy="75" r="4" fill="#FFB800" />
          <path d="M29 25 L50 25 L50 75 L71 75" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 33: Hard problems vs routine scale
export const Beat33: React.FC = () => {
  const frame = useCurrentFrame();
  const rotate = interpolate(frame, [0, 50], [0, -12], { extrapolateRight: "clamp", easing: Easing.bezier(0.25, 1, 0.5, 1) });
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
          <line x1="50" y1="20" x2="50" y2="80" stroke="#fff" strokeWidth="4" />
          <line x1="20" y1="80" x2="80" y2="80" stroke="#fff" strokeWidth="4" />
          <line x1="15" y1="35" x2="85" y2="35" stroke="#fff" strokeWidth="4" />

          {/* Hard task node */}
          <rect x="5" y="45" width="20" height="12" rx="2" stroke="#00F0FF" strokeWidth="3" />
          {/* Routine task node */}
          <rect x="75" y="40" width="20" height="22" rx="2" stroke="#FF5A5F" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 34: Price tag deflating/shrinking
export const Beat34: React.FC = () => {
  const frame = useCurrentFrame();
  const tagScale = interpolate(frame, [0, 45], [1, 0.6], { extrapolateRight: "clamp", easing: Easing.bezier(0.25, 1, 0.5, 1) });
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" style={{ transform: `scale(${tagScale})` }}>
          <path d="M20 50 L50 20 L80 50 L80 80 L20 80 Z" stroke="#FF5A5F" strokeWidth="4" />
          <circle cx="50" cy="35" r="5" stroke="#FF5A5F" strokeWidth="3" />
          <text x="42" y="68" fill="#FF5A5F" fontSize="24" fontWeight="bold">$</text>
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 35: Scanning Radar CTA
export const Beat35: React.FC = () => {
  const frame = useCurrentFrame();
  const radarRotation = (frame * 4) % 360;
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="#00F0FF" strokeWidth="3" />
          <circle cx="50" cy="50" r="25" stroke="#00F0FF" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="10" stroke="#00F0FF" strokeWidth="1.5" />
          {/* Radar sweeping hand */}
          <line x1="50" y1="50" x2="50" y2="10" stroke="#00F0FF" strokeWidth="3" strokeLinecap="round" transform={`rotate(${radarRotation} 50 50)`} />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 36: Newspaper headline card
export const Beat36: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={240}>
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
          <rect x="15" y="15" width="70" height="70" rx="6" stroke="#FFB800" strokeWidth="4" />
          {/* Newspaper details */}
          <rect x="25" y="25" width="22" height="18" stroke="#FFB800" strokeWidth="3" />
          <line x1="54" y1="28" x2="75" y2="28" stroke="#fff" strokeWidth="3" />
          <line x1="54" y1="38" x2="75" y2="38" stroke="#fff" strokeWidth="3" />
          <line x1="25" y1="54" x2="75" y2="54" stroke="#fff" strokeWidth="3" />
          <line x1="25" y1="64" x2="75" y2="64" stroke="#fff" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 37: Puzzle pieces snapping
export const Beat37: React.FC = () => {
  const frame = useCurrentFrame();
  const snap = interpolate(frame, [0, 35], [25, 0], { extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) });
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", width: 140, height: 140 }}>
        {/* Left puzzle */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", left: -snap, top: 30 }}>
          <path d="M10 10 L70 10 L70 30 C60 30 60 50 70 50 L70 70 L10 70 Z" stroke="#FF5A5F" strokeWidth="4" strokeLinejoin="round" />
        </svg>
        {/* Right puzzle */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", right: -snap, top: 30 }}>
          <path d="M10 10 L70 10 L70 70 L10 70 L10 50 C20 50 20 30 10 30 Z" stroke="#00F0FF" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </div>
    </AbsoluteFill>
  );
};

// Beat 38: Subscribing bell vibrating
export const Beat38: React.FC = () => {
  const frame = useCurrentFrame();
  const shake = interpolate(frame, [0, 10, 20, 30, 40, 50], [0, 10, -10, 10, -10, 0], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" style={{ transform: `rotate(${shake}deg)` }}>
          <path d="M50 12 A16 16 0 0 1 66 28 L66 55 C66 65 78 70 78 70 L22 70 C22 70 34 65 34 55 L34 28 A16 16 0 0 1 50 12 Z" stroke="#FFB800" strokeWidth="4" strokeLinejoin="round" />
          <path d="M42 78 A10 10 0 0 0 58 78" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 39: Processor microchip
export const Beat39: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <rect x="25" y="25" width="50" height="50" rx="8" stroke="#00F0FF" strokeWidth="4" />
          <rect x="37" y="37" width="26" height="26" rx="4" stroke="#00F0FF" strokeWidth="3" />
          {/* Pins */}
          <path d="M15 35 L25 35 M15 50 L25 50 M15 65 L25 65 M75 35 L85 35 M75 50 L85 50 M75 65 L85 65 M35 15 L35 25 M50 15 L50 25 M65 15 L65 25 M35 75 L35 85 M50 75 L50 85 M65 75 L65 85" stroke="#00F0FF" strokeWidth="3" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 40: Mechanical gears rotating
export const Beat40: React.FC = () => {
  const frame = useCurrentFrame();
  const rotation = frame * 2.5;
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
          <circle cx="50" cy="50" r="28" stroke="#FFB800" strokeWidth="4" />
          <circle cx="50" cy="50" r="12" stroke="#FFB800" strokeWidth="3" />
          {/* Gear teeth */}
          <rect x="46" y="10" width="8" height="15" rx="2" fill="#FFB800" />
          <rect x="46" y="75" width="8" height="15" rx="2" fill="#FFB800" />
          <rect x="10" y="46" width="15" height="8" rx="2" fill="#FFB800" />
          <rect x="75" y="46" width="15" height="8" rx="2" fill="#FFB800" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 41: Cost vs Performance curve crossing
export const Beat41: React.FC = () => {
  const frame = useCurrentFrame();
  const width = interpolate(frame, [0, 45], [0, 160], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
      <SvgContainer>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <line x1="15" y1="85" x2="85" y2="85" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="15" x2="15" y2="85" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          {/* Red cost curve dropping */}
          <path d="M15 20 Q50 60 85 80" stroke="#FF5A5F" strokeWidth="4" strokeLinecap="round" strokeDasharray="120" strokeDashoffset={120 - width * 0.75} />
          {/* Teal performance curve rising */}
          <path d="M15 75 Q50 40 85 25" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" strokeDasharray="120" strokeDashoffset={120 - width * 0.75} />
        </svg>
      </SvgContainer>
      <KeyPhraseHighlight text="Cost-Efficiency Wins?" color="#FF5A5F" />
    </AbsoluteFill>
  );
};

// Beat 42: Smart bulb morph to coins
export const Beat42: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40 }}>
      <SvgContainer>
        <svg width="160" height="160" viewBox="0 0 100 100" fill="none">
          {/* Bulb and Coin stack blend */}
          <circle cx="50" cy="38" r="22" stroke="#FFB800" strokeWidth="4" />
          <path d="M38 58 L62 58 M42 66 L58 66 M45 74 L55 74" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" />
          {/* Rays */}
          <line x1="50" y1="10" x2="50" y2="4" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="38" x2="14" y2="38" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="38" x2="86" y2="38" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </SvgContainer>
      <KeyPhraseHighlight text="Smart Enough & Cheaper" color="#FFB800" />
    </AbsoluteFill>
  );
};

// Beat 43: Diverging paths with question mark
export const Beat43: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="85" r="5" fill="#fff" />
          <line x1="50" y1="80" x2="50" y2="55" stroke="#fff" strokeWidth="4" />
          {/* Splitting paths */}
          <path d="M50 55 C50 40 25 35 25 20" stroke="#FF5A5F" strokeWidth="4" strokeLinecap="round" />
          <path d="M50 55 C50 40 75 35 75 20" stroke="#00F0FF" strokeWidth="4" strokeLinecap="round" />
          <circle cx="25" cy="15" r="4" fill="#FF5A5F" />
          <circle cx="75" cy="15" r="4" fill="#00F0FF" />
          {/* "?" in center */}
          <text x="44" y="44" fill="#FFB800" fontSize="24" fontWeight="bold">?</text>
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};

// Beat 44: Comments chat bubble
export const Beat44: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SvgContainer size={220}>
        <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
          <path d="M15 25 L85 25 L85 65 L45 65 L25 80 L25 65 L15 65 Z" stroke="#FFB800" strokeWidth="4" strokeLinejoin="round" />
          {/* Bubble chat text lines */}
          <line x1="30" y1="40" x2="70" y2="40" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="50" x2="60" y2="50" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </SvgContainer>
    </AbsoluteFill>
  );
};
