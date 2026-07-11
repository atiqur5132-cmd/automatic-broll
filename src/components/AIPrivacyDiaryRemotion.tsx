import React, { useEffect, useRef, useMemo } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import {
  Server, ShieldAlert, Gavel, Cpu, Zap
} from "lucide-react";

export const SCENES = [
  { id: "hook", duration: 8, headline: "It's 1 AM.", body: "A health scare. A relationship falling apart. A question about money... It feels private. It is not.", visualType: "bedroom" },
  { id: "journey", duration: 8, headline: "It goes somewhere.", body: "It's stored somewhere. Into the next version of that very model.", visualType: "packet" },
  { id: "stanford", duration: 10, headline: "Stanford HAI: They read the fine print.", body: "By default, your conversations can be used to train the next model. Because you didn't opt out.", visualType: "policy" },
  { id: "shift", duration: 10, headline: "August 2025: The quiet shift", body: "No press conference. Just an updated Terms link nobody clicks.", visualType: "timeline" },
  { id: "paywall", duration: 10, headline: "$20/mo = Privacy?", body: "Faster responses. Higher limits. Same data pool. Real guarantee only in Business / Enterprise / API.", visualType: "myth" },
  { id: "pixel", duration: 12, headline: "May 2026: The Pixel Lawsuit", body: "Facebook Pixel + Google Analytics sending query topics, account IDs, email in real time.", visualType: "tracking" },
  { id: "human", duration: 10, headline: "A real human might read it.", body: "Authorized employees and contractors can review actual transcripts.", visualType: "review" },
  { id: "search-vs-chat", duration: 10, headline: "Search vs Chat", body: "2015: short queries. 2026: paragraphs of symptoms, pay stubs, legal trouble. The most complete psychological archive ever.", visualType: "split" },
  { id: "who-decides", duration: 10, headline: "Who's actually in the room?", body: "Subpoenaed. Leaked in a breach. Repackaged into an ad product. Will you even know?", visualType: "decision" },
  { id: "closing", duration: 10, headline: "You just wanted an answer.", body: "But somewhere, that diary already exists. Who's reading it?", visualType: "diary" },
] as const;

const TOTAL = SCENES.reduce((s, c) => s + c.duration, 0);

export const AIPrivacyDiaryRemotion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const currentTime = frame / fps;
  const progress = Math.min(1, currentTime / TOTAL);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const current = useMemo(() => {
    let acc = 0;
    for (let i = 0; i < SCENES.length; i++) {
      const d = SCENES[i].duration;
      if (currentTime < acc + d) return { index: i, scene: SCENES[i], local: currentTime - acc, acc };
      acc += d;
    }
    const lastIdx = SCENES.length - 1;
    return { index: lastIdx, scene: SCENES[lastIdx], local: SCENES[lastIdx].duration, acc: TOTAL - SCENES[lastIdx].duration };
  }, [currentTime]);

  // Deterministic particle canvas background based on frame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#050607";
    ctx.fillRect(0, 0, width, height);

    // Cyan grid
    ctx.strokeStyle = "rgba(0, 245, 255, 0.07)";
    ctx.lineWidth = 1;
    const grid = 50;
    for (let x = 0; x < width; x += grid) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += grid) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Vignette
    const g = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, Math.max(width, height));
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(0.7, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(0,0,0,0.85)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, width, height);

    // Pseudo-random deterministic particles seeded by index & frame
    for (let i = 0; i < 64; i++) {
      const seedX = ((i * 137.5 + 23.1) % 1);
      const seedY = ((i * 251.3 + 89.7) % 1);
      const speedX = ((i % 5) - 2) * 0.2;
      const speedY = (((i + 2) % 5) - 2) * 0.2;
      const x = ((seedX * width + frame * speedX) % width + width) % width;
      const y = ((seedY * height + frame * speedY) % height + height) % height;
      const r = (i % 3) * 0.5 + 1.2;

      ctx.fillStyle = i % 13 === 0 ? "rgba(167,255,0,0.9)" : "rgba(0,245,255,0.55)";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [frame, width, height]);

  return (
    <div className="w-full h-full bg-[#050607] text-white flex flex-col selection:bg-[#00F5FF] selection:text-black overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@500;700&display=swap');
        *{font-family:"Space Grotesk",Inter,system-ui,sans-serif}
        .mono{font-family:"JetBrains Mono",monospace}
        .scanline{background:repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)}
      `}</style>

      {/* Stage */}
      <div className="relative w-full h-full bg-black overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 scanline pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />

        {/* Scene layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 1 HOOK */}
          <div className={`absolute inset-0 p-16 flex flex-col justify-center transition-opacity duration-500 ${current.index === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="max-w-[1100px]">
              <div className="mono text-[#00F5FF] text-[16px] tracking-[0.2em] mb-4">00:00 — HOOK // 1 AM</div>
              <h1 className="text-[72px] font-bold leading-[0.9] tracking-[-0.04em]">It's 1 AM.</h1>
              <div className="mt-8 space-y-2 mono text-[22px] text-white/80">
                <div className="flex gap-3"><span className="text-white/30">›</span><span>A health scare.</span></div>
                <div className="flex gap-3"><span className="text-white/30">›</span><span>A relationship falling apart.</span></div>
                <div className="flex gap-3"><span className="text-white/30">›</span><span>A question about money...</span></div>
              </div>
              <div className="mt-12">
                <div className="inline-flex flex-col gap-2">
                  <div className="text-[14px] mono text-white/40">system.feelings</div>
                  <div className="text-[42px] font-bold tracking-tight">
                    <span className="bg-[#FF2E63] text-white px-3 py-1.5 rounded">It feels private. <span className="bg-white text-black px-2 py-0.5 rounded">It is not.</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 JOURNEY */}
          <div className={`absolute inset-0 p-16 transition-opacity duration-500 ${current.index === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-full flex flex-col justify-center">
              <div className="mono text-[#A7FF00] text-[16px] tracking-[0.2em] mb-4">00:08 — DATA JOURNEY</div>
              <h2 className="text-[64px] font-bold leading-[0.95] max-w-[900px]">It goes somewhere.<br /><span className="text-white/40">It's stored somewhere.</span></h2>
              <p className="mono text-white/60 mt-6 max-w-[700px] text-[20px]">Your message doesn't disappear after you close the tab.</p>

              <div className="mt-14 relative w-full max-w-[1200px] h-[260px] rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden flex items-center justify-between px-16">
                <div className="w-32 h-20 rounded-xl bg-[#111] border border-white/15 grid place-items-center text-[18px] mono">📱 Phone</div>
                <div className="w-24 h-14 rounded-lg bg-[#A7FF00] text-black mono text-[16px] font-bold grid place-items-center shadow-[0_0_20px_rgba(167,255,0,0.6)]">PKT →</div>
                <div className="w-36 h-24 rounded-xl bg-[#0c1214] border border-[#00F5FF]/20 grid place-items-center">
                  <Server className="w-10 h-10 text-[#00F5FF]" />
                  <span className="mono text-[14px] text-white/50 mt-1">AI Server</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 STANFORD */}
          <div className={`absolute inset-0 p-16 transition-opacity duration-500 ${current.index === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-full grid grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div>
                <div className="mono text-[#00F5FF] text-[16px] tracking-[0.2em] mb-4">00:16 — STANFORD HAI STUDY</div>
                <h2 className="text-[56px] font-bold leading-[0.95]">They read the actual<br />privacy policies.</h2>
                <div className="mono text-[20px] text-white/60 mt-6 leading-relaxed max-w-[650px]">Not the marketing pages. The legal fine print. Six companies. Same pattern.</div>
                <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#FF2E63]/10 border border-[#FF2E63]/20 mono text-[18px] text-[#FF7A9A]">
                  <Zap className="w-5 h-5" /> By default. Because you didn't opt out.
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-3 gap-3">
                  {["AMAZON", "ANTHROPIC", "GOOGLE", "META", "MICROSOFT", "OPENAI"].map(n => (
                    <div key={n} className="h-20 rounded-xl bg-white/[0.04] border border-white/10 grid place-items-center mono text-[15px] font-semibold tracking-[0.14em] text-white/80">{n}</div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-[#0a0f11] border border-white/10 p-6 mono text-[16px] leading-relaxed h-[220px] overflow-hidden relative">
                  <div className="text-white/30">SECTION 4.2 — DATA USAGE</div>
                  <div className="mt-3 text-white/70">...we may collect conversations, feedback, and usage data to improve...</div>
                  <div className="mt-4 px-3 py-1.5 bg-[#A7FF00]/15 border border-[#A7FF00]/30 text-[#A7FF00] inline-block">can be used to train the next model</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 SHIFT */}
          <div className={`absolute inset-0 p-16 transition-opacity duration-500 ${current.index === 3 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-full flex flex-col justify-center">
              <div className="mono text-[#FF2E63] text-[16px] tracking-[0.2em] mb-4">00:26 — AUGUST 2025 // QUIET SHIFT</div>
              <h2 className="text-[60px] font-bold">Defaults changed.<br /><span className="text-white/35">No press conference.</span></h2>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-[1300px]">
                {[
                  { k: "Anthropic", v: "5 years retention", d: "for users who don't opt out" },
                  { k: "Google", v: "3 years reviewed data", d: "holding onto reviewed chat data" },
                  { k: "OpenAI", v: "adjusted defaults", d: "retention & training updated" },
                ].map(c => (
                  <div key={c.k} className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur">
                    <div className="mono text-[14px] text-white/40">{c.k.toUpperCase()}</div>
                    <div className="mt-2 font-bold text-[28px]">{c.v}</div>
                    <div className="mono text-[15px] text-white/50 mt-2">{c.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5 PAYWALL */}
          <div className={`absolute inset-0 p-16 transition-opacity duration-500 ${current.index === 4 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-full flex flex-col justify-center max-w-[1300px]">
              <div className="flex items-start justify-between">
                <h2 className="text-[72px] font-bold leading-[0.9]">$20/mo = Privacy?</h2>
                <div className="px-6 py-2 bg-[#FF2E63] text-white mono text-[22px] font-bold rounded">MYTH</div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                  <div className="mono text-[14px] text-white/40">CONSUMER PLUS / ADVANCED</div>
                  <div className="mt-4 space-y-3 text-[20px]">
                    <div>— Faster response time</div>
                    <div>— Higher usage limit</div>
                    <div className="text-[#FF2E63] font-semibold">— Same data pool as free users</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#A7FF00]/25 bg-[#A7FF00]/[0.06] p-8">
                  <div className="mono text-[14px] text-[#A7FF00]/70">BUSINESS / ENTERPRISE / API</div>
                  <div className="mt-4 space-y-3 text-[20px]">
                    <div className="text-[#A7FF00]">✓ Contractual no-train guarantee</div>
                    <div className="text-[#A7FF00]">✓ Signed agreement</div>
                    <div className="text-white/70">— Built for companies, not individuals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 PIXEL */}
          <div className={`absolute inset-0 p-16 transition-opacity duration-500 ${current.index === 5 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-full grid grid-cols-2 gap-12 items-center">
              <div>
                <div className="mono text-[#FF2E63] text-[16px] tracking-[0.2em] mb-4">00:46 — MAY 2026 // TRACKING</div>
                <h2 className="text-[54px] font-bold leading-[0.95]">Pixels sitting next to<br />your secrets.</h2>
                <div className="mono text-[18px] leading-relaxed text-white/60 mt-6">
                  Class action: Meta Pixel + Google Analytics embedded, sending query topics, account IDs, email in real time.
                </div>
              </div>
              <div className="rounded-2xl bg-[#0c1012] border border-white/10 p-8">
                <div className="mono text-[16px] text-white/70">What symptoms were you worried about? $12k debt hiding from spouse...</div>
                <div className="mt-6 flex gap-4">
                  <span className="px-4 py-2 rounded bg-[#1877F2]/20 border border-[#1877F2]/30 mono text-[14px] text-[#7AB4FF]">FB PIXEL ACTIVE</span>
                  <span className="px-4 py-2 rounded bg-[#FBBC05]/15 border border-[#FBBC05]/25 mono text-[14px] text-[#FFD86E]">GA4 TRACKING</span>
                </div>
              </div>
            </div>
          </div>

          {/* 7 HUMAN REVIEW */}
          <div className={`absolute inset-0 p-16 transition-opacity duration-500 ${current.index === 6 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-full grid grid-cols-2 gap-12 items-center">
              <div>
                <div className="mono text-[#00F5FF] text-[16px] tracking-[0.2em] mb-4">00:58 — HUMAN REVIEW</div>
                <h2 className="text-[54px] font-bold leading-[0.95]">Authorized employees<br />can read it.</h2>
                <div className="mt-8 rounded-xl bg-black/60 border border-white/10 p-6 mono text-[15px] space-y-2">
                  <div className="text-white/30">$ tail -f /var/log/safety_review.log</div>
                  <div className="text-[#FF2E63]">[REVIEW] transcript_id 0x8F21 — flag: sensitive topic</div>
                  <div className="text-[#00F5FF]">[OPEN] full conversation loaded</div>
                </div>
              </div>
              <div className="rounded-[24px] bg-white/[0.03] border border-white/10 p-8">
                <div className="text-[28px] leading-[1.3] font-medium">
                  “A real human being, sitting at a company you've never met anyone from, might read the exact words you typed into that app at <span className="text-[#00F5FF]">1 AM</span>.”
                </div>
              </div>
            </div>
          </div>

          {/* 8 SEARCH VS CHAT */}
          <div className={`absolute inset-0 p-16 transition-opacity duration-500 ${current.index === 7 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-full flex flex-col justify-center">
              <div className="mono text-white/40 text-[16px] tracking-[0.2em] mb-4">01:08 — SEARCH VS CHAT</div>
              <div className="grid grid-cols-2 gap-8 max-w-[1300px]">
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-8">
                  <div className="mono text-[14px] text-white/40">2015: SEARCH HISTORY</div>
                  <div className="mt-6 space-y-3 mono text-[18px] text-white/60">
                    <div>• chest pain causes</div>
                    <div>• divorce lawyer cost</div>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#00F5FF]/[0.06] border border-[#00F5FF]/20 p-8">
                  <div className="mono text-[14px] text-[#00F5FF]">2026: AI CHAT — FULL PARAGRAPHS</div>
                  <div className="mt-6 space-y-3 mono text-[18px] text-white/90">
                    <div>• Full medical symptoms laid out in paragraphs...</div>
                    <div>• Screenshots of pay stubs asking for financial advice...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 9 WHO DECIDES */}
          <div className={`absolute inset-0 p-16 transition-opacity duration-500 ${current.index === 8 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="h-full flex flex-col justify-center max-w-[1200px]">
              <div className="mono text-[#FF2E63] text-[16px] tracking-[0.2em] mb-4">01:18 — WHO DECIDES?</div>
              <h2 className="text-[54px] font-bold leading-[0.95]">When that archive gets<br />subpoenaed, leaked, repackaged.</h2>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
                  <Gavel className="w-8 h-8 text-white/60" />
                  <div className="mt-3 font-semibold text-[22px]">Subpoena</div>
                </div>
                <div className="rounded-2xl bg-[#FF2E63]/10 border border-[#FF2E63]/20 p-6">
                  <ShieldAlert className="w-8 h-8 text-[#FF7A9A]" />
                  <div className="mt-3 font-semibold text-[22px]">Breach / Leak</div>
                </div>
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
                  <Cpu className="w-8 h-8 text-white/60" />
                  <div className="mt-3 font-semibold text-[22px]">Ad Product</div>
                </div>
              </div>
            </div>
          </div>

          {/* 10 CLOSING */}
          <div className={`absolute inset-0 p-16 flex flex-col justify-center transition-opacity duration-500 ${current.index === 9 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="max-w-[1000px]">
              <div className="mono text-[#00F5FF] text-[16px] tracking-[0.2em] mb-6">01:28 — CLOSING</div>
              <div className="text-[36px] font-medium text-white/90">
                You didn't sign up to write the most honest diary of your life.
              </div>
              <div className="text-[36px] font-medium text-white/40 mt-3">
                You just wanted an answer.
              </div>
              <div className="mt-12 text-[46px] font-bold text-[#00F5FF]">
                But somewhere, that diary already exists.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom discreet progress bar for cinematic video */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
        <div className="h-full bg-[#00F5FF]" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  );
};
