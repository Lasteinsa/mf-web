import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();

  const dataDonation = [
    {
      title: t('footer.donate_btn'),
      link: "https://trakteer.id/hibikase",
      mainColor: "red",
      secondaryColor: "orange"
    },
    {
      title: t('footer.kofi_btn'),
      link: "https://ko-fi.com/hibikase",
      mainColor: "blue",
      secondaryColor: "green"
    }
  ];

  return (
    <footer className="relative bg-bg-dark pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-4xl p-8 md:p-12 mb-12 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle gradient glow in background */}
          <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('footer.title')}
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto">
              {t('footer.description')}
            </p>
            <div className="flex place-items-center place-content-center gap-2">
              {
                dataDonation.map(it => {
                  return (
                    <a
                      key={it.link}
                      href={it.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center w-full gap-3 bg-linear-to-r from-${it.mainColor}-500 to-${it.secondaryColor}-500 hover:from-${it.mainColor}-600 hover:to-${it.secondaryColor}-600 text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg hover:shadow-${it.secondaryColor}-500/25 hover:scale-105 active:scale-95`}
                    >
                      <Coffee className="w-5 h-5" />
                      {it.title}
                    </a>
                  )
                })
              }
            </div>
          </div>
        </motion.div>

        <div className="text-center space-y-3">
          <div>
            <Link
              to="/privacy"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t('footer.privacy_policy')}
            </Link>
          </div>
          <p className="text-slate-500 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
