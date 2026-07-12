import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";
import {
  LeaderboardParadoxCard,
  XiaomiBrandCard,
  InverseCorrelationChart,
  TwoLeaderboardsCard,
} from "../design/XiaomiDecouplingCards";

// ACT 1: THE PARADOX (Beats 0 to 5)
export const Beat0: React.FC = () => (
  <SceneLayout title="ACT I: THE PARADOX" subtitle="THE SINGLE MOST USED AI MODEL IN THE WORLD">
    <LeaderboardParadoxCard usageRank="#1 IN WORLD USAGE" benchmarkRank="???" />
  </SceneLayout>
);

export const Beat1: React.FC = () => (
  <SceneLayout title="GLOBAL MARKETPLACE SCALE" subtitle="BILLIONS OF REQUESTS EVERY SINGLE WEEK">
    <CinematicNumber value="BILLIONS" label="WEEKLY PRODUCTION REQUESTS" accentColor="#10B981" />
  </SceneLayout>
);

export const Beat2: React.FC = () => (
  <SceneLayout title="THE BENCHMARK TEST" subtitle="TESTED ON PhD LEVEL REASONING">
    <LeaderboardParadoxCard usageRank="#1 IN WORLD USAGE" benchmarkRank="SERIOUS BENCHMARK TEST" />
  </SceneLayout>
);

export const Beat3: React.FC = () => (
  <SceneLayout title="SHOCKING PARADOX" subtitle="DOES NOT EVEN CRACK THE GLOBAL TOP 10">
    <LeaderboardParadoxCard usageRank="#1 IN WORLD USAGE" benchmarkRank="#10 ON BENCHMARKS" />
  </SceneLayout>
);

export const Beat4: React.FC = () => (
  <SceneLayout title="RANKING REALITY" subtitle="SITTING AROUND 10th PLACE GLOBAL">
    <CinematicNumber value="10th" label="PLACE ON GLOBAL REASONING BENCHMARKS" accentColor="#FF5A5F" />
  </SceneLayout>
);

export const Beat5: React.FC = () => (
  <SceneLayout title="WHY DOES IT MAKE SENSE?" subtitle="SMARTEST vs MOST USED">
    <CinematicComparison
      leftValue="SMARTEST"
      leftLabel="10th in Real Usage"
      rightValue="MOST USED"
      rightLabel="#1 in Production"
    />
  </SceneLayout>
);

// ACT 2: XIAOMI & THE DECOUPLING (Beats 6 to 14)
export const Beat6: React.FC = () => (
  <SceneLayout title="ACT II: THE BUILDER" subtitle="XIAOMI AI WORKHORSE">
    <XiaomiBrandCard />
  </SceneLayout>
);

export const Beat7: React.FC = () => (
  <SceneLayout title="THE BIGGER PATTERN" subtitle="COMPARING TWO DIFFERENT RANKINGS">
    <TwoLeaderboardsCard />
  </SceneLayout>
);

export const Beat8: React.FC = () => (
  <SceneLayout title="RANKING #1: INTELLIGENCE" subtitle="HOW WELL A MODEL REASONS ON HARD TESTS">
    <CinematicNumber value="IQ" label="HARD BENCHMARK REASONING TESTS" accentColor="#00F0FF" />
  </SceneLayout>
);

export const Beat9: React.FC = () => (
  <SceneLayout title="RANKING #2: USAGE SCALE" subtitle="HOW MANY ACTUAL TOKENS RUN EVERY WEEK">
    <CinematicNumber value="SCALE" label="ACTUAL TOKENS RUN IN REAL PRODUCTION" accentColor="#10B981" />
  </SceneLayout>
);

export const Beat10: React.FC = () => (
  <SceneLayout title="PRODUCTION EVERY WEEK" subtitle="RUNNING CONTINUOUSLY 24/7">
    <XiaomiBrandCard />
  </SceneLayout>
);

export const Beat11: React.FC = () => (
  <SceneLayout title="THE UNCOMFORTABLE TRUTH" subtitle="THE TWO RANKINGS BARELY AGREE">
    <InverseCorrelationChart />
  </SceneLayout>
);

export const Beat12: React.FC = () => (
  <SceneLayout title="RESEARCH FINDING" subtitle="BENCHMARK SCORE vs REAL-WORLD ADOPTION">
    <InverseCorrelationChart />
  </SceneLayout>
);

export const Beat13: React.FC = () => (
  <SceneLayout title="INVERSE CORRELATION" subtitle="BETTER PAPER SCORE = LESS SCALE">
    <LeaderboardParadoxCard usageRank="#1 DAILY WORKHORSE" benchmarkRank="LOWER BENCHMARK" />
  </SceneLayout>
);

export const Beat14: React.FC = () => (
  <SceneLayout title="THE WHY" subtitle="WHAT PEOPLE ACTUALLY USE AI FOR">
    <CinematicNumber value="WHY?" label="WHAT ARE DEVELOPERS USING AI FOR?" accentColor="#FFD700" />
  </SceneLayout>
);
