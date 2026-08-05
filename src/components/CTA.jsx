import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#030712' }}
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=90&auto=format&fit=crop"
          alt="Open road trip"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(3,7,18,0.96) 0%, rgba(15,23,42,0.92) 50%, rgba(3,7,18,0.96) 100%)',
          }}
        />
      </div>

      {/* Glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(30,58,138,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-max px-4 md:px-6 py-24 md:py-32 relative z-10 text-center">
        {/* Top accent line */}
        <div
          className="mx-auto mb-10 h-px w-24"
          style={{ background: 'linear-gradient(to right, transparent, #FBBF24, transparent)' }}
        />

        <span className="section-pill mb-6 inline-block">Book Your Ride</span>

        <h2
          className="font-heading font-black leading-tight mb-6"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
            color: '#FFFFFF',
            letterSpacing: '-1.5px',
          }}
        >
          Ready for Your
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #FCD34D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Next Journey?
          </span>
        </h2>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-12"
          style={{ color: '#64748B', lineHeight: '1.8' }}
        >
          Book your ride today and travel with confidence. Whether it&apos;s a local ride or an
          unforgettable road trip, LnT Travels is here to make every journey comfortable and
          stress-free.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-bold text-base px-10 py-4 rounded-full transition-all duration-300"
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
            className="flex items-center gap-3 font-bold text-base px-10 py-4 rounded-full transition-all duration-300"
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
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #030712, transparent)' }}
      />
    </section>
  );
}
