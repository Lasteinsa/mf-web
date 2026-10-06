import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export interface CommunityCardProps {
  to: string;
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  textColor: string;
  iconColor: string;
  delay?: number;
}

export const CommunityCard = ({
  to,
  title,
  description,
  buttonText,
  icon: Icon,
  textColor,
  iconColor,
  delay = 0.1,
}: CommunityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={to}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-slate-900/5 p-8 text-left transition-all hover:-translate-y-1 hover:bg-slate-900/10"
      >
        <div className="relative z-10">
          <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors">
            {title}
          </h3>
          <p className="mb-8 leading-relaxed text-slate-600">
            {description}
          </p>
        </div>

        <div className={`relative z-10 flex items-center font-semibold ${textColor}`}>
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </div>

        {/* Oversized decorative icon bleeding past card bounds */}
        <div
          className={`pointer-events-none absolute -bottom-8 -right-8 transition-all duration-300 ease-out group-hover:scale-105 ${iconColor}`}
        >
          <Icon className="h-44 w-44 stroke-[1.2]" />
        </div>
      </Link>
    </motion.div>
  );
};
