import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { displayFontFamily } from "../../fonts";

// ==========================================
// SHARED UI / DESIGN SYSTEM COMPONENTS
// ==========================================

export const HeroStatCanvas: React.FC<{
  title?: string;
  value: string;
  subtext?: string;
  accentColor?: string;
  progress?: number;
}> = ({
  title,
  value,
  subtext,
  accentColor = "#FF5A5F",
  progress = 1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${0.9 + entrance * 0.1})`,
        opacity: progress,
        textAlign: "center",
        zIndex: 10,
      }}
    >
      {title && (
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 28,
            fontWeight: 700,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          {title}
        </div>
      )}

      <div
        style={{
          fontFamily: displayFontFamily,
          fontSize: 110,
          fontWeight: 900,
          color: accentColor,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          textShadow: `0 0 50px ${accentColor}4D, 0 10px 30px rgba(0,0,0,0.8)`,
        }}
      >
        {value}
      </div>

      {subtext && (
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 34,
            fontWeight: 600,
            color: "#F8FAFC",
            marginTop: 20,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};

// Full-Screen Background Telemetry Grid & Data Cards
export const FullScreenAnalyticsGrid: React.FC<{
  chineseShare: number; // 0 to 100
  westernShare: number; // 0 to 100
  highlightChinese?: boolean;
}> = ({ chineseShare, westernShare, highlightChinese = true }) => {
  const frame = useCurrentFrame();

  const barWidth = 1400;
  const chineseW = (chineseShare / 100) * barWidth;
  const westernW = (westernShare / 100) * barWidth;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px 100px",
        pointerEvents: "none",
      }}
    >
      {/* Top Bar HUD */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingBottom: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: highlightChinese ? "#FF5A5F" : "#00F0FF",
              boxShadow: `0 0 15px ${highlightChinese ? "#FF5A5F" : "#00F0FF"}`,
            }}
          />
          <span
            style={{
              fontFamily: displayFontFamily,
              fontSize: 22,
              fontWeight: 700,
              color: "#F8FAFC",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            PLATFORM TOKEN SHARE ANALYTICS // GLOBAL MARKETPLACE
          </span>
        </div>
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 20,
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          REAL-TIME TELEMETRY
        </div>
      </div>

      {/* Center Background Visual Graph */}
      <div
        style={{
          width: "100%",
          height: 380,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
        }}
      >
        {/* Western Bar */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              fontFamily: displayFontFamily,
              fontSize: 24,
              fontWeight: 700,
              color: "#00F0FF",
            }}
          >
            <span>WESTERN / US PROVIDERS</span>
            <span>{westernShare.toFixed(1)}%</span>
          </div>
          <div
            style={{
              width: "100%",
              height: 42,
              backgroundColor: "rgba(0, 240, 255, 0.08)",
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid rgba(0, 240, 255, 0.2)",
            }}
          >
            <div
              style={{
                width: `${westernW}px`,
                height: "100%",
                background: "linear-gradient(90deg, #0077FF, #00F0FF)",
                boxShadow: "0 0 30px rgba(0,240,255,0.4)",
              }}
            />
          </div>
        </div>

        {/* Chinese Bar */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              fontFamily: displayFontFamily,
              fontSize: 24,
              fontWeight: 700,
              color: "#FF5A5F",
            }}
          >
            <span>CHINESE AI PROVIDERS</span>
            <span>{chineseShare.toFixed(1)}%</span>
          </div>
          <div
            style={{
              width: "100%",
              height: 42,
              backgroundColor: "rgba(255, 90, 95, 0.08)",
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid rgba(255, 90, 95, 0.3)",
            }}
          >
            <div
              style={{
                width: `${chineseW}px`,
                height: "100%",
                background: "linear-gradient(90deg, #D92534, #FF5A5F)",
                boxShadow: "0 0 30px rgba(255,90,95,0.5)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Network Status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 20,
          fontFamily: displayFontFamily,
          fontSize: 18,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <span>LATENCY: 18.4ms // THROUGHPUT: ACTIVE</span>
        <span>INDEX FRAME: #{frame}</span>
      </div>
    </div>
  );
};

// Key Phrase Full Screen Card
export const FullScreenKeyPhrase: React.FC<{
  phrase: string;
  subtitle?: string;
  accentColor?: string;
}> = ({ phrase, subtitle, accentColor = "#FFB800" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.9 },
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 120,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          textAlign: "center",
          backgroundColor: "rgba(13, 16, 24, 0.92)",
          border: `2px solid ${accentColor}66`,
          borderRadius: 32,
          padding: "60px 80px",
          boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 80px ${accentColor}1A`,
          maxWidth: 1400,
        }}
      >
        <div
          style={{
            fontFamily: displayFontFamily,
            fontSize: 72,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
          }}
        >
          {phrase}
        </div>
        {subtitle && (
          <div
            style={{
              fontFamily: displayFontFamily,
              fontSize: 30,
              fontWeight: 600,
              color: accentColor,
              marginTop: 24,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// FULL-SCREEN VISUAL SCENES (BEATS 0 - 44)
// ==========================================

// Beat 0: "Less than 2%. That's what Chinese AI companies controlled..."
export const Beat0: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 90], [0, 2], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={progress} westernShare={98} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="INITIAL PLATFORM SHARE // 1 YEAR AGO"
          value={`${progress.toFixed(1)}%`}
          subtext="CHINESE AI PROVIDERS ON MARKETPLACE"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 1: "...marketplaces about a year ago. Today, somewhere around 45%."
export const Beat1: React.FC = () => {
  const frame = useCurrentFrame();
  const share = interpolate(frame, [0, 120], [2, 45], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const westShare = interpolate(frame, [0, 120], [98, 55], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={share} westernShare={westShare} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="PRESENT DAY MARKETPLACE CONTROL"
          value={`${Math.round(share)}%`}
          subtext="SURGING COMMAND ON MAJOR OPEN PLATFORMS"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 2: "...even stranger than that. A phone company now processes more AI traffic..."
export const Beat2: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="A PHONE COMPANY BEATING OPENAI"
        subtitle="THE STRANGEST DATA SHIFT ON OPENROUTER"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 3: "...exact same platform. I'm going to break down how that happened..."
export const Beat3: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={45} westernShare={55} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="BREAKING DOWN THE SHIFT"
          value="HOW DID IT HAPPEN?"
          subtext="THE QUIET TRANSFORMATION OF AI WORKLOADS"
          accentColor="#FFB800"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 4: "...coming up in a minute that shows exactly why this is starting to scare..."
export const Beat4: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="WESTERN AI LABS ON ALERT"
        subtitle="WHY THIS TRAJECTORY MATTERS FOR EVERY BUSINESS"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 5: "Let's get into it. So here's the timeline. A year ago on OpenRouter..."
export const Beat5: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={1.8} westernShare={98.2} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="PLATFORM TIMELINE // 12 MONTHS AGO"
          value="OPENROUTER"
          subtext="WHERE DEVELOPERS PLUG INTO AI MODELS"
          accentColor="#00F0FF"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 6: "...where developers plug their apps into different AI models..."
export const Beat6: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={1.8} westernShare={98.2} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="THE MARKETPLACE ECOSYSTEM"
          value="MULTI-MODEL HUB"
          subtext="WESTERN MODELS CONTROLLED 98% OF ALL REQUESTS"
          accentColor="#00F0FF"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 7: "...invisible less than 2% of all traffic. Western models had the whole table."
export const Beat7: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={1.5} westernShare={98.5} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="WESTERN DOMINANCE"
          value="98.5% VS 1.5%"
          subtext="CHINESE PROVIDERS WERE BASICALLY INVISIBLE"
          accentColor="#FFB800"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 8: "Then, month after month, quietly, that started flipping. No single dramatic launch..."
export const Beat8: React.FC = () => {
  const frame = useCurrentFrame();
  const share = interpolate(frame, [0, 185], [2, 30], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={share} westernShare={100 - share} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="MONTH BY MONTH TREND"
          value="STEADY BLEED"
          subtext="NO SINGLE HEADLINE MOMENT — CONTINUOUS EXPANSION"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 9: "...bleed until Chinese providers were suddenly commanding close to half..."
export const Beat9: React.FC = () => {
  const frame = useCurrentFrame();
  const share = interpolate(frame, [0, 150], [30, 45], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={share} westernShare={100 - share} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="TIPPING POINT REACHED"
          value="~45% SHARE"
          subtext="COMMANDING NEARLY HALF OF THE MARKETPLACE"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 10: "...that platform. When a shift moves that fast, it's worth asking who actually did this..."
export const Beat10: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="WHO DRIVES A SHIFT THIS FAST?"
        subtitle="INVESTIGATING THE CATALYST BEHIND THE EXPLOSION"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 11: "The name that jumps out first is Xiaomi. Yes, the phone and gadget company..."
export const Beat11: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="XIAOMI ENTERS THE CHAT"
        subtitle="PHONE & GADGET MAKER SCALING ENTERPRISE INFERENCE"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 12: "...Xiaomi alone is processing 4.21 trillion tokens every single week. That's a 21.1% market share..."
export const Beat12: React.FC = () => {
  const frame = useCurrentFrame();
  const tokens = interpolate(frame, [0, 140], [0, 4.21], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={21.1} westernShare={78.9} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="XIAOMI WEEKLY TOKEN THROUGHPUT"
          value={`${tokens.toFixed(2)} TRILLION`}
          subtext="21.1% PLATFORM MARKET SHARE EVERY SINGLE WEEK"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 13: "...bigger than OpenAI's slice on that same platform. Sit with that for a second..."
export const Beat13: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="XIAOMI > OPENAI SHARE"
        subtitle="SIT WITH THAT SENTENCE FOR A SECOND"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 14: "...Alongside Xiaomi, there's Z.ai's GLM-5.2, which has become the center of a much bigger argument..."
export const Beat14: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="Z.AI // GLM-5.2 ADVANCE"
        subtitle="THE CORE OF THE ENTERPRISE CAPABILITY ARGUMENT"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 15: "...whether China is actually catching up to the US in AI or maybe already has..."
export const Beat15: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="CATCHING UP IN REAL BUSINESS"
        subtitle="WHERE PRACTICAL CAPABILITY MEETS ECONOMIC SCALE"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 16: "GLM-5.2 isn't necessarily beating the top US models on every benchmark..."
export const Beat16: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="CLOSE ENOUGH // MUCH LESS MONEY"
        subtitle="PRAGMATIC OUTPUT EQUIVALENCE FOR ENTERPRISE WORK"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 17: "...getting close enough for a lot less money..."
export const Beat17: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={45} westernShare={55} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="PRICE TO PERFORMANCE EQUATION"
          value="80% LESS COST"
          subtext="WITH 95%+ PRODUCTION BENCHMARK ACCURACY"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 18: "And once 'close enough' is on the table, price stops being a footnote..."
export const Beat18: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="PRICE BECOMES THE DECISION"
        subtitle="WHEN PRODUCTION QUALITY MEETS YOUR THRESHOLD"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 19: "...starts being the whole decision. Here's the part that makes this real..."
export const Beat19: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="REAL WORLD CASE STUDY"
        subtitle="THE AUTOMATED ROUTING ARCHITECTURE IN ACTION"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 20: "Coinbase shifted a big chunk of its AI workload over to these cheaper Chinese models..."
export const Beat20: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="COINBASE WORKLOAD SHIFT"
        subtitle="MIGRATING HIGH-VOLUME INFERENCE TO EFFICIENT TIERS"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 21: "They didn't just switch manually, task by task..."
export const Beat21: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="NOT A MANUAL SWITCH"
        subtitle="BEYOND HARDCODED ENDPOINT CHANGES"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 22: "They built automated routing — a system that looks at each job coming in..."
export const Beat22: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={48} westernShare={52} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="ARCHITECTURE STRATEGY"
          value="AUTOMATED ROUTING"
          subtext="DYNAMIC TASK DISPATCH BY COMPLEXITY & COST"
          accentColor="#00F0FF"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 23: "...decides which model should handle it based on how complex the task is..."
export const Beat23: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="COMPLEXITY VS COST ROUTING"
        subtitle="ROUTING SIMPLE QUERIES TO EFFICIENT MODELS INSTANTLY"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 24: "The outcome: their AI spending dropped by roughly half. Not their usage..."
export const Beat24: React.FC = () => {
  const frame = useCurrentFrame();
  const savings = interpolate(frame, [0, 90], [0, 50], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={50} westernShare={50} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="COINBASE MEASURED OUTCOME"
          value={`-${Math.round(savings)}% SPEND`}
          subtext="TOTAL INFERENCE EXPENDITURE REDUCED IN HALF"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 25: "...their usage actually went up. Spending went down while usage went up."
export const Beat25: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="SPENDING DOWN // USAGE UP"
        subtitle="THE DOUBLE-BENEFIT OF SMART AUTOMATED GATEWAYS"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 26: "Read that twice if you need to, because that combination is exactly what should worry..."
export const Beat26: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="READ THAT TWICE."
        subtitle="WHY PREMIUM MONOPOLIES ARE LOSING EVERYDAY TASKS"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 27: "...every company still paying premium prices for every single AI task..."
export const Beat27: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="PAYING PREMIUM DEFAULT?"
        subtitle="THE HIDDEN COST OF BLANKET FRONTIER MODEL ROUTING"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 28: "...And that's really the shift underneath all of this. For a long time, the unspoken rule..."
export const Beat28: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="THE UNSPOKEN RULE"
        subtitle="PAY FOR THE BEST MODEL EVERY TIME FOR EVERYTHING"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 29: "...was: if you want the best output, you pay for the best model every time. That rule is breaking."
export const Beat29: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="THAT RULE IS BREAKING."
        subtitle="ENTERPRISE BUYERS ARE DEMANDING PRECISION ARCHITECTURES"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 30: "When a cheaper model can handle most of your everyday workload just fine..."
export const Beat30: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={48} westernShare={52} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="EVERYDAY INFERENCE CAPACITY"
          value="SMART ENOUGH"
          subtext="HANDLING 85% OF ENTERPRISE TASKS FLICKER-FREE"
          accentColor="#00F0FF"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 31: "...the question stops being 'which model is the smartest' and becomes..."
export const Beat31: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="SMART ENOUGH @ THIS PRICE"
        subtitle="THE NEW ENTERPRISE PROCUREMENT CRITERIA"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 32: "That's an uncomfortable question for companies whose entire pricing structure..."
export const Beat32: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="UNCOMFORTABLE FOR LABS"
        subtitle="PRICING STRUCTURES ASSUMING DEFAULT PREMIUMS"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 33: "...assumes you'll pay a premium by default. If more businesses start doing what Coinbase did..."
export const Beat33: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="THE COINBASE BLUEPRINT"
        subtitle="AUTOMATING COMMODITY INFERENCE ACROSS THE STACK"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 34: "...routing routine work to cheaper models and saving the expensive ones only for the hardest problems..."
export const Beat34: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="RESERVE PREMIUM FOR FRONTIER"
        subtitle="SPECIALIZE EXPENSIVE INFERENCE ONLY WHERE REQUIRED"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 35: "...that premium pricing gets a lot harder to justify across the board."
export const Beat35: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="HARDER TO JUSTIFY PREMIUM"
        subtitle="ACROSS THE FULL SPECTRUM OF PRODUCTION APPLICATIONS"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 36: "Now, before you go — if this kind of shift is something you want to actually track..."
export const Beat36: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="TRACK INDUSTRY SHIFTS"
        subtitle="REAL-TIME TELEMETRY AND ANALYSIS AS IT HAPPENS"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 37: "...as it unfolds, instead of catching it three months later in a headline..."
export const Beat37: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="AHEAD OF THE HEADLINES"
        subtitle="DATA-DRIVEN ARCHITECTURE ANALYSIS"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 38: "...that's exactly what this channel is for. I'm breaking down these AI industry moves..."
export const Beat38: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={48} westernShare={52} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="DAILY INTELLIGENCE DEEP DIVE"
          value="SUBSCRIBE"
          subtext="NEVER MISS THE NEXT MACRO SHIFT"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Beat 39: "...as they happen, so if that's useful to you, subscribing means you won't miss the next one."
export const Beat39: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="STAY AHEAD OF THE CURVE"
        subtitle="SUBSCRIBE FOR NEXT AI INDUSTRY ANALYSIS"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 40: "Because here's what I keep coming back to. Raw performance probably still matters..."
export const Beat40: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="FRONTIER IQ STILL MATTERS"
        subtitle="FOR HIGH-COMPLEXITY BREAKTHROUGHS AND SCIENTIFIC TASKS"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 41: "...for the hardest problems out there. But for the huge, unglamorous majority of everyday AI work..."
export const Beat41: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="THE EVERYDAY MAJORITY"
        subtitle="90% OF PRODUCTION WORKLOADS NEED EFFICIENCY"
        accentColor="#FF5A5F"
      />
    </AbsoluteFill>
  );
};

// Beat 42: "...the stuff that actually runs the world's businesses — cost-efficiency might end up mattering..."
export const Beat42: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="COST-EFFICIENCY IS KING"
        subtitle="RUNNING THE WORLD'S BUSINESS LOGIC AT SCALE"
        accentColor="#00F0FF"
      />
    </AbsoluteFill>
  );
};

// Beat 43: "...just as much, maybe more. So the real question isn't who builds the smartest model anymore."
export const Beat43: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenKeyPhrase
        phrase="WHO WINS ECONOMIC AI?"
        subtitle="SMART ENOUGH & DRAMATICALLY CHEAPER"
        accentColor="#FFB800"
      />
    </AbsoluteFill>
  );
};

// Beat 44: "...It's whether 'smart enough, and dramatically cheaper' quietly becomes the thing..."
export const Beat44: React.FC = () => {
  return (
    <AbsoluteFill>
      <FullScreenAnalyticsGrid chineseShare={50} westernShare={50} />
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <HeroStatCanvas
          title="THE CLOSING QUESTION"
          value="YOUR THOUGHTS?"
          subtext="CAN BIG US LABS COMPETE UNDER THEIR CURRENT PRICING?"
          accentColor="#FF5A5F"
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
