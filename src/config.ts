export const SITE = {
  website: "https://rudygalan.com/",
  author: "Rudy Galan",
  profile: "https://rudygalan.com/",
  desc: "Systems, blueprints, and analysis from first principles.",
  title: "Rudy Galan Portal",
  // TODO: replace public/astropaper-og.jpg with your own 1200x630 fallback card
  ogImage: "astropaper-og.jpg",
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
  { href: "/posts", linkText: "Lab", active: true },
  { href: "/library", linkText: "Library", active: true },
  { href: "/shop", linkText: "Shop", active: true },
  { href: "/about", linkText: "Profile", active: true },
];