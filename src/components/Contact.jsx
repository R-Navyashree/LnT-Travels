import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { WHATSAPP_NUMBER, EMAIL, BOOKING_MSG } from '../constants';

const contactItems = [
  { icon: <FaPhone size={18} />, label: 'Call Us', value: '+91 9113052138', href: 'tel:+919113052138', color: '#2563EB' },
  { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', value: '+91 9113052138', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`, color: '#10B981' },
  { icon: <FaEnvelope size={18} />, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, color: '#2563EB' },
  { icon: <FaMapMarkerAlt size={18} />, label: 'Location', value: 'Bangalore, Karnataka', href: '#', color: '#F97316' },
];

export default function Contact() {
  const { ref: leftRef, visible: leftVisible } = useReveal();
  const { ref: rightRef, visible: rightVisible } = useReveal();

  return (
    <section id="contact" className="section-padding" style={{ background: '#F9FAFB' }}>
      <div className="container-max">
        <div className="text-center mb-10 md:mb-12">
          <span className="section-pill">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">We respond within minutes — 24×7 via WhatsApp or phone.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'visible' : ''} space-y-3`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactItems.map((item, i) => (
                <a key={i} href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 min-h-[68px] premium-card"
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(15,23,42,0.12)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,23,42,0.06)'; e.currentTarget.style.borderColor = '#E5E7EB'; }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}14`, color: item.color, border: `1px solid ${item.color}28` }}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: '#9CA3AF' }}>{item.label}</p>
                    <p className="text-sm font-semibold truncate" style={{ color: '#111827' }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="p-5 rounded-2xl premium-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.1)', color: '#F97316' }}>
                  <FaClock size={17} />
                </div>
                <h4 className="font-heading font-bold text-sm" style={{ color: '#111827' }}>Business Hours</h4>
              </div>
              {[{ day: 'Monday to Sunday', time: '24×7 Available' }, { day: 'Airport & Emergency', time: 'Always Available' }].map((h) => (
                <div key={h.day} className="flex justify-between items-center py-2.5 border-b last:border-0" style={{ borderColor: '#F3F4F6' }}>
                  <span className="text-sm" style={{ color: '#6B7280' }}>{h.day}</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(249,115,22,0.08)', color: '#F97316' }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''} flex flex-col gap-4`}>
            <div className="rounded-2xl overflow-hidden" style={{ height: 'clamp(200px, 28vw, 280px)', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(15,23,42,0.06)' }}>
              <iframe title="LnT Travels Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9973874144!2d77.35073573648395!3d12.95394819772678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <div className="p-6 rounded-2xl text-center premium-card" style={{ boxShadow: '0 4px 20px rgba(15,23,42,0.08)' }}>
              <div className="mx-auto mb-3 h-1 w-20 rounded-full" style={{ background: 'linear-gradient(to right, #F97316, #EA580C)' }} />
              <h4 className="font-heading font-bold text-xl mb-2" style={{ color: '#111827' }}>Book via WhatsApp</h4>
              <p className="text-sm mb-5" style={{ color: '#6B7280' }}>Send trip details — get instant confirmation.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 w-full sm:w-auto min-h-[48px] text-white"
                style={{ background: '#10B981', boxShadow: '0 6px 20px rgba(16,185,129,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#059669'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(16,185,129,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#10B981'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(16,185,129,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <FaWhatsapp size={18} /> Open WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
