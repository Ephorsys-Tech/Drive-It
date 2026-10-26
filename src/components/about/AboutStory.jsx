import React from 'react';
import { CheckCircle, ShieldCheck, Heart, Award } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Images Grid */}
          <div className="reveal-left lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/assets/img/about/01.jpg"
                  alt="DriveIT Fleet Bhubaneswar"
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/img/service/01.jpg';
                  }}
                />
                <div className="bg-red-600 text-white p-6 rounded-3xl shadow-lg text-center">
                  <span className="text-3xl font-extrabold block">24/7</span>
                  <span className="text-xs uppercase font-bold tracking-wider opacity-90">Support Across Odisha</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg text-center">
                  <span className="text-3xl font-extrabold text-red-500 block">0%</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-300">Hidden Charges</span>
                </div>
                <img
                  src="/assets/img/about/02.jpg"
                  alt="Customer Handover"
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/img/service/02.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text Story */}
          <div className="text-reveal-scroll delay-100 lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              <span>Our Story & Commitment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Reinventing Self-Drive Mobility in Bhubaneswar
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Started by passionate automobile enthusiasts and Odisha natives, DriveIT was established to solve the persistent hassles travelers face with untrustworthy cabs, surge pricing, and poorly maintained rental vehicles.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Today, our fleet encompasses everything from fuel-efficient city hatchbacks like the Maruti Swift and Grand i10, to premium executive sedans and authentic off-road 4x4 icons like the Mahindra Thar and Thar Roxx. Every single car is registered with commercial permits, comprehensively insured, and serviced to factory specs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Sanitized & Deep-Cleaned</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Zero Security Deposit Options</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Doorstep Delivery in 60 Mins</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Instant Online & WhatsApp Booking</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
