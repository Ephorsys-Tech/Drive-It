import React from 'react';
import { Link } from 'react-router-dom';
import { X, Users, Fuel, Gauge, Check, Star, ShieldCheck, ArrowRight, Briefcase } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function CarSpecsModal({ car, onClose }) {
  if (!car) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col">

        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-100/70 px-2.5 py-0.5 rounded-full">
              {car.category}
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-1">{car.name}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* Car Image Preview */}
          <div className="bg-gradient-to-b from-slate-100 to-white rounded-2xl p-6 flex items-center justify-center border border-slate-100 min-h-[200px]">
            <img
              src={car.image}
              alt={car.name}
              className="max-h-48 w-auto object-contain drop-shadow-xl"
            />
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {car.description}
          </p>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Users className="w-4 h-4 text-red-500 mx-auto mb-1" />
              <span className="text-slate-400 block text-[10px] uppercase">Seating</span>
              <strong className="text-slate-900">{car.seats} Persons</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Gauge className="w-4 h-4 text-red-500 mx-auto mb-1" />
              <span className="text-slate-400 block text-[10px] uppercase">Transmission</span>
              <strong className="text-slate-900">{car.transmission}</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Fuel className="w-4 h-4 text-red-500 mx-auto mb-1" />
              <span className="text-slate-400 block text-[10px] uppercase">Fuel Type</span>
              <strong className="text-slate-900">{car.fuel}</strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Briefcase className="w-4 h-4 text-red-500 mx-auto mb-1" />
              <span className="text-slate-400 block text-[10px] uppercase">Boot Space</span>
              <strong className="text-slate-900">{car.luggage || '2-3 Bags'}</strong>
            </div>
          </div>

          {/* Features Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Included Vehicle Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {car.features && car.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Inclusions Notice */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Includes 24/7 Roadside Assistance, Fastag convenience, and sanitization before handover.</span>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Rental Tariff</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">₹{car.price}</span>
              <span className="text-xs text-slate-500 font-medium">/day</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20am%20interested%20in%20renting%20the%20${encodeURIComponent(car.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
              title="Inquire via WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              type="button"
              className="px-3.5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            <Link
              to={`/book?car=${car.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Book Car</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
