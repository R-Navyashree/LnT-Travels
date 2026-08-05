import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

// Logo imported â€” place logo.png in src/assets/ to activate
let logo;
try {
  logo = new URL('../assets/logo.png', import.meta.url).href;
} catch {
  logo = null;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Vehicles', href: '#vehicles' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(3,7,18,0.95)' : 'rgba(3,7,18,0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container-max px-4 md:px-6 flex items-center justify-between py-3">

        {/* â”€â”€ Logo â”€â”€ */}
        <a href="#home" className="flex items-center gap-3">
          {/* Oval logo container */}
          <div
            style={{
              width: '144px',
              height: '104px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid rgba(251,191,36,0.35)',
              boxShadow: '0 0 16px rgba(251,191,36,0.2)',
              flexShrink: 0,
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/logo.png"
              alt="LnT Travels Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Brand text */}
          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline gap-1">
              <span
                className="font-heading font-black text-xl leading-none"
                style={{ color: '#FBBF24', letterSpacing: '-1px' }}
              >
                LnT
              </span>
              <span
                className="font-heading font-bold text-xl leading-none tracking-[0.18em] ml-0.5"
                style={{ color: '#FFFFFF' }}
              >
                TRAVELS
              </span>
            </div>
            <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "5px", color: "#64748B", whiteSpace: "nowrap", fontWeight: "600" }}>Safe &bull; Reliable &bull; Comfortable</p>
          </div>
        </a>

        {/* â”€â”€ Desktop Links â”€â”€ */}
        <div className="hidden lg:flex items-center">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
              style={{ color: i === 0 ? '#FBBF24' : '#94A3B8' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FBBF24';
                e.currentTarget.style.background = 'rgba(251,191,36,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = i === 0 ? '#FBBF24' : '#94A3B8';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* â”€â”€ Desktop Buttons â”€â”€ */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919113052138"
            className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300"
            style={{ border: '1.5px solid rgba(255,255,255,0.12)', color: '#94A3B8' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#FBBF24'; e.currentTarget.style.color = '#FBBF24'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#94A3B8'; }}
          >
            <FaPhone size={12} /> Call Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300"
            style={{ background: '#FBBF24', color: '#0F172A', boxShadow: '0 4px 16px rgba(251,191,36,0.3)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FCD34D';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(251,191,36,0.45)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FBBF24';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(251,191,36,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <FaWhatsapp size={15} /> Book on WhatsApp
          </a>
        </div>

        {/* â”€â”€ Mobile Toggle â”€â”€ */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
          style={{ color: '#94A3B8' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* â”€â”€ Mobile Menu â”€â”€ */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="px-4 py-4 flex flex-col gap-1.5" style={{ background: 'rgba(3,7,18,0.98)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-4 text-sm font-semibold rounded-xl transition-all"
              style={{ color: '#94A3B8' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(251,191,36,0.08)'; e.currentTarget.style.color = '#FBBF24'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94A3B8'; }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/[0.06]">
            <a href="tel:+919113052138" className="btn-outline justify-center">
              <FaPhone size={13} /> Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
              className="btn-primary justify-center"
            >
              <FaWhatsapp size={15} /> Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
