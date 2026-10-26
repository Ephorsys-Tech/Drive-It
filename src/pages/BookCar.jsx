import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import BookingWizard from '../components/book/BookingWizard';

export default function BookCar() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* Modern Car Background Hero - Clear & Natural with subtle overlay */}
      <div className="relative text-white pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-slate-950">
        
        {/* Background Car Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/img/hero/slider-2.jpg"
            alt="DriveIT Car Reservation"
            className="w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        </div>

        <div className="text-reveal-scroll max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/cars" className="hover:text-white transition-colors">Cars</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-red-400 font-bold">Book A Car</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Reserve Your <span className="text-red-500">Self-Drive Car</span>
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-slate-200 max-w-md mx-auto font-medium">
            Zero deposit options • Free airport handover • Instant booking confirmation.
          </p>

        </div>

      </div>

      {/* Main Multi-Step Booking Wizard */}
      <BookingWizard />
    </div>
  );
}
