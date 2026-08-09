import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { waVehicleUrl } from '../utils/whatsapp';

const vehicles = [
  {
    id: 'wagonr',
    badge: 'Hatchback',
    name: 'Maruti WagonR',
    desc: 'Affordable and practical for smaller groups.',
    image: '/wagonR.png',
    video: '/WagonR.mp4',
  },
  {
    id: 'dzire',
    badge: 'Sedan',
    name: 'Swift Dzire / Etios',
    desc: 'Comfortable option for everyday travel and airport trips.',
    image: '/seden.png',
    video: '/Seden.mp4',
  },
  {
    id: 'ertiga',
    badge: 'SUV',
    name: 'Maruti Ertiga',
    desc: 'Spacious option for families and groups.',
    image: '/Eritiga.png',
    video: '/Eritiga.mp4',
  },
  {
    id: 'innova',
    badge: 'Premium SUV',
    name: 'Toyota Innova',
    desc: 'Extra comfort and space for longer journeys.',
    image: '/toyota-innova.webp',
    video: '/Innova.mp4',
  },
  {
    id: 'crysta',
    badge: 'Premium MUV',
    name: 'Innova Crysta',
    desc: 'Premium ride with ample space for outstation trips.',
    image: '/inova-crysta.webp',
    video: '/Innova%20crysta.mp4',
  },
  {
    id: 'hycross',
    badge: 'Premium MPV',
    name: 'Innova HyCross',
    desc: 'Top-of-the-line hybrid MPV for a luxurious experience.',
    image: '/innova-hycross.webp',
    video: '/Innova%20Hycross.mp4',
  },
];

function VideoModal({ src, onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.88)' }} onClick={onClose}>
      <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-black"
        onClick={e => e.stopPropagation()}>
        <video src={src} autoPlay muted loop playsInline controls
          className="w-full block" style={{ maxHeight: '70vh', objectFit: 'contain' }} />
        <button onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: '#FBBF24', color: '#0f172a' }}>
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

function VehicleCard({ v }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(false);

  function startVideo() {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  }
  function stopVideo() {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <>
      <div
        className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
        style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(15,23,42,0.06)' }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(15,23,42,0.12)'; e.currentTarget.style.borderColor = '#d1d5db'; startVideo(); }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(15,23,42,0.06)'; e.currentTarget.style.borderColor = '#e5e7eb'; stopVideo(); }}
      >
        {/* Image / video area */}
        <div
          className="relative overflow-hidden cursor-pointer flex-shrink-0"
          style={{ height: '130px', background: '#f1f5f9' }}
          onClick={() => setModal(true)}
        >
          <img
            src={v.image}
            alt={`LnT Travels ${v.name}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 p-4"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <video
            ref={videoRef}
            preload="metadata"
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <source src={v.video} type="video/mp4" />
          </video>
        </div>

        {/* Card body */}
        <div className="p-3 flex flex-col flex-1">
          <h3 className="font-bold text-sm mb-1" style={{ color: '#0f172a' }}>{v.badge}</h3>
          <p className="text-xs mb-4 flex-1" style={{ color: '#64748b', lineHeight: '1.5' }}>{v.desc}</p>

          <a
            href={waVehicleUrl(v.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 rounded-lg font-bold text-sm transition-all duration-200"
            style={{ background: '#FBBF24', color: '#0f172a' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F59E0B'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FBBF24'; }}
          >
            Book Now
          </a>
        </div>
      </div>

      {modal && <VideoModal src={v.video} onClose={() => setModal(false)} />}
    </>
  );
}

export default function Vehicles() {
  return (
    <section id="vehicles" className="section-padding" style={{ background: '#f8fafc' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#FBBF24' }}>
            OUR FLEET
          </p>
          <h2 className="font-heading font-bold mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#0f172a', letterSpacing: '-0.3px' }}>
            Choose Your Ride
          </h2>
          <p className="text-sm mb-4" style={{ color: '#64748b' }}>
            Pick the vehicle category that suits your group size and journey.
          </p>
          <div className="mx-auto w-12 h-1 rounded-full" style={{ background: '#FBBF24' }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {vehicles.map(v => <VehicleCard key={v.id} v={v} />)}
        </div>
      </div>
    </section>
  );
}
