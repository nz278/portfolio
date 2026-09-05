import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-10 lg:self-start">
      <section className="border border-border bg-surface p-5">
        <h2 className="text-xl text-secondary">About Me</h2>

        <Link href="/about" className="group mt-4 block">
          <img
            src="/about-me.jpg"
            alt="Nicole Zhou"
            className="w-3/4 rounded border border-border"
          />

          <p className="mt-3 text-sm text-foreground">Nicole</p>

          <p className="mt-1 text-xs text-muted">
            Currently residing in Ithaca, New York.
          </p>

          <p className="mt-3 font-terminal text-sm text-accent group-hover:underline">
            View profile →
          </p>
        </Link>
      </section>
    </aside>
  );
}