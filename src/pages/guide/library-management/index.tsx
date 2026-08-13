import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ExpandableImageGroup from "../../../features/guide/components/expandable-image-group";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerImages = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

export default function LibraryManagement() {
  const { t } = useTranslation();

  return (
    <motion.section variants={pageVariants} initial="hidden" animate="visible">
      <h2 className="mb-6 border-b border-white/10 pb-4 text-3xl font-semibold text-white">
        {t("guide.sections.library_management")}
      </h2>
      <p className="mb-4 leading-relaxed text-slate-300">
        {t("guide.s4.desc1")}
      </p>
      <p className="mb-4 leading-relaxed text-slate-300">
        {t("guide.s4.desc2")}
      </p>
      <div className="mb-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">
          {t("guide.s4.desc3")}
        </p>
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">
          {t("guide.s4.desc4")}
        </p>
      </div>
      <ul className="mb-8 ml-6 list-outside list-disc space-y-2 text-slate-300">
        <li>
          <strong>{t("guide.s4.l1_title")}</strong> {t("guide.s4.l1_desc")}
        </li>
        <li>
          <strong>{t("guide.s4.l2_title")}</strong> {t("guide.s4.l2_desc")}
        </li>
      </ul>
      <ExpandableImageGroup>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          variants={staggerImages}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            variants={staggerImages}
            src="/assets/edit-album-art.jpg"
            alt="Edit Album Art"
            className="w-full rounded-3xl border border-white/10 shadow-xl"
          />
          <motion.img
            variants={staggerImages}
            src="/assets/edit-artist-art.jpg"
            alt="Edit Artist Art"
            className="w-full rounded-3xl border border-white/10 shadow-xl"
          />
        </motion.div>
      </ExpandableImageGroup>
    </motion.section>
  );
}
