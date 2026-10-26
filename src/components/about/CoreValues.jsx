import React from 'react';
import { ShieldCheck, HeartHandshake, Zap, Clock } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Safety First',
      desc: 'Factory-certified multi-point vehicle checks before every handover. ABS, dual airbags, and tire health audited meticulously.'
    },
    {
      icon: HeartHandshake,
      title: 'Absolute Transparency',
      desc: 'No sneaky fine print, no unexpected deductions. Every fee is stated up-front clearly with automated billing.'
    },
    {
      icon: Zap,
      title: 'Speed & Agility',
      desc: 'Book in 2 minutes, upload KYC over WhatsApp, and receive doorstep car handover within 60 minutes across Bhubaneswar.'
    },
    {
      icon: Clock,
      title: 'Round-The-Clock Support',
      desc: 'Emergencies do not follow office hours. Our roadside rescue team and customer care operate 24 hours a day, 365 days a year.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-reveal-scroll text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Principles That Drive Us Forward
          </h2>
        </div>

        <div className="reveal-on-scroll delay-150 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-red-500/40 hover:bg-white shadow-2xs hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-600 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
