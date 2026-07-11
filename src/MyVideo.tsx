import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { BackgroundLayers } from "./components/BackgroundLayers";
import { NameCard } from "./components/NameCard";
import {
  BeatKeynoteStage,
  BeatGeminiPromise,
  BeatApplauseToGroan,
  BeatTargetAccuracy,
  BeatEmptyCalendar,
  BeatPadlockLimited,
  BeatJulyGearRepair,
  BeatBlueprintRipple,
  BeatTenDaysExodus,
} from "./components/beats/BeatVisuals1To9";
import {
  BeatNoamTransformer,
  BeatPrice27Billion,
  BeatJohnJumperNobel,
  BeatAdlerPritzel,
  BeatStockCrash225B,
  BeatTwoMillionTokens,
  BeatContextUseCases,
  BeatDeepThink250,
  BeatCredibilityTest,
} from "./components/beats/BeatVisuals10To18";
import {
  BeatIndustryRaceSonnet,
  BeatRivalModelsClosingGap,
  BeatForkedQuestion,
  BeatUltraRewindSuccess,
  BeatStructuralFortress,
  BeatTippingNarrative,
  BeatJulyDeliverySuccess,
  BeatCenterOfGravityShift,
  BeatIndustryWatchingClosing,
} from "./components/beats/BeatVisuals19To27";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#030408" }}>
      {/* Voiceover Audio */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* Layer 1: Macro Background Layer (Edge-to-Edge Dynamic Environment) */}
      <BackgroundLayers />

      {/* Layer 2: Foreground Beat Layer (Strictly Driven by Whisper Timestamps) */}
      {/* 00:00.00 -> 00:06.16 | Frames 0 - 185 */}
      <Sequence durationInFrames={185}>
        <BeatKeynoteStage />
        <NameCard name="Sundar Pichai" role="CEO, Google" />
      </Sequence>

      {/* 00:06.16 -> 00:11.48 | Frames 185 - 344 */}
      <Sequence from={185} durationInFrames={159}>
        <BeatGeminiPromise />
      </Sequence>

      {/* 00:11.48 -> 00:16.88 | Frames 344 - 506 */}
      <Sequence from={344} durationInFrames={162}>
        <BeatApplauseToGroan />
      </Sequence>

      {/* 00:16.88 -> 00:20.36 | Frames 506 - 611 */}
      <Sequence from={506} durationInFrames={105}>
        <BeatTargetAccuracy />
      </Sequence>

      {/* 00:20.36 -> 00:25.88 | Frames 611 - 776 */}
      <Sequence from={611} durationInFrames={165}>
        <BeatEmptyCalendar />
      </Sequence>

      {/* 00:25.88 -> 00:32.24 | Frames 776 - 967 */}
      <Sequence from={776} durationInFrames={191}>
        <BeatPadlockLimited />
      </Sequence>

      {/* 00:32.24 -> 00:41.08 | Frames 967 - 1232 */}
      <Sequence from={967} durationInFrames={265}>
        <BeatJulyGearRepair />
      </Sequence>

      {/* 00:41.08 -> 00:47.80 | Frames 1232 - 1434 */}
      <Sequence from={1232} durationInFrames={202}>
        <BeatBlueprintRipple />
      </Sequence>

      {/* 00:47.80 -> 00:56.64 | Frames 1434 - 1699 */}
      <Sequence from={1434} durationInFrames={265}>
        <BeatTenDaysExodus />
      </Sequence>

      {/* 00:56.64 -> 01:07.64 | Frames 1699 - 2029 */}
      <Sequence from={1699} durationInFrames={330}>
        <BeatNoamTransformer />
        <NameCard name="Noam Shazeer" role="Co-lead, Gemini" />
      </Sequence>

      {/* 01:07.64 -> 01:19.40 | Frames 2029 - 2382 */}
      <Sequence from={2029} durationInFrames={353}>
        <BeatPrice27Billion />
      </Sequence>

      {/* 01:19.40 -> 01:23.50 | Frames 2382 - 2505 */}
      <Sequence from={2382} durationInFrames={123}>
        <BeatJohnJumperNobel />
        <NameCard name="John Jumper" role="Nobel Laureate" />
      </Sequence>

      {/* 01:23.50 -> 01:28.12 | Frames 2505 - 2644 */}
      <Sequence from={2505} durationInFrames={139}>
        <BeatAdlerPritzel />
        <NameCard name="Jonas Adler & Alexander Pritzel" role="Senior Researchers" />
      </Sequence>

      {/* 01:28.12 -> 01:35.40 | Frames 2644 - 2862 */}
      <Sequence from={2644} durationInFrames={218}>
        <BeatStockCrash225B />
      </Sequence>

      {/* 01:35.40 -> 01:45.24 | Frames 2862 - 3157 */}
      <Sequence from={2862} durationInFrames={295}>
        <BeatTwoMillionTokens />
      </Sequence>

      {/* 01:45.24 -> 01:58.28 | Frames 3157 - 3548 */}
      <Sequence from={3157} durationInFrames={391}>
        <BeatContextUseCases />
      </Sequence>

      {/* 01:58.28 -> 02:09.72 | Frames 3548 - 3892 */}
      <Sequence from={3548} durationInFrames={344}>
        <BeatDeepThink250 />
      </Sequence>

      {/* 02:09.72 -> 02:14.60 | Frames 3892 - 4038 */}
      <Sequence from={3892} durationInFrames={146}>
        <BeatCredibilityTest />
      </Sequence>

      {/* 02:14.60 -> 02:24.44 | Frames 4038 - 4333 */}
      <Sequence from={4038} durationInFrames={295}>
        <BeatIndustryRaceSonnet />
      </Sequence>

      {/* 02:24.44 -> 02:38.48 | Frames 4333 - 4754 */}
      <Sequence from={4333} durationInFrames={421}>
        <BeatRivalModelsClosingGap />
      </Sequence>

      {/* 02:38.48 -> 02:52.92 | Frames 4754 - 5188 */}
      <Sequence from={4754} durationInFrames={434}>
        <BeatForkedQuestion />
      </Sequence>

      {/* 02:52.92 -> 03:02.44 | Frames 5188 - 5473 */}
      <Sequence from={5188} durationInFrames={285}>
        <BeatUltraRewindSuccess />
      </Sequence>

      {/* 03:02.44 -> 03:16.12 | Frames 5473 - 5884 */}
      <Sequence from={5473} durationInFrames={411}>
        <BeatStructuralFortress />
      </Sequence>

      {/* 03:16.12 -> 03:33.44 | Frames 5884 - 6403 */}
      <Sequence from={5884} durationInFrames={519}>
        <BeatTippingNarrative />
      </Sequence>

      {/* 03:33.44 -> 03:53.68 | Frames 6403 - 7010 */}
      <Sequence from={6403} durationInFrames={607}>
        <BeatJulyDeliverySuccess />
      </Sequence>

      {/* 03:53.68 -> 04:04.92 | Frames 7010 - 7348 */}
      <Sequence from={7010} durationInFrames={338}>
        <BeatCenterOfGravityShift />
      </Sequence>

      {/* 04:04.92 -> 04:21.00 | Frames 7348 - 7830 */}
      <Sequence from={7348} durationInFrames={482}>
        <BeatIndustryWatchingClosing />
      </Sequence>
    </AbsoluteFill>
  );
};