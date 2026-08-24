import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { User } from "lucide-react";

import last30Days from "../../../public/data/last_30_days.json";
import allSupporters from "../../../public/data/all_supporters.json";

interface Supporter {
  name: string;
  imageUrl?: string;
  date: string;
}

const SupporterCard = ({
  supporter,
  index,
}: {
  supporter: Supporter;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex items-center gap-4 rounded-3xl bg-slate-900/5 p-4 transition-all hover:scale-[1.02] hover:bg-slate-900/10"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50/20">
        {supporter.imageUrl ? (
          <img
            src={supporter.imageUrl}
            alt={supporter.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <User className="h-6 w-6 text-slate-600" />
        )}
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900">{supporter.name}</h3>
      </div>
    </motion.div>
  );
};

const Supporters = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-5xl px-6 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500/20 to-purple-500/20">
          <User className="h-8 w-8 text-blue-400" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {t("supporters.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          {t("supporters.description")}
        </p>
        <p className="mt-4 text-sm font-medium text-blue-400">
          {t("supporters.update_note")}
        </p>
      </motion.div>

      {/* Last 30 Days Section */}
      <div className="mb-12">
        <h2 className="mb-6 pb-4 text-2xl font-bold text-slate-900">
          {t("supporters.last_30_days")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {last30Days.map((supporter, index) => (
            <SupporterCard
              key={`${supporter.name}-${index}`}
              supporter={supporter}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* All Time Section */}
      <div>
        <h2 className="mb-6 pb-4 text-2xl font-bold text-slate-900">
          {t("supporters.all_time")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allSupporters.map((supporter, index) => (
            <SupporterCard
              key={`${supporter.name}-${index}`}
              supporter={supporter}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supporters;
