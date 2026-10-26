import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { carsData, carCategories } from '../../data/carsData';
import CarCard from '../common/CarCard';

import TextReveal from '../common/TextReveal';

export default function FeaturedFleet({ onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCars = selectedCategory === 'All'
    ? carsData.slice(0, 8)
    : carsData.filter((car) => car.category === selectedCategory).slice(0, 8);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Big Bold Modern Typography */}
        <div className="reveal-textbox flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>50+ SANITIZED VEHICLES</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[0.98]">
              FLEET SHOWROOM.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-500">
                BHUBANESWAR'S FINEST.
              </span>
            </h2>

            <p className="text-slate-600 mt-2 text-sm sm:text-base font-bold">
              Zero Deposit Options • Unlimited KMs • BBI Airport Delivery
            </p>
          </div>

          <Link
            to="/cars"
            className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 group shrink-0"
          >
            <span>Explore All 20+ Vehicles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Pills */}
        <div className="reveal-on-scroll delay-100 flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {carCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Fleet' : cat}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="reveal-on-scroll delay-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onQuickView={onQuickView} />
          ))}
        </div>

        {/* View all fleet banner button */}
        <div className="reveal-scale delay-200 mt-14 text-center">
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-red-600 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 text-sm sm:text-base"
          >
            <Car className="w-5 h-5" />
            <span>View Full Fleet & Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
