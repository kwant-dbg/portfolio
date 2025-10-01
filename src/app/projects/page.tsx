import site from '@/data/site';

type Project = {
  title: string;
  description: string;
  technologies?: string[];
  github?: string;
  live?: string;
}

type Competition = {
  name: string;
  rank: string;
  year: string;
  description: string;
}

export default function Projects() {
  const projects: Project[] = site.projects as Project[];
  const competitions: Competition[] = [
    {
      name: "ICPC Regional Finals",
      rank: "Gold Medal",
      year: "2024",
      description: "Achieved gold medal in regional competition representing university team."
    },
    {
      name: "Google Code Jam",
      rank: "Round 3",
      year: "2024",
      description: "Advanced to Round 3, solving complex algorithmic challenges."
    },
    {
      name: "Facebook Hacker Cup",
      rank: "Round 2",
      year: "2023",
      description: "Qualified for Round 2 with excellent problem-solving performance."
    },
    {
      name: "AtCoder Grand Contest",
      rank: "Top 100",
      year: "2023",
      description: "Ranked in top 100 participants in prestigious AGC competition."
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid gap-8">
          <div className="bg-white/4 backdrop-blur rounded-2xl p-8">
            <h1 className="text-2xl font-bold">Projects & Competitions</h1>
            <p className="mt-2 text-sm muted">Selected projects and contest achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="bg-white/3 p-6 rounded-xl hover:scale-[1.01] transition-transform">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm muted mt-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.technologies?.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/6 rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  {p.github && (
                    <a href={p.github} className="text-sm text-[var(--accent)]" target="_blank" rel="noreferrer">View on GitHub →</a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitions.map((c, i) => (
              <div key={i} className="bg-gradient-to-r from-yellow-600/10 to-orange-600/6 p-6 rounded-xl border-l-4 border-yellow-400">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold">{c.name}</h4>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">{c.rank}</span>
                </div>
                <p className="muted mt-2 text-sm">{c.description}</p>
                <div className="text-xs muted mt-2">{c.year}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/4 p-6 rounded-xl text-center">
            <h4 className="font-semibold">Open Source Contributions</h4>
            <p className="muted text-sm mt-2">Actively contribute to educational libraries and tools.</p>
          </div>
        </div>
      </div>
    </div>
  )
}