import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';
import { waBookingUrl } from '../utils/whatsapp';

const destinations = [
  {
    name: 'Mysore',
    tagline: 'The Royal City',
    description: 'Explore magnificent palaces, vibrant markets, and the grandeur of royal Karnataka.',
    duration: '3-4 hrs',
    image: '/mysore.jpg',
  },
  {
    name: 'Coorg',
    tagline: 'Scotland of India',
    description: 'Experience lush coffee plantations, misty hills, and serene waterfalls in Kodagu.',
    duration: '4-5 hrs',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=700&q=90&auto=format&fit=crop',
  },
  {
    name: 'Chikkamagaluru',
    tagline: 'Coffee Country',
    description: 'Discover breathtaking hills, misty valleys, and the finest coffee estates of South India.',
    duration: '4-5 hrs',
    image: 'https://images.unsplash.com/photo-1467139701929-18c0d27a7516?w=700&q=90&auto=format&fit=crop',
  },
  {
    name: 'Ooty',
    tagline: 'Queen of Hill Stations',
    description: 'Enjoy pleasant weather, rolling tea gardens, and the beauty of the Nilgiri Mountains.',
    duration: '5-6 hrs',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=700&q=90&auto=format&fit=crop',
  },
  {
    name: 'Goa',
    tagline: 'Sun, Sand & Sea',
    description: 'Relax on golden beaches, explore Portuguese forts, and enjoy vibrant coastal culture.',
    duration: '9-10 hrs',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700&q=90&auto=format&fit=crop',
  },
  {
    name: 'Wayanad',
    tagline: 'Green Paradise',
    description: 'Adventure through dense forests, wildlife sanctuaries, and ancient tribal heritage.',
    duration: '5-6 hrs',
    image: 'https://images.unsplash.com/photo-1587922546307-776227941871?w=700&q=90&auto=format&fit=crop',
  },
];

function DestCard({ dest, index }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div
        className="group relative overflow-hidden rounded-3xl transition-all duration-300"
        style={{
          height: '320px',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(251,191,36,0.18)';
          e.currentTarget.style.borderColor = 'rgba(251,191,36,0.22)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        }}
      >
        <img
          src={dest.image}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(3,7,18,0.97) 0%, rgba(3,7,18,0.55) 50%, rgba(3,7,18,0.1) 100%)',
          }}
        />

        {/* Duration badge */}
        <div className="absolute top-4 right-4">
          <span
            className="flex items-center gap-1.5 text-[11px] font-black tracking-wide px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(251,191,36,0.14)',
              color: '#FBBF24',
              border: '1px solid rgba(251,191,36,0.28)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <FaClock size={9} />
            {dest.duration}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p
            className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1"
            style={{ color: '#FBBF24' }}
          >
            {dest.tagline}
          </p>
          <div className="flex items-center gap-1.5 mb-2">
            <FaMapMarkerAlt size={13} style={{ color: '#FBBF24' }} />
            <h3 className="font-heading font-black text-2xl" style={{ color: '#FFFFFF' }}>
              {dest.name}
            </h3>
          </div>
          <p
            className="text-xs leading-snug mb-4 max-h-0 overflow-hidden opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-400"
            style={{ color: '#94A3B8' }}
          >
            {dest.description}
          </p>
          <a
            href={waBookingUrl({ destination: dest.name })}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-full w-fit transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            style={{ background: '#FBBF24', color: '#0F172A' }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaWhatsapp size={13} /> Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding relative" style={{ background: '#030712' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(30,58,138,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <span className="section-pill">Explore Karnataka</span>
          <h2 className="section-title">
            Popular <span style={{ color: '#FBBF24' }}>Destinations</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From regal palaces to misty hill stations — your dream getaway is just a booking away.
          </p>

          {/* Tagline — above cards */}
          <div className="mt-5 space-y-1.5">
            <p
              className="font-heading font-bold text-center"
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                color: '#FFFFFF',
                letterSpacing: '-0.2px',
              }}
            >
              Wherever your destination, we&apos;re ready to take you there.
            </p>
            <p
              className="text-center"
              style={{
                fontSize: 'clamp(0.78rem, 1.4vw, 0.88rem)',
                color: '#475569',
                fontWeight: '500',
                letterSpacing: '0.03em',
              }}
            >
              Your destination. Our responsibility.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <DestCard key={d.name} dest={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
