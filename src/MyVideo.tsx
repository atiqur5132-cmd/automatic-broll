import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Audio,
  staticFile,
  Img,
} from "remotion";
import React from "react";

// ─── Scene definitions ───────────────────────────────────────────────
interface Scene {
  image: string;
  start: number;
  end: number;
  text?: string;
  textTime?: number; // seconds into the video when text appears
  textColor?: string;
  textGlow?: string;
  shake?: boolean;
  redFlash?: boolean;
  textPersist?: boolean; // text stays until scene ends
}

const scenes: Scene[] = [
  {
    image: "Glowing_red_neon_speech_bubble_202607072242.jpeg",
    start: 0.0,
    end: 3.95,
    text: "JHOOTH × 100",
    textTime: 1.5,
    textColor: "#ff3333",
    textGlow: "rgba(255, 51, 51, 0.7)",
  },
  {
    image: "Speech_bubbles_on_grid_202607072242.jpeg",
    start: 3.95,
    end: 6.20,
  },
  {
    image: "Red_cracks_spreading_on_globe_202607072242.jpeg",
    start: 6.20,
    end: 9.50,
    text: "BAR BAR SUNOGE...",
    textTime: 7.0,
    textColor: "#ff6b35",
    textGlow: "rgba(255, 107, 53, 0.6)",
  },
  {
    image: "Glowing_brain_turning_blue_202607072242.jpeg",
    start: 9.50,
    end: 13.05,
    text: "DIMAG SACH\nMAAN LETA HAI",
    textTime: 10.0,
    textColor: "#00e5ff",
    textGlow: "rgba(0, 229, 255, 0.6)",
  },
  {
    image: "Human_silhouette_bust_cracked_stone_202607072242.jpeg",
    start: 13.05,
    end: 16.15,
    text: "INSAAN KI FITRAT",
    textTime: 14.0,
    textColor: "#7c8aff",
    textGlow: "rgba(124, 138, 255, 0.6)",
  },
  {
    image: "Glowing_maze_with_light_particle_202607072242.jpeg",
    start: 16.15,
    end: 20.0,
    text: "SHORTCUTS",
    textTime: 19.0,
    textColor: "#00e5ff",
    textGlow: "rgba(0, 229, 255, 0.7)",
  },
  {
    image: "Human_silhouette_kneeling_202607072242.jpeg",
    start: 20.0,
    end: 24.9,
    text: "AASANI SE YAKIN",
    textTime: 23.0,
    textColor: "#d183ff",
    textGlow: "rgba(209, 131, 255, 0.6)",
  },
  {
    image: "Blue_orb_outweighed_by_red_202607072242.jpeg",
    start: 24.9,
    end: 29.65,
    text: "SACH vs JHOOTH",
    textTime: 26.0,
    textColor: "#ff4444",
    textGlow: "rgba(255, 68, 68, 0.7)",
  },
  {
    image: "Human_silhouette_broken_lie_202607072242.jpeg",
    start: 29.65,
    end: 32.45,
    text: "FAKE NEWS",
    textTime: 31.0,
    textColor: "#ff2222",
    textGlow: "rgba(255, 34, 34, 0.8)",
    shake: true,
    redFlash: true,
  },
  {
    image: "Glowing_question_mark_near_head_202607072242.jpeg",
    start: 32.45,
    end: 35.65,
    text: "BELIEFS",
    textTime: 33.5,
    textColor: "#ffab40",
    textGlow: "rgba(255, 171, 64, 0.6)",
  },
  {
    image: "Magnifying_glass_over_speech_bubble_202607072242.jpeg",
    start: 35.65,
    end: 42.5,
    text: "SAWAAL POOCHHO",
    textTime: 38.0,
    textColor: "#40c4ff",
    textGlow: "rgba(64, 196, 255, 0.6)",
  },
  {
    image: "Speech_bubble_transforming_202607072242.jpeg",
    start: 42.5,
    end: 47.28,
    text: "VERIFY KARO ✓",
    textTime: 44.0,
    textColor: "#00e676",
    textGlow: "rgba(0, 230, 118, 0.8)",
    textPersist: true,
  },
];

// ─── Floating Particle ──────────────────────────────────────────────
const Particle: React.FC<{
  index: number;
  frame: number;
  width: number;
  height: number;
}> = ({ index, frame, width, height }) => {
  // Deterministic pseudo-random from index
  const seed = (index * 7919 + 104729) % 100000;
  const x = (seed % 1000) / 1000;
  const speed = 0.3 + ((seed % 500) / 500) * 0.7;
  const size = 2 + (seed % 4);
  const delay = (seed % 300);
  const opacity = 0.15 + ((seed % 40) / 100);

  const yProgress = ((frame + delay) * speed * 0.5) % (height + 40);
  const yPos = height + 20 - yProgress;
  const xDrift = Math.sin((frame + delay) * 0.02 + index) * 30;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x * width + xDrift}px`,
        top: `${yPos}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 1)",
        opacity,
        pointerEvents: "none",
        filter: `blur(${size > 4 ? 1 : 0}px)`,
      }}
    />
  );
};

// ─── Main Component ─────────────────────────────────────────────────
export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();
  const currentTime = frame / fps;
  const progress = frame / durationInFrames;

  // Find current and previous scene for cross-fade
  const currentSceneIndex = scenes.findIndex(
    (s) => currentTime >= s.start && currentTime < s.end
  );
  const activeScene = currentSceneIndex >= 0 ? scenes[currentSceneIndex] : scenes[scenes.length - 1];
  const prevScene = currentSceneIndex > 0 ? scenes[currentSceneIndex - 1] : null;

  // Cross-fade timing
  const FADE_DURATION = 0.5; // seconds
  const timeIntoScene = currentTime - activeScene.start;
  const isFading = timeIntoScene < FADE_DURATION && currentSceneIndex > 0;
  const fadeProgress = isFading
    ? interpolate(timeIntoScene, [0, FADE_DURATION], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;

  // Ken Burns zoom
  const sceneDuration = activeScene.end - activeScene.start;
  const sceneProgress = timeIntoScene / sceneDuration;
  const kenBurnsScale = interpolate(sceneProgress, [0, 1], [1.0, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Previous scene Ken Burns (for cross-fade)
  const prevKenBurns = prevScene
    ? interpolate(
        (currentTime - prevScene.start) / (prevScene.end - prevScene.start),
        [0, 1],
        [1.0, 1.15],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      )
    : 1;

  // Screen shake
  const isShaking = activeScene.shake === true;
  const shakeX = isShaking ? Math.sin(frame * 1.2) * 12 : 0;
  const shakeY = isShaking ? Math.cos(frame * 1.5) * 10 : 0;

  // Red flash overlay
  const showRedFlash = activeScene.redFlash === true;
  const redFlashOpacity = showRedFlash
    ? interpolate(Math.sin(frame * 0.3), [-1, 1], [0, 0.15])
    : 0;

  // Impact text logic
  const renderImpactText = () => {
    if (!activeScene.text || activeScene.textTime === undefined) return null;

    const textAppearTime = activeScene.textTime;
    const textDuration = activeScene.textPersist
      ? activeScene.end - textAppearTime
      : Math.min(2.5, activeScene.end - textAppearTime);
    const textEndTime = textAppearTime + textDuration;

    if (currentTime < textAppearTime || currentTime > textEndTime) return null;

    const timeSinceAppear = currentTime - textAppearTime;
    const framesSinceAppear = timeSinceAppear * fps;

    // Spring scale-in
    const scaleSpring = spring({
      frame: framesSinceAppear,
      fps,
      config: { damping: 12, stiffness: 80 },
    });
    const scale = interpolate(scaleSpring, [0, 1], [0.3, 1]);

    // Fade-out (last 0.4s unless persist)
    const fadeOut = activeScene.textPersist
      ? 1
      : interpolate(
          timeSinceAppear,
          [textDuration - 0.4, textDuration],
          [1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

    // Glow pulse
    const glowPulse = interpolate(
      Math.sin(frame * 0.08),
      [-1, 1],
      [0.7, 1.0]
    );

    const textLines = activeScene.text.split("\n");

    return (
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 30,
          transform: `scale(${scale})`,
          opacity: fadeOut,
        }}
      >
        {/* Backdrop blur pill */}
        <div
          style={{
            padding: "20px 50px",
            borderRadius: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {textLines.map((line, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontSize: "58px",
                fontWeight: 900,
                color: activeScene.textColor || "#ffffff",
                textAlign: "center",
                letterSpacing: "3px",
                lineHeight: 1.2,
                textShadow: `0 0 ${30 * glowPulse}px ${activeScene.textGlow || "rgba(255,255,255,0.5)"}, 0 0 ${60 * glowPulse}px ${activeScene.textGlow || "rgba(255,255,255,0.3)"}`,
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        position: "relative",
        overflow: "hidden",
        transform: `translate(${shakeX}px, ${shakeY}px)`,
      }}
    >
      {/* Audio */}
      <Audio src={staticFile("WhatsApp Audio 2026-07-04 at 1.54.49 PM.mp4")} />

      {/* ── Previous scene (under, for cross-fade) ── */}
      {isFading && prevScene && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        >
          <Img
            src={staticFile(prevScene.image)}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `scale(${prevKenBurns})`,
            }}
          />
        </div>
      )}

      {/* ── Active scene (full screen) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          opacity: fadeProgress,
        }}
      >
        <Img
          src={staticFile(activeScene.image)}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(${kenBurnsScale})`,
          }}
        />
      </div>

      {/* ── Vignette overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Bottom gradient for text readability ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45%",
          zIndex: 11,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Red flash overlay ── */}
      {showRedFlash && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 12,
            backgroundColor: `rgba(255, 0, 0, ${redFlashOpacity})`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* ── Floating particles ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 15,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(25)].map((_, i) => (
          <Particle
            key={i}
            index={i}
            frame={frame}
            width={width}
            height={height}
          />
        ))}
      </div>

      {/* ── Progress bar (thin, top) ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${progress * 100}%`,
          height: "3px",
          zIndex: 40,
          background: "linear-gradient(90deg, #58a6ff, #00e5ff, #d500f9)",
          boxShadow: "0 0 10px rgba(0, 229, 255, 0.6)",
        }}
      />

      {/* ── Impact text ── */}
      {renderImpactText()}
    </div>
  );
};