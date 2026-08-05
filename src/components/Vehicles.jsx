import React from 'react';
import { FaUsers, FaWhatsapp, FaSnowflake } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { waVehicleUrl } from '../utils/whatsapp';

const vehicles = [
  {
    id: 'hatchback',
    badge: 'HATCHBACK',
    name: 'Maruti Suzuki WagonR',
    seats: '4+1',
    luggage: '2 Bags',
    desc: 'Perfect for daily city rides, airport transfers, and budget-friendly travel.',
    image: '/wagonR.png',
  },
  {
    id: 'sedan',
    badge: 'SEDAN',
    name: 'Swift Dzire / Toyota Etios',
    seats: '4+1',
    luggage: '3 Bags',
    desc: 'Ideal for business travel, airport pickups, and comfortable family trips.',
    image: '/seden.png',
  },
  {
    id: 'suv',
    badge: 'SUV',
    name: 'Maruti Suzuki Ertiga',
    seats: '6+1',
    luggage: '4 Bags',
    desc: 'Best choice for family outings, weekend trips, and small group travel.',
    image: '/Eritiga.png',
  },
  {
    id: 'innova',
    badge: 'MUV',
    name: 'Toyota Innova',
    seats: '7+1',
    luggage: '5 Bags',
    desc: 'Reliable and comfortable for long-distance travel, airport transfers, and corporate trips.',
    image: '/toyota-innova.webp',
  },
  {
    id: 'crysta',
    badge: 'PREMIUM MUV',
    name: 'Toyota Innova Crysta',
    seats: '7+1',
    luggage: '5 Bags',
    desc: 'Premium travel experience for executives, families, and special occasions.',
    image: '/inova-crysta.webp',
  },
  {
    id: 'hycross',
    badge: 'PREMIUM MPV',
    name: 'Toyota Innova HyCross',
    seats: '7+1',
    luggage: '5 Bags',
    desc: 'Our flagship vehicle — luxury, comfort, hybrid technology, and an exceptional experience for VIP travel.',
    image: '/innova-hycross.webp',
  },
];

function VehicleCard({ v }) {
  return (
    <div
      className="group overflow-hidden flex flex-col transition-all duration-300"
      style={{
        background: '#111827',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        boxShadow: '0 6px 28px rgba(0,0,0,0.35)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow =
          '0 32px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(251,191,36,0.22), 0 0 40px rgba(251,191,36,0.07)';
        e.currentTarget.style.borderColor = 'rgba(251,191,36,0.28)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.35)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      }}
    >
      {/* ── Image ── */}
      <div className="relative overflow-hidden" style={{ height: '220px', background: '#0F172A' }}>
        <img
          src={v.image}
          alt={v.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 40%, rgba(17,24,39,0.85) 100%)',
          }}
        />
        {/* Category badge over image */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[9px] font-black tracking-[0.16em] uppercase px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(251,191,36,0.14)',
              color: '#FBBF24',
              border: '1px solid rgba(251,191,36,0.3)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {v.badge}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name */}
        <h3
          className="font-heading font-bold text-lg text-center mb-2"
          style={{ color: '#F1F5F9' }}
        >
          {v.name}
        </h3>

        {/* Description */}
        <p
          className="text-xs text-center leading-relaxed mb-5"
          style={{ color: '#475569', lineHeight: '1.7' }}
        >
          {v.desc}
        </p>

        {/* Specs row */}
        <div
          className="flex items-center justify-center gap-4 py-3 px-3 rounded-2xl mb-5"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <FaUsers size={12} style={{ color: '#FBBF24' }} />
            <span className="text-[11px] font-bold" style={{ color: '#94A3B8' }}>
              {v.seats} Seats
            </span>
          </div>
          <span style={{ color: '#1F2937' }}>|</span>
          <div className="flex items-center gap-1.5">
            <FaSnowflake size={12} style={{ color: '#FBBF24' }} />
            <span className="text-[11px] font-bold" style={{ color: '#94A3B8' }}>
              AC
            </span>
          </div>
          <span style={{ color: '#1F2937' }}>|</span>
          <div className="flex items-center gap-1.5">
            <MdWork size={13} style={{ color: '#FBBF24' }} />
            <span className="text-[11px] font-bold" style={{ color: '#94A3B8' }}>
              {v.luggage}
            </span>
          </div>
        </div>

        {/* Book button */}
        <a
          href={waVehicleUrl(v.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 w-full font-bold text-sm py-3.5 rounded-2xl transition-all duration-300"
          style={{
            background: '#FBBF24',
            color: '#0F172A',
            boxShadow: '0 4px 18px rgba(251,191,36,0.28)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#FCD34D';
            e.currentTarget.style.boxShadow = '0 10px 32px rgba(251,191,36,0.5)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FBBF24';
            e.currentTarget.style.boxShadow = '0 4px 18px rgba(251,191,36,0.28)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <FaWhatsapp size={16} /> Book Now
        </a>
      </div>
    </div>
  );
}

export default function Vehicles() {
  return (
    <section
      id="vehicles"
      className="section-padding relative overflow-hidden"
      style={{ background: '#030712' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(30,58,138,0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-pill">Our Fleet</span>
          <h2 className="section-title">
            Choose Your <span style={{ color: '#FBBF24' }}>Ride</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Choose from our premium fleet of clean, comfortable, and well-maintained vehicles
            designed for every journey — whether it&apos;s an airport transfer, city ride, family
            trip, or outstation travel.
          </p>
        </div>

        {/* Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
