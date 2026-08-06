import React, { useRef, useState } from 'react';
import { FaUsers, FaWhatsapp, FaSnowflake, FaTimes } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { waVehicleUrl } from '../utils/whatsapp';

const vehicles = [
  { id: 'hatchback', badge: 'HATCHBACK',    name: 'Maruti Suzuki WagonR',       seats: '4+1', luggage: '2 Bags', image: '/wagonR.png',         video: '/WagonR.mp4' },
  { id: 'sedan',     badge: 'SEDAN',        name: 'Swift Dzire / Toyota Etios', seats: '4+1', luggage: '3 Bags', image: '/seden.png',           video: '/Seden.mp4' },
  { id: 'suv',       badge: 'SUV',          name: 'Maruti Suzuki Ertiga',       seats: '6+1', luggage: '4 Bags', image: '/Eritiga.png',         video: '/Eritiga.mp4' },
  { id: 'innova',    badge: 'MUV',          name: 'Toyota Innova',              seats: '7+1', luggage: '5 Bags', image: '/toyota-innova.webp',  video: '/Innova.mp4' },
  { id: 'crysta',    badge: 'PREMIUM MUV',  name: 'Toyota Innova Crysta',       seats: '7+1', luggage: '5 Bags', image: '/inova-crysta.webp',   video: '/Innova%20crysta.mp4' },
  { id: 'hycross',   badge: 'PREMIUM MPV',  name: 'Toyota Innova HyCross',      seats: '7+1', luggage: '5 Bags', image: '/innova-hycross.webp', video: '/Innova%20Hycross.mp4' },
];

function VideoModal({ src, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.88)', zIndex: 9999 }} onClick={onClose}>
      <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <video src={src} autoPlay muted loop playsInline controls className="w-full block"
          style={{ maxHeight: '70vh', objectFit: 'contain', background: '#000' }} />
        <button onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: '#F97316', color: '#FFFFFF' }} aria-label="Close video">
          <FaTimes size={13} />
        </button>
      </div>
    </div>
  );
}

function VehicleCard({ v }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function startVideo() { setHovered(true); videoRef.current?.play().catch(() => {}); }
  function stopVideo() {
    setHovered(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  }

  return (
    <>
      <div className="group overflow-hidden flex flex-col transition-all duration-400"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 24px 56px rgba(0,0,0,0.5)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'; startVideo(); }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; stopVideo(); }}>

        {/* Media — tap opens modal on mobile */}
        <div className="relative overflow-hidden flex-shrink-0"
          style={{ height: '200px', background: '#0a1628', borderRadius: '20px 20px 0 0', cursor: 'pointer' }}
          onClick={() => setModalOpen(true)}>
          <img src={v.image} alt={v.name} loading="lazy"
            className="absolute inset-0 w-full h-full active:brightness-90"
            style={{ opacity: hovered ? 0 : 1, transition: 'opacity 0.35s ease', zIndex: 2, objectFit: 'contain', objectPosition: 'center', transform: 'scale(1.12)', transformOrigin: 'center' }} />
          <video ref={videoRef} preload="metadata" muted loop playsInline
            className="absolute inset-0 w-full h-full"
            style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease', objectFit: 'cover', zIndex: 3 }}>
            <source src={v.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.8) 100%)', zIndex: 4 }} />
          {/* Badge */}
          <div className="absolute top-3 left-3" style={{ zIndex: 5 }}>
            <span className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316', border: '1px solid rgba(249,115,22,0.25)' }}>
              {v.badge}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-heading font-bold text-sm text-center mb-3" style={{ color: '#F1F5F9' }}>{v.name}</h3>
          <div className="flex items-center justify-center gap-3 py-2 px-3 rounded-xl mb-4"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { icon: <FaUsers size={11} />, label: v.seats },
              { icon: <FaSnowflake size={11} />, label: 'AC' },
              { icon: <MdWork size={12} />, label: v.luggage },
            ].map((spec, i, arr) => (
              <React.Fragment key={spec.label}>
                <div className="flex items-center gap-1">
                  <span style={{ color: '#F97316' }}>{spec.icon}</span>
                  <span className="text-[10px] font-bold" style={{ color: '#CBD5E1' }}>{spec.label}</span>
                </div>
                {i < arr.length - 1 && <span style={{ color: '#334155' }}>|</span>}
              </React.Fragment>
            ))}
          </div>
          <a href={waVehicleUrl(v.name)} target="_blank" rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 w-full font-bold text-xs py-3 rounded-xl transition-all duration-300 min-h-[44px] text-white"
            style={{ background: '#F97316', boxShadow: '0 4px 14px rgba(249,115,22,0.3)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#EA580C'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.45)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(249,115,22,0.3)'; }}>
            <FaWhatsapp size={14} /> Book Now
          </a>
        </div>
      </div>
      {modalOpen && <VideoModal src={v.video} onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default function Vehicles() {
  return (
    <section id="vehicles" className="section-padding" style={{ background: '#0D1B2A' }}>
      <div className="container-max">
        <div className="text-center mb-10 md:mb-12">
          <span className="section-pill">Our Fleet</span>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>Choose Your <span className="orange-gradient">Ride</span></h2>
          <p className="section-subtitle mx-auto" style={{ color: '#94A3B8' }}>
            Well-maintained vehicles for every journey — hover on desktop to see them in action.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {vehicles.map((v) => <VehicleCard key={v.id} v={v} />)}
        </div>
      </div>
    </section>
  );
}
