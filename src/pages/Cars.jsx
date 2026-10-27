import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { carsData } from '../data/carsData';
import CarsDetailView from '../components/cars/CarsDetailView';
import CtaBanner from '../components/home/CtaBanner';
import {
  Car as CarIcon,
  Search,
  RotateCcw,
  Star,
  Users,
  Gauge,
  Fuel,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  X,
  Check,
  ShieldCheck,
  Zap,
  Info,
  Calendar,
  Layers,
  Award,
  ChevronRight,
  ChevronDown,
  Flame
} from 'lucide-react';

export default function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCarId = searchParams.get('car');

  // Active Selected Car for the In-Page Detail View
  const [selectedCarDetail, setSelectedCarDetail] = useState(() => {
    if (urlCarId) {
      return carsData.find((c) => c.id === urlCarId) || null;
    }
    return null;
  });

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [fuelFilter, setFuelFilter] = useState('All');
  const [seatsFilter, setSeatsFilter] = useState('All');
  const [transmissionFilter, setTransmissionFilter] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [quickFilter, setQuickFilter] = useState(null); // '4x4', '7seater', 'auto', 'diesel', 'budget'
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync when URL param changes
  useEffect(() => {
    if (urlCarId) {
      const match = carsData.find((c) => c.id === urlCarId);
      if (match) setSelectedCarDetail(match);
    }
  }, [urlCarId]);

  // Scroll to top when opening detail view or going back
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCarDetail]);

  const handleSelectCar = (car) => {
    setSelectedCarDetail(car);
    setSearchParams({ car: car.id });
  };

  const handleBackToList = () => {
    setSelectedCarDetail(null);
    setSearchParams({});
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setFuelFilter('All');
    setSeatsFilter('All');
    setTransmissionFilter('All');
    setSortBy('featured');
    setQuickFilter(null);
  };

  // Check if any filter is active
  const isFiltered = Boolean(
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    fuelFilter !== 'All' ||
    seatsFilter !== 'All' ||
    transmissionFilter !== 'All' ||
    sortBy !== 'featured' ||
    quickFilter !== null
  );

  // Categories list with count calculation
  const categories = [
    { id: 'All', label: 'All Vehicles' },
    { id: 'SUV', label: 'SUV & 4x4' },
    { id: '7-Seater', label: '7-Seater Family' },
    { id: 'Compact SUV', label: 'Compact SUV' },
    { id: 'Sedan', label: 'Sedan' },
    { id: 'Hatchback', label: 'Hatchback' },
  ];

  // Quick filter presets
  const handleQuickFilterClick = (type) => {
    if (quickFilter === type) {
      setQuickFilter(null);
      return;
    }
    setQuickFilter(type);
    if (type === '4x4') {
      setSelectedCategory('SUV');
    } else if (type === '7seater') {
      setSeatsFilter('7');
    } else if (type === 'auto') {
      setTransmissionFilter('Automatic');
    } else if (type === 'diesel') {
      setFuelFilter('Diesel');
    }
  };

  // Filtered cars logic
  const filteredCars = useMemo(() => {
    return carsData.filter((car) => {
      // Quick filter preset rules
      if (quickFilter === '4x4') {
        const isThar = car.id.includes('thar') || car.features?.some(f => f.toLowerCase().includes('4x4'));
        if (!isThar) return false;
      }
      if (quickFilter === 'budget') {
        if (car.price > 2200) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = car.name.toLowerCase().includes(q);
        const matchesCat = car.category.toLowerCase().includes(q);
        const matchesFuel = car.fuel.toLowerCase().includes(q);
        const matchesTrans = car.transmission.toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesFuel && !matchesTrans) return false;
      }

      // Category Filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'SUV') {
          if (!['SUV', 'Compact SUV', 'Micro SUV', 'Crossover'].includes(car.category)) return false;
        } else if (car.category !== selectedCategory) {
          return false;
        }
      }

      // Fuel Filter
      if (fuelFilter !== 'All' && car.fuel !== fuelFilter) {
        return false;
      }

      // Seating Filter
      if (seatsFilter !== 'All' && String(car.seats) !== seatsFilter) {
        return false;
      }

      // Transmission Filter
      if (transmissionFilter !== 'All' && car.transmission !== transmissionFilter) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, fuelFilter, seatsFilter, transmissionFilter, sortBy, quickFilter]);

  // If a car is selected, render the modern Light Detail View
  if (selectedCarDetail) {
    return (
      <CarsDetailView
        car={selectedCarDetail}
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-16 sm:pb-24">
      
      {/* 1. Cinematic Modern Car Background Hero Section */}
      <div className="relative text-white pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden bg-slate-950">
        
        {/* Background Car Image - Clear & Natural with subtle overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/egf3yql9/image/upload/v1793098915/01.jpg"
            alt="DriveIT Self-Drive Car Fleet"
            className="w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>

        <div className="text-reveal-scroll max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Minimal Breadcrumb */}
          <nav className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-red-400 font-bold">Cars Fleet</span>
          </nav>

          {/* Short Punchy Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Our <span className="text-red-500">Self-Drive Fleet</span>
          </h1>

          {/* 1-Line Clean Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-medium leading-relaxed">
            Choose from 20+ hatchbacks, sedans, 7-seaters & 4x4 SUVs with zero deposit & unlimited kilometers.
          </p>

        </div>

      </div>

      {/* 2. MODERN CONTROL CENTER (Airbnb / Turo Style Unified Filter Island) */}
      <div className="sticky top-[68px] sm:top-[76px] z-30 bg-white/95 backdrop-blur-xl border-y border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          
          {/* Row 1: Category Slider Tabs (Horizontal Touch Scroll on Mobile/Tablet) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === 'All' 
                ? carsData.length 
                : cat.id === 'SUV'
                  ? carsData.filter(c => ['SUV', 'Compact SUV', 'Micro SUV', 'Crossover'].includes(c.category)).length
                  : carsData.filter(c => c.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    if (quickFilter === '4x4' && cat.id !== 'SUV') setQuickFilter(null);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 active:scale-95 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-500/25 scale-[1.02]'
                      : 'bg-slate-100/90 hover:bg-slate-200 text-slate-700 border border-slate-200/70'
                  }`}
                >
                  <CarIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row 2: Search + Smart Luxury Filter Controls */}
          <div className="mt-2 flex flex-col md:flex-row md:items-center gap-2.5">
            
            {/* Search Input Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search car (e.g. Thar, Scorpio, Creta, Swift)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle Button (<md screens) */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                  showMobileFilters || [fuelFilter !== 'All', seatsFilter !== 'All', transmissionFilter !== 'All', sortBy !== 'featured'].some(Boolean)
                    ? 'bg-red-50 border-red-300 text-red-600 shadow-xs'
                    : 'bg-slate-50 border-slate-200/90 text-slate-700'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters & Sort</span>
                {[fuelFilter !== 'All', seatsFilter !== 'All', transmissionFilter !== 'All', sortBy !== 'featured'].filter(Boolean).length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center justify-center">
                    {[fuelFilter !== 'All', seatsFilter !== 'All', transmissionFilter !== 'All', sortBy !== 'featured'].filter(Boolean).length}
                  </span>
                )}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showMobileFilters ? 'rotate-180' : ''}`} />
              </button>

              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  title="Reset all filters"
                  className="p-2.5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors cursor-pointer shrink-0"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Desktop & Tablet Filter Selects (Inline on md+ screens) */}
            <div className="hidden md:flex items-center gap-2">
              
              {/* Fuel Filter */}
              <div className="relative">
                <select
                  value={fuelFilter}
                  onChange={(e) => {
                    setFuelFilter(e.target.value);
                    if (quickFilter === 'diesel' && e.target.value !== 'Diesel') setQuickFilter(null);
                  }}
                  className={`appearance-none pl-3.5 pr-8 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                    fuelFilter !== 'All'
                      ? 'bg-red-50 text-red-700 border-red-300 ring-1 ring-red-300'
                      : 'bg-slate-50 hover:bg-slate-100/90 text-slate-700 border-slate-200/90'
                  }`}
                >
                  <option value="All">⛽ Fuel: All</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Seating Filter */}
              <div className="relative">
                <select
                  value={seatsFilter}
                  onChange={(e) => {
                    setSeatsFilter(e.target.value);
                    if (quickFilter === '7seater' && e.target.value !== '7') setQuickFilter(null);
                  }}
                  className={`appearance-none pl-3.5 pr-8 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                    seatsFilter !== 'All'
                      ? 'bg-red-50 text-red-700 border-red-300 ring-1 ring-red-300'
                      : 'bg-slate-50 hover:bg-slate-100/90 text-slate-700 border-slate-200/90'
                  }`}
                >
                  <option value="All">👥 Seats: All</option>
                  <option value="5">5 Seater</option>
                  <option value="7">7 Seater</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Transmission Filter */}
              <div className="relative">
                <select
                  value={transmissionFilter}
                  onChange={(e) => {
                    setTransmissionFilter(e.target.value);
                    if (quickFilter === 'auto' && e.target.value !== 'Automatic') setQuickFilter(null);
                  }}
                  className={`appearance-none pl-3.5 pr-8 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                    transmissionFilter !== 'All'
                      ? 'bg-red-50 text-red-700 border-red-300 ring-1 ring-red-300'
                      : 'bg-slate-50 hover:bg-slate-100/90 text-slate-700 border-slate-200/90'
                  }`}
                >
                  <option value="All">⚙️ Gear: All</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Sort By Filter */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`appearance-none pl-3.5 pr-8 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                    sortBy !== 'featured'
                      ? 'bg-red-50 text-red-700 border-red-300 ring-1 ring-red-300'
                      : 'bg-slate-50 hover:bg-slate-100/90 text-slate-700 border-slate-200/90'
                  }`}
                >
                  <option value="featured">↕️ Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Reset Filters Button */}
              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  title="Reset all filters"
                  className="p-2.5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors cursor-pointer shrink-0 active:scale-95 flex items-center justify-center"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

            </div>

          </div>

          {/* Mobile Expandable Filter Panel */}
          {showMobileFilters && (
            <div className="md:hidden mt-3 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 animate-fadeIn">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Fuel Type</label>
                <select
                  value={fuelFilter}
                  onChange={(e) => setFuelFilter(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                >
                  <option value="All">All Fuel Types</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Seating</label>
                <select
                  value={seatsFilter}
                  onChange={(e) => setSeatsFilter(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                >
                  <option value="All">All Seating</option>
                  <option value="5">5 Seater</option>
                  <option value="7">7 Seater</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Gearbox</label>
                <select
                  value={transmissionFilter}
                  onChange={(e) => setTransmissionFilter(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                >
                  <option value="All">All Gearboxes</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Sort Fleet</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          )}

          {/* Row 3: 1-Click Quick Picks Chips (Horizontal Scroll) */}
          <div className="mt-2.5 flex items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
            
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-nowrap">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] shrink-0 mr-1">
                Quick Picks:
              </span>

              <button
                type="button"
                onClick={() => handleQuickFilterClick('4x4')}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold transition-all cursor-pointer text-xs shrink-0 ${
                  quickFilter === '4x4'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Flame className="w-3 h-3 text-amber-500" />
                <span>4x4 Thar Special</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFilterClick('7seater')}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold transition-all cursor-pointer text-xs shrink-0 ${
                  quickFilter === '7seater' || seatsFilter === '7'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Users className="w-3 h-3 text-blue-500" />
                <span>7-Seater Family</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFilterClick('auto')}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold transition-all cursor-pointer text-xs shrink-0 ${
                  quickFilter === 'auto' || transmissionFilter === 'Automatic'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Gauge className="w-3 h-3 text-purple-500" />
                <span>Automatic</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFilterClick('diesel')}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold transition-all cursor-pointer text-xs shrink-0 ${
                  quickFilter === 'diesel' || fuelFilter === 'Diesel'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Fuel className="w-3 h-3 text-emerald-600" />
                <span>Diesel</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickFilterClick('budget')}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-bold transition-all cursor-pointer text-xs shrink-0 ${
                  quickFilter === 'budget'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>💰 Under ₹2,200</span>
              </button>
            </div>

            {/* Reset All Filters Link */}
            {isFiltered && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer shrink-0"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            )}

          </div>

        </div>
      </div>

      {/* 3. Main Body: Full Width Responsive Car Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Results Counter & Information Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {selectedCategory === 'All' ? 'All Available Self-Drive Cars' : `${selectedCategory} Fleet`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Showing <span className="font-extrabold text-slate-900">{filteredCars.length}</span> vehicles available for immediate rental in Bhubaneswar
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full self-start sm:self-auto shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Instant Handover Available</span>
          </div>
        </div>

        {/* Empty State when no cars match */}
        {filteredCars.length === 0 && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-10 sm:p-16 text-center my-6 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 mx-auto flex items-center justify-center mb-4">
              <CarIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1.5">No matching cars found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              We couldn't find any vehicle matching your current filter criteria. Try clearing search or resetting filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Modern Car Cards Grid (Responsive for Mobile, Tablet, and Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              onClick={() => handleSelectCar(car)}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden relative text-left cursor-pointer"
            >
              
              <div>
                {/* Visual Image Showcase Container */}
                <div className="relative aspect-[16/10] w-full bg-gradient-to-b from-slate-100/90 via-slate-50 to-white p-5 flex items-center justify-center overflow-hidden border-b border-slate-100">
                  
                  {/* Floating Seating Badge Top-Left */}
                  <span className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow-xs border border-slate-200/60">
                    <Users className="w-3.5 h-3.5 text-red-600" />
                    <span>{car.seats} Seater</span>
                  </span>

                  {/* Floating Category & Rating Top-Right */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200/80 text-[10px] font-extrabold uppercase tracking-wider">
                      {car.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 border border-slate-200/60 text-[11px] font-bold text-slate-800 shadow-2xs">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span>{car.rating || '4.9'}</span>
                    </span>
                  </div>

                  {/* Car Image with Smooth Zoom */}
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-36 sm:max-h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-md"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/img/car/mahindra-thar.png';
                    }}
                  />

                  {/* Bottom Left Feature Pill */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold shadow-xs">
                      {car.badge || 'Zero Deposit'}
                    </span>
                  </div>

                </div>

                {/* Card Content Area */}
                <div className="p-5 sm:p-6 pb-4">
                  
                  {/* Car Name */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                      {car.name}
                    </h3>
                  </div>

                  {/* Tagline / Subtitle */}
                  <p className="text-xs text-slate-500 font-medium line-clamp-1 mt-1">
                    {car.description || 'Commercially permitted self-drive vehicle in Bhubaneswar.'}
                  </p>

                  {/* 4 Modern Spec Chips in 2x2 Grid */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    
                    {/* Transmission */}
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                      <Gauge className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="font-bold text-[11px] truncate">{car.transmission}</span>
                    </div>

                    {/* Fuel */}
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                      <Fuel className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-bold text-[11px] truncate">{car.fuel}</span>
                    </div>

                    {/* Seating */}
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                      <Users className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="font-bold text-[11px] truncate">{car.seats} Persons</span>
                    </div>

                    {/* Mileage */}
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                      <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-bold text-[11px] truncate">{car.mileage || '16 km/l'}</span>
                    </div>

                  </div>

                </div>
              </div>

              {/* Card Footer: Pricing and Action Buttons */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  
                  {/* Price */}
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Starting at
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      ₹{car.price.toLocaleString('en-IN')}{' '}
                      <span className="text-[11px] font-semibold text-slate-500">/24h</span>
                    </div>
                  </div>

                  {/* Action Buttons: Specs & High-Converting Book Now */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectCar(car);
                      }}
                      className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer active:scale-95"
                    >
                      Specs
                    </button>

                    <Link
                      to={`/book?car=${car.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="btn-glow inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs sm:text-sm font-black transition-all shadow-md hover:shadow-lg shadow-red-500/25 cursor-pointer active:scale-95"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 4. Bottom Promotional Callout Banner */}
      <CtaBanner />

    </div>
  );
}
