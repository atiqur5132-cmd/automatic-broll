import React from "react";
import { AbsoluteFill, Sequence, staticFile, Audio } from "remotion";
import { Act1TheVramWall } from "./scenes/vram/Act1TheVramWall";
import { Act2DeletingMultiplication } from "./scenes/vram/Act2DeletingMultiplication";
import { Act3MemoryBandwidthBottleneck } from "./scenes/vram/Act3MemoryBandwidthBottleneck";
import { Act4BenchmarkWars } from "./scenes/vram/Act4BenchmarkWars";
import { Act5PostNvidiaEra } from "./scenes/vram/Act5PostNvidiaEra";

/**
 * Master Tech Explainer Video:
 * "The End of VRAM: How 1-Bit AI Runs 70B Models on a $400 Laptop"
 *
 * Exact Whisper frame-aligned sequences:
 * - Act 1: Frames 0 -> 1806 (Duration: 1806)
 * - Act 2: Frames 1806 -> 3714 (Duration: 1908)
 * - Act 3: Frames 3714 -> 5396 (Duration: 1682)
 * - Act 4: Frames 5396 -> 6818 (Duration: 1422)
 * - Act 5: Frames 6818 -> 7915 (Duration: 1097)
 * Total: 7915 frames (263.83 seconds)
 */
export const MyVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0B0E" }}>
      {/* 1. Studio-Mastered Voiceover Audio (EBU R128 Normalized) */}
      <Audio src={staticFile("voiceover.wav")} />

      {/* 2. Act 1: The 40-Year Law & The VRAM Wall (Frames 0 - 1806) */}
      <Sequence from={0} durationInFrames={1806}>
        <Act1TheVramWall />
      </Sequence>

      {/* 3. Act 2: Deleting Multiplication (Frames 1806 - 3714) */}
      <Sequence from={1806} durationInFrames={1908}>
        <Act2DeletingMultiplication />
      </Sequence>

      {/* 4. Act 3: The Memory Bus Bottleneck (Frames 3714 - 5396) */}
      <Sequence from={3714} durationInFrames={1682}>
        <Act3MemoryBandwidthBottleneck />
      </Sequence>

      {/* 5. Act 4: Benchmark Wars & Hardware Reality (Frames 5396 - 6818) */}
      <Sequence from={5396} durationInFrames={1422}>
        <Act4BenchmarkWars />
      </Sequence>

      {/* 6. Act 5: The Post-Nvidia Era & Local Swarms (Frames 6818 - 7915) */}
      <Sequence from={6818} durationInFrames={1097}>
        <Act5PostNvidiaEra />
      </Sequence>
    </AbsoluteFill>
  );
};
