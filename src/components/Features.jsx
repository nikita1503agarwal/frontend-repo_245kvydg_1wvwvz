import { Shield, Clock4, Sparkles, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "On the worker's side",
    desc: 'Your data stays yours. Transparent hours, fair pay, and no dark patterns.'
  },
  {
    icon: Clock4,
    title: 'Smart hour tracking',
    desc: 'AI-assisted suggestions to fill gaps and flag overwork before it happens.'
  },
  {
    icon: Sparkles,
    title: 'Modern & delightful',
    desc: 'A playful 16-bit aesthetic with enterprise-grade reliability.'
  },
  {
    icon: HeartHandshake,
    title: 'For people-first teams',
    desc: 'Built for freelancers, unions, and orgs who value worker wellbeing.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card-8bit p-5 hover:glow-emerald transition">
              <f.icon className="w-6 h-6 text-emerald-300" />
              <h3 className="mt-3 font-semibold text-emerald-100 pixel-font">{f.title}</h3>
              <p className="mt-2 text-sm text-emerald-300/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
