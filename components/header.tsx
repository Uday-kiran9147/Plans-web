"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "./icons";
import { nav, site } from "./site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "glass border-b border-stroke/80" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoMark className="h-8 w-8" />
          <span className="text-[17px] font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#download"
            className="rounded-full bg-accent px-4.5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_-12px_var(--color-accent)] transition hover:bg-accent-soft"
          >
            Get the app
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke bg-surface text-text-primary md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-stroke/70 px-5 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-text-secondary transition hover:bg-surface hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-medium text-white"
            >
              Get the app
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
