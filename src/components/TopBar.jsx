import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { EMAIL } from '../constants';

export default function TopBar() {
  return (
    <div style={{ background: '#0D1B2A', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container-max px-4 md:px-6 py-2 flex items-center justify-center md:justify-between">
        <div className="flex items-center gap-4">
          <a href="tel:+919113052138"
            className="flex items-center gap-1.5 whitespace-nowrap transition-colors"
            style={{ color: '#94A3B8', fontSize: '11px', fontWeight: 600 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#F97316'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; }}>
            <FaPhone size={10} style={{ color: '#F97316' }} />
            +91 9113052138
          </a>
          <span className="md:hidden" style={{ color: '#334155', fontSize: '11px', fontWeight: 600 }}>•&nbsp;24×7 Service</span>
          <span className="hidden md:block" style={{ color: '#1E293B' }}>|</span>
          <a href={`mailto:${EMAIL}`}
            className="hidden md:flex items-center gap-1.5 whitespace-nowrap transition-colors"
            style={{ color: '#94A3B8', fontSize: '11px', fontWeight: 500 }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#F97316'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; }}>
            <FaEnvelope size={10} style={{ color: '#F97316' }} />
            {EMAIL}
          </a>
        </div>
        <p className="hidden md:block whitespace-nowrap" style={{ color: '#475569', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em' }}>
          PROFESSIONAL DRIVERS&nbsp;&nbsp;•&nbsp;&nbsp;24×7 SERVICE
        </p>
      </div>
    </div>
  );
}
