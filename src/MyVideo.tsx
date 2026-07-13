import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { BackgroundLayers } from "./components/BackgroundLayers";
import { GeminiLeaksMasterTimeline } from "./components/cinematic/GeminiLeaksMasterTimeline";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#080A10" }}>
      {/* Voiceover Audio Track (Exact Millisecond Synced Audio - 220.72s / 6652 frames) */}
      <Audio src={staticFile("gemini_35_leaks.wav")} volume={1.0} />

      {/* Atmospheric Background Layer */}
      <BackgroundLayers />

      {/* Master 47-Scene Cinematic Timeline with Millisecond Sync Captions */}
      <GeminiLeaksMasterTimeline />
    </AbsoluteFill>
  );
};
