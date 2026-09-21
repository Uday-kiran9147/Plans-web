import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden px-5 py-32 sm:px-8">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_55%_55%_at_50%_30%,#000,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] h-[22rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto max-w-lg text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-accent-soft">404</p>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          This plan fell through.
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-text-secondary">
          The page you were after does not exist, or it moved somewhere else.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition hover:bg-accent-soft sm:w-auto"
          >
            Back home
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/#faq"
            className="inline-flex w-full items-center justify-center rounded-full border border-stroke bg-surface/60 px-6 py-3.5 text-sm font-medium text-text-primary transition hover:border-accent/50 sm:w-auto"
          >
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
