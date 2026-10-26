import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Car, Search, MapPin, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { GoogleMapsIcon } from '../common/BrandIcons';
import { carCategories } from '../../data/carsData';

export default function QuickSearchWidget() {
  const navigate = useNavigate();

  const [pickupLocation, setPickupLocation] = useState('BBI Airport (Arrival Terminal)');
  const [carType, setCarType] = useState('All');
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnDate, setReturnDate] = useState(() => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 2);
    return nextDay.toISOString().split('T')[0];
  });
  const [returnTime, setReturnTime] = useState('18:00');

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      location: pickupLocation,
      category: carType,
      puDate: `${pickupDate} ${pickupTime}`,
      doDate: `${returnDate} ${returnTime}`,
    });
    navigate(`/book?${queryParams.toString()}`);
  };

  return (
    <div className="relative pt-10 sm:pt-16 pb-4 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 z-30">
      <div className="reveal-on-scroll bg-white/95 backdrop-blur-2xl rounded-3xl sm:rounded-[32px] shadow-[0_20px_60px_-15px_rgba(15,23,42,0.18)] border border-slate-200/90 p-4 sm:p-6 lg:p-7 transition-all duration-300 hover:shadow-[0_25px_70px_-15px_rgba(15,23,42,0.22)]">

        {/* Header Tab - Modern Glass Island */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3.5 sm:pb-5 mb-4 sm:mb-5 border-b border-slate-100 gap-2 sm:gap-3">

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-black tracking-wider uppercase shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
              <span>Quick Self-Drive Booking</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Instant Confirmation</span>
            </span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200/60 self-start sm:self-auto">
            <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
            <span className="text-[11px] sm:text-xs text-slate-600 font-bold">
              Doorstep Delivery in Bhubaneswar • Cuttack • Puri
            </span>
          </div>

        </div>

        {/* Modern Interactive Bento Grid Form */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5">

          {/* Tile 1: Pickup Location */}
          <div className="group relative rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-red-500/50 p-2.5 sm:p-3 transition-all duration-200 shadow-2xs hover:shadow-md focus-within:border-red-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-red-700 group-focus-within:text-red-700 transition-colors">
                  Pickup Location
                </span>
                <GoogleMapsIcon className="w-3.5 h-4 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="relative">
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-transparent border-0 p-0 pr-6 text-xs sm:text-sm font-extrabold text-slate-900 focus:outline-hidden cursor-pointer appearance-none truncate"
                >
                  <option value="BBI Airport (Arrival Terminal)">BBI Airport (Bhubaneswar)</option>
                  <option value="Railway Station (Master Canteen)">Bhubaneswar Railway Station</option>
                  <option value="Patia / Infocity Area">Patia / Infocity Hub</option>
                  <option value="Khandagiri / Baramunda">Khandagiri / Baramunda</option>
                  <option value="Nayapalli / Jayadev Vihar">Nayapalli / Jayadev Vihar</option>
                  <option value="Cuttack Hub">Cuttack City Delivery</option>
                  <option value="Doorstep Delivery (Home/Hotel)">Doorstep Delivery (Any Address)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 group-hover:text-red-600 transition-colors" />
              </div>
            </div>

            <div className="mt-1.5 pt-1 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
              <span className="truncate">Terminal handover</span>
              <span className="text-emerald-600 font-bold shrink-0">Free</span>
            </div>
          </div>

          {/* Tile 2: Car Category */}
          <div className="group relative rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-red-500/50 p-2.5 sm:p-3 transition-all duration-200 shadow-2xs hover:shadow-md focus-within:border-red-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-red-700 group-focus-within:text-red-700 transition-colors">
                  Vehicle Type
                </span>
                <Car className="w-3.5 h-3.5 text-red-600 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="relative">
                <select
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  className="w-full bg-transparent border-0 p-0 pr-6 text-xs sm:text-sm font-extrabold text-slate-900 focus:outline-hidden cursor-pointer appearance-none truncate"
                >
                  {carCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'All' ? 'All Car Types' : cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 group-hover:text-red-600 transition-colors" />
              </div>
            </div>

            <div className="mt-1.5 pt-1 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
              <span className="truncate">Fleet selection</span>
              <span className="text-slate-600 font-bold shrink-0">20+ Cars</span>
            </div>
          </div>

          {/* Tile 3: Pickup Date & Time - Full Width Date (No Truncation) + Time Row */}
          <div className="group relative rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-red-500/50 p-2.5 sm:p-3 transition-all duration-200 shadow-2xs hover:shadow-md focus-within:border-red-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-red-700 group-focus-within:text-red-700 transition-colors">
                  Pickup Schedule
                </span>
                <Calendar className="w-3.5 h-3.5 text-red-600 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Full Width Date Input - Plenty of room for full YYYY date without clipping */}
              <div className="relative w-full">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-transparent border-0 p-0 text-xs sm:text-sm font-extrabold text-slate-900 focus:outline-hidden cursor-pointer"
                />
              </div>
            </div>

            {/* Time Sub-Row */}
            <div className="mt-1.5 pt-1 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-semibold flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>Pickup Time</span>
              </span>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="bg-transparent border-0 p-0 text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer text-right"
              />
            </div>
          </div>

          {/* Tile 4: Return Date & Time - Full Width Date + Time Row */}
          <div className="group relative rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-red-500/50 p-2.5 sm:p-3 transition-all duration-200 shadow-2xs hover:shadow-md focus-within:border-red-600 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-red-700 group-focus-within:text-red-700 transition-colors">
                  Return Schedule
                </span>
                <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Full Width Date Input */}
              <div className="relative w-full">
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={pickupDate}
                  className="w-full bg-transparent border-0 p-0 text-xs sm:text-sm font-extrabold text-slate-900 focus:outline-hidden cursor-pointer"
                />
              </div>
            </div>

            {/* Time Sub-Row */}
            <div className="mt-1.5 pt-1 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 font-semibold flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>Return Time</span>
              </span>
              <input
                type="time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="bg-transparent border-0 p-0 text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer text-right"
              />
            </div>
          </div>

          {/* Tile 5: Deep Red Search Action Button */}
          <div className="flex items-stretch sm:col-span-2 lg:col-span-1 pt-0.5 sm:pt-0">
            <button
              type="submit"
              className="w-full h-full min-h-[58px] bg-gradient-to-r from-red-800 via-red-700 to-rose-900 hover:from-red-900 hover:via-red-800 hover:to-rose-950 text-white font-extrabold px-4 rounded-2xl shadow-md shadow-red-950/25 hover:shadow-lg hover:shadow-red-900/35 border border-red-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer group"
            >
              <Search className="w-4 h-4 transition-transform duration-200 group-hover:scale-110 shrink-0" />
              <span>Search Cars</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
