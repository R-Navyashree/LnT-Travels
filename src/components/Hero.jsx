import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaShieldAlt, FaUserTie, FaClock, FaCar } from 'react-icons/fa';
import { MdSupportAgent, MdAccessTime, MdCleaningServices } from 'react-icons/md';
import { WHATSAPP_NUMBER } from '../constants';

const features = [
  { icon: <FaShieldAlt size={16} />,        title: 'Safe & Reliable',    desc: 'Verified drivers and insured rides every trip.' },
  { icon: <FaCar size={16} />,              title: 'Comfortable Rides',  desc: 'Premium AC cabins and smooth experience.' },
  { icon: <MdAccessTime size={18} />,       title: 'Always On Time',     desc: 'Your schedule is our responsibility.' },
  { icon: <MdSupportAgent size={18} />,     title: '24×7 Service',       desc: 'Always here via WhatsApp or call.' },
  { icon: <FaUserTie size={16} />,          title: 'Pro Drivers',        desc: 'Background-verified, 5+ years experience.' },
  { icon: <MdCleaningServices size={18} />, title: 'Clean Vehicles',     desc: 'Sanitized before every trip.' },
  { icon: <FaClock size={16} />,            title: 'Affordable Pricing', desc: 'Flat rates, zero hidden charges.' },
];

const VEHICLE_OPTIONS = ['Sedan', 'SUV', 'MUV', 'Hatchback', 'Any Vehicle'];
const TRIP_TYPES = ['Airport Transfer', 'Local Rental', 'One Way', 'Outstation', 'Round Trip'];

/* ── Shared input style ── */
const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '10px',
  border: '1.5px solid #E5E7EB',
  fontSize: '13px',
  color: '#111827',
  background: '#FFFFFF',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
};

function FormField({ label, required, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label style={{ fontSize: '11px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}{required && <span style={{ color: '#F97316', marginLeft: '2px' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function BookingForm() {
  const [form, setForm] = useState({
    pickup: '', drop: '', date: '', time: '',
    tripType: '', passengers: '', vehicle: '', name: '', phone: '',
  });
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState('');

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  function validatePhone(raw) {
    let n = raw.replace(/[\s\-]/g, '');
    if (n.startsWith('+91')) n = n.slice(3);
    else if (n.startsWith('91') && n.length === 12) n = n.slice(2);
    return /^[6-9]\d{9}$/.test(n);
  }

  function validate() {
    const e = {};
    if (!form.pickup.trim()) e.pickup = true;
    if (!form.drop.trim()) e.drop = true;
    if (!form.date) e.date = true;
    if (!form.time) e.time = true;
    if (!form.tripType) e.tripType = true;
    if (!form.passengers) e.passengers = true;
    if (!form.vehicle) e.vehicle = true;
    if (!form.name.trim()) e.name = true;
    if (!form.phone.trim() || !validatePhone(form.phone)) e.phone = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    const msg = `Hello LnT Travels, I would like to book a cab.

Pickup Location  : ${form.pickup}
Drop Location    : ${form.drop}
Travel Date      : ${form.date}
Travel Time      : ${form.time}
Trip Type        : ${form.tripType}
Passengers       : ${form.passengers}
Preferred Vehicle: ${form.vehicle}
Name             : ${form.name}
Phone            : ${form.phone}

Please share the fare and confirm availability.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  const inp = (key) => ({
    ...inputStyle,
    borderColor: errors[key] ? '#EF4444' : focused === key ? '#F97316' : '#E5E7EB',
    boxShadow: focused === key ? '0 0 0 3px rgba(249,115,22,0.12)' : 'none',
  });

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-3">
        <FormField label="Pickup Location" required>
          <input type="text" placeholder="e.g. Jayanagar" value={form.pickup}
            onChange={e => update('pickup', e.target.value)}
            onFocus={() => setFocused('pickup')} onBlur={() => setFocused('')}
            style={inp('pickup')} />
        </FormField>
        <FormField label="Drop Location" required>
          <input type="text" placeholder="e.g. Airport" value={form.drop}
            onChange={e => update('drop', e.target.value)}
            onFocus={() => setFocused('drop')} onBlur={() => setFocused('')}
            style={inp('drop')} />
        </FormField>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-3">
        <FormField label="Travel Date" required>
          <input type="date" value={form.date}
            onChange={e => update('date', e.target.value)}
            onFocus={() => setFocused('date')} onBlur={() => setFocused('')}
            style={inp('date')} />
        </FormField>
        <FormField label="Travel Time" required>
          <input type="time" value={form.time}
            onChange={e => update('time', e.target.value)}
            onFocus={() => setFocused('time')} onBlur={() => setFocused('')}
            style={inp('time')} />
        </FormField>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-2 gap-3">
        <FormField label="Trip Type" required>
          <select value={form.tripType} onChange={e => update('tripType', e.target.value)}
            onFocus={() => setFocused('tripType')} onBlur={() => setFocused('')}
            style={inp('tripType')}>
            <option value="">Select...</option>
            {TRIP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </FormField>
        <FormField label="Passengers" required>
          <select value={form.passengers} onChange={e => update('passengers', e.target.value)}
            onFocus={() => setFocused('passengers')} onBlur={() => setFocused('')}
            style={inp('passengers')}>
            <option value="">Select...</option>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </FormField>
      </div>

      {/* Row 4 — Vehicle type full width */}
      <FormField label="Preferred Vehicle Type" required>
        <select value={form.vehicle} onChange={e => update('vehicle', e.target.value)}
          onFocus={() => setFocused('vehicle')} onBlur={() => setFocused('')}
          style={inp('vehicle')}>
          <option value="">Select Vehicle Type</option>
          {VEHICLE_OPTIONS.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      </FormField>

      {/* Row 5 */}
      <div className="grid grid-cols-2 gap-3">
        <FormField label="Your Name" required>
          <input type="text" placeholder="Full name" value={form.name}
            onChange={e => update('name', e.target.value)}
            onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
            style={inp('name')} />
        </FormField>
        <FormField label="Phone Number" required>
          <input type="tel" inputMode="numeric" placeholder="+91 9XXXXXXXXX" value={form.phone}
            onChange={e => update('phone', e.target.value)}
            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
            style={inp('phone')} />
          {errors.phone && (
            <span style={{ fontSize: '10px', color: '#EF4444', marginTop: '2px' }}>
              Please enter a valid 10-digit Indian mobile number.
            </span>
          )}
        </FormField>
      </div>

      {/* Validation summary — only shown for non-phone fields */}
      {Object.keys(errors).filter(k => k !== 'phone').length > 0 && (
        <p style={{ fontSize: '11px', color: '#EF4444', textAlign: 'center' }}>
          Please fill in all required fields.
        </p>
      )}

      {/* Submit */}
      <button type="submit"
        className="flex items-center justify-center gap-2 w-full font-bold rounded-xl transition-all duration-300 min-h-[50px] text-white"
        style={{ background: '#F97316', fontSize: '15px', boxShadow: '0 6px 20px rgba(249,115,22,0.35)', border: 'none', cursor: 'pointer' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#EA580C'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(249,115,22,0.45)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(249,115,22,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
        <FaWhatsapp size={18} /> Request a Booking
      </button>

      <p style={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'center' }}>
        Opens WhatsApp with your trip details pre-filled.
      </p>
    </form>
  );
}

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden" style={{ background: '#0D1B2A' }}>
      {/* Faint bg car */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/Eritiga.png" alt="" aria-hidden="true" className="w-full h-full"
          style={{ objectFit: 'contain', objectPosition: 'center right', opacity: 0.04 }} />
      </div>

      {/* ── Main: two columns ── */}
      <div className="container-max px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-10 items-start">

          {/* ── LEFT: hero text + CTAs ── */}
          <div className="text-center lg:text-left pt-2 lg:pt-6">
            {/* Orange badge */}
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', color: '#FB923C' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Bangalore's Trusted Cab Service
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
              {[
                { icon: '🚖', text: 'Yellow Board Vehicles' },
                { icon: '📍', text: 'Bangalore Based' },
                { icon: '✓', text: 'Professional Drivers' },
              ].map((b) => (
                <div key={b.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.22)', color: '#FCD34D' }}>
                  <span>{b.icon}</span> {b.text}
                </div>
              ))}
            </div>

            {/* H1 */}
            <h1 className="font-heading font-black leading-[1.05] mb-3"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.4rem)', color: '#FFFFFF', letterSpacing: '-1.5px' }}>
              LnT Travels —
              <br />
              <span className="orange-gradient">Cab Service in Bangalore</span>
            </h1>

            <p className="font-semibold mb-2" style={{ fontSize: 'clamp(0.8rem, 1.6vw, 0.92rem)', color: '#CBD5E1' }}>
              Airport Transfers · Local Trips · One Way · Outstation
            </p>
            <p className="leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.88rem)', color: '#94A3B8', lineHeight: '1.8' }}>
              Safe, comfortable journeys — business travel, family vacations, airport transfers,
              or outstation getaways. Licensed Yellow Board vehicles, professional drivers, 24×7.
            </p>

            {/* Quick CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-8">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 min-h-[48px] text-white"
                style={{ background: '#25D366', boxShadow: '0 6px 20px rgba(37,211,102,0.35)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#20BA5A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <FaWhatsapp size={17} /> Book on WhatsApp
              </a>
              <a href="tel:+919113052138"
                className="flex items-center justify-center gap-2.5 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 min-h-[48px] text-white"
                style={{ background: '#2563EB', boxShadow: '0 6px 18px rgba(37,99,235,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#1D4ED8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <FaPhone size={14} /> Call Now
              </a>
            </div>

            {/* Features mini-strip (desktop only — hidden on mobile to save space) */}
            <div className="hidden lg:grid grid-cols-2 gap-2.5">
              {features.slice(0, 4).map((f) => (
                <div key={f.title}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316' }}>
                    {f.icon}
                  </div>
                  <span style={{ fontSize: '0.73rem', fontWeight: 600, color: '#CBD5E1' }}>{f.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Quick Booking Enquiry card ── */}
          <div className="relative z-10">
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '28px 24px 24px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              {/* Card header */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1 h-6 rounded-full" style={{ background: '#F97316' }} />
                  <h2 className="font-heading font-black text-xl" style={{ color: '#0D1B2A' }}>
                    Quick Booking Enquiry
                  </h2>
                </div>
                <p style={{ fontSize: '12px', color: '#6B7280', paddingLeft: '12px' }}>
                  Share your trip details and we'll confirm your cab via WhatsApp.
                </p>
              </div>

              <BookingForm />
            </div>
          </div>
        </div>
      </div>

      {/* ── Features strip — mobile only (all 7 features) ── */}
      <div className="lg:hidden container-max px-4 md:px-6 pb-8">
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '16px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: 'linear-gradient(to right, #F97316, #EA580C, #F97316)' }} />
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-2 p-2.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(249,115,22,0.12)', color: '#F97316' }}>
                  {f.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#F1F5F9' }}>{f.title}</p>
                  <p style={{ fontSize: '0.62rem', color: '#64748B', lineHeight: '1.35' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
