import React from 'react';
import { MdAccessTime, MdSupportAgent, MdLocationOn, MdCleaningServices } from 'react-icons/md';
import { FaUserTie, FaTag, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

const features = [
  { icon: <MdSupportAgent size={26} />, title: '24x7 Support', desc: 'Round-the-clock support via WhatsApp or call — always here when you need us.' },
  { icon: <FaUserTie size={22} />, title: 'Professional Drivers', desc: 'Background-verified, licensed professionals with 5+ years on the road.' },
  { icon: <FaTag size={20} />, title: 'Affordable Pricing', desc: 'No surge pricing, no hidden fees. Transparent flat rates for every trip.' },
  { icon: <MdLocationOn size={26} />, title: 'GPS Enabled', desc: 'All vehicles GPS-equipped for real-time tracking and optimised routes.' },
  { icon: <FaShieldAlt size={20} />, title: 'Safe Journey', desc: 'Fully insured rides, verified vehicles, and real-time monitoring.' },
  { icon: <MdCleaningServices size={26} />, title: 'Clean Vehicles', desc: 'Sanitized and inspected before each trip — pristine AC interiors always.' },
  { icon: <MdAccessTime size={26} />, title: 'On-Time Pickup', desc: 'Punctual pickups guaranteed every time. Your schedule is our priority.' },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: '#030712' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(30,58,138,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <span className="section-pill">Why Choose Us</span>
          <h2 className="section-title">What Sets Us <span style={{ color: '#FBBF24' }}>Apart</span></h2>
          <p className="section-subtitle mx-auto">We do not just get you from A to B — we make the journey itself worth remembering.</p>
        </div>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {features.map((f, i) => (
            <div key={f.title} className={`reveal ${visible ? 'visible' : ''} delay-${Math.min((i + 1) * 100, 500)}`}>
              <div className="group p-6 rounded-3xl h-full flex flex-col gap-4 transition-all duration-300 cursor-default"
                style={{ background: 'rgba(17,24,39,0.7)', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(251,191,36,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(251,191,36,0.2)';
                  e.currentTarget.style.background = 'rgba(17,24,39,0.95)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'rgba(17,24,39,0.7)';
                }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(251,191,36,0.08)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.15)' }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#F1F5F9' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl p-10 text-center relative overflow-hidden"
          style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-60"
            style={{ background: 'linear-gradient(to right, transparent, #FBBF24, transparent)' }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 50% 80% at 50% 0%, rgba(251,191,36,0.04) 0%, transparent 70%)' }} />
          <h3 className="font-heading font-black text-3xl md:text-4xl mb-3 relative z-10" style={{ color: '#FFFFFF' }}>
            Ready for a Smooth Ride?
          </h3>
          <p className="text-base mb-8 relative z-10" style={{ color: '#475569' }}>
            No app needed — just WhatsApp or call. Instant confirmation, professional service.
          </p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-base font-bold px-10 py-4 rounded-full transition-all duration-300 relative z-10"
            style={{ background: '#FBBF24', color: '#0F172A', boxShadow: '0 8px 28px rgba(251,191,36,0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#FCD34D'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(251,191,36,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#FBBF24'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(251,191,36,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <FaWhatsapp size={20} /> Book Your Ride Now
          </a>
        </div>
      </div>
    </section>
  );
}
