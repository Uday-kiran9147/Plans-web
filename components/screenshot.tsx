import Image from "next/image";

/**
 * Screenshot placeholders.
 *
 * Drop real screenshots into `public/screenshots/` and pass the path as `src`:
 *   <PhoneShot src="/screenshots/home.png" label="Home" />
 * Until then the frame renders a labelled placeholder at the right aspect
 * ratio, so the layout never shifts when the real images land.
 */
type ShotProps = {
  /** e.g. "/screenshots/home.png" — leave undefined to show the placeholder. */
  src?: string;
  label: string;
  caption?: string;
  className?: string;
  priority?: boolean;
};

function Placeholder({ label, caption }: { label: string; caption?: string }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden bg-[linear-gradient(160deg,#16161f_0%,#101017_55%,#171326_100%)] px-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] grid-bg"
        style={{ backgroundSize: "34px 34px" }}
      />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-accent/50 bg-accent/10">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-accent-soft"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
          <path d="m5 16 4.2-4.2 3 3 2.6-2.6L19 16" />
          <circle cx="9" cy="9.4" r="1.2" />
        </svg>
      </div>
      <div className="relative">
        <p className="text-sm font-medium text-text-primary">{label}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
          Screenshot coming soon
        </p>
        {caption ? (
          <p className="mt-3 max-w-[15rem] text-xs leading-relaxed text-text-secondary">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/** Phone-shaped frame, 9:19.5 like a modern handset. */
export function PhoneShot({
  src,
  label,
  caption,
  className = "",
  priority = false,
}: ShotProps) {
  return (
    <div
      className={`relative aspect-[9/20] w-full max-w-[17rem] rounded-[2.5rem] border border-stroke bg-surface p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      {/* Real captures ship with their own status bar, so the fake notch only
          belongs on the placeholder. */}
      {src ? null : (
        <div className="absolute left-1/2 top-3.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
      )}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-ink-soft">
        {src ? (
          <Image
            src={src}
            alt={label}
            fill
            sizes="(max-width: 768px) 70vw, 272px"
            className="object-cover"
            priority={priority}
          />
        ) : (
          <Placeholder label={label} caption={caption} />
        )}
      </div>
    </div>
  );
}

/** Wide frame for tablet / feature shots, 16:10. */
export function WideShot({ src, label, caption, className = "" }: ShotProps) {
  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-stroke bg-surface shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 92vw, 560px"
          className="object-cover"
        />
      ) : (
        <Placeholder label={label} caption={caption} />
      )}
    </div>
  );
}
