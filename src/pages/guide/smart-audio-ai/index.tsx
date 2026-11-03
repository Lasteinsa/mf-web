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
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i}>
            <h3 className="mb-3 text-xl font-bold text-slate-900">
              {i}. {t(`guide.s8.f${i}_title`)}
            </h3>
            <p className="leading-relaxed text-slate-700">
              {t(`guide.s8.f${i}_desc`)}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
