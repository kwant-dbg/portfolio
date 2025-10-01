export default function Skills() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid gap-8">
          <div className="bg-white/4 backdrop-blur rounded-2xl p-8">
            <h1 className="text-2xl font-bold">Skills & Expertise</h1>
            <p className="mt-2 text-sm muted">Languages, platforms, and core competencies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/3 p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Languages</h3>
              <ul className="text-sm muted space-y-2">
                <li>C++ — Expert</li>
                <li>Python — Advanced</li>
                <li>Java — Advanced</li>
                <li>JavaScript — Intermediate</li>
              </ul>
            </div>
            <div className="bg-white/3 p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Platforms</h3>
              <ul className="text-sm muted space-y-2">
                <li>Codeforces — Expert (1850+)</li>
                <li>AtCoder — 1600+</li>
                <li>LeetCode — 2000+ solved</li>
              </ul>
            </div>
            <div className="bg-white/3 p-6 rounded-xl">
              <h3 className="font-semibold mb-3">Competencies</h3>
              <ul className="text-sm muted space-y-2">
                <li>Data Structures & Algorithms</li>
                <li>Graph Theory & Trees</li>
                <li>Dynamic Programming</li>
                <li>Number Theory & Math</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/4 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="muted">Problems Solved</div>
          </div>
        </div>
      </div>
    </div>
  )
}