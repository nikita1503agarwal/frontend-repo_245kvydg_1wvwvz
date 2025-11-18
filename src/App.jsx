import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Auth from './components/Auth'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="crt min-h-screen bg-[linear-gradient(180deg,#06150f_0%,#020807_100%)] text-emerald-100">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-emerald-800/40 bg-emerald-950/40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-emerald-500 glow-emerald pixel-border" />
            <span className="font-extrabold tracking-wide pixel-font">Workaround.io</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-emerald-300/90">
            <a href="#features" className="hover:text-emerald-200">Features</a>
            <a href="#pricing" className="hover:text-emerald-200">Pricing</a>
            <a href="#blog" className="hover:text-emerald-200">Blog</a>
            <a href="#contact" className="hover:text-emerald-200">Contact</a>
            <a href="#auth" className="btn-8bit">Sign in</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <div id="features"><Features /></div>
        <Pricing />
        <Auth />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-emerald-800/40 py-10 text-center text-emerald-300/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm pixel-font">© {new Date().getFullYear()} Workaround.io — "Don't work around the clock."</div>
        </div>
      </footer>
    </div>
  )
}

export default App
