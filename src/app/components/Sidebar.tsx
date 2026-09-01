import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-10 lg:self-start">
      <section className="border border-gray-700 bg-[#181818] p-5">
        <h2 className="text-xl text-[#ffb000]">About Me</h2>

        <Link href="/about" className="group mt-4 block">
          <img
            src="/about-me.jpg"
            alt="Nicole Zhou"
            className="w-3/4 rounded border border-[#333333]"
          />

          <p className="mt-3 text-sm text-gray-300">Nicole</p>

          <p className="mt-1 text-xs text-gray-400">
            Currently residing in Ithaca, New York.
          </p>

          <p className="mt-3 text-sm text-[#00ff99] group-hover:underline">
            View profile →
          </p>
        </Link>
      </section>
    </aside>
  );
}