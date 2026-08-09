import React from 'react';
import { ClipboardList, MessageCircle, Car } from 'lucide-react';
import { WHATSAPP_NUMBER, BOOKING_MSG } from '../constants';
import useReveal from '../hooks/useReveal';

const steps = [
  {
    n: '01',
    icon: ClipboardList,
    color: '#2563EB',
    title: 'Enter Trip Details',
    desc: 'Fill in pickup, drop, date, time, vehicle type, and passenger count using the quick booking form.',
  },
  {
    n: '02',
    icon: MessageCircle,
    color: '#25D366',
    title: 'Get Confirmed on WhatsApp',
    desc: 'Your request goes straight to us. We confirm availability and fare within minutes on WhatsApp.',
  },
  {
    n: '03',
    icon: Car,
    color: '#FBBF24',
    title: 'Your Ride Arrives',
    desc: 'A professional driver in a licensed Yellow Board vehicle picks you up — on time, every time.',
  },
];

function StepCard({ s, index }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} delay-${(index + 1) * 150}`}>
      <div
        className="relative flex flex-col items-center text-center p-7 rounded-2xl bg-white h-full transition-all duration-300"
        style={{ border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(15,23,42,0.05)' }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${s.color}44`;
          e.currentTarget.style.boxShadow = `0 20px 48px rgba(15,23,42,0.11)`;
          e.currentTarget.style.transform = 'translateY(-6px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#E5E7EB';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,23,42,0.05)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Step number watermark */}
        <span className="absolute top-4 right-5 font-black text-2xl select-none"
          style={{ color: '#F3F4F6', fontFamily: 'Poppins, sans-serif' }}>
          {s.n}
        </span>

        {/* Icon circle */}
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
          style={{ background: `${s.color}14`, border: `2px solid ${s.color}28` }}>
          <s.icon size={28} style={{ color: s.color }} />
        </div>

        <h3 className="font-heading font-bold text-base mb-2.5" style={{ color: '#0F172A' }}>
          {s.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#64748B', lineHeight: '1.7' }}>
          {s.desc}
        </p>
      </div>
    </div>
  );
}

export default function TrustBanner() {
  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-pill">How It Works</span>
          <h2 className="section-title">
            Book in <span className="orange-gradient">3 Simple Steps</span>
          </h2>
          <p className="section-subtitle mx-auto">
            No app, no registration — fill the form and get confirmed via WhatsApp.
          </p>
        </div>

        {/* Steps grid with connector line */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Desktop connector dots row */}
          <div className="hidden md:flex absolute top-[56px] left-0 right-0 items-center justify-between px-[16.67%] pointer-events-none z-10">
            <div className="flex-1 h-px mx-4" style={{ background: 'linear-gradient(to right, #E5E7EB, #FBBF24, #E5E7EB)' }} />
            <div className="flex-1 h-px mx-4" style={{ background: 'linear-gradient(to right, #FBBF24, #E5E7EB, #FBBF24)' }} />
          </div>

          {steps.map((s, i) => (
            <StepCard key={s.n} s={s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-orange inline-flex px-8 py-3.5 text-sm"
          >
            <MessageCircle size={17} /> Book Your Ride Now
          </a>
        </div>
      </div>
    </section>
  );
}
