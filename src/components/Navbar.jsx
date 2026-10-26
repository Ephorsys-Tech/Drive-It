import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for subtle shadow transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    <header className={`sticky top-0 z-[100] transition-all duration-300 ${isScrolled
      ? 'glass-nav shadow-lg border-b border-slate-200/90 py-1.5 sm:py-2'
      : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-2 sm:py-2.5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo className="h-10 sm:h-12 lg:h-13" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive
                    ? 'text-red-600 bg-red-50/80 shadow-xs'
                    : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+917008732102"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 bg-slate-100 hover:bg-slate-200/70 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span className="hidden lg:inline">+91 7008732102</span>
              <span className="lg:hidden">Call</span>
            </a>

            <Link
              to="/book"
              className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              <Car className="w-4 h-4" />
              <span>Book A Car</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg shadow-sm"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-700 hover:text-red-600 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Offcanvas */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <Logo className="h-11" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-4 flex flex-col space-y-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${isActive
                      ? 'text-red-600 bg-red-50'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{item.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
              <Link
                to="/book"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded-xl shadow-lg active:scale-95"
              >
                <Car className="w-5 h-5" />
                <span>Book A Car Now</span>
              </Link>

              <a
                href="tel:+917008732102"
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-800 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>Call +91 7008732102</span>
              </a>
            </div>

            {/* Quick footer details */}
            <div className="mt-auto pt-6 text-xs text-slate-400 text-center">
              <div className="inline-flex items-center gap-1.5 text-emerald-600 font-medium mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Sanitized & Verified Fleet</span>
              </div>
              <p>Bhubaneswar • Cuttack • Puri</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
