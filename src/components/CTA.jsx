import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 px-4" style={{ background: '#0D1B2A' }}>
      <div className="floating-orb left-1/2 top-10 h-40 w-40 bg-yellow-400/20" style={{ transform: 'translateX(-50%)' }} />
      <div className="floating-orb right-8 bottom-6 h-32 w-32 bg-sky-400/15" style={{ animationDelay: '0.7s' }} />

      <div className="container-max relative z-10 text-center max-w-xl mx-auto">
        {/* Orange accent line */}
        <div className="mx-auto mb-6 h-1 w-16 rounded-full"
          style={{ background: 'linear-gradient(to right, #FBBF24, #F59E0B)' }} />

        <h2 className="font-heading font-bold mb-3 text-white"
          style={{ fontSize: 'clamp(1.7rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>
          Ready for Your{' '}
          <span className="orange-gradient">Next Journey?</span>
        </h2>
        <p className="mb-8 mx-auto max-w-lg" style={{ fontSize: 'clamp(0.88rem, 1.8vw, 1rem)', color: '#64748B', lineHeight: '1.75' }}>
          Book your cab in seconds — no app, no registration. Just send your trip details
          on WhatsApp or give us a call.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-orange justify-center px-8 py-4 text-base">
            <MessageCircle size={20} /> Book on WhatsApp
          </a>
          <a href="tel:+919113052138"
            className="btn-ghost justify-center px-8 py-4 text-base">
            <Phone size={17} /> +91 9113052138
          </a>
        </div>
      </div>
    </section>
  );
}
