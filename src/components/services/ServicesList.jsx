import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Plane, Compass, MapPin, Award, Calendar, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export default function ServicesList() {
  const iconMap = {
    Plane,
    Compass,
    MapPin,
    Award,
    Calendar,
    ShieldCheck
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || ShieldCheck;
            return (
              <div
                key={service.id}
                className="group rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Image Banner */}
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/img/service/01.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-3 right-4 bg-slate-950/80 backdrop-blur-xs text-amber-400 text-xs font-bold px-3 py-1 rounded-lg border border-slate-700">
                      {service.pricing}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-slate-200/60">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom button */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/book?service=${service.id}`}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 group-hover:bg-red-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm active:scale-95"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
