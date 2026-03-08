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
      <div className="min-h-screen bg-black text-gray-300 font-mono p-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-cyan-500 hover:underline">&larr; Back to Blog</Link>
          <h1 className="text-4xl font-bold text-red-500 mt-8">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-cyan-500 hover:underline">&larr; Back to Blog</Link>

        <article className="mt-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4">
              <time className="text-gray-500">{post.date}</time>
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
