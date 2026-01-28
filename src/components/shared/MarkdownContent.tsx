'use client';
import React from 'react';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className = '' }) => {
  // Convert markdown to HTML
  const parseMarkdown = (md: string): string => {
    let html = md;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    
    // Markdown links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Auto-link plain URLs (http, https)
    html = html.replace(/(?<!href="|">)(https?:\/\/[^\s<]+)/gim, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Unordered lists
    html = html.replace(/^\s*-\s+(.*)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Paragraphs (split by double newlines)
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs
      .map(p => {
        // Skip if already wrapped in a tag
        if (p.match(/^<[^>]+>/)) return p;
        return `<p>${p.trim()}</p>`;
      })
      .join('\n');
    
    return html;
  };

  const htmlContent = parseMarkdown(content);

  return (
    <div 
      className={`markdown-content ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownContent;
