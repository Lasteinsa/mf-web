import { Link, useLocation } from "react-router-dom";
import AppIcon from "./AppIcon";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <AppIcon className="w-8 h-8 text-white" />
          <span className="font-bold text-xl tracking-tight text-white">
            MF Music Player
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/guide" className="hover:text-white transition-colors">
            Guide
          </Link>
          <a
            href={import.meta.env.VITE_DISCORD_LINK || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Support
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
