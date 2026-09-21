import Image from "next/image";
import Link from "next/link";
import { PhoneShot } from "@/components/screenshot";
import { site } from "@/components/site";
import {
  AndroidIcon,
  AppleIcon,
  ArrowRightIcon,
  BellIcon,
  BrowserIcon,
  CalendarIcon,
  CameraIcon,
  ChatIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  LockIcon,
  PeopleIcon,
  PinIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/icons";

const steps = [
  {
    n: "01",
    icon: SparkIcon,
    title: "Say what you want to do",
    body: "Coffee at 6. A badminton court. Someone to see the late show with. One line of intent - no caption, no audience.",
    shot: {
      src: "/screenshots/create-plan.png",
      label: "Create plan",
      caption: "Activity, time, place, group size.",
    },
  },
  {
    n: "02",
    icon: CompassIcon,
    title: "Find the people who want it too",
    body: "Discover and the nearby map surface people and plans around you right now, filtered by interest, distance and time.",
    shot: {
      src: "/screenshots/nearby-map.png",
      label: "Nearby map",
      caption: "Live plans within walking distance.",
    },
  },
  {
    n: "03",
    icon: ChatIcon,
    title: "Lock it in and coordinate",
    body: "Join a plan and you land in a room with everyone going. It exists to settle the details, then it closes itself.",
    shot: {
      src: "/screenshots/plan-chat.png",
      label: "Plan chat",
      caption: "A room that ends when the plan does.",
    },
  },
  {
    n: "04",
    icon: CameraIcon,
    title: "Meet, then keep the moment",
    body: "Afterwards, save a moment with the people who came. That is the feed - proof you went, not proof you posted.",
    shot: {
      // Drop /screenshots/moments.png in and set src here.
      src: "/screenshots/moments.png",
      label: "Moments",
      caption: "Your record of things you actually did.",
    },
  },
];

const features = [
  {
    icon: CalendarIcon,
    title: "Plans, things you want to do",
    body: "Every object in the app carries a time and a place. If it cannot happen in real life, it does not belong here.",
  },
  {
    icon: PinIcon,
    title: "Nearby, in map and list",
    body: "See what is happening around you at a glance, or scan the list when you just want the next free hour filled.",
  },
  {
    icon: BellIcon,
    title: "Reminders that survive a reboot",
    body: "Join a plan and you get a nudge 30 minutes before and again at start time - scheduled on the device, not in a feed.",
  },
  {
    icon: PeopleIcon,
    title: "Connections you earned",
    body: "Friendships grow out of plans you actually attended together, so your list stays small, real and worth something.",
  },
  {
    icon: SparkIcon,
    title: "An assistant for the blank page",
    body: "Not sure what to do? The plan assistant turns a vague mood into a concrete plan with a time, a place and a group size.",
  },
  {
    icon: ShieldIcon,
    title: "Report and block, one tap deep",
    body: "Safety controls live where the risk is - on every profile, plan and message - not buried four screens into settings.",
  },
];

const privacyPoints = [
  {
    icon: LockIcon,
    title: "Your precise location stays yours",
    body: "Nearby works on approximate distance. We never show your exact position to other people, and never sell location data.",
  },
  {
    icon: ClockIcon,
    title: "Plan rooms are temporary",
    body: "A plan chat exists for the plan. When it is over the room closes, so one evening does not become a permanent record.",
  },
  {
    icon: ShieldIcon,
    title: "No ad-tech middlemen",
    body: "We do not run third-party ad SDKs and we do not build shadow profiles. Read exactly what we collect in the privacy policy.",
  },
];

const faqs = [
  {
    q: "Is Plans another feed I have to keep up with?",
    a: "No. There is nothing to scroll for its own sake. You open the app when you want to do something, and close it once the plan is set.",
  },
  {
    q: "Who can see my plans?",
    a: "You choose per plan: friends only, or open to people nearby who share the interest. Private plans never appear in discovery or on the map.",
  },
  {
    q: "Do I have to share my location?",
    a: "Only if you want the nearby map and distance-based discovery. Deny the permission and the rest of the app still works - you can join plans by invite, search and interest.",
  },
  {
    q: "How do notifications work?",
    a: "Reminders are scheduled locally on your device, so they fire even when you are offline and survive a restart. Every notification is also written to the in-app inbox, so you never lose the record.",
  },
  {
    q: "What does it cost?",
    a: "Plans is free to use. If we ever add a paid tier it will be for extras, and we will say so clearly before anything changes.",
  },
  {
    q: "When can I download it?",
    a: "We are in the final stretch before the public beta on iOS and Android. Leave your email below and the invite lands the day it opens.",
  },
];

const stats = [
  { value: "24", label: "screens, end to end" },
  { value: "4 steps", label: "intent to meet-up" },
  { value: "0", label: "ad trackers" },
  { value: "2", label: "reminders per plan" },
];

/** Structured data: helps the FAQ and the app listing show up properly in search. */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: site.name,
        description: site.description,
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "iOS, Android",
        url: site.url,
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <StatStrip />
      <HowItWorks />
      <Features />
      <Notifications />
      <PrivacyFirst />
      <Faq />
      <Download />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-14rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-12rem] top-40 h-[22rem] w-[22rem] rounded-full bg-[#2fc1b5]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl animate-rise text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/70 px-3.5 py-1.5 text-xs text-text-secondary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            Public beta opening soon on iOS &amp; Android
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Make plans, <span className="text-gradient">things you want to do</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
            {site.name} is a social app for real life. Say what you want to do, find the
            people who want the same thing, and turn it into something that actually
            happens tonight.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#download"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-16px_var(--color-accent)] transition hover:bg-accent-soft sm:w-auto"
            >
              Get early access
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#how"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stroke bg-surface/60 px-6 py-3.5 text-sm font-medium text-text-primary transition hover:border-accent/50 hover:bg-surface sm:w-auto"
            >
              See how it works
            </Link>
          </div>

          <p className="mt-5 text-xs text-text-tertiary">
            Free to use · No ads · No endless scroll
          </p>
        </div>

        <div className="relative mt-16 flex items-end justify-center gap-4 sm:mt-20 sm:gap-8">
          <PhoneShot
            src="/screenshots/discover.png"
            label="Discover"
            caption="People and plans near you."
            className="hidden w-[13rem] translate-y-8 -rotate-6 opacity-90 md:block"
          />
          <PhoneShot
            src="/screenshots/home.png"
            label="Home"
            caption="Everything you said yes to."
            className="z-10 animate-float"
            priority
          />
          <PhoneShot
            src="/screenshots/plan-chat.png"
            label="Plan chat"
            caption="Sort the details, then meet."
            className="hidden w-[13rem] translate-y-8 rotate-6 opacity-90 md:block"
          />
        </div>
      </div>
    </section>
  );
}

function StatStrip() {
  return (
    <section className="border-y border-stroke bg-ink-soft/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 text-center lg:px-6">
            <p className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-xs text-text-tertiary sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-pretty leading-relaxed text-text-secondary">{body}</p>
      ) : null}
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps from a thought to a table for three."
          body="The whole app is one loop. Nothing in it exists to keep you on your phone longer than it takes to make the plan."
        />

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const flip = i % 2 === 1;
            return (
              <div key={step.n} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={flip ? "md:order-2" : undefined}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-sm text-text-tertiary">{step.n}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-text-secondary">{step.body}</p>
                </div>

                <div
                  className={
                    flip ? "flex justify-center md:order-1" : "flex justify-center"
                  }
                >
                  {/* Needs an explicit width: it is the flex item, and the
                      frame inside it sizes with w-full. */}
                  <div className="relative w-full max-w-[17rem]">
                    <div className="pointer-events-none absolute -inset-10 rounded-full bg-accent/10 blur-3xl" />
                    <PhoneShot
                      src={step.shot.src}
                      label={step.shot.label}
                      caption={step.shot.caption}
                      className="relative"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-y border-stroke bg-ink-soft/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Built for the part of socialising that happens offline."
          body="Every feature answers one question: does this help two people end up in the same place at the same time?"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-stroke bg-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-stroke bg-surface-high text-accent-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {f.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Notifications() {
  const points = [
    "Two reminders per plan: 30 minutes before, and at start time.",
    "Scheduled on device, so they work offline and survive a restart.",
    "Tap one and you land straight inside that plan.",
    "Permission is asked once, on a screen that explains why.",
    "Every alert is mirrored to the in-app inbox, so nothing is lost.",
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
            Reminders
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The plan reminds you. Not an algorithm.
          </h2>
          <p className="mt-5 leading-relaxed text-text-secondary">
            Notifications exist to get you out the door on time - nothing else. No
            re-engagement pings, no &ldquo;someone you may know&rdquo; at 11pm.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {points.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-success/15 text-success">
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
                <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[17rem]">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-accent/10 blur-3xl" />
            <PhoneShot
              src="/screenshots/notifications.png"
              label="Notifications and inbox"
              caption="Plans, People and Plan chat channels."
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyFirst() {
  return (
    <section
      id="privacy-first"
      className="scroll-mt-24 border-y border-stroke bg-ink-soft/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Privacy by design"
          title="Meeting strangers should feel safe, not exposing."
          body="Plans runs on the smallest amount of data that makes a meet-up work - and all of it is written down in plain language."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {privacyPoints.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="rounded-2xl border border-stroke bg-surface/60 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-stroke bg-surface-high text-accent-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">{p.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-3 text-sm text-text-primary transition hover:border-accent/50"
          >
            Read the Privacy Policy
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-3 text-sm text-text-primary transition hover:border-accent/50"
          >
            Read the Terms
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions people actually ask." />

        <div className="mt-12 divide-y divide-stroke border-y border-stroke">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-[15px] font-medium text-text-primary">
                {faq.q}
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-stroke text-text-secondary transition group-open:rotate-45 group-open:border-accent/50 group-open:text-accent-soft">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5.5v13M5.5 12h13" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl pr-10 text-sm leading-relaxed text-text-secondary">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Download() {
  const stores = [
    { Icon: AppleIcon, top: "Coming soon to", bottom: "the App Store" },
    { Icon: AndroidIcon, top: "Coming soon to", bottom: "Google Play" },
  ];

  return (
    <section id="download" className="scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-stroke bg-[linear-gradient(140deg,#16131f_0%,#0f0f16_50%,#131a20_100%)] px-6 py-16 text-center sm:px-14">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[110px]" />

        <div className="relative">
          <Image
            src="/app-icon.png"
            alt=""
            width={72}
            height={72}
            className="mx-auto mb-6 h-18 w-18 rounded-[1.25rem] shadow-[0_18px_40px_-16px_var(--color-accent)]"
          />
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Your next free evening is already there.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-text-secondary">
            Join the beta list and the invite arrives the day {site.name} opens in your
            city. Or skip the wait entirely - {site.name} already runs in your browser.
          </p>

          <a
            href={site.webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_40px_-16px_var(--color-accent)] transition hover:bg-accent-soft"
          >
            <BrowserIcon className="h-4 w-4" />
            Open {site.name} in your browser
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Swap `action` for your real signup endpoint when one exists. */}
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            action={"mailto:" + site.supportEmail}
            method="post"
            encType="text/plain"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-full border border-stroke bg-ink/80 px-5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/60 focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-accent px-6 text-sm font-medium text-white transition hover:bg-accent-soft"
            >
              Request an invite
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {stores.map(({ Icon, top, bottom }) => (
              <span
                key={bottom}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-stroke bg-surface/70 px-5 py-3 text-left sm:w-auto"
              >
                <Icon className="h-6 w-6 text-text-primary" />
                <span className="leading-tight">
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-text-tertiary">
                    {top}
                  </span>
                  <span className="block text-sm font-medium text-text-primary">{bottom}</span>
                </span>
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs text-text-tertiary">
            We only use your email for the beta invite. See the{" "}
            <Link
              href="/privacy"
              className="text-text-secondary underline underline-offset-2 hover:text-text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
