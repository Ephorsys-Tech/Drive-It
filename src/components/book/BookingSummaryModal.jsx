import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Calendar, MapPin, Car, ShieldCheck, ArrowRight, Printer } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function BookingSummaryModal({ booking, onClose }) {
  if (!booking) return null;

  const handleWhatsAppShare = () => {
    const text = `*New DriveIT Booking Request* 🚗
*Ref ID:* ${booking.refId}
*Customer:* ${booking.userData.name}
*Phone:* ${booking.userData.phone}
*Age:* ${booking.userData.age}
*Car:* ${booking.car.name} (${booking.car.transmission}/${booking.car.fuel})
*Pickup Location:* ${booking.tripData.pickupLocation}
*Pickup Date:* ${booking.tripData.pickupDate} at ${booking.tripData.pickupTime}
*Drop-off Date:* ${booking.tripData.dropoffDate} at ${booking.tripData.dropoffTime}
*Duration:* ${booking.durationDays} Day(s)
*Estimated Total:* ₹${booking.totalAmount}
*Add-ons:* ${booking.addOns.unlimitedKm ? 'Unlimited KMs' : 'Standard 250km/d'}, ${booking.addOns.zeroLiability ? 'Zero Liability' : 'Standard Insurance'}`;

    window.open(`https://wa.me/917008732102?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity" />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Success Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-white text-emerald-600 mx-auto flex items-center justify-center shadow-md mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black">Booking Reserved Successfully!</h3>
          <p className="text-xs text-emerald-100 mt-1">
            Reference ID: <strong className="text-white font-mono">{booking.refId}</strong>
          </p>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          
          {/* Car pill */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
            <img
              src={booking.car.image}
              alt={booking.car.name}
              className="w-24 h-auto object-contain"
            />
            <div>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
                {booking.car.category}
              </span>
              <h4 className="text-base font-extrabold text-slate-900">{booking.car.name}</h4>
              <p className="text-xs text-slate-500">{booking.car.seats} Seats • {booking.car.transmission} • {booking.car.fuel}</p>
            </div>
          </div>

          {/* Schedule & Location */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400 block text-[10px] uppercase font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-500" />
                Pickup
              </span>
              <strong className="text-slate-800 text-xs block mt-1 line-clamp-1">{booking.tripData.pickupLocation}</strong>
              <span className="text-[11px] text-slate-500">{booking.tripData.pickupDate} ({booking.tripData.pickupTime})</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400 block text-[10px] uppercase font-bold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-red-500" />
                Drop-off
              </span>
              <strong className="text-slate-800 text-xs block mt-1 line-clamp-1">{booking.tripData.dropoffLocation}</strong>
              <span className="text-[11px] text-slate-500">{booking.tripData.dropoffDate} ({booking.tripData.dropoffTime})</span>
            </div>
          </div>

          {/* Driver details */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-500">Customer Name:</span>
              <span className="font-bold text-slate-900">{booking.userData.name} (Age: {booking.userData.age})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Phone (WhatsApp):</span>
              <span className="font-bold text-slate-900">{booking.userData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Duration:</span>
              <span className="font-bold text-slate-900">{booking.durationDays} Day(s)</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-200 text-sm">
              <span className="font-bold text-slate-900">Estimated Total Fare:</span>
              <span className="font-black text-red-600 text-base">₹{booking.totalAmount}</span>
            </div>
          </div>

          {/* Immediate KYC Notice */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Please send a quick photo of your Original Driving License & Aadhaar to our WhatsApp to finalize key handover!</span>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleWhatsAppShare}
            type="button"
            className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Chat on Official WhatsApp</span>
          </button>

          <Link
            to="/"
            onClick={onClose}
            className="py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
