import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";
import {
  XiaomiBrandCard,
  InverseCorrelationChart,
  TwoLeaderboardsCard,
  LeaderboardParadoxCard,
} from "../design/XiaomiDecouplingCards";

// ACT 4 CONTINUED (Beats 30 to 38)
export const Beat30: React.FC = () => (
  <SceneLayout title="MOMENTS OF TRUTH" subtitle="SAVING FRONTIER IQ FOR HARD PROBLEMS">
    <TwoLeaderboardsCard />
  </SceneLayout>
);

export const Beat31: React.FC = () => (
  <SceneLayout title="THE ROUTINE TRAFFIC" subtitle="EVERYTHING ELSE ROUTED TO WORKHORSES">
    <XiaomiBrandCard />
  </SceneLayout>
);

export const Beat32: React.FC = () => (
  <SceneLayout title="THE PARADIGM SHIFT" subtitle="UNDERSTANDING THE DECOUPLING">
    <InverseCorrelationChart />
  </SceneLayout>
);

export const Beat33: React.FC = () => (
  <SceneLayout title="SMARTEST vs BEST" subtitle="THE OLD INDUSTRY ASSUMPTION">
    <CinematicComparison
      leftValue="SMARTEST"
      leftLabel="Smartest = Best"
      rightValue="DECOUPLED"
      rightLabel="Adoption Decoupled"
    />
  </SceneLayout>
);

export const Beat34: React.FC = () => (
  <SceneLayout title="THE QUIET STORY" subtitle="INTELLIGENCE & ADOPTION ARE DECOUPLING">
    <InverseCorrelationChart />
  </SceneLayout>
);

export const Beat35: React.FC = () => (
  <SceneLayout title="QUESTION #1: CAPABILITY" subtitle="WHAT IS THE MOST CAPABLE MODEL?">
    <TwoLeaderboardsCard />
  </SceneLayout>
);

export const Beat36: React.FC = () => (
  <SceneLayout title="QUESTION #2: ADOPTION" subtitle="WHAT DO PEOPLE TRUST EVERY DAY?">
    <TwoLeaderboardsCard />
  </SceneLayout>
);

export const Beat37: React.FC = () => (
  <SceneLayout title="PRICE & PERFORMANCE" subtitle="REAL PRODUCTION WORK AT SENSIBLE COST">
    <LeaderboardParadoxCard usageRank="#1 DAILY WORKHORSE" benchmarkRank="LOWER BENCHMARK" />
  </SceneLayout>
);

export const Beat38: React.FC = () => (
  <SceneLayout title="TWO DIFFERENT ANSWERS" subtitle="INCREASINGLY DIVERGENT LEADERBOARDS">
    <InverseCorrelationChart />
  </SceneLayout>
);

// ACT 5: THE FUTURE OF AI (Beats 39 to 44)
export const Beat39: React.FC = () => (
  <SceneLayout title="ACT V: THE FUTURE" subtitle="SMARTEST vs CHEAPEST AT MASSIVE SCALE">
    <CinematicNumber value="SCALE" label="DOES BEING SMARTEST EVEN MATTER AS MUCH?" accentColor="#00F0FF" />
  </SceneLayout>
);

export const Beat40: React.FC = () => (
  <SceneLayout title="WINNING THE MARKET" subtitle="MAKING IT GOOD ENOUGH TO RUN CONTINUOUSLY">
    <CinematicComparison
      leftValue="IQ LEADER"
      leftLabel="Benchmark Winner"
      rightValue="SCALE WINNER"
      rightLabel="High Volume Workhorse"
    />
  </SceneLayout>
);

export const Beat41: React.FC = () => (
  <SceneLayout title="MASSIVE SCALE ADOPTION" subtitle="GOOD ENOUGH & CHEAP ENOUGH AT VOLUME">
    <XiaomiBrandCard />
  </SceneLayout>
);

export const Beat42: React.FC = () => (
  <SceneLayout title="INDUSTRY DIRECTION" subtitle="WHERE IS THIS INDUSTRY HEADED?">
    <CinematicNumber value="THE FUTURE" label="WHERE IS THE AI INDUSTRY HEADED?" accentColor="#FFD700" />
  </SceneLayout>
);

export const Beat43: React.FC = () => (
  <SceneLayout title="JOIN THE CONVERSATION" subtitle="LET ME KNOW YOUR THOUGHTS IN THE COMMENTS">
    <CinematicNumber value="COMMENT" label="LET ME KNOW YOUR THOUGHTS BELOW" accentColor="#00F0FF" />
  </SceneLayout>
);

export const Beat44: React.FC = () => (
  <SceneLayout title="SUBSCRIBE & FOLLOW" subtitle="AI DOCUMENTARY STUDIO">
    <CinematicNumber value="SUBSCRIBE" label="FOR MORE INSIGHTFUL AI DOCUMENTARIES" accentColor="#FF5A5F" />
  </SceneLayout>
);
