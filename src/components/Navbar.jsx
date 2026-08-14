import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Airport Taxi', href: '/airport-taxi-bangalore' },
  { label: 'Local Cab', href: '/local-cab-bangalore' },
  { label: 'Outstation', href: '/outstation-cab-bangalore' },
  { label: 'Corporate', href: '/corporate-cab-service' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_24px_rgba(15,23,42,0.08)]' : ''}`}
        style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div className="container-max flex items-center justify-between h-[88px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-[68px] h-[50px] rounded-2xl overflow-hidden border-2 flex-shrink-0"
              style={{ borderColor: '#0f172a' }}>
              <img src="/logo.png" alt="LnT Travels" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-xl" style={{ color: '#0f172a', letterSpacing: '-0.3px' }}>
                LnT <span className="font-bold text-xs tracking-widest" style={{ color: '#0f172a' }}>TRAVELS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase" style={{ color: '#64748b', fontWeight: 600 }}>
                Bangalore Cab Service
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((l, i) => (
              <li key={l.href}>
                <a href={l.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150"
                  style={{ color: i === 0 ? '#FBBF24' : '#0f172a' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.background = 'rgba(251,191,36,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = i === 0 ? '#FBBF24' : '#0f172a'; e.currentTarget.style.background = 'transparent'; }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+919113052138"
              className="flex items-center gap-1.5 text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-200"
              style={{ border: '1.5px solid #e5e7eb', color: '#0f172a' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#FBBF24'; e.currentTarget.style.color = '#FBBF24'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#0f172a'; }}>
              <Phone size={13} /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-200"
              style={{ background: '#FBBF24', color: '#0f172a', boxShadow: '0 4px 14px rgba(251,191,36,0.35)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F59E0B'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FBBF24'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <MessageCircle size={14} /> Book Now
            </a>
          </div>

          {/* Hamburger */}
          <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all"
            style={{ background: '#f8fafc', border: '1px solid #e5e7eb', color: '#475569', flexShrink: 0 }}
            onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={19} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className="md:hidden fixed inset-0 z-[200] transition-opacity duration-300"
        style={{ background: 'rgba(0,0,0,0.6)', opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none' }}
        onClick={() => setOpen(false)} />

      {/* Mobile drawer */}
      <div className="md:hidden fixed top-0 right-0 bottom-0 z-[210] flex flex-col"
        style={{
          width: 'min(300px, 88vw)', background: '#ffffff',
          borderLeft: '1px solid #e5e7eb',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          overflowY: 'auto',
        }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #e5e7eb' }}>
          <span className="font-heading font-black text-xl" style={{ color: '#0f172a' }}>
            LnT <span className="font-bold text-xs tracking-widest" style={{ color: '#0f172a' }}>TRAVELS</span>
          </span>
          <button onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg"
            style={{ background: '#f8fafc', border: '1px solid #e5e7eb', color: '#475569' }}>
            <X size={16} />
          </button>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-1 p-4 flex-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150"
              style={{ color: '#475569' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(251,191,36,0.08)'; e.currentTarget.style.color = '#FBBF24'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#475569'; }}>
              {l.label}
            </a>
          ))}
        </div>
        {/* CTAs */}
        <div className="p-4 flex flex-col gap-3" style={{ borderTop: '1px solid #e5e7eb' }}>
          <a href="tel:+919113052138" onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm"
            style={{ border: '1.5px solid #e5e7eb', color: '#0f172a' }}>
            <Phone size={15} /> Call Now
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
            target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm"
            style={{ background: '#FBBF24', color: '#0f172a', boxShadow: '0 6px 20px rgba(251,191,36,0.35)' }}>
            <MessageCircle size={16} /> Book on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
