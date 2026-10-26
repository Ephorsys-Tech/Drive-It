import React from 'react';
import { MapPin, Calendar, Clock, Home, Building } from 'lucide-react';

export default function TripDetailsStep({ tripData, setTripData }) {
  const handleChange = (e) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Step 1: Trip & Location Details
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Specify your pickup and drop-off hubs or opt for doorstep delivery anywhere in Bhubaneswar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Pickup Location */}
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>Pickup Hub</span>
          </label>
          <select
            name="pickupLocation"
            value={tripData.pickupLocation}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500 cursor-pointer"
          >
            <option value="BBI Airport (Arrival Terminal)">BBI Airport (Arrival Terminal, 24/7)</option>
            <option value="Railway Station (Master Canteen)">Bhubaneswar Railway Station</option>
            <option value="Patia / Infocity Area">Patia / Infocity Hub</option>
            <option value="Khandagiri / Baramunda">Khandagiri / Baramunda</option>
            <option value="Nayapalli / Jayadev Vihar">Nayapalli / Jayadev Vihar</option>
            <option value="Cuttack Hub Delivery">Cuttack City Hub</option>
            <option value="Doorstep Delivery (Home/Hotel)">Doorstep Delivery (Home / Hotel)</option>
          </select>
        </div>

        {/* Dropoff Location */}
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>Drop-off Hub</span>
          </label>
          <select
            name="dropoffLocation"
            value={tripData.dropoffLocation}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500 cursor-pointer"
          >
            <option value="Same as Pickup Location">Same as Pickup Location</option>
            <option value="BBI Airport (Departure Terminal)">BBI Airport (Departures)</option>
            <option value="Railway Station (Master Canteen)">Bhubaneswar Railway Station</option>
            <option value="Patia / Infocity Area">Patia / Infocity Hub</option>
            <option value="Doorstep Pickup (Home/Hotel)">Doorstep Pickup (Home / Hotel)</option>
          </select>
        </div>
      </div>

      {/* Doorstep address if selected */}
      {(tripData.pickupLocation.includes('Doorstep') || tripData.dropoffLocation.includes('Doorstep')) && (
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-red-600" />
            <span>Exact Delivery / Pickup Address</span>
          </label>
          <input
            type="text"
            name="doorstepAddress"
            value={tripData.doorstepAddress || ''}
            onChange={handleChange}
            placeholder="House/Hotel Name, Street, Landmark, Bhubaneswar..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
          />
        </div>
      )}

      {/* Date & Time Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Pickup Date & Time */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-xs font-bold text-slate-700 block mb-2 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-red-600" />
            <span>Start Date & Time</span>
          </span>
          <div className="grid grid-cols-5 gap-2">
            <input
              type="date"
              name="pickupDate"
              value={tripData.pickupDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="col-span-3 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-red-500"
            />
            <input
              type="time"
              name="pickupTime"
              value={tripData.pickupTime}
              onChange={handleChange}
              className="col-span-2 bg-white border border-slate-200 rounded-xl px-2 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Dropoff Date & Time */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-xs font-bold text-slate-700 block mb-2 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-red-600" />
            <span>End Date & Time</span>
          </span>
          <div className="grid grid-cols-5 gap-2">
            <input
              type="date"
              name="dropoffDate"
              value={tripData.dropoffDate}
              onChange={handleChange}
              min={tripData.pickupDate}
              className="col-span-3 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-red-500"
            />
            <input
              type="time"
              name="dropoffTime"
              value={tripData.dropoffTime}
              onChange={handleChange}
              className="col-span-2 bg-white border border-slate-200 rounded-xl px-2 py-2.5 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
