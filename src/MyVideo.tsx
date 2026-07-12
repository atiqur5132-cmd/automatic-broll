import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { BackgroundLayers } from "./components/BackgroundLayers";
import { MuseSparkMasterTimeline } from "./components/cinematic/MuseSparkMasterTimeline";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#080A10" }}>
      {/* Voiceover Audio Track (Natural Muse Spark 1.1 Audio - Exact 197.5 sec / 5925 frames) */}
      <Audio src={staticFile("edited_audio.wav")} volume={1.0} />

      {/* Atmospheric Background Layer */}
      <BackgroundLayers />

      {/* Master Cinematic Acts Timeline (Word & Millisecond Accurate Sync) */}
      <MuseSparkMasterTimeline />
    </AbsoluteFill>
  );
};
