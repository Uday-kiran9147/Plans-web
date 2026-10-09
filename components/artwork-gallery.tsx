import Image from "next/image";

const artworks = [
  {
    pillar: "PILLAR 01",
    sub: "PRESENCE",
    title: "GET TOGETHER",
    img: "/brand/meetup.png",
    alt: "Three friends meeting at a cafe table with racket",
    desc: "Real eye contact, unhurried afternoon banter, and spontaneous plans. A table for three where nobody is scrolling.",
    footerAsset: "MEETUP.PNG",
    footerStatus: "CONFIRMED 6:00 PM",
    statusColor: "text-burnt-orange",
  },
  {
    pillar: "PILLAR 02",
    sub: "ACTION",
    title: "MAKE IT HAPPEN",
    img: "/brand/activities.png",
    alt: "Coffee, board games and badminton tools",
    desc: "Espresso, dice, shuttlecocks, tennis rackets. The tactile tools of a well-spent weekend. One line of intent turns into real games.",
    footerAsset: "ACTIVITIES.PNG",
    footerStatus: "ZERO IDLE MINUTES",
    statusColor: "text-accent",
  },
  {
    pillar: "PILLAR 03",
    sub: "EVIDENCE",
    title: "KEEP THE GOOD DAYS",
    img: "/brand/memories.png",
    alt: "Friends in keepsake photo cards and tickets",
    desc: "Photo keepsakes and location passes. Your feed is not a public broadcast; it is an undeniable vault of things you actually did.",
    footerAsset: "MEMORIES.PNG",
    footerStatus: "PERMANENT VALUE",
    statusColor: "text-burnt-orange",
  },
];

export function ArtworkGallery() {
  return (
    <section id="artwork" className="scroll-mt-24 border-y border-stroke bg-ink-soft/40 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Art Direction
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            The Trifecta of Living Well
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-text-secondary text-sm sm:text-base">
            Hand-cut paper silhouettes, expressive adult characters, confident plum ink, and tactile risograph texture.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((art) => (
            <article
              key={art.title}
              className="group relative flex flex-col rounded-[1.75rem] sm:rounded-[2.2rem] border-3 border-plum-ink bg-cream p-5 sm:p-7 md:p-8 text-plum-ink shadow-[0_10px_0px_#302547,0_16px_25px_rgba(48,37,71,0.2)] sm:shadow-[0_12px_0px_#302547,0_20px_30px_rgba(48,37,71,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_0px_#302547,0_24px_35px_rgba(48,37,71,0.3)]"
            >
              <div className="font-mono text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-burnt-orange">
                <span>{art.pillar}</span> • <span>{art.sub}</span>
              </div>

              <h3 className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold uppercase tracking-tight text-plum-ink">
                {art.title}
              </h3>

              {/* Artwork Box */}
              <div className="relative mt-4 sm:mt-5 flex h-48 sm:h-56 md:h-60 w-full items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl border-2 border-dashed border-plum-ink/25 bg-cream-light p-3 sm:p-4 transition-colors group-hover:bg-[#FFF5DE]">
                <div className="relative h-full w-full">
                  <Image
                    src={art.img}
                    alt={art.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain drop-shadow-[2px_6px_0px_rgba(48,37,71,0.12)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
                  />
                </div>
              </div>

              <p className="mt-4 sm:mt-5 flex-1 text-xs sm:text-sm leading-relaxed text-plum-ink/85">
                {art.desc}
              </p>

              <div className="mt-5 sm:mt-6 flex items-center justify-between border-t-2 border-dashed border-plum-ink/20 pt-3.5 sm:pt-4 font-mono text-[10px] sm:text-[11px] font-extrabold text-plum-ink">
                <span>ASSET: {art.footerAsset}</span>
                <span className={art.statusColor}>{art.footerStatus}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
