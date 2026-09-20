import Link from "next/link";
import { site } from "./site";
import { ArrowRightIcon } from "./icons";

export type Section = { id: string; title: string };

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
            <nav className="mt-4 flex flex-col gap-1.5 border-l border-stroke pl-4">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm leading-snug text-text-secondary transition hover:text-accent-soft"
                >
                  {s.title}
                </a>
              ))}
            </nav>

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

            <div className="mt-14 flex flex-col gap-3 rounded-2xl border border-stroke bg-surface/60 p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="m-0 text-sm text-text-secondary">
                Looking for the other document?
              </p>
              <Link
                href={kind === "Privacy" ? "/terms" : "/privacy"}
                className="inline-flex items-center gap-2 self-start rounded-full border border-stroke bg-ink px-4 py-2.5 text-sm font-medium text-text-primary no-underline transition hover:border-accent/50 sm:self-auto"
              >
                {kind === "Privacy" ? "Terms & Conditions" : "Privacy Policy"}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

/** Small callout used at the top of both documents. */
export function TemplateNotice() {
  return (
    <div className="mb-10 rounded-2xl border border-warning/30 bg-warning/5 p-5">
      <p className="m-0 text-sm leading-relaxed text-text-secondary">
        <strong className="text-warning">Before you publish:</strong> this document is a
        starting draft written around how {site.name} actually works. Fill in the
        bracketed details (legal entity, address, store links) and have a lawyer review
        it against the rules that apply where you operate.
      </p>
    </div>
  );
}
