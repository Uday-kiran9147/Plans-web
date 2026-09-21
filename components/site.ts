/** Single source of truth for the copy that shows up in more than one place. */
export const site = {
  name: "Plans",
  tagline: "Make plans, things you want to do.",
  description:
    "Plans is a social app for real life. Say what you want to do, find the people who want the same thing, and turn it into a plan that actually happens.",
  /** Canonical origin. Change this if the site moves to a custom domain. */
  url: "https://joinplans.vercel.app",
  /**
   * The Flutter web build, on Firebase Hosting. A real product, not a
   * landing-page trick - the same account, the same plans, no store queue.
   * Update this if the web app ever moves to a custom domain.
   */
  webAppUrl: "https://joinplansnow.web.app",
  /** One address for everything: support, privacy requests, legal. */
  supportEmail: "thehustler.dev@gmail.com",
  privacyEmail: "thehustler.dev@gmail.com",
  /** Published on /child-safety and given to Google Play. Must be monitored. */
  childSafetyEmail: "thehustler.dev@gmail.com",
  company: "Plans",
  jurisdiction: "Telangana, India",
  lastUpdated: "20 September 2026",
  /** Same date, machine-readable, for sitemap lastmod. */
  lastUpdatedIso: "2026-09-20",
  effectiveDate: "20 September 2026",
} as const;

export const nav = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#privacy-first", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
] as const;
