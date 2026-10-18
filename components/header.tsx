"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { LogoMark } from "./icons";
import { nav, site } from "./site";
import { useWallUrl } from "./sign-wall-link";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { url: wallUrl } = useWallUrl();
  const [downloadHref, setDownloadHref] = useState("/download");

  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/Android/i.test(ua)) {
      setDownloadHref(site.playStoreUrl);
    } else {
      setDownloadHref(site.webAppUrl);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close mobile menu on resize to desktop breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // Track active section on the homepage
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sectionIds = nav
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => item.href.replace("/#", ""));

    const onScrollSpy = () => {
      const scrollPosition = window.scrollY + 140;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    onScrollSpy();
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", onScrollSpy);
  }, [pathname]);

  // Handle hash scrolling on direct navigation or mount
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // Handle clicking anchor links smoothly
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetHref: string) => {
      setOpen(false);

      if (targetHref.startsWith("/#") && pathname === "/") {
        const id = targetHref.replace("/#", "");
        const targetElement = document.getElementById(id);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", targetHref);
          setActiveSection(id);
        }
      }
    },
    [pathname]
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "glass border-b border-stroke/80" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={(e) => {
            setOpen(false);
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
              setActiveSection("");
            }
          }}
        >
          <LogoMark className="h-8 w-8" />
          <span className="text-[17px] font-bold tracking-tight text-cream">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
          {nav.map((item) => {
            const isWall = item.href === "/wall";
            const href = isWall ? wallUrl : item.href;
            const isExternal = isWall && href.startsWith("http");
            const isHash = item.href.startsWith("/#");
            const hashId = isHash ? item.href.replace("/#", "") : "";
            const isActive =
              pathname === "/" && isHash
                ? activeSection === hashId || (hashId === "privacy-first" && activeSection === "privacy")
                : pathname === item.href;

            return (
              <Link
                key={item.href}
                href={href}
                onClick={(e) => handleNavClick(e, item.href)}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`rounded-full px-2.5 py-1.5 xl:px-3 text-xs font-semibold transition ${
                  isWall
                    ? isActive
                      ? "bg-orange/20 text-orange font-bold"
                      : "text-orange hover:bg-orange/10 hover:text-orange"
                    : isActive
                    ? "bg-surface text-cream font-bold"
                    : "text-text-secondary hover:bg-surface hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={downloadHref}
            target={downloadHref.startsWith("http") ? "_blank" : undefined}
            rel={downloadHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-full border-2 border-plum-ink bg-orange px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-plum-ink shadow-[0_4px_0px_#302547] transition hover:-translate-y-0.5 hover:bg-[#FFAF70] hover:shadow-[0_6px_0px_#302547] active:translate-y-0.5"
          >
            Get the app
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-stroke bg-surface text-text-primary lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-stroke/70 bg-ink/95 backdrop-blur-2xl px-5 pb-6 pt-3 lg:hidden shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => {
              const isWall = item.href === "/wall";
              const href = isWall ? wallUrl : item.href;
              const isExternal = isWall && href.startsWith("http");
              const isHash = item.href.startsWith("/#");
              const hashId = isHash ? item.href.replace("/#", "") : "";
              const isActive =
                pathname === "/" && isHash
                  ? activeSection === hashId || (hashId === "privacy-first" && activeSection === "privacy")
                  : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-semibold transition hover:bg-surface hover:text-cream active:bg-surface ${
                    isWall
                      ? isActive
                        ? "bg-orange/20 text-orange font-bold"
                        : "text-orange font-bold hover:bg-orange/10"
                      : isActive
                      ? "bg-surface text-cream font-bold"
                      : "text-text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={downloadHref}
              onClick={() => setOpen(false)}
              target={downloadHref.startsWith("http") ? "_blank" : undefined}
              rel={downloadHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-3 rounded-xl border-2 border-plum-ink bg-orange px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-plum-ink shadow-[0_4px_0px_#302547] active:translate-y-0.5"
            >
              Get the app
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
