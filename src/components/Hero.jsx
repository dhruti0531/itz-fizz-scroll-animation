import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductVisual from './ProductVisual';
import Stats from './Stats';
import ScrollIndicator from './ScrollIndicator';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);
  const indicatorRef = useRef(null);
  const bgGlowRef = useRef(null);
  const hudBadgeLeftRef = useRef(null);
  const hudBadgeRightRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Use gsap.context for clean scoping and React cleanup
    const ctx = gsap.context(() => {
      // Split headline words for staggered entrance
      const words = headlineRef.current?.querySelectorAll('.reveal-word');
      const statCards = statsRef.current?.querySelectorAll('.stat-card');

      if (prefersReducedMotion) {
        // Fallback for reduced motion preference
        gsap.set([eyebrowRef.current, words, subtextRef.current, visualRef.current, statCards, indicatorRef.current], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      // ==========================================
      // 1. INITIAL LOAD TIMELINE
      // ==========================================
      const masterTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // Set initial states
      gsap.set(containerRef.current, { opacity: 0 });
      gsap.set(eyebrowRef.current, { opacity: 0, y: -20 });
      gsap.set(words, { opacity: 0, y: 45, filter: 'blur(8px)' });
      gsap.set(subtextRef.current, { opacity: 0, y: 25 });
      gsap.set(visualRef.current, { opacity: 0, scale: 0.8, y: 60, rotationX: 15 });
      gsap.set(statCards, { opacity: 0, y: 35 });
      gsap.set(indicatorRef.current, { opacity: 0, y: 15 });
      gsap.set([hudBadgeLeftRef.current, hudBadgeRightRef.current], { opacity: 0, scale: 0.9 });

      masterTl
        // Hero container appears smoothly
        .to(containerRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.inOut',
        })
        // Eyebrow text fades in
        .to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.3'
        )
        // Main headline staggered word/character reveal
        .to(
          words,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.12,
            ease: 'back.out(1.4)',
          },
          '-=0.4'
        )
        // Supporting text fades upward
        .to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.5'
        )
        // Main visual enters with polished movement & scale effect
        .to(
          visualRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: 'expo.out',
          },
          '-=0.6'
        )
        // HUD badges pop in
        .to(
          [hudBadgeLeftRef.current, hudBadgeRightRef.current],
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.7'
        )
        // Statistics appear sequentially with subtle stagger
        .to(
          statCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        // Scroll indicator appears last
        .to(
          indicatorRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          '-=0.3'
        );

      // ==========================================
      // 2. CORE SCROLL ANIMATION (ScrollTrigger Scrub)
      // ==========================================
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2, // Smooth scrub synchronization
          invalidateOnRefresh: true,
        },
      });

      // Phase 1 (0% -> 45% of scroll):
      // Headline and stats glide with subtle parallax and fade out slightly to give focal stage to visual
      scrollTl
        .to(
          headlineRef.current,
          {
            y: -120,
            opacity: 0.15,
            scale: 0.94,
            filter: 'blur(4px)',
            ease: 'power1.out',
          },
          0
        )
        .to(
          eyebrowRef.current,
          {
            y: -60,
            opacity: 0,
            ease: 'power1.out',
          },
          0
        )
        .to(
          subtextRef.current,
          {
            y: -80,
            opacity: 0,
            ease: 'power1.out',
          },
          0
        )
        .to(
          indicatorRef.current,
          {
            opacity: 0,
            y: 20,
            ease: 'power1.out',
          },
          0
        )
        // Ambient background glow intensifies and tracks scroll
        .to(
          bgGlowRef.current,
          {
            scale: 1.4,
            opacity: 0.9,
            y: 100,
            ease: 'sine.inOut',
          },
          0
        )
        // Main visual initiates dynamic forward flight & multi-axis 3D tilt
        .to(
          visualRef.current,
          {
            y: isMobile ? 30 : -40,
            x: isMobile ? 0 : (isTablet ? 30 : 60),
            scale: isMobile ? 1.08 : 1.22,
            rotationZ: isMobile ? 3 : 5,
            rotationY: isMobile ? -6 : -12,
            ease: 'power2.inOut',
          },
          0
        )
        // HUD badges shift with parallax depth
        .to(
          hudBadgeLeftRef.current,
          {
            x: -80,
            opacity: 0.2,
            ease: 'power1.out',
          },
          0
        )
        .to(
          hudBadgeRightRef.current,
          {
            x: 80,
            opacity: 0.2,
            ease: 'power1.out',
          },
          0
        )
        // Statistics elevate and shift dynamically
        .to(
          statCards,
          {
            y: isMobile ? -30 : -50,
            scale: 0.96,
            opacity: 0.4,
            stagger: 0.05,
            ease: 'power1.out',
          },
          0
        );

      // Phase 2 (45% -> 100% of scroll):
      // Visual completes dramatic kinetic sweep and docks toward lower right before transitioning to Section 2
      scrollTl
        .to(
          visualRef.current,
          {
            y: isMobile ? 90 : 120,
            x: isMobile ? 0 : (isTablet ? -40 : -80),
            scale: isMobile ? 1.02 : 1.15,
            rotationZ: isMobile ? -2 : -4,
            rotationY: isMobile ? 4 : 8,
            ease: 'power2.inOut',
          },
          0.45
        )
        .to(
          headlineRef.current,
          {
            y: -180,
            opacity: 0,
            ease: 'power2.in',
          },
          0.45
        )
        .to(
          statCards,
          {
            y: -100,
            opacity: 0,
            stagger: 0.03,
            ease: 'power2.in',
          },
          0.45
        );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Tall outer scroll wrapper (260vh) for deep, scrubbed scroll travel
    <div ref={triggerRef} className="relative w-full h-[250vh] sm:h-[260vh]">
      
      {/* Pinned Viewport Container */}
      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8 overflow-hidden bg-[#030712]"
      >
        {/* Ambient Parallax Glows & Grid */}
        <div
          ref={bgGlowRef}
          className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-70 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        {/* Ambient Top Lighting Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

        {/* Floating Telemetry Coordinates / Top HUD Badges */}
        <div
          ref={hudBadgeLeftRef}
          className="hidden lg:flex absolute top-28 left-8 xl:left-16 flex-col gap-1 p-3 rounded-xl glass-panel text-[11px] font-mono-tech text-slate-400 border-slate-800 z-10"
        >
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>SYS // PROTOCOL 0.94</span>
          </div>
          <div>VELOCITY VECTOR: KINETIC</div>
          <div>FRAME RATE: LOCKED 60FPS</div>
        </div>

        <div
          ref={hudBadgeRightRef}
          className="hidden lg:flex absolute top-28 right-8 xl:right-16 flex-col gap-1 p-3 rounded-xl glass-panel text-[11px] font-mono-tech text-slate-400 border-slate-800 z-10 text-right"
        >
          <div className="text-cyan-400 font-semibold">AERODYNAMIC CORE</div>
          <div>SCROLL SYNCHRONIZED</div>
          <div>PRESSURE: 101.3 KPA</div>
        </div>

        {/* Header Block: Eyebrow + Generous Letter-Spaced Headline + Subtext */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto mt-2 sm:mt-4">
          
          {/* Small Brand / Eyebrow Text */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-mono-tech tracking-[0.25em] uppercase shadow-lg shadow-cyan-950/40 mb-3 sm:mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            KINETIC SCROLL EXPERIENCE
          </div>

          {/* Large Headline with generous letter spacing */}
          <h1
            ref={headlineRef}
            className="font-display font-black text-white text-center leading-[1.08] tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.28em] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase select-none drop-shadow-2xl"
          >
            <div className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-8">
              <span className="reveal-word inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                W E L C O M E
              </span>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-8 mt-1 sm:mt-2">
              <span className="reveal-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-400 text-glow-cyan">
                I T Z
              </span>
              <span className="reveal-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-300 text-glow-cyan">
                F I Z Z
              </span>
            </div>
          </h1>

          {/* Short Supporting Sentence */}
          <p
            ref={subtextRef}
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-300 max-w-xl font-sans font-light tracking-wide leading-relaxed px-4 text-center"
          >
            A scroll-driven kinetic frontier engineered for seamless motion, tactile physics, and uncompromising visual engagement.
          </p>
        </div>

        {/* Central Kinetic Visual */}
        <div className="relative z-10 my-auto w-full flex items-center justify-center py-2">
          <ProductVisual ref={visualRef} />
        </div>

        {/* Bottom Section: Three Statistics + Scroll Indicator */}
        <div className="relative z-20 w-full flex flex-col items-center gap-4 sm:gap-6 mt-auto">
          {/* Three Statistics */}
          <Stats ref={statsRef} />

          {/* Small Scroll Indicator */}
          <ScrollIndicator ref={indicatorRef} className="mt-1" />
        </div>

      </div>
    </div>
  );
}
