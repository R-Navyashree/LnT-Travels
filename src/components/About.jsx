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
  '24×7 availability for airport & emergency rides',
];

export default function About() {
  const { ref: leftRef, visible: leftVisible } = useReveal();
  const { ref: rightRef, visible: rightVisible } = useReveal();
  const { ref: statsRef, visible: statsVisible } = useReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: '#030712' }}>
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.14) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-pill">About LnT Travels</span>
          <h2 className="section-title">
            Your Travel, <span style={{ color: '#FBBF24' }}>Our Priority</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Trusted by thousands of travellers across Karnataka since 2016.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — Image */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''} relative`}>
            <div className="rounded-3xl overflow-hidden" style={{ height: '500px' }}>
              <img
                src="/Vehicles.png"
                alt="LnT Travels premium fleet — safe, reliable, and comfortable vehicles"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(3,7,18,0.65) 0%, transparent 55%)' }}
              />
            </div>

            {/* Blue glow border effect */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ boxShadow: '0 0 70px rgba(30,58,138,0.22)', borderRadius: '1.5rem' }}
            />

            {/* Floating trust badge */}
            <div
              className="absolute -bottom-6 -right-4 p-5 rounded-xl flex items-center gap-4"
              style={{
                background: 'rgba(17,24,39,0.96)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              }}
            >
              <div
                className="w-3 h-3 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(251,191,36,0.1)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.18)' }}
              >
                <FaShieldAlt size={14} />
              </div>
              <div>
               
                <div className="text-xs font-medium mt-0.5" style={{ color: '#475569' }}>Trusted Across Karnataka</div>
              </div>
            </div>

            {/* Location badge */}
            <div
              className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(3,7,18,0.82)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              <FaMapMarkerAlt style={{ color: '#FBBF24' }} size={13} />
              <span className="text-xs font-bold" style={{ color: '#CBD5E1' }}>Bangalore, Karnataka</span>
            </div>
          </div>

          {/* Right — Content */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''} space-y-6`}>
            <span className="section-pill">Who We Are</span>
            <h3
              className="font-heading font-black text-3xl md:text-4xl leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              More Than a Ride —<br />
              <span style={{ color: '#FBBF24' }}>A Complete Travel Experience</span>
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#64748B', lineHeight: '1.85' }}>
              LnT Travels is a trusted Tours &amp; Travels company based in Bangalore, dedicated to
              providing reliable and comfortable transportation services across Karnataka. We specialise
              in airport transfers, local rentals, outstation trips, corporate travel, and family tours.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#64748B', lineHeight: '1.85' }}>
              Our commitment to punctuality, safety, and customer satisfaction has made us a preferred
              travel partner for individuals, families, and businesses across the region.
            </p>
            <ul className="space-y-3.5 pt-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm font-medium" style={{ color: '#CBD5E1' }}>
                  <FaCheckCircle
                    style={{ color: '#FBBF24', marginTop: '2px', flexShrink: 0 }}
                    size={17}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className={`reveal ${statsVisible ? 'visible' : ''}`}>
          <div
            className="rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative overflow-hidden"
            style={{
              background: 'rgba(17,24,39,0.85)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 0 80px rgba(30,58,138,0.18)',
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-52"
              style={{ background: 'linear-gradient(to right, transparent, #FBBF24, transparent)' }}
            />
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    background: 'rgba(251,191,36,0.09)',
                    color: '#FBBF24',
                    border: '1px solid rgba(251,191,36,0.18)',
                  }}
                >
                  {s.icon}
                </div>
                <div className="font-heading font-black text-4xl md:text-5xl" style={{ color: '#FBBF24' }}>
                  {s.value}
                </div>
                <div className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#475569' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
