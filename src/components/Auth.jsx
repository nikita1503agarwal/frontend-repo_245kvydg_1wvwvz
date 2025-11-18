import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Auth() {
  const [mode, setMode] = useState('signup')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${API_BASE}/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mode === 'signup' ? { name, email, password } : { email, password })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setResult({ type: 'success', message: `${mode} successful. Welcome, ${data.name}!` })
    } catch (err) {
      setResult({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="auth" className="relative">
      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/60 p-6 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => setMode('signup')} className={`px-3 py-1.5 rounded-lg ${mode==='signup'?'bg-emerald-500 text-slate-900':'text-emerald-200 border border-emerald-700/50'}`}>Sign up</button>
            <button onClick={() => setMode('login')} className={`px-3 py-1.5 rounded-lg ${mode==='login'?'bg-emerald-500 text-slate-900':'text-emerald-200 border border-emerald-700/50'}`}>Log in</button>
          </div>
          <form onSubmit={submit} className="space-y-3">
            {mode==='signup' && (
              <div>
                <label className="block text-sm text-emerald-300 mb-1">Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-emerald-700/50 text-emerald-100" required />
              </div>
            )}
            <div>
              <label className="block text-sm text-emerald-300 mb-1">Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-emerald-700/50 text-emerald-100" required />
            </div>
            <div>
              <label className="block text-sm text-emerald-300 mb-1">Password</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-emerald-700/50 text-emerald-100" required />
            </div>
            <button disabled={loading} className="w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold transition">{loading? 'Please wait...' : mode==='signup'?'Create account':'Log in'}</button>
          </form>
          {result && (
            <div className={`mt-3 text-sm ${result.type==='success'?'text-emerald-300':'text-red-300'}`}>{result.message}</div>
          )}
        </div>
      </div>
    </section>
  )
}
