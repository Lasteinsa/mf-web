import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();

  const dataDonation = [
    {
      title: t("footer.donate_btn"),
      link: "https://trakteer.id/hibikase",
      classColor:
        "from-red-500 to-orange-500 from-red-600 to-orange-600 hover:shadow-orange-500/25",
    },
    {
      title: t("footer.kofi_btn"),
      link: "https://ko-fi.com/hibikase",
      mainColor: "blue",
      classColor:
        "from-blue-500 to-green-500 from-blue-600 to-green-600 hover:shadow-green-500/25",
    },
  ];

  return (
    <footer className="bg-bg-dark relative border-t border-white/5 pt-20 pb-10">
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="group relative mx-auto mb-12 max-w-2xl overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-md md:p-12"
        >
          {/* Subtle gradient glow in background */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-50 transition-opacity duration-700 group-hover:opacity-100" />

          <div className="relative z-10">
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              {t("footer.title")}
            </h3>
            <p className="mx-auto mb-8 max-w-lg leading-relaxed text-slate-400">
              {t("footer.description")}
            </p>
            <div className="grid w-full place-items-center gap-2 md:grid-cols-2">
              {dataDonation.map((it) => {
                return (
                  <a
                    key={it.link}
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center gap-3 rounded-md bg-linear-to-r px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${it.classColor}`}
                  >
                    <Coffee className="h-5 w-5" />
                    {it.title}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-6">
            <Link
              to="/privacy"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {t("footer.privacy_policy")}
            </Link>
            <Link
              to="/supporters"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              Our Supporters
            </Link>
            <Link
              to="/contributors"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              Contributors
            </Link>
          </div>
          <p className="text-sm text-slate-500">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
