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
    text: 'Used SwiftCab for our Ooty trip. The driver knew all the best routes and scenic stops. The car was comfortable and pricing was very transparent. Will definitely book again!',
    avatar: 'https://i.pravatar.cc/80?img=5',
    trip: 'Outstation Trip',
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    location: 'Hyderabad',
    rating: 5,
    text: "Best cab service I've used! No extra charges, on-time pickup, and a very friendly driver. The WhatsApp booking was super easy. SwiftCab is now my go-to for all travels.",
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
    text: 'My family of 5 needed an outstation trip to Coorg. SwiftCab provided a clean, spacious Innova at a great price. The driver was experienced and safety-conscious. Amazing!',
    avatar: 'https://i.pravatar.cc/80?img=44',
    trip: 'Outstation Trip',
  },
  {
    id: 6,
    name: 'Ananya Singh',
    location: 'Pune',
    rating: 5,
    text: "I use SwiftCab for all my airport transfers and I've never been disappointed. They even track my flight and adjust timing if delayed. That's true professional service!",
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
          className={i < rating ? 'text-accent-400' : 'text-dark-600'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, visible, delay }) {
  return (
    <div className={`reveal ${visible ? 'visible' : ''} delay-${delay}`}>
      <div className="card-premium h-full flex flex-col">
        {/* Quote */}
        <FaQuoteLeft className="text-accent-400/20 text-3xl mb-4" />

        {/* Stars */}
        <StarRating rating={review.rating} />

        {/* Trip badge */}
        <span className="inline-block bg-accent-400/10 border border-accent-400/20 text-accent-400 text-xs font-semibold px-3 py-1 rounded-full mt-3 mb-3 self-start">
          {review.trip}
        </span>

        {/* Text */}
        <p className="text-dark-300 text-sm leading-relaxed flex-1 mb-5">
          "{review.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 border-t border-white/5 pt-4">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-accent-400/30"
          />
          <div>
            <div className="font-semibold text-white text-sm">{review.name}</div>
            <div className="text-dark-400 text-xs">{review.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { ref, visible } = useReveal();

  return (
    <section id="reviews" className="section-padding bg-dark-alt">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-pill">Testimonials</span>
          <h2 className="section-title">
            What Our Customers<br />
            <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Over 10,000 happy passengers trust SwiftCab for their daily and outstation travels.
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-accent-400 text-xl" />
              ))}
            </div>
            <span className="font-heading font-bold text-2xl text-white">4.9</span>
            <span className="text-dark-300 text-sm">based on 500+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
