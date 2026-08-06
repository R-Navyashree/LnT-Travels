import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-14 md:py-18 px-4" style={{ background: '#0D1B2A' }}>
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />
      <div className="container-max relative z-10 text-center max-w-2xl mx-auto">
        <div className="mx-auto mb-5 h-1 w-16 rounded-full" style={{ background: 'linear-gradient(to right, #F97316, #EA580C)' }} />
        <h2 className="font-heading font-black mb-3"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', color: '#FFFFFF', letterSpacing: '-0.5px' }}>
          Ready for Your{' '}
          <span className="orange-gradient">Next Journey?</span>
        </h2>
        <p className="mb-8 mx-auto max-w-lg" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', color: '#94A3B8', lineHeight: '1.75' }}>
          Book your ride today and travel with confidence. Whether it&apos;s a local ride or an
          unforgettable road trip, LnT Travels is here for every journey.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 font-bold px-8 py-4 rounded-xl transition-all duration-300 min-h-[52px] text-white"
            style={{ background: '#F97316', boxShadow: '0 6px 24px rgba(249,115,22,0.4)', fontSize: '0.95rem' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#EA580C'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(249,115,22,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(249,115,22,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <FaWhatsapp size={20} /> Book on WhatsApp
          </a>
          <a href="tel:+919113052138"
            className="flex items-center justify-center gap-2.5 font-bold px-8 py-4 rounded-xl transition-all duration-300 min-h-[52px] text-white"
            style={{ background: '#2563EB', boxShadow: '0 6px 20px rgba(37,99,235,0.3)', fontSize: '0.95rem' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <FaPhone size={17} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
