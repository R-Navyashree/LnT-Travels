import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

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
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: scrolled ? '0 4px 20px rgba(15,23,42,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          padding: '0 12px', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
          height: '72px',
        }} className="md:px-6">

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: '60px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(249,115,22,0.35)', flexShrink: 0, background: '#fff' }}
              className="md:w-[96px] md:h-[68px]">
              <img src="/logo.png" alt="LnT Travels" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
                <span className="font-heading font-black" style={{ color: '#F97316', letterSpacing: '-0.5px', fontSize: '18px' }}>LnT</span>
                <span className="font-heading font-bold" style={{ color: '#0D1B2A', letterSpacing: '0.15em', fontSize: '12px' }}>TRAVELS</span>
              </div>
              <p className="hidden md:block" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '5px', color: '#9CA3AF', whiteSpace: 'nowrap', fontWeight: 600 }}>
                Safe &bull; Reliable &bull; Comfortable
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link, i) => (
              <a key={link.href} href={link.href}
                className="px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
                style={{ color: i === 0 ? '#F97316' : '#374151' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#F97316'; e.currentTarget.style.background = 'rgba(249,115,22,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = i === 0 ? '#F97316' : '#374151'; e.currentTarget.style.background = 'transparent'; }}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919113052138"
              className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-300"
              style={{ background: '#2563EB', color: '#FFFFFF', boxShadow: '0 3px 12px rgba(37,99,235,0.3)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <FaPhone size={12} /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-300"
              style={{ background: '#F97316', color: '#FFFFFF', boxShadow: '0 4px 14px rgba(249,115,22,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#EA580C'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.45)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(249,115,22,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <FaWhatsapp size={15} /> Book on WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all"
            style={{ color: '#374151', background: '#F9FAFB', border: '1px solid #E5E7EB', flexShrink: 0 }}
            onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <FaBars size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <div className="md:hidden fixed inset-0 z-[200]"
        style={{ background: 'rgba(0,0,0,0.4)', opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none', transition: 'opacity 0.3s ease' }}
        onClick={() => setMenuOpen(false)} />

      {/* Mobile drawer */}
      <div className="md:hidden fixed top-0 right-0 bottom-0 z-[210] flex flex-col"
        style={{ width: 'min(320px, 90vw)', background: '#FFFFFF', borderLeft: '1px solid #E5E7EB', transform: menuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)', overflowY: 'auto' }}>
        {/* Drawer header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid #F3F4F6', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '44px', height: '32px', borderRadius: '50%', overflow: 'hidden', background: '#fff', border: '1.5px solid rgba(249,115,22,0.3)' }}>
              <img src="/logo.png" alt="LnT Travels" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span className="font-heading font-black" style={{ color: '#F97316', fontSize: '17px' }}>
              LnT <span style={{ color: '#0D1B2A', fontWeight: 700, fontSize: '12px', letterSpacing: '0.15em' }}>TRAVELS</span>
            </span>
          </div>
          <button onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-xl"
            style={{ color: '#374151', background: '#F9FAFB', border: '1px solid #E5E7EB' }} aria-label="Close">
            <FaTimes size={18} />
          </button>
        </div>
        {/* Links */}
        <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '14px 16px', borderRadius: '14px', fontSize: '16px', fontWeight: 600, color: '#374151', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(249,115,22,0.06)'; e.currentTarget.style.color = '#F97316'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}>
              {link.label}
            </a>
          ))}
        </div>
        {/* CTA */}
        <div style={{ padding: '16px', borderTop: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0 }}>
          <a href="tel:+919113052138" onClick={() => setMenuOpen(false)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '14px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, color: '#FFFFFF', background: '#2563EB', textDecoration: 'none', minHeight: '52px' }}>
            <FaPhone size={15} /> Call Now
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '14px', borderRadius: '14px', fontSize: '15px', fontWeight: 700, color: '#FFFFFF', background: '#F97316', textDecoration: 'none', boxShadow: '0 6px 20px rgba(249,115,22,0.35)', minHeight: '52px' }}>
            <FaWhatsapp size={17} /> Book on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
