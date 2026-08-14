import React from 'react';
import { CheckCircle2, Award, Users, Route, Shield, MapPin } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const stats = [
  { value: '1+',  label: 'Years Active',    icon: Award },
  { value: '5K+', label: 'Happy Rides',     icon: Users },
  { value: '50+', label: 'Destinations',    icon: Route },
  { value: '24/7', label: 'Always On',      icon: Shield },
];

const highlights = [
  'Licensed Yellow Board commercial vehicles only',
  'GPS-enabled fleet for real-time tracking',
  'Sanitized, well-maintained cars before every trip',
  'Transparent pricing — no hidden charges',
  'Background-verified professional drivers',
];

export default function About() {
  const { ref: L, visible: lv } = useReveal();
  const { ref: R, visible: rv } = useReveal();

  return (
    <section id="about" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">
        <div className="text-center mb-10">
          <span className="section-pill">About LnT Travels</span>
          <h2 className="section-title">Your Travel, <span className="orange-gradient">Our Priority</span></h2>
          <p className="section-subtitle mx-auto">Trusted cab service across Bangalore — licensed, reliable, 24×7.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Image side */}
          <div ref={L} className={`reveal-left ${lv ? 'visible' : ''} relative`}>
            <div className="rounded-3xl overflow-hidden relative" style={{ height: 'clamp(260px, 40vw, 420px)', boxShadow: '0 24px 60px rgba(15,23,42,0.14)' }}>
              <div className="floating-orb left-6 top-6 h-20 w-20 bg-yellow-300/40" />
              <div className="floating-orb right-8 bottom-6 h-24 w-24 bg-sky-300/30" style={{ animationDelay: '0.8s' }} />
              <img src="/Vehicles.png" alt="LnT Travels fleet in Bangalore"
                className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.5) 0%, transparent 50%)' }} />
            </div>

            {/* Location chip */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white"
              style={{ boxShadow: '0 4px 12px rgba(15,23,42,0.12)', border: '1px solid #E5E7EB' }}>
              <MapPin size={11} style={{ color: '#FBBF24' }} />
              <span className="text-xs font-bold" style={{ color: 'var(--body)' }}>Bangalore, Karnataka</span>
            </div>

            {/* Stats bar */}
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white grid grid-cols-4 gap-0 overflow-hidden"
              style={{ boxShadow: '0 10px 36px rgba(15,23,42,0.14)', border: '1px solid #E5E7EB' }}>
              {stats.map(({ value, label, icon: Icon }, i) => (
                <div key={label} className={`about-stat flex flex-col items-center py-3 ${i < stats.length - 1 ? 'border-r border-gray-100' : ''}`}>
                  <Icon size={13} className="mb-1" style={{ color: '#FBBF24' }} />
                  <div className="font-heading font-black text-base md:text-lg leading-none orange-gradient">{value}</div>
                  <div className="text-[9px] font-semibold mt-0.5 uppercase tracking-wide text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content side */}
          <div ref={R} className={`reveal-right ${rv ? 'visible' : ''} mt-8 lg:mt-0`}>
            <h3 className="font-heading font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(1.3rem, 3vw, 2.1rem)', color: '#0D1B2A' }}>
              More Than a Cab —<br />
              <span className="orange-gradient">A Trusted Travel Partner</span>
            </h3>
            <p className="mb-4 leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)', color: '#64748B', lineHeight: '1.85' }}>
              LnT Travels is a Bangalore-based Tours &amp; Travels company specialising in airport
              transfers, local rentals, one-way trips, outstation tours, and corporate travel
              across Karnataka.
            </p>

            {/* Yellow board trust note */}
            <div className="flex items-start gap-3 p-4 rounded-xl mb-5"
              style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.18)' }}>
              <span className="text-xl flex-shrink-0 mt-0.5">🚖</span>
              <p className="text-sm font-semibold" style={{ color: '#D97706', lineHeight: '1.6' }}>
                We operate <strong>exclusively with licensed Yellow Board commercial vehicles</strong> — ensuring every ride is safe, legal, and professional.
              </p>
            </div>

            <ul className="space-y-2.5">
              {highlights.map(h => (
                <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--body)' }}>
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#10B981' }} />
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
