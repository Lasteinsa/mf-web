import { motion } from "framer-motion";
import { Shield, Lock, HardDrive, Music, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: <Lock className="h-6 w-6 text-orange-400" />,
      title: t("privacy.s1_title"),
      content: t("privacy.s1_desc"),
    },
    {
      icon: <HardDrive className="h-6 w-6 text-red-400" />,
      title: t("privacy.s2_title"),
      content: t("privacy.s2_desc"),
    },
    {
      icon: <Music className="h-6 w-6 text-amber-400" />,
      title: t("privacy.s3_title"),
      content: t("privacy.s3_desc"),
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />,
      title: t("privacy.s4_title"),
      content: t("privacy.s4_desc"),
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-6 pt-32 pb-24">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-red-500/20 to-orange-500/20">
          <Shield className="h-8 w-8 text-orange-400" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {t("privacy.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          {t("privacy.subtitle")}
        </p>
        <div className="mt-4 inline-block rounded-full bg-slate-900/5 px-4 py-1.5 text-xs font-semibold text-slate-700">
          {t("privacy.effective_date")}
        </div>
      </motion.div>

      {/* Sections Grid */}
      <div className="space-y-6">
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl bg-slate-900/5 p-8 backdrop-blur-md transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 rounded-2xl bg-slate-900/5 p-3">
                {sec.icon}
              </div>
              <div>
                <h2 className="mb-3 text-xl font-bold text-slate-900">
                  {sec.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                  {sec.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Contact Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center text-sm text-slate-500"
      >
        <p>{t("privacy.footer_note")}</p>
      </motion.div>
    </div>
  );
};

export default Privacy;
