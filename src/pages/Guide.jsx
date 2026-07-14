import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Settings, Layout, Search, Image as ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const ExpandableImageGroup = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex flex-col items-center w-full relative">
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : "240px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full overflow-hidden relative rounded-3xl"
      >
        <div>
          {children}
        </div>
        
        {/* Gradient Overlay for collapsed state */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent flex items-end justify-center pb-8 z-10"
            >
              <button 
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95 text-white shadow-lg shadow-orange-500/25"
              >
                <ImageIcon className="w-4 h-4" />
                {t('guide.show_images')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hide button when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => setIsExpanded(false)}
            className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            {t('guide.hide_images')}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

const Guide = () => {
  const { t } = useTranslation();

  const sections = [
    { id: "getting-started", title: t('guide.sections.getting_started'), icon: <BookOpen className="w-5 h-5" /> },
    { id: "customization", title: t('guide.sections.customization'), icon: <Layout className="w-5 h-5" /> },
    { id: "audio-engine", title: t('guide.sections.audio_engine'), icon: <Settings className="w-5 h-5" /> },
    { id: "lyrics", title: t('guide.sections.lyrics_setup'), icon: <Search className="w-5 h-5" /> },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerImages = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
            <h3 className="font-semibold text-lg mb-6 text-white">{t('guide.contents')}</h3>
            <nav className="flex flex-col gap-3">
              {sections.map((section, idx) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  {section.icon}
                  {section.title}
                </motion.a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 prose prose-invert prose-slate max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">{t('guide.title')}</h1>
            <p className="text-xl text-slate-400 mb-12">
              {t('guide.subtitle')}
            </p>
          </motion.div>

          <motion.section 
            id="getting-started" 
            className="mb-16 scroll-mt-32"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{t('guide.sections.getting_started')}</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              {t('guide.s1.desc')}
            </p>
            <ul className="list-disc list-outside ml-6 text-slate-300 space-y-2 mb-8">
              <li>{t('guide.s1.l1')}</li>
              <li>{t('guide.s1.l2')}</li>
              <li>{t('guide.s1.l3')}</li>
              <li>{t('guide.s1.l4')}</li>
            </ul>
            <ExpandableImageGroup>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img src="/assets/settings-screen.jpg" alt="Settings Screen" className="w-full max-w-sm rounded-3xl border-2 border-white/10 shadow-2xl" />
              </motion.div>
            </ExpandableImageGroup>
          </motion.section>

          <motion.section 
            id="customization" 
            className="mb-16 scroll-mt-32"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{t('guide.sections.customization')}</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              {t('guide.s2.desc')}
            </p>
            <ul className="list-disc list-outside ml-6 text-slate-300 space-y-2 mb-8">
              {[1, 2, 3, 4, 5, 6, 7].map(i => (
                <li key={i}><strong>{t(`guide.s2.l${i}_title`)}</strong> {t(`guide.s2.l${i}_desc`)}</li>
              ))}
            </ul>
            <ExpandableImageGroup>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={staggerImages}
                initial="hidden"
                animate="visible"
              >
                <motion.img variants={staggerImages} src="/assets/modern-layout-screen.jpg" alt="Modern Layout" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <motion.img variants={staggerImages} src="/assets/radial-layout-screen.jpg" alt="Radial Layout" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <motion.img variants={staggerImages} src="/assets/appereance-personalization-screen.jpg" alt="Appearance Personalization" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <motion.img variants={staggerImages} src="/assets/customize-navigation-screen.jpg" alt="Customize Navigation" className="w-full rounded-3xl border border-white/10 shadow-xl" />
              </motion.div>
            </ExpandableImageGroup>
          </motion.section>

          <motion.section 
            id="audio-engine" 
            className="mb-16 scroll-mt-32"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{t('guide.sections.audio_engine')}</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              {t('guide.s3.desc1')}
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              {t('guide.s3.desc2')}
            </p>

            <motion.div 
              className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
            </motion.div>

            <ExpandableImageGroup>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img src="/assets/audio-engine-screen.jpg" alt="Audio Engine Configuration" className="w-full max-w-sm rounded-3xl border-2 border-white/10 shadow-2xl" />
              </motion.div>
            </ExpandableImageGroup>
          </motion.section>

          <motion.section 
            id="lyrics" 
            className="mb-16 scroll-mt-32"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{t('guide.sections.lyrics_setup')}</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              {t('guide.s4.desc1')}
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              {t('guide.s4.desc2')}
            </p>
            <ExpandableImageGroup>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={staggerImages}
                initial="hidden"
                animate="visible"
              >
                <motion.img variants={staggerImages} src="/assets/lyrics-provider-screen.jpg" alt="Lyrics Provider Settings" className="w-full rounded-3xl border border-white/10 shadow-xl" />
                <motion.img variants={staggerImages} src="/assets/lyrics-screen.jpg" alt="Lyrics View" className="w-full rounded-3xl border border-white/10 shadow-xl" />
              </motion.div>
            </ExpandableImageGroup>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default Guide;
