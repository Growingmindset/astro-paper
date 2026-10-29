import type { APIRoute } from "astro";
import { generateOgImage } from "@/utils/generateOgImages";
import {
  getPublishedPosts,
  getSlug,
  smartQuotes,
  type Post,
} from "@/utils/posts";
import { SITE } from "@/config";

export async function getStaticPaths() {
  if (!SITE.dynamicOgImage) return [];
  const posts = await getPublishedPosts();
  return posts
    .filter(post => !post.data.ogImage)
    .map(post => ({ params: { slug: getSlug(post) }, props: { post } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: Post };
  const buffer = await generateOgImage(smartQuotes(post.data.title));
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
