import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SettingsSimulation from "../../../components/simulations/settings-simulation";
import ExpandableImageGroup from "../../../features/guide/components/expandable-image-group";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function GettingStarted() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
        {t("guide.sections.getting_started")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-300">
        {t("guide.s1.desc")}
      </p>
      <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-300">
        <li>{t("guide.s1.l1")}</li>
        <li>{t("guide.s1.l2")}</li>
        <li>{t("guide.s1.l3")}</li>
        <li>{t("guide.s1.l4")}</li>
        <li>{t("guide.s1.l5")}</li>
      </ul>
      <ExpandableImageGroup>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <SettingsSimulation />
        </motion.div>
      </ExpandableImageGroup>
    </motion.section>
  );
}
