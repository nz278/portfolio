import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, publishedPosts } from "./posts";

export const metadata: Metadata = {
  title: "Nicole's Blog"
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="font-terminal text-accent hover:underline">
          ← Back home
        </Link>

        <p className="mt-8 font-terminal text-accent">
          nicole@portfolio:~/blog$ ls -t
        </p>

        <h1 className="mt-4 text-4xl font-bold">Blog</h1>

        {publishedPosts.length === 0 ? (
          <p className="mt-10 text-muted">No posts yet.</p>
        ) : (
          <div className="mt-10 divide-y divide-border border-y border-border">
            {publishedPosts.map((post) => (
              <article key={post.slug} className="py-7">
                <p className="font-terminal text-sm text-secondary">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>

                <Link href={`/blog/${post.slug}`} className="group mt-2 inline-block">
                  <h2 className="text-xl text-accent group-hover:underline">
                    {post.title}
                  </h2>
                </Link>

                <p className="mt-3 text-muted">{post.summary}</p>

                {post.tags.length > 0 && (
                  <p className="mt-4 font-terminal text-sm text-secondary">
                    {post.tags.join(" · ")}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}