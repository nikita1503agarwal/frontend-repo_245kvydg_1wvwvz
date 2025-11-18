import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-900/40 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-teal-900/40 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-5 mix-blend-soft-light bg-cover bg-center"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-100 drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              Workaround.io
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-emerald-200/90"
            >
              Don't work around the clock. Track hours with an AI ally that's on the side of the worker.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold transition shadow-[0_0_20px_rgba(16,185,129,0.35)]">See Pricing</a>
              <a href="#auth" className="px-6 py-3 rounded-lg border border-emerald-400/40 text-emerald-200 hover:bg-emerald-400/10 transition">Get Started</a>
            </div>
            <div className="mt-6 text-sm text-emerald-300/70">For workers, freelancers, and teams who put people first.</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-emerald-400/30 bg-gradient-to-b from-emerald-950 to-slate-950 p-4 shadow-2xl">
              <div className="h-full w-full rounded-lg bg-[linear-gradient(135deg,#0f332c_0%,#0a1f1a_60%)] grid grid-cols-3 gap-2 p-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-md bg-emerald-800/20 border border-emerald-700/30 shadow-inner"></div>
                ))}
              </div>
              <div className="mt-3 text-center text-emerald-300/80 text-sm">A 16-bit inspired dashboard vibe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
