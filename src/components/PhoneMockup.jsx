import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

const PhoneMockup = ({ children }) => {
  return (
    <div className="mx-auto w-[320px] sm:w-[360px] h-[700px] sm:h-[780px] bg-slate-950 rounded-[40px] shadow-2xl border-[8px] border-slate-900 relative overflow-hidden flex flex-col ring-1 ring-white/10">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-center px-6 z-50 text-white/90 text-[11px] font-medium tracking-wider">
        <span>12:00</span>
        {/* Notch / Camera cutout */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-xl"></div>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 w-full h-full pt-8 pb-2 relative z-0 overflow-y-auto bg-[#0a0a0a] hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
        {children}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-50 pointer-events-none"></div>
    </div>
  );
};

export default PhoneMockup;
