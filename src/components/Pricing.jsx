export default function Pricing() {
  const tiers = [
    {
      name: 'Solo',
      price: '$8',
      period: '/mo',
      tagline: 'For individual workers & freelancers',
      features: ['Unlimited entries', 'AI suggestions', 'Export to CSV', 'Email support'],
      cta: 'Start Solo'
    },
    {
      name: 'Crew',
      price: '$29',
      period: '/mo',
      tagline: 'Up to 10 people',
      features: ['Everything in Solo', 'Shared projects', 'Approvals with empathy', 'Priority support'],
      cta: 'Start Crew',
      highlight: true
    },
    {
      name: 'Collective',
      price: 'Custom',
      period: '',
      tagline: 'For larger orgs, co-ops & unions',
      features: ['All features', 'SAML/SSO', 'Custom workflows', 'Dedicated success'],
      cta: 'Talk to us'
    }
  ]

  return (
    <section id="pricing" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-100 text-center">Fair pricing for real work</h2>
        <p className="mt-2 text-center text-emerald-300/80">Simple plans designed to respect your time and budget</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`${t.highlight ? 'ring-2 ring-emerald-400' : ''} rounded-2xl border border-emerald-700/40 bg-gradient-to-b from-emerald-950 to-slate-950 p-6 shadow-xl`}>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-extrabold text-emerald-300">{t.price}</div>
                <div className="text-emerald-400/80">{t.period}</div>
              </div>
              <div className="mt-1 text-lg font-semibold text-emerald-100">{t.name}</div>
              <div className="text-sm text-emerald-300/80">{t.tagline}</div>
              <ul className="mt-4 space-y-2 text-emerald-200/90 text-sm">
                {t.features.map((f) => (<li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{f}</li>))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold transition">{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
