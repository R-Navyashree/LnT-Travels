import React from 'react';
import { Plane, Navigation, MapPin, ArrowRight } from 'lucide-react';
import { waBookingUrl } from '../utils/whatsapp';

const services = [
  {
    tripType: 'Airport Transfer',
    icon: Plane,
    category: 'AIRPORT TAXI',
    title: 'Bangalore Airport Transfers',
    desc: 'Convenient pickup and drop services between Bangalore and Kempegowda International Airport.',
    cta: 'Book Airport Cab',
  },
  {
    tripType: 'Local Rental',
    icon: Navigation,
    category: 'LOCAL CABS',
    title: 'Bangalore Local Cabs',
    desc: 'Comfortable cab services for local Bangalore travel, meetings, shopping, appointments and daily journeys.',
    cta: 'Book Local Cab',
  },
  {
    tripType: 'Outstation',
    icon: MapPin,
    category: 'OUTSTATION CABS',
    title: 'Outstation Cab Service',
    desc: 'Plan comfortable journeys from Bangalore to destinations across Karnataka and nearby states.',
    cta: 'Plan Outstation Trip',
  },
  {
    tripType: 'One Way',
    icon: ArrowRight,
    category: 'ONE WAY CABS',
    title: 'One Way Cab',
    desc: 'Convenient one-way travel from Bangalore to your destination.',
    cta: 'Book One Way Cab',
  },
];

function ServiceCard({ s }) {
  return (
    <div
      className="flex flex-col rounded-2xl p-6 transition-all duration-200"
      style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(251,191,36,0.3)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.2)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <s.icon size={20} style={{ color: '#FBBF24' }} strokeWidth={1.5} />
      </div>

      {/* Category */}
      <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#64748b' }}>
        {s.category}
      </p>

      {/* Title */}
      <h3 className="font-bold text-lg leading-snug mb-3" style={{ color: '#ffffff' }}>
        {s.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#94a3b8', lineHeight: '1.7' }}>
        {s.desc}
      </p>

      {/* CTA button */}
      <a
        href={waBookingUrl({ tripType: s.tripType })}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200"
        style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: '#e2e8f0', background: 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#FBBF24'; e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.background = 'rgba(251,191,36,0.05)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.background = 'transparent'; }}
      >
        {s.cta} <ArrowRight size={15} />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: '#0D1B2A' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FBBF24' }}>
            WHAT WE OFFER
          </p>
          <h2 className="font-heading font-bold mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#ffffff', letterSpacing: '-0.3px' }}>
            Our Cab Services
          </h2>
          <p className="text-sm mb-4" style={{ color: '#94a3b8' }}>
            Airport transfers, local rides, one-way drops and outstation trips across Karnataka.
          </p>
          {/* Yellow underline */}
          <div className="mx-auto w-12 h-1 rounded-full" style={{ background: '#FBBF24' }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(s => <ServiceCard key={s.tripType} s={s} />)}
        </div>
      </div>
    </section>
  );
}
