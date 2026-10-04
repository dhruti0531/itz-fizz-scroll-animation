import React, { forwardRef } from 'react';
import { Activity, Zap, TrendingUp } from 'lucide-react';

const STATS_DATA = [
  {
    value: '86%',
    label: 'Visual Engagement',
    description: 'Measured across high-velocity viewports',
    icon: Activity,
    accent: 'cyan',
  },
  {
    value: '3.2×',
    label: 'Interaction Rate',
    description: 'Scrubbed motion responsiveness benchmark',
    icon: Zap,
    accent: 'blue',
  },
  {
    value: '92%',
    label: 'User Retention',
    description: 'Frictionless scroll continuity index',
    icon: TrendingUp,
    accent: 'indigo',
  },
];

const Stats = forwardRef(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-4 w-full max-w-3xl mx-auto z-20 ${className}`}
    >
      {STATS_DATA.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="stat-card group relative px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl glass-panel glass-panel-hover overflow-hidden transition-all duration-300 flex flex-col justify-between"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-500/20 transition-all duration-300" />
            
            {/* Header / Metric */}
            <div className="flex items-center justify-between mb-1">
              <span className="text-2xl sm:text-2xl md:text-3xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 group-hover:to-cyan-200">
                {item.value}
              </span>
              <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors">
                <IconComponent className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Label */}
            <div className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 mb-0.5 group-hover:text-white transition-colors">
              {item.label}
            </div>

            {/* Context / Supporting Note */}
            <p className="text-[11px] text-slate-400 font-sans leading-snug">
              {item.description}
            </p>

            {/* Bottom active line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        );
      })}
    </div>
  );
});

Stats.displayName = 'Stats';
export default Stats;
