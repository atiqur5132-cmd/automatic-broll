import {
  useCurrentFrame,
  useVideoConfig,
  Audio,
  staticFile,
  Img,
  AbsoluteFill,
} from "remotion";
import React from "react";

// ─── Camera and Annotation Keyframe Interface ────────────────────────
interface CameraKeyframe {
  time: number; // in seconds
  scale: number;
  centerX: number; // 0-100
  centerY: number; // 0-100
  text?: string;
  box?: [number, number, number, number]; // [left, top, width, height] in %
}

// ─── Chronological Animation Timeline (301.4s total) ────────────────
const keyframes: CameraKeyframe[] = [
  // Slide 1 (0.0s - 26.2s): Title & Introduction
  { time: 0.0, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 5.0, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 5.7, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 6.5, scale: 1.45, centerX: 33, centerY: 58, text: "UNITED STATES" },
  { time: 11.2, scale: 1.45, centerX: 33, centerY: 58, text: "UNITED STATES" },
  { time: 12.0, scale: 1.45, centerX: 67, centerY: 58, text: "CHINA" },
  { time: 18.5, scale: 1.45, centerX: 67, centerY: 58, text: "CHINA" },
  { time: 19.2, scale: 1.15, centerX: 50, centerY: 50, text: "THE AI RIVALRY" },
  { time: 25.5, scale: 1.15, centerX: 50, centerY: 50, text: "THE AI RIVALRY" },
  { time: 26.2, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 2 (26.2s - 48.2s): Capability Gap vs Efficiency
  { time: 26.3, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 27.2, scale: 1.6, centerX: 25, centerY: 52, text: "8 MONTHS AHEAD" },
  { time: 31.0, scale: 1.6, centerX: 25, centerY: 52, text: "8 MONTHS AHEAD" },
  { time: 31.8, scale: 1.6, centerX: 75, centerY: 52, text: "60x CHEAPER" },
  { time: 39.0, scale: 1.6, centerX: 75, centerY: 52, text: "60x CHEAPER" },
  { time: 40.0, scale: 1.15, centerX: 50, centerY: 50, text: "EFFICIENCY WAR" },
  { time: 47.5, scale: 1.15, centerX: 50, centerY: 50, text: "EFFICIENCY WAR" },
  { time: 48.2, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 3 (48.2s - 69.9s): Three Layers
  { time: 48.3, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 53.0, scale: 1.6, centerX: 50, centerY: 35, text: "DATA LAYER", box: [30, 16, 40, 26] },
  { time: 55.5, scale: 1.6, centerX: 50, centerY: 35, text: "DATA LAYER", box: [30, 16, 40, 26] },
  { time: 56.3, scale: 1.6, centerX: 50, centerY: 55, text: "SOFTWARE LAYER", box: [30, 44, 40, 24] },
  { time: 59.5, scale: 1.6, centerX: 50, centerY: 55, text: "SOFTWARE LAYER", box: [30, 44, 40, 24] },
  { time: 60.3, scale: 1.6, centerX: 50, centerY: 76, text: "HARDWARE LAYER", box: [30, 64, 40, 26] },
  { time: 63.5, scale: 1.6, centerX: 50, centerY: 76, text: "HARDWARE LAYER", box: [30, 64, 40, 26] },
  { time: 64.2, scale: 1.15, centerX: 50, centerY: 50, text: "THREE LAYERS" },
  { time: 69.2, scale: 1.15, centerX: 50, centerY: 50, text: "THREE LAYERS" },
  { time: 69.9, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 4 (69.9s - 94.3s): Vault vs Open Box
  { time: 70.0, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 73.4, scale: 1.5, centerX: 25, centerY: 55, text: "US: CLOSED VAULT" },
  { time: 83.5, scale: 1.5, centerX: 25, centerY: 55, text: "US: CLOSED VAULT" },
  { time: 84.2, scale: 1.5, centerX: 75, centerY: 55, text: "CHINA: OPEN SOURCE" },
  { time: 93.5, scale: 1.5, centerX: 75, centerY: 55, text: "CHINA: OPEN SOURCE" },
  { time: 94.3, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 5 (94.3s - 117.5s): Hardware Grip
  { time: 94.4, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 99.5, scale: 1.5, centerX: 26, centerY: 50, text: "US CHIP DESIGN" },
  { time: 108.5, scale: 1.5, centerX: 26, centerY: 50, text: "US CHIP DESIGN" },
  { time: 109.4, scale: 1.7, centerX: 85, centerY: 55, text: "EXPORT RESTRICTIONS" },
  { time: 116.8, scale: 1.7, centerX: 85, centerY: 55, text: "EXPORT RESTRICTIONS" },
  { time: 117.5, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 6 (117.5s - 154.1s): Software MoE
  { time: 117.6, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 124.2, scale: 1.45, centerX: 25, centerY: 52, text: "US: BRUTE FORCE" },
  { time: 131.0, scale: 1.45, centerX: 25, centerY: 52, text: "US: BRUTE FORCE" },
  { time: 131.8, scale: 1.45, centerX: 75, centerY: 52, text: "CHINA: MIXTURE OF EXPERTS" },
  { time: 145.8, scale: 1.45, centerX: 75, centerY: 52, text: "CHINA: MIXTURE OF EXPERTS" },
  { time: 146.6, scale: 1.15, centerX: 50, centerY: 50, text: "EFFICIENT WORKLOADS" },
  { time: 153.5, scale: 1.15, centerX: 50, centerY: 50, text: "EFFICIENT WORKLOADS" },
  { time: 154.1, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 7 (154.1s - 176.6s): Cost Graph
  { time: 154.2, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 155.0, scale: 1.6, centerX: 32, centerY: 55, text: "EQUAL PERFORMANCE" },
  { time: 161.0, scale: 1.6, centerX: 32, centerY: 55, text: "EQUAL PERFORMANCE" },
  { time: 161.8, scale: 1.6, centerX: 68, centerY: 55, text: "60x CHEAPER COST" },
  { time: 175.8, scale: 1.6, centerX: 68, centerY: 55, text: "60x CHEAPER COST" },
  { time: 176.6, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 8 (176.6s - 208.6s): Data Funnel
  { time: 176.7, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 182.4, scale: 1.5, centerX: 25, centerY: 55, text: "US: TEXT SCARCITY" },
  { time: 188.5, scale: 1.5, centerX: 25, centerY: 55, text: "US: TEXT SCARCITY" },
  { time: 189.2, scale: 1.5, centerX: 75, centerY: 55, text: "CHINA: MULTIMODAL behavior" },
  { time: 207.8, scale: 1.5, centerX: 75, centerY: 55, text: "CHINA: MULTIMODAL behavior" },
  { time: 208.6, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 9 (208.6s - 229.9s): US Leads
  { time: 208.7, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 211.5, scale: 1.8, centerX: 23, centerY: 55, text: "FIRST TO MARKET" },
  { time: 215.0, scale: 1.8, centerX: 23, centerY: 55, text: "FIRST TO MARKET" },
  { time: 215.8, scale: 1.8, centerX: 50, centerY: 55, text: "ADVANCED CHIPS" },
  { time: 218.2, scale: 1.8, centerX: 50, centerY: 55, text: "ADVANCED CHIPS" },
  { time: 218.9, scale: 1.8, centerX: 77, centerY: 55, text: "SAFETY RESEARCH" },
  { time: 222.0, scale: 1.8, centerX: 77, centerY: 55, text: "SAFETY RESEARCH" },
  { time: 222.8, scale: 1.15, centerX: 50, centerY: 50, text: "US ADVANTAGES" },
  { time: 229.2, scale: 1.15, centerX: 50, centerY: 50, text: "US ADVANTAGES" },
  { time: 229.9, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 10 (229.9s - 250.5s): China Leads
  { time: 230.0, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 231.6, scale: 1.8, centerX: 23, centerY: 55, text: "COST EFFICIENCY" },
  { time: 233.8, scale: 1.8, centerX: 23, centerY: 55, text: "COST EFFICIENCY" },
  { time: 234.3, scale: 1.8, centerX: 50, centerY: 55, text: "OPEN DISTRIBUTION" },
  { time: 236.8, scale: 1.8, centerX: 50, centerY: 55, text: "OPEN DISTRIBUTION" },
  { time: 237.4, scale: 1.8, centerX: 77, centerY: 55, text: "RAPID DEPLOYMENT" },
  { time: 240.2, scale: 1.8, centerX: 77, centerY: 55, text: "RAPID DEPLOYMENT" },
  { time: 240.8, scale: 1.15, centerX: 50, centerY: 50, text: "CHINA ADVANTAGES" },
  { time: 249.8, scale: 1.15, centerX: 50, centerY: 50, text: "CHINA ADVANTAGES" },
  { time: 250.5, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 11 (250.5s - 272.9s): Geopolitical Risks
  { time: 250.6, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 254.5, scale: 1.8, centerX: 33, centerY: 44, text: "CHIP SUPPLY CHAINS" },
  { time: 258.0, scale: 1.8, centerX: 33, centerY: 44, text: "CHIP SUPPLY CHAINS" },
  { time: 258.6, scale: 1.8, centerX: 50, centerY: 55, text: "DATA PRIVACY" },
  { time: 260.2, scale: 1.8, centerX: 50, centerY: 55, text: "DATA PRIVACY" },
  { time: 260.7, scale: 1.8, centerX: 89, centerY: 32, text: "BROADER SECURITY" },
  { time: 267.2, scale: 1.8, centerX: 89, centerY: 32, text: "BROADER SECURITY" },
  { time: 267.8, scale: 1.15, centerX: 50, centerY: 50, text: "GLOBAL WILDCARDS" },
  { time: 272.2, scale: 1.15, centerX: 50, centerY: 50, text: "GLOBAL WILDCARDS" },
  { time: 272.9, scale: 1.0, centerX: 50, centerY: 50, text: "" },

  // Slide 12 (272.9s - 301.4s): Conclusion
  { time: 273.0, scale: 1.0, centerX: 50, centerY: 50, text: "" },
  { time: 274.8, scale: 1.5, centerX: 35, centerY: 58, text: "US RAW CAPABILITY" },
  { time: 278.5, scale: 1.5, centerX: 35, centerY: 58, text: "US RAW CAPABILITY" },
  { time: 279.0, scale: 1.5, centerX: 65, centerY: 58, text: "CHINA EFFICIENCY" },
  { time: 286.8, scale: 1.5, centerX: 65, centerY: 58, text: "CHINA EFFICIENCY" },
  { time: 287.4, scale: 1.15, centerX: 50, centerY: 50, text: "TWO STRATEGIES, ONE RACE" },
  { time: 301.4, scale: 1.15, centerX: 50, centerY: 50, text: "TWO STRATEGIES, ONE RACE" }
];

// ─── Camera interpolation helper with easing ────────────────────────
function getCameraState(time: number) {
  const defaultState = {
    scale: 1.0,
    centerX: 50,
    centerY: 50,
    text: undefined as string | undefined,
    box: undefined as [number, number, number, number] | undefined,
    textOpacity: 1.0,
    textScale: 1.0,
  };

  if (time <= keyframes[0].time) {
    return {
      ...defaultState,
      scale: keyframes[0].scale,
      centerX: keyframes[0].centerX,
      centerY: keyframes[0].centerY,
      text: keyframes[0].text,
      box: keyframes[0].box,
    };
  }

  if (time >= keyframes[keyframes.length - 1].time) {
    const last = keyframes[keyframes.length - 1];
    return {
      ...defaultState,
      scale: last.scale,
      centerX: last.centerX,
      centerY: last.centerY,
      text: last.text,
      box: last.box,
    };
  }

  let i = 0;
  for (let idx = 0; idx < keyframes.length - 1; idx++) {
    if (time >= keyframes[idx].time && time < keyframes[idx + 1].time) {
      i = idx;
      break;
    }
  }

  const k1 = keyframes[i];
  const k2 = keyframes[i + 1];

  const diff = k2.time - k1.time;
  const p = diff > 0 ? (time - k1.time) / diff : 0;

  // Sine easeInOut camera interpolation
  const ease = Math.sin((p * Math.PI) / 2 - Math.PI / 2) * 0.5 + 0.5;

  const scale = k1.scale + ease * (k2.scale - k1.scale);
  const centerX = k1.centerX + ease * (k2.centerX - k1.centerX);
  const centerY = k1.centerY + ease * (k2.centerY - k1.centerY);

  // Determine relative metrics for overlay animations
  const keyframeAge = time - k1.time;
  const opacity = p > 0.95 ? (1 - p) * 20 : Math.min(1, keyframeAge * 4); // quick scale in, quick fade out at end
  const textScale = Math.min(1, keyframeAge * 3.5);

  return {
    scale,
    centerX,
    centerY,
    text: k1.text && p < 0.95 ? k1.text : undefined,
    box: k1.box && p < 0.95 ? k1.box : undefined,
    textOpacity: opacity,
    textScale
  };
}

// ─── Main Video Component ───────────────────────────────────────────
export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const currentTime = frame / fps;

  // Slide timeline boundaries
  const slideThresholds = [
    { page: 1, end: 26.2 },
    { page: 2, end: 48.2 },
    { page: 3, end: 69.9 },
    { page: 4, end: 94.3 },
    { page: 5, end: 117.5 },
    { page: 6, end: 154.1 },
    { page: 7, end: 176.6 },
    { page: 8, end: 208.6 },
    { page: 9, end: 229.9 },
    { page: 10, end: 250.5 },
    { page: 11, end: 272.9 },
    { page: 12, end: 301.4 }
  ];

  // Detect current active slide index
  let activeIndex = 0;
  for (let idx = 0; idx < slideThresholds.length; idx++) {
    const start = idx === 0 ? 0 : slideThresholds[idx - 1].end;
    if (currentTime >= start && currentTime < slideThresholds[idx].end) {
      activeIndex = idx;
      break;
    }
  }
  const activePage = slideThresholds[activeIndex].page;

  // Camera, Subtitles and Box Highlighting State
  const camera = getCameraState(currentTime);

  // Compute CSS pan values (translates point of focus [centerX, centerY] to center of screen)
  const translateX = 50 - camera.centerX;
  const translateY = 50 - camera.centerY;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0c10" }}>
      {/* Audio Engine */}
      <Audio src={staticFile("voiceover.m4a")} />

      {/* ── Slides Image Viewer Container (Subject to Panning & Zooming) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7f6f2",
          transform: `scale(${camera.scale}) translate(${translateX}%, ${translateY}%)`,
          transformOrigin: "50% 50%",
        }}
      >
        <Img
          src={staticFile(`Global_AI_Rivalry_page_${activePage}.png`)}
          alt={`Slide Page ${activePage}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />

        {/* ── Interactive Bounding Box Highlighter Overlay ── */}
        {camera.box && (
          <div
            style={{
              position: "absolute",
              border: "6px solid #ffcc00",
              boxShadow: "0 0 25px rgba(255, 204, 0, 0.9), inset 0 0 25px rgba(255, 204, 0, 0.4)",
              borderRadius: "12px",
              left: `${camera.box[0]}%`,
              top: `${camera.box[1]}%`,
              width: `${camera.box[2]}%`,
              height: `${camera.box[3]}%`,
              zIndex: 10,
              pointerEvents: "none",
              opacity: camera.textOpacity,
              transform: `scale(${camera.textScale})`,
              transformOrigin: "center center",
            }}
          />
        )}
      </div>

      {/* ── Vignette Overlay to enhance readability of graphics ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Bottom Gradient for text overlays readability ── */}
      {camera.text && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "35%",
            zIndex: 21,
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* ── Premium Motion Graphic Word Overlay ── */}
      {camera.text && (
        <div
          style={{
            position: "absolute",
            bottom: height > width ? "35%" : "12%", // Higher in vertical portrait, lower in widescreen
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 30,
            pointerEvents: "none",
            transform: `scale(${camera.textScale})`,
            opacity: camera.textOpacity,
          }}
        >
          <div
            style={{
              padding: "16px 36px",
              borderRadius: "24px",
              backgroundColor: "rgba(10, 12, 16, 0.75)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', 'Outfit', sans-serif",
                fontSize: width > height ? "54px" : "36px",
                fontWeight: 800,
                color: "#ffffff",
                textAlign: "center",
                letterSpacing: "4px",
                lineHeight: 1.1,
                textTransform: "uppercase",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.15)",
              }}
            >
              {camera.text}
            </span>
          </div>
        </div>
      )}

      {/* ── Top Dynamic Progress Bar ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${(currentTime / 301.4) * 100}%`,
          height: "5px",
          zIndex: 40,
          background: "linear-gradient(90deg, #0072ff, #00f2fe, #f35588)",
          boxShadow: "0 0 10px rgba(0, 242, 254, 0.7)",
        }}
      />
    </AbsoluteFill>
  );
};