import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <>
      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book via WhatsApp"
        className="fixed bottom-28 right-5 z-50 w-14 h-14 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
        style={{ background: '#25D366' }}
      >
        <FaWhatsapp size={26} />
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-25 animate-ping" />
        <span
          className="absolute right-full mr-3 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg"
          style={{ background: '#0F172A' }}
        >
          Book on WhatsApp
        </span>
      </a>

      {/* Phone FAB */}
      <a
        href="tel:+919113052138"
        aria-label="Call Now"
        className="fixed bottom-10 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
        style={{ background: '#FBBF24' }}
      >
        <FaPhone size={22} style={{ color: '#0F172A' }} />
        <span
          className="absolute right-full mr-3 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg"
          style={{ background: '#0F172A' }}
        >
          Call Now
        </span>
      </a>
    </>
  );
}
