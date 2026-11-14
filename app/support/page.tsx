import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/components/site";
import {
  ArrowRightIcon,
  ChatIcon,
  HelpCircleIcon,
  LockIcon,
  MailIcon,
  PeopleIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Support & Help Center",
  description: `Get help with ${site.name}, find answers to common questions, report an issue, or contact our support team.`,
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: `Support & Help Center · ${site.name}`,
    description: `Get help with ${site.name}, find answers to common questions, report an issue, or contact our support team.`,
    url: `${site.url}/support`,
  },
};

const supportFaqs = [
  {
    category: "Getting Started",
    q: "How do I create or join a plan?",
    a: "Open Plans and tap 'Create Plan' to pick an activity (like coffee, board games, or running), choose a date, time, and location, and set who can join. To join an existing plan, explore nearby plans on the discovery feed and tap 'Join'.",
  },
  {
    category: "Getting Started",
    q: "Where is Plans available?",
    a: "Plans is available on iOS via the Apple App Store, on Android via Google Play, and across all devices in your web browser at joinplansnow.web.app.",
  },
  {
    category: "Safety & Privacy",
    q: "How do I report or block someone?",
    a: "Tap the three-dot menu (•••) on any member's profile, group chat message, or plan card and select 'Report' or 'Block'. When you block someone, they will immediately be prevented from seeing your plans, messaging you, or joining plans you host. Reports are reviewed by our moderation team.",
  },
  {
    category: "Safety & Privacy",
    q: "Who can see my plans and location?",
    a: "You have full control over each plan's visibility. You can make plans public for nearby discovery, or private for friends only. Your exact live location is never broadcasted—only the meeting location you choose for a plan.",
  },
  {
    category: "Account & Data",
    q: "How do I delete my account and data?",
    a: "You can delete your account directly in the app by going to Profile > Settings > Account > Delete Account. This permanently removes your profile, personal details, hosted plans, and messages. You can also request deletion by emailing hello@drophouse.club with the subject 'Account Deletion Request'.",
  },
  {
    category: "Account & Data",
    q: "I cannot log in or forgot my credentials. What should I do?",
    a: "Use the 'Forgot Password' link on the sign-in screen to receive a reset link. If you signed in using an email that is no longer accessible, contact us at hello@drophouse.club and we will help verify and restore your access.",
  },
];

export default function SupportPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: supportFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000,transparent_75%)]" />
        <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
          {/* Header */}
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">
              Support &amp; Help Center
            </p>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              How can we <span className="text-gradient">help you?</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Have questions, need help with your account, or want to report an issue?
              We are here to support you.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-text-tertiary">
              <span className="rounded-full border border-stroke bg-surface/80 px-4 py-1.5 text-text-secondary">
                Response time: 24–48 hours
              </span>
              <span className="rounded-full border border-stroke bg-surface/80 px-4 py-1.5 text-text-secondary">
                Official contact: {site.supportEmail}
              </span>
            </div>
          </header>

          {/* Quick Channels Grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Email Support Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-stroke bg-surface/60 p-6 sm:p-7">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/15 text-orange">
                  <MailIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-cream">Contact Support</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Questions about your account, app features, or experiencing a bug? Email our support inbox directly.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-stroke/60">
                <a
                  href={`mailto:${site.supportEmail}?subject=Plans%20Support%20Request`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-[#FFAF70]"
                >
                  {site.supportEmail}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Safety & Reporting Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-stroke bg-surface/60 p-6 sm:p-7">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent-soft">
                  <ShieldIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-cream">Safety &amp; Moderation</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Learn about our safety standards, zero tolerance for harassment or CSAE, and how to report content or users.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-stroke/60">
                <Link
                  href="/child-safety"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-soft hover:text-cream"
                >
                  Child Safety &amp; Reporting
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Feedback Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-stroke bg-surface/60 p-6 sm:p-7 sm:col-span-2 lg:col-span-1">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/15 text-orange">
                  <ChatIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-cream">Feedback &amp; Ideas</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Have an idea to make Plans better, or want to share feedback from your latest meetup? We&apos;d love to hear it.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-stroke/60">
                <Link
                  href="/feedback"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange hover:text-[#FFAF70]"
                >
                  Give feedback form
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Account & Data Deletion Policy / Instructions (Google Play Requirement) */}
          <section className="mt-14 rounded-3xl border border-stroke bg-ink-soft/60 p-6 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-3 py-1 text-xs font-semibold text-orange">
                  <LockIcon className="h-3.5 w-3.5" />
                  Account &amp; Data Control
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
                  Request account or data deletion
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                  You have full ownership of your data. You can delete your account and associated
                  personal data directly at any time from inside the app, or submit an email request if
                  you no longer have the app installed.
                </p>
                <div className="mt-4 space-y-2 text-sm text-text-secondary">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-cream">• In-App:</span> Go to Profile → Settings → Account → Delete Account.
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-cream">• By Email:</span> Write to{" "}
                    <a href={`mailto:${site.supportEmail}?subject=Account%20Deletion%20Request`} className="underline hover:text-cream">
                      {site.supportEmail}
                    </a>{" "}
                    from your registered email address with the subject &ldquo;Account Deletion Request&rdquo;.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0">
                <a
                  href={`mailto:${site.supportEmail}?subject=Account%20Deletion%20Request`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-stroke bg-surface px-6 py-3 text-sm font-semibold text-cream transition hover:border-orange hover:text-orange"
                >
                  Request Account Deletion
                </a>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="mt-14">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 text-sm text-text-secondary">
                  Quick answers to common questions about using {site.name}.
                </p>
              </div>

              <div className="mt-8 divide-y divide-stroke rounded-3xl border border-stroke bg-surface/40 px-6 sm:px-8">
                {supportFaqs.map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-cream">
                      <span>{faq.q}</span>
                      <span aria-hidden="true" className="text-2xl text-orange transition group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pr-6 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Help Card */}
          <section className="mt-14 rounded-3xl border border-stroke bg-surface/50 p-8 text-center sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange/15 text-orange">
              <HelpCircleIcon className="h-7 w-7" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
              Didn&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
              Reach out to our team directly. We are happy to help answer any questions or resolve issues.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${site.supportEmail}?subject=Plans%20Support`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-plum-ink transition hover:bg-[#FFAF70]"
              >
                <MailIcon className="h-4 w-4" />
                Email Support ({site.supportEmail})
              </a>
              <Link
                href="/terms"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-stroke bg-surface/60 px-6 py-3 text-sm font-medium text-text-primary transition hover:border-stroke/80"
              >
                Terms of Service
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
