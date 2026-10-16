"use client";

import { useEffect, useState } from "react";
import { site } from "./site";

export type MobilePlatform = "ios" | "android" | "other";

export function detectMobilePlatform(): MobilePlatform {
  if (typeof window === "undefined") return "other";
  const ua = navigator.userAgent || "";
  if (/iPad|iPhone|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

export function getWallUrl(platform: MobilePlatform): string {
  if (platform === "ios") return site.wallIosUrl;
  if (platform === "android") return site.wallAndroidUrl;
  return "/wall";
}

export function useWallUrl() {
  const [platform, setPlatform] = useState<MobilePlatform>("other");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPlatform(detectMobilePlatform());
    setMounted(true);
  }, []);

  const url = mounted ? getWallUrl(platform) : "/wall";

  return { url, platform, mounted };
}
