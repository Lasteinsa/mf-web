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

export default function GettingStarted() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 pb-4 text-3xl font-semibold text-slate-900">
        {t("guide.sections.getting_started")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-700">
        {t("guide.s1.desc")}
      </p>
      <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-700">
        <li>{t("guide.s1.l1")}</li>
        <li>{t("guide.s1.l2")}</li>
        <li>{t("guide.s1.l3")}</li>
      </ul>
    </motion.section>
  );
}
