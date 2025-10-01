import site from '@/data/site';
import Image from 'next/image';

export default function Hero() {
  const { name, tagline, socials } = site;
  return (
    <section className="container mx-auto px-6 py-28 flex flex-col items-center text-center">
      <div className="max-w-2xl">
        <div className="w-36 h-36 rounded-xl mx-auto mb-6 ring-2 ring-white/6 overflow-hidden">
          <Image src="/avatar.svg" alt="avatar" width={144} height={144} priority className="object-cover" />
        </div>
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/6 text-sm muted">{site.titleTag}</div>
  <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I am <span className="text-[var(--accent)]">{name}</span></h1>
        <p className="text-lg md:text-xl text-[var(--muted)] mb-6"><span className="typing">{tagline}</span></p>

        <div className="flex gap-4 justify-center">
          <a href="/projects" className="bg-[var(--accent)] px-6 py-3 rounded-md font-medium hover:shadow-lg">Projects</a>
          <a href="/blog" className="border border-white/10 px-6 py-3 rounded-md font-medium text-[var(--muted)] hover:text-white">Blog</a>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm muted">
          <a href={socials.codeforces} target="_blank" rel="noreferrer" className="text-[var(--accent)]">Codeforces</a>
          <a href={socials.leetcode} target="_blank" rel="noreferrer" className="text-[var(--accent)]">LeetCode</a>
          <a href={socials.github} target="_blank" rel="noreferrer" className="text-[var(--accent)]">GitHub</a>
        </div>
      </div>
    </section>
  )
}
