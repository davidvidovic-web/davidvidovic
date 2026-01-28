import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CounterMetric } from '@/types/project-dt';

export interface ProjectContent {
  objective?: string;
  process?: string;
  results?: string;
  counters?: CounterMetric[];
}

export function getProjectContent(slug: string): ProjectContent | null {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'projects');
    const filePath = path.join(contentDir, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);
    
    // Parse markdown content by sections
    const sections = content.split(/^# /m).filter(Boolean);
    const projectContent: ProjectContent = {};
    
    sections.forEach((section) => {
      const lines = section.trim().split('\n');
      const title = lines[0].toLowerCase().trim();
      const body = lines.slice(1).join('\n').trim();
      
      if (title === 'objective') {
        projectContent.objective = body;
      } else if (title === 'process') {
        projectContent.process = body;
      } else if (title === 'results') {
        projectContent.results = body;
      } else if (title === 'counters') {
        // Parse counters from markdown list format
        const counterLines = body.split('\n').filter(line => line.trim().startsWith('-'));
        projectContent.counters = counterLines.map(line => {
          // Format: - [+/-]VALUE[%] | LABEL
          // Handles: +42%, –28%, 13.5%, 100, etc.
          const match = line.match(/^-\s*[+\-–—]?\s*(\d+\.?\d*)\s*([%])?[^\|]*\|\s*(.+)$/);
          if (match) {
            return {
              value: parseFloat(match[1]),
              suffix: match[2] || '',
              label: match[3].trim()
            };
          }
          return null;
        }).filter(Boolean) as CounterMetric[];
      }
    });
    
    return projectContent;
  } catch (error) {
    console.error(`Error reading project content for ${slug}:`, error);
    return null;
  }
}
