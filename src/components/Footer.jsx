import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowUp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { WHATSAPP_NUMBER, EMAIL, BOOKING_MSG } from '../constants';

const serviceLinks = ['Airport Transfers', 'One Way Trips', 'Local Rentals', 'Outstation Tours'];
const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Vehicles', href: '#vehicles' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#020617', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Main grid: 1 col mobile → 2 → 4 desktop */}
      <div className="container-max px-4 md:px-6 pt-12 md:pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-baseline gap-1 mb-3">
            <span className="font-heading font-black text-2xl" style={{ color: '#FBBF24' }}>LnT</span>
            <span className="font-heading font-bold text-xs tracking-[0.2em] ml-0.5" style={{ color: '#FBBF24' }}>TRAVELS</span>
          </div>
          <p className="text-xs leading-relaxed mb-5 max-w-[240px]" style={{ color: '#334155' }}>
            Your trusted travel partner across Bangalore and Karnataka. Safe, comfortable, and on time — every single trip.
          </p>
          <div className="flex gap-2.5">
            {[
              { icon: <FaFacebookF size={12} />, href: '#' },
              { icon: <FaInstagram size={12} />, href: 'https://www.instagram.com/lnt._.travels?igsh=dzNocXd5bzhhazU%3D&utm_source=ig_contact_invite' },
              { icon: <FaWhatsapp size={12} />, href: `https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}` },
            ].map((s, i) => (
              <a key={i} href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#334155', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#FBBF24'; e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#FBBF24'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#334155'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-4" style={{ color: '#FBBF24' }}>Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-xs transition-all duration-200 inline-block"
                  style={{ color: '#334155' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-4" style={{ color: '#FBBF24' }}>Our Services</h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#services" className="text-xs transition-all duration-200 inline-block"
                  style={{ color: '#334155' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-heading font-bold text-xs tracking-widest uppercase mb-4" style={{ color: '#FBBF24' }}>Contact</h4>
          <ul className="space-y-3.5">
            <li>
              <a href="tel:+919113052138" className="flex items-center gap-3 text-xs transition-colors"
                style={{ color: '#334155' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FBBF24'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; }}>
                <FaPhone size={11} style={{ color: '#FBBF24', flexShrink: 0 }} />+91 9113052138
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-xs transition-colors"
                style={{ color: '#334155' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FBBF24'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#334155'; }}>
                <FaEnvelope size={11} style={{ color: '#FBBF24', flexShrink: 0 }} />{EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3 text-xs" style={{ color: '#334155' }}>
              <FaMapMarkerAlt size={12} style={{ color: '#FBBF24', marginTop: 2, flexShrink: 0 }} />
              Bangalore, Karnataka, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-center sm:text-left" style={{ color: '#1E293B' }}>
            &copy; {year} LnT Travels. All rights reserved. |{' '}
            <span style={{ color: '#FBBF24' }}></span>
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
            style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)', color: '#FBBF24' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#FBBF24'; e.currentTarget.style.color = '#0F172A'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(251,191,36,0.1)'; e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.transform = 'translateY(0)'; }}
            aria-label="Back to top">
            <FaArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
