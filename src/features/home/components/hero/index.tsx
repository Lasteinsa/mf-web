import { motion } from "framer-motion";
import { buttonNavigation } from "../../../../constants/hero-data";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
        <div className="bg-primary/30 absolute top-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full blur-[120px]" />
        <div className="bg-secondary/20 absolute top-[20%] right-[-10%] h-[40%] w-[40%] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto flex place-content-center place-items-center items-center gap-12 px-6">
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary-200 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium backdrop-blur-md"
          >
            <span>{t("hero.badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl"
          >
            {t("hero.title_1")}
            <br />
            <span className="from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent">
              {t("hero.title_2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-lg text-slate-300"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {buttonNavigation.map((it) => {
              const isInternal = it.link.startsWith("/");
              const className = it.primary
                ? "from-primary to-primary-dark hover:from-primary-dark hover:to-primary flex transform items-center gap-2 rounded-xl bg-linear-to-r px-8 py-4 font-semibold text-black shadow-lg shadow-white/20 transition-all hover:scale-105"
                : "flex transform cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:border-white/30 hover:bg-white/20";

              if (isInternal) {
                return (
                  <Link key={it.id} to={it.link} className={className}>
                    {it.icons}
                    {t(it.titleKey)}
                  </Link>
                );
              }

              return (
                <a
                  key={it.id}
                  href={it.link}
                  onClick={(e) => {
                    if (it.link === "#") e.preventDefault();
                  }}
                  target={it.link === "#" ? undefined : "_blank"}
                  rel={it.link === "#" ? undefined : "noopener noreferrer"}
                  className={className}
                >
                  {it.icons}
                  {t(it.titleKey)}
                </a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full pt-4"
          >
            <Link
              to="/guide"
              className="group flex w-full max-w-lg items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">
                    {t("hero.guide_prompt")}
                  </p>
                  <p className="text-sm text-slate-400">
                    {t("hero.guide_link")}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-400 transition-colors group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
