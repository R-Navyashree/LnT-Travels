import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';

const reviews = [
  {
    id: 1,
    name: 'Ravi Kumar',
    location: 'Bangalore',
    rating: 5,
    text: 'Absolutely brilliant service! The driver was punctual, polite, and the car was spotlessly clean. Booked via WhatsApp and it was confirmed in minutes. Highly recommended!',
    avatar: 'https://i.pravatar.cc/80?img=11',
    trip: 'Airport Drop',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Chennai',
    rating: 5,
    text: 'Used LnT Travels for our Ooty trip. The driver knew all the best routes and scenic stops. The car was comfortable and pricing was very transparent. Will definitely book again!',
    avatar: 'https://i.pravatar.cc/80?img=5',
    trip: 'Outstation Trip',
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    location: 'Hyderabad',
    rating: 5,
    text: "Best cab service I've used! No extra charges, on-time pickup, and a very friendly driver. The WhatsApp booking was super easy. LnT Travels is now my go-to for all travels.",
    avatar: 'https://i.pravatar.cc/80?img=33',
    trip: 'Local Rental',
  },
  {
    id: 4,
    name: 'Meera Reddy',
    location: 'Mysore',
    rating: 5,
    text: 'Excellent experience from start to finish. Booked a one-way to Bangalore and the driver arrived 10 minutes early! Comfortable ride, fair price. 5 stars without hesitation.',
    avatar: 'https://i.pravatar.cc/80?img=9',
    trip: 'One Way Trip',
  },
  {
    id: 5,
    name: 'Suresh Nair',
    location: 'Kochi',
    rating: 5,
    text: 'My family of 5 needed an outstation trip to Coorg. LnT Travels provided a clean, spacious Innova at a great price. The driver was experienced and safety-conscious. Amazing!',
    avatar: 'https://i.pravatar.cc/80?img=44',
    trip: 'Outstation Trip',
  },
  {
    id: 6,
    name: 'Ananya Singh',
    location: 'Pune',
    rating: 5,
    text: "I use LnT Travels for all my airport transfers and I've never been disappointed. They even track my flight and adjust timing if delayed. That's true professional service!",
    avatar: 'https://i.pravatar.cc/80?img=16',
    trip: 'Airport Pickup',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          size={14}
          style={{ color: i < rating ? '#FBBF24' : '#E5E7EB' }}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, visible, delay }) {
  return (
    <div className={`reveal ${visible ? 'visible' : ''} delay-${delay}`}>
      <div
        className="h-full flex flex-col p-6 rounded-2xl bg-white transition-all duration-300"
        style={{
          border: '1px solid #F1F5F9',
          boxShadow: '0 1px 3px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(15,23,42,0.1)';
          e.currentTarget.style.borderColor = 'rgba(251,191,36,0.2)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(15,23,42,0.06), 0 4px 16px rgba(15,23,42,0.04)';
          e.currentTarget.style.borderColor = '#F1F5F9';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Quote icon */}
        <FaQuoteLeft size={20} style={{ color: 'rgba(251,191,36,0.15)', marginBottom: '12px' }} />

        {/* Stars */}
        <StarRating rating={review.rating} />

        {/* Trip badge */}
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mt-3 mb-3 self-start"
          style={{ background: 'rgba(251,191,36,0.08)', color: '#F59E0B', border: '1px solid rgba(251,191,36,0.15)' }}
        >
          {review.trip}
        </span>

        {/* Review text */}
        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#64748B', lineHeight: '1.75' }}>
          "{review.text}"
        </p>

        {/* Author */}
        <div
          className="flex items-center gap-3 pt-4"
          style={{ borderTop: '1px solid #F1F5F9' }}
        >
          <img
            src={review.avatar}
            alt={review.name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            style={{ border: '2px solid rgba(251,191,36,0.2)' }}
          />
          <div>
            <div className="font-heading font-semibold text-sm" style={{ color: '#0F172A' }}>
              {review.name}
            </div>
            <div className="text-xs" style={{ color: '#94A3B8' }}>
              {review.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { ref, visible } = useReveal();

  return (
    <section id="reviews" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-pill">Testimonials</span>
          <h2 className="section-title">
            What Our Customers{' '}
            <span className="orange-gradient">Are Saying</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Hundreds of happy passengers trust LnT Travels for their daily and outstation travels.
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={18} style={{ color: '#FBBF24' }} />
              ))}
            </div>
            <span className="font-heading font-bold text-2xl" style={{ color: '#0F172A' }}>4.9</span>
            <span className="text-sm" style={{ color: '#64748B' }}>based on 500+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.id}
              review={review}
              visible={visible}
              delay={(i + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
