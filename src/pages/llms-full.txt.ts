import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../config/site";
import { faqs } from "../data/faqs";
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
  const projects = (await getCollection("projects"))
    .filter((project) => featuredProjectSlugs.has(project.data.slug))
    .sort((a, b) => Number.parseInt(b.data.year, 10) - Number.parseInt(a.data.year, 10));

  const body = [
    `# ${SITE.name} - Full content`,
    "",
    `> ${SITE.description}`,
    "",
    `Canonical: ${SITE.siteUrl}`,
    "",
    "## About",
    about.lead,
    "",
    about.body,
    "",
    `- Based in: ${location}`,
    `- Education: ${education}`,
    `- Languages: ${languages.join(", ")}`,
    "",
    "## Experience",
    ...experience.map((item) => `- ${item.period}: ${item.role}, ${item.company}. ${item.note}`),
    "",
    "## Services",
    ...services.flatMap((service) => [`### ${service.title}`, service.description, ""]),
    "## Technologies",
    stackRows.flat().join(", "),
    "",
    "## Case studies",
    ...projects.flatMap((project) => [
      `### ${project.data.title} (${project.data.year})`,
      `URL: ${makeUrl(`/portfolio/${project.data.slug}`)}`,
      `Role: ${project.data.role}`,
      `Technologies: ${project.data.technologies.join(", ")}`,
      "",
      project.data.overview,
      "",
      (project.body ?? "").trim(),
      "",
    ]),
    "## FAQ",
    ...faqs.flatMap((item) => [`### ${item.question}`, item.answer, ""]),
    "## Contact",
    `- Email: ${contact.email}`,
    `- LinkedIn: ${contact.linkedin}`,
    `- GitHub: ${contact.github}`,
    `- Upwork: ${contact.upwork}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
