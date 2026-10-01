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

export default function AudioLab() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 pb-4 text-3xl font-semibold text-slate-900">
        {t("guide.sections.audiolab")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-700">
        {t("guide.s10.desc1")}
      </p>
      <p className="mb-8 leading-relaxed text-slate-700">
        {t("guide.s10.desc2")}
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            1. {t("guide.s10.f1_title")}
          </h3>
          <p className="leading-relaxed text-slate-700">
            {t("guide.s10.f1_desc")}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            2. {t("guide.s10.f2_title")}
          </h3>
          <p className="leading-relaxed text-slate-700">
            {t("guide.s10.f2_desc")}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            3. {t("guide.s10.f3_title")}
          </h3>
          <p className="leading-relaxed text-slate-700">
            {t("guide.s10.f3_desc")}
          </p>
        </div>

        <motion.div
          className="mt-6 mb-8 rounded-2xl bg-slate-900/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="mb-3 text-xl font-semibold text-slate-900">
            4. {t("guide.s10.f4_title")}
          </h3>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            {t("guide.s10.f4_desc")}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
