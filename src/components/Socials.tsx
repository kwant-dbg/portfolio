import site from '@/data/site';

export default function Socials() {
  const s = site.socials;
  return (
    <aside className="fixed left-6 bottom-10 hidden lg:block">
      <div className="flex flex-col items-center gap-4">
        <a href={s.codeforces} target="_blank" rel="noreferrer" className="text-sm muted hover:text-white">Codeforces</a>
        <div className="w-px h-8 bg-white/6" />
        <a href={s.atcoder} target="_blank" rel="noreferrer" className="text-sm muted hover:text-white">AtCoder</a>
        <div className="w-px h-8 bg-white/6" />
        <a href={s.github} target="_blank" rel="noreferrer" className="text-sm muted hover:text-white">GitHub</a>
      </div>
    </aside>
  )
}
