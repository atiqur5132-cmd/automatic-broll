import React from "react";
import { AbsoluteFill, Sequence, staticFile, Audio } from "remotion";
import { Scene1TrioIntro } from "./scenes/Scene1TrioIntro";
import { Scene2DatacenterCost } from "./scenes/Scene2DatacenterCost";
import { Scene3FlagshipDecoy } from "./scenes/Scene3FlagshipDecoy";
import { Scene4RestaurantMenu } from "./scenes/Scene4RestaurantMenu";
import { Scene5CarTrimStorage } from "./scenes/Scene5CarTrimStorage";
import { Scene6RoutingPlumbing } from "./scenes/Scene6RoutingPlumbing";
import { Scene7IllusionOfChoice } from "./scenes/Scene7IllusionOfChoice";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#08090C" }}>
      {/* 1. Voiceover Audio Track */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* 2. Scene 1: The Three Tiers (Intro & Brand Logos) */}
      <Sequence from={0} durationInFrames={720}>
        <Scene1TrioIntro />
      </Sequence>

      {/* 3. Scene 2: Datacenter Compute & GPU Burn Rate */}
      <Sequence from={720} durationInFrames={465}>
        <Scene2DatacenterCost />
      </Sequence>

      {/* 4. Scene 3: Flagship Decoy & Bankruptcy Economics */}
      <Sequence from={1185} durationInFrames={1260}>
        <Scene3FlagshipDecoy />
      </Sequence>

      {/* 5. Scene 4: Restaurant Menu Anchoring & Habit Loop */}
      <Sequence from={2445} durationInFrames={2010}>
        <Scene4RestaurantMenu />
      </Sequence>

      {/* 6. Scene 5: The Car Trim Playbook & Storage Gap */}
      <Sequence from={4455} durationInFrames={1545}>
        <Scene5CarTrimStorage />
      </Sequence>

      {/* 7. Scene 6: Request Routing & Infrastructure Plumbing */}
      <Sequence from={6000} durationInFrames={1095}>
        <Scene6RoutingPlumbing />
      </Sequence>

      {/* 8. Scene 7: The Grand Finale & Menu Illusion */}
      <Sequence from={7095} durationInFrames={815}>
        <Scene7IllusionOfChoice />
      </Sequence>
    </AbsoluteFill>
  );
};
