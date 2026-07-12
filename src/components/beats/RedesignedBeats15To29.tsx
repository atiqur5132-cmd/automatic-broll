import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";
import {
  XiaomiBrandCard,
  TerminalIDECodeCard,
  TwoLeaderboardsCard,
} from "../design/XiaomiDecouplingCards";

// ACT 3: THE CODING DOMINANCE (Beats 15 to 24)
export const Beat15: React.FC = () => (
  <SceneLayout title="ACT III: SHIFT IN USAGE" subtitle="SCATTERED WRITING vs CODING WORKLOADS">
    <CinematicComparison
      leftValue="PAST AI"
      leftLabel="Scattered Writing & Chat"
      rightValue="TODAY"
      rightLabel="Production Code Workloads"
    />
  </SceneLayout>
);

export const Beat16: React.FC = () => (
  <SceneLayout title="CODING TAKES OVER" subtitle="OVER HALF OF ALL PLATFORM ACTIVITY">
    <CinematicNumber value=">50%" label="OF ALL AI TRAFFIC IS NOW CODING" accentColor="#10B981" />
  </SceneLayout>
);

export const Beat17: React.FC = () => (
  <SceneLayout title="THE CODING REALITY" subtitle="AUTO-COMPLETE & REFACTORING AT SCALE">
    <TerminalIDECodeCard />
  </SceneLayout>
);

export const Beat18: React.FC = () => (
  <SceneLayout title="NOT NOVEL PhD PROBLEMS" subtitle="EVERYDAY REPETITIVE ENGINEERING">
    <TerminalIDECodeCard />
  </SceneLayout>
);

export const Beat19: React.FC = () => (
  <SceneLayout title="ENGINEERING TASKS" subtitle="FUNCTION COMPLETE • REFACTOR • BUG FIX">
    <TerminalIDECodeCard />
  </SceneLayout>
);

export const Beat20: React.FC = () => (
  <SceneLayout title="REASONING vs SPEED" subtitle="DOES NOT NEED EDGE-OF-REASONING">
    <CinematicComparison
      leftValue="PhD EDGE"
      leftLabel="Slow & Expensive"
      rightValue="DAILY WORK"
      rightLabel="Fast & Cheap"
    />
  </SceneLayout>
);

export const Beat21: React.FC = () => (
  <SceneLayout title="THE TRIAD OF ADOPTION" subtitle="FAST • CHEAP • GOOD ENOUGH">
    <CinematicNumber value="FAST • CHEAP" label="GOOD ENOUGH FOR 24/7 MASSIVE VOLUME" accentColor="#10B981" />
  </SceneLayout>
);

export const Beat22: React.FC = () => (
  <SceneLayout title="XIAOMI'S STRATEGY" subtitle="OPTIMIZED HARD FOR HIGH VOLUME">
    <XiaomiBrandCard />
  </SceneLayout>
);

export const Beat23: React.FC = () => (
  <SceneLayout title="PRICED AGGRESSIVELY" subtitle="AVAILABLE AT MASSIVE PRODUCTION SCALE">
    <XiaomiBrandCard />
  </SceneLayout>
);

export const Beat24: React.FC = () => (
  <SceneLayout title="DEFAULT WORKHORSE" subtitle="DOMINATING REAL EVERYDAY USAGE">
    <CinematicNumber value="#1 DEFAULT" label="CHOICE FOR REPETITIVE HIGH VOLUME CODE" accentColor="#10B981" />
  </SceneLayout>
);

// ACT 4: TWO LEADERBOARDS (Beats 25 to 29)
export const Beat25: React.FC = () => (
  <SceneLayout title="ACT IV: TWO LEADERBOARDS" subtitle="FRONTIER MODELS USED DIFFERENTLY">
    <TwoLeaderboardsCard />
  </SceneLayout>
);

export const Beat26: React.FC = () => (
  <SceneLayout title="THE FRONTIER SLICE" subtitle="COMPLEX DEBUGGING & HIGH STAKES">
    <CinematicNumber value="FRONTIER" label="SAVED FOR COMPLEX HIGH-STAKES DEBUGGING" accentColor="#00F0FF" />
  </SceneLayout>
);

export const Beat27: React.FC = () => (
  <SceneLayout title="WHEN ERRORS COST" subtitle="HIGH STAKES vs DAILY ROUTINE">
    <CinematicComparison
      leftValue="HIGH STAKES"
      leftLabel="Use Frontier Models"
      rightValue="HIGH VOLUME"
      rightLabel="Use Fast Workhorses"
    />
  </SceneLayout>
);

export const Beat28: React.FC = () => (
  <SceneLayout title="VOLUME TRADE-OFF" subtitle="HIGH INTELLIGENCE = LOWER VOLUME">
    <CinematicNumber value="IQ vs VOL" label="HIGH INTELLIGENCE = LOWER VOLUME" accentColor="#FFB800" />
  </SceneLayout>
);

export const Beat29: React.FC = () => (
  <SceneLayout title="SELECTIVE USE" subtitle="SAVED FOR MOMENTS THAT NEED THEM">
    <TwoLeaderboardsCard />
  </SceneLayout>
);
