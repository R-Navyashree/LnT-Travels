import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Vehicles from './components/Vehicles';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Fixed header — TopBar ~38px + Navbar ~68px = ~106px */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <Navbar />
      </div>

      <main className="pt-[88px]">
        {/* 1. Dark cinematic hero + booking form */}
        <Hero />
        {/* 2. How It Works — 3 steps */}
        <TrustBanner />
        {/* 3. About */}
        <About />
        {/* 4. Services */}
        <Services />
        {/* 5. Popular Destinations */}
        <Destinations />
        {/* 6. Our Fleet */}
        <Vehicles />
        {/* 7. CTA band */}
        <CTA />
        {/* 8. Contact + map */}
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
