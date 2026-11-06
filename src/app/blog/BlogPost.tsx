import Link from "next/link";
import { notFound } from "next/navigation";
import Sidebar from "../components/Sidebar";
import { formatDate, getPost } from "./posts";
import "./paper.css";

export default function PostLayout({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,640px)_220px]">
        <article className="max-w-[640px]">
          <Link href="/blog" className="font-terminal text-accent hover:underline">
            ← All posts
          </Link>

          <p className="mt-8 font-terminal text-accent">
            nicole@portfolio:~/blog/{post.slug}$ cat README.md
          </p>

          <div className="paper-shadow mt-6">
            <div className="paper-sheet">
              <h1 className="paper-title">{post.title}</h1>

              <p className="paper-meta font-terminal">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.tags.length > 0 && <> · {post.tags.join(" · ")}</>}
              </p>

              <div className="paper-prose">{children}</div>
            </div>
          </div>
        </article>

        <Sidebar />
      </div>
    </main>
  );
}