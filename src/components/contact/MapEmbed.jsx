import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function MapEmbed() {
  return (
    <div id="map" className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-slate-800 shadow-xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-500">
            Hub Locations
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Bhubaneswar & Cuttack Service Network
          </h3>
        </div>
        <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center">
          <Navigation className="w-5 h-5" />
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        Our primary dispatch hubs are situated conveniently across Bhubaneswar ensuring vehicle delivery to any address within 60 minutes.
      </p>

      {/* Hub list */}
      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
          <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">BBI Airport Hub</h4>
            <p className="text-[11px] text-slate-400">Direct arrival terminal delivery & pickup (24/7)</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
          <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">Railway Station / Master Canteen</h4>
            <p className="text-[11px] text-slate-400">Convenient for train travelers arriving at BBS</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
          <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">Patia & Infocity Tech Hub</h4>
            <p className="text-[11px] text-slate-400">Serving KIIT, DLF Cybercity, and northern Bhubaneswar</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-start gap-3">
          <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">Doorstep Home & Hotel Delivery</h4>
            <p className="text-[11px] text-slate-400">Any residence or hotel in Bhubaneswar & Cuttack</p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <a
          href="https://maps.google.com/?q=Bhubaneswar+Airport+Odisha"
          target="_blank"
          rel="noreferrer"
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <span>Open Bhubaneswar Hub on Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
