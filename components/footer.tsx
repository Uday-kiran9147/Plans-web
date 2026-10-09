import Link from "next/link";
import { LogoMark } from "./icons";
import { site } from "./site";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#how", label: "How it works" },
      { href: "/#features", label: "Features" },
      { href: "/#privacy-first", label: "Privacy by design" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/child-safety", label: "Child Safety Standards" },
    ],
  },
  {
    title: "Contact",
    links: [{ href: `mailto:${site.supportEmail}`, label: site.supportEmail }],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-stroke bg-ink-soft">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="text-[17px] font-bold tracking-tight text-cream">{site.name}</span>
            </Link>
            <p className="mt-3 sm:mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-text-secondary">
              {site.tagline} A social app built around meeting up, not scrolling.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-tertiary">
                {col.title}
              </h3>
              <ul className="mt-3 sm:mt-4 flex flex-col gap-2 sm:gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-text-secondary transition hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-stroke pt-6 text-xs text-text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
          <p>Made for people who actually show up.</p>
        </div>
      </div>
    </footer>
  );
}
