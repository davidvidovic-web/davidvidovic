import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../config/site";

function makeUrl(pathname: string): string {
  return new URL(pathname, SITE.siteUrl).toString();
}

export const GET: APIRoute = async () => {
  const featuredProjectSlugs = new Set([
    "geeks-on-site",
    "kozmeticki-salon-cats",
    "ambientivo",
    "desserts-with-ana",
  ]);

  const projects = await getCollection("projects");

  const featuredProjects = projects.filter((project) => featuredProjectSlugs.has(project.data.slug));

  // No lastmod: we have no real modification dates, and made-up ones get ignored by crawlers.
  const urls = [
    { loc: makeUrl("/") },
    ...featuredProjects.map((project) => ({
      loc: makeUrl(`/portfolio/${project.data.slug}`),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (entry) => `  <url>\n    <loc>${entry.loc}</loc>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
