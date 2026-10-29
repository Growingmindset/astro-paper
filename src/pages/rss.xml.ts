import rss from "@astrojs/rss";
import { SITE } from "@/config";
import { getEssays, getPostUrl } from "@/utils/posts";

export async function GET() {
  const essays = await getEssays();
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: essays.map(post => ({
      link: getPostUrl(post),
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDatetime,
    })),
  });
}
