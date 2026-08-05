import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { WHATSAPP_NUMBER, PHONE_DISPLAY, EMAIL, BOOKING_MSG } from '../constants';

const contactItems = [
  { icon: <FaPhone size={18} />, label: 'Call Us', value: '+91 9113052138', href: 'tel:+919113052138' },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', value: '+91 9113052138', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}` },
  { icon: <FaEnvelope size={18} />, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: <FaMapMarkerAlt size={18} />, label: 'Location', value: 'Bangalore, Karnataka', href: '#' },
];

const hours = [
  { day: 'Monday to Sunday', time: '24×7 Available' },
  { day: 'Airport Transfers', time: '24×7 Available' },
];

export default function Contact() {
  const { ref: leftRef, visible: leftVisible } = useReveal();
  const { ref: rightRef, visible: rightVisible } = useReveal();

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: '#030712' }}>
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <span className="section-pill">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">We respond within minutes via WhatsApp or phone — 24x7.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''} space-y-4`}>
            {contactItems.map((item, i) => (
              <a key={i} href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 group"
                style={{ background: 'rgba(17,24,39,0.7)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(251,191,36,0.2)';
                  e.currentTarget.style.background = 'rgba(17,24,39,0.95)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'rgba(17,24,39,0.7)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(251,191,36,0.08)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.15)' }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#334155' }}>{item.label}</p>
                  <p className="text-sm font-semibold" style={{ color: '#CBD5E1' }}>{item.value}</p>
                </div>
              </a>
            ))}
            {/* Hours */}
            <div className="p-6 rounded-2xl"
              style={{ background: 'rgba(17,24,39,0.7)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(251,191,36,0.08)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.15)' }}>
                  <FaClock size={18} />
                </div>
                <h4 className="font-heading font-bold text-base" style={{ color: '#F1F5F9' }}>Business Hours</h4>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2.5 border-b last:border-0"
                    style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                    <span className="text-sm font-medium" style={{ color: '#64748B' }}>{h.day}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: 'rgba(251,191,36,0.08)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.15)' }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''} flex flex-col gap-5`}>
            <div className="rounded-2xl overflow-hidden"
              style={{ height: '360px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <iframe title="LnT Travels Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9973874144!2d77.35073573648395!3d12.95394819772678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(92%) hue-rotate(180deg) saturate(0.5) brightness(0.85)' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="p-8 rounded-2xl text-center relative overflow-hidden"
              style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32"
                style={{ background: 'linear-gradient(to right, transparent, #FBBF24, transparent)' }} />
              <h4 className="font-heading font-bold text-xl mb-2" style={{ color: '#FFFFFF' }}>Book via WhatsApp</h4>
              <p className="text-sm mb-5" style={{ color: '#475569' }}>Send your trip details and get instant confirmation.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-bold text-base px-8 py-4 rounded-full transition-all duration-300"
                style={{ background: '#25D366', color: '#FFFFFF', boxShadow: '0 8px 24px rgba(37,211,102,0.25)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#20BA5A'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,211,102,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <FaWhatsapp size={20} /> Open WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
