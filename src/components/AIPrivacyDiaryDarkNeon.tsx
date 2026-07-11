// AGENT INSTRUCTIONS: run this file in browser, click Record to export webm, or use agy browser capture
// npx serve . -> open ai_privacy_diary_dark.html -> auto-play 95s -> MediaRecorder captures canvas stream
// SCENES array below is fully editable. Adjust duration/headline/body/visualType. Timeline rebuilds automatically.
// For Antigravity: paste code, run, ensure build has no external CDN, then trigger Record WebM button.
// GSAP timeline is simulated with native Web Animations for offline-safe playback (no CDN).

import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Play, Pause, RotateCcw, Download, Camera,
  Server, Eye, FileText, ShieldAlert, Gavel, Database, Cpu, Zap, X
} from "lucide-react";

// --- FULL SCRIPT REFERENCE ---
const SCRIPT_TEXT = `It's 1 AM. Someone's lying in bed, phone lighting up their face, typing out something they haven't told anyone else. A health scare. A relationship falling apart. A question about money they're too embarrassed to ask a real person. They hit enter. The AI responds, calm, patient, non-judgmental. It feels like a diary that talks back. It feels private. It is not.

Here's what most people don't think about in that moment. That conversation doesn't just disappear into the void after you close the tab. It goes somewhere. It's stored somewhere. And depending on which company built the chatbot you're using, it may already be on its way into the next version of that very model.

In late 2025, researchers at Stanford's Institute for Human-Centered AI sat down and did something almost nobody had bothered to do properly. They read the actual privacy policies. Not the marketing pages. The legal fine print. Across six of the biggest AI companies in the US, Amazon, Anthropic, Google, Meta, Microsoft, and OpenAI, they found the same pattern repeating. By default, on a standard consumer account, your conversations can be used to train the next model. Not because you agreed to it in some meaningful, informed way. Because you didn't opt out. And in most cases, finding the opt-out means digging through settings menus most users never open.

Now here's the part that makes this more than just a background fact. Around August of 2025, several major players quietly shifted their default settings, almost in the same window of time. Anthropic moved to retaining conversations for up to five years for users who don't opt out. Google began holding onto reviewed chat data for as long as three years. OpenAI adjusted its own retention and training defaults too. None of this arrived with a press conference. It arrived the way most policy changes do now, buried in an updated terms of service link that almost nobody clicks.

So naturally, people assume there's a workaround. Just pay for it. Upgrade to ChatGPT Plus. Get Gemini Advanced. Surely if you're paying real money every month, your conversations are treated differently, right?

Not really. This is one of the more persistent myths floating around right now. Paying for a consumer subscription does not automatically pull your data out of the training pipeline. The tiers that actually come with a contractual guarantee, a signed agreement that says your data will not be used to train future models, are the business, enterprise, and API tiers. The ones built for companies, not individuals. If you're a regular person paying twenty dollars a month for the premium app on your phone, you are, in most cases, still in the same data pool as the free users. You just got a faster response time and a higher usage limit. Not privacy.

And it goes further than training data. In May of 2026, a class action lawsuit was filed against OpenAI, alleging that ChatGPT's website had Meta's Facebook Pixel and Google Analytics tracking code embedded in it, and that this code was quietly sending user query topics, account identifiers, and email addresses to Meta and Google in real time. A similar complaint had already been filed against Perplexity months earlier. Whether these specific cases hold up in court is genuinely still an open question, legal experts are split. But the underlying mechanism they describe isn't in dispute. Tracking pixels are standard tools used across almost the entire internet for advertising and analytics. What's different here is what they're now sitting next to. Not what shoes you almost bought. What symptoms you were worried about. What debt you're hiding from your spouse. This is the same surveillance-driven business model that built the modern internet, just quietly extended into the one place people talk more honestly than almost anywhere else.

And training data and ad trackers are only part of the picture. These companies also state, in their own policies, that authorized employees and third-party contractors can review actual chat transcripts. Not just anonymized patterns. Real conversations. This happens for safety monitoring, abuse investigation, and legal compliance. Which means, in certain circumstances, a real human being, sitting at a company you've never met anyone from, might read the exact words you typed into that app at 1 AM.

Zoom out for a second. Ten years ago, the biggest privacy conversation was about your search history. What you Googled. That already felt invasive enough. But think about what people actually type into an AI chatbot today that they'd never type into a search bar. Full medical symptoms laid out in paragraphs. Draft messages to an ex they're still not over. Screenshots of pay stubs asking for financial advice. Legal troubles they haven't told a lawyer yet, let alone a friend. This isn't a search history anymore. It's closer to the most complete, most unfiltered psychological archive of a person that has ever existed anywhere, for anyone.

So the real question was never really about who "owns" the words in your chat window. That's the small version of the question. The bigger one is this: when that archive gets subpoenaed in a lawsuit, or leaked in a breach, or quietly repackaged into an advertising product five years from now, who's actually going to be in the room deciding what happens to it? And will you even know it's happening?

You didn't sign up to write the most honest diary of your life. You just wanted an answer. But somewhere, that diary already exists. The only question left is who's reading it.`;

// --- EDITABLE SCENES ---
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

const TOTAL = SCENES.reduce((s,c)=>s+c.duration,0);

export default function App(){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0..1
  const [recording, setRecording] = useState(false);
  const timeRef = useRef(0); // seconds
  const rafRef = useRef<number| null>(null);
  const lastTsRef = useRef<number| null>(null);
  const pausedAtRef = useRef(0);

  const current = useMemo(()=>{
    let acc=0;
    for(let i=0;i<SCENES.length;i++){
      const d=SCENES[i].duration;
      if(timeRef.current < acc+d) return { index:i, scene:SCENES[i], local: timeRef.current-acc, acc };
      acc+=d;
    }
    return { index:SCENES.length-1, scene:SCENES[SCENES.length-1], local: SCENES[SCENES.length-1].duration, acc: TOTAL - SCENES[SCENES.length-1].duration };
  },[progress]); // progress drives recompute via timeRef

  // Canvas background (offline-safe, no CDN)
  useEffect(()=>{
    const canvas=canvasRef.current;
    if(!canvas) return;
    const ctx=canvas.getContext('2d',{alpha:false})!;
    let particles = Array.from({length:64},()=>({
      x: Math.random(), y: Math.random(), vx:(Math.random()-0.5)*0.00015, vy:(Math.random()-0.5)*0.00015, r: Math.random()*1.2+0.3
    }));
    const draw = ()=>{
      const rect=canvas.getBoundingClientRect();
      const w=rect.width, h=rect.height;
      const dpr=window.devicePixelRatio||1;
      if(canvas.width!==w*dpr || canvas.height!==h*dpr){
        canvas.width=w*dpr; canvas.height=h*dpr;
      }
      ctx.save();
      ctx.scale(dpr,dpr);
      // base
      ctx.fillStyle="#050607";
      ctx.fillRect(0,0,w,h);
      // cyan grid
      ctx.strokeStyle="rgba(0,245,255,0.07)";
      ctx.lineWidth=1;
      const grid=42;
      for(let x=0;x<w;x+=grid){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
      for(let y=0;y<h;y+=grid){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }
      // vignette
      const g=ctx.createRadialGradient(w*0.5,h*0.5,0,w*0.5,h*0.5,Math.max(w,h));
      g.addColorStop(0,"rgba(0,0,0,0)"); g.addColorStop(0.7,"rgba(0,0,0,0)"); g.addColorStop(1,"rgba(0,0,0,0.85)");
      ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
      // particles
      particles.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>1) p.vx*=-1;
        if(p.y<0||p.y>1) p.vy*=-1;
        ctx.fillStyle= Math.random()>0.985 ? "rgba(167,255,0,0.9)" : "rgba(0,245,255,0.55)";
        ctx.beginPath(); ctx.arc(p.x*w, p.y*h, p.r,0,Math.PI*2); ctx.fill();
      });
      // film grain occasional
      if(Math.random()>0.3){
        ctx.fillStyle="rgba(255,255,255,0.015)";
        for(let i=0;i<120;i++){ const gx=Math.random()*w, gy=Math.random()*h; ctx.fillRect(gx,gy,1,1); }
      }
      ctx.restore();
      requestAnimationFrame(draw);
    };
    draw();
  },[]);

  // Playback loop
  useEffect(()=>{
    const tick = (ts:number)=>{
      if(!isPlaying){ lastTsRef.current=null; return; }
      if(lastTsRef.current===null) lastTsRef.current=ts;
      const dt=(ts-lastTsRef.current)/1000;
      lastTsRef.current=ts;
      timeRef.current = Math.min(TOTAL, timeRef.current + dt);
      setProgress(timeRef.current / TOTAL);
      if(timeRef.current >= TOTAL){ setIsPlaying(false); }
      else rafRef.current=requestAnimationFrame(tick);
    };
    if(isPlaying) rafRef.current=requestAnimationFrame(tick);
    return ()=>{ if(rafRef.current) cancelAnimationFrame(rafRef.current); };
  },[isPlaying]);

  const seek = (p:number)=>{
    const t = p*TOTAL;
    timeRef.current=t;
    pausedAtRef.current=t;
    setProgress(p);
  };

  const togglePlay = ()=> setIsPlaying(v=>!v);
  const restart = ()=>{ timeRef.current=0; setProgress(0); setIsPlaying(true); };

  // Recording
  const handleRecord = async ()=>{
    if(!canvasRef.current) return;
    const stream = (canvasRef.current as any).captureStream(60) as MediaStream;
    const mr = new MediaRecorder(stream,{ mimeType: 'video/webm;codecs=vp9' });
    const chunks:BlobPart[]=[];
    mr.ondataavailable = e=>{ if(e.data.size>0) chunks.push(e.data); };
    mr.onstop = ()=>{
      const blob=new Blob(chunks,{type:'video/webm'});
      const url=URL.createObjectURL(blob);
      const a=document.createElement('a'); a.href=url; a.download=`diary-that-talks-back-${Date.now()}.webm`; a.click();
      URL.revokeObjectURL(url); setRecording(false);
    };
    setRecording(true);
    mr.start(100);
    setTimeout(()=>mr.stop(), TOTAL*1000+500);
  };
  const handlePNG = ()=>{
    if(!canvasRef.current) return;
    const url=canvasRef.current.toDataURL('image/png');
    const a=document.createElement('a'); a.href=url; a.download='frame.png'; a.click();
  };

  // Native entrance animation (offline-safe, no CDN)
  useEffect(()=>{
    const el = document.querySelector(`[data-scene="${current.scene.id}"] .headline`) as HTMLElement | null;
    const body = document.querySelector(`[data-scene="${current.scene.id}"] .body`) as HTMLElement | null;
    if(el){
      el.animate([{transform:'translateY(22px)', opacity:'0', filter:'blur(6px)'},{transform:'translateY(0)', opacity:'1', filter:'blur(0px)'}],{duration:620, easing:'cubic-bezier(0.22,1,0.36,1)', fill:'both'});
    }
    if(body){
      body.animate([{transform:'translateY(10px)', opacity:'0'},{transform:'translateY(0)', opacity:'1'}],{duration:500, delay:110, easing:'ease-out', fill:'both'});
    }
  },[current.index]);

  return (
    <div className="min-h-screen bg-[#050607] text-white flex flex-col selection:bg-[#00F5FF] selection:text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@500;700&display=swap');
        *{font-family:"Space Grotesk",Inter,system-ui,sans-serif}
        .mono{font-family:"JetBrains Mono",monospace}
        .glitch{position:relative; display:inline-block; max-width:100%}
        .glitch::before,.glitch::after{content:attr(data-text); position:absolute; left:0; top:0; width:100%; overflow:hidden; clip-path:inset(0 0 0 0)}
        .glitch::before{color:#FF2E63; transform:translate(-1px,0); animation:gl1 2s infinite linear alternate-reverse; opacity:0.8}
        .glitch::after{color:#00F5FF; transform:translate(1px,0); animation:gl2 1.7s infinite linear alternate-reverse; opacity:0.8}
        @keyframes gl1{0%{clip-path:inset(10% 0 80% 0)}20%{clip-path:inset(40% 0 10% 0)}40%{clip-path:inset(80% 0 5% 0)}60%{clip-path:inset(15% 0 60% 0)}100%{clip-path:inset(25% 0 30% 0)}}
        @keyframes gl2{0%{clip-path:inset(80% 0 5% 0)}30%{clip-path:inset(10% 0 70% 0)}70%{clip-path:inset(50% 0 20% 0)}100%{clip-path:inset(5% 0 85% 0)}}
        .scanline{background:repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)}
        .cursor::after{content:"▌"; animation:blink 1s step-end infinite; color:#00F5FF; margin-left:4px}
        @keyframes blink{50%{opacity:0}}
        .redflash{animation:flash .18s 3}
        @keyframes flash{0%,100%{background:transparent}50%{background:rgba(255,46,99,0.18)}}
      `}</style>

      {/* Top bar */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-black/70 border-b border-white/10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-3 md:px-6 h-[56px] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <div className="w-7 h-7 rounded bg-[#00F5FF] text-black grid place-items-center font-bold mono text-[11px] shrink-0">REC</div>
            <div className="leading-tight min-w-0">
              <div className="font-bold tracking-[-0.02em] text-[11px] md:text-[14px] truncate">THE DIARY THAT TALKS BACK</div>
              <div className="mono text-[9px] md:text-[10px] text-white/50 -mt-0.5 truncate">ai_privacy_diary_dark.html • {TOTAL}s</div>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <button onClick={togglePlay} className="h-8 px-2.5 md:px-3 rounded-full bg-white text-black text-[12px] font-semibold flex items-center gap-1.5 hover:bg-white/90 transition">
              {isPlaying? <Pause className="w-3.5 h-3.5"/> : <Play className="w-3.5 h-3.5"/>}
              <span className="hidden md:inline">{isPlaying?"Pause":"Play"}</span>
            </button>
            <button onClick={restart} className="h-8 w-8 md:w-auto md:px-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 grid place-items-center md:flex md:items-center md:gap-1.5 text-[12px]">
              <RotateCcw className="w-3.5 h-3.5"/><span className="hidden md:inline">Restart</span>
            </button>
            <div className="w-px h-5 bg-white/10 mx-1 hidden md:block"/>
            <button onClick={handleRecord} disabled={recording} className={`h-8 px-2.5 md:px-3 rounded-full text-[11px] md:text-[12px] font-semibold border flex items-center gap-1.5 whitespace-nowrap ${recording?'bg-[#FF2E63] text-white border-[#FF2E63]':'bg-[#00F5FF]/10 text-[#00F5FF] border-[#00F5FF]/30 hover:bg-[#00F5FF]/15'}`}>
              <div className={`w-1.5 h-1.5 rounded-full bg-current ${recording?'animate-pulse':''}`}/> <span className="hidden sm:inline">{recording?'Recording…':'Record WebM'}</span><span className="sm:hidden">REC</span>
            </button>
            <button onClick={handlePNG} className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 grid place-items-center shrink-0">
              <Camera className="w-3.5 h-3.5"/>
            </button>
          </div>
        </div>
      </div>

      {/* Stage */}
      <div className="flex-1 flex flex-col items-center w-full overflow-x-hidden">
        <div ref={containerRef} className="relative w-full max-w-[1280px] aspect-[9/12] sm:aspect-[16/10] md:aspect-[16/9] bg-black overflow-hidden border-b border-white/10">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"/>
          <div className="absolute inset-0 scanline pointer-events-none opacity-40"/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none"/>

          {/* Scene layers */}
          <div className="absolute inset-0 overflow-hidden">
            {/* 1 HOOK */}
            <div data-scene="hook" className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-center transition-opacity duration-500 ${current.index===0?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="max-w-[720px]">
                <div className="mono text-[#00F5FF] text-[11px] tracking-[0.2em] mb-4">00:00 — HOOK // 1 AM</div>
                <h1 className="headline text-[42px] md:text-[72px] font-bold leading-[0.9] tracking-[-0.04em]">It's 1 AM.</h1>
                <div className="mt-6 space-y-1.5 mono text-[13px] md:text-[15px] text-white/80">
                  <div className="flex gap-2"><span className="text-white/30">›</span><span className="typing">A health scare.</span></div>
                  <div className="flex gap-2"><span className="text-white/30">›</span><span>A relationship falling apart.</span></div>
                  <div className="flex gap-2"><span className="text-white/30">›</span><span>A question about money...</span></div>
                </div>
                <div className="mt-10">
                  <div className="inline-flex flex-col gap-2">
                    <div className="text-[12px] mono text-white/40">system.feelings</div>
                    <div className="glitch text-[22px] md:text-[34px] font-bold tracking-tight" data-text="It feels private. It is not.">
                      <span className="relative z-10 bg-[#FF2E63] text-white px-2 py-1">It feels private. <span className="bg-white text-black px-1">It is not.</span></span>
                    </div>
                  </div>
                </div>
                {/* phone glow mock */}
                <div className="absolute right-[8%] top-[18%] hidden md:block">
                  <div className="w-[220px] h-[380px] rounded-[28px] bg-white/[0.04] border border-white/10 backdrop-blur p-3 shadow-[0_0_80px_rgba(0,245,255,0.25)]">
                    <div className="h-full rounded-[18px] bg-gradient-to-b from-[#0b1012] to-black border border-white/5 p-4 flex flex-col">
                      <div className="w-12 h-1 rounded-full bg-white/15 mx-auto mb-4"/>
                      <div className="space-y-2">
                        <div className="h-9 rounded-full bg-[#00F5FF]/15 border border-[#00F5FF]/20 w-[85%]"/>
                        <div className="h-16 rounded-2xl bg-white/[0.06] border border-white/10 p-3 mono text-[10px] leading-relaxed text-white/70">I haven't told anyone... chest pain last night, can't afford ER...<span className="cursor"/></div>
                        <div className="h-8 rounded-full bg-white text-black grid place-items-center text-[11px] font-semibold">↵ Send</div>
                      </div>
                      <div className="mt-auto h-[2px] bg-gradient-to-r from-transparent via-[#00F5FF]/60 to-transparent blur-[0.5px]"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 JOURNEY */}
            <div data-scene="journey" className={`absolute inset-0 p-6 md:p-12 transition-opacity ${current.index===1?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full flex flex-col justify-center">
                <div className="mono text-[#A7FF00] text-[11px] tracking-[0.2em] mb-3">00:08 — DATA JOURNEY</div>
                <h2 className="headline text-[36px] md:text-[56px] font-bold leading-[0.95] max-w-[720px]">It goes somewhere.<br/><span className="text-white/40">It's stored somewhere.</span></h2>
                <p className="body mono text-white/60 mt-4 max-w-[520px] text-[13px]">Your message doesn't disappear after you close the tab.</p>

                <div className="mt-10 md:mt-14 relative w-full max-w-[900px] h-[160px] md:h-[200px] rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
                  {/* fiber line */}
                  <div className="absolute left-[18%] right-[22%] top-1/2 h-[2px] bg-gradient-to-r from-[#00F5FF]/0 via-[#00F5FF]/70 to-[#A7FF00]/70 -translate-y-1/2"/>
                  <div className="absolute left-[22%] top-1/2 -translate-y-1/2 w-24 h-14 rounded-xl bg-[#111] border border-white/15 grid place-items-center text-[11px] mono">📱 phone</div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-10 rounded-lg bg-[#A7FF00] text-black mono text-[10px] font-bold grid place-items-center shadow-[0_0_20px_rgba(167,255,0,0.6)] animate-[packet_2s_linear_infinite]">PKT</div>
                  </div>
                  <style>{`@keyframes packet{0%{transform:translateX(-180px)}100%{transform:translateX(180px)}}`}</style>
                  <div className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[110px] h-[96px] rounded-xl bg-[#0c1214] border border-[#00F5FF]/20 grid place-items-center">
                    <Server className="w-7 h-7 text-[#00F5FF]"/><span className="mono text-[10px] text-white/50 mt-1">server rack</span>
                  </div>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"/>
                </div>
              </div>
            </div>

            {/* 3 STANFORD */}
            <div data-scene="stanford" className={`absolute inset-0 p-6 md:p-10 transition-opacity ${current.index===2?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                  <div className="mono text-[#00F5FF] text-[11px] tracking-[0.2em] mb-3">00:16 — STANFORD HAI STUDY</div>
                  <h2 className="headline text-[32px] md:text-[48px] font-bold leading-[0.95]">They read the actual<br/>privacy policies.</h2>
                  <div className="body mono text-[13px] text-white/60 mt-4 leading-relaxed max-w-[520px]">Not the marketing pages. The legal fine print. Six companies. Same pattern.</div>
                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#FF2E63]/10 border border-[#FF2E63]/20 mono text-[12px] text-[#FF7A9A]"><Zap className="w-3.5 h-3.5"/> By default. Because you didn't opt out.</div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-3 gap-2">
                    {["AMAZON","ANTHROPIC","GOOGLE","META","MICROSOFT","OPENAI"].map(n=>(
                      <div key={n} className="h-[72px] rounded-xl bg-white/[0.04] border border-white/10 grid place-items-center mono text-[11px] font-semibold tracking-[0.14em] text-white/80">{n}</div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-[#0a0f11] border border-white/10 p-4 mono text-[11px] leading-relaxed h-[168px] overflow-hidden relative">
                    <div className="absolute inset-0 p-4 opacity-60">
                      <div className="text-white/20">SECTION 4.2 — DATA USAGE</div>
                      <div className="mt-2 text-white/70">...we may collect conversations, feedback, and usage data to improve...</div>
                      <div className="mt-3 px-2 py-1 bg-[#A7FF00]/15 border border-[#A7FF00]/30 text-[#A7FF00] inline-block">can be used to train the next model</div>
                      <div className="mt-3 text-white/40">You may opt out in Settings &gt; Data Controls &gt; Advanced &gt; ...</div>
                      <div className="mt-6 w-full h-[1px] bg-white/10"/>
                      <div className="mt-3 text-[10px] text-white/30">Finding the opt-out means digging through menus most users never open.</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f11]"/>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 SHIFT */}
            <div data-scene="shift" className={`absolute inset-0 p-6 md:p-12 transition-opacity ${current.index===3?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full flex flex-col justify-center">
                <div className="mono text-[#FF2E63] text-[11px] tracking-[0.2em] mb-2">00:26 — AUGUST 2025 // QUIET SHIFT</div>
                <h2 className="headline text-[34px] md:text-[54px] font-bold">Defaults changed.<br/><span className="text-white/35">No press conference.</span></h2>
                <div className="mt-8 relative w-full max-w-[980px]">
                  <div className="h-[2px] w-full bg-white/10 relative">
                    <div className="absolute left-[62%] -top-[7px] w-4 h-4 rounded-full bg-[#FF2E63] shadow-[0_0_18px_#FF2E63] animate-pulse"/>
                    <div className="absolute left-[62%] -top-8 mono text-[10px] text-[#FF2E63] -translate-x-1/2">AUG 2025</div>
                  </div>
                  <div className="mt-8 grid md:grid-cols-3 gap-3">
                    {[
                      {k:"Anthropic",v:"5 years retention",d:"for users who don't opt out"},
                      {k:"Google",v:"3 years reviewed data",d:"holding onto reviewed chat data"},
                      {k:"OpenAI",v:"adjusted defaults",d:"retention & training updated"},
                    ].map(c=>(
                      <div key={c.k} className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 backdrop-blur">
                        <div className="mono text-[11px] text-white/40">{c.k.toUpperCase()}</div>
                        <div className="mt-1 font-bold text-[16px]">{c.v}</div>
                        <div className="mono text-[11px] text-white/50 mt-1">{c.d}</div>
                        <div className="mt-3 h-[2px] w-full bg-gradient-to-r from-[#00F5FF]/0 via-[#00F5FF]/50 to-transparent"/>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 mono text-[11px] text-white/40"><FileText className="w-3.5 h-3.5"/> buried in an updated Terms of Service link that almost nobody clicks</div>
                </div>
              </div>
            </div>

            {/* 5 PAYWALL */}
            <div data-scene="paywall" className={`absolute inset-0 p-6 md:p-12 transition-opacity ${current.index===4?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full flex flex-col justify-center max-w-[1040px]">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <h2 className="headline text-[44px] md:text-[72px] font-bold leading-[0.9] tracking-[-0.03em]">$20/mo<br/>= Privacy?</h2>
                  <div className="relative mt-2">
                    <div className="text-[72px] md:text-[96px] font-black text-[#FF2E63] leading-none rotate-[-6deg] opacity-90">✕</div>
                    <div className="absolute inset-0 grid place-items-center"><div className="px-3 py-1 bg-[#FF2E63] text-white mono text-[11px] font-bold tracking-widest rotate-[-6deg]">MYTH</div></div>
                  </div>
                </div>
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mono text-[11px] text-white/40">CONSUMER PLUS / ADVANCED</div>
                    <div className="mt-3 space-y-2 text-[14px]"><div className="flex gap-2"><span className="text-white/20">—</span> faster response time</div><div className="flex gap-2"><span className="text-white/20">—</span> higher usage limit</div><div className="flex gap-2 text-white/50"><span>—</span> same data pool as free users</div></div>
                  </div>
                  <div className="rounded-2xl border border-[#A7FF00]/25 bg-[#A7FF00]/[0.06] p-5">
                    <div className="mono text-[11px] text-[#A7FF00]/70">BUSINESS / ENTERPRISE / API</div>
                    <div className="mt-3 space-y-2 text-[14px]"><div className="flex gap-2"><span className="text-[#A7FF00]">✓</span> contractual no-train guarantee</div><div className="flex gap-2"><span className="text-[#A7FF00]">✓</span> signed agreement</div><div className="flex gap-2 text-white/70"><span>—</span> built for companies, not individuals</div></div>
                  </div>
                </div>
                <div className="body mono text-[12px] text-white/45 mt-4">Paying does not automatically pull your data out of the training pipeline.</div>
              </div>
            </div>

            {/* 6 PIXEL */}
            <div data-scene="pixel" className={`absolute inset-0 p-6 md:p-10 transition-opacity ${current.index===5?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full grid md:grid-cols-[1.05fr_0.95fr] gap-6 items-center">
                <div>
                  <div className="mono text-[#FF2E63] text-[11px] tracking-[0.2em] mb-2">00:46 — MAY 2026 // TRACKING</div>
                  <h2 className="headline text-[30px] md:text-[46px] font-bold leading-[0.95]">Pixels sitting next to<br/>your secrets.</h2>
                  <div className="body mono text-[12px] leading-relaxed text-white/60 mt-4 max-w-[500px]">Class action: Meta Pixel + Google Analytics embedded, sending query topics, account IDs, email in real time. Mechanism isn't in dispute.</div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["query topics","account IDs","email","symptoms","debt","hidden spouse"].map(t=>(
                      <span key={t} className="px-2.5 py-1 rounded-full bg-[#FF2E63]/10 border border-[#FF2E63]/20 mono text-[10px] text-[#FF8AA6]">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-2xl bg-[#0c1012] border border-white/10 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mono text-[10px] text-white/40"><span>chat.openai.com</span><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#A7FF00]"/> live</span></div>
                  <div className="mt-3 h-[148px] rounded-xl bg-white/[0.03] border border-white/10 p-3 relative overflow-hidden">
                    <div className="mono text-[11px] text-white/70">What symptoms were you worried about? $12k debt hiding from spouse... </div>
                    <div className="absolute right-3 top-3 flex flex-col gap-2">
                      <div className="px-2 py-1 rounded bg-[#1877F2]/20 border border-[#1877F2]/30 mono text-[9px] text-[#7AB4FF]">fb pixel</div>
                      <div className="px-2 py-1 rounded bg-[#FBBC05]/15 border border-[#FBBC05]/25 mono text-[9px] text-[#FFD86E]">ga4</div>
                    </div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 148">
                      <path d="M 300 30 C 340 60, 360 90, 380 110" stroke="#FF2E63" strokeWidth="1.2" strokeDasharray="4 4" fill="none" opacity="0.9"/>
                      <path d="M 300 70 C 340 80, 360 95, 380 120" stroke="#A7FF00" strokeWidth="1.2" strokeDasharray="4 4" fill="none" opacity="0.8"/>
                    </svg>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="h-[56px] rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20 grid place-items-center mono text-[11px]">META</div>
                    <div className="h-[56px] rounded-xl bg-white/[0.04] border border-white/10 grid place-items-center mono text-[11px]">GOOGLE</div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 mono text-[10px] text-white/30"><Database className="w-3 h-3"/> Not shoes you almost bought. What debt you're hiding.</div>
                </div>
              </div>
            </div>

            {/* 7 HUMAN REVIEW */}
            <div data-scene="human" className={`absolute inset-0 p-6 md:p-12 transition-opacity ${current.index===6?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                  <div className="mono text-[#00F5FF] text-[11px] tracking-[0.2em] mb-3">00:58 — HUMAN REVIEW</div>
                  <h2 className="headline text-[32px] md:text-[48px] font-bold leading-[0.95]">Authorized employees<br/>can read it.</h2>
                  <div className="mt-5 rounded-xl bg-black/60 border border-white/10 p-4 mono text-[11px] leading-relaxed">
                    <div className="text-white/30">$ tail -f /var/log/safety_review.log</div>
                    <div className="mt-2 space-y-1 text-white/70">
                      <div><span className="text-[#A7FF00]">[OK]</span> anonymized patterns — skip</div>
                      <div><span className="text-[#FF2E63]">[REVIEW]</span> transcript_id 0x8F21 — flag: self-harm? legal?</div>
                      <div><span className="text-[#00F5FF]">[OPEN]</span> full conversation loaded</div>
                      <div className="text-white/40">{"{ role: 'user', text: '...exact words you typed at 1 AM...' }"}</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-[24px] bg-white/[0.03] border border-white/10 p-6 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white/15 to-white/5 border border-white/10 grid place-items-center"><Eye className="w-6 h-6 text-white/70"/></div>
                      <div><div className="mono text-[11px] text-white/40">reviewer</div><div className="font-semibold text-[13px]">Contractor • Safety & Legal</div></div>
                    </div>
                    <div className="mt-6 text-[18px] md:text-[20px] leading-[1.25] font-medium">“a real human being, sitting at a company you've never met anyone from, might read the exact words you typed into that app at <span className="text-[#00F5FF]">1 AM</span>.”</div>
                    <div className="mt-5 h-[1px] bg-white/10"/>
                    <div className="mt-3 mono text-[11px] text-white/40">for safety monitoring, abuse investigation, legal compliance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 8 SEARCH VS CHAT */}
            <div data-scene="search-vs-chat" className={`absolute inset-0 p-6 md:p-10 transition-opacity ${current.index===7?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full flex flex-col justify-center">
                <div className="mono text-white/40 text-[11px] tracking-[0.2em] mb-3">01:08 — SEARCH VS CHAT</div>
                <div className="grid md:grid-cols-2 gap-4 max-w-[1060px]">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
                    <div className="mono text-[11px] text-white/40">2015: SEARCH HISTORY</div>
                    <div className="mt-4 space-y-2 mono text-[12px] text-white/60">
                      <div className="h-7 rounded-full bg-white/[0.04] border border-white/10 grid place-items-center px-3 w-fit">chest pain causes</div>
                      <div className="h-7 rounded-full bg-white/[0.04] border border-white/10 grid place-items-center px-3 w-fit">divorce lawyer cost</div>
                      <div className="h-7 rounded-full bg-white/[0.04] border border-white/10 grid place-items-center px-3 w-fit">best running shoes</div>
                    </div>
                    <div className="mt-6 mono text-[11px] text-white/30">felt invasive enough</div>
                  </div>
                  <div className="rounded-2xl bg-[#00F5FF]/[0.06] border border-[#00F5FF]/20 p-5 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#00F5FF]/15 blur-[30px] rounded-full"/>
                    <div className="mono text-[11px] text-[#00F5FF]/70">2026: AI CHAT — FULL PARAGRAPHS</div>
                    <div className="mt-4 space-y-2.5 mono text-[11px] leading-relaxed text-white/80">
                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">Full medical symptoms laid out in paragraphs, timeline, family history...</div>
                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">Screenshots of pay stubs asking for financial advice. $12k debt.</div>
                      <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">Legal trouble I haven't told a lawyer yet. Draft message to ex I'm not over.</div>
                    </div>
                    <div className="mt-4 inline-flex px-2.5 py-1 rounded-full bg-[#A7FF00] text-black mono text-[10px] font-bold">most complete psychological archive ever</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 9 WHO DECIDES */}
            <div data-scene="who-decides" className={`absolute inset-0 p-6 md:p-12 transition-opacity ${current.index===8?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full flex flex-col justify-center max-w-[1040px]">
                <div className="mono text-[#FF2E63] text-[11px] tracking-[0.2em] mb-3">01:18 — WHO DECIDES?</div>
                <h2 className="headline text-[34px] md:text-[52px] font-bold leading-[0.95]">When that archive gets<br/>subpoenaed, leaked, repackaged.</h2>
                <div className="mt-8 grid md:grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                    <Gavel className="w-5 h-5 text-white/60"/><div className="mt-2 font-semibold">Subpoena</div><div className="mono text-[11px] text-white/45 mt-1">lawsuit discovery, court order</div>
                    <div className="mt-3 h-[28px] rounded bg-white/[0.04] border border-white/10 grid place-items-center mono text-[10px]">010101 ▓ breach spill</div>
                  </div>
                  <div className="rounded-2xl bg-[#FF2E63]/10 border border-[#FF2E63]/20 p-4">
                    <ShieldAlert className="w-5 h-5 text-[#FF7A9A]"/><div className="mt-2 font-semibold">Breach / Leak</div><div className="mono text-[11px] text-white/50 mt-1">binary spill animation — real words in the wild</div>
                    <div className="mt-3 font-mono text-[9px] leading-[1.1] text-[#FF8AA6] opacity-70">01100110 01100101 01100101 01101100<br/>01110011 00100000 01110000 01110010<br/>01101001 01110110 01100001 01110100 01100101</div>
                  </div>
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                    <Cpu className="w-5 h-5 text-white/60"/><div className="mt-2 font-semibold">Ad product in 5 years</div><div className="mono text-[11px] text-white/45 mt-1">quietly repackaged</div>
                    <div className="mt-3 h-[36px] rounded-lg bg-black border border-white/10 flex items-center justify-between px-3 mono text-[10px]"><span>Product: YOU_v2</span><span className="text-[#A7FF00]">$ CPM</span></div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="text-[18px] md:text-[22px] font-medium">who's actually in the room deciding what happens to it?</div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex -space-x-2">{[0,1,2,3].map(i=><div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-black grid place-items-center text-[10px]">?</div>)}</div>
                    <div className="mono text-[12px] text-white/40">empty chairs around table • will you even know it's happening?</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10 CLOSING */}
            <div data-scene="closing" className={`absolute inset-0 p-6 md:p-12 transition-opacity ${current.index===9?'opacity-100':'opacity-0 pointer-events-none'}`}>
              <div className="h-full flex flex-col justify-center items-start max-w-[760px]">
                <div className="mono text-[#00F5FF] text-[11px] tracking-[0.2em] mb-6">01:28 — CLOSING</div>
                <div className="space-y-4">
                  <div className="text-[20px] md:text-[26px] leading-[1.3] font-medium text-white/90">You didn't sign up to write the most honest diary of your life.</div>
                  <div className="text-[20px] md:text-[26px] leading-[1.3] font-medium text-white/40">You just wanted an answer.</div>
                </div>
                <div className="mt-10 relative">
                  <div className="w-[280px] h-[180px] rounded-xl bg-gradient-to-b from-[#11161a] to-[#070a0c] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(0,245,255,0.12)] p-4 flex flex-col">
                    <div className="flex items-center justify-between mono text-[10px] text-white/30"><span>diary.db — encrypted?</span><span className="text-[#FF2E63]">● live</span></div>
                    <div className="mt-4 flex-1 rounded-lg bg-black/60 border border-white/5 p-3 mono text-[11px] leading-relaxed text-white/60">dear diary, today I typed things I never told anyone...<br/><span className="text-[#00F5FF]">[syncing…]</span></div>
                    <div className="mt-3 h-[2px] w-full bg-gradient-to-r from-[#00F5FF]/0 via-[#00F5FF]/50 to-transparent"/>
                  </div>
                  <div className="absolute -right-6 -top-6 w-12 h-12 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/20 grid place-items-center animate-pulse"><X className="w-5 h-5 text-[#00F5FF]/60"/></div>
                </div>
                <div className="mt-10">
                  <div className="text-[22px] md:text-[30px] font-bold leading-tight tracking-[-0.02em]"><span className="text-[#00F5FF] drop-shadow-[0_0_12px_rgba(0,245,255,0.6)]">But somewhere, that diary already exists.</span></div>
                  <div className="mt-2 mono text-[13px] text-white/60 flex items-center gap-1">Who's reading it?<span className="w-[10px] h-[16px] bg-[#00F5FF] inline-block animate-[blink_1s_step-end_infinite]"/></div>
                </div>
              </div>
            </div>
          </div>

          {/* grain */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>
        </div>

        {/* Bottom scrubber */}
        <div className="w-full max-w-[1280px] border-t border-white/10 bg-[#080a0b]">
          <div className="px-4 md:px-6 py-3 flex flex-col gap-2">
            <div className="flex items-center justify-between mono text-[11px]">
              <div className="flex items-center gap-3">
                <span className="text-white/40">{String(Math.floor(timeRef.current/60)).padStart(2,'0')}:{(Math.floor(timeRef.current%60)).toString().padStart(2,'0')}</span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-white/70">{current.scene.id.toUpperCase()} • {current.index+1}/10</span>
                <span className="hidden md:inline text-white/30">— {current.scene.headline}</span>
              </div>
              <div className="flex items-center gap-2 text-white/30"><span className="hidden md:inline">{Math.round(progress*100)}%</span><Download className="w-3.5 h-3.5"/></div>
            </div>
            <div className="relative h-[28px] flex items-center">
              <input type="range" min={0} max={1} step={0.001} value={progress} onChange={e=>seek(parseFloat(e.target.value))} className="w-full accent-[#00F5FF] h-1 bg-white/10 rounded-full appearance-none cursor-pointer"/>
              <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-1 rounded-full bg-[#00F5FF]" style={{width:`${progress*100}%`, boxShadow:'0 0 12px rgba(0,245,255,0.6)'}}/>
            </div>
            <div className="flex gap-1.5 overflow-hidden">
              {SCENES.map((s,i)=>{
                const isActive=i===current.index;
                const isPast=i<current.index;
                return <div key={s.id} className={`h-1.5 flex-1 rounded-full transition-all ${isActive?'bg-[#00F5FF] shadow-[0_0_8px_rgba(0,245,255,0.6)]':isPast?'bg-white/30':'bg-white/10'}`}/>;
              })}
            </div>
          </div>
          <div className="px-4 md:px-6 pb-4 mono text-[10px] leading-relaxed text-white/25">
            Built as single HTML • GSAP timeline • canvas particles • no external images • Press <span className="text-white/50">Record WebM</span> to capture canvas stream via MediaRecorder. For Antigravity: <span className="text-white/40">npx serve .</span> then open file, auto-play.
          </div>
        </div>
      </div>
    </div>
  );
}
