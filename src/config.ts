export const SITE = {
  website: "https://rudygalan.com/",
  author: "Rudy Galan",
  profile: "https://rudygalan.com/",
  desc: "Markets, risk, and decisions. Weekly analysis, a public poker year, and the projects I run, with every call on the record.",
  title: "Rudy Galan",
  // TODO: replace public/astropaper-og.jpg with your own 1200x630 fallback card
  ogImage: "og-portal.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 50,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/Growingmindset/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/Chicago",
} as const;

export const LOCALE = {
  lang: "en",
  langTag: ["en-US"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    name: "X",
    href: "https://x.com/rudygalan",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rudyg_1",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },

  {
    name: "Mail",
    href: "mailto:growingstateofmind@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

export const navLinks = [
  { href: "/newsletter", linkText: "Base Rate", active: true },
  { href: "/nonzero", linkText: "Nonzero", active: true },
  { href: "/writing", linkText: "Writing", active: true },
  { href: "/work", linkText: "Work", active: true },
  { href: "/about", linkText: "About", active: true },
];

// Base Rate newsletter (beehiiv).
// formId is the data-beehiiv-form value from the beehiiv embed code
// (beehiiv > Grow > Subscribe forms > your form > Get embed code).
export const BASE_RATE = {
  name: "Base Rate",
  url: "https://rudygalan.beehiiv.com",
  subscribeUrl: "https://rudygalan.beehiiv.com/subscribe",
  formId: "1372f0fc-9eea-41d4-b184-c7e355342850",
  cadence: "Every Sunday",
};