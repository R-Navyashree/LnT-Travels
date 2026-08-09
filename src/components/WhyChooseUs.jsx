import React from 'react';
import { MdAccessTime, MdSupportAgent, MdLocationOn, MdCleaningServices } from 'react-icons/md';
import { FaUserTie, FaTag, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';

const features = [
  { icon: <MdSupportAgent size={22} />, title: '24x7 Support', desc: 'Round-the-clock support via WhatsApp or call — always here when you need us.' },
  { icon: <FaUserTie size={18} />, title: 'Professional Drivers', desc: 'Background-verified, licensed professionals with 5+ years on the road.' },
  { icon: <FaTag size={16} />, title: 'Affordable Pricing', desc: 'No surge pricing, no hidden fees. Transparent flat rates for every trip.' },
  { icon: <MdLocationOn size={22} />, title: 'GPS Enabled', desc: 'All vehicles GPS-equipped for real-time tracking and optimised routes.' },
  { icon: <FaShieldAlt size={16} />, title: 'Safe Journey', desc: 'Fully insured rides, verified vehicles, and real-time monitoring.' },
  { icon: <MdCleaningServices size={22} />, title: 'Clean Vehicles', desc: 'Sanitized and inspected before each trip — pristine AC interiors always.' },
  { icon: <MdAccessTime size={22} />, title: 'On-Time Pickup', desc: 'Punctual pickups guaranteed every time. Your schedule is our priority.' },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();
  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="section-pill">Why Choose Us</span>
          <h2 className="section-title">
            What Sets Us <span className="orange-gradient">Apart</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We don't just get you from A to B — we make the journey itself worth remembering.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
          {features.map((f, i) => (
            <div key={f.title} className={`reveal ${visible ? 'visible' : ''} delay-${Math.min((i + 1) * 100, 500)}`}>
              <div
                className="group p-5 rounded-2xl h-full flex flex-col gap-3 transition-all duration-300 bg-white"
                style={{
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 1px 4px rgba(15,23,42,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(15,23,42,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(251,191,36,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 4px rgba(15,23,42,0.05)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(251,191,36,0.08)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.15)' }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm md:text-base mb-1.5" style={{ color: '#0F172A' }}>
                    {f.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#64748B' }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{ background: '#0D1B2A', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Orange top accent line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-48"
            style={{ background: 'linear-gradient(to right, transparent, #FBBF24, transparent)' }}
          />
          <h3
            className="font-heading font-bold mb-3 text-white"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', letterSpacing: '-0.3px' }}
          >
            Ready for a Smooth Ride?
          </h3>
          <p
            className="mb-7 mx-auto max-w-lg"
            style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1rem)', color: '#64748B', lineHeight: '1.75' }}
          >
            No app needed — just WhatsApp or call. Instant confirmation, professional service.
          </p>
          <a
            href={'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + BOOKING_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-xl transition-all duration-200 min-h-[52px]"
            style={{
              background: '#FBBF24',
              color: '#0f172a',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              boxShadow: '0 8px 28px rgba(251,191,36,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F59E0B';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(251,191,36,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FBBF24';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(251,191,36,0.35)';
            }}
          >
            <FaWhatsapp size={20} /> Book Your Ride Now
          </a>
        </div>
      </div>
    </section>
  );
}
