import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { WhatsAppIcon, GoogleMapsIcon } from './common/BrandIcons';

export default function HeaderTop() {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80 py-1.5 sm:py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left contacts */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <a 
            href="tel:+917008732102" 
            className="inline-flex items-center gap-1.5 text-slate-200 hover:text-red-400 font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>+91 7008732102</span>
          </a>

          <a 
            href="https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20am%20interested%20in%20booking%20a%20car"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 font-medium transition-colors group"
          >
            <WhatsAppIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>WhatsApp Booking</span>
          </a>

          <a 
            href="mailto:info@driveit.co.in" 
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-red-500" />
            <span>info@driveit.co.in</span>
          </a>

          <a
            href="https://maps.google.com/?q=Bhubaneswar+Airport+DriveIT+Car+Rental"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
          >
            <GoogleMapsIcon className="w-3 h-4 transition-transform group-hover:scale-110" />
            <span>Bhubaneswar 24/7 Delivery</span>
          </a>
        </div>

        {/* Right tags / badges */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30 font-semibold uppercase tracking-wider">
            Zero Deposit Available
          </span>
          <span className="text-slate-400">
            Odisha's Top Rated Self-Drive Rental
          </span>
        </div>
      </div>
    </div>
  );
}
