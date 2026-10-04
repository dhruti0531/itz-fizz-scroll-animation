import React, { forwardRef } from 'react';

const ProductVisual = forwardRef(({ className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ willChange: 'transform, opacity' }}
      aria-hidden="true"
    >
      {/* Background Ambient Aura / Multi-layer Glow */}
      <div className="absolute inset-0 -inset-x-12 -inset-y-12 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-400/15 blur-2xl animate-pulse pointer-events-none" />

      {/* Main Container with 3D Perspective */}
      <div className="relative w-64 sm:w-80 md:w-[420px] lg:w-[480px] xl:w-[520px] max-h-[200px] sm:max-h-[240px] md:max-h-[270px] aspect-[16/10] flex items-center justify-center">
        
        {/* Orbital HUD Ring 1 - Outer Tech Reticle */}
        <div className="absolute inset-2 sm:inset-4 border border-cyan-500/20 rounded-full border-dashed animate-[spin_40s_linear_infinite] opacity-40 pointer-events-none" />
        
        {/* Orbital HUD Ring 2 - Inner Precision Marks */}
        <div className="absolute inset-8 sm:inset-12 border border-blue-400/25 rounded-full border-dotted animate-[spin_25s_linear_infinite_reverse] opacity-50 pointer-events-none" />

        {/* Central Futuristic Kinetic Craft / Vessel SVG */}
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full drop-shadow-[0_20px_50px_rgba(6,182,212,0.35)] relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Linear Gradients for Futuristic Metallic Shell */}
            <linearGradient id="bodyGrad" x1="100" y1="150" x2="700" y2="450" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="25%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="75%" stopColor="#090d16" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="glowCyan" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="glassReflection" x1="200" y1="100" x2="600" y2="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="aeroWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>

            <radialGradient id="reactorCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="20%" stopColor="#67e8f9" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
            </radialGradient>

            {/* Filter for Intense Core Glow */}
            <filter id="coreBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Underglow Ground Reflection Shadow */}
          <ellipse cx="400" cy="510" rx="280" ry="25" fill="#000000" opacity="0.6" filter="url(#coreBlur)" />
          <ellipse cx="400" cy="505" rx="190" ry="14" fill="#06b6d4" opacity="0.35" filter="url(#coreBlur)" />

          {/* Rear Thrusters / Energy Stream */}
          <g opacity="0.85">
            <path
              d="M170 300 L90 285 L60 300 L90 315 Z"
              fill="url(#glowCyan)"
              filter="url(#coreBlur)"
            />
            <path
              d="M180 300 L110 292 L80 300 L110 308 Z"
              fill="#ffffff"
            />
            <line x1="80" y1="300" x2="30" y2="300" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeDasharray="12 6" />
          </g>

          {/* Left / Rear Aerodynamic Fin */}
          <path
            d="M200 240 L280 180 L360 210 L270 260 Z"
            fill="url(#aeroWingGrad)"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />

          {/* Main Aerodynamic Fuselage / Kinetic Body */}
          <path
            d="M190 300 
               C 220 220, 340 180, 520 200 
               C 650 215, 720 270, 710 300 
               C 700 330, 620 390, 480 405 
               C 320 420, 210 370, 190 300 Z"
            fill="url(#bodyGrad)"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeOpacity="0.4"
          />

          {/* Upper Glass Canopy / Visor Cockpit */}
          <path
            d="M320 225 
               C 400 205, 520 215, 590 250 
               C 560 275, 460 290, 360 280 
               C 325 275, 305 250, 320 225 Z"
            fill="#030712"
            stroke="#00f0ff"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
          {/* Canopy Specular Light Streak */}
          <path
            d="M340 232 C 410 215, 500 225, 560 250"
            stroke="url(#glassReflection)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Center Precision Energy Core / Vortex Reactor */}
          <ellipse cx="450" cy="305" rx="55" ry="38" fill="url(#reactorCore)" filter="url(#coreBlur)" />
          <ellipse cx="450" cy="305" rx="35" ry="24" fill="#ffffff" opacity="0.9" />
          <ellipse cx="450" cy="305" rx="58" ry="40" stroke="#00f0ff" strokeWidth="2" strokeDasharray="8 6" opacity="0.9" />
          <ellipse cx="450" cy="305" rx="72" ry="50" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 9" opacity="0.6" />

          {/* Cybernetic Longitudinal Accent Light Stream */}
          <path
            d="M230 300 
               C 310 290, 440 295, 580 320 
               C 640 330, 680 320, 695 305"
            stroke="url(#glowCyan)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#coreBlur)"
          />
          <path
            d="M230 300 
               C 310 290, 440 295, 580 320 
               C 640 330, 680 320, 695 305"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Forward Aero Wing / Lower Diffuser Blade */}
          <path
            d="M380 395 L560 380 L650 355 L580 415 L430 425 Z"
            fill="url(#aeroWingGrad)"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* Brand Typography & Tech Markings on Fuselage */}
          <text
            x="330"
            y="350"
            fill="#94a3b8"
            fontSize="14"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="6"
            opacity="0.8"
            fontWeight="bold"
          >
            ITZ-FIZZ // KIN-01
          </text>
          
          <text
            x="330"
            y="368"
            fill="#38bdf8"
            fontSize="10"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="3"
            opacity="0.75"
          >
            AERO-DYNAMICS [PWR 98.4%]
          </text>

          {/* Precision Vents / Louvers */}
          <g stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" opacity="0.6">
            <line x1="260" y1="275" x2="280" y2="285" />
            <line x1="275" y1="275" x2="295" y2="285" />
            <line x1="290" y1="275" x2="310" y2="285" />
          </g>

          {/* Floating UI Coordinate Nodes / Reticle Crosshairs */}
          <g stroke="#38bdf8" strokeWidth="1" opacity="0.5">
            <circle cx="620" cy="220" r="4" fill="#00f0ff" />
            <line x1="620" y1="210" x2="620" y2="230" />
            <line x1="610" y1="220" x2="630" y2="220" />
            
            <circle cx="210" cy="380" r="3" fill="#38bdf8" />
            <line x1="210" y1="373" x2="210" y2="387" />
            <line x1="203" y1="380" x2="217" y2="380" />
          </g>
        </svg>

        {/* Ambient Floating Tech Tags / Badges */}
        <div className="absolute -top-4 -right-2 sm:right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono-tech text-cyan-300 shadow-lg shadow-cyan-950/50 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>VESSEL STABILITY: 100%</span>
        </div>

        <div className="absolute -bottom-4 -left-2 sm:left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-blue-500/30 text-[10px] font-mono-tech text-blue-300 shadow-lg shadow-blue-950/50 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span>PROPULSION: SCROLL-DRIVEN</span>
        </div>
      </div>
    </div>
  );
});

ProductVisual.displayName = 'ProductVisual';
export default ProductVisual;
