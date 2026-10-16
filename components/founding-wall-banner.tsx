import Image from "next/image";
import { AppleIcon, ArrowRightIcon, GooglePlayIcon, SparkIcon } from "./icons";
import { site } from "./site";

export function FoundingWallBanner() {
  return (
    <div className="relative my-6 overflow-hidden rounded-[2rem] border-2 border-orange/60 bg-gradient-to-br from-[#2a0e28] via-[#1c0c2e] to-[#120722] p-5 sm:p-7 lg:p-8 shadow-[0_0_45px_-8px_rgba(255,155,80,0.32)] transition-all hover:border-orange hover:shadow-[0_0_55px_-5px_rgba(255,155,80,0.42)]">
      {/* Warm ambient background glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />

      {/* Main Grid: First 100 Image beside Sign Wall Details */}
      <div className="mt-6 grid items-center gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[270px_1fr] lg:gap-10">
        {/* Left Column: First 100 Sign Wall Graphic */}
        <div className="relative mx-auto flex w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[270px] flex-none flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-[1.75rem] border-2 border-orange/50 bg-ink-soft shadow-[0_12px_40px_rgba(0,0,0,0.7)] ring-2 ring-orange/20">
            <Image
              src="/brand/first-100.png"
              alt="Be one of the first 100 - Sign the wall"
              width={478}
              height={674}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <span className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-text-tertiary">
            Scan to sign the wall
          </span>
        </div>

        {/* Right Column: Encouraging Headline, Copy & Action Buttons */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="inline-block rounded-full bg-orange/15 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-orange">
              Be the First 100 Members
            </span>

            <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-cream drop-shadow-md leading-tight">
              Leave your mark: <span className="text-gradient">Sign on the Founding Wall</span>
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {/* Android Button */}
            <a
              href={site.wallAndroidUrl}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border-2 border-plum-ink bg-orange p-3.5 sm:p-4 text-plum-ink shadow-[0_5px_0px_#302547] transition hover:-translate-y-0.5 hover:bg-[#FFAF70] hover:shadow-[0_7px_0px_#302547] active:translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GooglePlayIcon className="h-5 w-5" />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                    Sign Wall on Android
                  </span>
                </div>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <span className="mt-1.5 text-[10px] font-mono font-bold tracking-tight opacity-85">
                plans.drophouse.club/wall
              </span>
            </a>

            {/* iOS & Web Button */}
            <a
              href={site.wallIosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border-2 border-white/20 bg-accent p-3.5 sm:p-4 text-white shadow-[0_5px_0px_#27005e] transition hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_7px_0px_#27005e] active:translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AppleIcon className="h-5 w-5" />
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                    Sign Wall on iOS &amp; Web
                  </span>
                </div>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
              <span className="mt-1.5 text-[10px] font-mono font-bold tracking-tight text-white/85">
                joinplansnow.web.app/wall
              </span>
            </a>
          </div>

          {/* Footer note */}
          <div className="mt-5 border-t border-stroke/50 pt-3.5 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono uppercase text-text-tertiary">
            <span className="tracking-wider text-text-secondary">
              Free to claim · Founding Member badge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
