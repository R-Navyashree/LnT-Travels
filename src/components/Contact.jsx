import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import { WHATSAPP_NUMBER, EMAIL, BOOKING_MSG } from '../constants';

const contactItems = [
  { icon: Phone,   label: 'Call Us',      value: '+91 9113052138',                     href: 'tel:+919113052138',                             color: '#2563EB' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 9113052138',                   href: `https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`, color: '#25D366' },
  { icon: Mail,    label: 'Email',        value: EMAIL,                                href: `mailto:${EMAIL}`,                               color: '#FBBF24' },
  { icon: MapPin,  label: 'Service Area', value: 'Bangalore, Karnataka — Yellow Board', href: '#',                                            color: '#8B5CF6' },
];

const hours = [
  { day: 'Monday to Sunday', time: '24×7 Available' },
  { day: 'Airport Transfers', time: 'Always Available' },
  { day: 'Emergency Rides',   time: 'Always Available' },
];

export default function Contact() {
  const { ref: L, visible: lv } = useReveal();
  const { ref: R, visible: rv } = useReveal();

  return (
    <section id="contact" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">
        <div className="text-center mb-10">
          <span className="section-pill">Contact Us</span>
          <h2 className="section-title">
            We Respond in <span className="orange-gradient">Minutes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            24×7 via WhatsApp or phone — no wait, no fuss.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left — contact cards + hours */}
          <div ref={L} className={`reveal-left ${lv ? 'visible' : ''} space-y-3`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactItems.map((item) => (
                <a key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white transition-all duration-250 group"
                  style={{ border: '1px solid #E5E7EB', boxShadow: '0 2px 10px rgba(15,23,42,0.04)', minHeight: '68px' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(15,23,42,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(15,23,42,0.04)'; }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}14`, color: item.color, border: `1px solid ${item.color}28` }}>
                    <item.icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold truncate" style={{ color: '#0F172A' }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business hours */}
            <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E5E7EB', boxShadow: '0 2px 10px rgba(15,23,42,0.04)' }}>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(251,191,36,0.1)', color: '#FBBF24' }}>
                  <Clock size={16} />
                </div>
                <h4 className="font-heading font-bold text-sm" style={{ color: '#0F172A' }}>Business Hours</h4>
              </div>
              <div className="space-y-2.5">
                {hours.map(h => (
                  <div key={h.day} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray-500">{h.day}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(251,191,36,0.08)', color: '#FBBF24' }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — map + booking nudge */}
          <div ref={R} className={`reveal-right ${rv ? 'visible' : ''} flex flex-col gap-4`}>
            <div className="rounded-2xl overflow-hidden"
              style={{ height: 'clamp(220px, 30vw, 300px)', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(15,23,42,0.06)' }}>
              <iframe
                title="LnT Travels Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9973874144!2d77.35073573648395!3d12.95394819772678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" />
            </div>

            {/* WhatsApp CTA card */}
            <div className="bg-[#0D1B2A] rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: 'linear-gradient(to right, #FBBF24, #F59E0B)' }} />
              <h4 className="font-heading font-bold text-lg text-white mb-1">Book via WhatsApp</h4>
              <p className="text-xs text-slate-400 mb-4">Send trip details — instant confirmation.</p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-3.5 rounded-xl text-white w-full sm:w-auto min-h-[48px] transition-all duration-200"
                style={{ background: '#25D366', boxShadow: '0 6px 20px rgba(37,211,102,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#22C55E'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <MessageCircle size={18} /> Open WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
