import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-4 sm:p-6 md:p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 md:mb-12">
          <Link href="/" className="text-cyan-500 hover:underline text-sm sm:text-base">&larr; Back to Terminal</Link>
        </header>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-500 mb-4">Blog</h1>
        <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8">
          Thoughts on web development, Python, Django, and my journey in tech
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-400">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-cyan-800/50 rounded-lg p-4 md:p-6 hover:border-cyan-600 transition-colors bg-black/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <time className="text-gray-500 text-sm">{post.date}</time>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-cyan-900/20 border border-cyan-700/30 rounded text-xs text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-200 mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-cyan-500 hover:underline text-sm"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}

        <section className="mt-12 md:mt-16 p-4 md:p-6 border border-cyan-800 bg-cyan-900/10 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">More Posts Coming Soon</h2>
          <p className="text-gray-400 mb-4">
            I'm always writing about new projects, tech discoveries, and lessons learned. 
            Check back for new posts!
          </p>
          <p className="text-gray-400">
            Have feedback or suggestions?{' '}
            <a href="mailto:matthew@matthewsmithwebdesign.com" className="text-cyan-500 hover:underline">
              Drop me an email
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
