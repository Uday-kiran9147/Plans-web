"use client";

import { useState } from "react";

export function TickerBanner() {
  const [playing, setPlaying] = useState(false);

  const toggleSound = () => {
    const next = !playing;
    setPlaying(next);

    if (next && typeof window !== "undefined" && window.AudioContext) {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, ctx.currentTime); // 440 Hz A note (Electric Violet in brand preview)
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } catch {
        // Audio unpermitted
      }
    }
  };

  const tickerItems = [
    "🚨 NO FEEDS",
    "100% REAL HUMAN PRESENCE",
    "REAL PEOPLE IN REAL PLACES",
    "ZERO AD TRACKERS",
    "INTENT OVER ALGORITHMS",
    "SELF-DESTRUCTING ROOMS",
  ];

  return (
    <div className="relative z-[60] flex items-center justify-between border-b-2 border-orange bg-plum-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-cream">
      {/* Marquee Ticker */}
      <div className="flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex animate-[marquee_24s_linear_infinite] gap-8">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sound Widget */}
      <button
        type="button"
        onClick={toggleSound}
        title="Harmonic Audio Chime"
        className="ml-4 flex flex-none items-center gap-2 rounded-full border border-cream/40 bg-accent px-3 py-1 font-mono text-[10px] text-cream transition hover:bg-orange hover:text-plum-ink active:scale-95"
      >
        <span className="flex items-end gap-0.5 h-3">
          <span className={`w-0.5 bg-current rounded-full transition-all ${playing ? "h-3 animate-pulse" : "h-1.5"}`} />
          <span className={`w-0.5 bg-current rounded-full transition-all ${playing ? "h-3.5 animate-bounce" : "h-2.5"}`} />
          <span className={`w-0.5 bg-current rounded-full transition-all ${playing ? "h-2 animate-pulse" : "h-1"}`} />
        </span>
        <span className="hidden sm:inline">{playing ? "440 HZ NOTE" : "SYNTH CHIME"}</span>
      </button>
    </div>
  );
}
