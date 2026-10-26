import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, ArrowRight, Zap } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';
import TextReveal from '../common/TextReveal';

export default function CtaBanner() {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-7 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Neon Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-red-600/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-rose-600/25 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Big Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-[11px] sm:text-xs font-black uppercase tracking-widest backdrop-blur-md">
                <Zap className="w-3.5 h-3.5 animate-pulse" />
                <span>INSTANT 2-MIN BOOKING</span>
              </div>

              {/* MODERN BIG BOLD HEADLINE */}
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[0.98] drop-shadow-xl">
                HIT THE ROAD.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-300">
                  ZERO DEPOSIT.
                </span>
              </h2>

              {/* Minimal 1-Line Punchy Subtext */}
              <p className="text-slate-300 text-sm sm:text-base md:text-lg font-bold tracking-wide">
                BBI Airport • Puri • Konark • Unlimited KMs • 60-Min Delivery
              </p>

              {/* Big Modern Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/book"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-red-600/30 active:scale-95 transition-all flex items-center gap-2.5 group"
                >
                  <Car className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Book Your Car</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20want%20to%20book%20a%20car"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl transition-all active:scale-95 flex items-center gap-2 backdrop-blur-md"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:+917008732102"
                  className="px-6 py-4 bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-xs sm:text-sm rounded-2xl transition-colors backdrop-blur-md border border-white/10 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-400" />
                  <span>Call 24/7</span>
                </a>
              </div>

            </div>

            {/* Seamless Transparent Vehicle Visual on Right */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-red-600/30 blur-2xl rounded-full pointer-events-none" />
                
                <img
                  src="/assets/img/car/mahindra-thar.png"
                  alt="Mahindra Thar 4x4"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl relative z-10"
                  loading="lazy"
                />

                <div className="mt-3 text-center">
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-slate-300 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
                    Mahindra Thar 4x4 • Starts ₹4,399/day
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
