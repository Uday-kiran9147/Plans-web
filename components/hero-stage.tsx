"use client";

import Image from "next/image";

export function HeroStage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center px-1 py-4 sm:p-4">
      {/* 3D Paper Stage */}
      <div className="group relative w-full rounded-[2rem] sm:rounded-[2.5rem] border-3 sm:border-4 border-plum-ink bg-cream p-4 sm:p-7 text-plum-ink shadow-[0_12px_0px_rgba(48,37,71,0.95),0_20px_35px_rgba(71,0,165,0.35)] sm:shadow-[0_18px_0px_rgba(48,37,71,0.95),0_28px_45px_rgba(71,0,165,0.45)] transition-all duration-300 hover:-translate-y-1">
        {/* Washi Tape Stickers */}
        <div className="absolute -top-3 left-4 sm:left-8 z-20 flex h-6 sm:h-7 w-24 sm:w-28 -rotate-12 items-center justify-center border border-dashed border-plum-ink bg-orange/90 font-mono text-[9px] sm:text-[10px] font-extrabold tracking-widest text-plum-ink shadow-sm">
          PROOF OF PRESENCE
        </div>
        <div className="absolute -bottom-2.5 right-4 sm:right-8 z-20 flex h-6 sm:h-7 w-24 sm:w-28 rotate-6 items-center justify-center border border-dashed border-plum-ink bg-burnt-orange font-mono text-[9px] sm:text-[10px] font-extrabold tracking-widest text-cream shadow-sm">
          NO FEEDS
        </div>

        {/* Floating Top Badge */}
        <div className="absolute -top-3 right-2 sm:-right-3 z-20 flex items-center gap-1.5 rounded-xl sm:rounded-2xl border-2 border-plum-ink bg-burnt-orange px-2.5 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[10px] sm:text-[11px] font-extrabold tracking-wider text-cream shadow-[2px_3px_0px_#302547] rotate-2 transition-transform hover:scale-105 hover:rotate-0">
          <span>⚡ TONIGHT @ 6:30 PM</span>
        </div>

        {/* Floating Radar Badge */}
        <div className="absolute -bottom-3 left-2 sm:-left-3 z-20 flex items-center gap-1.5 rounded-xl sm:rounded-2xl border-2 border-plum-ink bg-accent px-2.5 py-1 sm:px-3.5 sm:py-1.5 font-mono text-[10px] sm:text-[11px] font-extrabold tracking-wider text-cream shadow-[2px_3px_0px_#302547] -rotate-2 transition-transform hover:scale-105 hover:rotate-0">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-400 animate-ping" />
          <span>📡 RADAR: 3 NEARBY</span>
        </div>

        {/* Starburst Sticker */}
        <div className="hidden lg:flex absolute -right-6 top-1/3 z-20 h-20 w-20 items-center justify-center rounded-full border-3 border-plum-ink bg-orange text-center font-mono text-[9px] font-black leading-tight text-plum-ink shadow-[3px_4px_0px_#302547] rotate-12 transition-transform hover:scale-110">
          <span>100%<br />REAL<br />MEETUP</span>
        </div>

        {/* Inside Art & Visual Layer */}
        <div className="relative flex min-h-[280px] sm:min-h-[340px] w-full flex-col items-center justify-between rounded-xl sm:rounded-2xl border-2 border-dashed border-plum-ink/25 bg-cream-light p-3.5 sm:p-5 overflow-hidden">
          {/* Header Strip */}
          <div className="flex w-full items-center justify-between border-b-2 border-plum-ink/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-accent" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-plum-ink">
                PLANS SOCIAL OS
              </span>
            </div>
            <span className="rounded-md sm:rounded-lg border border-plum-ink bg-orange px-1.5 sm:px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold text-plum-ink">
              RADAR ACTIVE
            </span>
          </div>

          {/* Central Cut-Paper Visual */}
          <div className="relative my-auto flex flex-col items-center justify-center py-2 sm:py-4">
            <div className="relative h-36 w-36 sm:h-48 sm:w-48 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/meetup.png"
                alt="Plans rendezvous cut-paper artwork"
                fill
                sizes="(max-width: 640px) 150px, 200px"
                className="object-contain drop-shadow-[2px_6px_0px_rgba(48,37,71,0.15)]"
                priority
              />
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="w-full rounded-lg sm:rounded-xl border border-plum-ink/30 bg-cream p-2 sm:p-2.5 text-center">
            <p className="font-mono text-[10px] sm:text-[11px] font-bold text-plum-ink">
              &ldquo;Filter Coffee &amp; Deep Talks · Tonight @ 6:30 PM&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
