import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col">
        {/* Core Hero Scroll Experience */}
        <Hero />

        {/* Continuation Section */}
        <SectionTwo />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
