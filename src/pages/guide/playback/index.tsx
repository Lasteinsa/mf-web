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

export default function Playback() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
        {t("guide.sections.playback")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-300">
        {t("guide.s6.desc1")}
      </p>
      <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-300">
        <li>
          <strong>{t("guide.s6.l1_title")}</strong> {t("guide.s6.l1_desc")}
        </li>
        <li>
          <strong>{t("guide.s6.l2_title")}</strong> {t("guide.s6.l2_desc")}
        </li>
      </ul>
    </motion.section>
  );
}
