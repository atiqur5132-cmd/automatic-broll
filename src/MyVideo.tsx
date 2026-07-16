import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { BackgroundLayers } from "./components/BackgroundLayers";
import { KimiK3MasterTimeline } from "./components/cinematic/KimiK3MasterTimeline";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#080A10" }}>
      {/* Voiceover Audio Track (Kimi K3 - kimi audio.m4a - 10696 frames) */}
      <Audio src={staticFile("kimi audio.m4a")} volume={1.0} />

      {/* Atmospheric Background Layer */}
      <BackgroundLayers />

      {/* Master 36-Scene Cinematic Timeline without Captions (Visual-First 3D Motion Graphics) */}
      <KimiK3MasterTimeline />
    </AbsoluteFill>
  );
};
