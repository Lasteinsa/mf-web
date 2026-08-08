import { motion } from "framer-motion";
import { Shield, Lock, HardDrive, Music, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: <Lock className="w-6 h-6 text-orange-400" />,
      title: t("privacy.s1_title"),
      content: t("privacy.s1_desc"),
    },
    {
      icon: <HardDrive className="w-6 h-6 text-red-400" />,
      title: t("privacy.s2_title"),
      content: t("privacy.s2_desc"),
    },
    {
      icon: <Music className="w-6 h-6 text-amber-400" />,
      title: t("privacy.s3_title"),
      content: t("privacy.s3_desc"),
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      title: t("privacy.s4_title"),
      content: t("privacy.s4_desc"),
    },
  ];

  return (
    <div className="pb-24 pt-32 container mx-auto px-6 max-w-4xl">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-red-500/20 to-orange-500/20 border border-white/10 mb-6 shadow-xl">
          <Shield className="w-8 h-8 text-orange-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          {t("privacy.title")}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {t("privacy.subtitle")}
        </p>
        <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
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
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl hover:border-white/20 transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0">
                {sec.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  {sec.title}
                </h2>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
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
