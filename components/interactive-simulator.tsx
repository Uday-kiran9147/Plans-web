"use client";

import { useState } from "react";
import { ArrowRightIcon, BellIcon, ChatIcon, CompassIcon, SparkIcon } from "./icons";

const simSteps = [
  {
    n: "01",
    icon: SparkIcon,
    title: "Broadcast Intent",
    desc: "One line of what you want to do. Activity, time, place, group size. Zero caption polish or algorithmic vanity.",
    screen: {
      badge: "INTENT COMPOSER",
      headline: "“Filter Coffee at 6:30.\nOld Town Roastery.”",
      meta: "1 line • 0 audience • 3 spots left",
      buttonText: "BROADCAST TO RADAR",
      color: "bg-orange",
    },
  },
  {
    n: "02",
    icon: CompassIcon,
    title: "Mutual Radar Ping",
    desc: "Discover nearby humans seeking the exact same plan right now, filtered by walking distance and interest.",
    screen: {
      badge: "RADAR DISCOVERY",
      headline: "3 People Nearby\nWant The Same Thing",
      meta: "Within 1.2 km • Free tonight @ 6:30 PM",
      buttonText: "SEND MUTUAL PING",
      color: "bg-accent text-white",
    },
  },
  {
    n: "03",
    icon: ChatIcon,
    title: "Self-Destructing Room",
    desc: "Coordinate the table or court details. The room automatically archives itself when the plan finishes.",
    screen: {
      badge: "ACTIVE PLAN ROOM",
      headline: "“Table for 4 reserved.\nSee everyone in 20m!”",
      meta: "4 attendees in room • Closes after meetup",
      buttonText: "VIEW DIRECTIONS",
      color: "bg-success text-plum-ink",
    },
  },
  {
    n: "04",
    icon: BellIcon,
    title: "Proof-of-Presence Moments",
    desc: "Mint a tactile photo keepsake only with the attendees who actually showed up. That is your genuine record.",
    screen: {
      badge: "PROOF OF PRESENCE",
      headline: "Moment Minted:\nOld Town Roastery",
      meta: "Verified with 3 friends • Proof you went",
      buttonText: "SAVE TO MOMENTS",
      color: "bg-burnt-orange text-white",
    },
  },
];

export function InteractiveSimulator() {
  const [activeStep, setActiveStep] = useState(0);

  const step = simSteps[activeStep];

  return (
    <section id="simulator" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            The Operating System
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            How Plans Actually Works
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-text-secondary">
            Built from the ground up for friction-free real-world rendezvous. Click through each phase of the loop.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border-3 border-plum-ink bg-plum-ink p-8 text-cream shadow-[0_20px_0px_#000,0_30px_60px_rgba(0,0,0,0.5)] sm:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Step Selection Tabs */}
            <div className="flex flex-col gap-3.5">
              {simSteps.map((s, idx) => {
                const isActive = activeStep === idx;
                const Icon = s.icon;
                return (
                  <button
                    key={s.n}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-start gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-200 ${
                      isActive
                        ? "border-orange bg-cream text-plum-ink shadow-[4px_6px_0px_#FF9B50] sm:translate-x-2"
                        : "border-cream/20 bg-cream/5 text-cream hover:border-orange/60 hover:bg-cream/10"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl font-mono text-base font-extrabold ${
                        isActive ? "bg-plum-ink text-orange" : "bg-white/10 text-orange"
                      }`}
                    >
                      {s.n}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className={`h-4 w-4 ${isActive ? "text-burnt-orange" : "text-orange"}`} />
                        <h3 className="font-bold uppercase tracking-tight text-base sm:text-lg">
                          {s.title}
                        </h3>
                      </div>
                      <p
                        className={`mt-1.5 text-xs leading-relaxed sm:text-sm ${
                          isActive ? "text-plum-ink/80" : "text-cream-light/70"
                        }`}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Phone Screen Mockup */}
            <div className="flex justify-center">
              <div className="relative aspect-[9/18.5] w-full max-w-[19rem] overflow-hidden rounded-[3rem] border-[6px] border-cream bg-[#0B0B10] p-4 text-center shadow-[0_24px_0px_#000,0_35px_50px_rgba(0,0,0,0.6)]">
                {/* Dynamic Island / Notch */}
                <div className="mx-auto h-5 w-24 rounded-full bg-black" />

                {/* Status Bar */}
                <div className="mt-3 flex items-center justify-between px-2 font-mono text-[10px] text-cream-light/80">
                  <span>9:41 AM</span>
                  <span className="font-extrabold text-orange">PLANS OS</span>
                </div>

                {/* Screen Interactive Card */}
                <div className="mt-8 flex flex-1 flex-col items-center justify-center">
                  <div className="w-full rounded-2xl border-3 border-plum-ink bg-cream p-5 text-plum-ink shadow-[0_8px_0px_#302547] transition-all duration-300">
                    <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-burnt-orange">
                      {step.screen.badge}
                    </span>

                    <p className="mt-3 whitespace-pre-line text-lg font-extrabold uppercase leading-tight text-plum-ink sm:text-xl">
                      {step.screen.headline}
                    </p>

                    <p className="mt-2 text-xs font-medium text-plum-ink/70">
                      {step.screen.meta}
                    </p>

                    <div className="mt-5">
                      <span className={`block rounded-xl border-2 border-plum-ink px-3 py-2.5 font-mono text-[11px] font-extrabold tracking-wider shadow-[0_3px_0px_#302547] ${step.screen.color}`}>
                        {step.screen.buttonText}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar Indicator */}
                <div className="absolute bottom-2.5 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-cream/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
