import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../config/site";
import { offeredServices as services } from "../data/services";
import { about, contact, education, experience, languages, location, stackRows } from "../data/profile";

function makeUrl(pathname: string): string {
  return new URL(pathname, SITE.siteUrl).toString();
}

export const prerender = true;

export const GET: APIRoute = async () => {
  const featuredProjectSlugs = new Set([
    "geeks-on-site",
    "kozmeticki-salon-cats",
    "ambientivo",
    "desserts-with-ana",
  ]);
  const projects = (await getCollection("projects")).filter((project) =>
    featuredProjectSlugs.has(project.data.slug),
  );

  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "## About",
    about.lead,
    "",
    about.body,
    "",
    `- Based in: ${location}`,
    `- Education: ${education}`,
    `- Languages: ${languages.join(", ")}`,
    `- Experience: ${experience.map((item) => `${item.role}, ${item.company} (${item.period})`).join("; ")}`,
    "",
    "## Services",
    ...services.map((service) => `- ${service.title}: ${service.description}`),
    "",
    "## Technologies",
    stackRows.flat().join(", "),
    "",
    "## Case studies",
    ...projects.map(
      (project) =>
        `- [${project.data.title}](${makeUrl(`/portfolio/${project.data.slug}`)}): ${project.data.overview}`,
    ),
    "",
    "## Contact",
    `- Email: ${contact.email}`,
    `- LinkedIn: ${contact.linkedin}`,
    `- GitHub: ${contact.github}`,
    `- Upwork: ${contact.upwork}`,
    "",
    "## Site",
    `- [Home](${makeUrl("/")})`,
    `- [Sitemap](${makeUrl("/sitemap.xml")})`,
    `- [Full content for LLMs](${makeUrl("/llms-full.txt")})`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
