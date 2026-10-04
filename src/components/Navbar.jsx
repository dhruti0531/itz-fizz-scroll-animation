import React from 'react';
import { Sparkles, ArrowUpRight, Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#070d1d] rounded-xl flex items-center justify-center">
              <Zap className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-[0.25em] text-sm text-white uppercase group-hover:text-cyan-400 transition-colors">
              ITZ FIZZ
            </span>
            <span className="text-[10px] font-mono-tech text-slate-400 tracking-wider">
              EST. 2026 // KINETIC LAB
            </span>
          </div>
        </div>

        {/* Center Pill / Status */}
        <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-mono-tech tracking-wider text-slate-300">
            SCROLL ENGINE ACTIVE
          </span>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#explore"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/30 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">EXPLORE ARCHIVE</span>
            <span className="sm:hidden">EXPLORE</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
