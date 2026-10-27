import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function CarsHero() {
  return (
    <div className="relative bg-slate-950 text-white pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-slate-900">
      {/* Background Car Image with Cinematic Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/egf3yql9/image/upload/v1793098915/01.jpg"
          alt="DriveIT Premium Cars Fleet"
          className="w-full h-full object-cover object-center pointer-events-none brightness-90 scale-105 transition-transform duration-1000"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Multi-layer Dark Gradient for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <nav className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 mb-4 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-red-400 font-bold">Cars Fleet</span>
        </nav>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
          Our Premium{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
            Self-Drive Cars
          </span>
        </h1>

        <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
          Choose from over 20+ hatchbacks, sedans, 7-seaters, and authentic 4x4 SUVs. All cars are sanitized, commercially permitted, and backed by 24/7 roadside assistance.
        </p>
      </div>
    </div>
  );
}
