import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

import TextReveal from '../common/TextReveal';

export default function HowItWorks() {
  return (
    <section
      aria-label="Scenic Roadtrip Showcase"
      className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[680px] bg-fixed bg-center bg-cover bg-no-repeat overflow-hidden flex items-center justify-start text-left"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/egf3yql9/image/upload/v1793101384/mycar.jpg')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Directional gradient overlay: dark on left for text clarity, clear on right for car & landscape */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(2, 6, 23, 0.92) 0%, rgba(2, 6, 23, 0.70) 28%, rgba(2, 6, 23, 0.20) 55%, rgba(2, 6, 23, 0.05) 100%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/40 pointer-events-none" />

      {/* Side-Aligned Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 w-full py-12 sm:py-20">

        <div className="reveal-left max-w-md sm:max-w-lg text-left">

          {/* Modern Glass Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-xl mb-3 sm:mb-5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Unlimited KMs Freedom</span>
          </div>

          <TextReveal
            text="CHASE THE OPEN ROAD."
            highlight="ROAD."
            highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-black"
            as="h2"
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08] sm:leading-[1.05] drop-shadow-2xl"
          />

          {/* Sleek Subtext */}
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm lg:text-base text-slate-200/90 font-medium max-w-md leading-relaxed drop-shadow-md">
            From coastal Puri beach drives to scenic mountain retreats. Premium sanitized self-drive cars delivered right to your doorstep across Odisha.
          </p>

          {/* Action Button */}
          <div className="mt-6 sm:mt-8">
            <Link
              to="/book"
              className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-red-800 via-red-700 to-rose-900 hover:from-red-900 hover:via-red-800 hover:to-rose-950 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-2xl shadow-black/60 border border-red-500/30 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>Start Your Roadtrip</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
