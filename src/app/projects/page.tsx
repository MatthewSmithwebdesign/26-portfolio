'use client';

import Link from 'next/link';

interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  link?: string;
}

const projects: Project[] = [
  {
    slug: 'smithys-smokery',
    title: "Smithy's Smokery",
    description: "Modern restaurant website for a smokehouse restaurant. Features menu display, about section, and contact information.",
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    category: 'web',
    link: 'https://smithysmokery.netlify.app/',
  },
  {
    slug: 'devs-and-dragons',
    title: 'Devs and Dragons',
    description: 'A gamified team recognition platform where teammates give "dragon emojis" to acknowledge wins. Each dragon has unique automated traits - no two are the same. Features weekly recognition, meaningful notes, and collection building.',
    tech: ['Vue', 'TypeScript', 'Tailwind CSS', 'Convex'],
    category: 'web',
    link: 'https://devsanddragons.quest/',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
];

export default function Projects() {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      drupal: 'border-blue-500 bg-blue-900/20 text-blue-400',
      web: 'border-cyan-500 bg-cyan-900/20 text-cyan-400',
      ai: 'border-pink-500 bg-pink-900/20 text-pink-400',
    };
    return colors[category] || 'border-gray-500 bg-gray-900/20 text-gray-400';
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-cyan-500 hover:underline">&larr; Back to Terminal</Link>
        </header>

        <h1 className="text-4xl font-bold text-cyan-500 mb-4">Projects</h1>
        <p className="text-lg text-gray-400 mb-8">
          A showcase of my work
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat.id}
              className="px-3 py-1 border border-cyan-700 rounded-full text-sm text-cyan-400 cursor-pointer hover:bg-cyan-900/30 transition-colors"
            >
              {cat.label}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="border border-cyan-800/50 rounded-lg p-6 hover:border-cyan-600 transition-all hover:shadow-lg hover:shadow-cyan-900/20 bg-black/50"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-200">{project.title}</h2>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:underline text-sm"
                  >
                    Visit →
                  </a>
                )}
              </div>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-gray-900 border border-gray-700 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className={`inline-block px-2 py-1 rounded text-xs border ${getCategoryColor(project.category)}`}>
                {project.category.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        <section className="mt-16 p-6 border border-cyan-800 bg-cyan-900/10 rounded-lg">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Add New Project</h2>
          <p className="text-gray-400 mb-4">
            To add new projects, simply create a new .mdx file in the <code className="text-cyan-400">content/projects/</code> directory.
          </p>
          <Link href="https://github.com" target="_blank" className="text-cyan-500 hover:underline">
            View on GitHub &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
