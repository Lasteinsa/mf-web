import { Download, HelpCircle } from "lucide-react";
import { links } from "../utils/links";

export const buttonNavigation = [
  {
    id: "download-link-140720260837",
    titleKey: "hero.download_apk",
    link: links.downloadLink,
    icons: <Download className="w-5 h-5" />
  },
  {
    id: "download-link-140720260838",
    titleKey: "hero.discord_support",
    link: links.downloadLink,
    icons: <HelpCircle className="w-5 h-5" />
  },
]
