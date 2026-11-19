import type { CollectionEntry } from "astro:content";

export const featuredProjectSlugs = [
  "pitaj-io",
  "hackers-1995",
  "kozmeticki-salon-cats",
  "ambientivo",
  "geeks-on-site",
] as const;

export const caseStudySlugs: readonly string[] = [...featuredProjectSlugs, "desserts-with-ana"];

export function orderFeaturedProjects(projects: CollectionEntry<"projects">[]) {
  const bySlug = new Map(projects.map((project) => [project.data.slug, project]));
  return featuredProjectSlugs.flatMap((slug) => {
    const project = bySlug.get(slug);
    return project ? [project] : [];
  });
}
