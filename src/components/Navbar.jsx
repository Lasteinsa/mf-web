import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppIcon from "./AppIcon";

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <AppIcon className="w-8 h-8 text-white" />
          <span className="font-bold text-xl tracking-tight text-white">
            {t('navbar.title')}
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-white transition-colors">
            {t('navbar.home')}
          </Link>
          <Link to="/guide" className="hover:text-white transition-colors">
            {t('navbar.guide')}
          </Link>
          <a
            href={import.meta.env.VITE_DISCORD_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {t('navbar.support')}
          </a>
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          <button 
            onClick={toggleLanguage}
            className="hover:text-white transition-colors font-bold uppercase tracking-wider"
          >
            {i18n.language === 'en' ? 'EN / id' : 'en / ID'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
