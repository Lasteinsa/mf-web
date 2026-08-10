import { Coffee, ExternalLink, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const donationLinks = [
  {
    key: "trakteer",
    link: "https://trakteer.id/hibikase",
    className:
      "from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600",
  },
  {
    key: "kofi",
    link: "https://ko-fi.com/hibikase",
    className:
      "from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600",
  },
];

const Donate = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-4xl px-6 py-24 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-orange-500/20 to-red-500/20 shadow-xl">
          <Heart className="h-8 w-8 text-orange-400" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {t("donate.title")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          {t("donate.subtitle")}
        </p>
      </motion.div>

      <div className="mx-auto grid w-full max-w-2xl gap-6">
        {donationLinks.map((donation, index) => (
          <motion.a
            key={donation.key}
            href={donation.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group flex items-center justify-between gap-4 rounded-3xl bg-linear-to-r ${donation.className} p-6 text-white shadow-xl transition-transform hover:scale-[1.02]`}
          >
            <span className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/15">
                <Coffee className="h-6 w-6" />
              </span>
              <span className="text-lg font-bold">
                {t(`donate.links.${donation.key}`)}
              </span>
            </span>
            <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Donate;
