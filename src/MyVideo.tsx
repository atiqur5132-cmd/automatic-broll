import React from "react";
import { AbsoluteFill, Sequence, staticFile, Audio } from "remotion";
import { Scene1Trio } from "./scenes/Scene1Trio";
import { Scene2Truth } from "./scenes/Scene2Truth";
import { Scene3Compute } from "./scenes/Scene3Compute";
import { Scene4FlagshipRisk } from "./scenes/Scene4FlagshipRisk";
import { Scene5Psychology } from "./scenes/Scene5Psychology";
import { Scene6MenuAnchoring } from "./scenes/Scene6MenuAnchoring";
import { Scene7DecoyMidTier } from "./scenes/Scene7DecoyMidTier";
import { Scene8HabitLoop } from "./scenes/Scene8HabitLoop";
import { Scene9CarTrimStorage } from "./scenes/Scene9CarTrimStorage";
import { Scene10Plumbing } from "./scenes/Scene10Plumbing";
import { Scene11MenuIllusion } from "./scenes/Scene11MenuIllusion";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
      {/* Voiceover Audio */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Scene 1: 0.0s - 16.9s */}
      <Sequence from={0} durationInFrames={507}>
        <Scene1Trio />
      </Sequence>

      {/* Scene 2: 16.9s - 24.2s */}
      <Sequence from={507} durationInFrames={219}>
        <Scene2Truth />
      </Sequence>

      {/* Scene 3: 24.2s - 43.1s */}
      <Sequence from={726} durationInFrames={567}>
        <Scene3Compute />
      </Sequence>

      {/* Scene 4: 43.1s - 56.6s */}
      <Sequence from={1293} durationInFrames={405}>
        <Scene4FlagshipRisk />
      </Sequence>

      {/* Scene 5: 56.6s - 73.1s */}
      <Sequence from={1698} durationInFrames={495}>
        <Scene5Psychology />
      </Sequence>

      {/* Scene 6: 73.1s - 107.6s */}
      <Sequence from={2193} durationInFrames={1035}>
        <Scene6MenuAnchoring />
      </Sequence>

      {/* Scene 7: 107.6s - 132.5s */}
      <Sequence from={3228} durationInFrames={747}>
        <Scene7DecoyMidTier />
      </Sequence>

      {/* Scene 8: 132.5s - 148.6s */}
      <Sequence from={3975} durationInFrames={483}>
        <Scene8HabitLoop />
      </Sequence>

      {/* Scene 9: 148.6s - 188.4s */}
      <Sequence from={4458} durationInFrames={1194}>
        <Scene9CarTrimStorage />
      </Sequence>

      {/* Scene 10: 188.4s - 227.3s */}
      <Sequence from={5652} durationInFrames={1167}>
        <Scene10Plumbing />
      </Sequence>

      {/* Scene 11: 227.3s - 263.664s */}
      <Sequence from={6819} durationInFrames={1091}>
        <Scene11MenuIllusion />
      </Sequence>
    </AbsoluteFill>
  );
};