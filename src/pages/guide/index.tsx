import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GuideLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isIndex =
    location.pathname === "/guide" || location.pathname === "/guide/";

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <AnimatePresence>
          {!isIndex && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mx-auto mb-12 max-w-4xl"
            >
              <button
                onClick={() => navigate("/guide")}
                className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Guide
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <main
          className={
            !isIndex ? "prose prose-invert prose-slate mx-auto max-w-4xl" : ""
          }
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default GuideLayout;
