import React from 'react';
import { Car, Users, MapPin, Award } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      icon: Car,
      value: '50+',
      label: 'Modern Vehicles',
      desc: 'Hatchbacks, Sedans, 7-Seaters & 4x4s'
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Delighted Travelers',
      desc: 'From all across India & abroad'
    },
    {
      icon: MapPin,
      value: '100%',
      label: 'Odisha Coverage',
      desc: 'Puri, Konark, Chilika, Daringbadi, Sambalpur'
    },
    {
      icon: Award,
      value: '4.9 / 5',
      label: 'Customer Rating',
      desc: 'Based on 500+ verified Google Reviews'
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-800/40 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 mx-auto flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
