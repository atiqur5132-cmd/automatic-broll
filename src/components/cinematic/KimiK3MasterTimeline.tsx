import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import {
  Scene01HookSeismic,
  Scene02WAICShanghai,
  Scene03KimiK3Titan,
  Scene0428TrillionGiant,
  Scene05OpenVsClosedClash,
  Scene06FrontierChallengeArena,
  Scene07MoEBrainArchitecture,
  Scene08DynamicExpertRouting,
  Scene09OneMillionContextDigester,
  Scene10AttentionResidualsStream,
  Scene11Native3DMultimodalCore,
  Scene12AutonomousExecutionEngine,
  Scene13SwarmSpinUpHub,
  Scene14Parallel4SubAgents,
  Scene15SWEBenchSeniorTeam,
  Scene16ClashVsOpus48,
  Scene17OpenWeightAdvantage,
  Scene18SelfHostPrivateInfra,
  Scene19ThreeDollarUnitEconomics,
  Scene20DeepSeekMirrorScale,
  Scene21GeopoliticalShift2026,
  Scene22GapClosedPriceWar,
  Scene23ZeroVendorLockIn,
  Scene24DecentralizedScale,
  Scene25MoonshotTitanSummary,
  Scene26TakeTheCrownPoll,
  Scene27SubscribeOutroCTA,
} from "./KimiK3CinematicActs";
import { DaVinciAtmosphereOverlay } from "./GeminiLeaksMasterTimeline";

export const KimiK3MasterTimeline: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#080A10" }}>
      {/* ACT I: THE HOOK (0 - 1831 frames | 0:00 - 1:01) */}
      <Sequence from={0} durationInFrames={276}>
        <Scene01HookSeismic />
      </Sequence>
      <Sequence from={276} durationInFrames={259}>
        <Scene02WAICShanghai />
      </Sequence>
      <Sequence from={535} durationInFrames={267}>
        <Scene03KimiK3Titan />
      </Sequence>
      <Sequence from={802} durationInFrames={285}>
        <Scene0428TrillionGiant />
      </Sequence>
      <Sequence from={1087} durationInFrames={370}>
        <Scene05OpenVsClosedClash />
      </Sequence>
      <Sequence from={1457} durationInFrames={374}>
        <Scene06FrontierChallengeArena />
      </Sequence>

      {/* ACT II: UNDER THE HOOD - ARCHITECTURE (1831 - 4130 frames | 1:01 - 2:17) */}
      <Sequence from={1831} durationInFrames={403}>
        <Scene07MoEBrainArchitecture />
      </Sequence>
      <Sequence from={2234} durationInFrames={483}>
        <Scene08DynamicExpertRouting />
      </Sequence>
      <Sequence from={2717} durationInFrames={429}>
        <Scene09OneMillionContextDigester />
      </Sequence>
      <Sequence from={3146} durationInFrames={528}>
        <Scene10AttentionResidualsStream />
      </Sequence>
      <Sequence from={3674} durationInFrames={456}>
        <Scene11Native3DMultimodalCore />
      </Sequence>

      {/* ACT III: AGENT SWARM REVOLUTION (4130 - 5995 frames | 2:17 - 3:19) */}
      <Sequence from={4130} durationInFrames={406}>
        <Scene12AutonomousExecutionEngine />
      </Sequence>
      <Sequence from={4536} durationInFrames={506}>
        <Scene13SwarmSpinUpHub />
      </Sequence>
      <Sequence from={5042} durationInFrames={545}>
        <Scene14Parallel4SubAgents />
      </Sequence>
      <Sequence from={5587} durationInFrames={408}>
        <Scene15SWEBenchSeniorTeam />
      </Sequence>

      {/* ACT IV: OPEN-WEIGHT EARTHQUAKE VS OPUS 4.8 (5995 - 7987 frames | 3:19 - 4:26) */}
      <Sequence from={5995} durationInFrames={461}>
        <Scene16ClashVsOpus48 />
      </Sequence>
      <Sequence from={6456} durationInFrames={394}>
        <Scene17OpenWeightAdvantage />
      </Sequence>
      <Sequence from={6850} durationInFrames={518}>
        <Scene18SelfHostPrivateInfra />
      </Sequence>
      <Sequence from={7368} durationInFrames={318}>
        <Scene19ThreeDollarUnitEconomics />
      </Sequence>
      <Sequence from={7686} durationInFrames={301}>
        <Scene20DeepSeekMirrorScale />
      </Sequence>

      {/* ACT V: GEOPOLITICAL SHIFT & DEVELOPERS (7987 - 9643 frames | 4:26 - 5:21) */}
      <Sequence from={7987} durationInFrames={425}>
        <Scene21GeopoliticalShift2026 />
      </Sequence>
      <Sequence from={8412} durationInFrames={440}>
        <Scene22GapClosedPriceWar />
      </Sequence>
      <Sequence from={8852} durationInFrames={537}>
        <Scene23ZeroVendorLockIn />
      </Sequence>
      <Sequence from={9389} durationInFrames={254}>
        <Scene24DecentralizedScale />
      </Sequence>

      {/* ACT VI: CONCLUSION & CALL TO ACTION (9643 - 10696 frames | 5:21 - 5:56) */}
      <Sequence from={9643} durationInFrames={355}>
        <Scene25MoonshotTitanSummary />
      </Sequence>
      <Sequence from={9998} durationInFrames={392}>
        <Scene26TakeTheCrownPoll />
      </Sequence>
      <Sequence from={10390} durationInFrames={306}>
        <Scene27SubscribeOutroCTA />
      </Sequence>

      {/* GLOBAL DAVINCI RESOLVE STYLE ATMOSPHERE & GRAIN OVERLAY */}
      <DaVinciAtmosphereOverlay />
    </AbsoluteFill>
  );
};
