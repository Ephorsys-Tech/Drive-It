import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Briefcase, Sparkles, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function ServiceInquiry() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="text-reveal-scroll max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Corporate & Bulk Fleet Deals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Multi-Car Fleets for Weddings or Corporate Events?
            </h2>
            <p className="mt-2 text-rose-100 text-sm sm:text-base">
              Get special custom discount packages on fleet rentals of 2 or more vehicles across Bhubaneswar and Cuttack.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20am%20inquiring%20about%20corporate/bulk%20event%20car%20rental"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 bg-white text-emerald-600 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition-all text-sm flex items-center gap-2 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp Inquiry</span>
            </a>

            <a
              href="tel:+917008732102"
              className="px-6 py-3.5 bg-red-950/60 hover:bg-red-950/80 border border-white/20 text-white font-semibold rounded-xl transition-colors text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7008732102</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
