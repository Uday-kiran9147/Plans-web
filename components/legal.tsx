import Link from "next/link";
import { site } from "./site";
import { ArrowRightIcon } from "./icons";
import { LegalToc } from "./legal-toc";

export type Section = { id: string; title: string };

/** Every published legal document, so each page can link to the others. */
export const documents = [
  { kind: "Privacy", href: "/privacy", label: "Privacy Policy" },
  { kind: "Terms", href: "/terms", label: "Terms & Conditions" },
  { kind: "Child safety", href: "/child-safety", label: "Child Safety Standards" },
] as const;

/**
 * Shared chrome for /privacy and /terms: title block, sticky table of
 * contents, prose column. Each page passes its own sections + body.
 */
export function LegalPage({
  kind,
  title,
  intro,
  sections,
  children,
}: {
  kind: string;
  title: string;
  intro: string;
  sections: Section[];
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
            {kind}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-text-secondary">
            {intro}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-text-tertiary">
            <span className="rounded-full border border-stroke bg-surface px-3 py-1.5">
              Effective {site.effectiveDate}
            </span>
            <span className="rounded-full border border-stroke bg-surface px-3 py-1.5">
              Last updated {site.lastUpdated}
            </span>
          </div>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-tertiary">
              On this page
            </p>
            <LegalToc sections={sections} />

            <div className="mt-8 rounded-2xl border border-stroke bg-surface/60 p-5">
              <p className="text-sm font-medium text-text-primary">Questions?</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Write to us and a person will answer.
              </p>
              <a
                href={`mailto:${site.privacyEmail}`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent-soft hover:text-accent"
              >
                {site.privacyEmail}
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>

          <article className="legal-prose max-w-2xl">
            {children}

            <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-stroke bg-surface/60 p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="m-0 text-sm text-text-secondary">
                Looking for another document?
              </p>
              <div className="flex flex-wrap gap-2">
                {documents
                  .filter((doc) => doc.kind !== kind)
                  .map((doc) => (
                    <Link
                      key={doc.href}
                      href={doc.href}
                      className="inline-flex items-center gap-2 rounded-full border border-stroke bg-ink px-4 py-2.5 text-sm font-medium text-text-primary no-underline transition hover:border-accent/50"
                    >
                      {doc.label}
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
