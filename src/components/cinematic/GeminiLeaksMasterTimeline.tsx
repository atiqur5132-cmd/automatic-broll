import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  Scene01Hook,
  Scene02GoogleEvolution,
  Scene03ConfidentialDossier,
  Scene04HeroTitle,
  Scene05TechHUD,
  Scene06LogoBadge,
  Scene07TokenVisualizer,
  Scene08ClosedDoorEval,
  Scene09TriModelClash,
  Scene10JulyCalendar,
  Scene11SpecsHUD,
  Scene12InternalTracking,
} from "./GeminiLeaksActsPart1";
import {
  Scene13CodenameCappuccino,
  Scene14EnergySurge,
  Scene15ContextTunnel,
  Scene16DeepThinkingMode,
  Scene17ReasoningTree,
  Scene18BenchmarkChart,
  Scene19CodeShowcase,
  Scene20SVGAgents,
  Scene21UIUXSplit,
  Scene22LMArenaRadar,
  Scene23AntiGravityPortal,
  Scene24ClaudeFable5,
} from "./GeminiLeaksActsPart2";
import {
  Scene25BenchmarkJump,
  Scene26SocialFeed,
  Scene27VictoryScorecard,
  Scene28OpenAIClash,
  Scene29ArchitectureLeap,
  Scene30WorldNetwork,
  Scene31NoCatchup,
  Scene32Leapfrog,
  Scene33PrivateValidation,
  Scene34WhenLaunch,
  Scene35TPUCluster,
  Scene36TargetJuly,
} from "./GeminiLeaksActsPart3";
import {
  Scene37DevCommunity,
  Scene38PolymarketOdds,
  Scene39OddsSurge,
  Scene40DeepMindSocial,
  Scene41Recap1,
  Scene42Recap2,
  Scene43Recap3,
  Scene44GrandFinale,
  Scene45CommunityPoll,
  Scene46CommentPrompt,
  Scene47OutroCTA,
} from "./GeminiLeaksActsPart4";
import { GeminiMillisecondCaptions } from "./GeminiMillisecondCaptions";

// DaVinci Resolve Style Global Atmosphere & Grain Overlay
export const DaVinciAtmosphereOverlay: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9000,
      }}
    >
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 55%, rgba(0, 0, 0, 0.58) 100%)",
        }}
      />
      {/* Procedural Film Grain Overlay */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.038,
          mixBlendMode: "overlay",
        }}
      >
        <filter id="davinci-grain-leaks">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#davinci-grain-leaks)" />
      </svg>
    </div>
  );
};

export const GeminiLeaksMasterTimeline: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#080A10" }}>
      {/* PART 1 SCENES */}
      <Sequence from={0} durationInFrames={125}>
        <Scene01Hook />
      </Sequence>
      <Sequence from={125} durationInFrames={86}>
        <Scene02GoogleEvolution />
      </Sequence>
      <Sequence from={211} durationInFrames={118}>
        <Scene03ConfidentialDossier />
      </Sequence>
      <Sequence from={329} durationInFrames={143}>
        <Scene04HeroTitle />
      </Sequence>
      <Sequence from={472} durationInFrames={144}>
        <Scene05TechHUD />
      </Sequence>
      <Sequence from={616} durationInFrames={119}>
        <Scene06LogoBadge />
      </Sequence>
      <Sequence from={735} durationInFrames={117}>
        <Scene07TokenVisualizer />
      </Sequence>
      <Sequence from={852} durationInFrames={138}>
        <Scene08ClosedDoorEval />
      </Sequence>
      <Sequence from={990} durationInFrames={128}>
        <Scene09TriModelClash />
      </Sequence>
      <Sequence from={1118} durationInFrames={127}>
        <Scene10JulyCalendar />
      </Sequence>
      <Sequence from={1245} durationInFrames={125}>
        <Scene11SpecsHUD />
      </Sequence>
      <Sequence from={1370} durationInFrames={130}>
        <Scene12InternalTracking />
      </Sequence>

      {/* PART 2 SCENES */}
      <Sequence from={1500} durationInFrames={120}>
        <Scene13CodenameCappuccino />
      </Sequence>
      <Sequence from={1620} durationInFrames={114}>
        <Scene14EnergySurge />
      </Sequence>
      <Sequence from={1734} durationInFrames={150}>
        <Scene15ContextTunnel />
      </Sequence>
      <Sequence from={1884} durationInFrames={149}>
        <Scene16DeepThinkingMode />
      </Sequence>
      <Sequence from={2033} durationInFrames={127}>
        <Scene17ReasoningTree />
      </Sequence>
      <Sequence from={2160} durationInFrames={135}>
        <Scene18BenchmarkChart />
      </Sequence>
      <Sequence from={2295} durationInFrames={135}>
        <Scene19CodeShowcase />
      </Sequence>
      <Sequence from={2430} durationInFrames={135}>
        <Scene20SVGAgents />
      </Sequence>
      <Sequence from={2565} durationInFrames={159}>
        <Scene21UIUXSplit />
      </Sequence>
      <Sequence from={2724} durationInFrames={141}>
        <Scene22LMArenaRadar />
      </Sequence>
      <Sequence from={2865} durationInFrames={180}>
        <Scene23AntiGravityPortal />
      </Sequence>
      <Sequence from={3045} durationInFrames={135}>
        <Scene24ClaudeFable5 />
      </Sequence>

      {/* PART 3 SCENES */}
      <Sequence from={3180} durationInFrames={120}>
        <Scene25BenchmarkJump />
      </Sequence>
      <Sequence from={3300} durationInFrames={150}>
        <Scene26SocialFeed />
      </Sequence>
      <Sequence from={3450} durationInFrames={150}>
        <Scene27VictoryScorecard />
      </Sequence>
      <Sequence from={3600} durationInFrames={135}>
        <Scene28OpenAIClash />
      </Sequence>
      <Sequence from={3735} durationInFrames={158}>
        <Scene29ArchitectureLeap />
      </Sequence>
      <Sequence from={3893} durationInFrames={144}>
        <Scene30WorldNetwork />
      </Sequence>
      <Sequence from={4037} durationInFrames={139}>
        <Scene31NoCatchup />
      </Sequence>
      <Sequence from={4176} durationInFrames={144}>
        <Scene32Leapfrog />
      </Sequence>
      <Sequence from={4320} durationInFrames={154}>
        <Scene33PrivateValidation />
      </Sequence>
      <Sequence from={4474} durationInFrames={131}>
        <Scene34WhenLaunch />
      </Sequence>
      <Sequence from={4605} durationInFrames={152}>
        <Scene35TPUCluster />
      </Sequence>
      <Sequence from={4757} durationInFrames={133}>
        <Scene36TargetJuly />
      </Sequence>

      {/* PART 4 SCENES */}
      <Sequence from={4890} durationInFrames={150}>
        <Scene37DevCommunity />
      </Sequence>
      <Sequence from={5040} durationInFrames={150}>
        <Scene38PolymarketOdds />
      </Sequence>
      <Sequence from={5190} durationInFrames={150}>
        <Scene39OddsSurge />
      </Sequence>
      <Sequence from={5340} durationInFrames={178}>
        <Scene40DeepMindSocial />
      </Sequence>
      <Sequence from={5518} durationInFrames={129}>
        <Scene41Recap1 />
      </Sequence>
      <Sequence from={5647} durationInFrames={143}>
        <Scene42Recap2 />
      </Sequence>
      <Sequence from={5790} durationInFrames={135}>
        <Scene43Recap3 />
      </Sequence>
      <Sequence from={5925} durationInFrames={152}>
        <Scene44GrandFinale />
      </Sequence>
      <Sequence from={6077} durationInFrames={163}>
        <Scene45CommunityPoll />
      </Sequence>
      <Sequence from={6240} durationInFrames={150}>
        <Scene46CommentPrompt />
      </Sequence>
      <Sequence from={6390} durationInFrames={262}>
        <Scene47OutroCTA />
      </Sequence>

      {/* GLOBAL MILLISECOND CAPTIONS OVERLAY */}
      <GeminiMillisecondCaptions />

      {/* GLOBAL DAVINCI RESOLVE STYLE ATMOSPHERE & GRAIN OVERLAY */}
      <DaVinciAtmosphereOverlay />
    </AbsoluteFill>
  );
};
