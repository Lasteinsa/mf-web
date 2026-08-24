import { motion } from "framer-motion";
import { ArrowDown, BookOpen, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { buttonNavigation } from "../../../../constants/hero-data";

function animateHomeContent({delay = 1}: {delay?:number}): any {
  return {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.1 + +`0.${delay}` },
  }
}

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="container mx-auto flex place-content-center place-items-center items-center gap-12 px-6">
        <div className="flex flex-col items-start space-y-4">
          <motion.h1
            {...animateHomeContent({delay: 1})}
            className="text-4xl sm:text-3xl leading-tight font-bold tracking-tight text-slate-900 md:text-7xl"
          >
            Mellifluous Music Player
          </motion.h1>

          <motion.p
            {...animateHomeContent({delay: 2})}
            className="max-w-xl text-xl text-slate-700"
          >
            Yet another music player you might want to try!
          </motion.p>

          <motion.div
            {...animateHomeContent({delay: 3})}
            className="flex place-items-center place-content-center gap-2"
          >
            {buttonNavigation.map((it) => {
              const isInternal = it.link.startsWith("/");

              if (isInternal) {
                return (
                  <Link key={it.id} to={it.link} className="px-4 py-2 w-fit flex place-items-center place-content-center gap-2 rounded-full bg-slate-200">
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
                  className="px-4 py-2 w-fit flex place-items-center place-content-center gap-2 rounded-full bg-slate-200"
                >
                  {it.icons}
                  {t(it.titleKey)}
                </a>
              );
            })}
          </motion.div>

          <motion.div
            {...animateHomeContent({delay: 4})}
            className="w-full pt-4"
          >
            <Link
              to="/guide"
              className="group flex w-full max-w-lg items-center justify-between rounded-2xl bg-slate-900/5 p-4 backdrop-blur-md transition-all hover:bg-slate-900/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/10">
                  <BookOpen className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">
                    {t("hero.guide_prompt")}
                  </p>
                  <p className="text-sm text-slate-600">
                    {t("hero.guide_link")}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-600 transition-colors group-hover:translate-x-1 group-hover:text-slate-900" />
            </Link>
          </motion.div>

          <motion.div
            {...animateHomeContent({ delay: 5 })}
            className="flex flex-col gap-4 place-items-center place-content-center w-full mt-12"
          >
            <p className="text-lg font-bold">Scroll Down</p>
            <ArrowDown />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
