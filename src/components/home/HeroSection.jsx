import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowRight } from 'lucide-react';

import TextReveal from '../common/TextReveal';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-[96vh] lg:min-h-screen flex items-start sm:items-center overflow-hidden bg-slate-950 text-white">

      {/* Background Car Cinematic Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover sm:object-[60%_center] scale-105 pointer-events-none brightness-90 contrast-105"
        poster="https://res.cloudinary.com/egf3yql9/image/upload/v1793099904/slider-1.jpg"
      >
        <source src="https://res.cloudinary.com/egf3yql9/video/upload/v1793100268/16760503_1440_2560_60fps.mp4" type="video/mp4" />
      
      </video>

      {/* Cinematic Seamless Gradient - Full width, smooth natural fade */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(2, 6, 23, 0.96) 0%, rgba(2, 6, 23, 0.88) 35%, rgba(2, 6, 23, 0.5) 60%, rgba(2, 6, 23, 0.2) 80%, rgba(2, 6, 23, 1) 100%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(2, 6, 23, 0.4) 0%, rgba(2, 6, 23, 0) 30%, rgba(2, 6, 23, 0) 70%, rgba(2, 6, 23, 0.85) 100%)'
        }}
      />

      {/* Content Container - Side / Left Aligned Modern Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 xs:pt-36 sm:pt-32 lg:pt-36 pb-16 sm:pb-24">

        <div className="text-reveal-scroll max-w-2xl text-left">

          {/* Modern Tech Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 text-slate-200 text-[10px] sm:text-xs font-semibold tracking-wider uppercase shadow-2xl mb-4 sm:mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="tracking-widest font-bold text-white/95">
              DriveIT • Self Drive Bhubaneswar
            </span>
          </div>

          {/* Modern Automotive Headline with Staggered Word Reveal */}
          <TextReveal
            text="DRIVE YOUR FREEDOM."
            highlight="FREEDOM."
            highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-300 font-black"
            as="h1"
            className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.1] sm:leading-[1.08] drop-shadow-2xl"
          />

          {/* Sleek Subtext with ample breathing space */}
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm lg:text-base text-slate-300/90 max-w-lg font-medium leading-relaxed drop-shadow-md">
            Premium sanitized cars delivered to your doorstep. Zero security deposit options, unlimited KMs, and 24/7 instant airport delivery.
          </p>

          {/* Modern Action Buttons - Brought down comfortably for easy mobile tapping */}
          <div className="mt-12 xs:mt-16 sm:mt-18 lg:mt-20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none">
            <Link
              to="/book"
              className="btn-glow inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl transition-all duration-300 active:scale-95 group text-center whitespace-nowrap"
            >
              <Car className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span>Book A Car Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>

            <Link
              to="/cars"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 hover:border-white/35 text-white font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 active:scale-95 text-center whitespace-nowrap"
            >
              <span>Explore Fleet</span>
            </Link>
          </div>

          {/* Modern Highlights Glass Chips - Clean Horizontal Row on mobile */}
          <div className="mt-6 pt-4 sm:mt-8 sm:pt-6 border-t border-white/15 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scrollbar-none flex-nowrap text-[10px] sm:text-xs text-slate-300">
            <div className="shrink-0 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 shadow-xs whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-semibold text-white">BBI Airport Delivery</span>
            </div>
            <div className="shrink-0 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 shadow-xs whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-semibold text-white">Zero Deposit Available</span>
            </div>
            <div className="shrink-0 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 shadow-xs whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="font-semibold text-white">Unlimited KMs Freedom</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom fade transition to quick booking bar */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none z-10" />
    </section>
  );
}
