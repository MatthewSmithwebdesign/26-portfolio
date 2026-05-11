import Link from 'next/link';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post not found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: `/images/blog/${post.slug}.svg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`/images/blog/${post.slug}.svg`],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-accent hover:text-accent-hover transition-colors text-sm">&larr; Back to Blog</Link>
          <h1 className="text-3xl font-bold text-fg mt-8">Post not found</h1>
        </div>
      </div>
    );
  }

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://matthewsmithwebdesign.com/images/blog/${post.slug}.svg`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Matthew Smith',
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />
        <Link href="/blog" className="text-accent hover:text-accent-hover transition-colors text-sm">&larr; Back to Blog</Link>

        <article className="mt-8">
          <div className="rounded-2xl overflow-hidden border border-border mb-10">
            <img
              src={`/images/blog/${post.slug}.svg`}
              alt={`Cover image for ${post.title}`}
              className="w-full aspect-[2/1] object-cover"
            />
          </div>

          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <time className="text-sm text-muted">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <div className="flex gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-accent/5 text-muted text-xs rounded-md border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none
            prose-headings:text-fg prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
            prose-a:text-accent hover:prose-a:text-accent-hover prose-a:transition-colors prose-a:no-underline hover:prose-a:underline
            prose-strong:text-fg prose-strong:font-semibold
            prose-code:text-accent prose-code:bg-accent/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
            prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:p-5
            prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ul:mb-6
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2 prose-ol:mb-6
            prose-li:text-muted prose-li:marker:text-border
            prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:rounded-r-lg prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8
            prose-blockquote-p:text-muted prose-blockquote-p:italic
            prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-sm
            prose-hr:border-border prose-hr:my-12
            prose-table:border prose-table:border-border prose-table:rounded-lg
            prose-th:bg-card prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:text-fg
            prose-td:px-4 prose-td:py-2 prose-td:border-t prose-td:border-border
          ">
            <MDXRemote source={post.content} />
          </div>

          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link href="/blog" className="text-accent hover:text-accent-hover transition-colors font-medium">
                &larr; Back to all posts
              </Link>
              <a
                href={`mailto:matthew@matthewsmithwebdesign.com?subject=Re: ${post.title}`}
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                Have feedback? Get in touch &rarr;
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
