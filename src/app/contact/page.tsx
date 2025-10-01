export default function Contact() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid gap-8">
          <div className="bg-white/4 backdrop-blur rounded-2xl p-8 text-center">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <p className="muted mt-2">Questions, collaborations, or mentorship — drop a line.</p>
          </div>

          <div className="bg-white/3 p-8 rounded-xl">
            <form className="grid gap-4">
              <input className="p-3 rounded bg-white/6 border border-white/10" placeholder="Name" />
              <input className="p-3 rounded bg-white/6 border border-white/10" placeholder="Email" />
              <input className="p-3 rounded bg-white/6 border border-white/10" placeholder="Subject" />
              <textarea className="p-3 rounded bg-white/6 border border-white/10" rows={6} placeholder="Message"></textarea>
              <div className="text-right">
                <button className="px-6 py-2 bg-[var(--accent)] rounded">Send Message</button>
              </div>
            </form>
          </div>

          <div className="text-center muted">
            <div>📧 competitivprogrammer@example.com</div>
            <div className="mt-2">GitHub • Codeforces • AtCoder</div>
          </div>
        </div>
      </div>
    </div>
  )
}