import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function ContactHero() {
  return (
    <div className="relative text-white pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden bg-slate-950">
      
      {/* Background Car Image - Clear & Natural with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/egf3yql9/image/upload/v1793099904/slider-1.jpg"
          alt="DriveIT Support & Office"
          className="w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Minimal Breadcrumb */}
        <nav className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs mb-3">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-red-400 font-bold">Contact</span>
        </nav>

        {/* Short Punchy Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Contact <span className="text-red-500">DriveIT</span>
        </h1>

        {/* 1-Line Clean Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-medium leading-relaxed">
          Available 24/7 in Bhubaneswar for airport handovers, instant car bookings & roadside support.
        </p>

        {/* Clean Quick Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+917008732102"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 7008732102</span>
          </a>

          <a
            href="https://wa.me/917008732102?text=Hi%20DriveIT,%20I%20want%20to%20rent%20a%20self-drive%20car"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>WhatsApp Support</span>
          </a>
        </div>

      </div>

    </div>
  );
}
