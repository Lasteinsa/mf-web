import { motion } from "framer-motion";
import {
  Disc3,
  Palette,
  Mic2,
  Languages,
  Image as ImageIcon,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Disc3 className="text-primary h-8 w-8" />,
      title: t("features.f1_title"),
      description: t("features.f1_desc"),
    },
    {
      icon: <Palette className="text-secondary h-8 w-8" />,
      title: t("features.f2_title"),
      description: t("features.f2_desc"),
    },
    {
      icon: <Mic2 className="text-primary h-8 w-8" />,
      title: t("features.f3_title"),
      description: t("features.f3_desc"),
    },
    {
      icon: <Languages className="text-secondary h-8 w-8" />,
      title: t("features.f4_title"),
      description: t("features.f4_desc"),
    },
    {
      icon: <ImageIcon className="text-primary h-8 w-8" />,
      title: t("features.f5_title"),
      description: t("features.f5_desc"),
    },
    {
      icon: <ShieldCheck className="text-secondary h-8 w-8" />,
      title: t("features.f6_title"),
      description: t("features.f6_desc"),
    },
  ];

  return (
    <section id="features" className="relative bg-black py-24">
      <div className="from-bg-dark pointer-events-none absolute inset-0 bg-linear-to-b to-black" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-secondary-200 mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium backdrop-blur-md"
          >
            <span>{t("features.badge")}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            {t("features.title")}
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
