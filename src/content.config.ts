import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const metricSchema = z.object({
  value: z.number(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  label: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.string(),
    client: z.string(),
    role: z.string(),
    overview: z.string(),
    websiteUrl: z.string().url(),
    image: z.string(),
    logo: z.string(),
    detailsImage: z.string(),
    backgroundColor: z.string(),
    textColor: z.string(),
    services: z.array(z.string()),
    technologies: z.array(z.string()),
    counters: z.array(metricSchema),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    author: z.string(),
    excerpt: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  projects,
  blog,
};
