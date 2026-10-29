export const SITE = {
  website: "https://rudygalan.com/",
  author: "Rudy Galan",
  profile: "https://rudygalan.com/about",
  title: "Rudy Galan",
  desc: "Essays by Rudy Galan on money, risk, and how people decide when they can't know how it turns out.",
  // Fallback social card for pages without their own. Generated at build time
  // from src/utils/og-templates/site.js.
  ogImage: "og.png",
  dynamicOgImage: true,
  scheduledPostMargin: 15 * 60 * 1000,
  dir: "ltr",
  lang: "en",
  timezone: "America/Chicago",
} as const;

export const LOCALE = {
  lang: "en",
  langTag: ["en-US"],
} as const;

export const CONTACT = {
  email: "growingstateofmind@gmail.com",
  x: "https://x.com/rudygalan",
  linkedin: "https://www.linkedin.com/in/rudy-galan-89262a40b/",
};

// The only two pages in the top bar. Everything else is one click from the
// home page or the footer.
export const navLinks = [
  { href: "/nonzero", linkText: "Nonzero" },
  { href: "/about", linkText: "About" },
];

// One email list for everything: new essays, plus the monthly Nonzero ledger
// once the poker year starts. It runs on beehiiv because that form is the one
// already wired into this site.
//
// To switch providers later, change this block and src/components/Subscribe.astro.
// In beehiiv, rename the publication from "Base Rate" to "Rudy Galan" so the
// confirmation emails match the site (Settings > Publication).
export const NEWSLETTER = {
  formId: "1372f0fc-9eea-41d4-b184-c7e355342850",
  subscribeUrl: "https://rudygalan.beehiiv.com/subscribe",
};

// Mr. Nonzero: the 2027 poker year. Handles live here so the page and the
// footer never drift apart.
export const NONZERO = {
  domain: "mrnonzero.com",
  handles: [
    {
      name: "Instagram",
      handle: "@mr.nonzero",
      href: "https://instagram.com/mr.nonzero",
    },
    {
      name: "TikTok",
      handle: "@mrnonzero",
      href: "https://www.tiktok.com/@mrnonzero",
    },
    {
      name: "YouTube",
      handle: "@mr.nonzero",
      href: "https://www.youtube.com/@mr.nonzero",
    },
    { name: "X", handle: "@mr_nonzero", href: "https://x.com/mr_nonzero" },
  ],
};
