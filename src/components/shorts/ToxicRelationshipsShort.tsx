import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { PsychologyShortBackground } from "./PsychologyShortBackground";
import { HormoziKineticCaptions } from "./HormoziKineticCaptions";
import {
  Scene1Hook,
  Scene2Addiction,
  Scene3Intermittent,
  Scene4SplitScreen,
  Scene5Dopamine,
  Scene6Gambling,
  Scene7Hope,
  Scene8TimeLoop,
  Scene9Chaos,
  Scene10RewardSpike,
  Scene11Withdrawal,
  Scene12Outro,
} from "./toxic/ToxicVisualScenes";

export const ToxicRelationshipsShort: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle continuous 2.5D breathing camera zoom to keep vertical frame dynamic
  const cameraScale = interpolate(
    Math.sin(frame * 0.04),
    [-1, 1],
    [1.0, 1.03],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#08080E" }}>
      {/* Voiceover Audio */}
      <Audio src={staticFile("toxic_relationships_clean.wav")} />

      {/* Cinematic Atmospheric Background */}
      <PsychologyShortBackground />

      {/* Virtual 2.5D Camera Layer */}
      <AbsoluteFill
        style={{
          transform: `scale(${cameraScale})`,
          transformOrigin: "50% 35%",
        }}
      >
        {/* Scene 1: 0 - 168 (Hook: "What if I told you... not because it's love,") */}
        <Sequence from={0} durationInFrames={168}>
          <Scene1Hook />
        </Sequence>

        {/* Scene 2: 168 - 257 ("but because your brain is addicted.") */}
        <Sequence from={168} durationInFrames={89}>
          <Scene2Addiction />
        </Sequence>

        {/* Scene 3: 257 - 354 ("Toxic relationships create something called intermittent reinforcement.") */}
        <Sequence from={257} durationInFrames={97}>
          <Scene3Intermittent />
        </Sequence>

        {/* Scene 4: 354 - 501 ("One day, they ignore you. The next day, they shower you with love.") */}
        <Sequence from={354} durationInFrames={147}>
          <Scene4SplitScreen />
        </Sequence>

        {/* Scene 5: 501 - 645 ("Your brain never knows what comes next. That uncertainty releases dopamine,") */}
        <Sequence from={501} durationInFrames={144}>
          <Scene5Dopamine />
        </Sequence>

        {/* Scene 6: 645 - 756 ("the same chemical involved in gambling and social media addiction.") */}
        <Sequence from={645} durationInFrames={111}>
          <Scene6Gambling />
        </Sequence>

        {/* Scene 7: 756 - 893 ("You don't become addicted to the person. You become addicted to the hope,") */}
        <Sequence from={756} durationInFrames={137}>
          <Scene7Hope />
        </Sequence>

        {/* Scene 8: 893 - 983 ("that the next moment will finally be different.") */}
        <Sequence from={893} durationInFrames={90}>
          <Scene8TimeLoop />
        </Sequence>

        {/* Scene 9: 983 - 1204 ("Over time, your brain starts confusing emotional chaos with emotional connection...") */}
        <Sequence from={983} durationInFrames={221}>
          <Scene9Chaos />
        </Sequence>

        {/* Scene 10: 1204 - 1367 ("and the rare moments of affection feel incredibly rewarding...") */}
        <Sequence from={1204} durationInFrames={163}>
          <Scene10RewardSpike />
        </Sequence>

        {/* Scene 11: 1367 - 1528 ("withdrawal, not heartbreak. Understanding this is the first step...") */}
        <Sequence from={1367} durationInFrames={161}>
          <Scene11Withdrawal />
        </Sequence>

        {/* Scene 12: 1528 - 1594 ("Follow for more psychology.") */}
        <Sequence from={1528} durationInFrames={66}>
          <Scene12Outro />
        </Sequence>
      </AbsoluteFill>

      {/* Center Word-by-Word Subtitles placed neatly below visual card */}
      <HormoziKineticCaptions />
    </AbsoluteFill>
  );
};
