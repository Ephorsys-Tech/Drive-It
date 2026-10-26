import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, Users, Gauge, Fuel } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WhatsAppIcon } from './BrandIcons';

const DISC = 58; // arrow disc diameter, px
const BLOCK = 74; // notch block size, px (radius = BLOCK - DISC / 2)
const FILLET = 24; // curve radius where notch meets cover edges, px

export default function CarCard({
  car,
  onQuickView,
  surface = "#f8fafc",
  accent = "#ea1b25",
  monochrome = false,
  className
}) {
  return (
    <div className={cn("group flex flex-col text-left outline-none bg-white rounded-[28px] border border-slate-200/90 hover:border-red-500/40 p-3.5 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300", className)}>

      {/* Cover Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-100/90 border border-slate-200/60 flex items-center justify-center p-5 group-hover:from-red-50/30 group-hover:to-slate-100 transition-colors duration-500">

        {/* Soft Showroom Radial Glow Behind Car */}
        <div className="absolute inset-0 bg-radial from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Badges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3 z-10">
          <span className="rounded-full border border-slate-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-extrabold text-slate-800 shadow-2xs backdrop-blur-md">
            {car.category}
          </span>
          <span className="rounded-full border border-red-200/80 bg-red-50/95 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-red-600 shadow-2xs">
            {car.badge || car.year || '2025'}
          </span>
        </div>

        {/* Car Image - Full Color Showroom Spec */}
        <img
          src={car.image}
          alt={car.name}
          className={cn(
            "max-h-36 sm:max-h-40 w-auto object-contain transition-all duration-500 drop-shadow-md group-hover:scale-108",
            monochrome ? "grayscale group-hover:grayscale-0" : ""
          )}
          style={{ mixBlendMode: 'multiply' }}
          loading="lazy"
        />

        {/* Daily Price Floating Pill (Bottom Left) */}
        <div className="pointer-events-none absolute bottom-3 left-3 z-10">
          <div className="px-3 py-1 rounded-full bg-slate-950/90 text-white shadow-md backdrop-blur-md border border-white/10 flex items-baseline gap-1">
            <span className="text-xs sm:text-sm font-black text-white">₹{car.price}</span>
            <span className="text-[10px] text-slate-300 font-medium">/day</span>
          </div>
        </div>

        {/* Quick View Button (Bottom Right) */}
        {onQuickView && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(car);
            }}
            title={`Quick Specs for ${car.name}`}
            className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-red-600 shadow-md backdrop-blur-md border border-slate-200 flex items-center justify-center transition-all active:scale-90 cursor-pointer"
          >
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </button>
        )}
      </div>

      {/* Card Details */}
      <div className="pt-3.5 px-1 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between gap-2">
            <Link
              to={`/book?car=${car.id}`}
              className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1"
            >
              {car.name}
            </Link>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-xs shrink-0 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-slate-800 text-[11px]">{car.rating}</span>
            </div>
          </div>

          {/* Quick Specs Pills */}
          <div className="mt-2.5 flex flex-wrap gap-1.5 items-center text-[10px] font-bold text-slate-600">
            <span className="rounded-lg bg-slate-100 px-2 py-1 flex items-center gap-1">
              <Users className="w-3 h-3 text-red-600" />
              <span>{car.seats} Seats</span>
            </span>
            <span className="rounded-lg bg-slate-100 px-2 py-1 flex items-center gap-1">
              <Gauge className="w-3 h-3 text-red-600" />
              <span>{car.transmission}</span>
            </span>
            <span className="rounded-lg bg-slate-100 px-2 py-1 flex items-center gap-1">
              <Fuel className="w-3 h-3 text-red-600" />
              <span>{car.fuel}</span>
            </span>
            <span className="rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-1 font-extrabold">
              Zero Deposit
            </span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={`/book?car=${car.id}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-700 hover:to-rose-700 text-white font-extrabold text-xs uppercase tracking-wider text-center shadow-md shadow-red-600/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 group/btn"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20want%20to%20rent%20the%20${encodeURIComponent(car.name)}`}
            target="_blank"
            rel="noreferrer"
            title="Book via WhatsApp"
            className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 hover:border-emerald-300 flex items-center justify-center transition-all active:scale-90 shrink-0 shadow-2xs group/wa"
          >
            <WhatsAppIcon className="w-5 h-5 transition-transform group-hover/wa:scale-110 drop-shadow-2xs" />
          </a>
        </div>
      </div>

    </div>
  );
}
