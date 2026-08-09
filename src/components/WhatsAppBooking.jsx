import React from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

export default function WhatsAppBooking() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: '#0D1B2A' }}
    >
      {/* Subtle orange radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(251,191,36,0.07) 0%, transparent 70%)' }}
      />

      <div className="container-max relative z-10 text-center">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: 'rgba(37,211,102,0.12)',
            border: '1px solid rgba(37,211,102,0.25)',
          }}
        >
          <FaWhatsapp style={{ color: '#25D366', fontSize: '2.5rem' }} />
        </div>

        <h2
          className="font-heading font-bold text-white mb-4"
          style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', letterSpacing: '-0.5px', lineHeight: 1.1 }}
        >
          Book Your Cab Instantly
          <br />
          <span className="orange-gradient">via WhatsApp</span>
        </h2>
        <p
          className="mb-8 max-w-xl mx-auto"
          style={{ fontSize: 'clamp(0.88rem, 1.8vw, 1rem)', color: '#64748B', lineHeight: '1.75' }}
        >
          No app, no registration needed. Just send us a WhatsApp message and your ride is confirmed in minutes!
        </p>

        {/* Message Preview */}
        <div
          className="rounded-2xl p-5 max-w-md mx-auto mb-8 text-left"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: '#94A3B8' }}
          >
            📋 Booking Message Template
          </div>
          <div
            className="text-sm leading-relaxed font-mono rounded-xl p-4 space-y-1"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#64748B',
            }}
          >
            <div>📍 Pickup Location: <span style={{ color: '#94A3B8' }}>___</span></div>
            <div>🏁 Drop Location: <span style={{ color: '#94A3B8' }}>___</span></div>
            <div>📅 Date: <span style={{ color: '#94A3B8' }}>___</span></div>
            <div>⏰ Time: <span style={{ color: '#94A3B8' }}>___</span></div>
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp-section-btn"
          className="inline-flex items-center gap-3 font-bold px-10 py-4 rounded-xl text-white transition-all duration-200 group min-h-[52px]"
          style={{
            background: '#25D366',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            boxShadow: '0 8px 28px rgba(37,211,102,0.3)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#22C55E';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(37,211,102,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#25D366';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.3)';
          }}
        >
          <FaWhatsapp size={22} />
          Book via WhatsApp
          <FaArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <div className="mt-5 text-sm" style={{ color: '#475569' }}>
          ⚡ Average response time: under 2 minutes
        </div>
      </div>
    </section>
  );
}
