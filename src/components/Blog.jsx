import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/blog`)
        const data = await res.json()
        setPosts(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-emerald-100">From the blog</h2>
        <p className="text-emerald-300/80">Updates on building a worker-first future</p>
        {loading ? (
          <div className="mt-6 text-emerald-300/80">Loading...</div>
        ) : (
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {posts.length === 0 && (
              <div className="text-emerald-300/70">No posts yet. Check back soon!</div>
            )}
            {posts.map((p) => (
              <article key={p.slug} className="rounded-xl border border-emerald-700/40 bg-emerald-950/50 p-5 shadow-xl">
                <div className="text-sm text-emerald-400/80">{p.published_at ? new Date(p.published_at).toLocaleDateString() : 'Draft'}</div>
                <h3 className="mt-1 text-lg font-semibold text-emerald-100">{p.title}</h3>
                <p className="text-sm text-emerald-300/80">{p.excerpt}</p>
                <div className="mt-3 text-emerald-400/80 text-sm">{p.author || 'Workaround'}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
