import Image from "next/image";
import Link from "next/link";
import { site } from "@/components/site";
import { HeroStage } from "@/components/hero-stage";
import { VideoWalkthrough } from "@/components/video-walkthrough";
import { PlanPassStudio } from "@/components/plan-pass-studio";
import { ArtworkGallery } from "@/components/artwork-gallery";
import { ArrowRightIcon, BellIcon, BrowserIcon, ChatIcon, LockIcon, PeopleIcon, ShieldIcon, SparkIcon } from "@/components/icons";

const steps = [
  { icon: SparkIcon, title: "Pick something fun", body: "Coffee, games, sports. Start a plan or join one." },
  { icon: PeopleIcon, title: "Meet your people", body: "Chat with people who want to do the same thing." },
  { icon: ChatIcon, title: "Hang out", body: "Get together, share a laugh, and make some memories." },
];

const faqs = [
  { q: "Is Plans free?", a: "Yes. Plans is free to use." },
  { q: "Where can I use it?", a: "On Android or in your browser. The iOS app is coming soon; iPhone users can use the web version." },
  { q: "Can I make my own plan?", a: "Yes. Pick something you want to do, add a time and place, and invite people to join." },
  { q: "Who can see my plans?", a: "Keep a plan friends-only or let others join. Private plans stay off the public map." },
  { q: "Do I need to share my location?", a: "Only to find plans nearby. You can still search and join by invite without it." },
];

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: site.name,
        description: site.description,
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "Android, Web",
        downloadUrl: site.playStoreUrl,
        url: site.url,
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <section className="relative overflow-hidden py-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium text-orange">Coffee. Games. Sports. Good company.</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              Meet people.<br /><span className="text-gradient">Hang out.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-text-secondary lg:mx-0 sm:text-lg">
              Make new friends over coffee, games, or whatever you&apos;re into.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="#download" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-base font-semibold text-plum-ink transition hover:bg-[#FFAF70] sm:w-auto">
                Get started <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link href="#watch" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-stroke bg-surface/60 px-6 py-3 text-base font-medium transition hover:border-orange sm:w-auto">
                Watch how it works
              </Link>
            </div>
            <p className="mt-4 text-sm text-text-secondary">Free to use · Android &amp; web</p>
          </div>
          <HeroStage />
        </div>
      </section>

      <section id="how" className="scroll-mt-24 border-y border-stroke bg-ink-soft/40 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Meet up in 3 steps.</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-stroke bg-surface/60 p-6">
                <div className="flex items-center justify-between">
                  <step.icon className="h-7 w-7 text-orange" />
                  <span className="text-sm font-semibold text-text-secondary">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-text-secondary">{step.body}</p>
              </li>
            ))}
          </ol>
          <div id="features" className="mt-7 flex scroll-mt-24 flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-text-secondary">
            <p className="flex items-center gap-2"><SparkIcon className="h-4 w-4 text-orange" />Create your own plans</p>
            <p className="flex items-center gap-2"><BellIcon className="h-4 w-4 text-orange" />Get a reminder before you go</p>
            <p className="flex items-center gap-2"><ChatIcon className="h-4 w-4 text-orange" />Chat with your group</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <VideoWalkthrough />
      </div>

      <section id="privacy-first" className="relative scroll-mt-24 py-12 sm:py-16">
        <span id="privacy" className="absolute top-0 scroll-mt-24" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">You stay in control.</h2>
          <div className="mt-7 grid gap-5 text-base md:grid-cols-3">
            <p className="flex items-start gap-3"><LockIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />Your exact location stays private.</p>
            <p className="flex items-start gap-3"><ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />Block or report from inside the app.</p>
            <p className="flex items-start gap-3"><PeopleIcon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />Choose who can see each plan.</p>
          </div>
          <p className="mt-6 text-center"><Link href="/privacy" className="text-sm text-text-secondary underline underline-offset-4 hover:text-cream">Privacy policy</Link></p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-y border-stroke bg-ink-soft/40 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Quick answers.</h2>
          <div className="mt-7 divide-y divide-stroke">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                  {faq.q}<span aria-hidden="true" className="text-2xl text-orange transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pr-6 text-base leading-relaxed text-text-secondary">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-stroke bg-surface/60 px-5 py-10 text-center sm:p-12">
          <Image src="/app-icon.png" alt="" width={64} height={64} className="mx-auto mb-5 rounded-2xl" />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to hang out?</h2>
          <p className="mt-3 text-base text-text-secondary">Get the Android app or start in your browser.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center rounded-lg transition hover:scale-105">
              <Image src="/playstore-button.png" alt="Get it on Google Play" width={5984} height={2087} className="h-14 w-auto" />
            </a>
            <a href={site.webAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-stroke bg-cream px-6 py-3 text-base font-semibold text-plum-ink transition hover:bg-cream-light">
              <BrowserIcon className="h-5 w-5" />Open web app
            </a>
          </div>
          <p className="mt-5 text-sm text-text-secondary">On iPhone? Use the web app. iOS app coming soon.</p>
          <p className="mt-6 border-t border-stroke pt-5 text-sm text-text-secondary">
            Here early? <Link href="/wall" className="text-orange underline underline-offset-4">Sign the founding wall</Link>
          </p>
        </div>
      </section>

      <section aria-label="More to explore" className="mx-auto max-w-6xl px-5 pb-12 sm:px-8">
        <details className="rounded-2xl border border-stroke">
          <summary className="cursor-pointer px-5 py-4 text-base font-medium">Try making a sample plan</summary>
          <PlanPassStudio />
        </details>
        <details className="mt-3 rounded-2xl border border-stroke">
          <summary className="cursor-pointer px-5 py-4 text-base font-medium">More about Plans</summary>
          <ArtworkGallery />
        </details>
      </section>
    </>
  );
}
