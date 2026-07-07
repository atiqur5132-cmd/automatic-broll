import { useCurrentFrame, useVideoConfig, spring, interpolate, Audio, staticFile } from "remotion";
import React from "react";
import subtitles from "./subtitles.json";

interface SubtitleItem {
  text: string;
  start: number;
  end: number;
}

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

  // Dynamic values for screen effects
  // Check if "Jhooth" or "fake" or "fek" is active in subtitle text to apply a camera shake
  const isFakeNewsActive =
    currentSubtitleText.toLowerCase().includes("jhooth") ||
    currentSubtitleText.toLowerCase().includes("fake") ||
    currentSubtitleText.toLowerCase().includes("fek");

  // Shake animation using sine/cosine waves
  const shakeX = isFakeNewsActive ? Math.sin(frame * 0.8) * 8 : 0;
  const shakeY = isFakeNewsActive ? Math.cos(frame * 0.8) * 8 : 0;

  // Speec active checker
  const isSpeechActive = activeSubtitle !== undefined;

  // Brain visualization scale pulse
  const brainPulse = isSpeechActive
    ? spring({ frame, fps, config: { damping: 10, stiffness: 100 } })
    : 1;
  const brainScale = interpolate(brainPulse, [0, 1], [1, 1.15]);

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
      <div className="flex flex-col items-center justify-center w-full px-8 text-center">
        {/* Floating Emoji display with scale animation */}
        <div style={{ height: "90px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {activeEmoji && (
            <div
              style={{
                fontSize: "70px",
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
            maxWidth: isLandscape ? "800px" : "900px",
            lineHeight: "1.4",
            fontSize: isLandscape ? "42px" : "55px",
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
                  margin: isLandscape ? "6px 12px" : "8px 16px",
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
      <div className="flex gap-4 items-center justify-center h-48">
        {[...Array(9)].map((_, i) => {
          const phase = i * 0.45;
          const barHeight = isSpeechActive
            ? interpolate(Math.sin(frame * 0.25 + phase), [-1, 1], [30, 180])
            : 18;
          return (
            <div
              key={i}
              style={{
                width: "16px",
                height: `${barHeight}px`,
                borderRadius: "8px",
                background: "linear-gradient(to top, #58a6ff, #00e5ff)",
                boxShadow: "0 0 15px rgba(0, 229, 255, 0.4)",
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
        backgroundColor: "#080c10",
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
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `scale(${1 + progress * 0.06})`,
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      {/* Radial glows in the background */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0) 70%)",
          borderRadius: "50%",
          transform: `translate(${Math.sin(frame * 0.008) * 80}px, ${Math.cos(frame * 0.008) * 80}px) scale(${interpolate(Math.sin(frame * 0.02), [-1, 1], [0.9, 1.15])})`,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(213, 0, 249, 0.08) 0%, rgba(213, 0, 249, 0) 70%)",
          borderRadius: "50%",
          transform: `translate(${Math.cos(frame * 0.008) * 80}px, ${Math.sin(frame * 0.008) * 80}px) scale(${interpolate(Math.cos(frame * 0.02), [-1, 1], [0.9, 1.15])})`,
          filter: "blur(50px)",
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

          {/* Right Panel: Motion Graphics Visualizer */}
          <div className="flex-1 flex flex-col justify-center items-center gap-8 bg-black/10 p-12">
            {/* Pulsing Brain Graphic */}
            <div
              style={{
                fontSize: "120px",
                transform: `scale(${brainScale})`,
                filter: "drop-shadow(0 0 30px rgba(0, 229, 255, 0.35))",
              }}
            >
              🧠
            </div>
            
            {/* Status indicator */}
            <div className="text-gray-400 font-medium text-xl tracking-widest uppercase">
              {isSpeechActive ? "Neural Waveform Processing..." : "Silence Detected"}
            </div>

            {/* Bouncing Audio Visualizer */}
            <BarVisualizer />
          </div>
        </div>
      )}

      {/* PORTRAIT / MOBILE LAYOUT (9:16) */}
      {!isLandscape && (
        <div className="flex flex-col h-full w-full justify-between items-center z-10 py-32 px-12">
          {/* Upper Section: Pulsing Graphic */}
          <div className="flex flex-col items-center gap-6 mt-12">
            <div
              style={{
                fontSize: "140px",
                transform: `scale(${brainScale})`,
                filter: "drop-shadow(0 0 40px rgba(0, 229, 255, 0.4))",
              }}
            >
              🧠
            </div>
            <div className="text-gray-400 font-semibold text-2xl tracking-widest uppercase text-center">
              {isSpeechActive ? "Analyzing Cognitive Process" : "Listening..."}
            </div>
          </div>

          {/* Middle Section: Big Captions */}
          <div className="w-full flex justify-center items-center my-auto">
            <RenderHighlightedSubtitle />
          </div>

          {/* Bottom Section: Audio Visualizer */}
          <div className="w-full mb-12">
            <BarVisualizer />
          </div>
        </div>
      )}
    </div>
  );
};