import { Download, HelpCircle } from "lucide-react";
import { links } from "../utils/links";

export const buttonNavigation = [
  {
    id: "google-play-140720260839",
    titleKey: "hero.google_play",
    link: links.installLink,
    icons: <Download className="w-5 h-5 text-emerald-400" />,
    primary: false,
  },
  {
    id: "download-link-140720260838",
    titleKey: "hero.discord_support",
    link: links.discordLink,
    icons: <HelpCircle className="h-5 w-5" />,
    primary: false,
  },
];
