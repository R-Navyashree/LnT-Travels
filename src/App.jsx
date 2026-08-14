import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import About from './components/About';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Vehicles from './components/Vehicles';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function getRouteFromHash(hash = '') {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (['about', 'pricing', 'cities', 'corporate'].includes(clean)) return clean;
  return 'home';
}

function SummarySection() {
  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">
        <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-8 lg:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <p className="section-label">Bottom line</p>
          <h2 className="font-heading font-bold mb-4 text-[#0F172A]" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', letterSpacing: '-0.4px' }}>
            Reliable Bangalore cab service for airport transfers, local rides, and business travel.
          </h2>
          <p className="mb-4 max-w-4xl text-base leading-relaxed" style={{ color: '#475569' }}>
            LnT Travels is a Bangalore cab service for airport pickups, local commutes, family rides, and outstation travel. If you are wondering how to book a cab in Bangalore quickly, the short answer is simple: send your trip details on WhatsApp or by booking form, and we confirm availability and fare fast.
          </p>
          <p className="mb-6 max-w-4xl text-base leading-relaxed" style={{ color: '#475569' }}>
            We help business travelers, families, and corporate teams move with verified drivers, transparent pricing, and dependable schedules. See our <a href="#/about" className="font-semibold underline underline-offset-4" style={{ color: '#0F172A' }}>about page</a> or <a href="#/pricing" className="font-semibold underline underline-offset-4" style={{ color: '#0F172A' }}>pricing and service options</a> for the full picture.
          </p>

          <ul className="grid gap-3 md:grid-cols-3">
            {[
              'Airport transfers with clear pricing and punctual pickup',
              'Local rides and family trips with verified, professional drivers',
              'Corporate bookings and repeat travel support across Bangalore'
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 text-sm font-medium list-none" style={{ color: '#0F172A' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function QAndASection() {
  const items = [
    {
      heading: 'How do I book a cab in Bangalore quickly?',
      answer: 'LnT Travels makes booking simple: send your pickup, drop, date, time, and vehicle preference through WhatsApp or the form on this page, and we confirm the fare and driver details quickly.'
    },
    {
      heading: 'Is LnT Travels available 24/7 for airport and city rides?',
      answer: 'Yes. LnT Travels offers 24/7 cab service across Bangalore for airport transfers, late-night drops, local city rides, and urgent travel needs with transparent support.'
    },
    {
      heading: 'Should you choose LnT Travels for outstation or corporate travel?',
      answer: 'Yes if you want dependable airport and business travel support with verified drivers, clear communication, and scheduled service across Bangalore and Karnataka.'
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container-max">
        <div className="mb-8 text-center">
          <span className="section-pill">Quick answers</span>
          <h2 className="section-title">Direct answers before you book</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map(({ heading, answer }) => (
            <article key={heading} className="rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-6" style={{ boxShadow: '0 8px 24px rgba(15,23,42,0.04)' }}>
              <h3 className="font-heading font-bold mb-3 text-[#0F172A]" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.35 }}>{heading}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceComparisonSection() {
  const rows = [
    {
      name: 'Economy',
      bestFor: 'Daily city rides and budget travel',
      features: 'Clean sedan or hatchback, transparent fares, ideal for local trips'
    },
    {
      name: 'Premium',
      bestFor: 'Airport transfers and family travel',
      features: 'Spacious SUV or MUV, extra comfort, smoother long-distance journeys'
    },
    {
      name: 'Corporate',
      bestFor: 'Office commutes and recurring business travel',
      features: 'Priority scheduling, consistent accounts, dependable chauffeur service'
    }
  ];

  return (
    <section id="pricing" className="section-padding" style={{ background: '#0D1B2A' }}>
      <div className="container-max">
        <div className="mb-10 text-center">
          <span className="section-pill" style={{ background: 'rgba(251,191,36,0.12)', color: '#FBBF24', borderColor: 'rgba(251,191,36,0.25)' }}>Choose a service</span>
          <h2 className="font-heading font-bold mb-3 text-white" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', letterSpacing: '-0.4px' }}>
            Which cab is right for your trip?
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <table className="w-full border-collapse text-left text-sm text-slate-200">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                <th className="p-4">Service</th>
                <th className="p-4">Best for</th>
                <th className="p-4">What you get</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} className="border-t border-white/10">
                  <td className="p-4 font-bold text-white">{row.name}</td>
                  <td className="p-4 text-slate-200">{row.bestFor}</td>
                  <td className="p-4 text-slate-300">{row.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr Rakshith K M',
      quote: 'Had a wonderful experience with L&T Travels! The service was excellent from start to finish. The journey was comfortable, well-organized, and smooth, making it a great choice for travelling with family and friends. The staff were friendly and professional, the arrangements were well managed, and the overall experience was hassle-free. I especially appreciated the comfort, punctuality, and attention to customer needs. Highly recommended for anyone looking for a safe, comfortable, and reliable travel experience with family or friends. Would definitely choose L&T Travels again for my future trips!'
    },
    {
      name: 'Manjunatha A',
      quote: 'I recently used L&T Travel and had an absolutely wonderful experience. Their service was highly professional, efficient, and well-organized from start to finish. The itinerary was perfectly planned, and their team was incredibly supportive throughout the journey. I highly recommend L&T Travel to anyone looking for a hassle-free and memorable travel experience. Thank you for the outstanding service!'
    },
    {
      name: 'Shashank Shetty',
      quote: 'Had a great experience with L&T Travels! The service was excellent, the journey was comfortable, and everything was well organised. The staff were friendly and helpful throughout the trip. I highly recommend L&T Travels for anyone looking for a safe, comfortable, and reliable travel experience. Looking forward to travelling with them again!'
    }
  ];

  const googleReviewsUrl = 'https://www.google.com/maps/search/?api=1&query=LnT+Travels+Bangalore';

  return (
    <section id="reviews" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">
        <div className="mb-10 text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-sm font-semibold text-[#0F172A] underline-offset-4 hover:underline"
            style={{ color: '#0F172A' }}
          >
            ⭐ 5.0 out of 5 — based on 52 Google Reviews
          </a>
          <div className="mt-5">
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-orange">View Google Reviews</a>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-3xl border border-[#E5E7EB] bg-white p-5 md:p-6" style={{ boxShadow: '0 12px 36px rgba(15,23,42,0.05)' }}>
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-heading font-bold text-lg text-[#0F172A]">{review.name}</h3>
                <span className="text-[#FBBF24] text-sm font-bold">★★★★★</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{review.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <SummarySection />
      <QAndASection />
      <TrustBanner />
      <About />
      <Services />
      <ServiceComparisonSection />
      <Destinations />
      <Vehicles />
      <CTA />
      <Contact />
      <TestimonialsSection />
    </>
  );
}

function SimplePage({ title, intro, body, cta }) {
  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <p className="section-label">LnT Travels</p>
          <h1 className="font-heading font-bold mb-4 text-[#0F172A]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>{title}</h1>
          <p className="mb-5 text-base leading-relaxed" style={{ color: '#475569' }}>{intro}</p>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#475569' }}>{body}</div>
          {cta && (
            <div className="mt-8">
              <a href={cta.href} className="btn-orange">{cta.label}</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AboutRoutePage() {
  return (
    <SimplePage
      title="About LnT Travels"
      intro="LnT Travels helps customers move through Bangalore with dependable transportation for airport arrivals, local schedules, and outstation journeys."
      body={[
        <p key="one">We serve business travelers, families, and groups who need a professional cab service with clear communication and safe driving standards.</p>,
        <p key="two">Our service is built around verified drivers, clean vehicles, transparent pricing, and support for both one-off bookings and repeat corporate travel.</p>,
        <p key="three">Whether you need a quick pickup from the airport or a multi-day trip across Karnataka, we plan around your schedule and route.</p>
      ]}
      cta={{ href: '#home', label: 'Back to home' }}
    />
  );
}

function PricingRoutePage() {
  return (
    <SimplePage
      title="Pricing and service options"
      intro="Booking with LnT Travels is simple: choose your trip type, preferred vehicle, and route, and we confirm the fare quickly before dispatch."
      body={[
        <ul key="pricing-list" className="list-disc pl-6 space-y-2">
          <li>Airport taxi: based on route, vehicle type, and waiting time.</li>
          <li>Local cab: ideal for city rides, meetings, family outings, and appointments.</li>
          <li>Outstation trips: planned around distance, route, and vehicle requirement.</li>
          <li>Corporate travel: recurring bookings and account support for business schedules.</li>
        </ul>,
        <p key="note">We keep pricing transparent and confirm the rate before the trip starts so customers know what to expect.</p>
      ]}
      cta={{ href: '#home', label: 'Book a ride' }}
    />
  );
}

function CitiesRoutePage() {
  return (
    <SimplePage
      title="Cities and areas we serve"
      intro="LnT Travels covers Bangalore city, surrounding neighborhoods, airport corridors, and key outstation routes across Karnataka."
      body={[
        <ul key="cities" className="list-disc pl-6 space-y-2">
          <li>Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City</li>
          <li>Hebbal, Yelahanka, Airport Road, Marathahalli, BTM Layout</li>
          <li>Airport transfers to and from Kempegowda International Airport</li>
          <li>Outstation journeys including Mysore, Coorg, Chikmagalur, Wayanad, and nearby routes</li>
        </ul>,
        <p key="detail">If your pickup point is not listed, contact us and we will confirm availability for your route.</p>
      ]}
      cta={{ href: '#home', label: 'Check availability' }}
    />
  );
}

function CorporateRoutePage() {
  return (
    <SimplePage
      title="Corporate bookings"
      intro="We support regular business travel for professionals, teams, and client visits that need punctual pickups and clear coordination."
      body={[
        <ul key="corp" className="list-disc pl-6 space-y-2">
          <li>Airport transfers for executives and visiting teams</li>
          <li>Scheduled rides for office commutes and meetings</li>
          <li>Recurring account coordination for frequent bookings</li>
          <li>Dependable service for staff travel and client pickups</li>
        </ul>,
        <p key="detail">Corporate customers benefit from consistent service, transparent communication, and dependable routes across Bangalore.</p>
      ]}
      cta={{ href: '#home', label: 'Request a corporate quote' }}
    />
  );
}

export default function App() {
  const [route, setRoute] = useState(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case 'about':
        return <AboutRoutePage />;
      case 'pricing':
        return <PricingRoutePage />;
      case 'cities':
        return <CitiesRoutePage />;
      case 'corporate':
        return <CorporateRoutePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <Navbar />
      </div>

      <main className="pt-[88px]">{renderPage()}</main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
