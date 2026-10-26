import React from 'react';
import { User, Mail, Shield } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function UserDetailsStep({ userData, setUserData, addOns, setAddOns }) {
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Block any non-numeric character entry on keydown (prevents typing any text/letters)
  const handleKeyDownOnlyDigits = (e) => {
    const allowedKeys = ['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'Enter', 'Home', 'End'];
    if (allowedKeys.includes(e.key)) return;
    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) return;
    // Disallow anything other than digits 0-9
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Sanitize phone number to strictly numbers only and cap at 10 digits
  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setUserData(prev => ({ ...prev, phone: numericValue }));
  };

  const handleAgeChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 2);
    setUserData(prev => ({ ...prev, age: numericValue }));
  };

  const toggleAddon = (key) => {
    setAddOns({ ...addOns, [key]: !addOns[key] });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900">
          Step 2: Driver & KYC Details
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Enter driver information for instantaneous document verification and vehicle agreement generation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">
            Full Name (As on Driving License) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="e.g. Soumya Ranjan"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* WhatsApp Phone */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp Phone Number <span className="text-red-500">*</span></span>
            </label>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${userData.phone.length === 10 ? 'bg-emerald-100 text-emerald-700 font-extrabold' : 'bg-slate-100 text-slate-500'}`}>
              {userData.phone.length}/10 digits
            </span>
          </div>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 select-none">
              +91
            </div>
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handlePhoneChange}
              onKeyDown={handleKeyDownOnlyDigits}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              placeholder="7008732102"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500 font-medium tracking-wider"
            />
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Numbers only • No letters or text allowed • Max 10 digits
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="e.g. soumya@gmail.com"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Driver Age & License */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Age (Years) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              value={userData.age}
              onChange={handleChange}
              placeholder="e.g. 25"
              min="21"
              max="80"
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              DL Number
            </label>
            <input
              type="text"
              name="licenseNumber"
              value={userData.licenseNumber}
              onChange={handleChange}
              placeholder="e.g. OD02..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500 uppercase"
            />
          </div>
        </div>
      </div>

      {/* Add-ons & Peace of Mind */}
      <div className="pt-4 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-red-500" />
          <span>Recommended Journey Add-ons</span>
        </h4>

        <div className="space-y-2.5">
          <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={addOns.unlimitedKm}
                onChange={() => toggleAddon('unlimitedKm')}
                className="w-4 h-4 text-red-600 rounded-sm focus:ring-red-500 cursor-pointer"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                  Unlimited Kilometers Pass
                </span>
                <span className="text-[11px] text-slate-500">
                  Drive anywhere across Odisha without per-KM calculations
                </span>
              </div>
            </div>
            <span className="text-xs font-extrabold text-red-600 shrink-0">
              +₹499/day
            </span>
          </label>

          <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={addOns.zeroLiability}
                onChange={() => toggleAddon('zeroLiability')}
                className="w-4 h-4 text-red-600 rounded-sm focus:ring-red-500 cursor-pointer"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                  Zero Liability Protection Cover
                </span>
                <span className="text-[11px] text-slate-500">
                  Covers minor scratches and accidental damages with ₹0 deductible
                </span>
              </div>
            </div>
            <span className="text-xs font-extrabold text-red-600 shrink-0">
              +₹299/day
            </span>
          </label>
        </div>
      </div>

    </div>
  );
}
