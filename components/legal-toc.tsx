"use client";

import { useEffect, useState } from "react";
import type { Section } from "./legal";

/** Height of the fixed header, plus a little breathing room. */
const OFFSET = 120;

/**
 * Table of contents that tracks the section you are reading.
 *
 * Position-based rather than IntersectionObserver: the active item is the last
 * heading that has scrolled past the header. A section taller than the viewport
 * would leave an observer band empty and drop the highlight; this cannot.
 */
export function LegalToc({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const update = () => {
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= OFFSET) current = s.id;
        else break;
      }

      // At the very bottom the last section may never reach the offset.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (atBottom) current = sections[sections.length - 1]?.id ?? current;

      setActive(current);
    };

    // Called straight from the scroll event rather than via rAF: a couple of
    // dozen rect reads are cheap, and rAF is starved in a background tab.
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  return (
    <nav className="mt-4 flex flex-col gap-1.5 border-l border-stroke pl-4">
      {sections.map((s) => {
        const isActive = s.id === active;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={isActive ? "location" : undefined}
            className={`-ml-4 border-l-2 pl-4 text-sm leading-snug transition ${
              isActive
                ? "border-accent text-text-primary"
                : "border-transparent text-text-secondary hover:text-accent-soft"
            }`}
          >
            {s.title}
          </a>
        );
      })}
    </nav>
  );
}
