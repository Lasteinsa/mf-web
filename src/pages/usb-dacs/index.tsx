import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, XCircle, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";

import { UsbDacRepository } from "../../repositories/usb-dac-repository";

const UsbDacs = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  const dacs = useMemo(() => {
    if (searchQuery.trim() === "") {
      return UsbDacRepository.getAll();
    }
    return UsbDacRepository.search(searchQuery);
  }, [searchQuery]);

  const groupedDacs = useMemo(() => {
    const groups: Record<string, typeof dacs> = {};
    dacs.forEach((dac) => {
      if (!groups[dac.brand]) {
        groups[dac.brand] = [];
      }
      groups[dac.brand].push(dac);
    });
    // Sort brands alphabetically
    return Object.keys(groups)
      .sort()
      .reduce(
        (acc, key) => {
          acc[key] = groups[key];
          return acc;
        },
        {} as Record<string, typeof dacs>,
      );
  }, [dacs]);

  return (
    <div className="container mx-auto max-w-5xl px-6 pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500/20 to-blue-500/20">
          <Headphones className="h-8 w-8 text-indigo-400" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {t("usb_dacs.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          {t("usb_dacs.description")}
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-12"
      >
        <div className="relative mx-auto max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
          <input
            type="text"
            className="focus: focus: focus: w-full rounded-2xl bg-slate-900/5 py-4 pr-4 pl-12 text-slate-900 placeholder-slate-500 backdrop-blur-md transition-all focus:bg-slate-900/10 focus:outline-hidden"
            placeholder={t("usb_dacs.search_placeholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Results */}
      <div>
        <AnimatePresence mode="popLayout">
          {Object.keys(groupedDacs).length > 0 ? (
            Object.entries(groupedDacs).map(([brand, brandDacs]) => (
              <motion.div
                key={brand}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="mb-12"
              >
                <h2 className="mb-6 pb-4 text-2xl font-bold text-slate-900">
                  {brand}
                </h2>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {brandDacs.map((dac) => (
                    <motion.div
                      layout
                      key={`${dac.brand}-${dac.type}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="group flex items-center justify-between gap-4 rounded-xl bg-slate-900/5 px-5 py-4 transition-all hover:bg-slate-900/10"
                    >
                      <p className="font-semibold whitespace-nowrap text-slate-900">
                        {dac.type}
                      </p>
                      <div className="flex shrink-0 items-center">
                        {dac.status === "working" ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        ) : (
                          <XCircle className="h-5 w-5 text-rose-400" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center"
            >
              <p className="text-lg text-slate-500">
                {t("usb_dacs.no_results", { query: searchQuery })}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UsbDacs;
