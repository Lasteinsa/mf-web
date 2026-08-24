import { Wifi, Battery, Signal } from "lucide-react";

const PhoneMockup = ({ children }: any) => {
  return (
    <div className="relative mx-auto flex h-[700px] w-[320px] flex-col overflow-hidden rounded-[40px] border-[8px] bg-slate-100 sm:h-[780px] sm:w-[360px]">
      {/* Status Bar */}
      <div className="absolute top-0 right-0 left-0 z-50 flex h-8 items-center justify-between px-6 text-[11px] font-medium tracking-wider text-slate-900/90">
        <span>12:00</span>
        {/* Notch / Camera cutout */}
        <div className="absolute top-0 left-1/2 h-5 w-28 -translate-x-1/2 rounded-b-xl bg-slate-900"></div>
        <div className="flex items-center gap-1.5">
          <Signal className="h-3.5 w-3.5" />
          <Wifi className="h-3.5 w-3.5" />
          <Battery className="h-4 w-4" />
        </div>
      </div>

      {/* Screen Content */}
      <div
        className="hide-scrollbar relative z-0 h-full w-full flex-1 overflow-y-auto bg-slate-50 pt-8 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
 .hide-scrollbar::-webkit-scrollbar {
 display: none;
 }
 `,
          }}
        />
        {children}
      </div>

      {/* Home Indicator */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 z-50 h-1 w-28 -translate-x-1/2 rounded-full bg-white/40"></div>
    </div>
  );
};

export default PhoneMockup;
