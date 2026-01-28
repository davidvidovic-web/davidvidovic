import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.davidvidovic.com';
  const currentDate = new Date();

  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  };

  // Get actual portfolio projects from content/projects directory
  const contentDir = path.join(process.cwd(), 'content', 'projects');
  const projectSlugs = fs.existsSync(contentDir) 
    ? fs.readdirSync(contentDir)
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace('.md', ''))
    : [];

  // Generate portfolio pages only for projects with markdown files
  const portfolioPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [homepage, ...portfolioPages];
}
