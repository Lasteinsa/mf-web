import { motion } from "framer-motion";
import { Download, HelpCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 gap-12 items-center flex place-items-center place-content-center">
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-primary-200"
          >
            <span>Yet Another Music App for Audiophiles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Your Music,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Unleashed.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-xl"
          >
            Experience MFAndroid, the ultimate music player designed for
            pristine audio quality, seamless offline playback, and an interface
            that moves with you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={import.meta.env.VITE_DOWNLOAD_LINK || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-linear-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-black px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-white/20"
            >
              <Download className="w-5 h-5" />
              Download APK
            </a>
            <a
              href={import.meta.env.VITE_DISCORD_LINK || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-linear-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-black px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-white/20"
            >
              <HelpCircle className="w-5 h-5" />
              Discord Support
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
