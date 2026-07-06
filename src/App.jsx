import AppIcon from "./components/AppIcon";
import Features from "./components/Features";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-slate-50 font-sans selection:bg-primary selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AppIcon className="w-8 h-8 text-white" />
            <span className="font-bold text-xl tracking-tight">
              MF Music Player
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href={import.meta.env.VITE_DISCORD_LINK || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
