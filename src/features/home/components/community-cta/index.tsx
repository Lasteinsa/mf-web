import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CommunityCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-b from-blue-500/10 to-purple-500/10 blur-[100px]" />

      <div className="container mx-auto max-w-5xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {t("community_cta.title")}
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg leading-relaxed text-slate-400">
            {t("community_cta.description")}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Supporters Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/supporters"
              className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500/20 to-red-500/20 shadow-lg">
                  <Heart className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {t("community_cta.supporters_title")}
                </h3>
                <p className="mb-8 leading-relaxed text-slate-400">
                  {t("community_cta.supporters_desc")}
                </p>
              </div>
              <div className="flex items-center font-semibold text-orange-400 group-hover:text-orange-300">
                {t("community_cta.supporters_btn")}{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>

          {/* Contributors Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contributors"
              className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500/20 to-emerald-500/20 shadow-lg">
                  <Users className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {t("community_cta.contributors_title")}
                </h3>
                <p className="mb-8 leading-relaxed text-slate-400">
                  {t("community_cta.contributors_desc")}
                </p>
              </div>
              <div className="flex items-center font-semibold text-emerald-400 group-hover:text-emerald-300">
                {t("community_cta.contributors_btn")}{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
