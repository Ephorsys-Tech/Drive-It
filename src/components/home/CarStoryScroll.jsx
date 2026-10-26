import React from 'react';
import { Link } from 'react-router-dom';
import FlowArt, { FlowSection } from '../ui/story-scroll';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Phone, Compass, Users } from 'lucide-react';

export default function CarStoryScroll() {
  return (
    <FlowArt aria-label="DriveIT Automotive Story Scroll" className="relative z-20">
      
      {/* 01: MAHINDRA THAR 4x4 */}
      <FlowSection
        aria-label="Mahindra Thar 4x4"
        style={{ backgroundColor: '#991b1b', color: '#ffffff' }}
        className="text-white"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/20 pb-2.5 sm:pb-3.5">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping" />
            <span>01 • 4x4 Off-Road</span>
          </span>
          <span className="text-xs sm:text-sm font-extrabold bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
            From ₹4,399/day
          </span>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center my-auto py-3 sm:py-6">
          
          {/* Text Left - BIGGER & BOLDER */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-amber-300 text-xs sm:text-sm font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Iconic Self-Drive SUV</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight uppercase">
              Drive Any Road,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-100">
                Any Time.
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-100 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Mahindra Thar 4x4 & 5-door Roxx for off-road trails, beaches, and city drives.
            </p>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3.5 flex-wrap">
              <Link
                to="/book?car=mahindra-thar"
                className="px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-red-700 hover:bg-slate-100 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all active:scale-95 flex items-center gap-2 group"
              >
                <span>Reserve Thar 4x4</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/cars?category=SUV"
                className="px-5 py-3 sm:px-6 sm:py-3.5 bg-red-800/80 hover:bg-red-900 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
              >
                View SUVs
              </Link>
            </div>
          </div>

          {/* Car Showcase Right */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
              <img
                src="/assets/img/car/mahindra-thar.png"
                alt="Mahindra Thar 4x4"
                className="max-h-36 sm:max-h-52 md:max-h-64 lg:max-h-72 w-auto mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />

              <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-red-200">
                <span className="bg-black/40 px-3 py-1 rounded-lg backdrop-blur-xs font-bold text-white">4x4 High/Low</span>
                <span className="bg-black/40 px-3 py-1 rounded-lg backdrop-blur-xs font-bold text-white">Auto & Manual</span>
                <span className="bg-black/40 px-3 py-1 rounded-lg backdrop-blur-xs font-bold text-white">Hard Top</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Highlights Bar */}
        <div className="border-t border-white/20 pt-2.5 sm:pt-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm text-red-200 font-bold overflow-x-auto scrollbar-none">
          <span className="shrink-0 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Zero Deposit</span>
          </span>
          <span className="shrink-0 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-amber-300" />
            <span>Fastag Ready</span>
          </span>
          <span className="shrink-0 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Free Airport Handover 24/7</span>
          </span>
        </div>
      </FlowSection>

      {/* 02: 7-SEATER FAMILY MUSCLE */}
      <FlowSection
        aria-label="7-Seater Family Luxury"
        style={{ backgroundColor: '#070a12', color: '#ffffff' }}
        className="text-white"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 sm:pb-3.5">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span>02 • 7-Seater Luxury</span>
          </span>
          <span className="text-xs sm:text-sm font-extrabold bg-white/10 px-3 py-1 rounded-full text-slate-300">
            From ₹2,799/day
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center my-auto py-3 sm:py-6">
          
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-red-400 text-xs sm:text-sm font-black uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Full Family Comfort</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight uppercase">
              Supreme Family
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                Comfort.
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Spacious 7-seater cabins with dual AC and big luggage space in Scorpio-N & Ertiga.
            </p>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3.5 flex-wrap">
              <Link
                to="/book?car=scorpio-n"
                className="px-6 py-3 sm:px-7 sm:py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all active:scale-95 flex items-center gap-2 group"
              >
                <span>Book Scorpio-N</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/book?car=maruti-ertiga"
                className="px-5 py-3 sm:px-6 sm:py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
              >
                Ertiga (₹2,799/d)
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
              <img
                src="/assets/img/car/suzuki-ertiga.png"
                alt="7-Seater Family Car"
                className="max-h-36 sm:max-h-52 md:max-h-64 lg:max-h-72 w-auto mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />

              <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
                <span className="bg-white/10 px-3 py-1 rounded-lg font-bold text-white">7 Executive Seats</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg font-bold text-white">Roof AC Vents</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg font-bold text-white">4 Large Bags</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-2.5 sm:pt-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-400 font-bold overflow-x-auto scrollbar-none">
          <span className="shrink-0">• Puri, Konark & Chilika Special</span>
          <span className="shrink-0">• Sanitized Upholstery</span>
          <span className="shrink-0">• Automated Fastag Toll</span>
        </div>
      </FlowSection>

      {/* 03: 5-STAR SAFETY & HIGH MILEAGE */}
      <FlowSection
        aria-label="5-Star Safety & City Mileage"
        style={{ backgroundColor: '#0f172a', color: '#ffffff' }}
        className="text-white"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 sm:pb-3.5">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>03 • Safety & Mileage</span>
          </span>
          <span className="text-xs sm:text-sm font-extrabold bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full">
            Up to 23+ km/l
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center my-auto py-3 sm:py-6">
          
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>5-Star GNCAP Rating</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight uppercase">
              Zero Worries,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Total Peace.
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Tata Nexon 5-Star GNCAP safety and Maruti Swift with 23+ km/l mileage for effortless travel.
            </p>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3.5 flex-wrap">
              <Link
                to="/book?car=tata-nexon"
                className="px-6 py-3 sm:px-7 sm:py-3.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all active:scale-95 flex items-center gap-2 group"
              >
                <span>Book Tata Nexon</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/book?car=maruti-swift"
                className="px-5 py-3 sm:px-6 sm:py-3.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
              >
                Swift (₹1,699/d)
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
              <img
                src="/assets/img/car/tata-nexon.png"
                alt="Tata Nexon Safety"
                className="max-h-36 sm:max-h-52 md:max-h-64 lg:max-h-72 w-auto mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />

              <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-lg font-bold">5-Star Safety</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg font-bold text-white">6 Airbags</span>
                <span className="bg-white/10 px-3 py-1 rounded-lg font-bold text-white">Touchscreen</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-2.5 sm:pt-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-400 font-bold overflow-x-auto scrollbar-none">
          <span className="shrink-0">• Comprehensive Insurance Included</span>
          <span className="shrink-0">• Unlimited KMs Available</span>
          <span className="shrink-0">• 24x7 Roadside Assistance</span>
        </div>
      </FlowSection>

      {/* 04: INSTANT HANDOVER & AIRPORT PICKUP */}
      <FlowSection
        aria-label="Instant Reservation"
        style={{ backgroundColor: '#020617', color: '#ffffff' }}
        className="text-white"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 sm:pb-3.5">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-red-500 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span>04 • Instant Handover</span>
          </span>
          <span className="text-xs sm:text-sm font-extrabold bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
            BBI Airport in 15 Mins
          </span>
        </div>

        <div className="my-auto py-4 sm:py-8 text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs sm:text-sm font-black uppercase tracking-wider">
            <Zap className="w-4 h-4 text-red-500" />
            <span>Instant Booking Confirmation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight uppercase">
            Reserve Your Car
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              Today.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 font-medium max-w-lg mx-auto leading-relaxed">
            Instant KYC verification, zero deposit, and free BBI Airport arrival handover.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/cars"
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Explore All 20+ Cars</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+917008732102"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 7008732102</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-2.5 sm:pt-3.5 text-center text-xs text-slate-500">
          DriveIT Self Drive Cars • Zero Deposit • Fastag Ready • Bhubaneswar 24/7
        </div>
      </FlowSection>

    </FlowArt>
  );
}
