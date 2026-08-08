import { HeartPlus, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react"

const Support = () => {
  const { t } = useTranslation();

  const linkSupportData = [
    { icon: <HelpCircle /> , title: t("support.links.discord"), link: import.meta.env.VITE_DISCORD_LINK || "#" },
    { icon: <Send />, title: t("support.links.telegram"), link: "" },
  ];

  return (
    <div className="pt-32 container mx-auto px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500/20 to-blue-500/20 border border-white/10 mb-6 shadow-xl">
          <HeartPlus className="w-8 h-8 text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          {t("support.title")}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {t("support.subtitle")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        {linkSupportData.map((it) => (
          <button
            className="px-8 py-4 border rounded-2xl w-full hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer flex placeitemplace-items-center place-content-center gap-2"
            key={it.title}
            onClick={() => {
              if (!it.link || it.link === "#") return;
              window.open(it.link, "_blank", "noopener,noreferrer");
            }}
          >
            { it.icon }
            {it.title}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default Support;
