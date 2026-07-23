import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../config/site";

function makeUrl(pathname: string): string {
  return new URL(pathname, SITE.siteUrl).toString();
}

export const prerender = true;

export const GET: APIRoute = async () => {
  const [projects, blogPosts] = await Promise.all([
    getCollection("projects"),
    getCollection("blog"),
  ]);

  const projectUrls = projects
    .map((entry) => makeUrl(`/portfolio/${entry.data.slug}`))
    .sort((a, b) => a.localeCompare(b));

  const blogUrls = blogPosts
    .map((entry) => makeUrl(`/blog/${entry.data.slug}`))
    .sort((a, b) => a.localeCompare(b));

  const body = [
    `# ${SITE.name} - Full LLM URL Index`,
    "",
    `Canonical: ${SITE.siteUrl}`,
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Core",
    makeUrl("/"),
    makeUrl("/service"),
    makeUrl("/portfolio"),
    makeUrl("/blog"),
    makeUrl("/contact"),
    makeUrl("/sitemap.xml"),
    makeUrl("/robots.txt"),
    makeUrl("/llms.txt"),
    "",
    "## Portfolio",
    ...projectUrls,
    "",
    "## Blog",
    ...blogUrls,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
