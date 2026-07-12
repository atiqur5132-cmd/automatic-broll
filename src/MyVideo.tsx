import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { BackgroundLayers } from "./components/BackgroundLayers";
import { DocumentaryPart1 } from "./components/parts/DocumentaryPart1";
import { DocumentaryPart2 } from "./components/parts/DocumentaryPart2";
import { DocumentaryPart3 } from "./components/parts/DocumentaryPart3";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0C10" }}>
      {/* Voiceover Audio Track (Exact 217.04 sec / 6511 frames) */}
      <Audio src={staticFile("edited_audio.wav")} volume={1.0} />

      {/* Atmospheric Background Layer */}
      <BackgroundLayers />

      {/* Part 1: Items 0 to 24 (0.00s -> 76.00s) */}
      <DocumentaryPart1 />

      {/* Part 2: Items 25 to 42 (76.00s -> 134.00s) */}
      <DocumentaryPart2 />

      {/* Part 3: Items 43 to 70 (134.00s -> 217.04s) */}
      <DocumentaryPart3 />
    </AbsoluteFill>
  );
};
