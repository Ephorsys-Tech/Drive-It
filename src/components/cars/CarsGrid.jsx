import React from 'react';
import { Car, Frown, RotateCcw } from 'lucide-react';
import CarCard from '../common/CarCard';

export default function CarsGrid({ cars, onQuickView, onReset }) {
  if (cars.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-4">
          <Car className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">No matching vehicles found</h3>
        <p className="text-sm text-slate-500 mb-6">
          Try adjusting your search criteria or resetting filters to browse our full fleet.
        </p>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-bold text-xs rounded-xl shadow-md hover:bg-red-700 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset All Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 text-xs sm:text-sm text-slate-500 font-medium">
        <span>Showing <strong className="text-slate-900">{cars.length}</strong> vehicles available in Bhubaneswar</span>
        <span className="hidden sm:inline">100% Sanitized & Commercially Permitted</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onQuickView={onQuickView} />
        ))}
      </div>
    </div>
  );
}
