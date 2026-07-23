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
    .map((entry) => `[${entry.data.title}](${makeUrl(`/portfolio/${entry.data.slug}`)})`)
    .sort((a, b) => a.localeCompare(b));

  const blogUrls = blogPosts
    .map((entry) => `[${entry.data.title}](${makeUrl(`/blog/${entry.data.slug}`)})`)
    .sort((a, b) => a.localeCompare(b));

  const body = [
    `# ${SITE.name} - Full LLM URL Index`,
    "",
    `Canonical: [${SITE.siteUrl}](${SITE.siteUrl})`,
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Core",
    `[Home](${makeUrl("/")})`,
    `[Services](${makeUrl("/service")})`,
    `[Portfolio](${makeUrl("/portfolio")})`,
    `[Blog](${makeUrl("/blog")})`,
    `[Contact](${makeUrl("/contact")})`,
    `[Sitemap](${makeUrl("/sitemap.xml")})`,
    `[Robots](${makeUrl("/robots.txt")})`,
    `[LLMS](${makeUrl("/llms.txt")})`,
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
