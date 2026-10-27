import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Car } from 'lucide-react';

export default function ServicesHero() {
  return (
    <div className="relative text-white pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden bg-slate-950">
      
      {/* Background Car Image - Subtle overlay, car in photo clearly visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/egf3yql9/image/upload/v1793099854/slider-3.jpg"
          alt="DriveIT Rental Services"
          className="w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Minimal Breadcrumb */}
        <nav className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs mb-3">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-red-400 font-bold">Services</span>
        </nav>

        {/* Short Punchy Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Our <span className="text-red-500">Services</span>
        </h1>

        {/* 1-Line Clean Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-medium leading-relaxed">
          Airport pickup, outstation trips to Puri & Konark, wedding packages, and corporate self-drive in Bhubaneswar.
        </p>

        {/* Clean Buttons */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95"
          >
            <span>Book Service</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm rounded-xl backdrop-blur-xs transition-all active:scale-95"
          >
            <Car className="w-4 h-4" />
            <span>View Fleet</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
