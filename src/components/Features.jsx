import { motion } from "framer-motion";
import { Headphones, Layout, Music, WifiOff } from "lucide-react";

const features = [
  {
    icon: <Headphones className="w-8 h-8 text-primary" />,
    title: "Audiophile Quality",
    description:
      "Experience your music with true bit-perfect playback and lossless audio support, exactly as the artist intended.",
  },
  {
    icon: <Layout className="w-8 h-8 text-neutral-300" />,
    title: "Beautiful Interface",
    description:
      "A sleek, modern design that adapts to your music, with dynamic colors and smooth transitions.",
  },
  {
    icon: <Music className="w-8 h-8 text-neutral-400" />,
    title: "Smart Playlists",
    description:
      "Auto-generated mixes based on your listening habits, mood, and favorite genres.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-bg-darker">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">
              Music Lovers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Everything you need to manage, play, and discover your local music
            collection in one simple app.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl transition-colors hover:bg-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
