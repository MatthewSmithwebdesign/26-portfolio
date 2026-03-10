import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-gray-300 font-mono p-4 sm:p-6 md:p-8 pt-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-cyan-500 hover:underline text-sm sm:text-base">&larr; Back to Blog</Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mt-6 md:mt-8">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-4 sm:p-6 md:p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-cyan-500 hover:underline text-sm sm:text-base">&larr; Back to Blog</Link>

        <article className="mt-6 md:mt-8">
          <header className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-cyan-500 mb-4">{post.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
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
          </header>

          <div className="prose prose-invert prose-green max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    </div>
  );
}
