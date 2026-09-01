import React from "react";
import { AbsoluteFill, Sequence, staticFile, Audio } from "remotion";
import { Act1SuddenShockwave } from "./scenes/gemini38/Act1SuddenShockwave";
import { Act2JetskiPlatform } from "./scenes/gemini38/Act2JetskiPlatform";
import { Act3KillingSlopLatency } from "./scenes/gemini38/Act3KillingSlopLatency";
import { Act4TitanShippingWar } from "./scenes/gemini38/Act4TitanShippingWar";
import { Act5TokenEconomicsOutro } from "./scenes/gemini38/Act5TokenEconomicsOutro";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#07080C" }}>
      {/* 1. Studio Quality Neural Voiceover Audio Track */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* 2. Act 1: The Sudden Shockwave & The Leaks (Frames 0 - 1210) */}
      <Sequence from={0} durationInFrames={1210}>
        <Act1SuddenShockwave />
      </Sequence>

      {/* 3. Act 2: Inside Google's Secret Testing Platform Jetski (Frames 1210 - 2698) */}
      <Sequence from={1210} durationInFrames={1488}>
        <Act2JetskiPlatform />
      </Sequence>

      {/* 4. Act 3: The Technical Overhaul - Killing AI Slop & Latency (Frames 2698 - 4118) */}
      <Sequence from={2698} durationInFrames={1420}>
        <Act3KillingSlopLatency />
      </Sequence>

      {/* 5. Act 4: The 2026 AI Shipping War (Frames 4118 - 5268) */}
      <Sequence from={4118} durationInFrames={1150}>
        <Act4TitanShippingWar />
      </Sequence>

      {/* 6. Act 5: Disrupting Token Economics & Road to Gemini 4 (Frames 5268 - 6387) */}
      <Sequence from={5268} durationInFrames={1119}>
        <Act5TokenEconomicsOutro />
      </Sequence>
    </AbsoluteFill>
  );
};
