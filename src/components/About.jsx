import React from 'react';
import { FaCheckCircle, FaAward, FaUsers, FaRoad, FaShieldAlt, FaMapMarkerAlt } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';

const stats = [
  { value: '1+', label: 'Years of Service', icon: <FaAward /> },
  { value: '5K+', label: 'Happy Travellers', icon: <FaUsers /> },
  { value: '50+', label: 'Destinations', icon: <FaRoad /> },
  { value: '24/7', label: 'Always Available', icon: <FaShieldAlt /> },
];

const highlights = [
  'Professional, licensed & background-verified drivers',
  'GPS-enabled fleet for real-time tracking',
  'Clean & sanitized vehicles before every trip',
  'Transparent pricing — no hidden charges',
];

export default function About() {
  const { ref: leftRef, visible: leftVisible } = useReveal();
  const { ref: rightRef, visible: rightVisible } = useReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: '#F9FAFB' }}>
      <div className="container-max relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <span className="section-pill">About LnT Travels</span>
          <h2 className="section-title">Your Travel, <span className="orange-gradient">Our Priority</span></h2>
          <p className="section-subtitle mx-auto">Trusted by thousands of travellers across Karnataka since 2016.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''} relative`}>
            <div className="rounded-3xl overflow-hidden" style={{ height: 'clamp(240px, 40vw, 400px)', boxShadow: '0 20px 60px rgba(15,23,42,0.12)' }}>
              <img src="/Vehicles.png" alt="LnT Travels premium fleet"
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Location pill */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.95)', boxShadow: '0 4px 12px rgba(15,23,42,0.12)', border: '1px solid #E5E7EB' }}>
              <FaMapMarkerAlt style={{ color: '#F97316' }} size={11} />
              <span className="text-xs font-bold" style={{ color: '#374151' }}>Bangalore, Karnataka</span>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-5 left-4 right-4">
              <div className="grid grid-cols-4 gap-2 p-3 rounded-2xl"
                style={{ background: '#FFFFFF', boxShadow: '0 8px 32px rgba(15,23,42,0.12)', border: '1px solid #E5E7EB' }}>
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center py-1">
                    <div className="text-[10px] mb-0.5" style={{ color: '#F97316' }}>{s.icon}</div>
                    <div className="font-heading font-black text-base md:text-xl orange-gradient">{s.value}</div>
                    <div className="text-[9px] font-semibold uppercase tracking-wide" style={{ color: '#9CA3AF' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''} space-y-5 mt-6 lg:mt-0`}>
            <h3 className="font-heading font-black leading-tight" style={{ fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)', color: '#0D1B2A' }}>
              More Than a Ride —<br />
              <span className="orange-gradient">A Complete Travel Experience</span>
            </h3>
            <p style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)', color: '#4B5563', lineHeight: '1.85' }}>
              LnT Travels is a trusted Tours &amp; Travels company in Bangalore, specialising in
              airport transfers, local rentals, outstation trips, corporate travel, and family tours
              across Karnataka. Our commitment to punctuality and safety makes us the preferred
              travel partner for individuals, families, and businesses.
            </p>
            <ul className="space-y-3 pt-1">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm font-medium" style={{ color: '#374151' }}>
                  <FaCheckCircle style={{ color: '#10B981', marginTop: '2px', flexShrink: 0 }} size={16} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
