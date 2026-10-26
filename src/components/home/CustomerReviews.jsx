import React from 'react';
import { Star, ShieldCheck, ThumbsUp, MessageSquare } from 'lucide-react';
import { reviewsData } from '../../data/reviewsData';
import CarouselStacked from '../ui/carousel-07';
import TextReveal from '../common/TextReveal';

export default function CustomerReviews() {
  const reviewSlides = reviewsData.map((r, idx) => ({
    image: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80', // SUV roadtrip
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80', // Sports drive
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80', // Luxury drive
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80', // Highway trip
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80', // Red road car
    ][idx % 5],
    title: r.name,
    role: r.role,
    description: r.comment,
    badge: `${r.rating}.0 ★ Google Review`,
    rating: r.rating,
  }));

  return (
    <section className="relative z-10 isolate py-20 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-reveal-scroll text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>4.9 / 5 Rating • 1,200+ Verified Google Reviews</span>
          </div>
          
          <TextReveal
            text="Loved By 10,000+ Drivers in Bhubaneswar"
            highlight="10,000+"
            as="h2"
            className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
          />
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Swipe through real roadtrip stories from travelers, families, and professionals who experienced total freedom with DriveIT.
          </p>
        </div>

        {/* 3D Stacked Carousel Component from 21st.dev */}
        <div className="reveal-on-scroll delay-150 w-full">
          <CarouselStacked slides={reviewSlides} />
        </div>

        {/* Trust Badges Footer */}
        <div className="reveal-on-scroll delay-200 mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm text-slate-600 font-semibold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Verified Customer Feedback</span>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-red-600" />
            <span>Zero Security Deposit Transparency</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>24/7 WhatsApp Support Assistance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
