import React from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';


export default function WhatsAppBooking() {
  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1a0a 0%, #1c1a08 50%, #141400 100%)' }}>
      {/* Yellow glow orbs */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent-400/8 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-accent-400/6 rounded-full blur-3xl" />
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent" />

      <div className="container-max relative z-10 text-center">
        {/* Icon */}
        <div className="w-24 h-24 bg-green-500/15 border border-green-500/30 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 float-animation">
          <FaWhatsapp className="text-green-400 text-5xl" />
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Book Your Cab Instantly<br />
          <span className="text-gradient">via WhatsApp</span>
        </h2>
        <p className="text-dark-300 text-base md:text-xl mb-8 max-w-xl mx-auto">
          No app, no registration needed. Just send us a WhatsApp message and your ride is confirmed in minutes!
        </p>

        {/* Message Preview */}
        <div className="dark-card border border-white/8 rounded-2xl p-5 max-w-md mx-auto mb-8 text-left">
          <div className="text-dark-400 text-xs font-semibold uppercase tracking-wider mb-3">
            📋 Booking Message Template
          </div>
          <div className="text-dark-200 text-sm leading-relaxed font-mono bg-white/3 border border-white/5 rounded-xl p-4 space-y-1">
      'Hello LnT Travels, I am interested in booking a cab.<br/>Pickup: ___<br/>Drop: ___<br/>Date: ___<br/>Time: ___'
            <div>📍 Pickup Location: <span className="text-dark-400">___</span></div>
            <div>🏁 Drop Location: <span className="text-dark-400">___</span></div>
            <div>📅 Date: <span className="text-dark-400">___</span></div>
            <div>⏰ Time: <span className="text-dark-400">___</span></div>
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp-section-btn"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1 group"
        >
          <FaWhatsapp size={24} />
          Book via WhatsApp
          <FaArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <div className="mt-6 text-dark-400 text-sm">
          ⚡ Average response time: under 2 minutes
        </div>
      </div>
    </section>
  );
}
