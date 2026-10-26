import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, Phone, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { WhatsAppIcon } from './BrandIcons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Cars', path: '/cars' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-2 sm:top-3 inset-x-0 mx-auto max-w-7xl z-[100] px-2.5 sm:px-4 md:px-5 lg:px-6 pointer-events-none transition-all duration-300">

      {/* Floating Glass Island Capsule */}
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto w-full rounded-full transition-all duration-300 ease-out flex items-center justify-between px-3 sm:px-4 md:px-4.5 lg:px-6 ${scrolled
            ? 'bg-white/95 backdrop-blur-2xl py-1.5 sm:py-2 shadow-[0_12px_36px_-5px_rgba(15,23,42,0.12)] border border-slate-200/90'
            : 'bg-white/90 backdrop-blur-xl py-2 sm:py-2.5 shadow-[0_8px_30px_-5px_rgba(15,23,42,0.07)] border border-white/80'
          }`}
      >

        {/* Brand Logo with Smooth Hover */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Logo className="h-6.5 sm:h-7 md:h-7.5 lg:h-8.5" />
        </div>

        {/* Desktop & Tablet Modern Capsule Nav Island */}
        <div className="hidden md:flex items-center bg-slate-100/80 p-0.5 sm:p-1 rounded-full border border-slate-200/60 shadow-inner">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={({ isActive }) =>
                `px-2.5 md:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full text-xs lg:text-sm transition-all duration-200 ${isActive
                  ? 'bg-white text-red-700 font-extrabold shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/60 font-semibold'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right Action Buttons (Tablet & Desktop Optimized) */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2.5 shrink-0">

          {/* WhatsApp Logo Only on PC/Tablet (No button container, no text) */}
          <a
            href="https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20am%20interested%20in%20booking%20a%20car"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <WhatsAppIcon className="w-8 h-8 drop-shadow-sm" />
          </a>

          {/* Call Pill - Shown on Laptops & Desktops, Hidden on Narrow Tablets to Keep Clean Spacing */}
          <a
            href="tel:+917008732102"
            title="Call +91 7008732102"
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 rounded-full text-xs font-semibold text-slate-700 bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/70 transition-all duration-200"
          >
            <div className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-2.5 h-2.5" />
            </div>
            <span className="hidden xl:inline">+91 7008732102</span>
            <span className="xl:hidden">Call</span>
          </a>

          {/* Deep Red Automotive Book Button */}
          <Link
            to="/book"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-red-800 via-red-700 to-rose-900 hover:from-red-900 hover:via-red-800 hover:to-rose-950 text-white font-extrabold text-xs lg:text-sm rounded-full shadow-md shadow-red-950/25 border border-red-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 group cursor-pointer"
          >
            <Car className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
            <span>Book<span className="hidden lg:inline"> A Car</span></span>
            <ArrowUpRight className="w-3 h-3 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 hidden sm:inline" />
          </Link>
        </div>

        {/* Mobile Actions in Floating Capsule */}
        <div className="flex md:hidden items-center gap-1.5 shrink-0">
          {/* Deep Red Mobile Book Button */}
          <Link
            to="/book"
            className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-red-800 via-red-700 to-rose-900 hover:from-red-900 hover:to-rose-950 text-white text-xs font-black rounded-full shadow-md shadow-red-950/25 border border-red-500/30 active:scale-95 transition-all"
          >
            <Car className="w-3 h-3" />
            <span>Book</span>
          </Link>

          {/* Modern Circular Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-800 hover:text-red-700 flex items-center justify-center transition-all active:scale-90 focus:outline-hidden cursor-pointer shadow-2xs"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </nav>

      {/* Modern Floating Mobile Dropdown Menu (Directly Below Capsule) */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2.5 p-4 sm:p-5 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.18)] border border-slate-200/90 transition-all duration-300 md:hidden">

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive
                    ? 'bg-red-50 text-red-700 shadow-2xs border border-red-200/60'
                    : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <span>{item.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </NavLink>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-3.5 pt-3.5 border-t border-slate-100 space-y-2">
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-red-800 via-red-700 to-rose-900 text-white font-extrabold rounded-xl shadow-lg shadow-red-950/25 active:scale-95 text-xs sm:text-sm border border-red-500/25"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Book A Car Now</span>
            </Link>

            <a
              href="tel:+917008732102"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl hover:bg-slate-200 transition-colors text-xs border border-slate-200/60"
            >
              <Phone className="w-3.5 h-3.5 text-red-700" />
              <span>Call +91 7008732102</span>
            </a>
          </div>

          {/* Footnote */}
          <div className="mt-3 pt-2 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>24/7 Doorstep Delivery Across Bhubaneswar</span>
          </div>

        </div>
      )}

    </header>
  );
}
