import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function CarsHero() {
  return (
    <div className="relative bg-slate-950 text-white pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden border-b border-slate-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <nav className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4 bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-800">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-red-400">Cars Fleet</span>
        </nav>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Our Premium{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
            Self-Drive Cars
          </span>
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Choose from over 20+ hatchbacks, sedans, 7-seaters, and authentic 4x4 SUVs. All cars are sanitized, commercially permitted, and backed by 24/7 roadside assistance.
        </p>
      </div>
    </div>
  );
}
