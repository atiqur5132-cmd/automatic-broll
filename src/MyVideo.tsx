import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { BackgroundLayers } from "./components/BackgroundLayers";
import { NameCard } from "./components/NameCard";
import {
  Beat0, Beat1, Beat2, Beat3, Beat4, Beat5, Beat6, Beat7, Beat8, Beat9, Beat10,
  Beat11, Beat12, Beat13, Beat14, Beat15, Beat16, Beat17, Beat18, Beat19, Beat20,
  Beat21, Beat22, Beat23, Beat24, Beat25, Beat26, Beat27, Beat28, Beat29, Beat30,
  Beat31, Beat32, Beat33, Beat34, Beat35, Beat36, Beat37, Beat38, Beat39, Beat40,
  Beat41, Beat42, Beat43, Beat44
} from "./components/beats/VideoBeats";

export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0D0E12" }}>
      {/* Voiceover Audio file */}
      <Audio src={staticFile("edited_audio.wav")} />

      {/* Macro Background Layer: Edge-to-Edge Dynamic Environment */}
      <BackgroundLayers />

      {/* Foreground Beat Layer: Strictly Driven by Transcript Timestamps */}
      
      {/* Segment 0: 0.00s -> 5.44s (Frames 0 - 163) */}
      <Sequence durationInFrames={163}>
        <Beat0 />
      </Sequence>

      {/* Segment 1: 5.44s -> 12.32s (Frames 163 - 370) */}
      <Sequence from={163} durationInFrames={207}>
        <Beat1 />
      </Sequence>

      {/* Segment 2: 12.32s -> 18.56s (Frames 370 - 557) */}
      <Sequence from={370} durationInFrames={187}>
        <Beat2 />
        <NameCard name="OpenAI" role="AI Research Lab" borderColor="#00F0FF" />
      </Sequence>

      {/* Segment 3: 18.56s -> 23.76s (Frames 557 - 713) */}
      <Sequence from={557} durationInFrames={156}>
        <Beat3 />
        <NameCard name="OpenRouter" role="AI Model Marketplace" borderColor="#FFB800" />
      </Sequence>

      {/* Segment 4: 23.76s -> 28.96s (Frames 713 - 869) */}
      <Sequence from={713} durationInFrames={156}>
        <Beat4 />
      </Sequence>

      {/* Segment 5: 28.96s -> 35.52s (Frames 869 - 1066) */}
      <Sequence from={869} durationInFrames={197}>
        <Beat5 />
        <NameCard name="OpenRouter" role="AI Model Marketplace" borderColor="#FFB800" />
      </Sequence>

      {/* Segment 6: 35.52s -> 40.96s (Frames 1066 - 1229) */}
      <Sequence from={1066} durationInFrames={163}>
        <Beat6 />
      </Sequence>

      {/* Segment 7: 40.96s -> 47.20s (Frames 1229 - 1416) */}
      <Sequence from={1229} durationInFrames={187}>
        <Beat7 />
      </Sequence>

      {/* Segment 8: 47.20s -> 53.36s (Frames 1416 - 1601) */}
      <Sequence from={1416} durationInFrames={185}>
        <Beat8 />
      </Sequence>

      {/* Segment 9: 53.36s -> 58.48s (Frames 1601 - 1754) */}
      <Sequence from={1601} durationInFrames={153}>
        <Beat9 />
      </Sequence>

      {/* Segment 10: 58.48s -> 64.56s (Frames 1754 - 1937) */}
      <Sequence from={1754} durationInFrames={183}>
        <Beat10 />
      </Sequence>

      {/* Segment 11: 64.56s -> 70.40s (Frames 1937 - 2112) */}
      <Sequence from={1937} durationInFrames={175}>
        <Beat11 />
        <NameCard name="Xiaomi" role="Phone & Gadget Maker" borderColor="#FF5A5F" />
      </Sequence>

      {/* Segment 12: 70.40s -> 78.32s (Frames 2112 - 2350) */}
      <Sequence from={2112} durationInFrames={238}>
        <Beat12 />
      </Sequence>

      {/* Segment 13: 78.32s -> 84.00s (Frames 2350 - 2520) */}
      <Sequence from={2350} durationInFrames={170}>
        <Beat13 />
      </Sequence>

      {/* Segment 14: 84.00s -> 91.92s (Frames 2520 - 2758) */}
      <Sequence from={2520} durationInFrames={238}>
        <Beat14 />
        <NameCard name="Z.ai" role="GLM-5.2 Model" borderColor="#FF5A5F" />
      </Sequence>

      {/* Segment 15: 91.92s -> 97.12s (Frames 2758 - 2914) */}
      <Sequence from={2758} durationInFrames={156}>
        <Beat15 />
      </Sequence>

      {/* Segment 16: 97.12s -> 104.32s (Frames 2914 - 3130) */}
      <Sequence from={2914} durationInFrames={216}>
        <Beat16 />
      </Sequence>

      {/* Segment 17: 104.32s -> 109.92s (Frames 3130 - 3298) */}
      <Sequence from={3130} durationInFrames={168}>
        <Beat17 />
      </Sequence>

      {/* Segment 18: 109.92s -> 114.88s (Frames 3298 - 3446) */}
      <Sequence from={3298} durationInFrames={148}>
        <Beat18 />
      </Sequence>

      {/* Segment 19: 114.88s -> 119.84s (Frames 3446 - 3595) */}
      <Sequence from={3446} durationInFrames={149}>
        <Beat19 />
      </Sequence>

      {/* Segment 20: 119.84s -> 125.04s (Frames 3595 - 3751) */}
      <Sequence from={3595} durationInFrames={156}>
        <Beat20 />
        <NameCard name="Coinbase" role="Crypto Exchange" borderColor="#FFB800" />
      </Sequence>

      {/* Segment 21: 125.04s -> 129.68s (Frames 3751 - 3890) */}
      <Sequence from={3751} durationInFrames={139}>
        <Beat21 />
      </Sequence>

      {/* Segment 22: 129.68s -> 135.28s (Frames 3890 - 4058) */}
      <Sequence from={3890} durationInFrames={168}>
        <Beat22 />
      </Sequence>

      {/* Segment 23: 135.28s -> 141.52s (Frames 4058 - 4246) */}
      <Sequence from={4058} durationInFrames={188}>
        <Beat23 />
      </Sequence>

      {/* Segment 24: 141.52s -> 146.96s (Frames 4246 - 4409) */}
      <Sequence from={4246} durationInFrames={163}>
        <Beat24 />
      </Sequence>

      {/* Segment 25: 146.96s -> 152.08s (Frames 4409 - 4562) */}
      <Sequence from={4409} durationInFrames={153}>
        <Beat25 />
      </Sequence>

      {/* Segment 26: 152.08s -> 158.16s (Frames 4562 - 4745) */}
      <Sequence from={4562} durationInFrames={183}>
        <Beat26 />
      </Sequence>

      {/* Segment 27: 158.16s -> 164.24s (Frames 4745 - 4927) */}
      <Sequence from={4745} durationInFrames={182}>
        <Beat27 />
      </Sequence>

      {/* Segment 28: 164.24s -> 169.92s (Frames 4927 - 5098) */}
      <Sequence from={4927} durationInFrames={171}>
        <Beat28 />
      </Sequence>

      {/* Segment 29: 169.92s -> 175.36s (Frames 5098 - 5261) */}
      <Sequence from={5098} durationInFrames={163}>
        <Beat29 />
      </Sequence>

      {/* Segment 30: 175.36s -> 182.16s (Frames 5261 - 5465) */}
      <Sequence from={5261} durationInFrames={204}>
        <Beat30 />
      </Sequence>

      {/* Segment 31: 182.16s -> 187.20s (Frames 5465 - 5616) */}
      <Sequence from={5465} durationInFrames={151}>
        <Beat31 />
      </Sequence>

      {/* Segment 32: 187.20s -> 192.56s (Frames 5616 - 5777) */}
      <Sequence from={5616} durationInFrames={161}>
        <Beat32 />
        <NameCard name="Coinbase" role="Crypto Exchange" borderColor="#FFB800" />
      </Sequence>

      {/* Segment 33: 192.56s -> 196.72s (Frames 5777 - 5902) */}
      <Sequence from={5777} durationInFrames={125}>
        <Beat33 />
      </Sequence>

      {/* Segment 34: 196.72s -> 201.60s (Frames 5902 - 6048) */}
      <Sequence from={5902} durationInFrames={146}>
        <Beat34 />
      </Sequence>

      {/* Segment 35: 201.60s -> 205.44s (Frames 6048 - 6163) */}
      <Sequence from={6048} durationInFrames={115}>
        <Beat35 />
      </Sequence>

      {/* Segment 36: 205.44s -> 210.24s (Frames 6163 - 6307) */}
      <Sequence from={6163} durationInFrames={144}>
        <Beat36 />
      </Sequence>

      {/* Segment 37: 210.24s -> 215.04s (Frames 6307 - 6451) */}
      <Sequence from={6307} durationInFrames={144}>
        <Beat37 />
      </Sequence>

      {/* Segment 38: 215.04s -> 218.96s (Frames 6451 - 6569) */}
      <Sequence from={6451} durationInFrames={118}>
        <Beat38 />
      </Sequence>

      {/* Segment 39: 218.96s -> 223.76s (Frames 6569 - 6713) */}
      <Sequence from={6569} durationInFrames={144}>
        <Beat39 />
      </Sequence>

      {/* Segment 40: 223.76s -> 229.36s (Frames 6713 - 6881) */}
      <Sequence from={6713} durationInFrames={168}>
        <Beat40 />
      </Sequence>

      {/* Segment 41: 229.36s -> 235.20s (Frames 6881 - 7056) */}
      <Sequence from={6881} durationInFrames={175}>
        <Beat41 />
      </Sequence>

      {/* Segment 42: 235.20s -> 240.96s (Frames 7056 - 7229) */}
      <Sequence from={7056} durationInFrames={173}>
        <Beat42 />
      </Sequence>

      {/* Segment 43: 240.96s -> 246.32s (Frames 7229 - 7390) */}
      <Sequence from={7229} durationInFrames={161}>
        <Beat43 />
      </Sequence>

      {/* Segment 44: 246.32s -> 251.38s (Frames 7390 - 7542) */}
      <Sequence from={7390} durationInFrames={152}>
        <Beat44 />
      </Sequence>
    </AbsoluteFill>
  );
};