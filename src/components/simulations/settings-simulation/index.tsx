import { motion } from "framer-motion";
import {
  ArrowLeft,
  AudioWaveform,
  ChevronRight,
  Folder,
  FolderSearch,
  ListMusic,
  Music2,
  PenLine,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";
import PhoneMockup from "../../phone-mockup";

const SettingsMenuItem = ({
  icon: Icon,
  title,
  description,
  onClick,
}: {
  icon: any;
  title: any;
  description: any;
  onClick?: any;
}) => (
  <motion.div
    whileTap={{ scale: 0.96, opacity: 0.8 }}
    onClick={onClick}
    className="flex w-full cursor-pointer items-center px-4 py-4 select-none"
  >
    <Icon className="h-6 w-6 flex-shrink-0 text-indigo-400" />
    <div className="mr-2 ml-4 min-w-0 flex-1">
      <div className="truncate text-[15px] font-medium text-white">{title}</div>
      {description && (
        <div className="mt-0.5 truncate text-[13px] leading-tight text-white/50">
          {description}
        </div>
      )}
    </div>
    <ChevronRight className="h-5 w-5 flex-shrink-0 text-white/30" />
  </motion.div>
);

const Divider = () => <div className="h-[1px] w-full bg-white/10" />;

const SettingsSimulation = () => {
  const [hasUpdateAvailable, setHasUpdateAvailable] = useState(true);

  const handleUpdateClick = () => {
    setHasUpdateAvailable(false);
  };

  return (
    <PhoneMockup>
      <div className="flex min-h-full flex-col bg-[#0a0a0a]">
        {/* Top App Bar */}
        <div className="sticky top-0 z-10 flex h-16 items-center bg-[#0a0a0a]/70 px-2 backdrop-blur-md">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="rounded-full p-3 hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </motion.button>
          <div className="ml-2 text-[22px] font-bold text-white">Settings</div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 py-2">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white/[0.05] backdrop-blur-md">
            <SettingsMenuItem
              icon={FolderSearch}
              title="Library & Scanning"
              description="Manage media folders, rescans, and artist images"
            />
            <Divider />
            <SettingsMenuItem
              icon={PenLine}
              title="Appearance & Personalization"
              description="Customize themes, layouts, and bottom navigation"
            />
            <Divider />
            <SettingsMenuItem
              icon={ListMusic}
              title="Lyrics"
              description="Manage lyrics providers and offline lyrics"
            />
            <Divider />
            <SettingsMenuItem
              icon={AudioWaveform}
              title="Audio Engine"
              description="Configure bit-perfect output, resampler, and volume limits"
            />
            <Divider />
            <SettingsMenuItem
              icon={Folder}
              title="Backup & Restore"
              description="Export and import your settings and data"
            />
            <Divider />

            {/* About Item */}
            <motion.div
              whileTap={{ scale: 0.96, opacity: 0.8 }}
              className="flex w-full cursor-pointer items-center px-4 py-4 select-none"
            >
              <Music2 className="h-6 w-6 flex-shrink-0 text-indigo-400" />
              <div className="mr-2 ml-4 min-w-0 flex-1">
                <div className="truncate text-[15px] font-medium text-white">
                  About
                </div>
                <div className="mt-0.5 truncate text-[13px] leading-tight text-white/50">
                  Version 0.12-alpha
                </div>
              </div>
              <ChevronRight className="h-5 w-5 flex-shrink-0 text-white/30" />
            </motion.div>

            <Divider />

            {/* Check for Updates Item */}
            <motion.div
              whileTap={{ scale: 0.96, opacity: 0.8 }}
              onClick={handleUpdateClick}
              className="flex w-full cursor-pointer items-center px-4 py-4 select-none"
            >
              <RefreshCw className="h-6 w-6 flex-shrink-0 text-indigo-400" />
              <div className="mr-2 ml-4 min-w-0 flex-1">
                <div className="truncate text-[15px] font-medium text-white">
                  {hasUpdateAvailable
                    ? "Update Available"
                    : "Check for Updates"}
                </div>
                <div
                  className={`mt-0.5 truncate text-[13px] leading-tight ${hasUpdateAvailable ? "text-indigo-400" : "text-white/50"}`}
                >
                  {hasUpdateAvailable
                    ? "Update available"
                    : "Current version is up to date"}
                </div>
              </div>
              {hasUpdateAvailable && (
                <div className="mr-2 h-2 w-2 rounded-full bg-red-500" />
              )}
            </motion.div>
          </div>

          {/* Bottom Padding for scroll area */}
          <div className="h-20" />
        </div>
      </div>
    </PhoneMockup>
  );
};

export default SettingsSimulation;
