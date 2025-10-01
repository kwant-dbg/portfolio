export default function About() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white/4 backdrop-blur rounded-2xl p-10 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
            <p className="mt-2 text-sm muted">My journey, approach, and philosophy in competitive programming</p>
          </div>

          <div className="prose prose-invert max-w-none text-[var(--muted)]">
            <h2>Passionate Competitive Programmer</h2>
            <p>
              I am an expert-rated competitive programmer focused on writing correct, fast solutions.
              I enjoy analyzing problems, designing optimal algorithms, and sharing concise
              explanations that help others learn.
            </p>

            <h3>My Approach</h3>
            <ul>
              <li><strong>Analyze fast:</strong> understand constraints and invariants.</li>
              <li><strong>Choose the right tool:</strong> pick data structures and patterns that fit.</li>
              <li><strong>Test thoroughly:</strong> build small examples and edge-case checks.</li>
            </ul>

            <h3>What I share</h3>
            <p>
              Detailed contest write-ups, algorithm breakdowns, and short, reusable templates
              for common problem classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}