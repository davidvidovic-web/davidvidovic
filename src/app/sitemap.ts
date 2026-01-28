import { MetadataRoute } from 'next';
import projectData from '@/data/projectData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davidvidovic.com';
  const currentDate = new Date();

  // Homepage
  const homepage = {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  };

  // Dynamic portfolio project detail pages
  const portfolioPages = projectData.map((project) => ({
    url: `${baseUrl}/portfolio-details/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [homepage, ...portfolioPages];
}
