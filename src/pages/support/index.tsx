import { HeartPlus, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";

const Support = () => {
  const { t } = useTranslation();

  const linkSupportData = [
    {
      icon: <HelpCircle />,
      title: t("support.links.discord"),
      link: import.meta.env.VITE_DISCORD_LINK || "#",
    },
    { icon: <Send />, title: t("support.links.telegram"), link: "" },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-6 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-blue-500/20 to-blue-500/20 shadow-xl">
          <HeartPlus className="h-8 w-8 text-blue-400" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {t("support.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          {t("support.subtitle")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 space-y-4 text-center"
      >
        {linkSupportData.map((it) => (
          <button
            className="placeitemplace-items-center flex w-full cursor-pointer place-content-center gap-2 rounded-2xl border px-8 py-4 transition-all duration-200 ease-in-out hover:scale-110"
            key={it.title}
            onClick={() => {
              if (!it.link || it.link === "#") return;
              window.open(it.link, "_blank", "noopener,noreferrer");
            }}
          >
            {it.icon}
            {it.title}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default Support;
