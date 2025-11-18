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
        <div className="card-8bit p-6">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={() => setMode('signup')} className={`btn-8bit-ghost ${mode==='signup'?'bg-emerald-400/10':''}`}>Sign up</button>
            <button onClick={() => setMode('login')} className={`btn-8bit-ghost ${mode==='login'?'bg-emerald-400/10':''}`}>Log in</button>
          </div>
          <form onSubmit={submit} className="space-y-3">
            {mode==='signup' && (
              <div>
                <label className="block text-xs pixel-font text-emerald-300 mb-1">Name</label>
                <input value={name} onChange={e=>setName(e.target.value)} className="input-8bit" required />
              </div>
            )}
            <div>
              <label className="block text-xs pixel-font text-emerald-300 mb-1">Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="input-8bit" required />
            </div>
            <div>
              <label className="block text-xs pixel-font text-emerald-300 mb-1">Password</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="input-8bit" required />
            </div>
            <button disabled={loading} className="w-full btn-8bit">{loading? 'Please wait...' : mode==='signup'?'Create account':'Log in'}</button>
          </form>
          {result && (
            <div className={`mt-3 text-sm ${result.type==='success'?'text-emerald-300':'text-red-300'}`}>{result.message}</div>
          )}
        </div>
      </div>
    </section>
  )
}
