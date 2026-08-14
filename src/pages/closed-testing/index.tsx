import {
  CheckCircle2,
  ExternalLink,
  Mail,
  Users,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { links } from "../../utils/links";

const ClosedTesting = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Users className="h-7 w-7" />,
      title: t("closed_testing.steps.join_group.title"),
      description: t("closed_testing.steps.join_group.description"),
      action: t("closed_testing.steps.join_group.action"),
      link: links.googleGroupLink,
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: t("closed_testing.steps.accept_invite.title"),
      description: t("closed_testing.steps.accept_invite.description"),
      action: t("closed_testing.steps.accept_invite.action"),
      link: links.testingInviteLink,
    },
    {
      icon: <Download className="h-7 w-7" />,
      title: t("closed_testing.steps.install_app.title"),
      description: t("closed_testing.steps.install_app.description"),
      action: t("closed_testing.steps.install_app.action"),
      link: links.installLink,
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-6 py-24 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-emerald-500/20 to-blue-500/20 shadow-xl">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {t("closed_testing.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
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
            className="relative flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-md"
          >
            <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-black">
              {index + 1}
            </div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-400">
              {step.icon}
            </div>
            <h2 className="mb-3 text-xl font-bold text-white">{step.title}</h2>
            <p className="mb-7 flex-1 leading-relaxed text-slate-400">
              {step.description}
            </p>
            <a
              href={step.link}
              target={step.link === "#" ? undefined : "_blank"}
              rel={step.link === "#" ? undefined : "noopener noreferrer"}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              {step.action}
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4 text-slate-400">
          {t("closed_testing.help_discord")}
        </p>
        <a
          href={links.discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-indigo-500/20 px-6 py-3 font-semibold text-indigo-300 transition-colors hover:bg-indigo-500/30"
        >
          <Users className="h-5 w-5" />
          Discord
        </a>
      </div>

      <p className="mt-10 text-center text-sm text-slate-500">
        {t("closed_testing.note")}
      </p>
    </div>
  );
};

export default ClosedTesting;
