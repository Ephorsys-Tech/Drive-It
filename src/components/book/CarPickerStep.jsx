import React from 'react';
import { Check, Star, Users, Fuel, Gauge } from 'lucide-react';
import { carsData, carCategories } from '../../data/carsData';

export default function CarPickerStep({ selectedCarId, onSelectCar }) {
  const [category, setCategory] = React.useState('All');

  const filtered = category === 'All'
    ? carsData
    : carsData.filter((c) => c.category === category);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Step 1: Choose Your Vehicle
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Select from our sanitized fleet. All rates are inclusive of GST and insurance.
        </p>
      </div>

      {/* Category selector */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {carCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer ${
              category === cat
                ? 'bg-red-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[460px] overflow-y-auto pr-1">
        {filtered.map((car) => {
          const isSelected = selectedCarId === car.id;
          return (
            <div
              key={car.id}
              onClick={() => onSelectCar(car)}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
                isSelected
                  ? 'border-red-600 bg-red-50/30 shadow-md ring-2 ring-red-500/20'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xs">
                  <Check className="w-3.5 h-3.5" />
                </div>
              )}

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {car.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                  {car.name}
                </h4>

                <div className="py-2 flex items-center justify-center min-h-[90px]">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">{car.transmission} • {car.fuel}</span>
                <span className="font-extrabold text-slate-900 text-sm">
                  ₹{car.price}<span className="text-[10px] text-slate-500 font-normal">/day</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
