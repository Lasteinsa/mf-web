import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Settings,
  Layout,
  Image as ImageIcon,
  Library,
  Music,
  PlayCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SettingsSimulation from "../../components/simulations/settings-simulation";

const ExpandableImageGroup = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative mt-8 flex w-full flex-col items-center">
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : "240px" }}
        transition={{ duration: 0.5, ease: "easeInOut" as any }}
        className="relative w-full overflow-hidden rounded-3xl"
      >
        <div>{children}</div>

        {/* Gradient Overlay for collapsed state */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="from-bg-dark via-bg-dark/80 absolute inset-0 z-10 flex items-end justify-center bg-linear-to-t to-transparent pb-8"
            >
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-2 rounded-full bg-linear-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-105 hover:from-red-600 hover:to-orange-600 active:scale-95"
              >
                <ImageIcon className="h-4 w-4" />
                {t("guide.show_images")}
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
            className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            {t("guide.hide_images")}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

const Guide = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: "getting-started",
      title: t("guide.sections.getting_started"),
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      id: "customization",
      title: t("guide.sections.customization"),
      icon: <Layout className="h-5 w-5" />,
    },
    {
      id: "library-management",
      title: t("guide.sections.library_management"),
      icon: <Library className="h-5 w-5" />,
    },
    {
      id: "playback",
      title: t("guide.sections.playback"),
      icon: <PlayCircle className="h-5 w-5" />,
    },
    {
      id: "audio-engine",
      title: t("guide.sections.audio_engine"),
      icon: <Settings className="h-5 w-5" />,
    },
    {
      id: "lyrics",
      title: t("guide.sections.lyrics_setup"),
      icon: <Music className="h-5 w-5" />,
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as any },
    },
  };

  const staggerImages = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row">
        {/* Sidebar */}
        <aside className="shrink-0 md:w-64">
          <div className="sticky top-32 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
            <h3 className="mb-6 text-lg font-semibold text-white">
              {t("guide.contents")}
            </h3>
            <nav className="flex flex-col gap-3">
              {sections.map((section, idx) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  {section.icon}
                  {section.title}
                </motion.a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="prose prose-invert prose-slate max-w-none flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
              {t("guide.title")}
            </h1>
            <p className="mb-12 text-xl text-slate-400">
              {t("guide.subtitle")}
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
            <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
              {t("guide.sections.getting_started")}
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t("guide.s1.desc")}
            </p>
            <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-300">
              <li>{t("guide.s1.l1")}</li>
              <li>{t("guide.s1.l2")}</li>
              <li>{t("guide.s1.l3")}</li>
              <li>{t("guide.s1.l4")}</li>
              <li>{t("guide.s1.l5")}</li>
            </ul>
            <ExpandableImageGroup>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <SettingsSimulation />
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
            <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
              {t("guide.sections.customization")}
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t("guide.s2.desc")}
            </p>
            <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-300">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <li key={i}>
                  <strong>{t(`guide.s2.l${i}_title`)}</strong>{" "}
                  {t(`guide.s2.l${i}_desc`)}
                </li>
              ))}
            </ul>
            <ExpandableImageGroup>
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                variants={staggerImages}
                initial="hidden"
                animate="visible"
              >
                <motion.img
                  variants={staggerImages}
                  src="/assets/modern-layout-screen.jpg"
                  alt="Modern Layout"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
                <motion.img
                  variants={staggerImages}
                  src="/assets/radial-layout-screen.jpg"
                  alt="Radial Layout"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
                <motion.img
                  variants={staggerImages}
                  src="/assets/appereance-personalization-screen.jpg"
                  alt="Appearance Personalization"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
                <motion.img
                  variants={staggerImages}
                  src="/assets/customize-navigation-screen.jpg"
                  alt="Customize Navigation"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
              </motion.div>
            </ExpandableImageGroup>
          </motion.section>

          <motion.section
            id="library-management"
            className="mb-16 scroll-mt-32"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
              {t("guide.sections.library_management")}
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t("guide.s4.desc1")}
            </p>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t("guide.s4.desc2")}
            </p>
            <div className="mb-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                {t("guide.s4.desc3")}
              </p>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                {t("guide.s4.desc4")}
              </p>
            </div>
            <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-300">
              <li>
                <strong>{t("guide.s4.l1_title")}</strong>{" "}
                {t("guide.s4.l1_desc")}
              </li>
              <li>
                <strong>{t("guide.s4.l2_title")}</strong>{" "}
                {t("guide.s4.l2_desc")}
              </li>
            </ul>
            <ExpandableImageGroup>
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                variants={staggerImages}
                initial="hidden"
                animate="visible"
              >
                <motion.img
                  variants={staggerImages}
                  src="/assets/edit-album-art.jpg"
                  alt="Edit Album Art"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
                <motion.img
                  variants={staggerImages}
                  src="/assets/edit-artist-art.jpg"
                  alt="Edit Artist Art"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
              </motion.div>
            </ExpandableImageGroup>
          </motion.section>

          <motion.section
            id="playback"
            className="mb-16 scroll-mt-32"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
              {t("guide.sections.playback")}
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t("guide.s6.desc1")}
            </p>
            <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-300">
              <li>
                <strong>{t("guide.s6.l1_title")}</strong>{" "}
                {t("guide.s6.l1_desc")}
              </li>
              <li>
                <strong>{t("guide.s6.l2_title")}</strong>{" "}
                {t("guide.s6.l2_desc")}
              </li>
            </ul>
          </motion.section>

          <motion.section
            id="audio-engine"
            className="mb-16 scroll-mt-32"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
              {t("guide.sections.audio_engine")}
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t("guide.s3.desc1")}
            </p>
            <p className="mb-6 leading-relaxed text-slate-300">
              {t("guide.s3.desc2")}
            </p>

            <motion.div
              className="mt-6 mb-8 rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {t("guide.s3.attn_title")}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300 md:text-base">
                {t("guide.s3.attn_desc1")}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-slate-300 md:text-base">
                {t("guide.s3.attn_desc2")}
              </p>
              <div className="mt-4 flex gap-3 rounded-xl border border-orange-500/20 bg-orange-500/10 p-4">
                <span className="text-xl">⚠️</span>
                <p className="text-sm text-orange-200">
                  <strong>{t("guide.s3.attn_warn_title")}</strong>{" "}
                  {t("guide.s3.attn_warn_desc")}
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
                <img
                  src="/assets/audio-engine-screen.jpg"
                  alt="Audio Engine Configuration"
                  className="w-full max-w-sm rounded-3xl border-2 border-white/10 shadow-2xl"
                />
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
            <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
              {t("guide.sections.lyrics_setup")}
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              {t("guide.s5.desc1")}
            </p>
            <p className="mb-8 leading-relaxed text-slate-300">
              {t("guide.s5.desc2")}
            </p>

            <motion.div
              className="mt-6 mb-8 rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-4 text-lg leading-relaxed font-semibold text-slate-300">
                {t("guide.s5.desc3")}
              </p>
              <ul className="mb-4 ml-6 list-outside list-disc space-y-2 text-slate-300">
                <li>
                  <strong>{t("guide.s5.l1_title")}</strong>{" "}
                  {t("guide.s5.l1_desc")}
                </li>
                <li>
                  <strong>{t("guide.s5.l2_title")}</strong>{" "}
                  {t("guide.s5.l2_desc")}
                </li>
                <li>
                  <strong>{t("guide.s5.l3_title")}</strong>{" "}
                  {t("guide.s5.l3_desc")}
                </li>
              </ul>
            </motion.div>

            <ExpandableImageGroup>
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                variants={staggerImages}
                initial="hidden"
                animate="visible"
              >
                <motion.img
                  variants={staggerImages}
                  src="/assets/select-lyrics.jpg"
                  alt="Select Lyrics"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
                <motion.img
                  variants={staggerImages}
                  src="/assets/lyrics-applied.jpg"
                  alt="Lyrics Applied"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
                <motion.img
                  variants={staggerImages}
                  src="/assets/lyrics-screen.jpg"
                  alt="Lyrics View"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
                <motion.img
                  variants={staggerImages}
                  src="/assets/lyrics-providers-plugin.jpg"
                  alt="Romanization Plugin"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
                <motion.img
                  variants={staggerImages}
                  src="/assets/lyric-translator-plugin.jpg"
                  alt="Lyrics Translation"
                  className="w-full rounded-3xl border border-white/10 shadow-xl"
                />
              </motion.div>
            </ExpandableImageGroup>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default Guide;
