import React from 'react';
import { MessageCircle } from 'lucide-react';
import { waBookingUrl } from '../utils/whatsapp';

const destinations = [
  {
    name: 'Coorg',
    desc: 'Coffee country hills and misty mornings in the Western Ghats.',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Chikmagalur',
    desc: 'Green estate roads and calm hill views for a slow weekend.',
    image: 'https://images.unsplash.com/photo-1467139701929-18c0d27a7516?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Mysore',
    desc: 'Heritage palaces, gardens and an easy drive from Bangalore.',
    image: '/mysore.jpg',
  },
  {
    name: 'Ooty',
    desc: 'Nilgiri tea gardens and cool weather in the hills.',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Wayanad',
    desc: 'Forests, waterfalls and quiet stays across the Kerala border.',
    image: 'https://images.unsplash.com/photo-1587922546307-776227941871?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Sakleshpur',
    desc: 'Ghat sections, plantations and a short scenic getaway.',
    image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Hampi',
    desc: 'Boulder landscapes and ancient stone monuments.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Kabini',
    desc: 'Riverside calm and wildlife country in south Karnataka.',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&q=85&auto=format&fit=crop',
  },
];

function DestCard({ dest }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl"
      style={{ height: '280px', boxShadow: '0 4px 20px rgba(15,23,42,0.12)' }}>
      {/* Background image */}
      <img
        src={dest.image}
        alt={dest.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(10,18,32,0.92) 0%, rgba(10,18,32,0.45) 55%, rgba(10,18,32,0.1) 100%)' }} />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-lg leading-tight mb-1">{dest.name}</h3>
        <p className="text-slate-300 text-xs leading-snug mb-3" style={{ fontSize: '0.72rem' }}>{dest.desc}</p>
        <a
          href={waBookingUrl({ destination: dest.name })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200"
          style={{ background: '#FBBF24', color: '#0f172a' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#F59E0B'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#FBBF24'; }}
        >
          <MessageCircle size={11} /> Plan Your Trip
        </a>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FBBF24' }}>Outstation</p>
          <h2 className="font-heading font-bold text-center mb-3"
            style={{ fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)', color: '#0f172a', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
            Popular Outstation Destinations<br />From Bangalore
          </h2>
          <p className="text-sm text-slate-500 mb-4">
            Weekend getaways and long drives across Karnataka and nearby states.
          </p>
          {/* Yellow underline accent */}
          <div className="mx-auto w-12 h-1 rounded-full" style={{ background: '#FBBF24' }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map(d => <DestCard key={d.name} dest={d} />)}
        </div>
      </div>
    </section>
  );
}
