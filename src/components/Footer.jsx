import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { WHATSAPP_NUMBER, EMAIL, BOOKING_MSG } from '../constants';

const services = ['Airport Transfers', 'One Way Trips', 'Local Rentals', 'Outstation Tours'];
const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#/about' },
  { label: 'Cities We Serve', href: '#/cities' },
  { label: 'Pricing', href: '#/pricing' },
  { label: 'Corporate Bookings', href: '#/corporate' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0A1628', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-max pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-white border-2 flex-shrink-0"
              style={{ borderColor: 'rgba(251,191,36,0.4)' }}>
              <img src="/logo.png" alt="LnT Travels" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-heading font-black text-base" style={{ color: '#FBBF24' }}>LnT</span>
              <span className="font-heading font-bold text-xs tracking-widest ml-1" style={{ color: '#FFFFFF' }}>TRAVELS</span>
            </div>
          </div>
          <p className="text-xs leading-relaxed mb-5 max-w-[220px]" style={{ color: '#334155' }}>
            Licensed Yellow Board commercial cab service across Bangalore. Safe, reliable, on time.
          </p>
          <div className="flex gap-2">
            {[
              { icon: FaFacebookF,   href: '#', size: 12 },
              { icon: FaInstagram,  href: 'https://www.instagram.com/lnt._.travels?igsh=dzNocXd5bzhhazU%3D&utm_source=ig_contact_invite', size: 12 },
              { icon: MessageCircle, href: `https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`, size: 13 },
            ].map(({ icon: Icon, href, size }, i) => (
              <a key={i} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#475569', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FBBF24'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#475569'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <Icon size={size} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading font-bold text-xs tracking-widest uppercase mb-4" style={{ color: '#FBBF24' }}>Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="text-xs transition-all duration-150 inline-block"
                  style={{ color: '#334155' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-bold text-xs tracking-widest uppercase mb-4" style={{ color: '#FBBF24' }}>Services</h3>
          <ul className="space-y-2.5">
            {services.map(s => (
              <li key={s}>
                <a href="#services" className="text-xs transition-all duration-150 inline-block"
                  style={{ color: '#334155' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.transform = 'translateX(3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-xs tracking-widest uppercase mb-4" style={{ color: '#FBBF24' }}>Contact</h3>
          <ul className="space-y-3.5">
            <li>
              <a href="tel:+919113052138" className="flex items-center gap-2.5 text-xs transition-colors duration-150"
                style={{ color: '#334155' }}
                onMouseEnter={e => e.currentTarget.style.color = '#FBBF24'}
                onMouseLeave={e => e.currentTarget.style.color = '#334155'}>
                <Phone size={11} style={{ color: '#FBBF24', flexShrink: 0 }} /> +91 9113052138
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-xs transition-colors duration-150"
                style={{ color: '#334155' }}
                onMouseEnter={e => e.currentTarget.style.color = '#FBBF24'}
                onMouseLeave={e => e.currentTarget.style.color = '#334155'}>
                <Mail size={11} style={{ color: '#FBBF24', flexShrink: 0 }} /> {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-xs" style={{ color: '#334155' }}>
              <MapPin size={11} style={{ color: '#FBBF24', marginTop: 2, flexShrink: 0 }} />
              Bangalore, Karnataka, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-max py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-[11px] text-center sm:text-left" style={{ color: '#1E293B' }}>
          &copy; {year} LnT Travels. All rights reserved.
        </p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0"
          style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.2)', color: '#FBBF24' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FBBF24'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(251,191,36,0.12)'; e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.transform = 'translateY(0)'; }}
          aria-label="Back to top">
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
