import React from 'react';
import { FaShieldAlt, FaUserTie, FaClock } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt size={16} />, title: 'Safe & Reliable', desc: 'Verified drivers, insured rides, and well-maintained vehicles on every trip.' },
  { icon: <FaUserTie size={16} />, title: 'Comfortable Rides', desc: 'Premium AC cabins, courteous drivers, and a smooth experience every time.' },
  { icon: <FaClock size={16} />, title: 'Always On Time', desc: 'Punctuality is our promise — your schedule is our responsibility.' },
];

export default function FeatureStrip() {
  return (
    <section style={{ background: '#FFFFFF', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
      <div className="container-max py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title}
              className="group flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                background: '#FAFAFA',
                border: '1px solid #F1F5F9',
                boxShadow: '0 1px 4px rgba(15,23,42,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(251,191,36,0.2)';
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(251,191,36,0.08)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#F1F5F9';
                e.currentTarget.style.background = '#FAFAFA';
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(15,23,42,0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(251,191,36,0.08)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.15)' }}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm mb-1" style={{ color: '#0F172A' }}>{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}