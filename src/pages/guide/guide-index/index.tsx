import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  BookOpen,
  Settings,
  Layout,
  Library,
  Music,
  PlayCircle,
  ChevronRight,
  Puzzle,
  Radio,
  Activity,
} from "lucide-react";

export default function GuideIndex() {
  const { t } = useTranslation();

  const sections = [
    {
      id: "getting-started",
      title: t("guide.sections.getting_started"),
      description: t("guide.s1.desc").slice(0, 100) + "...",
      icon: BookOpen,
      iconColor: "text-blue-500/15 group-hover:text-blue-500/25",
    },
    {
      id: "customization",
      title: t("guide.sections.customization"),
      description: t("guide.s2.desc").slice(0, 100) + "...",
      icon: Layout,
      iconColor: "text-fuchsia-500/15 group-hover:text-fuchsia-500/25",
    },
    {
      id: "library-management",
      title: t("guide.sections.library_management"),
      description: t("guide.s4.desc1").slice(0, 100) + "...",
      icon: Library,
      iconColor: "text-emerald-500/15 group-hover:text-emerald-500/25",
    },
    {
      id: "playback",
      title: t("guide.sections.playback"),
      description: t("guide.s6.desc1").slice(0, 100) + "...",
      icon: PlayCircle,
      iconColor: "text-orange-500/15 group-hover:text-orange-500/25",
    },
    {
      id: "audio-engine",
      title: t("guide.sections.audio_engine"),
      description: t("guide.s3.desc1").slice(0, 100) + "...",
      icon: Settings,
      iconColor: "text-slate-600/15 group-hover:text-slate-600/25",
    },
    {
      id: "lyrics",
      title: t("guide.sections.lyrics_setup"),
      description: t("guide.s5.desc1").slice(0, 100) + "...",
      icon: Music,
      iconColor: "text-violet-500/15 group-hover:text-violet-500/25",
    },
    {
      id: "plugins",
      title: t("guide.sections.plugins"),
      description: t("guide.s7.desc1").slice(0, 100) + "...",
      icon: Puzzle,
      iconColor: "text-amber-500/15 group-hover:text-amber-500/25",
    },
    {
      id: "smart-audio-ai",
      title: t("guide.sections.smart_audio_ai"),
      description: t("guide.s8.desc1").slice(0, 100) + "...",
      icon: Music,
      iconColor: "text-pink-500/15 group-hover:text-pink-500/25",
    },
    {
      id: "mflink",
      title: t("guide.sections.mflink"),
      description: t("guide.s9.desc1").slice(0, 100) + "...",
      icon: Radio,
      iconColor: "text-cyan-500/15 group-hover:text-cyan-500/25",
    },
    {
      id: "audiolab",
      title: t("guide.sections.audiolab"),
      description: t("guide.s10.desc1").slice(0, 100) + "...",
      icon: Activity,
      iconColor: "text-emerald-500/15 group-hover:text-emerald-500/25",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {t("guide.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed">
          {t("guide.subtitle")}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <motion.div key={section.id} variants={cardVariants}>
              <Link
                to={section.id}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-slate-900/5 p-8 transition-all hover:-translate-y-1 hover:bg-slate-900/10"
              >
                <div className="relative z-10">
                  <h2 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-500">
                    {section.title}
                  </h2>
                  <p className="line-clamp-3 text-slate-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center font-medium text-blue-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </div>

                {/* Oversized decorative icon bleeding past card bounds */}
                <div
                  className={`pointer-events-none absolute -bottom-8 -right-8 transition-all duration-300 ease-out group-hover:scale-105 ${section.iconColor}`}
                >
                  <Icon className="h-44 w-44 stroke-[1.2]" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
