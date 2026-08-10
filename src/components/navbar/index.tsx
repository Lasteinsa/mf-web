import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AppIcon from "../app-icon";

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
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <AppIcon className="h-8 w-8 text-white" />
          <span className="text-xl font-bold tracking-tight text-white">
            {t("navbar.title")}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-8 text-sm font-medium text-slate-300 md:flex">
          <Link to="/" className="transition-colors hover:text-white">
            {t("navbar.home")}
          </Link>
          <Link to="/guide" className="transition-colors hover:text-white">
            {t("navbar.guide")}
          </Link>
          <Link to="/privacy" className="transition-colors hover:text-white">
            {t("navbar.privacy")}
          </Link>
          <a
            href={import.meta.env.VITE_DISCORD_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {t("navbar.support")}
          </a>
          <div className="mx-2 h-4 w-px bg-white/20"></div>
          <button
            onClick={toggleLanguage}
            className="font-bold tracking-wider uppercase transition-colors hover:text-white"
          >
            {i18n.language === "en" ? "EN / id" : "en / ID"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full overflow-hidden bg-zinc-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center space-y-8 pt-20 text-lg font-medium text-slate-300">
              <Link
                to="/"
                onClick={closeMenu}
                className="transition-colors hover:text-white"
              >
                {t("navbar.home")}
              </Link>
              <Link
                to="/guide"
                onClick={closeMenu}
                className="transition-colors hover:text-white"
              >
                {t("navbar.guide")}
              </Link>
              <Link
                to="/privacy"
                onClick={closeMenu}
                className="transition-colors hover:text-white"
              >
                {t("navbar.privacy")}
              </Link>
              <a
                href={import.meta.env.VITE_DISCORD_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="transition-colors hover:text-white"
              >
                {t("navbar.support")}
              </a>
              <div className="h-px w-16 bg-white/20"></div>
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="font-bold tracking-wider uppercase transition-colors hover:text-white"
              >
                {i18n.language === "en" ? "EN / id" : "en / ID"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
