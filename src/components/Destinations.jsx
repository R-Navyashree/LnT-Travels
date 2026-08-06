import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { waBookingUrl } from '../utils/whatsapp';

const destinations = [
  { name: 'Mysore', tagline: 'The Royal City', duration: '3-4 hrs', image: '/mysore.jpg' },
  { name: 'Coorg', tagline: 'Scotland of India', duration: '4-5 hrs', image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=85&auto=format&fit=crop' },
  { name: 'Chikkamagaluru', tagline: 'Coffee Country', duration: '4-5 hrs', image: 'https://images.unsplash.com/photo-1467139701929-18c0d27a7516?w=600&q=85&auto=format&fit=crop' },
  { name: 'Ooty', tagline: 'Queen of Hills', duration: '5-6 hrs', image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=85&auto=format&fit=crop' },
  { name: 'Goa', tagline: 'Sun, Sand & Sea', duration: '9-10 hrs', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=85&auto=format&fit=crop' },
  { name: 'Wayanad', tagline: 'Green Paradise', duration: '5-6 hrs', image: 'https://images.unsplash.com/photo-1587922546307-776227941871?w=600&q=85&auto=format&fit=crop' },
  { name: 'Mangalore', tagline: 'Coastal Gem', duration: '6-7 hrs', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=85&auto=format&fit=crop' },
  { name: 'Hampi', tagline: 'UNESCO Heritage', duration: '6-7 hrs', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=85&auto=format&fit=crop' },
];

function DestCard({ dest, index }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${(index % 4) * 60}ms` }}>
      <div className="group relative overflow-hidden rounded-2xl transition-all duration-400"
        style={{ height: '200px', boxShadow: '0 4px 20px rgba(15,23,42,0.1)', border: '1px solid #E5E7EB' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(15,23,42,0.18)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(15,23,42,0.1)'; e.currentTarget.style.borderColor = '#E5E7EB'; }}>
        <img src={dest.image} alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.3) 55%, rgba(13,27,42,0.05) 100%)' }} />

        {/* Duration badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-black px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.95)', color: '#F97316', fontWeight: 700, boxShadow: '0 2px 8px rgba(15,23,42,0.15)' }}>
            {dest.duration}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[9px] font-bold tracking-widest uppercase mb-1" style={{ color: '#F97316' }}>{dest.tagline}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt size={11} style={{ color: '#F97316' }} />
              <h3 className="font-heading font-black text-base text-white">{dest.name}</h3>
            </div>
            <a href={waBookingUrl({ destination: dest.name })} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 min-h-[32px] text-white"
              style={{ background: '#F97316', boxShadow: '0 3px 10px rgba(249,115,22,0.4)' }}
              onClick={(e) => e.stopPropagation()}>
              <FaWhatsapp size={11} /> Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding" style={{ background: '#F9FAFB' }}>
      <div className="container-max">
        <div className="text-center mb-10 md:mb-12">
          <span className="section-pill">Explore Karnataka</span>
          <h2 className="section-title">Popular <span className="orange-gradient">Destinations</span></h2>
          <p className="section-subtitle mx-auto mb-2">
            From regal palaces to misty hill stations — your dream getaway is just a booking away.
          </p>
          <p className="font-heading font-semibold text-center" style={{ fontSize: 'clamp(0.82rem, 1.8vw, 1rem)', color: '#374151' }}>
            Wherever your destination, we&apos;re ready to take you there.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((d, i) => <DestCard key={d.name} dest={d} index={i} />)}
        </div>
      </div>
    </section>
  );
}
