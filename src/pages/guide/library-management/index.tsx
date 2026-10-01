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
      <ul className="mb-8 ml-6 list-outside list-disc space-y-3 text-slate-700">
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>
            <strong>{t(`guide.s4.l${i}_title`)}</strong>{" "}
            {t(`guide.s4.l${i}_desc`)}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
