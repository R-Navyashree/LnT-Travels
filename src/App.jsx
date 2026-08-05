import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureStrip from './components/FeatureStrip';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Vehicles from './components/Vehicles';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#030712' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <TopBar />
        <Navbar />
      </div>
      <main style={{ paddingTop: '108px' }}>
        <Hero />
        <FeatureStrip />
        <About />
        <Services />
        <Destinations />
        <Vehicles />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
