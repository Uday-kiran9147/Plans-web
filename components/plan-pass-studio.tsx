"use client";

import { useState } from "react";
import { CheckIcon, SparkIcon } from "./icons";

const presets = [
  {
    intent: "Filter Coffee & Deep Talks ☕",
    time: "Tonight @ 6:30 PM",
    loc: "Old Town Roastery",
    label: "Coffee & Talks",
  },
  {
    intent: "Late Night Badminton 🏸",
    time: "Tonight @ 8:00 PM",
    loc: "Community Courts",
    label: "Badminton Court",
  },
  {
    intent: "Indie Cinema & Ramen 🍜",
    time: "Friday @ 9:15 PM",
    loc: "Roxy Theater & Bar",
    label: "Cinema & Ramen",
  },
  {
    intent: "Analog Vinyl Jam 🎶",
    time: "Saturday @ 4:00 PM",
    loc: "Groove Basement",
    label: "Vinyl Jam",
  },
  {
    intent: "Sunset Rooftop Sketches 🎨",
    time: "Sunday @ 5:30 PM",
    loc: "The High Terrace",
    label: "Rooftop Art",
  },
];

export function PlanPassStudio() {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [intent, setIntent] = useState(presets[0].intent);
  const [time, setTime] = useState(presets[0].time);
  const [loc, setLoc] = useState(presets[0].loc);
  const [stamped, setStamped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectPreset = (idx: number) => {
    setSelectedPreset(idx);
    setIntent(presets[idx].intent);
    setTime(presets[idx].time);
    setLoc(presets[idx].loc);
  };

  const handleStamp = () => {
    setStamped(false);
    setTimeout(() => {
      setStamped(true);
      if (typeof window !== "undefined" && window.AudioContext) {
        try {
          const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(320, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.18);
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.18);
        } catch {
          // Audio unpermitted
        }
      }
    }, 10);
  };

  const handleCopy = () => {
    const text = `🎟️ PLANS PASS: ${intent}\n⏰ ${time}\n📍 ${loc}\n👉 Verified Real Meetup on Plans`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="pass-studio" className="scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Interactive Pass Studio
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            The Instant Plan Generator
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-text-secondary text-sm sm:text-base">
            Compose your intent. Watch the plum-ink seal lock in your plan, and claim your pass for tonight.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid items-center gap-8 lg:grid-cols-[1.1fr_1.2fr] lg:gap-14">
          {/* Controls */}
          <div className="rounded-[1.75rem] sm:rounded-[2rem] border-3 border-plum-ink bg-cream p-4 sm:p-7 text-plum-ink shadow-[0_10px_0px_#302547] sm:shadow-[0_12px_0px_#302547]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-orange text-plum-ink font-bold text-sm sm:text-base">
                ✂️
              </span>
              <h3 className="font-semibold uppercase tracking-tight text-lg sm:text-xl text-plum-ink">
                Compose Intent
              </h3>
            </div>

            {/* Presets */}
            <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
              {presets.map((p, idx) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => handleSelectPreset(idx)}
                  className={`rounded-xl border-2 border-plum-ink px-2.5 py-1 text-[11px] sm:px-3.5 sm:py-1.5 sm:text-xs font-bold transition-all ${
                    selectedPreset === idx
                      ? "bg-plum-ink text-cream"
                      : "bg-cream-light text-plum-ink hover:bg-orange hover:-translate-y-0.5"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <div className="mt-5 space-y-3.5">
              <div>
                <label htmlFor="intentInput" className="block font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-plum-ink/80">
                  What do you want to do?
                </label>
                <input
                  id="intentInput"
                  type="text"
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  maxLength={48}
                  className="mt-1 w-full rounded-xl sm:rounded-2xl border-2 border-plum-ink bg-[#FFF9E6] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base font-medium text-plum-ink outline-none transition focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="timeInput" className="block font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-plum-ink/80">
                    When?
                  </label>
                  <input
                    id="timeInput"
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-1 w-full rounded-xl sm:rounded-2xl border-2 border-plum-ink bg-[#FFF9E6] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base font-medium text-plum-ink outline-none transition focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20"
                  />
                </div>
                <div>
                  <label htmlFor="locInput" className="block font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-plum-ink/80">
                    Where?
                  </label>
                  <input
                    id="locInput"
                    type="text"
                    value={loc}
                    onChange={(e) => setLoc(e.target.value)}
                    className="mt-1 w-full rounded-xl sm:rounded-2xl border-2 border-plum-ink bg-[#FFF9E6] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base font-medium text-plum-ink outline-none transition focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={handleStamp}
                className="flex-1 min-w-[130px] rounded-xl sm:rounded-2xl border-2 border-plum-ink bg-orange px-4 py-3 sm:px-5 sm:py-3.5 text-center text-xs sm:text-sm font-bold uppercase tracking-wide text-plum-ink shadow-[0_4px_0px_#302547] transition hover:-translate-y-0.5 hover:bg-[#FFAF70] hover:shadow-[0_6px_0px_#302547] active:translate-y-0.5 active:shadow-[0_1px_0px_#302547]"
              >
                🔨 Stamp It Now
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl sm:rounded-2xl border-2 border-plum-ink bg-accent px-4 py-3 sm:px-5 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-cream shadow-[0_4px_0px_#302547] transition hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_6px_0px_#302547] active:translate-y-0.5 active:shadow-[0_1px_0px_#302547]"
              >
                {copied ? <CheckIcon className="h-4 w-4" /> : <SparkIcon className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Pass"}
              </button>
            </div>
          </div>

          {/* Live Physical Pass Display */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border-3 sm:border-4 border-plum-ink bg-cream-light text-plum-ink shadow-[0_12px_0px_rgba(48,37,71,0.95),0_20px_35px_rgba(71,0,165,0.35)] sm:shadow-[0_18px_0px_rgba(48,37,71,0.95),0_28px_45px_rgba(71,0,165,0.45)]">
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-6 sm:left-8 z-20 flex h-6 sm:h-7 w-24 sm:w-28 -rotate-6 items-center justify-center border border-dashed border-plum-ink bg-orange/90 font-mono text-[9px] sm:text-[10px] font-extrabold tracking-widest text-plum-ink shadow-sm">
                VERIFIED REAL
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_130px]">
                {/* Main Pass Body */}
                <div className="relative p-5 sm:p-7 md:p-8">
                  <div className="flex items-center justify-between border-b-2 border-plum-ink pb-3.5 sm:pb-4">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 100 100" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="#302547" strokeWidth="8" strokeLinecap="round">
                        <path d="M28 68V52Q28 42 38 42H42" />
                        <path d="M72 32V48Q72 58 62 58H58" />
                        <circle cx="28" cy="27" r="6" fill="#302547" />
                        <circle cx="72" cy="73" r="6" fill="#302547" />
                        <circle cx="50" cy="50" r="6" fill="#302547" />
                      </svg>
                      <span className="font-bold tracking-tight text-base sm:text-lg uppercase text-plum-ink">
                        plans pass
                      </span>
                    </div>
                    <span className="rounded-lg border border-plum-ink bg-orange px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-xs font-extrabold tracking-wider text-plum-ink">
                      #PLN-84920
                    </span>
                  </div>

                  <div className="mt-4 sm:mt-6 min-h-[3.5rem] sm:min-h-[4.5rem]">
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight tracking-tight text-plum-ink">
                      {intent || "Enter your plan..."}
                    </h4>
                  </div>

                  <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 border-t-2 border-dashed border-plum-ink/25 pt-3.5 sm:pt-4 font-mono text-xs">
                    <div>
                      <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-plum-ink/60">
                        Time Scheduled
                      </span>
                      <strong className="mt-0.5 block text-xs sm:text-sm font-extrabold text-plum-ink">
                        {time}
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-plum-ink/60">
                        Rendezvous Spot
                      </span>
                      <strong className="mt-0.5 block text-xs sm:text-sm font-extrabold text-plum-ink">
                        {loc}
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-plum-ink/60">
                        Status
                      </span>
                      <strong className="mt-0.5 block text-[10px] sm:text-xs font-extrabold text-burnt-orange">
                        READY FOR ATTENDEES
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-plum-ink/60">
                        Capacity
                      </span>
                      <strong className="mt-0.5 block text-[10px] sm:text-xs font-extrabold text-plum-ink">
                        3 TO 4 SPOTS MAX
                      </strong>
                    </div>
                  </div>

                  {/* Rubber Ink Stamp */}
                  <div
                    className={`pointer-events-none absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 -rotate-12 flex-col items-center justify-center rounded-full border-3 sm:border-4 border-dashed border-plum-ink p-1.5 text-center text-plum-ink transition-transform duration-300 ${
                      stamped ? "scale-100 opacity-95 animate-in zoom-in-50" : "scale-90 opacity-70"
                    }`}
                  >
                    <span className="font-mono text-[7px] sm:text-[9px] font-black uppercase tracking-wider">
                      OFFICIAL OS
                    </span>
                    <strong className="text-xs sm:text-sm font-black text-burnt-orange tracking-tight leading-tight">
                      PLANS
                    </strong>
                    <span className="font-mono text-[7px] sm:text-[9px] font-black uppercase tracking-wider">
                      NO FEEDS • 2026
                    </span>
                  </div>
                </div>

                {/* Perforated Stub */}
                <div className="relative flex flex-row items-center justify-between border-t-3 border-dashed border-plum-ink bg-cream p-4 sm:p-5 md:flex-col md:border-l-3 md:border-t-0 md:py-6">
                  {/* Perforation Notches */}
                  <div className="hidden md:block absolute -top-3 -left-3 h-6 w-6 rounded-full border-3 border-plum-ink bg-ink" />
                  <div className="hidden md:block absolute -bottom-3 -left-3 h-6 w-6 rounded-full border-3 border-plum-ink bg-ink" />

                  {/* Barcode SVG */}
                  <div className="flex h-12 w-20 items-center justify-center md:h-24 md:w-full">
                    <svg width="60" height="50" viewBox="0 0 60 70" className="h-full w-auto">
                      <rect x="2" y="0" width="3" height="70" fill="#302547" />
                      <rect x="8" y="0" width="6" height="70" fill="#302547" />
                      <rect x="18" y="0" width="2" height="70" fill="#302547" />
                      <rect x="24" y="0" width="8" height="70" fill="#302547" />
                      <rect x="36" y="0" width="4" height="70" fill="#302547" />
                      <rect x="44" y="0" width="3" height="70" fill="#302547" />
                      <rect x="52" y="0" width="5" height="70" fill="#302547" />
                    </svg>
                  </div>

                  <div className="font-mono text-[9px] sm:text-[10px] font-black tracking-widest text-plum-ink md:[writing-mode:vertical-rl]">
                    TEAR OFF PROOF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
