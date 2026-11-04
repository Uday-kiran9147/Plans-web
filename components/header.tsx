"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "./icons";
import { nav, site } from "./site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-stroke/70 bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoMark className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight text-cream">{site.name}</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-sm font-medium text-text-secondary transition hover:text-cream">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={pathname === "/" ? "#download" : "/#download"} onClick={() => setOpen(false)} className="inline-flex min-h-10 items-center rounded-full bg-orange px-4 py-2 text-sm font-semibold text-plum-ink transition hover:bg-[#FFAF70]">
            Get started
          </Link>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} className="flex h-11 w-11 items-center justify-center rounded-xl border border-stroke text-text-primary lg:hidden">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="border-t border-stroke px-5 py-3 lg:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-text-secondary hover:bg-surface hover:text-cream">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
