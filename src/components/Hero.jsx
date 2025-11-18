import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-900/40 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-teal-900/40 blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pixelate" style={{backgroundImage:"url('https://i.imgur.com/9lT9f8o.png')", backgroundSize:'64px 64px'}}></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight pixel-font text-emerald-100 drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              Workaround.io
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-base md:text-lg text-emerald-200/90"
            >
              Don’t work around the clock. Track hours with an AI ally that champions workers.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="btn-8bit">See Pricing</a>
              <a href="#auth" className="btn-8bit-ghost">Get Started</a>
            </div>
            <div className="mt-6 text-xs text-emerald-300/70 pixel-font">For workers, freelancers, and teams who put people first.</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl pixel-border dither-bg p-4 shadow-2xl">
              <div className="h-full w-full rounded-lg grid grid-cols-3 gap-2 p-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-md dither-bg border border-emerald-700/30 pixel-shadow"></div>
                ))}
              </div>
              <div className="mt-3 text-center text-emerald-300/80 text-sm pixel-font">A 16-bit inspired dashboard vibe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
