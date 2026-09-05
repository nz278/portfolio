import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="font-terminal text-accent hover:underline">
          ← Back home
        </Link>

        <p className="mt-8 font-terminal text-accent">
          nicole@portfolio:~/about$ cat README.md
        </p>

        <h1 className="mt-4 text-4xl font-bold">About Me</h1>

        <section className="mt-10">
          <h2 className="text-2xl text-secondary">Background</h2>

          <div className="mt-4 grid gap-8 md:grid-cols-[185px_1fr]">
            <img
              src="/about-me.jpg"
              alt="Nicole Zhou"
              className="w-full rounded-lg border border-border"
            />

            <div className="space-y-4 text-muted">
              <p>
                I was born in the small town of Ames, Iowa, but lived in
                Qitaihe, an industrial city in China's northernmost province, for most
                of my early years. I then had a fun little stint in D.C. while my
                dad was working for a startup there, but now whenever anyone asks
                me where I grew up, I say Bellevue, Washington.
              </p>

              <p>
                Currently, I'm an undergraduate student studying Electrical and Computer
                Engineering at Cornell University in Ithaca, New York. I am also pursuing
                a minor in physics and involved in undergraduate research as well as
                an engineering project team.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl text-secondary">Interests</h2>

          <p className="mt-3 text-muted">
            I'm primarily interested in working more with digital design and
            embedded systems, as well as learning more about the physical architecture
            behind machine learning systems. In my career, I want to strive toward a
            human-centered approach to engineering that leaves room for creativity.
            I think that progress in innovation should be measured by how much we can
            improve individual lives, and that optimizing efficiency should not be
            the be-all end-all.
          </p>
        </section>

        <section className="mt-10 border border-border bg-surface p-5">
          <h2 className="text-xl text-secondary">Contact</h2>

          <div className="mt-5 space-y-3 font-terminal text-sm">
            <div className="flex">
              <span className="w-24 text-secondary">Email</span>
              <a
                href="mailto:nz278@cornell.edu"
                className="text-accent hover:underline"
              >
                nz278@cornell.edu
              </a>
            </div>

            <div className="flex">
              <span className="w-24 text-secondary">GitHub</span>
              <a
                href="https://github.com/nz278"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                github.com/nz278
              </a>
            </div>

            <div className="pt-3 text-muted">
              Currently on UTC-5/-4 ET!
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}