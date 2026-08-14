import React from 'react';
import { Plane, Navigation, MapPin, ArrowRight } from 'lucide-react';
import { waBookingUrl } from '../utils/whatsapp';
import useReveal from '../hooks/useReveal';

const services = [
  {
    tripType: 'Airport Transfer',
    icon: Plane,
    category: 'AIRPORT TAXI',
    title: 'Airport Transfers',
    desc: 'Pickup and drop at Bangalore airport.',
    cta: 'Book Now',
  },
  {
    tripType: 'Local Rental',
    icon: Navigation,
    category: 'LOCAL CABS',
    title: 'Local Cabs',
    desc: 'City rides for daily travel and errands.',
    cta: 'Book Local',
  },
  {
    tripType: 'Outstation',
    icon: MapPin,
    category: 'OUTSTATION',
    title: 'Outstation',
    desc: 'Long-distance trips across Karnataka.',
    cta: 'Plan Trip',
  },
  {
    tripType: 'One Way',
    icon: ArrowRight,
    category: 'ONE WAY',
    title: 'One Way',
    desc: 'Simple point-to-point travel.',
    cta: 'Book One Way',
  },
];

const comparisonRows = [
  { name: 'Economy', bestFor: 'Daily city rides and budget travel', features: 'Clean sedan or hatchback, transparent fares, ideal for local trips' },
  { name: 'Premium', bestFor: 'Airport transfers and family travel', features: 'Spacious SUV or MUV, extra comfort, smoother long-distance journeys' },
  { name: 'Corporate', bestFor: 'Office commutes and recurring business travel', features: 'Priority scheduling, consistent accounts, dependable chauffeur service' },
];

function ServiceCard({ s, index }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`service-card reveal ${visible ? 'visible' : ''} delay-${Math.min((index + 1) * 100, 500)} flex flex-col rounded-2xl p-3`}
      style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 1px 4px rgba(0,0,0,0.2)', minHeight: '170px' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(251,191,36,0.3)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.2)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
    >
      <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <s.icon size={16} style={{ color: '#FBBF24' }} strokeWidth={1.5} />
      </div>

      <p className="text-[9px] font-bold tracking-widest uppercase mb-1.5" style={{ color: '#64748b' }}>
        {s.category}
      </p>

      <h3 className="font-bold text-sm leading-snug mb-1.5" style={{ color: '#ffffff' }}>
        {s.title}
      </h3>

      <p className="text-[11px] leading-relaxed flex-1 mb-2" style={{ color: '#94a3b8', lineHeight: '1.5' }}>
        {s.desc}
      </p>

      <a
        href={waBookingUrl({ tripType: s.tripType })}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 text-[10px] font-semibold px-2.5 py-2 rounded-md transition-all duration-200"
        style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: '#e2e8f0', background: 'transparent' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#FBBF24'; e.currentTarget.style.color = '#FBBF24'; e.currentTarget.style.background = 'rgba(251,191,36,0.05)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.background = 'transparent'; }}
      >
        {s.cta} <ArrowRight size={12} />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: '#0D1B2A' }}>
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FBBF24' }}>
            WHAT WE OFFER
          </p>
          <h2 className="font-heading font-bold mb-0"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#ffffff', letterSpacing: '-0.3px' }}>
            Our Cab Services
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_1.32fr] items-stretch">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6" style={{ minHeight: '420px', display: 'flex', flexDirection: 'column' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#FBBF24' }}>
              What We Offer
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
              Airport transfers, local rides, one-way drops and outstation trips across Karnataka.
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 flex-1">
              {services.map((s, index) => (
                <ServiceCard key={s.tripType} s={s} index={index} />
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6" style={{ minHeight: '420px' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#FBBF24' }}>
              Choose a service
            </p>
            <h3 className="font-heading font-bold mb-4 text-white" style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)', letterSpacing: '-0.2px' }}>
              Which cab is right for your trip?
            </h3>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/20">
              <table className="w-full border-collapse text-left text-sm text-slate-200">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <th className="p-3 md:p-4">Service</th>
                    <th className="p-3 md:p-4">Best for</th>
                    <th className="p-3 md:p-4">What you get</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.name} className="border-t border-white/10 align-top">
                      <td className="p-3 md:p-4 font-bold text-white">{row.name}</td>
                      <td className="p-3 md:p-4 text-slate-200">{row.bestFor}</td>
                      <td className="p-3 md:p-4 text-slate-300">{row.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
