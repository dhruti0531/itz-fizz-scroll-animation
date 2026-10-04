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
      gsap.set(eyebrowRef.current, { opacity: 0, y: -15 });
      gsap.set(words, { opacity: 0, y: 35, filter: 'blur(6px)' });
      gsap.set(subtextRef.current, { opacity: 0, y: 20 });
      gsap.set(statCards, { opacity: 0, y: 25 });
      gsap.set(visualRef.current, { opacity: 0, scale: 0.85, y: 40, rotationX: 10 });
      gsap.set(indicatorRef.current, { opacity: 0, y: 12 });
      gsap.set([hudBadgeLeftRef.current, hudBadgeRightRef.current], { opacity: 0, scale: 0.9 });

      masterTl
        // Hero container appears smoothly
        .to(containerRef.current, {
          opacity: 1,
          duration: 0.7,
          ease: 'power2.inOut',
        })
        // Eyebrow text fades in
        .to(
          eyebrowRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
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
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.3)',
          },
          '-=0.35'
        )
        // Supporting text fades upward
        .to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          '-=0.45'
        )
        // Statistics appear sequentially with subtle stagger
        .to(
          statCards,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        // Main visual enters with polished movement & scale effect
        .to(
          visualRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            duration: 1.0,
            ease: 'expo.out',
          },
          '-=0.5'
        )
        // HUD telemetry badges pop in
        .to(
          [hudBadgeLeftRef.current, hudBadgeRightRef.current],
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
          },
          '-=0.6'
        )
        // Scroll indicator appears last
        .to(
          indicatorRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          '-=0.25'
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

      // Phase 1 (0% -> 50% of scroll):
      // Headline, subtext, and stats glide upward with parallax and fade
      scrollTl
        .to(
          headlineRef.current,
          {
            y: -100,
            opacity: 0.1,
            scale: 0.95,
            filter: 'blur(4px)',
            ease: 'power1.out',
          },
          0
        )
        .to(
          eyebrowRef.current,
          {
            y: -50,
            opacity: 0,
            ease: 'power1.out',
          },
          0
        )
        .to(
          subtextRef.current,
          {
            y: -60,
            opacity: 0,
            ease: 'power1.out',
          },
          0
        )
        .to(
          statCards,
          {
            y: isMobile ? -30 : -45,
            scale: 0.94,
            opacity: 0.2,
            stagger: 0.04,
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
            scale: 1.35,
            opacity: 0.85,
            y: 80,
            ease: 'sine.inOut',
          },
          0
        )
        // Main visual initiates dynamic forward flight & multi-axis 3D tilt
        .to(
          visualRef.current,
          {
            y: isMobile ? -20 : -50,
            x: isMobile ? 0 : (isTablet ? 30 : 60),
            scale: isMobile ? 1.12 : 1.25,
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
            x: -70,
            opacity: 0.15,
            ease: 'power1.out',
          },
          0
        )
        .to(
          hudBadgeRightRef.current,
          {
            x: 70,
            opacity: 0.15,
            ease: 'power1.out',
          },
          0
        );

      // Phase 2 (50% -> 100% of scroll):
      // Visual completes dramatic kinetic sweep and docks before transitioning to Section 2
      scrollTl
        .to(
          visualRef.current,
          {
            y: isMobile ? 70 : 90,
            x: isMobile ? 0 : (isTablet ? -40 : -70),
            scale: isMobile ? 1.05 : 1.18,
            rotationZ: isMobile ? -2 : -4,
            rotationY: isMobile ? 4 : 8,
            ease: 'power2.inOut',
          },
          0.5
        )
        .to(
          headlineRef.current,
          {
            y: -160,
            opacity: 0,
            ease: 'power2.in',
          },
          0.5
        )
        .to(
          statCards,
          {
            y: -90,
            opacity: 0,
            stagger: 0.02,
            ease: 'power2.in',
          },
          0.5
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
        className="sticky top-0 h-screen w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-3 sm:pb-4 overflow-hidden bg-[#030712]"
      >
        {/* Ambient Parallax Glows & Grid */}
        <div
          ref={bgGlowRef}
          className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-70 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        {/* Ambient Top Lighting Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

        {/* Floating Telemetry Coordinates / Top HUD Badges */}
        <div
          ref={hudBadgeLeftRef}
          className="hidden xl:flex absolute top-20 left-8 flex-col gap-1 p-2.5 rounded-xl glass-panel text-[10px] font-mono-tech text-slate-400 border-slate-800 z-10"
        >
          <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>SYS // PROTOCOL 0.94</span>
          </div>
          <div>VELOCITY: KINETIC</div>
          <div>FPS: LOCKED 60</div>
        </div>

        <div
          ref={hudBadgeRightRef}
          className="hidden xl:flex absolute top-20 right-8 flex-col gap-1 p-2.5 rounded-xl glass-panel text-[10px] font-mono-tech text-slate-400 border-slate-800 z-10 text-right"
        >
          <div className="text-cyan-400 font-semibold">AERODYNAMIC CORE</div>
          <div>SCROLL SYNCHRONIZED</div>
          <div>PRESSURE: 101.3 KPA</div>
        </div>

        {/* Top Section: Eyebrow + Scaled Headline + Supporting Text */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
          
          {/* Small Brand / Eyebrow Text */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-mono-tech tracking-[0.22em] uppercase shadow-md shadow-cyan-950/40 mb-1.5 sm:mb-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            KINETIC SCROLL EXPERIENCE
          </div>

          {/* Large Headline (scaled ~20% tighter for optimal viewport balance) */}
          <h1
            ref={headlineRef}
            className="font-display font-black text-white text-center leading-[1.05] tracking-[0.16em] sm:tracking-[0.2em] md:tracking-[0.24em] text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase select-none drop-shadow-xl"
          >
            <div className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-6">
              <span className="reveal-word inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                W E L C O M E
              </span>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-6 mt-0.5 sm:mt-1">
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
            className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-slate-300 max-w-lg font-sans font-light tracking-wide leading-relaxed px-4 text-center"
          >
            A scroll-driven kinetic frontier engineered for seamless motion, tactile physics, and uncompromising visual engagement.
          </p>

          {/* Three Statistics directly below supporting text */}
          <div className="w-full mt-2.5 sm:mt-3">
            <Stats ref={statsRef} />
          </div>
        </div>

        {/* Central Kinetic Visual (Clearly prominent and visible in first viewport) */}
        <div className="relative z-10 flex-1 w-full flex items-center justify-center py-1 sm:py-2 min-h-0">
          <ProductVisual ref={visualRef} className="max-h-full" />
        </div>

        {/* Small Scroll Indicator */}
        <div className="relative z-20 w-full flex justify-center pb-1">
          <ScrollIndicator ref={indicatorRef} />
        </div>

      </div>
    </div>
  );
}
