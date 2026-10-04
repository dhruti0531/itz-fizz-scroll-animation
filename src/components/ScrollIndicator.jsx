import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = forwardRef(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-2 select-none pointer-events-none ${className}`}
    >
      <span className="text-[11px] font-mono-tech tracking-[0.2em] text-cyan-400 uppercase">
        SCROLL TO EXPLORE
      </span>

      {/* Pill mouse track */}
      <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-slate-700/80 bg-slate-900/50 backdrop-blur-sm flex items-start justify-center p-1.5 shadow-lg shadow-black/50">
        <div className="w-1.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
      </div>

      <ChevronDown className="w-3.5 h-3.5 text-cyan-500/70 animate-pulse -mt-1" />
    </div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';
export default ScrollIndicator;
