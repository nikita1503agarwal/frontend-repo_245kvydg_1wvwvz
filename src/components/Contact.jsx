import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, company })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ type: 'success', message: "Thanks! We'll be in touch soon." })
      setName(''); setEmail(''); setMessage(''); setCompany('')
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="card-8bit p-6">
          <h2 className="text-2xl font-extrabold text-emerald-100 pixel-font">Contact us</h2>
          <p className="text-emerald-300/80">Say hello or request a demo</p>
          <form onSubmit={submit} className="mt-4 grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs pixel-font text-emerald-300 mb-1">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} className="input-8bit" required />
            </div>
            <div>
              <label className="block text-xs pixel-font text-emerald-300 mb-1">Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="input-8bit" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs pixel-font text-emerald-300 mb-1">Company (optional)</label>
              <input value={company} onChange={e=>setCompany(e.target.value)} className="input-8bit" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs pixel-font text-emerald-300 mb-1">Message</label>
              <textarea rows="4" value={message} onChange={e=>setMessage(e.target.value)} className="input-8bit" required />
            </div>
            <div className="md:col-span-2">
              <button disabled={loading} className="w-full btn-8bit">{loading? 'Sending...' : 'Send message'}</button>
            </div>
          </form>
          {status && (
            <div className={`mt-3 text-sm ${status.type==='success'?'text-emerald-300':'text-red-300'}`}>{status.message}</div>
          )}
        </div>
      </div>
    </section>
  )
}
