import {
  useCurrentFrame,
  useVideoConfig,
  Audio,
  staticFile,
  interpolate,
  spring,
  random,
} from "remotion";
import React from "react";
import subtitlesData from "./subtitles.json";

// ─── Visual Theme Config ─────────────────────────────────────────────
const THEME = {
  bg: "#08090d",
  grid: "rgba(255, 255, 255, 0.03)",
  usBlue: "#00d2ff",
  usBlueGlow: "rgba(0, 210, 255, 0.4)",
  chinaRed: "#ff3366",
  chinaRedGlow: "rgba(255, 51, 102, 0.4)",
  gold: "#ffcc00",
  goldGlow: "rgba(255, 204, 0, 0.4)",
  textMain: "#ffffff",
  textMuted: "rgba(255, 255, 255, 0.6)",
};

// ─── SVG Helper Components ───────────────────────────────────────────
const ChipIcon: React.FC<{ color: string; size?: number; pulse?: boolean }> = ({
  color,
  size = 120,
  pulse = false,
}) => {
  const frame = useCurrentFrame();
  const opacity = pulse ? interpolate(Math.sin(frame * 0.1), [-1, 1], [0.5, 1]) : 1;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }}>
      {/* Outer connections */}
      <rect x="25" y="25" width="50" height="50" fill="none" stroke={color} strokeWidth="3" rx="4" />
      <rect x="35" y="35" width="30" height="30" fill="none" stroke={color} strokeWidth="2" />
      <line x1="50" y1="10" x2="50" y2="25" stroke={color} strokeWidth="3" />
      <line x1="35" y1="10" x2="35" y2="25" stroke={color} strokeWidth="3" />
      <line x1="65" y1="10" x2="65" y2="25" stroke={color} strokeWidth="3" />

      <line x1="50" y1="75" x2="50" y2="90" stroke={color} strokeWidth="3" />
      <line x1="35" y1="75" x2="35" y2="90" stroke={color} strokeWidth="3" />
      <line x1="65" y1="75" x2="65" y2="90" stroke={color} strokeWidth="3" />

      <line x1="10" y1="50" x2="25" y2="50" stroke={color} strokeWidth="3" />
      <line x1="10" y1="35" x2="25" y2="35" stroke={color} strokeWidth="3" />
      <line x1="10" y1="65" x2="25" y2="65" stroke={color} strokeWidth="3" />

      <line x1="75" y1="50" x2="90" y2="50" stroke={color} strokeWidth="3" />
      <line x1="75" y1="35" x2="90" y2="35" stroke={color} strokeWidth="3" />
      <line x1="75" y1="65" x2="90" y2="65" stroke={color} strokeWidth="3" />
      {/* Center core */}
      <rect x="42" y="42" width="16" height="16" fill={color} opacity="0.8" rx="2" />
    </svg>
  );
};

const NetworkIcon: React.FC<{ color: string; size?: number }> = ({ color, size = 120 }) => {
  const frame = useCurrentFrame();
  const rotate = frame * 0.4;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <circle cx="50" cy="50" r="8" fill={color} />
      {/* Nodes */}
      <circle cx="20" cy="30" r="6" fill={color} />
      <circle cx="80" cy="30" r="6" fill={color} />
      <circle cx="30" cy="80" r="6" fill={color} />
      <circle cx="70" cy="80" r="6" fill={color} />
      {/* Connections */}
      <line x1="50" y1="50" x2="20" y2="30" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
      <line x1="50" y1="50" x2="80" y2="30" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
      <line x1="50" y1="50" x2="30" y2="80" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
      <line x1="50" y1="50" x2="70" y2="80" stroke={color} strokeWidth="2" strokeDasharray="4 2" />
      <line x1="20" y1="30" x2="80" y2="30" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="30" y1="80" x2="70" y2="80" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="30" x2="30" y2="80" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="80" y1="30" x2="70" y2="80" stroke={color} strokeWidth="1" opacity="0.5" />
    </svg>
  );
};

// ─── Grid Background ─────────────────────────────────────────────────
const GridBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const yShift = (frame * 0.5) % 40;
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(${THEME.grid} 1px, transparent 1px), linear-gradient(90deg, ${THEME.grid} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        backgroundPosition: `0px ${yShift}px`,
        opacity: 0.8,
        pointerEvents: "none",
      }}
    />
  );
};

// ─── Dynamic Subtitle Component (Pop Kinetic Window) ──────────────────
const WordSyncSubtitles: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  const timeMs = currentTime * 1000;
  
  // Find current active word index
  let activeIdx = subtitlesData.findIndex((w) => timeMs >= w.startMs && timeMs <= w.endMs);
  if (activeIdx === -1) {
    activeIdx = subtitlesData.findIndex((w) => w.startMs > timeMs);
    if (activeIdx > 0) activeIdx = activeIdx - 1;
  }
  if (activeIdx === -1) activeIdx = 0;

  const startIdx = Math.max(0, activeIdx - 2);
  const endIdx = Math.min(subtitlesData.length, startIdx + 5);
  const visibleWords = subtitlesData.slice(startIdx, endIdx);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "8%",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "16px 36px",
          borderRadius: "24px",
          backgroundColor: "rgba(8, 9, 13, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6)",
        }}
      >
        {visibleWords.map((word, i) => {
          const globalIdx = startIdx + i;
          const isWordActive = globalIdx === activeIdx;
          const wordAge = timeMs - word.startMs;
          const scale = isWordActive ? interpolate(wordAge, [0, 80], [1.0, 1.2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1.0;

          return (
            <span
              key={globalIdx}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "36px",
                fontWeight: isWordActive ? 800 : 500,
                color: isWordActive ? THEME.gold : "rgba(255, 255, 255, 0.35)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                transform: `scale(${scale})`,
                textShadow: isWordActive ? `0 0 15px ${THEME.goldGlow}` : "none",
                display: "inline-block",
              }}
            >
              {word.text.trim()}
            </span>
          );
        })}
      </div>
    </div>
  );
};

// ─── SCENE COMPONENTS ────────────────────────────────────────────────

// ── SCENE 1: Intro Split Screen (0.0s - 26.2s)
const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const dividerPulse = interpolate(Math.sin(frame * 0.08), [-1, 1], [2, 6]);

  return (
    <div style={{ display: "flex", width: "100%", height: "100%", position: "relative" }}>
      {/* US Left Side */}
      <div
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 210, 255, 0.02)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <ChipIcon color={THEME.usBlue} size={150} pulse />
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: THEME.usBlue,
            fontSize: "44px",
            fontWeight: 800,
            marginTop: "30px",
            letterSpacing: "6px",
            textShadow: `0 0 20px ${THEME.usBlueGlow}`,
          }}
        >
          UNITED STATES
        </h2>
        <span style={{ color: THEME.textMuted, fontSize: "18px", marginTop: "8px", letterSpacing: "2px" }}>
          RAW COMPUTING CAPABILITY
        </span>
      </div>

      {/* Middle Neon Boundary */}
      <div
        style={{
          width: `${dividerPulse}px`,
          backgroundColor: THEME.gold,
          boxShadow: `0 0 25px ${THEME.goldGlow}, 0 0 10px ${THEME.gold}`,
          height: "100%",
          zIndex: 10,
        }}
      />

      {/* China Right Side */}
      <div
        style={{
          flex: 1,
          backgroundColor: "rgba(255, 51, 102, 0.02)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <NetworkIcon color={THEME.chinaRed} size={150} />
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: THEME.chinaRed,
            fontSize: "44px",
            fontWeight: 800,
            marginTop: "30px",
            letterSpacing: "6px",
            textShadow: `0 0 20px ${THEME.chinaRedGlow}`,
          }}
        >
          CHINA
        </h2>
        <span style={{ color: THEME.textMuted, fontSize: "18px", marginTop: "8px", letterSpacing: "2px" }}>
          SPEED & COST EFFICIENCY
        </span>
      </div>

      {/* Floating Center Overlay */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 20,
        }}
      >
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "72px",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "8px",
            margin: 0,
            textShadow: "0 5px 15px rgba(0,0,0,0.5)",
          }}
        >
          THE GLOBAL AI RACE
        </h1>
        <div
          style={{
            height: "4px",
            width: "150px",
            backgroundColor: THEME.gold,
            margin: "15px auto",
            boxShadow: `0 0 10px ${THEME.gold}`,
          }}
        />
      </div>
    </div>
  );
};

// ── SCENE 2: Capability vs Cost War (26.2s - 48.2s)
const Scene2Capability: React.FC = () => {
  const frame = useCurrentFrame();
  const usScale = spring({ frame, fps: 30, config: { damping: 12 } });
  const chinaScale = spring({ frame: frame - 20, fps: 30, config: { damping: 12 } });

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 80px",
      }}
    >
      {/* US Capability Card */}
      <div
        style={{
          width: "420px",
          height: "450px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "24px",
          border: `2px solid ${THEME.usBlue}`,
          boxShadow: `0 10px 40px rgba(0, 0, 0, 0.5), 0 0 30px ${THEME.usBlueGlow}`,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          transform: `scale(${usScale})`,
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.usBlue, fontSize: "24px", fontWeight: 700, margin: 0, letterSpacing: "3px" }}>
          CAPABILITY GAP
        </h3>
        
        {/* Stopwatch Visual */}
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="53" r="30" fill="none" stroke={THEME.usBlue} strokeWidth="4" />
          <line x1="50" y1="23" x2="50" y2="15" stroke={THEME.usBlue} strokeWidth="4" />
          <line x1="50" y1="53" x2="50" y2="35" stroke={THEME.usBlue} strokeWidth="4" transform={`rotate(${frame * 3} 50 53)`} />
        </svg>

        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "48px", fontWeight: 900, color: "#fff", margin: 0 }}>
            8 MONTHS
          </h2>
          <span style={{ color: THEME.textMuted, fontSize: "16px", letterSpacing: "1px" }}>
            Ahead in Raw Performance
          </span>
        </div>
      </div>

      {/* China Cost Card */}
      <div
        style={{
          width: "420px",
          height: "450px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "24px",
          border: `2px solid ${THEME.chinaRed}`,
          boxShadow: `0 10px 40px rgba(0, 0, 0, 0.5), 0 0 30px ${THEME.chinaRedGlow}`,
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          transform: `scale(${chinaScale})`,
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.chinaRed, fontSize: "24px", fontWeight: 700, margin: 0, letterSpacing: "3px" }}>
          EFFICIENCY WAR
        </h3>
        
        {/* Price Tag Visual */}
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M20 20 L60 20 L85 45 L50 80 L15 45 Z" fill="none" stroke={THEME.chinaRed} strokeWidth="4" />
          <circle cx="35" cy="35" r="5" fill={THEME.chinaRed} />
          <path d="M45 45 L55 55 M55 45 L45 55" stroke={THEME.chinaRed} strokeWidth="3" />
        </svg>

        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "48px", fontWeight: 900, color: THEME.chinaRed, margin: 0, textShadow: `0 0 15px ${THEME.chinaRedGlow}` }}>
            60x CHEAPER
          </h2>
          <span style={{ color: THEME.textMuted, fontSize: "16px", letterSpacing: "1px" }}>
            To Build and Train Models
          </span>
        </div>
      </div>
    </div>
  );
};

// ── SCENE 3: 3D Stacked Layers (48.2s - 69.9s)
const Scene3ThreeLayers: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  
  // Highlighting thresholds based on times
  const showData = currentTime >= 53.0 && currentTime < 56.0;
  const showSoftware = currentTime >= 56.0 && currentTime < 60.0;
  const showHardware = currentTime >= 60.0 && currentTime < 63.9;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        perspective: "800px",
      }}
    >
      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "40px", fontWeight: 800, color: "#fff", marginBottom: "40px", letterSpacing: "4px" }}>
        THE THREE BATTLEGROUNDS
      </h2>

      {/* Layer Stack */}
      <div style={{ display: "flex", flexDirection: "column", gap: "25px", transform: "rotateX(25deg)", transformStyle: "preserve-3d" }}>
        
        {/* Layer 1: Data (Top) */}
        <div
          style={{
            width: "600px",
            height: "70px",
            backgroundColor: showData ? "rgba(255, 204, 0, 0.15)" : "rgba(255,255,255,0.02)",
            border: `2px solid ${showData ? THEME.gold : "rgba(255,255,255,0.1)"}`,
            boxShadow: showData ? `0 0 30px ${THEME.goldGlow}` : "none",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            padding: "0 30px",
            justifyContent: "space-between",
            transform: showData ? "translateY(-15px) translateZ(20px)" : "none",
            
          }}
        >
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: 700, color: showData ? THEME.gold : "#fff" }}>
            1. DATA LAYER
          </span>
          <span style={{ color: THEME.textMuted, fontSize: "16px" }}>
            Behavioral Signals vs Scraped Text
          </span>
        </div>

        {/* Layer 2: Software (Middle) */}
        <div
          style={{
            width: "600px",
            height: "70px",
            backgroundColor: showSoftware ? "rgba(0, 210, 255, 0.15)" : "rgba(255,255,255,0.02)",
            border: `2px solid ${showSoftware ? THEME.usBlue : "rgba(255,255,255,0.1)"}`,
            boxShadow: showSoftware ? `0 0 30px ${THEME.usBlueGlow}` : "none",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            padding: "0 30px",
            justifyContent: "space-between",
            transform: showSoftware ? "translateY(-15px) translateZ(20px)" : "none",
            
          }}
        >
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: 700, color: showSoftware ? THEME.usBlue : "#fff" }}>
            2. SOFTWARE LAYER
          </span>
          <span style={{ color: THEME.textMuted, fontSize: "16px" }}>
            Brute Force Scaling vs MoE Models
          </span>
        </div>

        {/* Layer 3: Hardware (Bottom) */}
        <div
          style={{
            width: "600px",
            height: "70px",
            backgroundColor: showHardware ? "rgba(255, 51, 102, 0.15)" : "rgba(255,255,255,0.02)",
            border: `2px solid ${showHardware ? THEME.chinaRed : "rgba(255,255,255,0.1)"}`,
            boxShadow: showHardware ? `0 0 30px ${THEME.chinaRedGlow}` : "none",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            padding: "0 30px",
            justifyContent: "space-between",
            transform: showHardware ? "translateY(-15px) translateZ(20px)" : "none",
            
          }}
        >
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px", fontWeight: 700, color: showHardware ? THEME.chinaRed : "#fff" }}>
            3. HARDWARE LAYER
          </span>
          <span style={{ color: THEME.textMuted, fontSize: "16px" }}>
            ASIC Chip Hegemony & Export Bans
          </span>
        </div>

      </div>
    </div>
  );
};

// ── SCENE 4: Closed Vault vs Open Box (69.9s - 94.3s)
const Scene4Philosophies: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  const frame = useCurrentFrame();
  const showVault = currentTime >= 73.4 && currentTime < 84.2;
  const showOpen = currentTime >= 84.2 && currentTime < 94.3;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 60px",
      }}
    >
      {/* Vault Philosophy */}
      <div
        style={{
          width: "440px",
          height: "440px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "32px",
          border: `2px solid ${showVault ? THEME.usBlue : "rgba(255,255,255,0.06)"}`,
          boxShadow: showVault ? `0 0 30px ${THEME.usBlueGlow}` : "none",
          padding: "35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          
          opacity: showOpen ? 0.3 : 1.0,
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.usBlue, fontSize: "22px", fontWeight: 700, letterSpacing: "2px" }}>
          CLOSED VAULT (USA)
        </h3>
        
        {/* Animated Vault Door */}
        <svg width="150" height="150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke={THEME.usBlue} strokeWidth="5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke={THEME.usBlue} strokeWidth="3" />
          {/* Vault dial locking animation */}
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="18"
            stroke={THEME.usBlue}
            strokeWidth="5"
            transform={showVault ? `rotate(${Math.min(90, frame * 0.8)} 50 50)` : "none"}
          />
          <circle cx="50" cy="50" r="8" fill={THEME.usBlue} />
        </svg>

        <p style={{ color: THEME.textMuted, fontSize: "16px", textAlign: "center", margin: 0 }}>
          Proprietary models, guarded weights, commercial licensing models (e.g. OpenAI).
        </p>
      </div>

      {/* Open Box Philosophy */}
      <div
        style={{
          width: "440px",
          height: "440px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "32px",
          border: `2px solid ${showOpen ? THEME.chinaRed : "rgba(255,255,255,0.06)"}`,
          boxShadow: showOpen ? `0 0 30px ${THEME.chinaRedGlow}` : "none",
          padding: "35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          
          opacity: showVault ? 0.3 : 1.0,
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.chinaRed, fontSize: "22px", fontWeight: 700, letterSpacing: "2px" }}>
          OPEN BOX (CHINA)
        </h3>
        
        {/* Animated Open Box with particles */}
        <svg width="150" height="150" viewBox="0 0 100 100">
          <path d="M20 50 L50 35 L80 50 L50 65 Z" fill="none" stroke={THEME.chinaRed} strokeWidth="4" />
          <path d="M20 50 L20 75 L50 90 L50 65" fill="none" stroke={THEME.chinaRed} strokeWidth="4" />
          <path d="M80 50 L80 75 L50 90 L50 65" fill="none" stroke={THEME.chinaRed} strokeWidth="4" />
          {/* Floating particle animations */}
          {showOpen && (
            <>
              <circle cx="50" cy={50 - (frame % 30)} r={3 + (frame % 3)} fill={THEME.chinaRed} opacity={1 - (frame % 30)/30} />
              <circle cx="35" cy={45 - ((frame + 10) % 35)} r="3" fill={THEME.chinaRed} opacity={1 - ((frame + 10) % 35)/35} />
              <circle cx="65" cy={45 - ((frame + 20) % 25)} r="4" fill={THEME.chinaRed} opacity={1 - ((frame + 20) % 25)/25} />
            </>
          )}
        </svg>

        <p style={{ color: THEME.textMuted, fontSize: "16px", textAlign: "center", margin: 0 }}>
          Open-source sharing, API democratization, community integration for speed.
        </p>
      </div>
    </div>
  );
};

// ── SCENE 5: USA Silicon Dominance vs Barriers (94.3s - 117.5s)
const Scene5Hardware: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  const showBarrier = currentTime >= 109.4;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* US H100 Silicon Grid */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ChipIcon color={THEME.usBlue} size={160} />
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.usBlue, fontSize: "24px", fontWeight: 700, marginTop: "20px" }}>
          NVIDIA H100 / B200
        </h3>
        <span style={{ color: THEME.textMuted }}>US Raw GPU Domination</span>
      </div>

      {/* Dynamic Export Restriction Fence */}
      <div
        style={{
          width: "20px",
          height: "350px",
          background: showBarrier ? `repeating-linear-gradient(45deg, ${THEME.chinaRed}, ${THEME.chinaRed} 10px, transparent 10px, transparent 20px)` : "rgba(255,255,255,0.05)",
          boxShadow: showBarrier ? `0 0 20px ${THEME.chinaRedGlow}` : "none",
          borderRadius: "10px",
          
          position: "relative",
        }}
      >
        {showBarrier && (
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(90deg)",
              color: "#fff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "4px",
              whiteSpace: "nowrap",
            }}
          >
            EXPORT BAN
          </span>
        )}
      </div>

      {/* Restricted China Silicon Grid */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: showBarrier ? 0.4 : 1.0,  }}>
        <ChipIcon color={THEME.chinaRed} size={120} />
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.chinaRed, fontSize: "24px", fontWeight: 700, marginTop: "20px" }}>
          DOMESTIC SILICON
        </h3>
        <span style={{ color: THEME.textMuted }}>Cut Off from Global Supply</span>
      </div>
    </div>
  );
};

// ── SCENE 6: Software: Brute Force vs MoE (117.5s - 154.1s)
const Scene6Software: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  const frame = useCurrentFrame();
  const showMoe = currentTime >= 131.8;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {/* Brute Force (USA) */}
      <div
        style={{
          width: "420px",
          height: "420px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "24px",
          border: `2px solid ${!showMoe ? THEME.usBlue : "rgba(255,255,255,0.06)"}`,
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: showMoe ? 0.3 : 1.0,
          
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.usBlue, fontSize: "22px", fontWeight: 700 }}>
          US: BRUTE FORCE
        </h3>
        
        {/* Massive server grid all firing */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", width: "200px" }}>
          {Array.from({ length: 25 }).map((_, idx) => {
            const isFlicker = random(idx) > 0.1; // almost always active
            return (
              <div
                key={idx}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "6px",
                  backgroundColor: isFlicker ? THEME.usBlue : "rgba(255,255,255,0.1)",
                  boxShadow: isFlicker ? `0 0 10px ${THEME.usBlueGlow}` : "none",
                }}
              />
            );
          })}
        </div>

        <span style={{ color: THEME.textMuted, fontSize: "14px", textAlign: "center" }}>
          Heavy GPU Clusters activating 100% of compute nodes on all tasks.
        </span>
      </div>

      {/* Mixture of Experts (China) */}
      <div
        style={{
          width: "420px",
          height: "420px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "24px",
          border: `2px solid ${showMoe ? THEME.chinaRed : "rgba(255,255,255,0.06)"}`,
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: !showMoe ? 0.3 : 1.0,
          
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.chinaRed, fontSize: "22px", fontWeight: 700 }}>
          CHINA: MIXTURE OF EXPERTS
        </h3>
        
        {/* Sparsely active server nodes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", width: "200px" }}>
          {Array.from({ length: 25 }).map((_, idx) => {
            // Only 2 or 3 nodes active at a time
            const group = idx % 5;
            const activeGroup = Math.floor(frame / 10) % 5;
            const isActive = group === activeGroup;

            return (
              <div
                key={idx}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "6px",
                  backgroundColor: isActive ? THEME.chinaRed : "rgba(255,255,255,0.1)",
                  boxShadow: isActive ? `0 0 10px ${THEME.chinaRedGlow}` : "none",
                  
                }}
              />
            );
          })}
        </div>

        <span style={{ color: THEME.textMuted, fontSize: "14px", textAlign: "center" }}>
          Routing inputs only to specific "expert" nodes, dropping cost up to 60x.
        </span>
      </div>
    </div>
  );
};

// ── SCENE 7: Performance vs Cost Charts (154.1s - 176.6s)
const Scene7EqualPerformance: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  const frame = useCurrentFrame();
  const showCost = currentTime >= 161.7;

  // Chart bar loading animations
  const barVal = spring({ frame, fps: 30, config: { stiffness: 100 } });
  const costShrink = spring({ frame: frame - (161.7 - 154.1) * 30, fps: 30 });

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 60px",
      }}
    >
      {/* Graph 1: Performance */}
      <div
        style={{
          width: "440px",
          height: "400px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff", fontSize: "18px", margin: 0, letterSpacing: "1px" }}>
          MODEL BENCHMARK PERFORMANCE
        </h4>
        
        {/* Bars Container */}
        <div style={{ display: "flex", height: "230px", alignItems: "flex-end", gap: "50px", justifyContent: "center" }}>
          {/* US Bar */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: THEME.usBlue, fontWeight: 700, marginBottom: "8px" }}>99.2%</span>
            <div
              style={{
                width: "60px",
                height: `${180 * barVal}px`,
                backgroundColor: THEME.usBlue,
                borderRadius: "8px 8px 0 0",
                boxShadow: `0 0 15px ${THEME.usBlueGlow}`,
              }}
            />
            <span style={{ color: "#fff", fontSize: "14px", marginTop: "8px" }}>US</span>
          </div>

          {/* China Bar */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: THEME.chinaRed, fontWeight: 700, marginBottom: "8px" }}>98.8%</span>
            <div
              style={{
                width: "60px",
                height: `${178 * barVal}px`,
                backgroundColor: THEME.chinaRed,
                borderRadius: "8px 8px 0 0",
                boxShadow: `0 0 15px ${THEME.chinaRedGlow}`,
              }}
            />
            <span style={{ color: "#fff", fontSize: "14px", marginTop: "8px" }}>CHINA</span>
          </div>
        </div>
      </div>

      {/* Graph 2: Cost */}
      <div
        style={{
          width: "440px",
          height: "400px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: showCost ? 1.0 : 0.3,
          
        }}
      >
        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff", fontSize: "18px", margin: 0, letterSpacing: "1px" }}>
          TRAINING & DEPLOYMENT COST
        </h4>
        
        {/* Bars Container */}
        <div style={{ display: "flex", height: "230px", alignItems: "flex-end", gap: "50px", justifyContent: "center" }}>
          {/* US Bar */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: THEME.usBlue, fontWeight: 700, marginBottom: "8px" }}>$10,000</span>
            <div
              style={{
                width: "60px",
                height: "180px",
                backgroundColor: THEME.usBlue,
                borderRadius: "8px 8px 0 0",
                opacity: 0.8,
              }}
            />
            <span style={{ color: "#fff", fontSize: "14px", marginTop: "8px" }}>US</span>
          </div>

          {/* China Bar */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {showCost && (
              <span style={{ color: THEME.gold, fontWeight: 800, marginBottom: "8px", textShadow: `0 0 10px ${THEME.goldGlow}` }}>
                $166 (60x ↓)
              </span>
            )}
            <div
              style={{
                width: "60px",
                height: `${interpolate(costShrink, [0, 1], [180, 5])}px`,
                backgroundColor: THEME.chinaRed,
                borderRadius: "4px 4px 0 0",
                boxShadow: `0 0 15px ${THEME.chinaRedGlow}`,
              }}
            />
            <span style={{ color: "#fff", fontSize: "14px", marginTop: "8px" }}>CHINA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── SCENE 8: Data Funnels (176.6s - 208.6s)
const Scene8Data: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  const frame = useCurrentFrame();
  const showChinaData = currentTime >= 189.2;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {/* US Text Scrape Funnel */}
      <div
        style={{
          width: "440px",
          height: "440px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "28px",
          border: `2px solid ${!showChinaData ? THEME.usBlue : "rgba(255,255,255,0.06)"}`,
          padding: "35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: showChinaData ? 0.35 : 1.0,
          
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.usBlue, fontSize: "20px", fontWeight: 700 }}>
          US: PUBLIC TEXT SCRAPING
        </h3>
        
        {/* Funnel SVG with text elements falling in */}
        <svg width="150" height="150" viewBox="0 0 100 100">
          <path d="M10 20 L90 20 L60 60 L60 90 L40 90 L40 60 Z" fill="none" stroke={THEME.usBlue} strokeWidth="4" />
          {/* Falling text tokens */}
          <text x="35" y={25 + (frame % 40)} fill={THEME.usBlue} fontSize="12" fontWeight="bold" opacity={1 - (frame % 40)/40}>abc</text>
          <text x="55" y={15 + ((frame + 15) % 40)} fill={THEME.usBlue} fontSize="12" fontWeight="bold" opacity={1 - ((frame + 15) % 40)/40}>TXT</text>
        </svg>

        <p style={{ color: THEME.textMuted, fontSize: "15px", textAlign: "center", margin: 0 }}>
          Exhaustive scraping of Wikipedia, Reddit, books, and public web documents. Facing data wall.
        </p>
      </div>

      {/* China Multimodal Horn */}
      <div
        style={{
          width: "440px",
          height: "440px",
          backgroundColor: "rgba(10, 12, 18, 0.8)",
          borderRadius: "28px",
          border: `2px solid ${showChinaData ? THEME.chinaRed : "rgba(255,255,255,0.06)"}`,
          boxShadow: showChinaData ? `0 0 30px ${THEME.chinaRedGlow}` : "none",
          padding: "35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: !showChinaData ? 0.35 : 1.0,
          
        }}
      >
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: THEME.chinaRed, fontSize: "20px", fontWeight: 700 }}>
          CHINA: MULTIMODAL APP DATA
        </h3>
        
        {/* Super App interface collecting rich widgets */}
        <svg width="150" height="150" viewBox="0 0 100 100">
          <rect x="30" y="10" width="40" height="80" rx="8" fill="none" stroke={THEME.chinaRed} strokeWidth="4" />
          {/* Icons landing in screen */}
          <circle cx="50" cy="30" r="8" fill={THEME.chinaRed} opacity="0.8" />
          <rect x="42" y="48" width="16" height="10" rx="2" fill={THEME.chinaRed} opacity="0.6" />
          <path d="M40 70 H60 V76 H40 Z" fill={THEME.chinaRed} opacity="0.7" />
          {/* Waves of data entering */}
          <circle cx="20" cy="50" r={frame % 20} fill="none" stroke={THEME.chinaRed} strokeWidth="2" opacity={1 - (frame % 20)/20} />
          <circle cx="80" cy="50" r={frame % 20} fill="none" stroke={THEME.chinaRed} strokeWidth="2" opacity={1 - (frame % 20)/20} />
        </svg>

        <p style={{ color: THEME.textMuted, fontSize: "15px", textAlign: "center", margin: 0 }}>
          Direct behavioral data feeds from Super-Apps: payments, transport, location, voice, and services.
        </p>
      </div>
    </div>
  );
};

// ── SCENE 9 & 10: Three Columns Highlights (USA vs China Leads)
const Scene9ThreeColumns: React.FC<{ leads: "us" | "china"; currentTime: number }> = ({ leads, currentTime }) => {
  // Slide timelines offsets
  const usTimings = [211.5, 215.8, 218.9];
  const chinaTimings = [231.6, 234.3, 237.4];
  const activeTimings = leads === "us" ? usTimings : chinaTimings;

  const show1 = currentTime >= activeTimings[0];
  const show2 = currentTime >= activeTimings[1];
  const show3 = currentTime >= activeTimings[2];

  const color = leads === "us" ? THEME.usBlue : THEME.chinaRed;
  const glow = leads === "us" ? THEME.usBlueGlow : THEME.chinaRedGlow;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 50px",
      }}
    >
      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "38px", fontWeight: 800, color: "#fff", marginBottom: "40px" }}>
        {leads === "us" ? "WHERE AMERICA LEADS THE RACE" : "WHERE CHINA LEADS THE RACE"}
      </h2>

      <div style={{ display: "flex", gap: "30px", justifyContent: "center", width: "100%" }}>
        {/* Column 1 */}
        <div
          style={{
            flex: 1,
            height: "320px",
            backgroundColor: "rgba(10, 12, 18, 0.8)",
            border: `2px solid ${show1 ? color : "rgba(255,255,255,0.04)"}`,
            boxShadow: show1 ? `0 0 25px ${glow}` : "none",
            borderRadius: "20px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            opacity: show1 ? 1.0 : 0.15,
            transform: show1 ? "translateY(0)" : "translateY(20px)",
            
          }}
        >
          {leads === "us" ? (
            // Crown SVG
            <svg width="60" height="60" viewBox="0 0 100 100">
              <path d="M15 75 L10 30 L35 50 L50 25 L65 50 L90 30 L85 75 Z" fill="none" stroke={color} strokeWidth="4" />
              <line x1="15" y1="75" x2="85" y2="75" stroke={color} strokeWidth="6" />
            </svg>
          ) : (
            // Down Arrow Graph SVG
            <svg width="60" height="60" viewBox="0 0 100 100">
              <path d="M10 20 L40 50 L60 40 L90 70 M90 70 H70 M90 70 V50" fill="none" stroke={color} strokeWidth="4" />
            </svg>
          )}
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff", fontSize: "20px", fontWeight: 700, margin: 0, textAlign: "center" }}>
            {leads === "us" ? "FIRST TO MARKET" : "COST EFFICIENCY"}
          </h4>
        </div>

        {/* Column 2 */}
        <div
          style={{
            flex: 1,
            height: "320px",
            backgroundColor: "rgba(10, 12, 18, 0.8)",
            border: `2px solid ${show2 ? color : "rgba(255,255,255,0.04)"}`,
            boxShadow: show2 ? `0 0 25px ${glow}` : "none",
            borderRadius: "20px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            opacity: show2 ? 1.0 : 0.15,
            transform: show2 ? "translateY(0)" : "translateY(20px)",
            
          }}
        >
          {leads === "us" ? (
            // Chip SVG
            <svg width="60" height="60" viewBox="0 0 100 100">
              <rect x="25" y="25" width="50" height="50" fill="none" stroke={color} strokeWidth="4" rx="4" />
              <rect x="40" y="40" width="20" height="20" fill={color} />
            </svg>
          ) : (
            // Padlock Open SVG
            <svg width="60" height="60" viewBox="0 0 100 100">
              <rect x="25" y="45" width="50" height="40" rx="4" fill="none" stroke={color} strokeWidth="4" />
              <path d="M35 45 V25 C35 15, 65 15, 65 25" fill="none" stroke={color} strokeWidth="4" />
            </svg>
          )}
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff", fontSize: "20px", fontWeight: 700, margin: 0, textAlign: "center" }}>
            {leads === "us" ? "ADVANCED HARDWARE" : "OPEN DISTRIBUTION"}
          </h4>
        </div>

        {/* Column 3 */}
        <div
          style={{
            flex: 1,
            height: "320px",
            backgroundColor: "rgba(10, 12, 18, 0.8)",
            border: `2px solid ${show3 ? color : "rgba(255,255,255,0.04)"}`,
            boxShadow: show3 ? `0 0 25px ${glow}` : "none",
            borderRadius: "20px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            opacity: show3 ? 1.0 : 0.15,
            transform: show3 ? "translateY(0)" : "translateY(20px)",
            
          }}
        >
          {leads === "us" ? (
            // Eye Shield SVG
            <svg width="60" height="60" viewBox="0 0 100 100">
              <path d="M50 15 C65 15, 80 10, 80 10 V45 C80 65, 50 85, 50 85 C50 85, 20 65, 20 45 V10 C20 10, 35 15, 50 15 Z" fill="none" stroke={color} strokeWidth="4" />
            </svg>
          ) : (
            // Gear SVG
            <svg width="60" height="60" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="18" fill="none" stroke={color} strokeWidth="4" />
              {/* Teeth */}
              <rect x="46" y="15" width="8" height="15" fill={color} />
              <rect x="46" y="70" width="8" height="15" fill={color} />
              <rect x="15" y="46" width="15" height="8" fill={color} />
              <rect x="70" y="46" width="15" height="8" fill={color} />
            </svg>
          )}
          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff", fontSize: "20px", fontWeight: 700, margin: 0, textAlign: "center" }}>
            {leads === "us" ? "SAFETY & OVERSIGHT" : "RAPID DEPLOYMENT"}
          </h4>
        </div>
      </div>
    </div>
  );
};

// ── SCENE 11: World Map & Radar sweeps (250.5s - 272.9s)
const Scene11Wildcards: React.FC<{ currentTime: number }> = ({ currentTime }) => {
  const frame = useCurrentFrame();
  
  // Timings of radar sweeps
  const sweepTaiwan = currentTime >= 254.5;
  const sweepPacific = currentTime >= 258.6;
  const sweepEurope = currentTime >= 260.7;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "38px", fontWeight: 800, color: "#fff", zIndex: 10, marginBottom: "20px" }}>
        GEOPOLITICAL WILDCARDS
      </h2>

      {/* Outline stylized world map */}
      <svg width="750" height="420" viewBox="0 0 1000 500" style={{ opacity: 0.15, position: "absolute", zIndex: 1 }}>
        <path d="M100 250 H900 M500 50 V450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Simple grid lines for mapping */}
        <circle cx="500" cy="250" r="200" fill="none" stroke="rgba(255,255,255,0.05)" />
      </svg>

      <div style={{ position: "relative", width: "750px", height: "350px", zIndex: 10 }}>
        {/* Radar Point 1: Taiwan */}
        {sweepTaiwan && (
          <div style={{ position: "absolute", left: "75%", top: "45%" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: THEME.gold,
                boxShadow: `0 0 15px ${THEME.gold}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-14px",
                left: "-14px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: `2px solid ${THEME.gold}`,
                
                transform: `scale(${(frame % 30) / 10})`,
                opacity: 1 - (frame % 30) / 30,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "-15px",
                backgroundColor: "rgba(10,12,18,0.9)",
                padding: "8px 16px",
                borderRadius: "10px",
                border: `1px solid ${THEME.gold}`,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: THEME.gold, fontWeight: 700 }}>
                TAIWAN CHIP SUPPLY CHAIN
              </span>
            </div>
          </div>
        )}

        {/* Radar Point 2: Pacific / Data */}
        {sweepPacific && (
          <div style={{ position: "absolute", left: "45%", top: "60%" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: THEME.usBlue,
                boxShadow: `0 0 15px ${THEME.usBlue}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "-15px",
                backgroundColor: "rgba(10,12,18,0.9)",
                padding: "8px 16px",
                borderRadius: "10px",
                border: `1px solid ${THEME.usBlue}`,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: THEME.usBlue, fontWeight: 700 }}>
                DATA SECURITY / SANCTIONS
              </span>
            </div>
          </div>
        )}

        {/* Radar Point 3: Europe / Regulations */}
        {sweepEurope && (
          <div style={{ position: "absolute", left: "20%", top: "35%" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: THEME.chinaRed,
                boxShadow: `0 0 15px ${THEME.chinaRed}`,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "-15px",
                backgroundColor: "rgba(10,12,18,0.9)",
                padding: "8px 16px",
                borderRadius: "10px",
                border: `1px solid ${THEME.chinaRed}`,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: THEME.chinaRed, fontWeight: 700 }}>
                EUROPE REGULATORY BLOCKS
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ── SCENE 12: Widescreen Balance Scale Conclusion (272.9s - 301.4s)
const Scene12Conclusion: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow tilting movement
  const tilt = Math.sin(frame * 0.04) * 4; // tilt +/- 4 degrees

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "40px", fontWeight: 900, color: "#fff", marginBottom: "40px", letterSpacing: "3px" }}>
        WHO IS ACTUALLY WINNING?
      </h2>

      {/* Balance Scale SVG */}
      <svg
        width="450"
        height="300"
        viewBox="0 0 200 150"
        style={{ overflow: "visible", transformStyle: "preserve-3d" }}
      >
        {/* Base of scale */}
        <path d="M80 140 H120 V135 H80 Z M95 135 H105 V60 H95 Z" fill={THEME.textMuted} />
        
        {/* Tilting Beam assembly */}
        <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: "100px 60px",  }}>
          {/* Main Beam */}
          <line x1="40" y1="60" x2="160" y2="60" stroke={THEME.textMuted} strokeWidth="4" />
          
          {/* Left Pan */}
          <line x1="40" y1="60" x2="25" y2="105" stroke={THEME.usBlue} strokeWidth="1.5" />
          <line x1="40" y1="60" x2="55" y2="105" stroke={THEME.usBlue} strokeWidth="1.5" />
          <path d="M20 105 H60 L50 112 H30 Z" fill={THEME.usBlue} opacity="0.8" />
          {/* Left Weight: Chip */}
          <g transform="translate(30, 85) scale(0.4)">
            <rect x="5" y="5" width="40" height="40" rx="4" fill="none" stroke="#fff" strokeWidth="4" />
            <rect x="15" y="15" width="20" height="20" fill="#fff" />
          </g>

          {/* Right Pan */}
          <line x1="160" y1="60" x2="145" y2="105" stroke={THEME.chinaRed} strokeWidth="1.5" />
          <line x1="160" y1="60" x2="175" y2="105" stroke={THEME.chinaRed} strokeWidth="1.5" />
          <path d="M140 105 H180 L170 112 H150 Z" fill={THEME.chinaRed} opacity="0.8" />
          {/* Right Weight: Connected network */}
          <g transform="translate(150, 85) scale(0.4)">
            <circle cx="25" cy="25" r="10" fill="#fff" />
            <circle cx="10" cy="10" r="6" fill="#fff" />
            <circle cx="40" cy="10" r="6" fill="#fff" />
            <circle cx="10" cy="40" r="6" fill="#fff" />
            <circle cx="40" cy="40" r="6" fill="#fff" />
            <line x1="25" y1="25" x2="10" y2="10" stroke="#fff" strokeWidth="3" />
            <line x1="25" y1="25" x2="40" y2="10" stroke="#fff" strokeWidth="3" />
            <line x1="25" y1="25" x2="10" y2="40" stroke="#fff" strokeWidth="3" />
            <line x1="25" y1="25" x2="40" y2="40" stroke="#fff" strokeWidth="3" />
          </g>
        </g>
      </svg>

      <div style={{ display: "flex", gap: "60px", marginTop: "30px" }}>
        <span style={{ color: THEME.usBlue, fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 700 }}>
          US RAW CAPABILITY
        </span>
        <span style={{ color: THEME.chinaRed, fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 700 }}>
          CHINA EFFICIENCY & ECOSYSTEMS
        </span>
      </div>
    </div>
  );
};

// ─── MAIN COMPOSITION RENDERER ───────────────────────────────────────
export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  // Render correct scene based on time
  const getSceneElement = () => {
    if (currentTime < 26.2) return <Scene1Intro />;
    if (currentTime < 48.2) return <Scene2Capability />;
    if (currentTime < 69.9) return <Scene3ThreeLayers currentTime={currentTime} />;
    if (currentTime < 94.3) return <Scene4Philosophies currentTime={currentTime} />;
    if (currentTime < 117.5) return <Scene5Hardware currentTime={currentTime} />;
    if (currentTime < 154.1) return <Scene6Software currentTime={currentTime} />;
    if (currentTime < 176.6) return <Scene7EqualPerformance currentTime={currentTime} />;
    if (currentTime < 208.6) return <Scene8Data currentTime={currentTime} />;
    if (currentTime < 229.9) return <Scene9ThreeColumns leads="us" currentTime={currentTime} />;
    if (currentTime < 250.5) return <Scene9ThreeColumns leads="china" currentTime={currentTime} />;
    if (currentTime < 272.9) return <Scene11Wildcards currentTime={currentTime} />;
    return <Scene12Conclusion />;
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: THEME.bg,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Audio Engine */}
      <Audio src={staticFile("voiceover.m4a")} />

      {/* Tech Grid mesh underlayer */}
      <GridBackground />

      {/* Floating dust particles background overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 40%, rgba(8, 9, 13, 0.95) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── Visual Scene Content Renderer ── */}
      <div style={{ position: "relative", width: "100%", height: "100%", zIndex: 10 }}>
        {getSceneElement()}
      </div>

      {/* ── Subtitle Engine ── */}
      <WordSyncSubtitles currentTime={currentTime} />

      {/* ── Dynamic Top Progress Bar ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${(currentTime / 301.4) * 100}%`,
          height: "6px",
          zIndex: 99,
          background: `linear-gradient(90deg, ${THEME.usBlue}, ${THEME.gold}, ${THEME.chinaRed})`,
          boxShadow: `0 0 10px ${THEME.usBlue}`,
        }}
      />
    </div>
  );
};