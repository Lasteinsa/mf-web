import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ExpandableImageGroup from "../../../features/guide/components/expandable-image-group";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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

export default function Lyrics() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
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
            <strong>{t("guide.s5.l1_title")}</strong> {t("guide.s5.l1_desc")}
          </li>
          <li>
            <strong>{t("guide.s5.l2_title")}</strong> {t("guide.s5.l2_desc")}
          </li>
          <li>
            <strong>{t("guide.s5.l3_title")}</strong> {t("guide.s5.l3_desc")}
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
            src="/assets/lyric-translator-plugin.jpg"
            alt="Lyrics Translation"
            className="w-full rounded-3xl border border-white/10 shadow-xl"
          />
        </motion.div>
      </ExpandableImageGroup>
    </motion.section>
  );
}
