export default function Blog() {
  const posts = [
    {
      title: "Mastering Dynamic Programming: A Complete Guide",
      excerpt: "Learn the fundamental concepts of dynamic programming with practical examples and problem-solving techniques used in competitive programming.",
      date: "October 1, 2025",
      readTime: "15 min read",
      tags: ["Algorithms", "DP", "Problem Solving"],
      slug: "mastering-dynamic-programming"
    },
    {
      title: "Graph Theory Algorithms Every Programmer Should Know",
      excerpt: "Essential graph algorithms including DFS, BFS, Dijkstra's, and advanced techniques for handling complex graph problems.",
      date: "September 15, 2025",
      readTime: "20 min read",
      tags: ["Graphs", "Algorithms", "Data Structures"],
      slug: "graph-theory-algorithms"
    },
    {
      title: "Time Complexity Analysis: Beyond Big O Notation",
      excerpt: "Understanding the nuances of time complexity analysis and how to optimize your code for better performance in competitive programming.",
      date: "September 1, 2025",
      readTime: "12 min read",
      tags: ["Time Complexity", "Optimization", "Analysis"],
      slug: "time-complexity-analysis"
    },
    {
      title: "Solving Hard Problems: My Approach and Mindset",
      excerpt: "Personal insights and strategies for tackling difficult competitive programming problems, including debugging techniques and mental frameworks.",
      date: "August 20, 2025",
      readTime: "18 min read",
      tags: ["Problem Solving", "Mindset", "Experience"],
      slug: "solving-hard-problems"
    },
    {
      title: "Number Theory in Competitive Programming",
      excerpt: "Essential number theory concepts including prime numbers, modular arithmetic, and their applications in coding competitions.",
      date: "August 5, 2025",
      readTime: "16 min read",
      tags: ["Number Theory", "Mathematics", "Primes"],
      slug: "number-theory-competitive-programming"
    },
    {
      title: "Codeforces Round Analysis: Learning from Mistakes",
      excerpt: "Detailed analysis of recent Codeforces contests, common pitfalls, and strategies for improvement based on personal experience.",
      date: "July 25, 2025",
      readTime: "14 min read",
      tags: ["Codeforces", "Contest Analysis", "Improvement"],
      slug: "codeforces-round-analysis"
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid gap-8">
          <div className="bg-white/4 backdrop-blur rounded-2xl p-8">
            <h1 className="text-2xl font-bold">Learning & Approaches</h1>
            <p className="mt-2 text-sm muted">Notes, tutorials and contest analyses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <article key={i} className="bg-white/3 p-6 rounded-xl">
                <div className="flex items-center justify-between text-sm muted mb-3">
                  <div>{post.date} • {post.readTime}</div>
                </div>
                <h2 className="text-lg font-semibold"><a href={`/blog/${post.slug}`} className="hover:text-[var(--accent)]">{post.title}</a></h2>
                <p className="muted mt-2 text-sm">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-white/6 rounded">{t}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="bg-white/4 p-6 rounded-xl text-center">
            <h4 className="font-semibold">Subscribe</h4>
            <p className="muted text-sm mt-2">Get short notes when new posts are published.</p>
          </div>
        </div>
      </div>
    </div>
  )
}