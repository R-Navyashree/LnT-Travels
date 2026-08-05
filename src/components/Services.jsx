import React from 'react';
import { FaWhatsapp, FaPlane, FaCity, FaArrowRight, FaMapMarkedAlt, FaRoute } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { waBookingUrl } from '../utils/whatsapp';

const services = [
  {
    id: 'airport',
    icon: <FaPlane size={24} />,
    tripType: 'Airport Transfer',
    title: 'Airport Transfers',
    description: "Never miss your flight with our punctual airport pickup and drop services. We track your flight in real-time and handle the wait — so you don't have to.",
    features: ['Real-time flight tracking', '30 min free waiting', 'Meet & greet service'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=90&auto=format&fit=crop',
  },
  {
    id: 'local-rental',
    icon: <FaCity size={24} />,
    tripType: 'Local Rental',
    title: 'Local Rentals',
    description: 'Flexible hourly and full-day packages for business meetings, shopping, sightseeing, and family outings across Bangalore.',
    features: ['4hr & 8hr packages', 'City-wide coverage', 'Dedicated driver'],
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700&q=90&auto=format&fit=crop',
  },
  {
    id: 'one-way',
    icon: <FaRoute size={24} />,
    tripType: 'One Way',
    title: 'One Way Trips',
    description: 'Affordable one-way travel across Karnataka with transparent pricing and no hidden return costs. Just pay for the distance you travel.',
    features: ['Intercity routes', 'Flat transparent fares', 'AC vehicles'],
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=700&q=90&auto=format&fit=crop',
  },
  {
    id: 'outstation',
    icon: <FaMapMarkedAlt size={24} />,
    tripType: 'Outstation',
    title: 'Outstation Tours',
    description: 'Travel comfortably to beautiful destinations with experienced drivers and premium vehicles. One-way or round-trip — we cover it all.',
    features: ['One-way & round trip', 'All Karnataka routes', 'Experienced drivers'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=90&auto=format&fit=crop',
  },
];

function ServiceCard({ service, index }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="group h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-300"
        style={{
          background: '#111827',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 28px 64px rgba(251,191,36,0.13), 0 0 0 1px rgba(251,191,36,0.18)';
          e.currentTarget.style.borderColor = 'rgba(251,191,36,0.22)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: '210px' }}>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(17,24,39,0.9) 100%)' }}
          />
          <div
            className="absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: '#FBBF24', color: '#0F172A', boxShadow: '0 4px 20px rgba(251,191,36,0.45)' }}
          >
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#F1F5F9' }}>
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: '#475569', lineHeight: '1.75' }}>
            {service.description}
          </p>
          <ul className="space-y-2 mb-6">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-xs font-semibold" style={{ color: '#64748B' }}>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: '#FBBF24' }}
                />
                {f}
              </li>
            ))}
          </ul>
          <a
            href={waBookingUrl({ tripType: service.tripType })}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full font-bold text-sm py-3.5 rounded-2xl transition-all duration-300"
            style={{
              background: 'rgba(251,191,36,0.1)',
              color: '#FBBF24',
              border: '1px solid rgba(251,191,36,0.22)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FBBF24';
              e.currentTarget.style.color = '#0F172A';
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(251,191,36,0.35)';
              e.currentTarget.style.borderColor = '#FBBF24';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(251,191,36,0.1)';
              e.currentTarget.style.color = '#FBBF24';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(251,191,36,0.22)';
            }}
          >
            <FaWhatsapp size={16} /> Book Now <FaArrowRight size={11} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative" style={{ background: '#030712' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(30,58,138,0.12) 0%, transparent 70%)' }}
      />
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <span className="section-pill">What We Offer</span>
          <h2 className="section-title">
            Premium Services,<br />
            <span style={{ color: '#FBBF24' }}>Every Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From airport runs to scenic outstation tours — one call gets you the perfect ride.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
