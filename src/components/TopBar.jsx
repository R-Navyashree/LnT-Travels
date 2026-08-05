import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { PHONE_DISPLAY, EMAIL } from '../constants';

export default function TopBar() {
  return (
    <div style={{ background: '#020617', borderBottom: '1px solid rgba(255,255,255,0.06)', height: '42px' }}>
      <div className="container-max px-4 md:px-6 flex items-center justify-between h-full">
        <div className="flex items-center gap-6 text-xs">
          <a href="tel:+917349399599"
            className="flex items-center gap-2 transition-colors"
            style={{ color: '#64748B' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#FBBF24'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B'; }}>
            <FaPhone size={11} style={{ color: '#FBBF24' }} />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${EMAIL}`}
            className="hidden sm:flex items-center gap-2 transition-colors"
            style={{ color: '#64748B' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#FBBF24'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B'; }}>
            <FaEnvelope size={11} style={{ color: '#FBBF24' }} />
            <span>{EMAIL}</span>
          </a>
        </div>
        <p className="text-[10px] font-bold tracking-widest hidden md:block" style={{ color: '#334155' }}>
          PROFESSIONAL DRIVERS &nbsp;•&nbsp; 24×7 SERVICE
        </p>
      </div>
    </div>
  );
}
