import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { EMAIL } from '../constants';

export default function TopBar() {
  return (
    <div className="bg-[#0D1B2A]" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="container-max py-2 flex items-center justify-center md:justify-between gap-4">
        {/* Left — phone always visible, email on md+ */}
        <div className="flex items-center gap-4">
          <a href="tel:+919113052138"
            className="flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap transition-colors duration-150"
            style={{ color: '#94A3B8' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FBBF24'}
            onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
            <Phone size={10} style={{ color: '#FBBF24' }} />
            +91 9113052138
          </a>
          <span className="md:hidden text-[10px] font-bold" style={{ color: '#334155' }}>• 24×7 Service</span>
          <span className="hidden md:block" style={{ color: '#1E293B', fontSize: '12px' }}>|</span>
          <a href={`mailto:${EMAIL}`}
            className="hidden md:flex items-center gap-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150"
            style={{ color: '#94A3B8' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FBBF24'}
            onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
            <Mail size={10} style={{ color: '#FBBF24' }} />
            {EMAIL}
          </a>
        </div>
        {/* Right — desktop only tagline */}
        <p className="hidden md:block text-[10px] font-bold tracking-widest whitespace-nowrap" style={{ color: '#334155' }}>
          YELLOW BOARD COMMERCIAL TAXIS &nbsp;•&nbsp; 24×7
        </p>
      </div>
    </div>
  );
}
