import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectContent {
  content: string;
  frontmatter?: Record<string, any>;
}

export function getProjectContent(slug: string): ProjectContent | null {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'projects');
    const filePath = path.join(contentDir, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContents);
    
    return {
      content,
      frontmatter: data
    };
  } catch (error) {
    console.error(`Error reading project content for ${slug}:`, error);
    return null;
  }
}
