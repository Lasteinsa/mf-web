import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const ExpandableImageGroup = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative mt-8 flex w-full flex-col items-center">
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : "240px" }}
        transition={{ duration: 0.5, ease: "easeInOut" as any }}
        className="relative w-full overflow-hidden rounded-3xl"
      >
        <div>{children}</div>

        {/* Gradient Overlay for collapsed state */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="from-bg-dark via-bg-dark/80 absolute inset-0 z-10 flex items-end justify-center bg-linear-to-t to-transparent pb-8"
            >
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center gap-2 rounded-full bg-linear-to-r from-red-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-105 hover:from-red-600 hover:to-orange-600 active:scale-95"
              >
                <ImageIcon className="h-4 w-4" />
                {t("guide.show_images")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Hide button when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={() => setIsExpanded(false)}
            className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            {t("guide.hide_images")}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableImageGroup;
