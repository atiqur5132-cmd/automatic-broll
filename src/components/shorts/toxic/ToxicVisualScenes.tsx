import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { displayFontFamily } from "../../../fonts";

const FONT_FAMILY = displayFontFamily;

// ==========================================
// COMMON HUD & CARD CONTAINER
// ==========================================
const MotionHUDPanel: React.FC<{
  children: React.ReactNode;
  borderColor?: string;
  glowColor?: string;
  badgeText: string;
  title: string;
  subtitle?: string;
}> = ({
  children,
  borderColor = "#00F0FF",
  glowColor = "rgba(0, 240, 255, 0.25)",
  badgeText,
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const scanLineY = (frame * 8) % 700;

  return (
    <div
      style={{
        width: 940,
        height: 920,
        background: "linear-gradient(155deg, rgba(16, 20, 35, 0.90), rgba(7, 9, 18, 0.96))",
        backdropFilter: "blur(30px)",
        border: `1.5px solid ${borderColor}66`,
        borderRadius: 36,
        boxShadow: `0 30px 80px rgba(0,0,0,0.95), 0 0 55px ${glowColor}`,
        position: "relative",
        overflow: "hidden",
        padding: "40px 44px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Laser HUD Scanline */}
      <div
        style={{
          position: "absolute",
          top: scanLineY,
          left: 0,
          width: "100%",
          height: 2,
          background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Custom Animated Graphic Slot */}
      <div style={{ width: "100%", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children}
      </div>

      {/* Bottom Title & Subtitle */}
      <div style={{ textAlign: "center", width: "100%" }}>
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 40,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.15,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontFamily: FONT_FAMILY,
              fontSize: 22,
              fontWeight: 700,
              color: "rgba(255,255,255,0.7)",
              marginTop: 8,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

// =========================================================
// SCENE 1: Brain & Shattered Heart Tether Diagram (0 - 138)
// =========================================================
export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const tetherPull = Math.sin(frame * 0.12) * 12;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#FF2E63"
          glowColor="rgba(255, 46, 99, 0.35)"
          badgeText="PSYCHOLOGICAL PARADOX // 01"
          title="WHY YOU CAN'T LEAVE THE PERSON HURTING YOU"
          subtitle="Trauma bonding overrides logical detachment"
        >
          <svg width="680" height="280" viewBox="0 0 680 280">
            {/* Left: Animated Anatomical Glowing Brain */}
            <g transform={`translate(${40 - tetherPull}, 40)`}>
              <rect x="0" y="0" width="180" height="180" rx="40" fill="#121829" stroke="#00F0FF" strokeWidth="4" />
              <path
                d="M 40 90 Q 90 30 140 90 Q 90 150 40 90 Z"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="5"
                filter="drop-shadow(0 0 10px #00F0FF)"
              />
              <circle cx="90" cy="90" r="24" fill="#00F0FF" opacity="0.3" />
              <text x="90" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily={FONT_FAMILY}>
                BRAIN
              </text>
            </g>

            {/* Glowing Magnetic Tethers in Tension */}
            <g>
              <line
                x1={220 - tetherPull}
                y1="110"
                x2={460 + tetherPull}
                y2="110"
                stroke="#FF2E63"
                strokeWidth="6"
                strokeDasharray="14 8"
              />
              <line
                x1={220 - tetherPull}
                y1="150"
                x2={460 + tetherPull}
                y2="150"
                stroke="#00F0FF"
                strokeWidth="4"
                strokeDasharray="10 10"
              />
              <circle cx={340 + Math.sin(frame * 0.2) * 60} cy="110" r="8" fill="#FFFFFFFF" filter="drop-shadow(0 0 8px #fff)" />
              <circle cx={340 - Math.sin(frame * 0.2) * 60} cy="150" r="7" fill="#00F0FF" filter="drop-shadow(0 0 8px #00F0FF)" />
              <text x="340" y="90" textAnchor="middle" fill="#FF2E63" fontSize="18" fontWeight="800">
                MAGNETIC TRAP
              </text>
            </g>

            {/* Right: Shattered Glass Heart SVG */}
            <g transform={`translate(${460 + tetherPull}, 40)`}>
              <rect x="0" y="0" width="180" height="180" rx="40" fill="#25101C" stroke="#FF2E63" strokeWidth="4" />
              <path
                d="M 90 145 L 45 95 Q 25 70 50 45 Q 75 25 90 60 Q 105 25 130 45 Q 155 70 135 95 Z"
                fill="#FF2E63"
                opacity="0.85"
                filter="drop-shadow(0 0 14px #FF2E63)"
              />
              <path d="M 90 40 L 80 80 L 100 110 L 85 150" fill="none" stroke="#FFFFFF" strokeWidth="3.5" />
              <text x="90" y="170" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily={FONT_FAMILY}>
                PAIN
              </text>
            </g>
          </svg>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 2: Neurochemical Receptors & Addiction Gauge (138 - 257)
// ==============================================================
export const Scene2Addiction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const gaugePct = interpolate(frame, [0, 40], [20, 96], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#00F0FF"
          glowColor="rgba(0, 240, 255, 0.35)"
          badgeText="NEUROLOGICAL DEPENDENCY // 02"
          title="YOUR BRAIN IS CHEMICALLY ADDICTED"
          subtitle="Dopamine & cortisol loops override conscious choice"
        >
          <div style={{ display: "flex", alignItems: "center", gap: 50, width: "100%", justifyContent: "center" }}>
            {/* Neural Synapse Receptor SVG */}
            <svg width="340" height="240" viewBox="0 0 340 240">
              <circle cx="170" cy="120" r="75" fill="none" stroke="#00F0FF" strokeWidth="4" strokeDasharray="16 8" />
              <circle cx="170" cy="120" r="45" fill="#0E1A30" stroke="#FF2E63" strokeWidth="5" />
              <text x="170" y="126" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="900">
                SYNAPSE
              </text>

              {/* Orbiting Neurochemical Nodes */}
              {[0, 1, 2, 3].map((idx) => {
                const angle = (frame * 3 + idx * 90) * (Math.PI / 180);
                const x = 170 + Math.cos(angle) * 110;
                const y = 120 + Math.sin(angle) * 80;
                return (
                  <g key={idx} transform={`translate(${x}, ${y})`}>
                    <circle r="16" fill={idx % 2 === 0 ? "#00F0FF" : "#FF2E63"} filter="drop-shadow(0 0 10px #fff)" />
                  </g>
                );
              })}
            </svg>

            {/* Addiction Gauge Dial */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <svg width="180" height="180" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="90" cy="90" r="70" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="16" />
                <circle
                  cx="90"
                  cy="90"
                  r="70"
                  fill="none"
                  stroke="#FF2E63"
                  strokeWidth="16"
                  strokeDasharray={2 * Math.PI * 70}
                  strokeDashoffset={2 * Math.PI * 70 * (1 - gaugePct / 100)}
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 10px #FF2E63)"
                />
              </svg>
              <div style={{ position: "absolute", marginTop: 55, textAlign: "center" }}>
                <div style={{ fontFamily: FONT_FAMILY, fontSize: 36, fontWeight: 900, color: "#FF2E63" }}>
                  {Math.round(gaugePct)}%
                </div>
                <div style={{ fontSize: 13, color: "#FFFFFF", fontWeight: 800 }}>ADDICTION</div>
              </div>
            </div>
          </div>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ===============================================================
// SCENE 3: Conditioning Mechanism / Dispenser Wheel (257 - 354)
// ===============================================================
export const Scene3Intermittent: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const wheelRot = frame * 5;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#FFD700"
          glowColor="rgba(255, 215, 0, 0.3)"
          badgeText="BEHAVIORAL CONDITIONING // 03"
          title="INTERMITTENT REINFORCEMENT"
          subtitle="Unpredictable rewards create obsessive fixation"
        >
          <svg width="480" height="260" viewBox="0 0 480 260">
            {/* Conditioning Dispenser Mechanism */}
            <g transform="translate(240, 130)">
              <circle cx="0" cy="0" r="95" fill="none" stroke="#FFD700" strokeWidth="8" strokeDasharray="30 15" />
              <g transform={`rotate(${wheelRot})`}>
                <circle cx="0" cy="0" r="70" fill="none" stroke="#FF2E63" strokeWidth="4" strokeDasharray="20 10" />
                <line x1="-70" y1="0" x2="70" y2="0" stroke="#FFD700" strokeWidth="3" />
                <line x1="0" y1="-70" x2="0" y2="70" stroke="#FFD700" strokeWidth="3" />
              </g>

              <circle cx="0" cy="0" r="32" fill="#1A1505" stroke="#FFD700" strokeWidth="5" />
              <text x="0" y="7" textAnchor="middle" fill="#FFD700" fontSize="20" fontWeight="900">
                LOOP
              </text>
            </g>

            <g transform="translate(60, 130)">
              <rect x="-45" y="-45" width="90" height="90" rx="18" fill="#1E0A12" stroke="#FF2E63" strokeWidth="3" />
              <text x="0" y="8" textAnchor="middle" fill="#FF2E63" fontSize="28" fontWeight="900">DENIED</text>
            </g>
            <g transform="translate(420, 130)">
              <rect x="-45" y="-45" width="90" height="90" rx="18" fill="#0A241A" stroke="#00FF88" strokeWidth="3" />
              <text x="0" y="8" textAnchor="middle" fill="#00FF88" fontSize="28" fontWeight="900">REWARD</text>
            </g>
          </svg>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================================
// SCENE 4: Split Weather Storm vs Golden Sunburst (354 - 501)
// ==========================================================
export const Scene4SplitScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slideTop = spring({ frame, fps, config: { damping: 14, stiffness: 170 } });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ width: 940, display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Top Panel: Day 1 Cold Ignore Storm */}
        <div
          style={{
            height: 330,
            background: "linear-gradient(145deg, #071526, #040912)",
            border: "2px solid #00F0FF",
            borderRadius: 32,
            boxShadow: "0 15px 45px rgba(0,240,255,0.2)",
            padding: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: `translateY(${(1 - slideTop) * -40}px)`,
          }}
        >
          <div>
            <div style={{ color: "#00F0FF", fontWeight: 900, fontSize: 18, letterSpacing: 2 }}>PHASE 01 // COLD DEPRIVATION</div>
            <div style={{ fontFamily: FONT_FAMILY, fontSize: 40, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
              DAY 1: THEY IGNORE YOU
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 22, marginTop: 6 }}>
              Sudden withdrawal spikes cortisol &amp; panic
            </div>
          </div>
          <svg width="150" height="150" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="65" fill="#0C2540" stroke="#00F0FF" strokeWidth="3" />
            <path d="M 45 65 Q 75 45 105 65 Q 115 85 95 105 L 55 105 Q 35 85 45 65 Z" fill="#00F0FF" opacity="0.8" />
            <line x1="60" y1="115" x2="50" y2="135" stroke="#00F0FF" strokeWidth="4" />
            <line x1="80" y1="115" x2="70" y2="135" stroke="#00F0FF" strokeWidth="4" />
            <line x1="100" y1="115" x2="90" y2="135" stroke="#00F0FF" strokeWidth="4" />
          </svg>
        </div>

        {/* Bottom Panel: Day 2 Golden Love Shower */}
        <div
          style={{
            height: 330,
            background: "linear-gradient(145deg, #2A1D05, #120C02)",
            border: "2px solid #FFD700",
            borderRadius: 32,
            boxShadow: "0 15px 45px rgba(255,215,0,0.25)",
            padding: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transform: `translateY(${(1 - slideTop) * 40}px)`,
          }}
        >
          <div>
            <div style={{ color: "#FFD700", fontWeight: 900, fontSize: 18, letterSpacing: 2 }}>PHASE 02 // EUPHORIC FLOOD</div>
            <div style={{ fontFamily: FONT_FAMILY, fontSize: 40, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>
              DAY 2: SHOWER WITH LOVE
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 22, marginTop: 6 }}>
              Intense affection feels like extreme salvation
            </div>
          </div>
          <svg width="150" height="150" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="65" fill="#3D2900" stroke="#FFD700" strokeWidth="3" />
            <path
              d="M 75 115 L 45 80 Q 30 60 50 42 Q 65 30 75 52 Q 85 30 100 42 Q 120 60 105 80 Z"
              fill="#FFD700"
              filter="drop-shadow(0 0 14px #FFD700)"
            />
          </svg>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ================================================================
// SCENE 5: Dopamine Chemical Structure & Live Surge Meter (501-645)
// ================================================================
export const Scene5Dopamine: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const surgePct = interpolate(frame, [0, 45], [0, 400], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#00FF88"
          glowColor="rgba(0, 255, 136, 0.3)"
          badgeText="NEUROCHEMICAL SURGE // 05"
          title="UNCERTAINTY SPIKES DOPAMINE"
          subtitle="Unpredictable rewards generate 400% higher dopamine release"
        >
          <div style={{ display: "flex", alignItems: "center", gap: 50, justifyContent: "center", width: "100%" }}>
            <svg width="340" height="230" viewBox="0 0 340 230">
              <polygon points="120,40 190,40 230,100 190,160 120,160 80,100" fill="none" stroke="#00FF88" strokeWidth="5" />
              <line x1="230" y1="100" x2="290" y2="70" stroke="#00FF88" strokeWidth="5" />
              <line x1="290" y1="70" x2="310" y2="120" stroke="#00FF88" strokeWidth="5" />
              <circle cx="120" cy="40" r="14" fill="#00FF88" />
              <circle cx="190" cy="40" r="14" fill="#00FF88" />
              <circle cx="230" cy="100" r="16" fill="#FFFFFF" />
              <circle cx="190" cy="160" r="14" fill="#00FF88" />
              <circle cx="120" cy="160" r="14" fill="#00FF88" />
              <circle cx="80" cy="100" r="14" fill="#00FF88" />
              <text x="155" y="108" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight="900" fontFamily={FONT_FAMILY}>
                DOPAMINE
              </text>
            </svg>

            <div
              style={{
                background: "rgba(0,255,136,0.12)",
                border: "2px solid #00FF88",
                borderRadius: 28,
                padding: "28px 40px",
                textAlign: "center",
                boxShadow: "0 0 30px rgba(0,255,136,0.4)",
              }}
            >
              <div style={{ fontFamily: FONT_FAMILY, fontSize: 56, fontWeight: 900, color: "#00FF88" }}>
                +{Math.round(surgePct)}%
              </div>
              <div style={{ fontSize: 16, color: "#FFFFFF", fontWeight: 800, letterSpacing: 2, marginTop: 4 }}>
                REWARD INTENSITY
              </div>
            </div>
          </div>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 6: Animated Slot Machine Reels vs Mobile Feed UI (645-756)
// ==============================================================
export const Scene6Gambling: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const reelScroll = (frame * 18) % 120;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#B829FF"
          glowColor="rgba(184, 41, 255, 0.35)"
          badgeText="NEURAL HIJACKING // 06"
          title="GAMBLING & SOCIAL MEDIA CIRCUIT"
          subtitle="Your brain pulls the lever waiting for the next dopamine hit"
        >
          <div style={{ display: "flex", gap: 36, width: "100%", justifyContent: "center" }}>
            <div
              style={{
                width: 360,
                height: 240,
                background: "rgba(184, 41, 255, 0.1)",
                border: "2px solid #B829FF",
                borderRadius: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div style={{ fontSize: 18, color: "#B829FF", fontWeight: 900, letterSpacing: 2, marginBottom: 12 }}>
                CASINO SLOT REELS
              </div>
              <svg width="260" height="120" viewBox="0 0 260 120">
                <rect x="10" y="10" width="70" height="100" rx="12" fill="#180C24" stroke="#B829FF" strokeWidth="3" />
                <rect x="95" y="10" width="70" height="100" rx="12" fill="#180C24" stroke="#B829FF" strokeWidth="3" />
                <rect x="180" y="10" width="70" height="100" rx="12" fill="#180C24" stroke="#B829FF" strokeWidth="3" />

                <text x="45" y={75 - reelScroll + 60} fill="#FFD700" fontSize="36" fontWeight="900" textAnchor="middle">7</text>
                <text x="130" y={75 - reelScroll + 60} fill="#FF2E63" fontSize="36" fontWeight="900" textAnchor="middle">★</text>
                <text x="215" y={75 - reelScroll + 60} fill="#00F0FF" fontSize="36" fontWeight="900" textAnchor="middle">◆</text>
              </svg>
            </div>

            <div
              style={{
                width: 360,
                height: 240,
                background: "rgba(0, 240, 255, 0.1)",
                border: "2px solid #00F0FF",
                borderRadius: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 18, color: "#00F0FF", fontWeight: 900, letterSpacing: 2, marginBottom: 12 }}>
                FEED REFRESH LOOP
              </div>
              <svg width="260" height="130" viewBox="0 0 260 130">
                <rect x="20" y="15" width="220" height="40" rx="10" fill="#0C2030" stroke="#00F0FF" strokeWidth="2" />
                <circle cx="45" cy="35" r="12" fill="#00F0FF" />
                <rect x="70" y="28" width="120" height="14" rx="6" fill="#FFFFFF" opacity="0.8" />

                <rect x="20" y="68" width="220" height="40" rx="10" fill="#0C2030" stroke="#00F0FF" strokeWidth="2" />
                <circle cx="45" cy="88" r="12" fill="#FF2E63" />
                <rect x="70" y="81" width="90" height="14" rx="6" fill="#FFFFFF" opacity="0.8" />
              </svg>
            </div>
          </div>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 7: Holographic Mirage Projection Beacon (756 - 931)
// ==============================================================
export const Scene7Hope: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const beamOpacity = 0.5 + Math.sin(frame * 0.12) * 0.3;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#00F0FF"
          glowColor="rgba(0, 240, 255, 0.35)"
          badgeText="THE ILLUSION OF POTENTIAL // 07"
          title="YOU ARE ADDICTED TO HOPE"
          subtitle="Chasing a fantasy projection of who they could become"
        >
          <svg width="540" height="240" viewBox="0 0 540 240">
            <g transform="translate(60, 60)">
              <circle cx="40" cy="40" r="24" fill="#FFFFFF" opacity="0.8" />
              <path d="M 15 75 Q 40 75 65 75 L 130 50" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.8" />
              <path d="M 40 75 L 40 150" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" opacity="0.8" />
            </g>

            <polygon points="190,110 370,30 370,190" fill="url(#hopeBeam)" opacity={beamOpacity} />
            <defs>
              <linearGradient id="hopeBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            <g transform="translate(370, 110)">
              <polygon
                points="0,-55 45,0 0,55 -45,0"
                fill="#00F0FF"
                stroke="#FFFFFF"
                strokeWidth="4"
                filter="drop-shadow(0 0 20px #00F0FF)"
              />
              <text x="0" y="6" textAnchor="middle" fill="#080E18" fontSize="16" fontWeight="900">
                HOPE
              </text>
            </g>
          </svg>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 8: Warped Reality Chronological Time Loop (931 - 1058)
// ==============================================================
export const Scene8TimeLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const handRot = frame * 8;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#FFD700"
          glowColor="rgba(255, 215, 0, 0.35)"
          badgeText="TIME WARP ENTRAPMENT // 08"
          title="HOPING NEXT MOMENT IS DIFFERENT"
          subtitle="Months & years vanish waiting for potential to materialize"
        >
          <svg width="460" height="250" viewBox="0 0 460 250">
            <g transform="translate(230, 125)">
              <circle cx="0" cy="0" r="95" fill="#141105" stroke="#FFD700" strokeWidth="6" />
              <circle cx="0" cy="0" r="75" fill="none" stroke="#FFD700" strokeWidth="2" strokeDasharray="12 12" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1={Math.cos((deg * Math.PI) / 180) * 80}
                  y1={Math.sin((deg * Math.PI) / 180) * 80}
                  x2={Math.cos((deg * Math.PI) / 180) * 90}
                  y2={Math.sin((deg * Math.PI) / 180) * 90}
                  stroke="#FFD700"
                  strokeWidth="3"
                />
              ))}
              <line
                x1="0"
                y1="0"
                x2={Math.cos((handRot * Math.PI) / 180) * 65}
                y2={Math.sin((handRot * Math.PI) / 180) * 65}
                stroke="#FFD700"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="0"
                x2={Math.cos(((handRot * 0.3) * Math.PI) / 180) * 45}
                y2={Math.sin(((handRot * 0.3) * Math.PI) / 180) * 45}
                stroke="#FF2E63"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="0" cy="0" r="10" fill="#FFFFFF" />
            </g>
          </svg>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 9: Dual Nervous System Waveform Monitor (1058 - 1224)
// ==============================================================
export const Scene9Chaos: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#FF2E63"
          glowColor="rgba(255, 46, 99, 0.35)"
          badgeText="NERVOUS SYSTEM DYSREGULATION // 09"
          title="EMOTIONAL CHAOS IS NOT CONNECTION"
          subtitle="Trauma bonding re-wires your brain to confuse panic with passion"
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "rgba(255,46,99,0.12)", border: "1.5px solid #FF2E63", borderRadius: 20, padding: "14px 24px" }}>
              <div style={{ color: "#FF2E63", fontWeight: 900, fontSize: 16, marginBottom: 8 }}>TRAUMA BOND // ERRATIC PANIC SPIKES</div>
              <svg width="800" height="70" viewBox="0 0 800 70">
                <path
                  d={Array.from({ length: 30 })
                    .map((_, i) => {
                      const x = i * 28;
                      const y = 35 + Math.sin(frame * 0.35 + i) * 28 * Math.sin(i * 0.5);
                      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="#FF2E63"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 8px #FF2E63)"
                />
              </svg>
            </div>

            <div style={{ background: "rgba(0,240,255,0.12)", border: "1.5px solid #00F0FF", borderRadius: 20, padding: "14px 24px" }}>
              <div style={{ color: "#00F0FF", fontWeight: 900, fontSize: 16, marginBottom: 8 }}>HEALTHY LOVE // STABLE REGULATION</div>
              <svg width="800" height="70" viewBox="0 0 800 70">
                <path
                  d={Array.from({ length: 30 })
                    .map((_, i) => {
                      const x = i * 28;
                      const y = 35 + Math.sin(frame * 0.1 + i * 0.3) * 10;
                      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 8px #00F0FF)"
                />
              </svg>
            </div>
          </div>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 10: Starvation Laboratory 5x Surge Columns (1224 - 1389)
// ==============================================================
export const Scene10RewardSpike: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const barHeight = interpolate(frame, [0, 40], [40, 210], { extrapolateRight: "clamp" });
  const counterVal = interpolate(frame, [0, 40], [100, 500], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#FFD700"
          glowColor="rgba(255, 215, 0, 0.35)"
          badgeText="THE STARVATION TRAP // 10"
          title="RARE CRUMBS FEEL INCREDIBLY REWARDING"
          subtitle="Deprivation makes small gestures feel like massive salvation"
        >
          <div style={{ display: "flex", alignItems: "flex-end", gap: 80, height: 240, justifyContent: "center", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ width: 110, height: 45, background: "rgba(255,255,255,0.2)", borderRadius: 14 }} />
              <span style={{ fontSize: 20, fontWeight: 800, color: "rgba(255,255,255,0.7)" }}>BASELINE</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 130,
                  height: barHeight,
                  background: "linear-gradient(180deg, #FFD700, #FF4400)",
                  borderRadius: 14,
                  boxShadow: "0 0 35px rgba(255,215,0,0.8)",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingTop: 12,
                }}
              >
                <span style={{ fontFamily: FONT_FAMILY, fontSize: 32, fontWeight: 900, color: "#120B02" }}>
                  +{Math.round(counterVal)}%
                </span>
              </div>
              <span style={{ fontSize: 22, fontWeight: 900, color: "#FFD700" }}>STARVATION SURGE</span>
            </div>
          </div>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 11: Shattering Metallic Chains Liberation (1389 - 1528)
// ==============================================================
export const Scene11Withdrawal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const breakSpread = interpolate(frame, [10, 50], [0, 85], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#00F0FF"
          glowColor="rgba(0, 240, 255, 0.35)"
          badgeText="NEUROLOGICAL WITHDRAWAL // 11"
          title="IT'S WITHDRAWAL, NOT HEARTBREAK"
          subtitle="Understanding chemical dependency is step 1 to breaking free"
        >
          <svg width="580" height="240" viewBox="0 0 580 240">
            <g transform={`translate(${-breakSpread}, 0)`}>
              <rect x="80" y="95" width="110" height="50" rx="25" fill="none" stroke="#00F0FF" strokeWidth="12" />
              <rect x="160" y="95" width="80" height="50" rx="25" fill="none" stroke="#00F0FF" strokeWidth="12" />
            </g>

            <g transform={`translate(${breakSpread}, 0)`}>
              <rect x="340" y="95" width="80" height="50" rx="25" fill="none" stroke="#00F0FF" strokeWidth="12" />
              <rect x="390" y="95" width="110" height="50" rx="25" fill="none" stroke="#00F0FF" strokeWidth="12" />
            </g>

            <circle cx="290" cy="120" r="38" fill="#FF2E63" filter="drop-shadow(0 0 25px #FF2E63)" opacity="0.9" />
            <path
              d="M 275 120 L 285 130 L 310 105"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};

// ==============================================================
// SCENE 12: Glowing Brain Core & Subscribe Emblem (1528 - 1594)
// ==============================================================
export const Scene12Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 14, stiffness: 180 } });
  const ringRot = frame * 4;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 240 }}>
      <div style={{ transform: `scale(${scale})` }}>
        <MotionHUDPanel
          borderColor="#FF2E63"
          glowColor="rgba(255, 46, 99, 0.4)"
          badgeText="PSYCHOLOGY SECRETS // OUTRO"
          title="FOLLOW FOR MORE PSYCHOLOGY"
          subtitle="Daily breakdowns of human behavior & subconscious conditioning"
        >
          <div style={{ position: "relative", width: 220, height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="220" height="220" style={{ position: "absolute", transform: `rotate(${ringRot}deg)` }}>
              <circle cx="110" cy="110" r="100" fill="none" stroke="#FF2E63" strokeWidth="4" strokeDasharray="60 40" />
              <circle cx="110" cy="110" r="80" fill="none" stroke="#00F0FF" strokeWidth="4" strokeDasharray="30 20" />
            </svg>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                d="M 50 15 C 20 15, 10 40, 10 65 C 10 85, 35 90, 50 90 C 65 90, 90 85, 90 65 C 90 40, 80 15, 50 15 Z"
                fill="#FF2E63"
                stroke="#FFFFFF"
                strokeWidth="3"
                filter="drop-shadow(0 0 16px #FF2E63)"
              />
            </svg>
          </div>
        </MotionHUDPanel>
      </div>
    </AbsoluteFill>
  );
};
