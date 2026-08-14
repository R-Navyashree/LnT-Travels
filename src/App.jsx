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

const ROUTES = [
  'home',
  'airport-taxi-bangalore',
  'outstation-cab-bangalore',
  'one-way-cab-bangalore',
  'local-cab-bangalore',
  'round-trip-cab-bangalore',
  'corporate-cab-service',
  'about',
  'contact'
];

const ROUTE_META = {
  home: {
    title: 'LnT Travels | Cab Service in Bangalore | Airport & Outstation Taxi',
    description: 'LnT Travels provides reliable cab service in Bangalore for airport transfers, local trips, one-way travel, round trips and outstation journeys. Book a comfortable cab with professional drivers.',
    ogTitle: 'LnT Travels | Cab Service in Bangalore | Airport & Outstation Taxi',
    ogDescription: 'Reliable cab service in Bangalore for airport transfers, local trips, one-way travel, round trips and outstation journeys.'
  },
  'airport-taxi-bangalore': {
    title: 'Bangalore Airport Taxi | Airport Cab Service | LnT Travels',
    description: 'Book a Bangalore airport taxi with LnT Travels for airport pickup, airport drop and reliable transfers between Bengaluru airport and the city.',
    ogTitle: 'Bangalore Airport Taxi Service | LnT Travels',
    ogDescription: 'Airport pickup and drop service in Bangalore with professional drivers and comfortable vehicles.'
  },
  'outstation-cab-bangalore': {
    title: 'Outstation Cab from Bangalore | One-Way & Round Trip Taxi',
    description: 'Book an outstation cab from Bangalore with LnT Travels for Mysore, Coorg, Chikmagalur, Ooty and other one-way or round-trip journeys.',
    ogTitle: 'Outstation Cab Service from Bangalore | LnT Travels',
    ogDescription: 'Comfortable one-way and round-trip outstation taxis from Bangalore with professional drivers.'
  },
  'one-way-cab-bangalore': {
    title: 'One Way Cab from Bangalore | One-Way Taxi Service',
    description: 'Book a one-way cab from Bangalore with transparent travel support, flexible routes and dependable taxi service for intercity journeys.',
    ogTitle: 'One-Way Cab Service from Bangalore | LnT Travels',
    ogDescription: 'Convenient one-way cab service from Bangalore for city and intercity travel with professional drivers.'
  },
  'local-cab-bangalore': {
    title: 'Local Cab Service in Bangalore | City Taxi | LnT Travels',
    description: 'Book a local cab in Bangalore for daily travel, meetings, family trips and city rides with punctual, comfortable and reliable cab service.',
    ogTitle: 'Local Cab Service in Bangalore | LnT Travels',
    ogDescription: 'Local taxi service in Bangalore for city rides, appointments and day-to-day travel.'
  },
  'round-trip-cab-bangalore': {
    title: 'Round Trip Cab from Bangalore | Outstation Taxi',
    description: 'Book a round trip cab from Bangalore for return journeys and outstation travel with planned pickup, reliable drivers and comfortable vehicles.',
    ogTitle: 'Round Trip Cab Service from Bangalore | LnT Travels',
    ogDescription: 'Round-trip cab service from Bangalore for outstation and return travel with dependable drivers.'
  },
  'corporate-cab-service': {
    title: 'Corporate Cab Service in Bangalore | Business Travel Taxi',
    description: 'Arrange reliable corporate cab service in Bangalore for employee travel, client transport, business trips and airport transfers.',
    ogTitle: 'Corporate Cab Service in Bangalore | LnT Travels',
    ogDescription: 'Business travel taxi service in Bangalore for employee and client transport needs.'
  },
  about: {
    title: 'About LnT Travels | Bangalore Cab Service',
    description: 'Learn about LnT Travels and our reliable Bangalore cab service for airport transfers, local rides, business travel and outstation trips.',
    ogTitle: 'About LnT Travels',
    ogDescription: 'Learn about our professional cab service and customer-first approach in Bangalore.'
  },
  contact: {
    title: 'Contact LnT Travels | Book a Cab in Bangalore',
    description: 'Contact LnT Travels for a cab booking in Bangalore. Call, WhatsApp or plan your airport, local or corporate ride with our team.',
    ogTitle: 'Contact LnT Travels',
    ogDescription: 'Call or message LnT Travels for a reliable Bangalore cab booking.'
  }
};

function normalizePathValue(value = '') {
  return value.replace(/^\/+|\/+$/g, '').trim();
}

function getRouteFromLocation(location = window.location) {
  const hashRoute = normalizePathValue((location.hash || '').replace(/^#\/?/, ''));
  if (hashRoute && ROUTES.includes(hashRoute)) return hashRoute;

  const pathRoute = normalizePathValue(location.pathname || '/');
  if (!pathRoute || pathRoute === 'index.html') return 'home';
  if (ROUTES.includes(pathRoute)) return pathRoute;
  return 'home';
}

function setPageMetadata(route) {
  if (typeof document === 'undefined') return;

  const meta = ROUTE_META[route] || ROUTE_META.home;
  document.title = meta.title;

  const setMeta = (selector, attribute, value) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      if (selector.startsWith('meta[name=')) {
        const key = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
        if (key) element.setAttribute('name', key);
      } else if (selector.startsWith('meta[property=')) {
        const key = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
        if (key) element.setAttribute('property', key);
      }
      document.head.appendChild(element);
    }
    element.setAttribute(attribute, value);
  };

  setMeta('meta[name="description"]', 'content', meta.description);
  setMeta('meta[property="og:title"]', 'content', meta.ogTitle);
  setMeta('meta[property="og:description"]', 'content', meta.ogDescription);
  setMeta('meta[property="og:url"]', 'content', `https://lnt-travels.vercel.app/${route === 'home' ? '' : route}`.replace(/\/$/, ''));

  const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', `https://lnt-travels.vercel.app/${route === 'home' ? '' : route}`.replace(/\/$/, ''));
  if (!document.querySelector('link[rel="canonical"]')) {
    document.head.appendChild(canonical);
  }
}

function ServiceComparisonSection() {
  const rows = [
    { name: 'Economy', bestFor: 'Daily city rides and budget travel', features: 'Clean sedan or hatchback, transparent fares, ideal for local trips' },
    { name: 'Premium', bestFor: 'Airport transfers and family travel', features: 'Spacious SUV or MUV, extra comfort, smoother long-distance journeys' },
    { name: 'Corporate', bestFor: 'Office commutes and recurring business travel', features: 'Priority scheduling, consistent accounts, dependable chauffeur service' }
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
    <section id="reviews" className="section-padding" style={{ background: '#0D1B2A' }}>
      <div className="container-max">
        <div className="mb-10 text-center">
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>What Our Customers Say</h2>
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-sm font-semibold underline-offset-4 hover:underline" style={{ color: '#F8FAFC' }}>
            ⭐ 5.0 out of 5 — based on 52 Google Reviews
          </a>
          <div className="mt-5">
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-orange">View Google Reviews</a>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article key={review.name} className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6" style={{ boxShadow: '0 12px 36px rgba(15,23,42,0.2)' }}>
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-heading font-bold text-lg text-white">{review.name}</h3>
                <span className="text-[#FBBF24] text-sm font-bold">★★★★★</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#E2E8F0' }}>{review.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOBottomLineSection() {
  const faqItems = [
    {
      question: 'How do I book a cab in Bangalore quickly?',
      answer: 'LnT Travels makes booking simple: send your pickup, drop, date, time, and vehicle preference through WhatsApp or the form on this page, and we confirm the fare and driver details quickly.'
    },
    {
      question: 'Is LnT Travels available 24/7 for airport and city rides?',
      answer: 'Yes. LnT Travels offers 24/7 cab service across Bangalore for airport transfers, late-night drops, local city rides, and urgent travel needs with transparent support.'
    },
    {
      question: 'Should you choose LnT Travels for outstation or corporate travel?',
      answer: 'Yes if you want dependable airport and business travel support with verified drivers, clear communication, and scheduled service across Bangalore and Karnataka.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container-max">
        <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 md:p-8 lg:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <p className="section-label">Bottom line</p>
          <h2 className="font-heading font-bold mb-4 text-[#0F172A]" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', letterSpacing: '-0.4px' }}>
            Reliable Bangalore cab service for airport transfers, local rides, and business travel.
          </h2>
          <p className="mb-4 max-w-4xl text-base leading-relaxed" style={{ color: '#475569' }}>
            LnT Travels is a Bangalore cab service for airport pickups, local commutes, family rides, and outstation travel. If you are wondering how to book a cab in Bangalore quickly, the short answer is simple: send your trip details on WhatsApp or by booking form, and we confirm availability and fare fast.
          </p>
          <p className="mb-4 max-w-4xl text-base leading-relaxed" style={{ color: '#475569' }}>
            We help business travelers, families, and corporate teams move with verified drivers, transparent pricing, and dependable schedules. See our <a href="/about" className="font-semibold underline underline-offset-4" style={{ color: '#0F172A' }}>About page</a> or <a href="/airport-taxi-bangalore" className="font-semibold underline underline-offset-4" style={{ color: '#0F172A' }}>Airport Cab Service page</a> for the full picture.
          </p>
          <p className="mb-6 max-w-4xl text-base leading-relaxed" style={{ color: '#475569' }}>
            Our fleet includes comfortable sedans and SUVs for airport transfers, local city rides, family travel, and business trips across Bangalore.
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

        <div className="mt-8">
          <p className="section-label">Quick answers</p>
          <h2 className="section-title">Direct answers before you book</h2>

          <div className="mt-4 space-y-3">
            {faqItems.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-3 md:p-4" style={{ boxShadow: '0 6px 18px rgba(15,23,42,0.03)' }}>
                  <h3 className="font-heading font-bold text-sm md:text-base text-[#0F172A]">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-base font-bold" style={{ color: '#0F172A' }} aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-panel-${index}`} hidden={!isOpen} className="mt-2">
                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <About />
      <Services />
      <ServiceComparisonSection />
      <Destinations />
      <Vehicles />
      <CTA />
      <Contact />
      <TestimonialsSection />
      <SEOBottomLineSection />
    </>
  );
}

function ServiceLandingPage({
  title,
  intro,
  highlights,
  sections,
  faqs,
  ctaLabel,
  ctaHref,
  relatedLinks
}) {
  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">
        <div className="mx-auto max-w-5xl rounded-[30px] border border-[#E5E7EB] bg-white p-6 md:p-8 lg:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <p className="section-label">LnT Travels</p>
          <h1 className="font-heading font-bold mb-4 text-[#0F172A]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>{title}</h1>
          <p className="mb-6 text-base leading-relaxed" style={{ color: '#475569' }}>{intro}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href={ctaHref} className="btn-orange inline-flex items-center justify-center">{ctaLabel}</a>
            <a href="/contact" className="inline-flex items-center justify-center rounded-xl border border-[#E5E7EB] px-6 py-3 text-sm font-bold" style={{ color: '#0F172A', background: '#FFFFFF' }}>Talk to our team</a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 text-sm font-medium" style={{ color: '#0F172A' }}>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <div key={section.heading} className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-5 md:p-6">
                <h2 className="font-heading font-bold mb-3 text-[#0F172A]" style={{ fontSize: 'clamp(1.35rem, 2.5vw, 2rem)' }}>{section.heading}</h2>
                <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#475569' }}>
                  {section.content.map((paragraph, idx) => <p key={`${section.heading}-${idx}`}>{paragraph}</p>)}
                </div>
              </div>
            ))}
          </div>

          {faqs && faqs.length > 0 && (
            <div className="mt-10">
              <h2 className="font-heading font-bold mb-5 text-[#0F172A]" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>Frequently asked questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
                    <h3 className="font-heading font-bold text-base md:text-lg text-[#0F172A] mb-2">{faq.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-10 rounded-2xl border border-[#E5E7EB] bg-[#0D1B2A] p-5 md:p-6 text-white">
              <h2 className="font-heading font-bold mb-4 text-white" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)' }}>Related services</h2>
              <div className="flex flex-wrap gap-2">
                {relatedLinks.map((link) => (
                  <a key={link.href} href={link.href} className="inline-flex items-center rounded-full border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#E2E8F0' }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AirportTaxiPage() {
  return (
    <ServiceLandingPage
      title="Bangalore Airport Taxi Service"
      intro="Booking an airport taxi in Bangalore should feel simple, punctual and stress-free. LnT Travels provides airport pickup and drop services between Bengaluru airport and the city with professional drivers, clear communication and comfortable vehicles."
      highlights={[
        'Pickup and drop service for Bengaluru airport',
        'Suitable for business, family and late-night travel',
        'Advance booking and flight-aware coordination'
      ]}
      sections={[
        {
          heading: 'Airport pickup and drop',
          content: [
            'We help with both airport pickup and airport drop services across Bengaluru, whether you are arriving for a business trip, returning home, or travelling with family.',
            'Our team coordinates pickup details in advance so your ride is ready when you need it, and the journey remains comfortable from the terminal to your destination.'
          ]
        },
        {
          heading: 'How the booking process works',
          content: [
            'Share your arrival or departure details, preferred pickup time, and vehicle type. We confirm your trip and driver details before the journey begins.',
            'For airport pickups, flight timing can matter. If your flight is delayed or lands early, we can coordinate the pickup based on your updated schedule.'
          ]
        },
        {
          heading: 'Vehicle options for airport travel',
          content: [
            'We offer sedans, hatchbacks, SUVs and family-friendly options depending on your route, luggage and passenger count. The right vehicle is chosen based on your trip requirements and comfort needs.',
            'Whether it is a solo airport transfer or a family trip with luggage, we can match a suitable cab for the ride.'
          ]
        }
      ]}
      faqs={[
        { q: 'How can I book an airport taxi in Bangalore?', a: 'You can book by phone, WhatsApp or through the request form on our website. Share your pickup location, airport terminal, travel time and preferred vehicle type and we will confirm the ride.' },
        { q: 'Do you provide Bangalore airport pickup and drop?', a: 'Yes. We provide airport pickup and drop services between Bengaluru airport and areas across Bangalore, including city neighborhoods and business districts.' },
        { q: 'Which cars are available for airport transfers?', a: 'We generally offer suitable sedan, hatchback and SUV options based on passenger count, luggage and trip requirements. The exact vehicle is confirmed at booking time.' }
      ]}
      ctaLabel="Book an Airport Cab"
      ctaHref="https://wa.me/919113052138?text=I%20need%20an%20airport%20cab%20in%20Bangalore"
      relatedLinks={[
        { href: '/local-cab-bangalore', label: 'Local Cab' },
        { href: '/one-way-cab-bangalore', label: 'One-Way Cab' },
        { href: '/contact', label: 'Contact Us' }
      ]}
    />
  );
}

function OutstationCabPage() {
  return (
    <ServiceLandingPage
      title="Outstation Cab Service from Bangalore"
      intro="For outstation trips from Bangalore, LnT Travels helps you plan dependable intercity journeys with a professional driver, comfortable ride and flexible one-way or round-trip options."
      highlights={[
        'Popular routes to Mysore, Coorg, Chikmagalur and Ooty',
        'One-way and round-trip travel options',
        'Professional drivers for longer journeys'
      ]}
      sections={[
        {
          heading: 'Outstation routes and travel needs',
          content: [
            'Whether you are travelling for family time, a business visit or a weekend getaway, we support outstation cab bookings from Bangalore to popular destinations across Karnataka and nearby areas.',
            'Popular routes include Mysore, Coorg, Chikmagalur, Ooty and other planned intercity travel needs.'
          ]
        },
        {
          heading: 'Vehicle options and driver support',
          content: [
            'You can choose a suitable vehicle based on passenger count, luggage and comfort needs. We focus on clean vehicles, reliable drivers and clear trip coordination before departure.',
            'When the trip is longer, comfort and timing matter. We help plan the route and the pickup schedule around your travel needs.'
          ]
        },
        {
          heading: 'Booking process for outstation travel',
          content: [
            'Send your pickup date, destination, trip type and preferred vehicle details. We will confirm the trip and help align a clear pickup and drop plan for your outstation journey.',
            'This works well for one-way travel as well as return bookings when your trip requires a round-trip cab from Bangalore.'
          ]
        }
      ]}
      faqs={[
        { q: 'Do you provide one-way outstation cabs from Bangalore?', a: 'Yes. We support one-way and round-trip outstation travel from Bangalore depending on your route and schedule.' },
        { q: 'Can I book a round-trip taxi?', a: 'Yes. We can help with round-trip cab bookings when your travel plan includes a return journey from the destination back to Bangalore.' },
        { q: 'Which destinations can I travel to from Bangalore?', a: 'Popular routes include Mysore, Coorg, Chikmagalur, Ooty and other intercity destinations across Karnataka and nearby regions.' }
      ]}
      ctaLabel="Plan Your Outstation Trip"
      ctaHref="https://wa.me/919113052138?text=I%20need%20an%20outstation%20cab%20from%20Bangalore"
      relatedLinks={[
        { href: '/round-trip-cab-bangalore', label: 'Round-Trip Cab' },
        { href: '/one-way-cab-bangalore', label: 'One-Way Cab' },
        { href: '/contact', label: 'Contact Us' }
      ]}
    />
  );
}

function OneWayCabPage() {
  return (
    <ServiceLandingPage
      title="One-Way Cab Service from Bangalore"
      intro="If you need a one-way cab from Bangalore, LnT Travels offers a practical option for intercity or city-to-city travel without the need to arrange a return trip at the same time."
      highlights={[
        'Flexible one-way trip options',
        'Experienced drivers for long-distance travel',
        'Clear trip coordination before departure'
      ]}
      sections={[
        {
          heading: 'When one-way travel makes sense',
          content: [
            'A one-way cab is helpful when you are travelling to another city, visiting family, or planning a business move without a return booking. It keeps the trip simple and avoids scheduling a round trip in advance.',
            'We support travel plans that need a single journey from Bangalore to a chosen destination with professional drivers and dependable service.'
          ]
        },
        {
          heading: 'Popular one-way routes',
          content: [
            'One-way travel usually fits routes that are planned well in advance, including outstation journeys and selected intercity bookings. We can coordinate your one-way trip based on destination, travel date and passenger needs.',
            'Transparent pricing and clear communication help keep the trip straightforward from pickup to drop.'
          ]
        },
        {
          heading: 'Vehicle and booking support',
          content: [
            'Choose a vehicle based on your group size, luggage and comfort preference. We typically offer a suitable set of sedan, hatchback and SUV options depending on the route and travel plan.',
            'If you are planning a one-way trip, send the pickup, drop, date and preferred vehicle type and we will confirm the ride details.'
          ]
        }
      ]}
      faqs={[
        { q: 'Can I book a one-way cab from Bangalore?', a: 'Yes. We support one-way cab bookings for travel plans that need a single journey from Bangalore to another destination.' },
        { q: 'Which vehicles are available?', a: 'Vehicle options vary with the route and passenger requirements. We usually offer sedan, hatchback and SUV choices based on comfort, luggage and trip type.' },
        { q: 'How can I book?', a: 'You can contact us by phone, WhatsApp, or the booking enquiry form to share your trip details and confirm your one-way cab.' }
      ]}
      ctaLabel="Book a One-Way Cab"
      ctaHref="https://wa.me/919113052138?text=I%20need%20a%20one-way%20cab%20from%20Bangalore"
      relatedLinks={[
        { href: '/airport-taxi-bangalore', label: 'Airport Taxi' },
        { href: '/round-trip-cab-bangalore', label: 'Round-Trip Cab' },
        { href: '/contact', label: 'Contact Us' }
      ]}
    />
  );
}

function LocalCabPage() {
  return (
    <ServiceLandingPage
      title="Local Cab Service in Bangalore"
      intro="LnT Travels offers local cab service in Bangalore for city travel, daily movement, business commutes, family rides and trips around the city. We keep the process simple, reliable and punctual."
      highlights={[
        'City rides across Bangalore',
        'Daily commute and family travel support',
        'Professional and punctual drivers'
      ]}
      sections={[
        {
          heading: 'Local city travel made easy',
          content: [
            'If you are moving around Bangalore for work, appointments, shopping or family plans, a local cab helps reduce travel stress and keeps the journey on schedule.',
            'We support city rides across central areas, residential neighborhoods and major business zones depending on your pickup and drop points.'
          ]
        },
        {
          heading: 'Areas we serve',
          content: [
            'Our local city cab service is useful for places such as Jayanagar, HSR Layout, Whitefield, Indiranagar, Koramangala, Rajajinagar, Yeshwanthpur, Kengeri, Electronic City, Krishnarajapuram and Majestic.',
            'If your pickup point is outside the usual route, you can still contact us to confirm availability for your travel plan.'
          ]
        },
        {
          heading: 'Booking and trip support',
          content: [
            'When you need a local cab in Bangalore, share your pickup, destination, date, time and preferred vehicle type. We confirm the booking and coordinate the trip quickly.',
            'This makes it easier to plan daily travel, appointments and short city rides without the uncertainty of waiting or last-minute arrangements.'
          ]
        }
      ]}
      faqs={[
        { q: 'Do you provide local cab services in Bangalore?', a: 'Yes. We provide local cab service across Bangalore for city rides, appointments and day-to-day travel needs.' },
        { q: 'Can I book a cab for city travel?', a: 'Yes. You can request a local cab by phone or WhatsApp with your pickup, drop and travel time, and we will confirm the ride.' },
        { q: 'Which areas do you serve?', a: 'We cover major areas in Bangalore, including Whitefield, Indiranagar, Koramangala, HSR Layout, Electronic City and central city locations.' }
      ]}
      ctaLabel="Book a Local Cab"
      ctaHref="https://wa.me/919113052138?text=I%20need%20a%20local%20cab%20in%20Bangalore"
      relatedLinks={[
        { href: '/airport-taxi-bangalore', label: 'Airport Taxi' },
        { href: '/corporate-cab-service', label: 'Corporate Travel' },
        { href: '/contact', label: 'Contact Us' }
      ]}
    />
  );
}

function RoundTripCabPage() {
  return (
    <ServiceLandingPage
      title="Round Trip Cab Service from Bangalore"
      intro="A round trip cab from Bangalore is useful for planned outstation travel, return journeys and time-bound trips where a return booking is needed. LnT Travels helps coordinate the pickup and return schedule."
      highlights={[
        'Return journey support',
        'Ideal for family and outstation travel',
        'Comfortable ride with planned timing'
      ]}
      sections={[
        {
          heading: 'Who usually books a return cab?',
          content: [
            'Round-trip bookings are often used for family travel, business trips and outstation visits where the return date is already known. This makes the trip simpler because the same vehicle and driver can be planned for both journeys.',
            'It is especially helpful when you want a predictable travel plan and clearer coordination for the return route.'
          ]
        },
        {
          heading: 'Comfort and planning',
          content: [
            'For round-trip travel, timing matters. We help plan the pickup and return slot based on your departure, stay duration and route details so the trip remains comfortable and efficient.',
            'This is a practical choice for longer travel schedules where you want dependable transport both ways.'
          ]
        },
        {
          heading: 'How to book',
          content: [
            'Share the destination, travel dates, expected return date and preferred vehicle type. Once the route is confirmed, we can help align the trip plan and handle the booking details smoothly.',
            'The booking process is designed to keep the journey clear, comfortable and easy to manage.'
          ]
        }
      ]}
      faqs={[
        { q: 'Can I book a round-trip taxi from Bangalore?', a: 'Yes. We support round-trip cab bookings for destinations where your return journey to Bangalore is already planned.' },
        { q: 'What is a round-trip cab best for?', a: 'It is useful for outstation trips, family travel and other planned journeys where you need the vehicle for both onward and return travel.' },
        { q: 'How can I confirm my round-trip booking?', a: 'Share your route, dates, passengers and vehicle preference, and we will confirm the travel plan with you before the trip begins.' }
      ]}
      ctaLabel="Book a Round-Trip Cab"
      ctaHref="https://wa.me/919113052138?text=I%20need%20a%20round-trip%20cab%20from%20Bangalore"
      relatedLinks={[
        { href: '/outstation-cab-bangalore', label: 'Outstation Cab' },
        { href: '/one-way-cab-bangalore', label: 'One-Way Cab' },
        { href: '/contact', label: 'Contact Us' }
      ]}
    />
  );
}

function CorporateCabPage() {
  return (
    <ServiceLandingPage
      title="Corporate Cab Service in Bangalore"
      intro="LnT Travels supports business travel in Bangalore with dependable corporate transportation for employee commutes, client visits, airport transfers and scheduled business trips."
      highlights={[
        'Professional travel for teams and executives',
        'Airport and client transfer support',
        'Advance booking for regular business travel'
      ]}
      sections={[
        {
          heading: 'Business travel built around reliability',
          content: [
            'Corporate travel needs punctuality, clear coordination and professional drivers. We provide cab service for employee pickups, client transport and airport transfers across Bangalore.',
            'Whether it is a single business trip or a recurring schedule, our service is designed to be dependable and easy to coordinate.'
          ]
        },
        {
          heading: 'Airport transfers and executive travel',
          content: [
            'We support airport transfers for employees, guests and visiting professionals. The vehicle can be selected based on the group size, luggage and travel schedule so the journey remains comfortable and timely.',
            'This is useful for business teams that need a consistent travel partner with a professional approach.'
          ]
        },
        {
          heading: 'Advance bookings and fleet flexibility',
          content: [
            'Businesses often prefer advance booking because it helps schedule travel better and keeps the service consistent. We can coordinate corporate bookings with clear communication before the trip starts.',
            'We also support recurring business travel needs across Bangalore, including local rides and intercity bookings depending on the requirement.'
          ]
        }
      ]}
      faqs={[
        { q: 'Do you provide corporate transportation in Bangalore?', a: 'Yes. We provide corporate cab service in Bangalore for employee travel, client transfers, executive rides and airport transfers.' },
        { q: 'Can businesses schedule advance bookings?', a: 'Yes. Advance planning is suitable for recurring business travel and scheduled employee movement, especially for airport transfers and team mobility.' },
        { q: 'Do you provide airport transfers for business travellers?', a: 'Yes. Airport transfers are part of our corporate travel support and can be arranged ahead of time for a smooth business trip.' }
      ]}
      ctaLabel="Request a Corporate Quote"
      ctaHref="https://wa.me/919113052138?text=I%20need%20a%20corporate%20cab%20service%20in%20Bangalore"
      relatedLinks={[
        { href: '/airport-taxi-bangalore', label: 'Airport Taxi' },
        { href: '/local-cab-bangalore', label: 'Local Cab' },
        { href: '/contact', label: 'Contact Us' }
      ]}
    />
  );
}

function AboutRoutePage() {
  return (
    <ServiceLandingPage
      title="About LnT Travels"
      intro="LnT Travels is a Bangalore-based cab service focused on safe, reliable and comfortable travel for airport transfers, local rides, business travel and outstation journeys."
      highlights={[
        'Bangalore-focused cab service',
        'Professional drivers and clean vehicles',
        'Transparent communication and trip coordination'
      ]}
      sections={[
        {
          heading: 'What we provide',
          content: [
            'We support airport taxi service, local city rides, one-way and round-trip journeys, outstation travel and corporate transport across Bengaluru and nearby routes.',
            'Our goal is to make travel feel predictable and comfortable, whether it is a quick local trip or a planned intercity journey.'
          ]
        },
        {
          heading: 'Our service philosophy',
          content: [
            'We focus on punctual pick-ups, safe driving, transparent communication and a professional customer experience from booking through arrival.',
            'That approach matters for airport drops, business travel and family trips where reliability and comfort are the priority.'
          ]
        },
        {
          heading: 'Bangalore operations',
          content: [
            'LnT Travels operates across Bengaluru and surrounding areas, helping customers move around the city and beyond with dependable cab service.',
            'From local city travel to business schedules and outstation trips, we aim to provide service that feels straightforward and stress-free.'
          ]
        }
      ]}
      faqs={[
        { q: 'What does LnT Travels provide?', a: 'We provide airport transfers, local cab service, one-way travel, round-trip bookings, outstation cabs and corporate transportation in and around Bangalore.' },
        { q: 'Why choose LnT Travels?', a: 'We focus on comfort, punctuality, professional drivers and customer communication across city and intercity travel scenarios.' },
        { q: 'How do I book?', a: 'You can contact us by phone, WhatsApp, or use the booking enquiry form for your trip details and a quick confirmation.' }
      ]}
      ctaLabel="Book a Ride"
      ctaHref="https://wa.me/919113052138?text=I%20want%20to%20book%20a%20cab%20with%20LnT%20Travels"
      relatedLinks={[
        { href: '/airport-taxi-bangalore', label: 'Airport Taxi' },
        { href: '/local-cab-bangalore', label: 'Local Cab' },
        { href: '/contact', label: 'Contact us' }
      ]}
    />
  );
}

function ContactPage() {
  return (
    <section className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-max">
        <div className="mx-auto max-w-5xl rounded-[30px] border border-[#E5E7EB] bg-white p-6 md:p-8 lg:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <p className="section-label">Contact</p>
          <h1 className="font-heading font-bold mb-4 text-[#0F172A]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.5px' }}>Contact LnT Travels</h1>
          <p className="mb-8 text-base leading-relaxed" style={{ color: '#475569' }}>
            Book a cab in Bangalore with LnT Travels by phone, WhatsApp or through the trip enquiry form. We help with airport trips, local rides, one-way travel and corporate bookings.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-5">
              <h2 className="font-heading font-bold mb-3 text-[#0F172A]" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)' }}>Call or WhatsApp</h2>
              <ul className="space-y-3 text-sm" style={{ color: '#475569' }}>
                <li><strong className="text-[#0F172A]">Phone:</strong> <a href="tel:+919113052138" style={{ color: '#0F172A' }}>+91 91130 52138</a></li>
                <li><strong className="text-[#0F172A]">WhatsApp:</strong> <a href="https://wa.me/919113052138" target="_blank" rel="noopener noreferrer" style={{ color: '#0F172A' }}>Chat with LnT Travels</a></li>
                <li><strong className="text-[#0F172A]">Service area:</strong> Bengaluru, Karnataka, India</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-5">
              <h2 className="font-heading font-bold mb-3 text-[#0F172A]" style={{ fontSize: 'clamp(1.3rem, 2vw, 1.8rem)' }}>Book a ride</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#475569' }}>
                Share your pickup, drop location, date, time and travel type and we will confirm availability and the best cab option for your trip.
              </p>
              <a href="https://wa.me/919113052138?text=Hello%20LnT%20Travels%2C%20I%20want%20to%20book%20a%20cab" target="_blank" rel="noopener noreferrer" className="btn-orange inline-flex items-center justify-center">Book via WhatsApp</a>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-[#E5E7EB]" style={{ minHeight: '280px' }}>
            <iframe
              title="LnT Travels service area in Bangalore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9973874144!2d77.35073573648395!3d12.95394819772678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    return getRouteFromLocation(window.location);
  });

  useEffect(() => {
    const handleRouteChange = () => setRoute(getRouteFromLocation(window.location));
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    setPageMetadata(route);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case 'airport-taxi-bangalore':
        return <AirportTaxiPage />;
      case 'outstation-cab-bangalore':
        return <OutstationCabPage />;
      case 'one-way-cab-bangalore':
        return <OneWayCabPage />;
      case 'local-cab-bangalore':
        return <LocalCabPage />;
      case 'round-trip-cab-bangalore':
        return <RoundTripCabPage />;
      case 'corporate-cab-service':
        return <CorporateCabPage />;
      case 'about':
        return <AboutRoutePage />;
      case 'contact':
        return <ContactPage />;
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
