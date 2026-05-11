import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Django', 'Laravel', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Infrastructure',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'AWS'],
  },
  {
    name: 'CMS & Platforms',
    skills: ['Drupal', 'Shopify', 'WordPress', 'Vercel'],
  },
  {
    name: 'AI & Tools',
    skills: ['OpenAI API', 'LLM Integration', 'Git', 'CI/CD'],
  },
];

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: 'Enterprise', label: 'Drupal Scale' },
  { value: 'Full-Stack', label: 'Frontend + Backend' },
  { value: 'AI', label: 'Integration Expert' },
];

interface Specialization {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const specializations: Specialization[] = [
  {
    title: 'Drupal Development',
    desc: '6+ years building enterprise Drupal sites, custom modules, migrations, and high-traffic applications.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Modern Web Apps',
    desc: 'React, Next.js, and Vue.js applications with TypeScript, Tailwind CSS, and modern tooling.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: 'AI Integration',
    desc: 'LLM integrations, AI-powered features, automation workflows, and custom AI solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'E-commerce',
    desc: 'Shopify development, custom checkout flows, payment integrations, and headless commerce.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-accent hover:text-accent-hover transition-colors text-sm">&larr; Back to Home</Link>
        </header>

        {/* Intro with monogram */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 mb-12">
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[radial-gradient(circle,_var(--accent)_0%,_transparent_60%)] opacity-10 dark:opacity-5" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[radial-gradient(circle,_#8b5cf6_0%,_transparent_60%)] opacity-10 dark:opacity-5" />
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent to-violet-500 flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 animate-pulse-glow"
                aria-hidden="true"
              >
                <span className="text-white text-2xl sm:text-3xl font-bold">MS</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">About Me</h1>
                <p className="text-lg text-muted leading-relaxed">
                  I&apos;m a <strong className="text-fg">Full-Stack Developer</strong> with 8+ years of experience
                  building modern web solutions. I specialize in React, Next.js, Drupal, and AI integration —
                  working with enterprise companies and freelance clients alike.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats strip */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 border border-border bg-card rounded-xl text-center hover:border-accent/50 transition-colors"
              >
                <p className="text-xl sm:text-2xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal>
          <section className="space-y-6 mb-14">
            <div className="relative p-6 bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent rounded-r-2xl overflow-hidden">
              <div className="absolute inset-0 -z-10" aria-hidden="true">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--accent),transparent)] opacity-5" />
              </div>
              <p className="text-fg leading-relaxed text-lg">
                Currently serving as a <strong>Full-Stack Drupal Developer</strong> at an enterprise company,
                where I architect large-scale, high-traffic Drupal applications and mentor junior developers.
              </p>
            </div>
            <p className="text-muted leading-relaxed text-lg">
              On the freelance side, I help businesses build custom websites and web applications — from
              enterprise CMS implementations to modern AI-powered apps. I love turning complex problems
              into simple, elegant solutions.
            </p>
          </section>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-fg mb-6">Skills & Technologies</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category, i) => (
                <ScrollReveal key={category.name} delay={i * 80}>
                  <div className="p-5 border border-border bg-card rounded-xl hover:border-accent/50 hover:shadow-md hover:shadow-accent/5 transition-all">
                    <h3 className="text-sm font-semibold text-fg mb-3 uppercase tracking-wider">{category.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-accent/5 text-muted text-xs rounded-md border border-border hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Specializations */}
        <ScrollReveal>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-fg mb-6">What I Specialize In</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {specializations.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="p-5 border border-border bg-card rounded-xl hover:border-accent/50 hover:shadow-md hover:shadow-accent/5 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-fg font-semibold mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <section className="relative p-8 border border-border bg-card rounded-2xl overflow-hidden">
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-[radial-gradient(circle,_var(--accent)_0%,_transparent_60%)] opacity-10 dark:opacity-5" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-fg mb-3">Let&apos;s Work Together</h2>
              <p className="text-muted mb-5">
                Interested in collaborating? Check out my projects or get in touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/projects"
                  className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-accent-fg font-medium rounded-xl transition-all hover:scale-105 active:scale-100 shadow-md shadow-accent/25 text-sm"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 border border-border hover:border-accent text-fg hover:text-accent font-medium rounded-xl transition-all hover:scale-105 active:scale-100 text-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
