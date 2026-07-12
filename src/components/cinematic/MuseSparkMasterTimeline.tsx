import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  Scene01Hook,
  Scene02Rivalry,
  Scene03MetaReveal,
  Scene04Multimodal,
  Scene05NotPoetry,
  Scene06DesktopTakeover,
  Scene08Roadmap,
  Scene11ValveBenchmark,
  Scene16NarrativeShatter,
  Scene19ComputerUseHUD,
  Scene24SelfHealing,
  Scene27PricingSmash,
  Scene33DefaultEngine,
  Scene38OutroCTA,
} from "./MuseSparkCinematicActs";

// Film Grain & Vignette Overlay (DaVinci Resolve Style Polish)
export const CinematicAtmosphereOverlay: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 55%, rgba(0, 0, 0, 0.55) 100%)",
        }}
      />
      {/* Procedural SVG Noise Grain */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.035,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="davinci-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#davinci-grain)" />
      </svg>
    </div>
  );
};

export const MuseSparkMasterTimeline: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* 0 - 102: Hook Card */}
      <Sequence from={0} durationInFrames={102}>
        <Scene01Hook />
      </Sequence>

      {/* 102 - 204: OpenAI & Anthropic Rivalry */}
      <Sequence from={102} durationInFrames={102}>
        <Scene02Rivalry />
      </Sequence>

      {/* 204 - 315: Meta Muse Spark Reveal */}
      <Sequence from={204} durationInFrames={111}>
        <Scene03MetaReveal />
      </Sequence>

      {/* 315 - 410: Multimodal Architecture */}
      <Sequence from={315} durationInFrames={95}>
        <Scene04Multimodal />
      </Sequence>

      {/* 410 - 541: Not Just Poetry / Old Chatbot */}
      <Sequence from={410} durationInFrames={131}>
        <Scene05NotPoetry />
      </Sequence>

      {/* 541 - 785: Autonomous Desktop Takeover */}
      <Sequence from={541} durationInFrames={244}>
        <Scene06DesktopTakeover />
      </Sequence>

      {/* 785 - 1142: Roadmap Breakdown Cards */}
      <Sequence from={785} durationInFrames={357}>
        <Scene08Roadmap />
      </Sequence>

      {/* 1142 - 1994: VALVE's AI Benchmarks & Zero Hallucination */}
      <Sequence from={1142} durationInFrames={852}>
        <Scene11ValveBenchmark />
      </Sequence>

      {/* 1994 - 2298: Myth Shattered / Narrative Shift */}
      <Sequence from={1994} durationInFrames={304}>
        <Scene16NarrativeShatter />
      </Sequence>

      {/* 2298 - 3237: Hyper-Advanced Computer Use HUD */}
      <Sequence from={2298} durationInFrames={939}>
        <Scene19ComputerUseHUD />
      </Sequence>

      {/* 3237 - 3755: Autonomous Self-Healing Error Resolution */}
      <Sequence from={3237} durationInFrames={518}>
        <Scene24SelfHealing />
      </Sequence>

      {/* 3755 - 4650: Disruptive Economics / Pricing Smash */}
      <Sequence from={3755} durationInFrames={895}>
        <Scene27PricingSmash />
      </Sequence>

      {/* 4650 - 5484: Massive AI Workforces & Default Engine */}
      <Sequence from={4650} durationInFrames={834}>
        <Scene33DefaultEngine />
      </Sequence>

      {/* 5484 - 5925: Outro CTA Card */}
      <Sequence from={5484} durationInFrames={441}>
        <Scene38OutroCTA />
      </Sequence>

      {/* Global DaVinci Resolve Style Polish Layer */}
      <CinematicAtmosphereOverlay />
    </AbsoluteFill>
  );
};
