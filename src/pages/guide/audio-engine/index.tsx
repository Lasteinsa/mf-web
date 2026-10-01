import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AudioEngine() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 pb-4 text-3xl font-semibold text-slate-900">
        {t("guide.sections.audio_engine")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-700">
        {t("guide.s3.desc1")}
      </p>
      <p className="mb-6 leading-relaxed text-slate-700">
        {t("guide.s3.desc2")}
      </p>

      <motion.div
        className="mt-6 mb-8 rounded-2xl bg-slate-900/5 p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="mb-3 text-xl font-semibold text-slate-900">
          {t("guide.s3.attn_title")}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
          {t("guide.s3.attn_desc1")}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
          {t("guide.s3.attn_desc2")}
        </p>
        <div className="mt-4 flex gap-3 rounded-xl bg-orange-500/20 p-4 border border-orange-500/30">
          <AlertTriangle className="h-5 w-5 text-orange-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-orange-900">
            <strong>{t("guide.s3.attn_warn_title")}</strong>
            {" "}
            {t("guide.s3.attn_warn_desc")}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
