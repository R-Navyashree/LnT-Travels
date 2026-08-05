import React from 'react';
import { FaWhatsapp, FaPhone, FaCheckCircle, FaShieldAlt, FaClock, FaCar } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{ background: '#030712', minHeight: 'calc(100vh - 42px)' }}
    >
      {/* Full-screen cinematic background */}
      <div className="absolute inset-0">
        <img
          src="/Eritiga.png"
          alt="LnT Travels Maruti Suzuki Ertiga"
          className="w-full h-full object-contain"
          style={{ opacity: 0.55 }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(110deg, #030712 40%, rgba(3,7,18,0.82) 65%, rgba(3,7,18,0.3) 100%)',
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, #030712 0%, transparent 45%)',
        }} />
      </div>

      {/* Royal blue atmospheric glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute -bottom-20 left-1/4 w-[500px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="container-max px-4 md:px-6 w-full relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl">

       

          {/* Headline */}
          <h1
            className="font-heading font-black leading-[1.02] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', color: '#FFFFFF', letterSpacing: '-1.5px' }}
          >
            Travel Beyond
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 40%, #FCD34D 80%, #FBBF24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Destinations
            </span>
          </h1>

          

          {/* Description */}
          <p className="text-sm md:text-base leading-relaxed mb-10 max-w-xl" style={{ color: '#475569', lineHeight: '1.5' }}>
            At LnT Travels, we make every journey safe, comfortable, and memorable. Whether
            you're travelling for business, a family vacation, airport transfer, or an outstation
            getaway, our professional drivers and well-maintained vehicles ensure a smooth experience
            from start to finish.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-bold text-base px-9 py-4 rounded-full transition-all duration-300"
              style={{ background: '#FBBF24', color: '#0F172A', boxShadow: '0 8px 32px rgba(251,191,36,0.38)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FCD34D';
                e.currentTarget.style.boxShadow = '0 20px 52px rgba(251,191,36,0.55)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FBBF24';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(251,191,36,0.38)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaWhatsapp size={20} /> Book on WhatsApp
            </a>
            <a
              href="tel:+919113052138"
              className="flex items-center gap-3 font-bold text-base px-9 py-4 rounded-full transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1.5px solid rgba(255,255,255,0.18)',
                color: '#E2E8F0',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FBBF24';
                e.currentTarget.style.color = '#FBBF24';
                e.currentTarget.style.background = 'rgba(251,191,36,0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                e.currentTarget.style.color = '#E2E8F0';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FaPhone size={16} /> Call Now
            </a>
          </div>

          {/* Feature badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: <FaClock size={16} />, label: '24×7 Service' },
              { icon: <FaCheckCircle size={16} />, label: 'Professional Drivers' },
              { icon: <FaCar size={16} />, label: 'Clean Vehicles' },
              { icon: <FaShieldAlt size={16} />, label: 'Affordable Pricing' },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-3 py-3 rounded-2xl transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(251,191,36,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(251,191,36,0.22)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                <span style={{ color: '#FBBF24' }}>{b.icon}</span>
                <span className="text-xs font-semibold" style={{ color: '#94A3B8' }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #030712, transparent)' }} />
    </section>
  );
}
