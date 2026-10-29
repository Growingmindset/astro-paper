import { getCollection, type CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";
import postFilter from "./postFilter";
import { SITE } from "@/config";

export type Post = CollectionEntry<"blog">;

/**
 * Every post lives at the root of the site: rudygalan.com/<slug>.
 * The slug comes from `postSlug` in the frontmatter, or the file name.
 * Folders never appear in the URL, so posts can be reorganized freely
 * without breaking a single link.
 */
export function getSlug(post: Post): string {
  if (post.data.postSlug) return slugifyStr(post.data.postSlug);
  return post.id.split("/").pop() ?? post.id;
}

export function getPostUrl(post: Post): string {
  return `/${getSlug(post)}`;
}

const byNewest = (a: Post, b: Post) =>
  b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime();

/** Every published post, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection("blog");
  return posts.filter(postFilter).sort(byNewest);
}

/** The essays: what the home page lists. */
export async function getEssays(): Promise<Post[]> {
  return (await getPublishedPosts()).filter(p => !p.data.archived);
}

/** Notes, logs and retired programs: kept public, listed in the archive. */
export async function getArchived(): Promise<Post[]> {
  return (await getPublishedPosts()).filter(p => p.data.archived);
}

/** Group posts by the year they were published, newest year first. */
export function groupByYear(posts: Post[]): { year: number; posts: Post[] }[] {
  const groups = new Map<number, Post[]>();
  for (const post of posts) {
    const year = Number(
      post.data.pubDatetime.toLocaleString("en-US", {
        year: "numeric",
        timeZone: post.data.timezone ?? SITE.timezone,
      })
    );
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, posts]) => ({ year, posts }));
}

export function formatMonthYear(post: Post): string {
  return post.data.pubDatetime.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: post.data.timezone ?? SITE.timezone,
  });
}

// Posts with these tags carry market commentary, so they get a one-line
// disclosure under the text.
const FINANCE_TAGS = [
  "finance",
  "macro",
  "market-intel",
  "marketintel",
  "trading",
  "capital",
];

export function isFinancePost(post: Post): boolean {
  return (post.data.tags ?? []).some(t => FINANCE_TAGS.includes(t));
}

/** Curly apostrophes and quotes for titles typed with straight ones. */
export function smartQuotes(text: string): string {
  return text
    .replace(/(^|[\s(—-])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/(^|[\s(—-])'/g, "$1‘")
    .replace(/'/g, "’");
}
