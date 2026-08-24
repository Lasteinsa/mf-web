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

export default function Customization() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 pb-4 text-3xl font-semibold text-slate-900">
        {t("guide.sections.customization")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-700">
        {t("guide.s2.desc")}
      </p>
      <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-700">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <li key={i}>
            <strong>{t(`guide.s2.l${i}_title`)}</strong>
            {""}
            {t(`guide.s2.l${i}_desc`)}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
