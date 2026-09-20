/** Single source of truth for the copy that shows up in more than one place. */
export const site = {
  name: "Plans",
  tagline: "Make plans, not posts.",
  description:
    "Plans is a social app for real life. Say what you want to do, find the people who want the same thing, and turn it into a plan that actually happens.",
  url: "https://plansapp.example",
  /** One address for everything: support, privacy requests, legal. */
  supportEmail: "thehustler.dev@gmail.com",
  privacyEmail: "thehustler.dev@gmail.com",
  company: "Plans",
  jurisdiction: "Telangana, India",
  lastUpdated: "20 September 2026",
  effectiveDate: "20 September 2026",
} as const;

export const nav = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#privacy-first", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
] as const;
