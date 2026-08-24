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
} from "lucide-react";

export default function GuideIndex() {
  const { t } = useTranslation();

  const sections = [
    {
      id: "getting-started",
      title: t("guide.sections.getting_started"),
      description: t("guide.s1.desc").slice(0, 100) + "...",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "customization",
      title: t("guide.sections.customization"),
      description: t("guide.s2.desc").slice(0, 100) + "...",
      icon: <Layout className="h-8 w-8" />,
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      id: "library-management",
      title: t("guide.sections.library_management"),
      description: t("guide.s4.desc1").slice(0, 100) + "...",
      icon: <Library className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "playback",
      title: t("guide.sections.playback"),
      description: t("guide.s6.desc1").slice(0, 100) + "...",
      icon: <PlayCircle className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "audio-engine",
      title: t("guide.sections.audio_engine"),
      description: t("guide.s3.desc1").slice(0, 100) + "...",
      icon: <Settings className="h-8 w-8" />,
      color: "from-slate-500 to-zinc-500",
    },
    {
      id: "lyrics",
      title: t("guide.sections.lyrics_setup"),
      description: t("guide.s5.desc1").slice(0, 100) + "...",
      icon: <Music className="h-8 w-8" />,
      color: "from-violet-500 to-purple-500",
    },
    {
      id: "plugins",
      title: t("guide.sections.plugins"),
      description: t("guide.s7.desc1").slice(0, 100) + "...",
      icon: <Puzzle className="h-8 w-8" />,
      color: "from-amber-500 to-yellow-500",
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
        className="mb-16 text-center"
      >
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {t("guide.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-slate-600">
          {t("guide.subtitle")}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {sections.map((section) => (
          <motion.div key={section.id} variants={cardVariants}>
            <Link
              to={section.id}
              className="group hover: hover: flex h-full flex-col justify-between rounded-3xl bg-slate-900/5 p-8 transition-all hover:-translate-y-1 hover:bg-slate-900/10"
            >
              <div>
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${section.color} text-slate-900`}
                >
                  {section.icon}
                </div>
                <h2 className="mb-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-400">
                  {section.title}
                </h2>
                <p className="line-clamp-3 text-slate-600">
                  {section.description}
                </p>
              </div>
              <div className="mt-8 flex items-center font-medium text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                Read more <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
