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

export default function SmartAudioAi() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 pb-4 text-3xl font-semibold text-slate-900">
        {t("guide.sections.smart_audio_ai")}
      </h2>
      <p className="mb-8 leading-relaxed text-slate-700">
        {t("guide.s8.desc1")}
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            1. {t("guide.s8.f1_title")}
          </h3>
          <p className="leading-relaxed text-slate-700">
            {t("guide.s8.f1_desc")}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            2. {t("guide.s8.f2_title")}
          </h3>
          <p className="leading-relaxed text-slate-700">
            {t("guide.s8.f2_desc")}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            3. {t("guide.s8.f3_title")}
          </h3>
          <p className="leading-relaxed text-slate-700">
            {t("guide.s8.f3_desc")}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
