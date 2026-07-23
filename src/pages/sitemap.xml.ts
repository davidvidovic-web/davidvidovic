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

  const today = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: makeUrl("/"), changefreq: "weekly", priority: "1.0", lastmod: today },
    ...featuredProjects.map((project) => ({
      loc: makeUrl(`/portfolio/${project.data.slug}`),
      changefreq: "monthly",
      priority: "0.8",
      lastmod: `${project.data.year}-01-01`,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (entry) => `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
