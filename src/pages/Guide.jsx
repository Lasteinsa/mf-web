import { motion } from "framer-motion";
import { BookOpen, Settings, Layout, Search } from "lucide-react";

const sections = [
  { id: "getting-started", title: "Getting Started", icon: <BookOpen className="w-5 h-5" /> },
  { id: "customization", title: "Customization", icon: <Layout className="w-5 h-5" /> },
  { id: "audio-engine", title: "Audio Engine", icon: <Settings className="w-5 h-5" /> },
  { id: "lyrics", title: "Lyrics Setup", icon: <Search className="w-5 h-5" /> },
];

const Guide = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-6 text-white">Contents</h3>
            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  {section.icon}
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 prose prose-invert prose-slate max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">User Guide</h1>
            <p className="text-xl text-slate-400 mb-12">
              Welcome to the official MF Music Player documentation. Here you'll find everything you need to get the most out of your audiophile experience.
            </p>

            <section id="getting-started" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">Getting Started</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                MF Music Player is designed to play your local music collection with absolute pristine quality. To start:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
                <li>Download the latest APK from the home page.</li>
                <li>Install the application on your Android device.</li>
                <li>Grant storage permissions so the app can scan your local music library.</li>
                <li>Wait for the initial scan to complete. High-resolution FLAC and ALAC files are fully supported.</li>
              </ul>
              <div className="flex justify-center">
                <img src="/assets/settings-screen.jpg" alt="Settings Screen" className="w-full max-w-sm rounded-3xl border-2 border-white/10 shadow-2xl" />
              </div>
            </section>

            <section id="customization" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">Customization</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The interface is entirely yours to mold. Navigate to <strong>Settings &gt; Appearance</strong> to explore:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
                <li><strong>Radial Layouts:</strong> Switch between standard grid and beautiful radial displays for your albums.</li>
                <li><strong>Navigation:</strong> Customize the bottom navigation bar to only show the tabs you actually use.</li>
                <li><strong>Dynamic Colors:</strong> The UI automatically adapts its color palette to match your currently playing album art.</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <img src="/assets/appereance-personalization-screen.jpg" alt="Appearance Personalization" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <img src="/assets/modern-layout-screen.jpg" alt="Modern Layout" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <img src="/assets/radial-layout-screen.jpg" alt="Radial Layout" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <img src="/assets/customize-navigation-screen.jpg" alt="Customize Navigation" className="w-full rounded-3xl border border-white/10 shadow-xl" />
              </div>
            </section>

            <section id="audio-engine" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">Audio Engine</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                MF Android bypasses standard Android audio limits to deliver Bit-Perfect playback directly to your DAC.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                Ensure that your external USB DAC is connected before launching the app. Head to <strong>Settings &gt; Audio Engine</strong> to enable exclusive mode, which locks the sample rate to perfectly match the source file.
              </p>
              <div className="flex justify-center">
                <img src="/assets/audio-engine-screen.jpg" alt="Audio Engine Configuration" className="w-full max-w-sm rounded-3xl border-2 border-white/10 shadow-2xl" />
              </div>
            </section>

            <section id="lyrics" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">Lyrics Setup</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The app supports both embedded lyrics and online lyrics providers. 
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                To configure providers, go to <strong>Settings &gt; Lyrics Provider</strong> and prioritize your preferred sources. Synchronized lyrics (.lrc) will automatically scroll along with your music.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <img src="/assets/lyrics-provider-screen.jpg" alt="Lyrics Provider Settings" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <img src="/assets/lyrics-screen.jpg" alt="Lyrics View" className="w-full rounded-3xl border border-white/10 shadow-xl" />
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Guide;
