import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { carsData, carCategories } from '../../data/carsData';
import TripDetailsStep from './TripDetailsStep';
import UserDetailsStep from './UserDetailsStep';
import BookingSummaryModal from './BookingSummaryModal';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  Phone,
  Car,
  X,
  Search,
  Repeat
} from 'lucide-react';

export default function BookingWizard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const preSelectedCarId = searchParams.get('car');
  const preSelectedLocation = searchParams.get('location') || 'BBI Airport (Arrival Terminal)';

  // Wizard has 2 clear steps: Step 1 = Trip & Dates, Step 2 = Driver & KYC
  const [currentStep, setCurrentStep] = useState(1);

  // Quick Car Switcher Modal state
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState('All');
  const [modalSearch, setModalSearch] = useState('');

  const [selectedCar, setSelectedCar] = useState(() => {
    if (preSelectedCarId) {
      const match = carsData.find((c) => c.id === preSelectedCarId);
      if (match) return match;
    }
    return carsData[0];
  });

  const [tripData, setTripData] = useState({
    pickupLocation: preSelectedLocation,
    dropoffLocation: 'Same as Pickup Location',
    doorstepAddress: '',
    pickupDate: new Date().toISOString().split('T')[0],
    pickupTime: '10:00',
    dropoffDate: (() => {
      const d = new Date();
      d.setDate(d.getDate() + 2);
      return d.toISOString().split('T')[0];
    })(),
    dropoffTime: '18:00',
  });

  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    licenseNumber: ''
  });

  const [addOns, setAddOns] = useState({
    unlimitedKm: false,
    zeroLiability: false
  });

  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync if car URL parameter changes
  useEffect(() => {
    const carId = searchParams.get('car');
    if (carId) {
      const match = carsData.find((c) => c.id === carId);
      if (match) {
        setSelectedCar(match);
      }
    }
    const locationParam = searchParams.get('location');
    if (locationParam) {
      setTripData((prev) => ({ ...prev, pickupLocation: locationParam }));
    }
  }, [searchParams]);

  // Calculate duration in days
  const calculateDays = () => {
    const start = new Date(tripData.pickupDate);
    const end = new Date(tripData.dropoffDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const durationDays = calculateDays();
  const basePrice = (selectedCar ? selectedCar.price : 1499) * durationDays;
  const unlimitedKmCost = addOns.unlimitedKm ? 499 * durationDays : 0;
  const zeroLiabilityCost = addOns.zeroLiability ? 299 * durationDays : 0;
  const totalAmount = basePrice + unlimitedKmCost + zeroLiabilityCost;

  const handleNext = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      if (!tripData.pickupDate || !tripData.dropoffDate) {
        setErrorMessage('Please specify pickup and drop-off dates.');
        return;
      }
      setCurrentStep(2);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    } else if (currentStep === 2) {
      if (!userData.name.trim()) {
        setErrorMessage('Please provide your full name as on your Driving License.');
        return;
      }
      if (!userData.phone || userData.phone.length !== 10) {
        setErrorMessage('WhatsApp phone number must be exactly 10 digits (numbers only, maximum 10 digits).');
        return;
      }
      if (!/^[6-9]\d{9}$/.test(userData.phone)) {
        setErrorMessage('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!userData.email.trim() || !emailRegex.test(userData.email.trim())) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
      if (!userData.age || Number(userData.age) < 21 || Number(userData.age) > 80) {
        setErrorMessage('Driver age must be between 21 and 80 years old.');
        return;
      }

      // Generate booking confirmation
      const refId = `DRV-${Math.floor(10000 + Math.random() * 90000)}`;
      const bookingRecord = {
        refId,
        car: selectedCar,
        tripData,
        userData,
        addOns,
        durationDays,
        totalAmount,
        createdAt: new Date().toISOString()
      };
      setConfirmedBooking(bookingRecord);

      // Direct WhatsApp send on reserving car
      const waText = `*New DriveIT Booking Inquiry* 🚗
*Ref ID:* ${refId}
*Customer:* ${userData.name.trim()}
*Phone:* +91 ${userData.phone}
*Age:* ${userData.age}
*Car:* ${selectedCar.name} (${selectedCar.transmission}/${selectedCar.fuel})
*Pickup Location:* ${tripData.pickupLocation}
*Pickup Date:* ${tripData.pickupDate} at ${tripData.pickupTime}
*Drop-off Date:* ${tripData.dropoffDate} at ${tripData.dropoffTime}
*Duration:* ${durationDays} Day(s)
*Estimated Total:* ₹${totalAmount}
*Add-ons:* ${addOns.unlimitedKm ? 'Unlimited KMs (+₹499/d)' : 'Standard 250km/d'}, ${addOns.zeroLiability ? 'Zero Liability (+₹299/d)' : 'Standard Insurance'}`;

      window.open(`https://wa.me/917008732102?text=${encodeURIComponent(waText)}`, '_blank');
    }
  };

  const handlePrev = () => {
    setErrorMessage('');
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const handleSelectCarInModal = (car) => {
    setSelectedCar(car);
    setSearchParams({ car: car.id });
    setIsCarModalOpen(false);
  };

  // Filter cars inside quick modal
  const modalFilteredCars = carsData.filter((car) => {
    const matchCategory = modalCategory === 'All' || car.category === modalCategory;
    const matchSearch =
      modalSearch.trim() === '' ||
      car.name.toLowerCase().includes(modalSearch.toLowerCase()) ||
      car.category.toLowerCase().includes(modalSearch.toLowerCase()) ||
      car.fuel.toLowerCase().includes(modalSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Streamlined 2-Step Modern Stepper */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-2 text-center text-xs sm:text-sm font-bold relative">

            {/* Step 1: Trip & Dates */}
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${currentStep === 1
                  ? 'text-red-600 font-black'
                  : currentStep > 1
                    ? 'text-emerald-600 font-bold'
                    : 'text-slate-400'
                }`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-black transition-all ${currentStep === 1
                    ? 'bg-red-600 text-white shadow-lg ring-4 ring-red-100 scale-105'
                    : 'bg-emerald-600 text-white shadow-md'
                  }`}
              >
                {currentStep > 1 ? <Check className="w-5 h-5 stroke-[3]" /> : '1'}
              </div>
              <span>1. Trip & Schedule</span>
            </button>

            {/* Step 2: Driver & KYC Details */}
            <button
              type="button"
              onClick={() => {
                if (tripData.pickupDate && tripData.dropoffDate) setCurrentStep(2);
              }}
              className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${currentStep === 2
                  ? 'text-red-600 font-black'
                  : 'text-slate-400'
                }`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-black transition-all ${currentStep === 2
                    ? 'bg-red-600 text-white shadow-lg ring-4 ring-red-100 scale-105'
                    : 'bg-slate-200 text-slate-600'
                  }`}
              >
                2
              </div>
              <span>2. Driver & KYC</span>
            </button>

            {/* Connecting line between the 2 steps */}
            <div className="absolute top-5 left-1/4 right-1/4 -z-10 h-0.5 bg-slate-200">
              <div
                className={`h-full bg-red-600 transition-all duration-300 ${currentStep === 2 ? 'w-full' : 'w-0'
                  }`}
              />
            </div>

          </div>
        </div>

        {/* Wizard Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Step Form Card */}
          <div className="lg:col-span-8 space-y-6">

            {/* Active Selected Vehicle Showcase Card */}
            {selectedCar && (
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-24 sm:w-28 h-18 bg-slate-50 rounded-2xl border border-slate-100 p-2 flex items-center justify-center shrink-0">
                    <img
                      src={selectedCar.image}
                      alt={selectedCar.name}
                      className="max-h-14 w-auto object-contain drop-shadow-sm"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/img/car/mahindra-thar.png';
                      }}
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-red-50 text-red-600 px-2 py-0.5 rounded-md">
                        {selectedCar.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {selectedCar.transmission} • {selectedCar.fuel} • {selectedCar.seats} Seater
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 truncate mt-0.5">
                      {selectedCar.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm sm:text-base font-black text-slate-900">
                        ₹{selectedCar.price}
                        <span className="text-xs font-normal text-slate-500">/day</span>
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        GST & Insurance Included
                      </span>
                    </div>
                  </div>
                </div>

                {/* Change Vehicle Quick Action */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <button
                    type="button"
                    onClick={() => setIsCarModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-red-600 bg-slate-100 hover:bg-red-50 px-3.5 py-2 rounded-xl transition-all border border-slate-200 hover:border-red-200 cursor-pointer"
                  >
                    <Repeat className="w-3.5 h-3.5 text-red-600" />
                    <span>Switch Car</span>
                  </button>

                  <Link
                    to="/cars"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800 px-3 py-2 rounded-xl transition-all"
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>View Fleet</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Step Form Box */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8">

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm font-semibold text-red-600">
                  {errorMessage}
                </div>
              )}

              {/* Step 1: Trip & Dates / Location */}
              {currentStep === 1 && (
                <TripDetailsStep
                  tripData={tripData}
                  setTripData={setTripData}
                />
              )}

              {/* Step 2: Driver & KYC Details */}
              {currentStep === 2 && (
                <UserDetailsStep
                  userData={userData}
                  setUserData={setUserData}
                  addOns={addOns}
                  setAddOns={setAddOns}
                />
              )}

              {/* Step Navigation Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                {currentStep === 1 ? (
                  <Link
                    to="/cars"
                    className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Fleet</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Trip Details</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-glow px-7 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>{currentStep === 2 ? 'Confirm & Reserve Car' : 'Continue to Driver Details'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Live Booking Summary Sidebar */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 space-y-5 sticky top-24">
            <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
              <span>Trip Summary & Fare</span>
              <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                Step {currentStep} of 2
              </span>
            </h3>

            {selectedCar ? (
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedCar.image}
                      alt={selectedCar.name}
                      className="w-20 h-auto object-contain drop-shadow-sm"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/img/car/mahindra-thar.png';
                      }}
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-red-600">
                        {selectedCar.category}
                      </span>
                      <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                        {selectedCar.name}
                      </h4>
                      <span className="text-xs text-slate-500 font-medium">₹{selectedCar.price}/day</span>
                    </div>
                  </div>

                  {/* Switch Car Action */}
                  <button
                    type="button"
                    onClick={() => setIsCarModalOpen(true)}
                    className="text-xs font-bold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 px-3 py-1.5 rounded-xl border border-red-200/80 transition-all cursor-pointer shrink-0"
                    title="Choose a different car"
                  >
                    Change
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 text-xs space-y-2 border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Pickup Location:</span>
                    <span className="font-semibold text-slate-800 text-right line-clamp-1">{tripData.pickupLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dates:</span>
                    <span className="font-semibold text-slate-800">{tripData.pickupDate} to {tripData.dropoffDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-bold text-slate-900">{durationDays} Day(s)</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 text-xs pt-2 border-t border-slate-100">
                  <div className="flex justify-between text-slate-600">
                    <span>Base Vehicle Rental ({durationDays} d):</span>
                    <span>₹{basePrice}</span>
                  </div>

                  {addOns.unlimitedKm && (
                    <div className="flex justify-between text-slate-600">
                      <span>Unlimited KMs Pass:</span>
                      <span>+₹{unlimitedKmCost}</span>
                    </div>
                  )}

                  {addOns.zeroLiability && (
                    <div className="flex justify-between text-slate-600">
                      <span>Zero Liability Protection:</span>
                      <span>+₹{zeroLiabilityCost}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-600">
                    <span>GST & Comprehensive Insurance:</span>
                    <span className="text-emerald-600 font-semibold">Included</span>
                  </div>

                  <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-3 border-t border-slate-200">
                    <span>Estimated Total:</span>
                    <span className="text-red-600 text-lg">₹{totalAmount}</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                  <p className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Zero Cancellation Fee up to 6h before pickup</span>
                  </p>
                  <p>• Fastag ready • Sanitized handover</p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400">Please choose a vehicle to preview fare.</p>
            )}

            {/* Quick Contact helpline */}
            <div className="pt-4 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-500 block mb-1">Need help with booking?</span>
              <a
                href="tel:+917008732102"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 7008732102 (24/7)</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Quick Switch Car Modal Dialog */}
      {isCarModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCarModalOpen(false)}
          />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col">

            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  Switch Your Vehicle
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pick any vehicle from our fleet. Your trip schedule remains preserved.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsCarModalOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search & Category Filter Controls */}
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-100 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by car name, fuel, or type..."
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Categories horizontal scroll */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {carCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setModalCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer ${modalCategory === cat
                        ? 'bg-red-600 text-white shadow-2xs'
                        : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Cars List Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[50vh]">
              {modalFilteredCars.map((car) => {
                const isSelected = selectedCar && selectedCar.id === car.id;
                return (
                  <div
                    key={car.id}
                    onClick={() => handleSelectCarInModal(car)}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${isSelected
                        ? 'border-red-600 bg-red-50/40 shadow-xs ring-2 ring-red-500/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                      }`}
                  >
                    <div className="w-20 h-16 bg-slate-50 rounded-xl p-1.5 flex items-center justify-center shrink-0 border border-slate-100">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="max-h-12 w-auto object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/assets/img/car/mahindra-thar.png';
                        }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase text-red-600">
                        {car.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 truncate">
                        {car.name}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {car.transmission} • {car.fuel}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xs sm:text-sm font-black text-slate-900">
                        ₹{car.price}
                        <span className="text-[10px] font-normal text-slate-500">/d</span>
                      </div>
                      <span
                        className={`inline-block mt-1 text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors ${isSelected
                            ? 'bg-red-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-red-600 hover:text-white'
                          }`}
                      >
                        {isSelected ? 'Selected' : 'Select'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Found {modalFilteredCars.length} vehicles
              </span>

              <Link
                to="/cars"
                onClick={() => setIsCarModalOpen(false)}
                className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
              >
                <span>Browse Full Catalog Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <BookingSummaryModal
          booking={confirmedBooking}
          onClose={() => setConfirmedBooking(null)}
        />
      )}
    </div>
  );
}
