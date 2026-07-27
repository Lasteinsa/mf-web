import { Download, HelpCircle, Store } from "lucide-react";
import { links } from "../utils/links";

export const buttonNavigation = [
  {
    id: "download-link-140720260837",
    titleKey: "hero.download_apk",
    link: links.downloadLink,
    icons: <Download className="w-5 h-5" />,
    primary: true
  },
  {
    id: "google-play-soon-140720260839",
    titleKey: "hero.google_play_soon",
    link: "#",
    icons: <Store className="w-5 h-5 text-emerald-400" />,
    primary: false
  },
  {
    id: "download-link-140720260838",
    titleKey: "hero.discord_support",
    link: links.discordLink,
    icons: <HelpCircle className="w-5 h-5" />,
    primary: false
  }
];
