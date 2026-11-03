import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Sparkles } from "lucide-react";

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

      {/* General Features & Tag Writing */}
      <motion.div
        className="mt-6 mb-10 rounded-2xl bg-slate-900/5 p-6"
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

      {/* Cloudflare Workers AI Translation Setup */}
      <div className="mb-6">
        <h3 className="mb-3 text-2xl font-bold text-slate-900">
          {t("guide.s5.cf_heading")}
        </h3>
        <p className="leading-relaxed text-slate-700">
          {t("guide.s5.cf_desc1")}
        </p>
      </div>

      <motion.div
        className="mb-8 rounded-2xl bg-slate-900/5 p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="space-y-6 text-slate-700">
          <div>
            <h4 className="mb-2 text-lg font-bold text-slate-900">
              {t("guide.s5.cf_step1_title")}
            </h4>
            <p className="leading-relaxed text-slate-600">
              {t("guide.s5.cf_step1_desc")}
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-lg font-bold text-slate-900">
              {t("guide.s5.cf_step2_title")}
            </h4>
            <p className="leading-relaxed text-slate-600">
              {t("guide.s5.cf_step2_desc")}
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-lg font-bold text-slate-900">
              {t("guide.s5.cf_step3_title")}
            </h4>
            <p className="leading-relaxed text-slate-600">
              {t("guide.s5.cf_step3_desc")}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Recommended Models */}
      <motion.div
        className="mb-8 rounded-2xl bg-blue-500/10 p-6 border border-blue-500/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <h4 className="text-lg font-bold text-blue-950">
            {t("guide.s5.cf_models_title")}
          </h4>
        </div>
        <ul className="space-y-3 text-slate-700">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex flex-col gap-1">
              <span className="font-mono text-sm font-semibold text-blue-900">
                {t(`guide.s5.cf_m${i}_name`)}
              </span>
              <span className="text-sm text-slate-600 leading-relaxed">
                {t(`guide.s5.cf_m${i}_desc`)}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Troubleshooting & Security */}
      <motion.div
        className="mb-8 rounded-2xl bg-amber-500/10 p-6 border border-amber-500/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="mb-4 flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-amber-700 flex-shrink-0" />
          <h4 className="text-lg font-bold text-amber-950">
            {t("guide.s5.cf_troubleshoot_title")}
          </h4>
        </div>
        <ul className="ml-4 list-disc space-y-2 text-sm text-amber-900/80 marker:text-amber-500/60">
          <li>{t("guide.s5.cf_troubleshoot_p1")}</li>
          <li>{t("guide.s5.cf_troubleshoot_p2")}</li>
          <li>{t("guide.s5.cf_troubleshoot_p3")}</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
