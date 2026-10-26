import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Compass, MapPin, Award, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const serviceIcons = {
  'airport-pickup': Plane,
  'outstation-tours': Compass,
  'doorstep-delivery': MapPin,
  'wedding-events': Award,
};

const serviceSubtitles = {
  'airport-pickup': 'Terminal 1 & 2 • 5-Min Handover',
  'outstation-tours': 'Puri • Konark • Unlimited KMs',
  'doorstep-delivery': 'Home & Hotel Delivery in 60 Mins',
  'wedding-events': 'Luxury SUVs & Sedans with Grooming',
};

export default function ServicesPreview() {
  const topServices = servicesData.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Big Bold Modern Typography */}
        <div className="reveal-textbox flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>CUSTOM MOBILITY</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[0.98]">
              SERVICES.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-500">
                TAILORED FOR ODISHA.
              </span>
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-red-600 hover:text-red-700 group shrink-0"
          >
            <span>All 6 Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Modern Big-Text Service Cards */}
        <div className="reveal-on-scroll delay-150 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topServices.map((service) => {
            const Icon = serviceIcons[service.id] || Sparkles;
            const sub = serviceSubtitles[service.id] || service.subtitle;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-[32px] border border-slate-200/90 hover:border-red-500/40 p-4 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Image with Gradient Overlay */}
                  <div className="relative h-48 rounded-[24px] overflow-hidden bg-slate-900 mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/img/service/01.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    
                    {/* Floating Service Icon */}
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center">
                      <Icon className="w-4 h-4 text-red-400" />
                    </div>

                    {/* Pricing Pill */}
                    <span className="absolute bottom-3 left-3 text-xs font-black text-amber-300 bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md border border-white/10">
                      {service.pricing}
                    </span>
                  </div>

                  {/* BIG BOLD TITLE */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-red-600 transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  
                  {/* Punchy 1-Line Subtitle (No Long Paragraphs) */}
                  <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1 line-clamp-1">
                    {sub}
                  </p>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    to="/services"
                    className="text-xs font-black uppercase tracking-wider text-slate-700 hover:text-red-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/book?service=${service.id}`}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-sm active:scale-95 transition-all"
                  >
                    Book Now
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
