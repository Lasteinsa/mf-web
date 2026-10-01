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

export default function Lyrics() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 pb-4 text-3xl font-semibold text-slate-900">
        {t("guide.sections.lyrics_setup")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-700">
        {t("guide.s5.desc1")}
      </p>
      <p className="mb-8 leading-relaxed text-slate-700">
        {t("guide.s5.desc2")}
      </p>

      <motion.div
        className="mt-6 mb-8 rounded-2xl bg-slate-900/5 p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="mb-4 text-lg leading-relaxed font-semibold text-slate-700">
          {t("guide.s5.desc3")}
        </p>
        <ul className="mb-4 ml-6 list-outside list-disc space-y-3 text-slate-700">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <li key={i}>
              <strong>{t(`guide.s5.l${i}_title`)}</strong>{" "}
              {t(`guide.s5.l${i}_desc`)}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
}
