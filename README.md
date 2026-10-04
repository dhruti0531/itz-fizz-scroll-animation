# ITZ FIZZ — Scroll-Driven Interactive Hero Experience

An ultra-modern, high-performance scroll-driven frontend web experience built for **ITZ FIZZ**. Engineered with React, Vite, Tailwind CSS, and GSAP ScrollTrigger, the project delivers a tactile, hardware-accelerated motion journey with seamless reversible scrub physics and visual fidelity.

---

## ⚡ Project Overview

**ITZ FIZZ** is an interactive digital showcase demonstrating high-end motion design and frontend engineering. The experience centers around a full-screen, dark aesthetic hero section with generous letter-spaced typography, live telemetry metrics, subtle multi-layer entrance animations, and an original SVG/CSS-crafted aerodynamic kinetic vessel that reacts dynamically to scroll progress.

---

## ✨ Features

- **Scroll-Driven Hero Animation**: The central kinetic vessel dynamically rotates, scales, translates across 3D axes, and glides in direct response to the user's scroll position.
- **GSAP ScrollTrigger Scrubbing**: Uses scrubbed timelines (`scrub: 1.2`) ensuring deterministic, butter-smooth 60+ FPS motion that reverses naturally when scrolling upward.
- **Polished Entrance Choreography**: On page load, hero elements enter sequentially:
  1. Hero background & glowing aura fade in smoothly
  2. Eyebrow badge descends into view
  3. Headline words reveal with a staggered blur and vertical slide
  4. Supporting sentence elevates gracefully
  5. Central visual enters with an expansive scaling movement
  6. Statistics cards cascade in with subtle stagger
  7. Scroll indicator UI affordance appears last
- **Multi-Layered Parallax Depth**: Orbital HUD reticles, coordinates, background gradients, and metric cards shift at differential velocity tiers.
- **Continuation Narrative (Section 02)**: Seamlessly transitions into a minimal continuation section (*"Designed for attention."*) with interactive architecture cards and return-to-top controls.
- **Fluid Multi-Viewport Responsiveness**: Fully responsive across mobile, tablet, laptop, and ultra-wide desktop viewports with adaptive typography and safe spatial envelopes.
- **Accessibility & Motion Preferences**: Supports `prefers-reduced-motion` to immediately render resting states for users who prefer static presentations.

---

## 🛠️ Tech Stack

- **React 19** — Component structure, refs, and declarative lifecycle management
- **Vite** — High-speed build tooling and optimized production bundling
- **Tailwind CSS v4** — Utility-first styling, glassmorphism, and responsive design system
- **GSAP (GreenSock Animation Platform)** — High-precision animation engine
- **GSAP ScrollTrigger** — Scroll synchronization and scrubbed timeline orchestration
- **Lucide React** — Minimalist vector iconography

---

## 🌀 Animation Implementation Details

The core motion architecture is encapsulated within [`src/components/Hero.jsx`](src/components/Hero.jsx):

1. **Scoping & Cleanup**:
   GSAP animations are initialized inside a `gsap.context()` block tied to the React component lifecycle (`useEffect`), ensuring memory leak prevention and reliable DOM cleanup on unmount:
   ```javascript
   const ctx = gsap.context(() => {
     // Timeline & ScrollTrigger setup
   }, triggerRef);
   return () => ctx.revert();
   ```

2. **Scrubbed Scroll Synchronization**:
   A dedicated tall scroll container (`h-[260vh]`) with a sticky viewport (`sticky top-0 h-screen`) provides ample travel distance for multi-phase interpolation:
   ```javascript
   const scrollTl = gsap.timeline({
     scrollTrigger: {
       trigger: triggerRef.current,
       start: 'top top',
       end: 'bottom bottom',
       scrub: 1.2,
       invalidateOnRefresh: true,
     },
   });
   ```

3. **GPU Acceleration & Transform Purity**:
   All scroll animations exclusively target `transform` (`x`, `y`, `scale`, `rotationZ`, `rotationY`) and `opacity` alongside CSS `will-change` properties, avoiding expensive layout reflows or repaint thrashing.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/itz-fizz.git
   cd itz-fizz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build

To compile and optimize the application for production:

```bash
npm run build
```

To preview the generated production build locally:

```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment

The project is configured out-of-the-box with relative asset resolution (`base: './'` in `vite.config.js`), making it fully compatible with GitHub Pages.

### Steps to Deploy:
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to the `gh-pages` branch using `gh-pages` or via GitHub Actions.

---

## 📜 Asset & Design Attribution

- **Original Visual Assets**: The central kinetic vessel is an original SVG/CSS composition crafted specifically for ITZ FIZZ with layered ambient glow filters, metallic gradients, and HUD telemetry rings.
- **Typography**: Space Grotesk, Syne, Plus Jakarta Sans, and JetBrains Mono via Google Fonts.
