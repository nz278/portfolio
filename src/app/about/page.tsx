import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#e8e8e8] font-mono px-6 py-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-[#00ff99] hover:underline">
          ← Back home
        </Link>

        <p className="mt-8 text-[#00ff99]">
          nicole@portfolio:~/about$ cat README.md
        </p>

        <h1 className="mt-4 text-4xl font-bold">About Me</h1>

        <section className="mt-10">
          <h2 className="text-2xl text-[#ffb000]">Background</h2>

          <div className="mt-4 grid gap-8 md:grid-cols-[185px_1fr]">
            <img
              src="/about-me.jpg"
              alt="Nicole Zhou"
              className="w-full rounded-lg border border-[#333333]"
            />

            <div className="space-y-4 text-gray-300">
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
                Cornell Outdoor Education.
              </p>

            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl text-[#ffb000]">Interests</h2>

          <p className="mt-3 text-gray-300">
            I'm primarily interested in working more with embedded systems and intelligent 
            robotics, as well as learning more about the physical architecture behind 
            machine learning systems. I disagree with the sentiment that optimizing 
            efficiency is the be-all end-all, and think that progress in innovation should be 
            measured by how much we can improve lives rather than throughput. In my career, 
            I want to strive toward a human-centered approach to engineering that makes room 
            for creativity.
          </p>

        </section>

        <section className="mt-10 border border-gray-700 bg-[#181818] p-5">
          <h2 className="text-xl text-[#ffb000]">Contact</h2>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex">
              <span className="w-24 text-[#ffb000]">Email</span>
              <a
                href="mailto:nz278@cornell.edu"
                className="text-[#00ff99] hover:underline"
              >
                nz278@cornell.edu
              </a>
            </div>
            
            <div className="flex">
              <span className="w-24 text-[#ffb000]">GitHub</span>
              <a
                href="https://github.com/nz278"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff99] hover:underline"
              >
                  github.com/nz278
              </a>
            </div>

            <div className="pt-3 text-gray-400">
              Currently on UTC-8/-7 PT!
            </div>
            
          </div>
        </section>
      </article>
    </main>
  );
}