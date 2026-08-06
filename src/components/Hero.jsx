import React from 'react';
import { FaWhatsapp, FaPhone, FaShieldAlt, FaUserTie, FaClock, FaCar } from 'react-icons/fa';
import { MdSupportAgent, MdAccessTime, MdCleaningServices } from 'react-icons/md';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

const features = [
  { icon: <FaShieldAlt size={16} />,        title: 'Safe & Reliable',    desc: 'Verified drivers and insured rides every trip.' },
  { icon: <FaCar size={16} />,              title: 'Comfortable Rides',  desc: 'Premium AC cabins and smooth experience.' },
  { icon: <MdAccessTime size={18} />,       title: 'Always On Time',     desc: 'Your schedule is our responsibility.' },
  { icon: <MdSupportAgent size={18} />,     title: '24×7 Service',       desc: 'Always here via WhatsApp or call.' },
  { icon: <FaUserTie size={16} />,          title: 'Pro Drivers',        desc: 'Background-verified, 5+ years experience.' },
  { icon: <MdCleaningServices size={18} />, title: 'Clean Vehicles',     desc: 'Sanitized before every trip.' },
  { icon: <FaClock size={16} />,            title: 'Affordable Pricing', desc: 'Flat rates, zero hidden charges.' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden"
      style={{ background: '#0D1B2A' }}
    >
      {/* Car image — full background, behind content */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Eritiga.png"
          alt="LnT Travels Ertiga"
          className="w-full h-full"
          style={{ objectFit: 'contain', objectPosition: 'center right', opacity: 0.06 }}
        />
      </div>

      {/* ── Top part: text only (full width) ── */}
      <div className="container-max px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 items-center gap-0 pt-6 md:pt-8 lg:pt-10">

          {/* Left: text + CTAs */}
          <div className="text-center lg:text-left pb-5 lg:pb-8 relative z-10">
            {/* Subtle bg pattern */}
            <div className="absolute -top-20 -left-20 w-96 h-96 pointer-events-none hidden lg:block"
              style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)' }} />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', color: '#FB923C' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Premium Tours &amp; Travels · Karnataka
            </div>

            <h1 className="font-heading font-black leading-[1.05] mb-3"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.6rem)', color: '#FFFFFF', letterSpacing: '-1.5px' }}>
              Travel Beyond
              <br />
              <span className="orange-gradient">Destinations</span>
            </h1>

            <p className="font-semibold mb-2" style={{ fontSize: 'clamp(0.82rem, 1.8vw, 0.98rem)', color: '#CBD5E1' }}>
              Premium Tours &amp; Travels Across Karnataka
            </p>
            <p className="leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(0.82rem, 1.6vw, 0.9rem)', color: '#94A3B8', lineHeight: '1.8' }}>
              Safe, comfortable, and memorable journeys — business travel, family vacations, airport
              transfers, or outstation getaways. Professional drivers and well-maintained vehicles, 24×7.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 min-h-[50px] text-white"
                style={{ background: '#F97316', boxShadow: '0 6px 24px rgba(249,115,22,0.35)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#EA580C'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(249,115,22,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(249,115,22,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <FaWhatsapp size={18} /> Book on WhatsApp
              </a>
              <a href="tel:+919113052138"
                className="flex items-center justify-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 min-h-[50px] text-white"
                style={{ background: '#2563EB', boxShadow: '0 6px 20px rgba(37,99,235,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <FaPhone size={15} /> Call Now
              </a>
            </div>
          </div>

          
        </div>
      </div>

      {/* ── Features strip — full width below ── */}
      <div className="container-max px-4 md:px-6 pb-8 md:pb-10">
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: 'clamp(1rem, 2.5vw, 1.4rem)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Orange top accent */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #F97316, #EA580C, #F97316)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {features.map((f) => (
              <div key={f.title}
                className="flex items-start gap-2.5 p-3 rounded-2xl transition-all duration-300 group cursor-default"
                style={{ background: '#F9FAFB', border: '1px solid #F3F4F6' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(249,115,22,0.05)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#F9FAFB'; e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(249,115,22,0.1)', color: '#F97316', border: '1px solid rgba(249,115,22,0.15)' }}>
                  {f.icon}
                </div>
                <div>
                  <p className="font-heading font-semibold" style={{ fontSize: '0.78rem', color: '#111827', marginBottom: '2px' }}>{f.title}</p>
                  <p style={{ fontSize: '0.68rem', color: '#9CA3AF', lineHeight: '1.45' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
