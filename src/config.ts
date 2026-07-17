export const SITE = {
  website: "https://rudygalan.com/",
  author: "Rudy Galan",
  profile: "https://rudygalan.com/",
  desc: "Systems, blueprints, and analysis from first principles.",
  title: "Rudy Galan Portal",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
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
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [];

export const navLinks = [
  { href: "/posts", linkText: "Lab", active: true },
  { href: "/library", linkText: "Library", active: true }, // <-- Updated path
  { href: "/shop", title: "Shop", active: true },
  { href: "/about", linkText: "Profile", active: true }, //added this like
];
