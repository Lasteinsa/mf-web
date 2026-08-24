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

export default function LibraryManagement() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 pb-4 text-3xl font-semibold text-slate-900">
        {t("guide.sections.library_management")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-700">
        {t("guide.s4.desc1")}
      </p>
      <p className="mb-4 leading-relaxed text-slate-700">
        {t("guide.s4.desc2")}
      </p>
      <div className="mb-6 space-y-4 rounded-2xl bg-slate-900/5 p-6">
        <p className="text-sm leading-relaxed text-slate-700 md:text-base">
          {t("guide.s4.desc3")}
        </p>
        <p className="text-sm leading-relaxed text-slate-700 md:text-base">
          {t("guide.s4.desc4")}
        </p>
      </div>
      <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-700">
        <li>
          <strong>{t("guide.s4.l1_title")}</strong> {t("guide.s4.l1_desc")}
        </li>
        <li>
          <strong>{t("guide.s4.l2_title")}</strong> {t("guide.s4.l2_desc")}
        </li>
      </ul>
    </motion.section>
  );
}
