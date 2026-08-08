import React from 'react';

export default function TrustBanner() {
  return (
    <div style={{ background: '#0D1B2A', borderBottom: '1px solid rgba(251,191,36,0.15)' }}>
      <div className="container-max px-4 md:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          {/* Icon */}
          <span style={{ fontSize: '2rem', lineHeight: 1 }}>🚖</span>

          {/* Text */}
          <div>
            <p className="font-heading font-bold text-sm md:text-base" style={{ color: '#FCD34D' }}>
              100% Commercial Yellow Board Vehicles
            </p>
            <p className="text-xs md:text-sm mt-0.5" style={{ color: '#94A3B8' }}>
              Serving Bangalore with licensed, commercial taxis for Airport Transfers, Local Trips, One Way, and Outstation Travel.
            </p>
          </div>

          {/* Divider + badges */}
          <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
            <div className="w-px h-8" style={{ background: 'rgba(251,191,36,0.2)' }} />
            <div className="flex flex-col gap-1.5">
              <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: '#86EFAC' }}>
                <span style={{ color: '#10B981' }}>✓</span> Licensed &amp; Legal
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: '#86EFAC' }}>
                <span style={{ color: '#10B981' }}>✓</span> 24×7 Bangalore Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
