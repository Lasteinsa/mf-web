import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CommunityCard } from "./community-card";

const CommunityCTA = () => {
  const { t } = useTranslation();

  const cards = [
    {
      to: "/supporters",
      title: t("community_cta.supporters_title"),
      description: t("community_cta.supporters_desc"),
      buttonText: t("community_cta.supporters_btn"),
      icon: Heart,
      textColor: "text-orange-600 group-hover:text-orange-700",
      iconColor: "text-orange-500/15 group-hover:text-orange-500/25",
      delay: 0.1,
    },
    {
      to: "/contributors",
      title: t("community_cta.contributors_title"),
      description: t("community_cta.contributors_desc"),
      buttonText: t("community_cta.contributors_btn"),
      icon: Users,
      textColor: "text-emerald-600 group-hover:text-emerald-700",
      iconColor: "text-emerald-500/15 group-hover:text-emerald-500/25",
      delay: 0.2,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-b from-blue-500/20 to-purple-500/20 blur-[100px]" />

      <div className="container mx-auto max-w-5xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {t("community_cta.title")}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600">
            {t("community_cta.description")}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <CommunityCard key={card.to} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
