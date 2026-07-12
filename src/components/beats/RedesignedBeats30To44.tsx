import React from "react";
import { SceneLayout } from "../design/SceneLayout";
import { CinematicNumber, CinematicComparison } from "../design/DocumentaryCards";
import {
  DocumentaryLogoCard,
  DocumentaryVSCard,
  Documentary3DDocument,
  DocumentaryKineticQuote,
  DocumentaryMultiLogoGrid,
} from "../design/DocumentaryOpenAIWarCards";

// Beat 30: Frames 6960 -> 7190
export const Beat30: React.FC = () => (
  <SceneLayout
    title="THE HEALTHY ALTERNATIVE"
    subtitle="Amodei likened OpenAI to a tobacco company, positioning Anthropic as the responsible choice"
    accentColor="#FF5A5F"
  >
    <CinematicComparison
      leftValue="TOBACCO"
      leftLabel="ADDICTIVE & COMMERCIAL SPEED"
      leftColor="#FF5A5F"
      rightValue="HEALTHY"
      rightLabel="CONSTITUTIONAL SAFETY"
      rightColor="#00F0FF"
    />
  </SceneLayout>
);

// Beat 31: Frames 7190 -> 7420
export const Beat31: React.FC = () => (
  <SceneLayout
    title="RIPPLE EFFECTS"
    subtitle="The shockwaves of the 2020 schism continued to destabilize OpenAI's safety teams"
    accentColor="#FFD700"
  >
    <DocumentaryKineticQuote
      quote="The ripple effects of the 2020 schism didn't stop there."
      author="THE SAFETY CRISIS CONTINUES"
      highlightWord="schism"
    />
  </SceneLayout>
);

// Beat 32: Frames 7420 -> 7650
export const Beat32: React.FC = () => (
  <SceneLayout
    title="THE SECOND EXODUS"
    subtitle="Over the next few years, OpenAI faced a massive wave of safety researcher departures"
    accentColor="#FF5A5F"
  >
    <CinematicNumber
      value="SAFETY EXODUS"
      label="TOP RESEARCHERS RESIGN IN PROTEST"
      accentColor="#FF5A5F"
    />
  </SceneLayout>
);

// Beat 33: Frames 7650 -> 7880
export const Beat33: React.FC = () => (
  <SceneLayout
    title="JAN LEIKE RESIGNATION"
    subtitle="Co-leader of the Superalignment team abruptly resigned over safety trade-offs"
    accentColor="#FFB800"
  >
    <Documentary3DDocument
      header="JAN LEIKE RESIGNATION DOSSIER"
      bodyText="Stated publicly that OpenAI's leadership priorities had fundamentally shifted."
      highlightText="PRIORITIZING SHINY NEW PRODUCTS OVER SAFETY"
    />
  </SceneLayout>
);

// Beat 34: Frames 7880 -> 8110
export const Beat34: React.FC = () => (
  <SceneLayout
    title="DANIEL KOKOTAJLO"
    subtitle="Forfeited roughly 85% of his family's net worth in unvested stock"
    accentColor="#FF5A5F"
  >
    <CinematicNumber
      value="85% FORFEITED"
      label="FAMILY NET WORTH SACRIFICED TO REFUSE SILENCING NDA"
      accentColor="#FF5A5F"
    />
  </SceneLayout>
);

// Beat 35: Frames 8110 -> 8340
export const Beat35: React.FC = () => (
  <SceneLayout
    title="THE WARNING MESSAGE"
    subtitle="Why Daniel gave up millions in unvested equity just to warn the public"
    accentColor="#00F0FF"
  >
    <DocumentaryKineticQuote
      quote="Fears that OpenAI wasn't ready to handle AGI."
      author="DANIEL KOKOTAJLO — FORMER RESEARCHER"
      highlightWord="ready"
    />
  </SceneLayout>
);

// Beat 36: Frames 8340 -> 8570
export const Beat36: React.FC = () => (
  <SceneLayout
    title="LEOPOLD ASCHENBRENNER FIRED"
    subtitle="Fired after drafting internal memos warning of critical security vulnerabilities"
    accentColor="#FF5A5F"
  >
    <Documentary3DDocument
      header="SECURITY WARNING MEMO"
      bodyText="Aschenbrenner warned foreign espionage could compromise frontier model weights."
      highlightText="SECURITY PRACTICES EGREGIOUSLY INSUFFICIENT"
      markerColor="rgba(255, 50, 80, 0.6)"
    />
  </SceneLayout>
);

// Beat 37: Frames 8570 -> 8800
export const Beat37: React.FC = () => (
  <SceneLayout
    title="THE PROXY WAR"
    subtitle="We are now witnessing a proxy war for the future of human intelligence"
    accentColor="#FFD700"
  >
    <DocumentaryKineticQuote
      quote="A proxy war for the future of human intelligence."
      author="MONUMENTAL STAKES"
      highlightWord="war"
    />
  </SceneLayout>
);

// Beat 38: Frames 8800 -> 9030
export const Beat38: React.FC = () => (
  <SceneLayout
    title="SORA SHUTDOWN"
    subtitle="OpenAI shut down its Sora video app, which was burning $1 million a day"
    accentColor="#FF5A5F"
  >
    <DocumentaryLogoCard
      name="Sora Video App"
      logoUrl="https://cdn.simpleicons.org/openai/white"
      brandColor="#FF5A5F"
      subtitle="SHUT DOWN • BURNING $1,000,000 / DAY"
    />
  </SceneLayout>
);

// Beat 39: Frames 9030 -> 9260
export const Beat39: React.FC = () => (
  <SceneLayout
    title="REDIRECTING COMPUTE"
    subtitle="Redirecting massive computing clusters to fight off Anthropic's enterprise rise"
    accentColor="#00F0FF"
  >
    <DocumentaryVSCard
      leftName="SORA COMPUTE"
      leftLogo="https://cdn.simpleicons.org/openai/white"
      leftColor="#10A37F"
      leftTag="REPURPOSED GPUs"
      rightName="ENTERPRISE DOMINANCE"
      rightLogo="https://cdn.simpleicons.org/anthropic/white"
      rightColor="#D97757"
      rightTag="CLAUDE 3.5 RISE"
    />
  </SceneLayout>
);

// Beat 40: Frames 9260 -> 9490
export const Beat40: React.FC = () => (
  <SceneLayout
    title="TWO ARENAS OF VICTORY"
    subtitle="Who will win in the enterprise market versus the court of public opinion?"
    accentColor="#FFD700"
  >
    <CinematicComparison
      leftValue="MARKET"
      leftLabel="REVENUE & ENTERPRISE DEPLOYMENT"
      leftColor="#10A37F"
      rightValue="TRUST"
      rightLabel="PUBLIC SAFETY & ALIGNMENT"
      rightColor="#D97757"
    />
  </SceneLayout>
);

// Beat 41: Frames 9490 -> 9720
export const Beat41: React.FC = () => (
  <SceneLayout
    title="STORY OF HUMAN NATURE"
    subtitle="Amodei on the terrifying responsibility of building superintelligence"
    accentColor="#00F0FF"
  >
    <DocumentaryKineticQuote
      quote="A story about human nature, broken trust, and terrifying responsibility."
      author="DARIO AMODEI"
      highlightWord="trust"
    />
  </SceneLayout>
);

// Beat 42: Frames 9720 -> 9950
export const Beat42: React.FC = () => (
  <SceneLayout
    title="FIVE MAJOR TITANS"
    subtitle="Five major corporations currently deciding the fate of economy, geopolitics, and society"
    accentColor="#00F0FF"
  >
    <DocumentaryMultiLogoGrid />
  </SceneLayout>
);

// Beat 43: Frames 9950 -> 10070
export const Beat43: React.FC = () => (
  <SceneLayout
    title="THE TWO LEADERS AT WAR"
    subtitle="Two ideological visions locked in a battle for the soul of AI"
    accentColor="#FF5A5F"
  >
    <DocumentaryVSCard
      leftName="OPENAI"
      leftLogo="https://cdn.simpleicons.org/openai/white"
      leftColor="#10A37F"
      leftTag="SAM ALTMAN • SPEED"
      rightName="ANTHROPIC"
      rightLogo="https://cdn.simpleicons.org/anthropic/white"
      rightColor="#D97757"
      rightTag="DARIO AMODEI • SAFETY"
    />
  </SceneLayout>
);

// Beat 44: Frames 10070 -> 10184
export const Beat44: React.FC = () => (
  <SceneLayout
    title="THE FINAL QUESTION"
    subtitle="As superintelligence approaches, which vision of the future will win?"
    accentColor="#FFD700"
  >
    <DocumentaryKineticQuote
      quote="WHICH VISION OF THE FUTURE WILL WIN?"
      author="THE OPENAI vs ANTHROPIC WAR"
      highlightWord="WIN"
    />
  </SceneLayout>
);
