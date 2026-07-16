import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  FolderSearch,
  PenLine,
  ListMusic,
  AudioWaveform,
  Folder,
  Music2,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import PhoneMockup from '../PhoneMockup';

const SettingsMenuItem = ({ icon: Icon, title, description, onClick }) => (
  <motion.div
    whileTap={{ scale: 0.96, opacity: 0.8 }}
    onClick={onClick}
    className="flex items-center w-full px-4 py-4 cursor-pointer select-none"
  >
    <Icon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
    <div className="flex-1 ml-4 mr-2 min-w-0">
      <div className="text-white text-[15px] font-medium truncate">{title}</div>
      {description && (
        <div className="text-white/50 text-[13px] mt-0.5 truncate leading-tight">
          {description}
        </div>
      )}
    </div>
    <ChevronRight className="w-5 h-5 text-white/30 flex-shrink-0" />
  </motion.div>
);

const Divider = () => (
  <div className="h-[1px] w-full bg-white/10" />
);

const SettingsSimulation = () => {
  const [hasUpdateAvailable, setHasUpdateAvailable] = useState(true);

  const handleUpdateClick = () => {
    setHasUpdateAvailable(false);
  };

  return (
    <PhoneMockup>
      <div className="flex flex-col min-h-full bg-[#0a0a0a]">
        {/* Top App Bar */}
        <div className="flex items-center h-16 px-2 sticky top-0 bg-[#0a0a0a]/70 backdrop-blur-md z-10">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full hover:bg-white/10"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </motion.button>
          <div className="ml-2 text-white font-bold text-[22px]">Settings</div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 py-2">
          <div className="bg-white/[0.05] backdrop-blur-md rounded-2xl overflow-hidden flex flex-col">
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
              className="flex items-center w-full px-4 py-4 cursor-pointer select-none"
            >
              <Music2 className="w-6 h-6 text-indigo-400 flex-shrink-0" />
              <div className="flex-1 ml-4 mr-2 min-w-0">
                <div className="text-white text-[15px] font-medium truncate">About</div>
                <div className="text-white/50 text-[13px] mt-0.5 truncate leading-tight">
                  Version 0.12-alpha
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/30 flex-shrink-0" />
            </motion.div>
            
            <Divider />

            {/* Check for Updates Item */}
            <motion.div
              whileTap={{ scale: 0.96, opacity: 0.8 }}
              onClick={handleUpdateClick}
              className="flex items-center w-full px-4 py-4 cursor-pointer select-none"
            >
              <RefreshCw className="w-6 h-6 text-indigo-400 flex-shrink-0" />
              <div className="flex-1 ml-4 mr-2 min-w-0">
                <div className="text-white text-[15px] font-medium truncate">
                  {hasUpdateAvailable ? "Update Available" : "Check for Updates"}
                </div>
                <div className={`text-[13px] mt-0.5 truncate leading-tight ${hasUpdateAvailable ? 'text-indigo-400' : 'text-white/50'}`}>
                  {hasUpdateAvailable ? "Update available" : "Current version is up to date"}
                </div>
              </div>
              {hasUpdateAvailable && (
                <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
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
