import React from 'react';
import { FaWhatsapp, FaPlane, FaCity, FaMapMarkedAlt, FaRoute } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { waBookingUrl } from '../utils/whatsapp';

const services = [
  { id: 'airport', icon: <FaPlane size={22} />, tripType: 'Airport Transfer', title: 'Airport Transfers', description: "Punctual pickups and drops. We track your flight and handle the wait — so you don't have to.", features: ['Flight tracking', '30 min free wait', 'Meet & greet'], image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=85&auto=format&fit=crop' },
  { id: 'local-rental', icon: <FaCity size={22} />, tripType: 'Local Rental', title: 'Local Rentals', description: 'Hourly and full-day packages for business meetings, shopping, and family outings.', features: ['4hr & 8hr packages', 'Multiple stops', 'Dedicated driver'], image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=85&auto=format&fit=crop' },
  { id: 'one-way', icon: <FaRoute size={22} />, tripType: 'One Way', title: 'One Way Trips', description: 'Affordable intercity travel with flat rates and no hidden return costs.', features: ['Intercity routes', 'Flat fares', 'AC vehicles'], image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=85&auto=format&fit=crop' },
  { id: 'outstation', icon: <FaMapMarkedAlt size={22} />, tripType: 'Outstation', title: 'Outstation Tours', description: 'Comfortable travel across Karnataka and South India with experienced drivers.', features: ['One-way & round trip', 'All Karnataka routes', 'Expert drivers'], image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=85&auto=format&fit=crop' },
];

function ServiceCard({ service, index }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="group h-full flex flex-col overflow-hidden transition-all duration-400"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
        {/* Orange top border on hover */}
        <div className="h-1 w-full transition-all duration-400" style={{ background: 'linear-gradient(to right, #F97316, #EA580C)', transform: 'scaleX(0)', transformOrigin: 'left' }}
          ref={(el) => { if (el) { el.closest('.group') && el.closest('.group').addEventListener('mouseenter', () => { el.style.transform = 'scaleX(1)'; }); el.closest('.group') && el.closest('.group').addEventListener('mouseleave', () => { el.style.transform = 'scaleX(0)'; }); } }} />
        <div className="relative overflow-hidden flex-shrink-0" style={{ height: '160px' }}>
          <img src={service.image} alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(13,27,42,0.95) 100%)' }} />
          <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316', border: '1px solid rgba(249,115,22,0.2)' }}>
            {service.icon}
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#F1F5F9' }}>{service.title}</h3>
          <p className="text-sm leading-relaxed mb-3 flex-1" style={{ color: '#94A3B8', lineHeight: '1.7' }}>{service.description}</p>
          <ul className="space-y-1.5 mb-4">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs font-semibold" style={{ color: '#94A3B8' }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#F97316' }} />{f}
              </li>
            ))}
          </ul>
          <a href={waBookingUrl({ tripType: service.tripType })} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full font-bold text-sm py-3 rounded-xl transition-all duration-300 min-h-[44px] text-white"
            style={{ background: '#F97316', boxShadow: '0 4px 14px rgba(249,115,22,0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#EA580C'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(249,115,22,0.3)'; }}>
            <FaWhatsapp size={15} /> Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: '#0D1B2A' }}>
      <div className="container-max">
        <div className="text-center mb-10 md:mb-12">
          <span className="section-pill">What We Offer</span>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>Premium Services, <span className="orange-gradient">Every Journey</span></h2>
          <p className="section-subtitle mx-auto" style={{ color: '#94A3B8' }}>From airport runs to scenic outstation tours — one call gets you the perfect ride.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
