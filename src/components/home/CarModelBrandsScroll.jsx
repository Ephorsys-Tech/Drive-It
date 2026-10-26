import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Car,
  Fuel,
  Users,
  Gauge,
  CheckCircle2,
  Zap,
  Info
} from 'lucide-react';
import { carsData } from '../../data/carsData';

const BRANDS = [
  {
    id: 'all',
    name: 'All Brands',
    tagline: 'Complete Fleet',
    subtext: '20+ Models Available',
    logo: null,
    isAll: true,
    count: '20+ Cars'
  },
  {
    id: 'mahindra',
    name: 'Mahindra',
    tagline: 'Self Drive Cars',
    subtext: '4x4 & Tough SUVs',
    logo: '/assets/img/brand/mahindra-logo.png',
    count: 'Thar, Scorpio & More',
    startingPrice: '₹3,999/day',
    matchQuery: 'Mahindra'
  },
  {
    id: 'kia',
    name: 'Kia',
    tagline: 'Self Drive Cars',
    subtext: 'Luxury & Modern MPVs',
    logo: '/assets/img/brand/kia-logo.png',
    count: 'Carens, Sonet',
    startingPrice: '₹2,299/day',
    matchQuery: 'Kia'
  },
  {
    id: 'toyota',
    name: 'Toyota',
    tagline: 'Self Drive Cars',
    subtext: 'Legendary Reliability',
    logo: '/assets/img/brand/toyota-logo.png',
    count: 'Innova & Luxury',
    startingPrice: '₹3,999/day',
    matchQuery: 'Toyota'
  },
  {
    id: 'honda',
    name: 'Honda',
    tagline: 'Self Drive Cars',
    subtext: 'Comfort & Big Boot',
    logo: '/assets/img/brand/honda-logo.png',
    count: 'Amaze & Sedans',
    startingPrice: '₹1,999/day',
    matchQuery: 'Honda'
  },
  {
    id: 'maruti',
    name: 'Maruti Suzuki',
    tagline: 'Self Drive Cars',
    subtext: 'Max Mileage & 7-Seater',
    logo: '/assets/img/brand/Suzuki.png',
    count: 'Ertiga, Swift, Brezza',
    startingPrice: '₹1,699/day',
    matchQuery: 'Maruti'
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    tagline: 'Self Drive Cars',
    subtext: 'High-Tech Comfort',
    logo: '/assets/img/brand/hyundai.png',
    count: 'Venue, Verna, i20',
    startingPrice: '₹1,499/day',
    matchQuery: 'Hyundai'
  },
  {
    id: 'tata',
    name: 'Tata Motors',
    tagline: 'Self Drive Cars',
    subtext: '5-Star Safety Builds',
    logo: '/assets/img/brand/tata.png',
    count: 'Nexon, Punch, Altroz',
    startingPrice: '₹1,399/day',
    matchQuery: 'Tata'
  }
];

export default function CarModelBrandsScroll({ onQuickView }) {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const brandScrollRef = useRef(null);
  const carsScrollRef = useRef(null);

  // Filter cars based on selected brand
  const filteredCars = React.useMemo(() => {
    if (selectedBrand === 'all') {
      return carsData.slice(0, 10);
    }
    const currentBrandObj = BRANDS.find((b) => b.id === selectedBrand);
    if (!currentBrandObj || !currentBrandObj.matchQuery) return carsData.slice(0, 8);
    const q = currentBrandObj.matchQuery.toLowerCase();
    const matched = carsData.filter((c) => c.name.toLowerCase().includes(q));
    return matched.length > 0 ? matched : carsData.slice(0, 6);
  }, [selectedBrand]);

  // Update scroll indicator position for the brands track
  const handleBrandScroll = () => {
    if (!brandScrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = brandScrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(scrollLeft / maxScroll);
    }
  };

  const scrollBrands = (direction) => {
    if (brandScrollRef.current) {
      const scrollAmount = 320;
      brandScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollCars = (direction) => {
    if (carsScrollRef.current) {
      const scrollAmount = 360;
      carsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const el = brandScrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleBrandScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleBrandScroll);
    }
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/60 overflow-hidden relative border-b border-slate-200/70">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Indicator Bars & Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/90 text-red-600 text-xs font-black tracking-wider uppercase mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              <span>Explore Top Makes & Models</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Car Brands & Models</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-xl font-medium">
              Swipe horizontally to browse Bhubaneswar's favorite self-drive brands. Tap any brand to preview models or reserve instantly.
            </p>
          </div>

          {/* Top Indicator Bars & Scroll Controls (As in user screenshot reference) */}
          <div className="flex items-center gap-4 self-start md:self-end">
            
            {/* Visual Dash Indicators */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-full">
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  scrollProgress < 0.5 ? 'w-8 bg-red-600 shadow-xs' : 'w-3 bg-slate-400'
                }`}
              />
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  scrollProgress >= 0.5 ? 'w-8 bg-red-600 shadow-xs' : 'w-3 bg-slate-400'
                }`}
              />
            </div>

            {/* Left / Right Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollBrands('left')}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-red-300 text-slate-700 hover:text-red-600 shadow-xs hover:shadow-md flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Scroll left brands"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollBrands('right')}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-red-300 text-slate-700 hover:text-red-600 shadow-xs hover:shadow-md flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Scroll right brands"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. HORIZONTAL SCROLL: CAR BRANDS TRACK (Matching Reference Image) */}
        <div
          ref={brandScrollRef}
          className="flex items-stretch gap-3.5 sm:gap-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          {BRANDS.map((brand) => {
            const isSelected = selectedBrand === brand.id;

            return (
              <div
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                className={`snap-start shrink-0 w-[140px] sm:w-[175px] md:w-[195px] p-4 sm:p-5 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-300 flex flex-col items-center justify-between text-center select-none group relative ${
                  isSelected
                    ? 'bg-white border-2 border-red-600 shadow-xl shadow-red-500/10 -translate-y-1 ring-4 ring-red-500/10'
                    : 'bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                {/* Active Indicator Pip */}
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-600 animate-ping" />
                )}

                {/* Brand Logo Container */}
                <div className="w-full h-16 sm:h-20 flex items-center justify-center py-2 relative">
                  {brand.isAll ? (
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center shadow-md">
                      <Car className="w-6 h-6" />
                    </div>
                  ) : (
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-12 sm:max-h-14 max-w-[85%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Brand Text Details */}
                <div className="w-full mt-2 pt-2 border-t border-slate-100/90">
                  <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-red-600 transition-colors truncate">
                    {brand.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5">
                    {brand.tagline}
                  </p>
                </div>

                {/* Bottom pill / count */}
                <div className="mt-2.5 w-full">
                  <span
                    className={`inline-block w-full py-1 px-2 rounded-lg text-[10px] font-bold tracking-tight transition-colors ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}
                  >
                    {brand.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. HORIZONTAL SCROLL: CAR MODELS CAROUSEL (Interactive Filtered Fleet) */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-slate-200/80">
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Trending Self-Drive Models
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 mt-0.5 flex items-center gap-2">
                <span>
                  {selectedBrand === 'all'
                    ? 'Top Recommended Fleet in Bhubaneswar'
                    : `${BRANDS.find((b) => b.id === selectedBrand)?.name} Models`}
                </span>
                <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full">
                  {filteredCars.length} Cars
                </span>
              </h3>
            </div>

            {/* Model Track Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCars('left')}
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-red-300 text-slate-700 hover:text-red-600 shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Previous cars"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCars('right')}
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-red-300 text-slate-700 hover:text-red-600 shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Next cars"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cars Horizontal Track */}
          <div
            ref={carsScrollRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          >
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="snap-start shrink-0 w-[270px] sm:w-[310px] bg-white rounded-3xl border border-slate-200/90 hover:border-red-400/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative"
              >
                {/* Top Badge */}
                <div className="p-4 pb-2 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                    {car.category}
                  </span>

                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-red-500" />
                    <span>{car.badge || 'Popular'}</span>
                  </span>
                </div>

                {/* Car Photo Showcase */}
                <div className="px-4 py-3 h-36 flex items-center justify-center relative bg-gradient-to-b from-slate-50/50 to-transparent">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="max-h-28 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/img/car/mahindra-thar.png';
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="p-4 pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-black text-slate-900 text-sm sm:text-base group-hover:text-red-600 transition-colors truncate">
                      {car.name}
                    </h4>

                    {/* Quick Specs Pills */}
                    <div className="grid grid-cols-3 gap-1.5 mt-2.5 text-[11px] font-semibold text-slate-600">
                      <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-1 text-center truncate">
                        <Users className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{car.seats} Seats</span>
                      </div>
                      <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-1 text-center truncate">
                        <Gauge className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center gap-1 text-center truncate">
                        <Fuel className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{car.fuel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                        ₹{car.price}
                        <span className="text-[11px] font-normal text-slate-500">/day</span>
                      </div>
                      <span className="text-[9px] text-emerald-600 font-bold block">
                        Free Insurance
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {onQuickView && (
                        <button
                          type="button"
                          onClick={() => onQuickView(car)}
                          className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                          title="View Specs"
                        >
                          <Info className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <Link
                        to={`/book?car=${car.id}`}
                        className="btn-glow px-3.5 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Footer Action Links */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block font-bold">100% Sanitized & Fastag Enabled Fleet</strong>
                Doorstep delivery & pickup available 24/7 across Bhubaneswar & Cuttack.
              </div>
            </div>

            <Link
              to="/cars"
              className="inline-flex items-center gap-2 text-xs font-black text-red-600 hover:text-white bg-red-50 hover:bg-red-600 px-5 py-2.5 rounded-xl border border-red-200/80 transition-all cursor-pointer shrink-0"
            >
              <span>Explore All 20+ Vehicles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
