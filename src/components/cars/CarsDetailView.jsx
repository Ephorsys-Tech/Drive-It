import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  Gauge,
  Fuel,
  Users,
  Calendar,
  Phone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function CarsDetailView({ car, onBack }) {
  const [duration, setDuration] = useState('24h'); // '12h' or '24h'

  if (!car) return null;

  // Calculate pricing based on 12h vs 24h
  const displayPrice = duration === '12h' 
    ? Math.round(car.price * 0.65) 
    : car.price;

  // Default features list if car.features is empty
  const defaultFeatures = [
    'AC & Dual Climate Control',
    'Touchscreen Infotainment & Carplay',
    'Bluetooth & Wireless Surround Music',
    'Pre-loaded Fastag Included',
    'Zero Security Deposit Option',
    '100% Sanitized Handover Guarantee',
    '24/7 Roadside Assistance across Odisha',
    'Free Doorstep & Airport Delivery Option'
  ];

  const featuresList = (car.features && car.features.length > 0) 
    ? car.features 
    : defaultFeatures;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/70 text-slate-800 pt-24 sm:pt-28 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Navigation Button */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/90 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-bold shadow-2xs transition-all duration-200 cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-red-600" />
            <span>Back to All Vehicles</span>
          </button>
        </div>

        {/* Main 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Large Car Preview + 2x2 Specs Grid Underneath */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Big White Card with Car Preview */}
            <div className="relative aspect-[16/11] w-full rounded-3xl bg-white p-6 sm:p-10 flex items-center justify-center shadow-xl overflow-hidden border border-slate-200/90">
              
              {/* Badge Top Left */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-md">
                  <Users className="w-3.5 h-3.5 text-red-400" />
                  <span>{car.seats} Seater Car</span>
                </span>
              </div>

              {/* Category Pill Top Right */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10">
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200/80 text-xs font-extrabold uppercase tracking-wider">
                  {car.category}
                </span>
              </div>

              {/* Big High-Res Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="max-h-full max-w-[90%] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/assets/img/car/mahindra-thar.png';
                }}
              />

              {/* Sub floor shadow */}
              <div className="absolute bottom-4 inset-x-12 h-6 bg-slate-400/20 blur-lg rounded-full pointer-events-none" />
            </div>

            {/* 4 Spec Boxes in 2x2 Grid (Directly below Car Image) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              
              {/* Box 1: Transmission */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Transmission</div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{car.transmission}</div>
                </div>
              </div>

              {/* Box 2: Fuel Type */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  <Fuel className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Fuel Type</div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{car.fuel}</div>
                </div>
              </div>

              {/* Box 3: Capacity */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Capacity</div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">{car.seats} Seater Car</div>
                </div>
              </div>

              {/* Box 4: Available */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Availability</div>
                  <div className="text-sm sm:text-base font-extrabold text-emerald-600 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Instant BBS</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Car Title, Rating, Rental Price Card, Features Included */}
          <div className="lg:col-span-6 flex flex-col text-left">
            
            {/* Category / Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{car.badge || 'DriveIT Premium'}</span>
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Model: {car.year || '2024'}
              </span>
            </div>

            {/* Car Title in Big Bold Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {car.name}
            </h1>

            {/* Star Rating & Reviews */}
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                {car.rating || '4.9'} ({car.reviews || '120'} verified reviews)
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {car.description || 'Experience the freedom of self-drive with DriveIT in Bhubaneswar. Thoroughly sanitized, commercially insured, and ready for pickup.'}
            </p>

            {/* Rental Price Card */}
            <div className="mt-6 rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-lg">
              
              {/* Header with Duration Switcher (12h / 24h) */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Rental Pricing
                </span>
                
                {/* 12h / 24h Duration Toggle */}
                <div className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200">
                  <button
                    onClick={() => setDuration('12h')}
                    className={`px-4 py-1 text-xs font-extrabold rounded-full transition-all duration-200 cursor-pointer ${
                      duration === '12h'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    12h
                  </button>
                  <button
                    onClick={() => setDuration('24h')}
                    className={`px-4 py-1 text-xs font-extrabold rounded-full transition-all duration-200 cursor-pointer ${
                      duration === '24h'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    24h
                  </button>
                </div>
              </div>

              {/* Price Display */}
              <div className="py-5 flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  ₹{displayPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm font-bold text-slate-500">
                  /{duration}
                </span>
                <span className="ml-auto text-[11px] sm:text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Zero Deposit Option
                </span>
              </div>

              {/* Buttons: [Book Now] & [Call Us] */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to={`/book?car=${car.id}&duration=${duration}`}
                  className="flex-1 py-3.5 sm:py-4 px-6 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base text-center transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-red-500/25 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+917008732102"
                  className="py-3.5 sm:py-4 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Call Us</span>
                </a>
              </div>

            </div>

            {/* Features Included Card */}
            <div className="mt-6 rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-lg">
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4">
                Vehicle Features Included
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {featuresList.slice(0, 8).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-semibold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Sanitized Before Handover</span>
                </div>
                <span>Fastag Pre-loaded & Commercial Permit</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
