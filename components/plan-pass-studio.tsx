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
      // Optional Web Audio feedback
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
          // Audio not allowed or unavailable
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
    <section id="pass-studio" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Interactive Pass Studio
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            The Instant Plan Generator
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-text-secondary">
            Compose your intent. Watch the plum-ink seal lock in your plan, and claim your pass for tonight.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1.2fr] lg:gap-14">
          {/* Controls */}
          <div className="rounded-[2rem] border-3 border-plum-ink bg-cream p-7 text-plum-ink shadow-[0_12px_0px_#302547] sm:p-9">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange text-plum-ink font-bold">
                ✂️
              </span>
              <h3 className="font-semibold uppercase tracking-tight text-xl text-plum-ink">
                Compose Intent
              </h3>
            </div>

            {/* Presets */}
            <div className="mt-6 flex flex-wrap gap-2">
              {presets.map((p, idx) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => handleSelectPreset(idx)}
                  className={`rounded-xl border-2 border-plum-ink px-3.5 py-1.5 text-xs font-bold transition-all ${
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
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="intentInput" className="block font-mono text-[11px] font-bold uppercase tracking-wider text-plum-ink/80">
                  What do you want to do?
                </label>
                <input
                  id="intentInput"
                  type="text"
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  maxLength={48}
                  className="mt-1.5 w-full rounded-2xl border-2 border-plum-ink bg-[#FFF9E6] px-4 py-3 font-medium text-plum-ink outline-none transition focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="timeInput" className="block font-mono text-[11px] font-bold uppercase tracking-wider text-plum-ink/80">
                    When?
                  </label>
                  <input
                    id="timeInput"
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border-2 border-plum-ink bg-[#FFF9E6] px-4 py-3 font-medium text-plum-ink outline-none transition focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20"
                  />
                </div>
                <div>
                  <label htmlFor="locInput" className="block font-mono text-[11px] font-bold uppercase tracking-wider text-plum-ink/80">
                    Where?
                  </label>
                  <input
                    id="locInput"
                    type="text"
                    value={loc}
                    onChange={(e) => setLoc(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border-2 border-plum-ink bg-[#FFF9E6] px-4 py-3 font-medium text-plum-ink outline-none transition focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleStamp}
                className="flex-1 rounded-2xl border-2 border-plum-ink bg-orange px-5 py-3.5 text-center font-bold uppercase tracking-wide text-plum-ink shadow-[0_4px_0px_#302547] transition hover:-translate-y-0.5 hover:bg-[#FFAF70] hover:shadow-[0_6px_0px_#302547] active:translate-y-0.5 active:shadow-[0_1px_0px_#302547]"
              >
                🔨 Stamp It Now
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl border-2 border-plum-ink bg-accent px-5 py-3.5 font-bold uppercase tracking-wide text-cream shadow-[0_4px_0px_#302547] transition hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_6px_0px_#302547] active:translate-y-0.5 active:shadow-[0_1px_0px_#302547]"
              >
                {copied ? <CheckIcon className="h-4 w-4" /> : <SparkIcon className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Pass"}
              </button>
            </div>
          </div>

          {/* Live Physical Pass Display */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[34rem] overflow-hidden rounded-[2rem] border-4 border-plum-ink bg-cream-light text-plum-ink shadow-[0_18px_0px_rgba(48,37,71,0.95),0_28px_45px_rgba(71,0,165,0.45)]">
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-8 z-20 flex h-7 w-28 -rotate-6 items-center justify-center border border-dashed border-plum-ink bg-orange/90 font-mono text-[10px] font-extrabold tracking-widest text-plum-ink shadow-sm">
                VERIFIED REAL
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_130px]">
                {/* Main Pass Body */}
                <div className="relative p-7 sm:p-8">
                  <div className="flex items-center justify-between border-b-2 border-plum-ink pb-4">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 100 100" className="h-7 w-7" fill="none" stroke="#302547" strokeWidth="8" strokeLinecap="round">
                        <path d="M28 68V52Q28 42 38 42H42" />
                        <path d="M72 32V48Q72 58 62 58H58" />
                        <circle cx="28" cy="27" r="6" fill="#302547" />
                        <circle cx="72" cy="73" r="6" fill="#302547" />
                        <circle cx="50" cy="50" r="6" fill="#302547" />
                      </svg>
                      <span className="font-bold tracking-tight text-lg uppercase text-plum-ink">
                        plans pass
                      </span>
                    </div>
                    <span className="rounded-lg border border-plum-ink bg-orange px-2.5 py-1 font-mono text-xs font-extrabold tracking-wider text-plum-ink">
                      #PLN-84920
                    </span>
                  </div>

                  <div className="mt-6 min-h-[4.5rem]">
                    <h4 className="text-2xl font-bold uppercase leading-tight tracking-tight text-plum-ink sm:text-3xl">
                      {intent || "Enter your plan..."}
                    </h4>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-t-2 border-dashed border-plum-ink/25 pt-4 font-mono text-xs">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-plum-ink/60">
                        Time Scheduled
                      </span>
                      <strong className="mt-0.5 block text-sm font-extrabold text-plum-ink">
                        {time}
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-plum-ink/60">
                        Rendezvous Spot
                      </span>
                      <strong className="mt-0.5 block text-sm font-extrabold text-plum-ink">
                        {loc}
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-plum-ink/60">
                        Status
                      </span>
                      <strong className="mt-0.5 block text-xs font-extrabold text-burnt-orange">
                        READY FOR ATTENDEES
                      </strong>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-plum-ink/60">
                        Capacity
                      </span>
                      <strong className="mt-0.5 block text-xs font-extrabold text-plum-ink">
                        3 TO 4 SPOTS MAX
                      </strong>
                    </div>
                  </div>

                  {/* Rubber Ink Stamp */}
                  <div
                    className={`pointer-events-none absolute bottom-4 right-4 z-10 flex h-28 w-28 -rotate-12 flex-col items-center justify-center rounded-full border-4 border-dashed border-plum-ink p-2 text-center text-plum-ink transition-transform duration-300 ${
                      stamped ? "scale-100 opacity-95 animate-in zoom-in-50" : "scale-90 opacity-70"
                    }`}
                  >
                    <span className="font-mono text-[9px] font-black uppercase tracking-wider">
                      OFFICIAL OS
                    </span>
                    <strong className="text-sm font-black text-burnt-orange tracking-tight">
                      PLANS
                    </strong>
                    <span className="font-mono text-[9px] font-black uppercase tracking-wider">
                      NO FEEDS • 2026
                    </span>
                  </div>
                </div>

                {/* Perforated Stub */}
                <div className="relative flex flex-row items-center justify-between border-t-3 border-dashed border-plum-ink bg-cream p-5 md:flex-col md:border-l-3 md:border-t-0 md:py-6">
                  {/* Perforation Notches */}
                  <div className="hidden md:block absolute -top-3 -left-3 h-6 w-6 rounded-full border-3 border-plum-ink bg-ink" />
                  <div className="hidden md:block absolute -bottom-3 -left-3 h-6 w-6 rounded-full border-3 border-plum-ink bg-ink" />

                  {/* Barcode SVG */}
                  <div className="flex h-16 w-24 items-center justify-center md:h-24 md:w-full">
                    <svg width="60" height="70" viewBox="0 0 60 70">
                      <rect x="2" y="0" width="3" height="70" fill="#302547" />
                      <rect x="8" y="0" width="6" height="70" fill="#302547" />
                      <rect x="18" y="0" width="2" height="70" fill="#302547" />
                      <rect x="24" y="0" width="8" height="70" fill="#302547" />
                      <rect x="36" y="0" width="4" height="70" fill="#302547" />
                      <rect x="44" y="0" width="3" height="70" fill="#302547" />
                      <rect x="52" y="0" width="5" height="70" fill="#302547" />
                    </svg>
                  </div>

                  <div className="font-mono text-[10px] font-black tracking-widest text-plum-ink md:[writing-mode:vertical-rl]">
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
