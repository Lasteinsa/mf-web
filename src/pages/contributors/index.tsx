import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, User } from "lucide-react";

import contributorsData from "../../../public/data/contributors.json";

interface Contributor {
  name: string;
  role: string;
  imageUrl?: string;
}

const ContributorCard = ({
  contributor,
  index,
}: {
  contributor: Contributor;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl transition-all hover:scale-[1.02] hover:bg-white/10"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-black/20">
        {contributor.imageUrl ? (
          <img
            src={contributor.imageUrl}
            alt={contributor.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <User className="h-6 w-6 text-slate-400" />
        )}
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{contributor.name}</h3>
        <p className="text-sm text-slate-400">{contributor.role}</p>
      </div>
    </motion.div>
  );
};

const Contributors = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-5xl px-6 py-24 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-green-500/20 to-emerald-500/20 shadow-xl">
          <Code2 className="h-8 w-8 text-green-400" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {t("contributors.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          {t("contributors.description")}
        </p>
        <p className="mt-4 text-sm font-medium text-green-400">
          {t("contributors.update_note")}
        </p>
      </motion.div>

      {/* Developers Section */}
      <div className="mb-16">
        <h2 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-white">
          {t("contributors.developers")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contributorsData.developers.map((contributor, index) => (
            <ContributorCard
              key={`${contributor.name}-${index}`}
              contributor={contributor}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Testers Section */}
      <div>
        <h2 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-white">
          {t("contributors.testers")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contributorsData.testers.map((contributor, index) => (
            <ContributorCard
              key={`${contributor.name}-${index}`}
              contributor={contributor}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contributors;
