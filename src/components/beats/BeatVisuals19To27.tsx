import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { displayFontFamily, bodyFontFamily } from "../../fonts";

// Beat 19: Industry Race Track & Sonnet 5 (4038 - 4333)
export const BeatIndustryRaceSonnet: React.FC = () => {
  const frame = useCurrentFrame();
  const shift = interpolate(frame, [0, 80], [0, 40]);

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          INDUSTRY SURGED AHEAD
        </div>
        <div style={{ display: "flex", gap: 40, transform: `translateX(${-shift}px)` }}>
          <div
            style={{
              padding: "24px 44px",
              borderRadius: 20,
              background: "linear-gradient(135deg, #a855f7, #6b21a8)",
              fontFamily: displayFontFamily,
              fontSize: 36,
              fontWeight: 800,
              color: "#ffffff",
              boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
            }}
          >
            SONNET 5
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 20: GPT 5.6, GLM 5.2, MiMo Chips Closing Gap (4333 - 4754)
export const BeatRivalModelsClosingGap: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 36 }}>
        {[
          { name: "GPT 5.6", tag: "FRONTIER PREVIEW", color: "#10b981" },
          { name: "GLM 5.2", tag: "OPEN ARCHITECTURE", color: "#3b82f6" },
          { name: "MiMo", tag: "COST EFFICIENCY", color: "#f59e0b" },
        ].map((lab, i) => (
          <div
            key={i}
            style={{
              width: 320,
              padding: "36px 28px",
              borderRadius: 24,
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              border: `2px solid ${lab.color}`,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                fontFamily: displayFontFamily,
                fontSize: 42,
                fontWeight: 900,
                color: lab.color,
              }}
            >
              {lab.name}
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: "#cbd5e1",
                fontWeight: 600,
              }}
            >
              {lab.tag}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// Beat 21: Forked Path & Glowing Question Mark (4754 - 5188)
export const BeatForkedQuestion: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 12) * 0.05;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `scale(${pulse})`, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 130,
            fontWeight: 900,
            color: "#f59e0b",
            textShadow: "0 0 50px rgba(245, 158, 11, 0.6)",
          }}
        >
          ?
        </div>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 56,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          TALENT WAR OR NORMAL DELAY?
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 22: Rewinding Clock 3 Months & Checkmark Shield (5188 - 5473)
export const BeatUltraRewindSuccess: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "8px solid #10b981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: displayFontFamily,
            fontSize: 64,
            fontWeight: 900,
            color: "#10b981",
          }}
        >
          &#10003;
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontFamily: bodyFontFamily,
              fontSize: 24,
              color: "#10b981",
              fontWeight: 600,
              letterSpacing: "0.15em",
            }}
          >
            PRECEDENT
          </div>
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            ULTRA 1.5 DELIVERED
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 23: Server Racks + Search/Android/Workspace + Fortress (5473 - 5884)
export const BeatStructuralFortress: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: 40 }}>
        {[
          { title: "IN-HOUSE COMPUTE", subtitle: "MASSIVE SCALE TPU CLUSTER", color: "#38bdf8" },
          { title: "SEARCH & ANDROID", subtitle: "GLOBAL BUILT-IN DISTRIBUTION", color: "#10b981" },
          { title: "ENTERPRISE CLOUD", subtitle: "DEEPLY EMBEDDED WORKSPACE", color: "#a855f7" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              width: 330,
              padding: "40px 30px",
              borderRadius: 24,
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              borderTop: `6px solid ${item.color}`,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                fontFamily: displayFontFamily,
                fontSize: 30,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontFamily: bodyFontFamily,
                fontSize: 18,
                color: item.color,
                fontWeight: 600,
              }}
            >
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// Beat 24: Tipping Scale Against Narrative (5884 - 6403)
export const BeatTippingNarrative: React.FC = () => {
  const frame = useCurrentFrame();
  const tilt = Math.sin(frame / 20) * 5 - 8;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `rotate(${tilt}deg)`, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 72,
            fontWeight: 900,
            color: "#f43f5e",
          }}
        >
          NARRATIVE DEFICIT
        </div>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 28,
            color: "#cbd5e1",
            fontWeight: 500,
          }}
        >
          MOMENTUM SHIFT IN REAL TIME
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 25: July Delivery Checkmark Burst (6403 - 7010)
export const BeatJulyDeliverySuccess: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 40], [0.9, 1.05]);

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `scale(${scale})`, display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 98,
            fontWeight: 900,
            color: "#10b981",
            textShadow: "0 0 50px rgba(16, 185, 129, 0.6)",
          }}
        >
          IF JULY DELIVERS
        </div>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 32,
            color: "#ffffff",
            fontWeight: 600,
          }}
        >
          ROUGH JUNE IS INSTANTLY FORGOTTEN
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 26: Downward Arrow & Center of Gravity Shifting (7010 - 7348)
export const BeatCenterOfGravityShift: React.FC = () => {
  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 76,
            fontWeight: 900,
            color: "#e11d48",
          }}
        >
          CENTER OF GRAVITY
        </div>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 28,
            color: "#fca5a5",
            fontWeight: 600,
          }}
        >
          CAN GOOGLE HOLD THE RESEARCH FRONTIER?
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Beat 27: Spotlight Eye over Globe & Industry Watching (7348 - 7830)
export const BeatIndustryWatchingClosing: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = 20 + Math.sin(frame / 15) * 15;

  return (
    <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            border: "4px solid #6366f1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 ${glow}px rgba(99, 102, 241, 0.6)`,
          }}
        >
          <div style={{ width: 60, height: 60, borderRadius: "50%", backgroundColor: "#818cf8" }} />
        </div>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 68,
            fontWeight: 900,
            color: "#ffffff",
          }}
        >
          INDUSTRY IS WATCHING
        </div>
        <div
          style={{
            fontFamily: bodyFontFamily,
            fontSize: 26,
            color: "#93c5fd",
            fontWeight: 600,
            letterSpacing: "0.1em",
          }}
        >
          10 DAYS IN JUNE THAT DEFINED THE YEAR
        </div>
      </div>
    </AbsoluteFill>
  );
};
