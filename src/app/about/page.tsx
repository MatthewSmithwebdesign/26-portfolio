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

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-accent hover:text-accent-hover transition-colors text-sm">&larr; Back to Home</Link>
        </header>

        {/* Intro with monogram */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent to-violet-500 flex items-center justify-center shrink-0 shadow-lg shadow-accent/20"
              aria-hidden="true"
            >
              <span className="text-white text-2xl sm:text-3xl font-bold">MS</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-3">About Me</h1>
              <p className="text-lg text-muted leading-relaxed">
                I&apos;m a <strong className="text-fg">Full-Stack Developer</strong> with 8+ years of experience
                building modern web solutions. I specialize in React, Next.js, Drupal, and AI integration —
                working with enterprise companies and freelance clients alike.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal>
          <section className="space-y-6 mb-14">
            <div className="p-6 border-l-4 border-accent bg-card rounded-r-2xl">
              <p className="text-fg leading-relaxed">
                Currently serving as a <strong>Full-Stack Drupal Developer</strong> at an enterprise company,
                where I architect large-scale, high-traffic Drupal applications and mentor junior developers.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
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
                  <div className="p-5 border border-border bg-card rounded-xl hover:border-accent/50 transition-colors">
                    <h3 className="text-sm font-semibold text-fg mb-3">{category.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-accent/5 text-muted text-xs rounded-md border border-border"
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
              {[
                {
                  title: 'Drupal Development',
                  desc: '6+ years building enterprise Drupal sites, custom modules, migrations, and high-traffic applications.',
                },
                {
                  title: 'Modern Web Apps',
                  desc: 'React, Next.js, and Vue.js applications with TypeScript, Tailwind CSS, and modern tooling.',
                },
                {
                  title: 'AI Integration',
                  desc: 'LLM integrations, AI-powered features, automation workflows, and custom AI solutions.',
                },
                {
                  title: 'E-commerce',
                  desc: 'Shopify development, custom checkout flows, payment integrations, and headless commerce.',
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="p-5 border border-border bg-card rounded-xl hover:border-accent/50 transition-colors">
                    <h3 className="text-fg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <section className="p-8 border border-border bg-card rounded-2xl">
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
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
