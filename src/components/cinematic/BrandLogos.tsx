import React from "react";

// 1. Google Official 4-Color 'G' Logo SVG
export const GoogleLogoSVG: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

// 2. Google Gemini Official Sparkle Star SVG
export const GeminiLogoSVG: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4E75FF" />
        <stop offset="45%" stopColor="#8A2BE2" />
        <stop offset="100%" stopColor="#FF416C" />
      </linearGradient>
    </defs>
    <path
      d="M32 2C32 18.5 45.5 32 62 32C45.5 32 32 45.5 32 62C32 45.5 18.5 32 2 32C18.5 32 32 18.5 32 2Z"
      fill="url(#gemini-grad)"
      filter="drop-shadow(0 0 16px rgba(138,43,226,0.6))"
    />
  </svg>
);

// 3. Google DeepMind Starburst Geometric SVG
export const DeepMindLogoSVG: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="dm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F0FF" />
        <stop offset="50%" stopColor="#4285F4" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="24" fill="#0D1117" stroke="#1E293B" strokeWidth="1" />
    <path
      d="M20 20L50 50L80 20M20 80L50 50L80 80M20 50H80M50 20V80"
      stroke="url(#dm-grad)"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="12" fill="#00F0FF" />
  </svg>
);

// 4. OpenAI Official Knot SVG
export const OpenAILogoSVG: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#10A37F" fillOpacity="0.15" stroke="#10A37F" strokeWidth="2" />
    <path
      d="M68.5 36.3a18.2 18.2 0 0 0-15.6-8.9c-8.1 0-15.2 5.3-17.5 13A18.3 18.3 0 0 0 25 57.1c3.1 9.5 13.3 14.8 22.8 11.7a18.2 18.2 0 0 0 15.6 8.9c8.1 0 15.2-5.3 17.5-13a18.3 18.3 0 0 0 10.4-16.7c-3.1-9.5-13.3-14.8-22.8-11.7z"
      stroke="#10A37F"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="10" fill="#10A37F" />
  </svg>
);

// 5. Anthropic Claude Official Logo SVG
export const ClaudeLogoSVG: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="24" fill="#D97706" fillOpacity="0.18" stroke="#D97706" strokeWidth="2" />
    <path
      d="M32 72L47 28H53L68 72H59L56 61H44L41 72H32ZM46 53H54L50 39L46 53Z"
      fill="#F59E0B"
    />
  </svg>
);

// 6. Polymarket Official Logo SVG
export const PolymarketLogoSVG: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="24" fill="#2563EB" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="2" />
    <path
      d="M26 68L44 48L56 58L74 34"
      stroke="#00F0FF"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="74" cy="34" r="6" fill="#FFD700" />
  </svg>
);

// 7. LMArena / Chatbot Arena Logo SVG
export const LMArenaLogoSVG: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#34D399" fillOpacity="0.15" stroke="#34D399" strokeWidth="2" />
    <path
      d="M36 30H64V46C64 53.7 57.7 60 50 60C42.3 60 36 53.7 36 46V30Z"
      stroke="#34D399"
      strokeWidth="6"
      fill="none"
    />
    <path d="M43 60V74H57V60" stroke="#34D399" strokeWidth="6" />
    <rect x="33" y="74" width="34" height="8" rx="4" fill="#34D399" />
  </svg>
);

// Full-Screen 100% Utilized Split Showcase Card (Left Brand Identity + Right Rich Breakdown - NO Small Clutter Text)
export const FullScreenSplitShowcase: React.FC<{
  logo: React.ReactNode;
  brandName: string;
  tagline: string;
  accentColor?: string;
  highlights: { title: string; desc: string; metric?: string }[];
}> = ({ logo, brandName, tagline, accentColor = "#00F0FF", highlights }) => (
  <div
    style={{
      width: 1760,
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 40,
      alignItems: "stretch",
    }}
  >
    {/* Left Panel: Giant Brand Emblem Card */}
    <div
      style={{
        background: "linear-gradient(145deg, rgba(15, 23, 42, 0.94), rgba(10, 14, 24, 0.98))",
        border: `2px solid ${accentColor}`,
        borderRadius: 32,
        padding: "50px 60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 30,
        boxShadow: `0 25px 70px rgba(0,0,0,0.85), 0 0 40px ${accentColor}25`,
      }}
    >
      <div>{logo}</div>
      <div>
        <div style={{ fontSize: 62, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1 }}>{brandName}</div>
        <div style={{ fontSize: 26, color: accentColor, fontWeight: 600, marginTop: 14 }}>{tagline}</div>
      </div>
    </div>

    {/* Right Panel: Clean Key Breakdown Cards */}
    <div style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
      {highlights.map((item, i) => (
        <div
          key={i}
          style={{
            background: "rgba(15, 23, 42, 0.88)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            borderRadius: 24,
            padding: "30px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 15px 35px rgba(0,0,0,0.6)",
          }}
        >
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF" }}>{item.title}</div>
            <div style={{ fontSize: 20, color: "#94A3B8", marginTop: 8 }}>{item.desc}</div>
          </div>
          {item.metric && (
            <div
              style={{
                fontSize: 38,
                fontWeight: 900,
                color: accentColor,
                fontFamily: "monospace",
                background: `${accentColor}18`,
                padding: "12px 24px",
                borderRadius: 16,
                border: `1px solid ${accentColor}55`,
              }}
            >
              {item.metric}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
