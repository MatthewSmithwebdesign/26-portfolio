import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  link?: string;
  featured?: boolean;
  gradient: string;
}

const projects: Project[] = [
  {
    slug: 'socalep',
    title: 'SoCal EP',
    description: 'Emergency planning, training, and consulting website for Southern California organizations. Features service listings, contact forms, and professional emergency management content.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    link: 'https://socalep.vercel.app/',
    featured: true,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'devs-and-dragons',
    title: 'Devs and Dragons',
    description: 'A gamified team recognition platform where teammates give "dragon emojis" to acknowledge wins. Each dragon has unique automated traits.',
    tech: ['Vue', 'TypeScript', 'Tailwind CSS', 'Convex'],
    category: 'web',
    link: 'https://devsanddragons.quest/',
    featured: true,
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    slug: 'dr-phillips-smith',
    title: 'Dr. Phillips-Smith',
    description: 'Professional portfolio for Dr. Halima Phillips-Smith, a Mass Sheltering Program Manager. Showcases research, publications, and community work.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    link: 'https://dr-phillips-smith.vercel.app/',
    featured: true,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    slug: 'smithys-smokery',
    title: "Smithy's Smokery",
    description: 'Modern restaurant website for a smokehouse restaurant. Features menu display, about section, and contact information.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    category: 'web',
    link: 'https://smithysmokery.netlify.app/',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-accent hover:text-accent-hover transition-colors text-sm">&larr; Back to Home</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-fg mt-4 mb-3">Projects</h1>
          <p className="text-muted text-lg">
            A showcase of my recent work and client projects.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 100}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border bg-card hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-white/80 text-4xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-md shrink-0">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/5 text-muted text-xs rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-accent text-sm font-medium group-hover:text-accent-hover transition-colors">
                  Visit Site &rarr;
                </span>
              </div>
            </a>
            </ScrollReveal>
          ))}
        </div>

        <section className="mt-12 p-8 border border-border bg-card rounded-2xl">
          <h2 className="text-xl font-bold text-fg mb-3">More Coming Soon</h2>
          <p className="text-muted mb-4">
            Always working on something new. Check back for updates or get in touch to see more.
          </p>
          <Link href="/contact" className="text-accent hover:text-accent-hover transition-colors font-medium">
            Get in touch &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
