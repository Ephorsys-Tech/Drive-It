import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';
import { carCategories } from '../../data/carsData';

export default function CarsFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  transmissionFilter,
  setTransmissionFilter,
  fuelFilter,
  setFuelFilter,
  sortBy,
  setSortBy,
  onReset
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-6 mb-10 space-y-4">
      
      {/* Search & Sort row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* Search Input */}
        <div className="md:col-span-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cars by name (e.g. Thar, Swift, Scorpio-N, Venue, Carens)..."
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500 transition-all"
          />
        </div>

        {/* Sort dropdown */}
        <div className="md:col-span-4 flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-700 font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500 cursor-pointer"
          >
            <option value="featured">Sort: Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          <button
            type="button"
            onClick={onReset}
            title="Reset Filters"
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition-colors shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Category Pills & Sub Filters */}
      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {carCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Transmission & Fuel Pills */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          
          {/* Transmission */}
          <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200/60">
            {['All', 'Manual', 'Automatic'].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTransmissionFilter(t)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  transmissionFilter === t
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {t === 'All' ? 'All Trans' : t}
              </button>
            ))}
          </div>

          {/* Fuel */}
          <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200/60">
            {['All', 'Petrol', 'Diesel'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFuelFilter(f)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  fuelFilter === f
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {f === 'All' ? 'All Fuel' : f}
              </button>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
