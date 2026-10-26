import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, Users, Gauge, Fuel } from 'lucide-react';
import { cn } from '@/lib/utils';

const DISC = 58; // arrow disc diameter, px
const BLOCK = 74; // notch block size, px (radius = BLOCK - DISC / 2)
const FILLET = 24; // curve radius where notch meets cover edges, px

export default function CarCard({ 
  car, 
  onQuickView, 
  surface = "#f8fafc", 
  accent = "#ea1b25",
  monochrome = true,
  className 
}) {
  return (
    <div className={cn("group flex flex-col text-left outline-none", className)}>
      
      {/* 21st.dev Notched Cover - Single seamless card, no card inside card */}
      <div className="relative">
        
        {/* Cover Container - Clean seamless white surface */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-white border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-red-500/40 transition-all duration-500 flex items-center justify-center p-6">
          
          {/* Car Image - mixBlendMode multiply seamlessly removes any rectangular white box */}
          <img
            src={car.image}
            alt={car.name}
            className={cn(
              "max-h-40 w-auto object-contain transition-all duration-500 drop-shadow-sm",
              monochrome
                ? "grayscale contrast-110 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.08]"
                : "group-hover:scale-[1.08]"
            )}
            style={{ mixBlendMode: 'multiply' }}
            loading="lazy"
          />

          {/* Top Badges */}
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 z-10">
            <span className="rounded-full border border-slate-200/80 bg-white/95 px-3 py-1 text-[11px] font-bold text-slate-800 shadow-xs backdrop-blur-md">
              {car.category}
            </span>
            <span className="rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-red-600 shadow-xs">
              {car.badge || car.year || '2025'}
            </span>
          </div>

          {/* Daily Price Floating Pill (Bottom Left) */}
          <div className="pointer-events-none absolute bottom-4 left-4 z-10">
            <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white shadow-md flex items-baseline gap-1">
              <span className="text-sm font-black text-white">₹{car.price}</span>
              <span className="text-[10px] text-slate-300 font-medium">/day</span>
            </div>
          </div>
        </div>

        {/* The 21st.dev Notch Cut (Bottom Right) */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 pointer-events-none z-10"
          style={{
            width: BLOCK,
            height: BLOCK,
            borderTopLeftRadius: BLOCK - DISC / 2,
            background: surface,
          }}
        />

        {/* Fillet curves where cut meets edges */}
        {[
          { bottom: BLOCK, right: 0 },
          { bottom: 0, right: BLOCK },
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute pointer-events-none z-10"
            style={{
              ...pos,
              width: FILLET,
              height: FILLET,
              background: `radial-gradient(circle at top left, transparent ${FILLET - 0.5}px, ${surface} ${FILLET}px)`,
            }}
          />
        ))}

        {/* Arrow Disc: Dark slate by default, turns DriveIT Red on hover */}
        <Link
          to={`/book?car=${car.id}`}
          title={`Book ${car.name}`}
          aria-label={`Book ${car.name}`}
          className="absolute bottom-0 right-0 z-20 flex items-center justify-center rounded-full bg-slate-900 text-slate-300 transition-all duration-300 group-hover:scale-108 group-hover:bg-red-600 group-hover:text-white shadow-xl cursor-pointer"
          style={{ width: DISC, height: DISC }}
        >
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Typography directly on page below cover (NO outer border / NO card inside card) */}
      <div className="pt-4 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between gap-2">
          <Link
            to={`/book?car=${car.id}`}
            className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1"
          >
            {car.name}
          </Link>
          <div className="flex items-center gap-1 text-amber-500 font-bold text-xs shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-slate-800">{car.rating}</span>
          </div>
        </div>

        {car.description && (
          <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium line-clamp-2">
            {car.description}
          </p>
        )}

        {/* 21st.dev Style Spec Tags */}
        <ul className="mt-4 flex flex-wrap gap-2 items-center">
          <li className="rounded-md bg-slate-200/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
            <Users className="w-3 h-3 text-red-500" />
            <span>{car.seats} Seats</span>
          </li>
          <li className="rounded-md bg-slate-200/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
            <Gauge className="w-3 h-3 text-red-500" />
            <span>{car.transmission}</span>
          </li>
          <li className="rounded-md bg-slate-200/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
            <Fuel className="w-3 h-3 text-red-500" />
            <span>{car.fuel}</span>
          </li>
          <li className="rounded-md bg-red-100 text-red-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
            Zero Deposit
          </li>
        </ul>
      </div>

    </div>
  );
}
