import React from 'react';
import { Plane, Clock, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export default function AirportServiceGuide() {
  const steps = [
    {
      step: '1',
      title: 'Pre-flight Booking',
      desc: 'Book your car online or via WhatsApp with your flight number. We track delays in real time.'
    },
    {
      step: '2',
      title: 'Terminal Arrival Handover',
      desc: 'As you exit BBI Airport arrivals, our delivery executive meets you with keys & clean documents.'
    },
    {
      step: '3',
      title: '2-Minute Video Inspection',
      desc: 'Quick 360-degree walkaround and fuel reading. Drive directly to your destination.'
    },
    {
      step: '4',
      title: 'Easy Return at Departures',
      desc: 'Drop the vehicle right back outside the departure gate before flying back. Zero hassle.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="reveal-scale bg-slate-900 rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="text-reveal-scroll relative z-10 max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Plane className="w-4 h-4" />
              <span>Bhubaneswar Airport Self Drive Rental</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Airport Doorstep Pickup & Drop Guide
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Never wait in taxi lines at Biju Patnaik International Airport. Your sanitized car will be parked and waiting when your flight touches down.
            </p>
          </div>

          <div className="reveal-on-scroll delay-150 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
