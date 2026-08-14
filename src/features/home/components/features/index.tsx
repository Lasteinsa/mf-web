import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import {
  Disc3,
  Image as ImageIcon,
  Languages,
  Mic2,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface FeatureCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
  index: number;
  totalItems: number;
  wheelRotation: MotionValue<number>;
}

const FeatureCard = ({
  feature,
  index,
  totalItems,
  wheelRotation,
}: FeatureCardProps) => {
  const baseAngle = index * (360 / totalItems);
  const radius = 289; // Fixed radius for the 500px height container

  // Calculate dynamic X based on wheel rotation
  const x = useTransform(wheelRotation, (rot) => {
    const angleDeg = baseAngle - rot;
    const angleRad = (angleDeg * Math.PI) / 180;
    // Negative X to bulge right (curve left)
    return -radius * (1 - Math.cos(angleRad));
  });

  // Calculate dynamic Y
  const y = useTransform(wheelRotation, (rot) => {
    const angleDeg = baseAngle - rot;
    const angleRad = (angleDeg * Math.PI) / 180;
    return `calc(-50% + ${radius * Math.sin(angleRad)}px)`;
  });

  // Calculate Opacity based on distance from 0 degrees (center)
  // By removing the % 360 modulo, we break the visual loop!
  // This means Item 5 won't show up above Item 0, and Item 0 won't show up below Item 5.
  const opacity = useTransform(wheelRotation, (rot) => {
    let diff = baseAngle - rot;
    return Math.max(0, 1 - Math.abs(diff) / 120);
  });

  // Calculate zIndex and boxShadow based on how close it is to center
  const zIndex = useTransform(opacity, (op) => Math.round(op * 100));
  const boxShadow = useTransform(wheelRotation, (rot) => {
    let diff = Math.abs(baseAngle - rot);
    return diff < 15
      ? "0 25px 50px -12px rgba(0,0,0,0.5)"
      : "0 4px 6px -1px rgba(0,0,0,0.1)";
  });

  // Calculate pointer events based on opacity
  const pointerEvents = useTransform(opacity, (op) =>
    op === 0 ? "none" : "auto",
  );

  return (
    <motion.div
      className="absolute top-1/2 right-0 left-0 mx-auto w-full max-w-xl -translate-y-1/2 rounded-2xl border border-white/10 bg-neutral-900/80 p-8 backdrop-blur-md transition-colors hover:bg-neutral-800/80"
      style={{ x, y, opacity, zIndex, boxShadow, pointerEvents }}
    >
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 transition-transform hover:scale-110">
          {feature.icon}
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
          <p className="leading-relaxed text-slate-400">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Track scroll progress within the 300vh container
  // Offset "start 96px" means we start calculating progress exactly when the
  // top of the section hits 96px (top-24) from the top of the viewport!
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 192px", "end end"],
  });

  // Map scroll progress (0 to 1) to wheel rotation (0 to 300 degrees)
  // We map [0.1, 0.9] instead of [0, 1] so that:
  // - The first item stays perfectly centered for the first 10% of the scroll
  // - The last item stays perfectly centered for the last 10% of the scroll before un-sticking
  const maxRotation = (features.length - 1) * 60;
  const wheelRotation = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [0, maxRotation],
  );

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative h-[300vh] bg-black"
    >
      <div className="from-bg-dark pointer-events-none absolute inset-0 bg-linear-to-b to-black" />

      {/* Sticky Container */}
      <div className="sticky top-24 flex h-dvh flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto h-full px-6">
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

          <div className="relative mx-auto flex h-full w-full max-w-2xl overflow-hidden rounded-4xl">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                feature={feature}
                index={i}
                totalItems={features.length}
                wheelRotation={wheelRotation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
