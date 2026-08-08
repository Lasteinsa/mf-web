import { CheckCircle2, ExternalLink, Mail, Users, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { links } from "../utils/links";

const ClosedTesting = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Users className="w-7 h-7" />,
      title: t("closed_testing.steps.join_group.title"),
      description: t("closed_testing.steps.join_group.description"),
      action: t("closed_testing.steps.join_group.action"),
      link: links.googleGroupLink,
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: t("closed_testing.steps.accept_invite.title"),
      description: t("closed_testing.steps.accept_invite.description"),
      action: t("closed_testing.steps.accept_invite.action"),
      link: links.testingInviteLink,
    },
    {
      icon: <Download className="w-7 h-7" />,
      title: t("closed_testing.steps.install_app.title"),
      description: t("closed_testing.steps.install_app.description"),
      action: t("closed_testing.steps.install_app.action"),
      link: links.installLink,
    },
  ];

  return (
    <div className="py-24 pt-32 container mx-auto px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 mb-6 shadow-xl">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          {t("closed_testing.title")}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {t("closed_testing.subtitle")}
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 shadow-xl"
          >
            <div className="absolute -top-4 left-6 flex items-center justify-center w-9 h-9 rounded-full bg-white text-black font-bold">
              {index + 1}
            </div>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6">
              {step.icon}
            </div>
            <h2 className="text-xl font-bold text-white mb-3">{step.title}</h2>
            <p className="text-slate-400 leading-relaxed mb-7 flex-1">{step.description}</p>
            <a
              href={step.link}
              target={step.link === "#" ? undefined : "_blank"}
              rel={step.link === "#" ? undefined : "noopener noreferrer"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors"
            >
              {step.action}
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.article>
        ))}
      </div>

      <p className="text-center text-sm text-slate-500 mt-10">
        {t("closed_testing.note")}
      </p>
    </div>
  );
};

export default ClosedTesting;
