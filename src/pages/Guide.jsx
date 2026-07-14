import { motion } from "framer-motion";
import { BookOpen, Settings, Layout, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const Guide = () => {
  const { t } = useTranslation();

  const sections = [
    { id: "getting-started", title: t('guide.sections.getting_started'), icon: <BookOpen className="w-5 h-5" /> },
    { id: "customization", title: t('guide.sections.customization'), icon: <Layout className="w-5 h-5" /> },
    { id: "audio-engine", title: t('guide.sections.audio_engine'), icon: <Settings className="w-5 h-5" /> },
    { id: "lyrics", title: t('guide.sections.lyrics_setup'), icon: <Search className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-6 text-white">{t('guide.contents')}</h3>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">{t('guide.title')}</h1>
            <p className="text-xl text-slate-400 mb-12">
              {t('guide.subtitle')}
            </p>

            <section id="getting-started" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{t('guide.sections.getting_started')}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t('guide.s1.desc')}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
                <li>{t('guide.s1.l1')}</li>
                <li>{t('guide.s1.l2')}</li>
                <li>{t('guide.s1.l3')}</li>
                <li>{t('guide.s1.l4')}</li>
              </ul>
              <div className="flex justify-center">
                <img src="/assets/settings-screen.jpg" alt="Settings Screen" className="w-full max-w-sm rounded-3xl border-2 border-white/10 shadow-2xl" />
              </div>
            </section>

            <section id="customization" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{t('guide.sections.customization')}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t('guide.s2.desc')}
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
                <li><strong>{t('guide.s2.l1_title')}</strong> {t('guide.s2.l1_desc')}</li>
                <li><strong>{t('guide.s2.l2_title')}</strong> {t('guide.s2.l2_desc')}</li>
                <li><strong>{t('guide.s2.l3_title')}</strong> {t('guide.s2.l3_desc')}</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <img src="/assets/modern-layout-screen.jpg" alt="Modern Layout" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <img src="/assets/radial-layout-screen.jpg" alt="Radial Layout" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <img src="/assets/appereance-personalization-screen.jpg" alt="Appearance Personalization" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <img src="/assets/customize-navigation-screen.jpg" alt="Customize Navigation" className="w-full rounded-3xl border border-white/10 shadow-xl" />
              </div>
            </section>

            <section id="audio-engine" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{t('guide.sections.audio_engine')}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t('guide.s3.desc1')}
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                {t('guide.s3.desc2')}
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 mt-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t('guide.s3.attn_title')}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                  {t('guide.s3.attn_desc1')}
                </p>
                <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                  {t('guide.s3.attn_desc2')}
                </p>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mt-4 flex gap-3">
                  <span className="text-xl">⚠️</span>
                  <p className="text-sm text-orange-200">
                    <strong>{t('guide.s3.attn_warn_title')}</strong> {t('guide.s3.attn_warn_desc')}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <img src="/assets/audio-engine-screen.jpg" alt="Audio Engine Configuration" className="w-full max-w-sm rounded-3xl border-2 border-white/10 shadow-2xl" />
              </div>
            </section>

            <section id="lyrics" className="mb-16 scroll-mt-32">
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{t('guide.sections.lyrics_setup')}</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t('guide.s4.desc1')}
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                {t('guide.s4.desc2')}
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
