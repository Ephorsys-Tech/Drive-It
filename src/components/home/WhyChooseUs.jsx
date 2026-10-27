import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, PhoneCall, FileCheck2, Sparkles, Award, ArrowRight } from 'lucide-react';
import TextReveal from '../common/TextReveal';

export default function WhyChooseUs() {
  const cards = [
    {
      badge: "Zero Deposit",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      dotColor: "bg-emerald-500",
      accentBorder: "group-hover:border-emerald-500/50",
      glowBg: "from-emerald-500/10 via-transparent to-transparent",
      title: "ZERO DEPOSIT.",
      subtitle: "100% Cash Free",
      tagline: "Keep your funds unblocked. Instant digital KYC onboarding.",
      ctaText: "Zero Deposit Fleet",
      ctaHref: "/cars",
      imageUrl: "https://res.cloudinary.com/egf3yql9/image/upload/v1793097745/Kia-Sonet.png",
    },
    {
      badge: "BBI Airport 24/7",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-200/80",
      dotColor: "bg-amber-500",
      accentBorder: "group-hover:border-amber-500/50",
      glowBg: "from-amber-500/10 via-transparent to-transparent",
      title: "AIRPORT IN 5 MINS.",
      subtitle: "Terminal 1 & 2 Handover",
      tagline: "Car waiting at the arrival gate. Zero taxi queue delays.",
      ctaText: "Airport Delivery",
      ctaHref: "/book?location=BBI%20Airport%20(Arrival%20Terminal)",
      imageUrl: "https://res.cloudinary.com/egf3yql9/image/upload/v1793097962/hyundai-verna.png",
    },
    {
      badge: "Puri • Konark • Chilika",
      badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      dotColor: "bg-indigo-500",
      accentBorder: "group-hover:border-indigo-500/50",
      glowBg: "from-indigo-500/10 via-transparent to-transparent",
      title: "UNLIMITED KMS.",
      subtitle: "Pure Highway Freedom",
      tagline: "No odometer anxiety or per-KM surcharge fees.",
      ctaText: "Outstation Fleet",
      ctaHref: "/cars",
      imageUrl: "https://res.cloudinary.com/egf3yql9/image/upload/v1793102175/thar-roxx.avif",
    },
    {
      badge: "30-Point Audit",
      badgeClass: "bg-rose-50 text-rose-700 border-rose-200/80",
      dotColor: "bg-red-500",
      accentBorder: "group-hover:border-red-500/50",
      glowBg: "from-red-500/10 via-transparent to-transparent",
      title: "FACTORY SAFETY.",
      subtitle: "Spotless & Sanitized",
      tagline: "Mechanically audited, deep-cleaned cabin, Fastag ready.",
      ctaText: "Sanitized Cars",
      ctaHref: "/cars",
      imageUrl: "https://res.cloudinary.com/egf3yql9/image/upload/v1793097650/suzuki-ertiga.png",
    },
  ];

  const highlights = [
    { icon: ShieldCheck, text: "Commercial Yellow Plates", sub: "100% Legal Odisha Permit" },
    { icon: PhoneCall, text: "24/7 Roadside Rescue", sub: "Statewide Quick Support" },
    { icon: FileCheck2, text: "2-Min WhatsApp KYC", sub: "Zero Paperwork" },
    { icon: Sparkles, text: "Preloaded Fastag & Fuel", sub: "Zero Toll Delays" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Big Bold Modern Typography */}
        <div className="text-reveal-scroll text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/70 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>THE DRIVEIT ADVANTAGE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[0.98]">
            BUILT FOR DRIVERS.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-500">
              ZERO STRINGS ATTACHED.
            </span>
          </h2>
        </div>

        {/* Modern Bento Grid - Big Bold Typography & Minimal Small Text */}
        <div className="reveal-on-scroll delay-150 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative rounded-[32px] bg-slate-50/80 hover:bg-white border border-slate-200/80 ${card.accentBorder} p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden`}
            >
              {/* Soft Ambient Radial Glow */}
              <div
                className={`absolute inset-0 bg-radial ${card.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-extrabold shadow-2xs backdrop-blur-md ${card.badgeClass}`}>
                    <span className={`w-2 h-2 rounded-full ${card.dotColor} animate-pulse`} />
                    <span>{card.badge}</span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-red-600">
                    {card.subtitle}
                  </span>
                </div>

                {/* BIG BOLD HEADLINE */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2 group-hover:text-red-600 transition-colors">
                  {card.title}
                </h3>

                {/* Short 1-Line Punchy Tagline */}
                <p className="text-slate-600 text-sm sm:text-base font-semibold leading-snug max-w-sm mb-4">
                  {card.tagline}
                </p>
              </div>

              {/* Bottom Visual & CTA Row */}
              <div className="relative z-10 pt-4 border-t border-slate-200/60 flex items-center justify-between gap-4">
                <Link
                  to={card.ctaHref}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 hover:text-red-600 transition-colors group/link"
                >
                  <span>{card.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-red-600 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Transparent Car Graphic */}
                <div className="relative flex justify-end">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="max-h-24 sm:max-h-28 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                    style={{ mixBlendMode: 'multiply' }}
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Minimal Highlights Strip */}
        <div className="reveal-on-scroll delay-200 mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-white transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight">
                    {item.text}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-bold mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
