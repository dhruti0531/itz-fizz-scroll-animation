import React from 'react';
import { Compass, Cpu, Layers, ShieldCheck, ArrowRight, Gauge, Radio } from 'lucide-react';

const FEATURES = [
  {
    icon: Cpu,
    tag: 'ARCHITECTURE',
    title: 'Hardware-Accelerated Kinetic Engine',
    description:
      'Engineered exclusively with transform matrix operations and GPU-accelerated compositing for fluid 60+ FPS motion curves.',
  },
  {
    icon: Layers,
    tag: 'PRECISION',
    title: 'ScrollTrigger Scrub Synchronization',
    description:
      'Every degree of rotation and parallax coordinate is tied mathematically to your scroll velocity and travel distance.',
  },
  {
    icon: ShieldCheck,
    tag: 'ADAPTABILITY',
    title: 'Dynamic Multi-Viewport Hierarchy',
    description:
      'Intelligent layout recalibration dynamically scales typography, spatial envelopes, and depth layers across all device form factors.',
  },
];

export default function SectionTwo() {
  return (
    <section id="explore" className="relative scroll-mt-20 sm:scroll-mt-24 pt-28 sm:pt-36 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-[#030712] border-t border-slate-800/80 overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono-tech text-cyan-300 mb-6 tracking-widest uppercase">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            SECTION 02 // CONTINUATION
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white mb-6 leading-tight">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">attention</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
            ITZ FIZZ demonstrates the intersection of computational design and scroll-driven interactivity. By orchestrating transform pipelines with GSAP ScrollTrigger, the interface transforms standard web exploration into an immersive tactile narrative.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 group-hover:border-cyan-500/50 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono-tech tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors">
                      0{idx + 1} // {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-slate-100 mb-3 group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-mono-tech text-cyan-400 tracking-wider">
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    VIEW ARCHITECTURE <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Telemetry Box */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-heading font-bold text-white">
                Deterministic Reverse-Scroll Physics
              </div>
              <div className="text-xs text-slate-400 font-sans">
                Scroll up to watch the kinetic vessel smoothly realign to the origin state.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-full text-xs font-mono-tech tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors font-semibold shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              <span>RETURN TO TOP</span>
              <Compass className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
