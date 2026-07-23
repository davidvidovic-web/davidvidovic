import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../config/site";

function makeUrl(pathname: string): string {
  return new URL(pathname, SITE.siteUrl).toString();
}

export const prerender = true;

export const GET: APIRoute = async () => {
  const [projects, blogPosts] = await Promise.all([getCollection("projects"), getCollection("blog")]);

  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `Canonical: [${SITE.siteUrl}](${SITE.siteUrl})`,
    "",
    "## Primary Pages",
    `- [Home](${makeUrl("/")})`,
    `- [Services](${makeUrl("/service")})`,
    `- [Portfolio Index](${makeUrl("/portfolio")})`,
    `- [Blog Index](${makeUrl("/blog")})`,
    `- [Contact](${makeUrl("/contact")})`,
    "",
    "## Dynamic Content",
    "- Portfolio Case Studies: /portfolio/{slug}",
    "- Blog Articles: /blog/{slug}",
    "",
    "## Machine-Readable Discovery",
    `- [Sitemap](${makeUrl("/sitemap.xml")})`,
    `- [Robots](${makeUrl("/robots.txt")})`,
    `- [Full LLM Index](${makeUrl("/llms-full.txt")})`,
    "",
    "## Snapshot",
    `- Projects: ${projects.length}`,
    `- Blog posts: ${blogPosts.length}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
