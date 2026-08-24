import { motion } from "framer-motion";
import {
  Disc3,
  Image as ImageIcon,
  Languages,
  Mic2,
  Palette,
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
    <section id="features" className="relative bg-slate-50 py-24">
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* Sticky Title Section */}
          <div className="backdrop-blur-md sticky top-16 z-10 w-full py-4 text-left lg:sticky lg:top-32 lg:w-1/3 lg:bg-transparent lg:py-0 lg:pt-8 lg:backdrop-blur-none">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl font-bold text-slate-900 md:text-5xl"
            >
              {t("features.title")}
            </motion.h2>
          </div>

          {/* Scrolling Features Grid */}
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-2/3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="rounded-2xl bg-white p-8 transition-colors hover:bg-slate-100/80"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/5 transition-transform hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
