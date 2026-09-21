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
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="text-[17px] font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              {site.tagline} A social app built around meeting up, not scrolling.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-tertiary">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition hover:text-text-primary"
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
