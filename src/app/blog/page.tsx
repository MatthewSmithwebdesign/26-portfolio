import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import ScrollReveal from '@/components/ScrollReveal';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-accent hover:text-accent-hover transition-colors text-sm">&larr; Back to Home</Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-fg mt-4 mb-3">Blog</h1>
          <p className="text-muted text-lg">
            Thoughts on web development, AI integration, and lessons learned along the way.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-muted">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border bg-card hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="h-44 bg-card overflow-hidden">
                    <img
                      src={`/images/blog/${post.slug}.svg`}
                      alt={`Cover image for ${post.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <time className="text-xs text-muted">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                      <div className="flex gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-accent/5 text-muted text-xs rounded-md border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted mb-3">{post.excerpt}</p>
                    <span className="inline-flex items-center text-accent text-sm font-medium group-hover:text-accent-hover transition-colors">
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal>
          <section className="mt-12 p-8 border border-border bg-card rounded-2xl text-center">
            <h2 className="text-xl font-bold text-fg mb-3">Have feedback?</h2>
            <p className="text-muted mb-4">
              I&apos;m always writing about new projects and tech discoveries.
            </p>
            <a
              href="mailto:matthew@matthewsmithwebdesign.com"
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              Drop me an email &rarr;
            </a>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
