import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AppIcon from "../app-icon";

function animateListItem({ delay = 1 }: { delay?: number }): any {
  return {
    initial: { opacity: 0, marginLeft: -100 },
    animate: { opacity: 1, marginLeft: 0 },
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      delay: 0.1 + +`0.${delay}`,
    },
  };
}

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 z-50 w-full backdrop-blur-md ${isOpen ? "bg-white/95" : ""}`}
    >
      <motion.div
        className="container mx-auto flex h-20 items-center justify-between px-6"
        animate={isOpen ? "active" : "inactive"}
      >
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <AppIcon className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight">
            {t("navbar.title")}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-8 text-sm font-medium text-slate-700 md:flex">
          <Link to="/" className="transition-colors hover:text-slate-900">
            {t("navbar.home")}
          </Link>
          <Link to="/guide" className="transition-colors hover:text-slate-900">
            {t("navbar.guide")}
          </Link>
          <Link
            to="/privacy"
            className="transition-colors hover:text-slate-900"
          >
            {t("navbar.privacy")}
          </Link>
          <a
            href={import.meta.env.VITE_DISCORD_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-900"
          >
            {t("navbar.support")}
          </a>
          <div className="mx-2 h-4 w-px bg-slate-900/20"></div>
          <button
            onClick={toggleLanguage}
            className="font-bold tracking-wider uppercase transition-colors hover:text-slate-900"
          >
            {i18n.language === "en" ? "EN / id" : "en / ID"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full overflow-hidden backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col items-center space-y-8 bg-white/95 pt-20 text-lg font-medium">
              <Link
                to="/"
                onClick={closeMenu}
                className="transition-colors hover:text-slate-900"
              >
                <motion.div {...animateListItem({ delay: 1 })}>
                  {t("navbar.home")}
                </motion.div>
              </Link>
              <Link
                to="/guide"
                onClick={closeMenu}
                className="transition-colors hover:text-slate-900"
              >
                <motion.div {...animateListItem({ delay: 2 })}>
                  {t("navbar.guide")}
                </motion.div>
              </Link>
              <Link
                to="/privacy"
                onClick={closeMenu}
                className="transition-colors hover:text-slate-900"
              >
                <motion.div {...animateListItem({ delay: 3 })}>
                  {t("navbar.privacy")}
                </motion.div>
              </Link>
              <a
                href={import.meta.env.VITE_DISCORD_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="transition-colors hover:text-slate-900"
              >
                <motion.div {...animateListItem({ delay: 4 })}>
                  {t("navbar.support")}
                </motion.div>
              </a>
              <div className="h-px w-16 bg-slate-900/20" />
              <motion.div {...animateListItem({ delay: 5 })}>
                <button
                  onClick={() => {
                    toggleLanguage();
                    closeMenu();
                  }}
                  className="font-bold tracking-wider uppercase transition-colors hover:text-slate-900"
                >
                  {i18n.language === "en" ? "EN / id" : "en / ID"}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
