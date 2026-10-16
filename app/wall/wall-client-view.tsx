"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AppleIcon,
  ArrowRightIcon,
  BrowserIcon,
  GooglePlayIcon,
  LogoMark,
  SparkIcon,
} from "@/components/icons";
import { site } from "@/components/site";
import { detectMobilePlatform } from "@/components/sign-wall-link";

export function WallClientView() {
  const [platform, setPlatform] = useState<"ios" | "android" | "other">("other");

  useEffect(() => {
    const p = detectMobilePlatform();
    setPlatform(p);
    if (p === "ios") {
      window.location.replace(site.wallIosUrl);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-cream selection:bg-orange selection:text-plum-ink">
      {/* Background ambience */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-40 h-[18rem] w-[18rem] rounded-full bg-orange/15 blur-[100px]" />

      {/* Top bar */}
      <header className="relative z-10 border-b border-stroke/70 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 transition hover:opacity-90">
            <LogoMark className="h-8 w-8" />
            <span className="text-base font-bold tracking-tight text-cream">{site.name}</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-stroke bg-surface/70 px-3.5 py-1.5 text-xs font-semibold text-text-secondary transition hover:border-orange/50 hover:bg-surface hover:text-cream"
          >
            ← Back to website
          </Link>
        </div>
      </header>

      {/* Main hero */}
      <main className="relative z-10 mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/40 bg-orange/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-orange">
          <SparkIcon className="h-3.5 w-3.5" />
          Founding Member Signboard · First 100 Spots
        </span>

        <h1 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Stamp your mark on the <span className="text-gradient">Founding Wall</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-text-secondary sm:text-base font-medium">
          Be one of the first 100 founding members to leave a permanent mark on Plans.
          Sign the wall today, claim your spot, and earn your permanent Founding Member badge:
        </p>

        {/* Live Sign Wall Reel Preview */}
        <div className="mt-6 mx-auto flex w-full max-w-[200px] sm:max-w-[220px] flex-col items-center">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.5rem] border-2 border-orange/50 bg-ink-soft shadow-[0_12px_35px_rgba(0,0,0,0.7)] ring-2 ring-orange/20">
            <video
              src="/video/plans-signwall-reel.mp4"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              className="h-full w-full object-cover"
              aria-label="Plans Founding Sign Wall live walkthrough preview"
            />
            <div className="pointer-events-none absolute left-2.5 top-2.5 rounded-full bg-orange px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-plum-ink shadow">
              Live Wall
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
          {/* Android Card */}
          <div
            className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-surface/70 p-6 transition duration-300 hover:border-orange/60 ${
              platform === "android"
                ? "border-orange ring-2 ring-orange/30 shadow-[0_0_30px_rgba(255,155,80,0.2)]"
                : "border-stroke"
            }`}
          >
            {platform === "android" ? (
              <span className="absolute right-4 top-4 rounded-full bg-orange px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-plum-ink">
                Your Device
              </span>
            ) : null}

            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stroke bg-surface-high text-cream">
                <GooglePlayIcon className="h-5 w-5 text-orange" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-cream">Android Version</h2>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-text-secondary">
                Opens directly in the Plans Android app via App Link.
              </p>
              <div className="mt-2 font-mono text-[11px] text-text-tertiary">
                plans.drophouse.club/wall
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={site.wallAndroidUrl}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-plum-ink bg-orange px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-plum-ink shadow-[0_4px_0px_#302547] transition hover:bg-[#FFAF70] active:translate-y-0.5"
              >
                Sign Wall on Android
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[11px] text-text-tertiary underline underline-offset-4 hover:text-text-secondary"
              >
                Need the app? Get on Google Play
              </a>
            </div>
          </div>

          {/* iOS & Web Card */}
          <div
            className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-surface/70 p-6 transition duration-300 hover:border-accent-soft ${
              platform === "ios"
                ? "border-accent ring-2 ring-accent/30 shadow-[0_0_30px_rgba(106,0,244,0.3)]"
                : "border-stroke"
            }`}
          >
            {platform === "ios" ? (
              <span className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Your Device
              </span>
            ) : null}

            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stroke bg-surface-high text-cream">
                <AppleIcon className="h-5 w-5 text-cream" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-cream">iOS &amp; Web Version</h2>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-text-secondary">
                Opens directly in Safari / your web browser on iPhone, iPad &amp; web.
              </p>
              <div className="mt-2 font-mono text-[11px] text-text-tertiary">
                joinplansnow.web.app/wall
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={site.wallIosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_12px_30px_-10px_var(--color-accent)] transition hover:bg-accent-soft active:translate-y-0.5"
              >
                Sign Wall on iOS / Web
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <span className="text-center text-[11px] text-text-tertiary">
                No store download required
              </span>
            </div>
          </div>
        </div>

        {/* App details notice */}
        <div className="mt-12 rounded-xl border border-stroke/60 bg-ink-soft/60 p-4 text-xs text-text-tertiary">
          First 100 spots receive the Founding Member badge and stamp on the signboard.
        </div>
      </main>
    </div>
  );
}
