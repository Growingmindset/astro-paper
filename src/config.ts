export const SITE = {
  website: "https://rudygalan.com/",
  author: "Rudy Galan",
  profile: "https://rudygalan.com/",
  desc: "Integrated OS: Systems-oriented builds in Physics, Engineering, and Business Logic.",
  title: "Rudy Galan",
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
};

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

export const NAV_ITEMS = [
  {
    href: "/posts",
    linkText: "The Lab",
  },
  {
    href: "/archives",
    linkText: "The Archive",
  },
  {
    href: "/about",
    linkText: "The Library",
  },
  {
    href: "/tags",
    linkText: "Tags",
  },
];
