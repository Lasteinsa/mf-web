import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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

export default function Plugins() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h1 className="mb-6 pb-4 text-3xl font-semibold text-slate-900">
        {t("guide.sections.plugins")}
      </h1>
      <p className="mb-8 leading-relaxed text-slate-700">
        {t("guide.s7.desc1")}
      </p>

      <motion.div
        className="mt-6 mb-8 rounded-2xl bg-slate-900/5 p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ul className="ml-2 space-y-6 text-slate-700">
          <li>
            <strong className="mb-2 block text-xl font-bold text-slate-900">
              {t("guide.s7.rom_title")}
            </strong>
            <span className="leading-relaxed text-slate-600">
              {t("guide.s7.rom_desc")}
            </span>
          </li>
          <li>
            <strong className="mb-2 block text-xl font-bold text-slate-900">
              {t("guide.s7.trans_title")}
            </strong>
            <span className="leading-relaxed text-slate-600">
              {t("guide.s7.trans_desc")}
            </span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="mt-8 mb-8 rounded-2xl bg-amber-500/10 p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="mb-4 text-xl font-bold text-amber-400">
          ⚠️ {t("guide.s7.warn_title")}
        </h2>
        <ul className="ml-4 list-disc space-y-2 text-amber-200/80 marker:text-amber-500/50">
          <li>{t("guide.s7.warn_p1")}</li>
          <li>{t("guide.s7.warn_p2")}</li>
          <li>{t("guide.s7.warn_p3")}</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
