import { useCurrentFrame, useVideoConfig, spring, interpolate, Audio, staticFile, Img } from "remotion";
import React from "react";
import subtitles from "./subtitles.json";

interface SubtitleItem {
  text: string;
  start: number;
  end: number;
}

interface BrollScene {
  image: string;
  start: number;
  end: number;
}

const brollScenes: BrollScene[] = [
  { image: "lie_concept.png", start: 0.0, end: 9.5 },
  { image: "echo_chamber.png", start: 9.5, end: 16.15 },
  { image: "cognitive_brain.png", start: 16.15, end: 22.25 },
  { image: "brain_shortcuts.png", start: 22.25, end: 36.15 },
  { image: "critical_thinking.png", start: 36.15, end: 47.28 }
];

export const MyVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();

  const currentTime = frame / fps;
  const progress = frame / durationInFrames;
  const isLandscape = width > height;

  // Find the active subtitle item
  const activeSubtitle = subtitles.find(
    (sub: SubtitleItem) => currentTime >= sub.start && currentTime < sub.end
  ) as SubtitleItem | undefined;

  const currentSubtitleText = activeSubtitle ? activeSubtitle.text : "";

  // Find the active B-roll scene
  const activeScene = brollScenes.find(
    (scene) => currentTime >= scene.start && currentTime < scene.end
  );

  // Dynamic values for screen effects
  // Check if "Jhooth" or "fake" or "fek" is active in subtitle text to apply a camera shake
  const isFakeNewsActive =
    currentSubtitleText.toLowerCase().includes("jhooth") ||
    currentSubtitleText.toLowerCase().includes("fake") ||
    currentSubtitleText.toLowerCase().includes("fek");

  // Shake animation using sine/cosine waves
  const shakeX = isFakeNewsActive ? Math.sin(frame * 0.8) * 8 : 0;
  const shakeY = isFakeNewsActive ? Math.cos(frame * 0.8) * 8 : 0;

  // Speech active checker
  const isSpeechActive = activeSubtitle !== undefined;

  // Keyword color highlight
  const getWordColor = (word: string, isActive: boolean) => {
    if (!isActive) return "rgba(255, 255, 255, 0.4)"; // Muted gray-white for inactive words
    
    const w = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (w === "jhooth" || w === "fake" || w === "fek") return "#ff4444"; // Red for Lies
    if (w === "sach" || w === "verify" || w === "sahi") return "#00e676"; // Emerald green for Truth/Verification
    if (w === "intelligence") return "#00e5ff"; // Neon Cyan
    if (w === "beliefs") return "#d500f9"; // Neon Purple
    if (w === "dimag") return "#ffeb3b"; // Bright Yellow
    if (w === "shortcuts") return "#ff9100"; // Orange
    return "#ffffff"; // Pure active white
  };

  // Keyword emoji finder
  const getWordEmoji = (word: string) => {
    const w = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (w === "jhooth" || w === "jotha") return "🤥";
    if (w === "sach") return "✨";
    if (w === "verify") return "✅";
    if (w === "fake" || w === "fek") return "🚫";
    if (w === "dimag") return "🧠";
    if (w === "intelligence") return "💡";
    if (w === "yakin") return "🤝";
    if (w === "fitrat") return "👤";
    if (w === "shortcuts") return "⚡";
    if (w === "sawal" || w === "sawaal") return "❓";
    return null;
  };

  // Calculate dynamic animations and scale for B-roll image card
  const getBrollStyles = (scene: BrollScene) => {
    const elapsed = currentTime - scene.start;
    const sceneDuration = scene.end - scene.start;
    const progressInScene = elapsed / sceneDuration;
    
    // Slow Ken Burns zoom-in from 1.0x to 1.12x
    const zoomScale = interpolate(progressInScene, [0, 1], [1.0, 1.12], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    });
    
    // Smooth elastic spring scale-in at start of scene
    const sceneStartFrame = elapsed * fps;
    const bounceSpring = spring({
      frame: sceneStartFrame,
      fps,
      config: { damping: 13, stiffness: 100 }
    });
    const entranceScale = interpolate(bounceSpring, [0, 1], [0.85, 1.0]);

    // Cross-fade opacity: 0.4 seconds fade-in at the start of a scene
    const opacity = interpolate(elapsed, [0, 0.4], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    });

    return {
      transform: `scale(${zoomScale * entranceScale})`,
      opacity
    };
  };

  // Word Highlight Component
  const RenderHighlightedSubtitle = () => {
    if (!activeSubtitle) return null;

    const words = activeSubtitle.text.split(" ");
    const duration = activeSubtitle.end - activeSubtitle.start;
    const wordDuration = duration / words.length;

    // Find the currently active word index
    const activeWordIndex = Math.floor(
      (currentTime - activeSubtitle.start) / wordDuration
    );

    // Find if there's any emoji to display above subtitles
    let activeEmoji: string | null = null;
    for (let i = 0; i <= activeWordIndex; i++) {
      if (i < words.length) {
        const emoji = getWordEmoji(words[i]);
        if (emoji) activeEmoji = emoji;
      }
    }

    // Pure frame-based emoji pulsing scale to avoid flickering
    const emojiPulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.95, 1.05]);
    const emojiScale = (isSpeechActive ? 1.25 : 1.0) * emojiPulse;

    return (
      <div className="flex flex-col items-center justify-center w-full px-4 text-center">
        {/* Floating Emoji display with scale animation */}
        <div style={{ height: "80px", marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {activeEmoji && (
            <div
              style={{
                fontSize: "65px",
                transform: `scale(${emojiScale})`,
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
              }}
            >
              {activeEmoji}
            </div>
          )}
        </div>

        {/* Captions container */}
        <div
          className="flex flex-wrap justify-center items-center"
          style={{
            maxWidth: isLandscape ? "800px" : "950px",
            lineHeight: "1.45",
            fontSize: isLandscape ? "40px" : "48px",
            fontWeight: 800,
            fontFamily: "'Space Grotesk', sans-serif"
          }}
        >
          {words.map((word, i) => {
            const isActive = i === activeWordIndex;
            
            // Calculate word start and frames since word start for spring animation
            const wordStartSec = activeSubtitle.start + i * wordDuration;
            const framesSinceActive = Math.max(0, (currentTime - wordStartSec) * fps);
            
            // Spring animation for active word scale bounce
            const wordBounce = spring({
              frame: framesSinceActive,
              fps,
              config: { damping: 10, stiffness: 120 }
            });
            
            const wordScale = isActive 
              ? interpolate(wordBounce, [0, 1], [0.9, 1.25]) 
              : 1;

            const color = getWordColor(word, isActive);
            
            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  margin: isLandscape ? "5px 10px" : "6px 12px",
                  color,
                  transform: `scale(${wordScale})`,
                  textShadow: isActive ? `0 0 25px ${color}80` : "none",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  // Wave Visualizer Bars Component
  const BarVisualizer = () => {
    return (
      <div className="flex gap-3 items-center justify-center h-28">
        {[...Array(9)].map((_, i) => {
          const phase = i * 0.45;
          const barHeight = isSpeechActive
            ? interpolate(Math.sin(frame * 0.25 + phase), [-1, 1], [20, 100])
            : 12;
          return (
            <div
              key={i}
              style={{
                width: "12px",
                height: `${barHeight}px`,
                borderRadius: "6px",
                background: "linear-gradient(to top, #58a6ff, #00e5ff)",
                boxShadow: "0 0 10px rgba(0, 229, 255, 0.3)",
              }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#06090e",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transform: `translate(${shakeX}px, ${shakeY}px)`, // Shake effect
      }}
    >
      {/* Audio track sync */}
      <Audio src={staticFile("WhatsApp Audio 2026-07-04 at 1.54.49 PM.mp4")} />

      {/* Floating Animated Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `scale(${1 + progress * 0.04})`,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Glowing Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gray-900 z-50">
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            background: "linear-gradient(90deg, #58a6ff, #00e5ff, #d500f9)",
            boxShadow: "0 0 15px rgba(0, 229, 255, 0.8)",
          }}
        />
      </div>

      {/* WIDESCREEN / LANDSCAPE LAYOUT (16:9) */}
      {isLandscape && (
        <div className="flex flex-row h-full w-full z-10">
          {/* Left Panel: Subtitles */}
          <div className="flex-1 flex flex-col justify-center items-center border-r border-white/5 bg-black/20 backdrop-blur-sm p-12">
            <RenderHighlightedSubtitle />
          </div>

          {/* Right Panel: B-roll Visual Card & Visualizer */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8 bg-black/10 p-12">
            {activeScene && (
              <div 
                style={{
                  width: "90%",
                  height: "480px",
                  borderRadius: "24px",
                  border: "2px solid rgba(88, 166, 255, 0.35)",
                  boxShadow: "0 0 45px rgba(88, 166, 255, 0.2)",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#000"
                }}
              >
                <Img
                  src={staticFile(activeScene.image)}
                  alt="B-roll Visual"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    ...getBrollStyles(activeScene)
                  }}
                />
              </div>
            )}
            
            {/* Status indicator */}
            <div className="text-gray-400 font-medium text-lg tracking-widest uppercase">
              {isSpeechActive ? "Visual Analytics Sync Active" : "Silence Detected"}
            </div>

            {/* Bouncing Audio Visualizer */}
            <BarVisualizer />
          </div>
        </div>
      )}

      {/* PORTRAIT / MOBILE LAYOUT (9:16) */}
      {!isLandscape && (
        <div className="flex flex-col h-full w-full justify-between items-center z-10 py-16 px-6">
          {/* Top Panel: Visual Card (55% Height area) */}
          <div className="w-full flex items-center justify-center mt-6" style={{ height: "55%" }}>
            {activeScene && (
              <div 
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "28px",
                  border: "2.5px solid rgba(88, 166, 255, 0.35)",
                  boxShadow: "0 0 50px rgba(88, 166, 255, 0.22)",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "#000"
                }}
              >
                <Img
                  src={staticFile(activeScene.image)}
                  alt="B-roll Visual"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    ...getBrollStyles(activeScene)
                  }}
                />
              </div>
            )}
          </div>

          {/* Bottom Panel: Subtitles and Visualizer (45% Height area) */}
          <div className="w-full flex flex-col justify-end items-center gap-8 mb-4" style={{ height: "40%" }}>
            <div className="w-full flex justify-center items-center my-auto">
              <RenderHighlightedSubtitle />
            </div>

            {/* Visualizer at the very bottom */}
            <div className="w-full">
              <BarVisualizer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};