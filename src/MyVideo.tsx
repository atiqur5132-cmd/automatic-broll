import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { MacroBackground } from "./components/MacroBackground";
import { ForegroundBeatCard } from "./components/ForegroundBeatCard";
import { FOREGROUND_BEATS } from "./data/privacyBeats";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Voiceover Audio Layer */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Layer 1: Macro Background Environment Layer (Changes every ~15-20s) */}
      <MacroBackground />

      {/* Layer 2: Foreground Beat Layer (Changes every 3-5s based on exact timestamps) */}
      {FOREGROUND_BEATS.map((beat) => (
        <Sequence
          key={`beat-${beat.id}`}
          from={beat.fromFrame}
          durationInFrames={beat.durationInFrames}
        >
          <ForegroundBeatCard beat={beat} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};