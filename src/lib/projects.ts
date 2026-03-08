import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/projects');

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  link?: string;
  date: string;
  content: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const projects = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title || '',
        description: data.description || '',
        tech: data.tech || [],
        category: data.category || 'other',
        link: data.link,
        date: data.date || '',
        content,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return projects;
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      tech: data.tech || [],
      category: data.category || 'other',
      link: data.link,
      date: data.date || '',
      content,
    };
  } catch {
    return null;
  }
}
