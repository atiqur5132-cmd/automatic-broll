import React from "react";
import { AbsoluteFill, Sequence, staticFile, Audio } from "remotion";
import { Scene1PromptIllusion } from "./agentic/Scene1PromptIllusion";
import { Scene2ThreeTierShift } from "./agentic/Scene2ThreeTierShift";
import { Scene3GenAIBrain } from "./agentic/Scene3GenAIBrain";
import { Scene4ZeroActionCeiling } from "./agentic/Scene4ZeroActionCeiling";
import { Scene5AIAgentDoer } from "./agentic/Scene5AIAgentDoer";
import { Scene6FunctionCalling } from "./agentic/Scene6FunctionCalling";
import { Scene7SingleLoopBottleneck } from "./agentic/Scene7SingleLoopBottleneck";
import { Scene8AgenticSwarms } from "./agentic/Scene8AgenticSwarms";
import { Scene9MicroWorkers } from "./agentic/Scene9MicroWorkers";
import { Scene10SoftwareHarness } from "./agentic/Scene10SoftwareHarness";
import { Scene11Future2027 } from "./agentic/Scene11Future2027";
import { KaiSubtitleOverlay } from "../components/kai/KaiSubtitleOverlay";

export const AgenticDocumentaryVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0C0E" }}>
      {/* 1. Voiceover Master Audio Track */}
      <Audio src={staticFile("voiceover_agentic.wav")} />

      {/* 2. Scene Sequences with Frame-Accurate Whisper Sync */}
      {/* Act 1: The Prompt Illusion */}
      <Sequence from={0} durationInFrames={996}>
        <Scene1PromptIllusion />
      </Sequence>

      {/* Act 1: 3-Tier Paradigm Shift */}
      <Sequence from={996} durationInFrames={601}>
        <Scene2ThreeTierShift />
      </Sequence>

      {/* Act 2: Generative AI - The Isolated Brain */}
      <Sequence from={1597} durationInFrames={892}>
        <Scene3GenAIBrain />
      </Sequence>

      {/* Act 2: The Zero-Action Ceiling */}
      <Sequence from={2489} durationInFrames={989}>
        <Scene4ZeroActionCeiling />
      </Sequence>

      {/* Act 3: AI Agents - The Tool Wielder */}
      <Sequence from={3478} durationInFrames={802}>
        <Scene5AIAgentDoer />
      </Sequence>

      {/* Act 3: Real-World Function Calling */}
      <Sequence from={4280} durationInFrames={743}>
        <Scene6FunctionCalling />
      </Sequence>

      {/* Act 4: The Single-Loop Bottleneck */}
      <Sequence from={5023} durationInFrames={939}>
        <Scene7SingleLoopBottleneck />
      </Sequence>

      {/* Act 5: Agentic AI Swarms (LangGraph) */}
      <Sequence from={5962} durationInFrames={933}>
        <Scene8AgenticSwarms />
      </Sequence>

      {/* Act 5: Specialized Micro-Workers & Self-Healing Loop */}
      <Sequence from={6895} durationInFrames={811}>
        <Scene9MicroWorkers />
      </Sequence>

      {/* Act 6: Software Harness Moat & Benchmarks */}
      <Sequence from={7706} durationInFrames={894}>
        <Scene10SoftwareHarness />
      </Sequence>

      {/* Act 7: The 2027 Paradigm & Climax */}
      <Sequence from={8600} durationInFrames={803}>
        <Scene11Future2027 />
      </Sequence>

      {/* 3. Global Synchronized Subtitle Overlay */}
      <KaiSubtitleOverlay />
    </AbsoluteFill>
  );
};
