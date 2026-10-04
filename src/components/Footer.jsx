import React from 'react';
import { Zap, Layers, Code2 } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-[#02050c] border-t border-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <span className="font-display font-bold tracking-[0.2em] text-white text-sm">
            ITZ FIZZ
          </span>
          <span className="text-xs font-mono-tech text-slate-400">
            © 2026 // SCROLL LAB
          </span>
        </div>

        {/* Tech Stack Indicator */}
        <div className="flex items-center gap-4 text-xs font-mono-tech text-slate-400">
          <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
            <Code2 className="w-3.5 h-3.5 text-cyan-500" /> React 19 + Vite
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
            <Layers className="w-3.5 h-3.5 text-cyan-500" /> GSAP ScrollTrigger
          </span>
        </div>

        {/* Status */}
        <div className="text-xs font-mono-tech text-slate-400">
          DESIGNED FOR FRONTIER WEB PERFORMANCE
        </div>
      </div>
    </footer>
  );
}
