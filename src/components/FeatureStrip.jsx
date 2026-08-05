import React from 'react';
import { FaShieldAlt, FaUserTie, FaClock } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt size={16} />, title: 'Safe & Reliable', desc: 'Verified drivers, insured rides, and well-maintained vehicles on every trip.' },
  { icon: <FaUserTie size={16} />, title: 'Comfortable Rides', desc: 'Premium AC cabins, courteous drivers, and a smooth experience every time.' },
  { icon: <FaClock size={16} />, title: 'Always On Time', desc: 'Punctuality is our promise — your schedule is our responsibility.' },
];

export default function FeatureStrip() {
  return (
    <section style={{ background: '#030712', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="container-max px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title}
              className="group flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(17,24,39,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(251,191,36,0.2)';
                e.currentTarget.style.background = 'rgba(17,24,39,0.9)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(251,191,36,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(17,24,39,0.6)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(251,191,36,0.1)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.15)' }}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm mb-1" style={{ color: '#F1F5F9' }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}  