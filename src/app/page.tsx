import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import ScrollReveal from '@/components/ScrollReveal';

const featuredProjects = [
  {
    slug: 'socalep',
    title: 'SoCal EP',
    description: 'Emergency planning, training, and consulting website for Southern California',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://socalep.vercel.app/',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'devs-and-dragons',
    title: 'Devs and Dragons',
    description: 'Gamified team recognition platform with unique dragon collectibles',
    tech: ['Vue', 'TypeScript', 'Convex'],
    link: 'https://devsandragons.quest/',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    slug: 'dr-phillips-smith',
    title: 'Dr. Phillips-Smith',
    description: 'Professional portfolio for an emergency management professional',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://dr-phillips-smith.vercel.app/',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const techMarquee = [
  'React', 'Next.js', 'TypeScript', 'Drupal', 'Vue.js', 'Python', 'PHP',
  'AI', 'Tailwind CSS', 'Node.js', 'MySQL', 'PostgreSQL', 'Docker', 'GraphQL',
];

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--accent)_0%,_transparent_60%)] opacity-20 dark:opacity-10 animate-pulse-glow" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#8b5cf6_0%,_transparent_60%)] opacity-15 dark:opacity-10 animate-pulse-glow" style={{ animationDelay: '-4s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute inset-0 flex items-center overflow-hidden" aria-hidden="true">
            <div className="animate-marquee whitespace-nowrap text-[140px] font-bold text-accent/5 select-none pointer-events-none leading-none">
              {techMarquee.join('  •  ')}  •  {'  '}
              {techMarquee.join('  •  ')}  •  {'  '}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="gradient-text">Matthew Smith</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted mb-4">
            Full-Stack Developer
          </p>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10">
            Building modern, scalable web solutions with React, Next.js, Drupal, and AI. I turn complex problems into elegant digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-8 py-3 bg-accent hover:bg-accent-hover text-accent-fg font-medium rounded-xl transition-all hover:scale-105 active:scale-100 shadow-lg shadow-accent/25"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-border hover:border-accent text-fg hover:text-accent font-medium rounded-xl transition-all hover:scale-105 active:scale-100"
            >
              Get in Touch
            </Link>
          </div>
          <div className="mt-12 marquee-container overflow-hidden w-full max-w-xl mx-auto" role="list" aria-label="Technologies I work with">
            <div className="animate-marquee flex gap-3 w-max">
              {[...techMarquee, ...techMarquee].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="px-3 py-1.5 text-xs font-medium bg-accent/5 text-muted border border-border rounded-full whitespace-nowrap transition-all duration-200 hover:scale-125 hover:bg-accent/10 hover:text-accent hover:border-accent/30 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <ScrollReveal>
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10 sm:mb-14">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-fg">Featured Work</h2>
                <p className="text-muted mt-2">Selected projects I&apos;ve built recently</p>
              </div>
              <Link href="/projects" className="text-accent hover:text-accent-hover transition-colors text-sm font-medium hidden sm:block">
                View all &rarr;
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, i) => (
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
                      <h3 className="text-lg font-semibold text-fg mb-1.5 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-accent/5 text-muted text-xs rounded-md border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link href="/projects" className="text-accent hover:text-accent-hover transition-colors text-sm font-medium">
                View all projects &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Latest Writing */}
      <ScrollReveal>
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10 sm:mb-14">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-fg">Latest Writing</h2>
                <p className="text-muted mt-2">Thoughts on development, AI, and building things</p>
              </div>
              <Link href="/blog" className="text-accent hover:text-accent-hover transition-colors text-sm font-medium hidden sm:block">
                View all &rarr;
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-border bg-card hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="h-40 bg-card overflow-hidden">
                      <img
                        src={`/images/blog/${post.slug}.svg`}
                        alt={`Cover image for ${post.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <time className="text-xs text-muted">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-accent/5 text-muted text-xs rounded-md border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-base font-semibold text-fg group-hover:text-accent transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link href="/blog" className="text-accent hover:text-accent-hover transition-colors text-sm font-medium">
                View all posts &rarr;
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
              Let&apos;s build something together
            </h2>
            <p className="text-muted text-lg mb-8">
              Whether you need a full-scale web application, a Drupal implementation, or AI integration — I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-accent hover:bg-accent-hover text-accent-fg font-medium rounded-xl transition-all hover:scale-105 active:scale-100 shadow-lg shadow-accent/25"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-border hover:border-accent text-fg hover:text-accent font-medium rounded-xl transition-all hover:scale-105 active:scale-100"
              >
                More About Me
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/MatthewSmithwebdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-sm"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/matthewsmithwebdesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-sm"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="mailto:matthew@matthewsmithwebdesign.com"
              className="text-muted hover:text-accent transition-colors text-sm"
              aria-label="Send email"
            >
              Email
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/terminal"
              className="text-xs text-muted hover:text-accent transition-colors"
              aria-label="Terminal easter egg"
            >
              [ terminal ]
            </Link>
            <span className="text-xs text-muted">&copy; 2026 Matthew Smith</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
