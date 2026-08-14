import React, { useState } from 'react';
import { MessageCircle, Phone, ChevronDown, Shield } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const VEHICLE_TYPES = ['Sedan', 'SUV', 'MUV', 'Hatchback', 'Any Vehicle'];
const TRIP_TYPES    = ['Airport Transfer', 'Local Rental', 'One Way', 'Outstation', 'Round Trip'];

function validatePhone(raw) {
  let n = raw.replace(/[\s\-]/g, '');
  if (n.startsWith('+91')) n = n.slice(3);
  else if (n.startsWith('91') && n.length === 12) n = n.slice(2);
  return /^[6-9]\d{9}$/.test(n);
}

function Sel({ value, onChange, error, children, placeholder }) {
  return (
    <div className="relative">
      <select value={value} onChange={onChange}
        className={`form-input appearance-none pr-8 ${error ? 'error' : ''}`}>
        <option value="">{placeholder}</option>
        {children}
      </select>
      <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
    </div>
  );
}

function Inp({ type = 'text', value, onChange, placeholder, error, inputMode }) {
  return (
    <input type={type} inputMode={inputMode} value={value} onChange={onChange}
      placeholder={placeholder}
      className={`form-input ${error ? 'error' : ''}`} />
  );
}

function Lbl({ children }) {
  return <label className="text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1 block">{children} <span className="text-yellow-400">*</span></label>;
}

/* ── Booking form (state + WhatsApp logic untouched) ─── */
function BookingForm() {
  const [f, setF] = useState({ pickup:'', drop:'', date:'', time:'', tripType:'', passengers:'', vehicle:'', name:'', phone:'' });
  const [err, setErr] = useState({});
  const set = (k, v) => setF(p => ({ ...p, [k]: v }));

  function submit(e) {
    e.preventDefault();
    const e2 = {};
    if (!f.pickup.trim())        e2.pickup     = true;
    if (!f.drop.trim())          e2.drop       = true;
    if (!f.date)                 e2.date       = true;
    if (!f.time)                 e2.time       = true;
    if (!f.tripType)             e2.tripType   = true;
    if (!f.passengers)           e2.passengers = true;
    if (!f.vehicle)              e2.vehicle    = true;
    if (!f.name.trim())          e2.name       = true;
    if (!validatePhone(f.phone)) e2.phone      = true;
    setErr(e2);
    if (Object.keys(e2).length) return;

    const msg =
`Hello LnT Travels, I would like to book a cab.

Pickup Location  : ${f.pickup}
Drop Location    : ${f.drop}
Travel Date      : ${f.date}
Travel Time      : ${f.time}
Trip Type        : ${f.tripType}
Passengers       : ${f.passengers}
Preferred Vehicle: ${f.vehicle}
Name             : ${f.name}
Phone            : ${f.phone}

Please share the fare and confirm availability.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <div><Lbl>Pickup</Lbl><Inp value={f.pickup} onChange={e=>set('pickup',e.target.value)} placeholder="From..." error={err.pickup} /></div>
        <div><Lbl>Drop</Lbl><Inp value={f.drop} onChange={e=>set('drop',e.target.value)} placeholder="To..." error={err.drop} /></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div><Lbl>Date</Lbl><Inp type="date" value={f.date} onChange={e=>set('date',e.target.value)} error={err.date} /></div>
        <div><Lbl>Time</Lbl><Inp type="time" value={f.time} onChange={e=>set('time',e.target.value)} error={err.time} /></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Lbl>Trip Type</Lbl>
          <Sel value={f.tripType} onChange={e=>set('tripType',e.target.value)} error={err.tripType} placeholder="Select...">
            {TRIP_TYPES.map(t=><option key={t} value={t}>{t}</option>)}
          </Sel>
        </div>
        <div>
          <Lbl>Passengers</Lbl>
          <Sel value={f.passengers} onChange={e=>set('passengers',e.target.value)} error={err.passengers} placeholder="No.">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(n=><option key={n} value={n}>{n}</option>)}
          </Sel>
        </div>
      </div>
      <div>
        <Lbl>Vehicle Type</Lbl>
        <Sel value={f.vehicle} onChange={e=>set('vehicle',e.target.value)} error={err.vehicle} placeholder="Select vehicle type">
          {VEHICLE_TYPES.map(v=><option key={v} value={v}>{v}</option>)}
        </Sel>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div><Lbl>Name</Lbl><Inp value={f.name} onChange={e=>set('name',e.target.value)} placeholder="Your name" error={err.name} /></div>
        <div>
          <Lbl>Phone</Lbl>
          <Inp type="tel" inputMode="numeric" value={f.phone} onChange={e=>set('phone',e.target.value)} placeholder="+91 XXXXXXXXXX" error={err.phone} />
          {err.phone && <p className="text-[10px] text-red-500 mt-1">Valid 10-digit Indian number required.</p>}
        </div>
      </div>
      {Object.keys(err).filter(k=>k!=='phone').length > 0 && (
        <p className="text-xs text-red-500 text-center">Please fill all required fields.</p>
      )}
      <button type="submit"
        className="btn-orange w-full h-12 rounded-xl text-[15px] mt-1"
        style={{ justifyContent: 'center' }}>
        <MessageCircle size={18} /> Request Booking via WhatsApp
      </button>
      <p className="text-center text-[10px] text-gray-400">Opens WhatsApp with your trip details.</p>
    </form>
  );
}

/* ── Hero ─────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ background: '#0D1B2A', minHeight: '100svh', display: 'flex', flexDirection: 'column' }}>

      {/* ── Background: right half car image ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none">
        <img src="/Eritiga.png" alt=""
          className="w-full h-full object-contain object-center"
          style={{ opacity: 0.18 }} />
        {/* fade-left overlay so text is readable */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, #0D1B2A 0%, rgba(13,27,42,0.85) 40%, rgba(13,27,42,0.3) 100%)'
        }} />
      </div>

      {/* On large screens, show a real car photo on the right */}
      <div className="absolute inset-y-0 right-0 w-[50%] pointer-events-none hidden lg:block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=90&auto=format&fit=crop"
          alt="Premium cab service"
          className="w-full h-full object-cover object-left animate-float-slow"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, #0D1B2A 0%, rgba(13,27,42,0.7) 45%, rgba(13,27,42,0.1) 100%)'
        }} />
      </div>

      {/* ── Main two-column content ── */}
      <div className="container-max relative z-10 flex-1 flex items-center">
        <div className="grid lg:grid-cols-[55%_45%] gap-8 xl:gap-12 w-full py-12 lg:py-16 items-center">

          {/* LEFT — headline + trust */}
          <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left animate-slide-up">
            {/* Eyebrow */}
            <span className="eyebrow-light">
              <Shield size={11} /> Yellow Board Commercial Cabs · Bangalore
            </span>

            {/* H1 */}
            <h1 className="font-heading font-bold mt-1 mb-4 text-white"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', letterSpacing: '-0.5px', lineHeight: 1.15 }}>
              Bangalore airport taxi service<br />
              <span className="orange-gradient">for airport transfers and city rides</span>
            </h1>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#FBBF24]">
              Key takeaway: reliable airport, local, and outstation cabs across Bangalore.
            </p>

            <p className="mb-4 text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(0.88rem, 1.6vw, 1rem)' }}>
              Airport transfers, local rides, one-way trips, and outstation travel — professional drivers, clean vehicles, transparent fares, and 24/7 support.
            </p>

            <p className="mb-8 max-w-md mx-auto lg:mx-0 text-slate-200 leading-relaxed"
              style={{ fontSize: 'clamp(0.92rem, 1.5vw, 1rem)' }}>
              LnT Travels provides reliable cab service in Bangalore for airport transfers, local rides, one-way trips and outstation travel. Book through WhatsApp or the online booking form for availability and fare confirmation.
            </p>

            <div className="mb-7 flex flex-wrap justify-center lg:justify-start gap-2.5">
              {['Airport pickup', 'Local rides', 'Corporate travel'].map((item) => (
                <span key={item} className="hero-badge inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-5">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200"
                style={{ background: '#FBBF24', color: '#0f172a', minWidth: '180px' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F59E0B'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FBBF24'; }}>
                Book Your Cab
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200"
                style={{ background: 'transparent', color: '#ffffff', border: '2px solid rgba(255,255,255,0.35)', minWidth: '180px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}>
                WhatsApp Us
              </a>
            </div>

            <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Call +91 91130 52138
            </p>
          </div>

          {/* RIGHT — floating booking card */}
          <div className="w-full max-w-sm mx-auto lg:ml-16 lg:mr-0" style={{ animation: 'none' }}>
            <div className="rounded-[26px] overflow-hidden border border-white/10"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96))', boxShadow: '0 32px 80px rgba(0,0,0,0.45)' }}>
              {/* Card header */}
              <div className="px-6 py-4 flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #13263d 100%)', borderBottom: '2px solid #FBBF24' }}>
                <div className="w-1.5 h-6 rounded-full" style={{ background: '#FBBF24' }} />
                <div>
                  <h2 className="font-heading font-black text-base text-white">Quick Booking Enquiry</h2>
                  <p className="text-[11px] text-slate-400">Fill in details — we confirm via WhatsApp</p>
                </div>
              </div>
              <div className="p-5">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
