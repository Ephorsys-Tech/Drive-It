import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Row */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-3 inline-block backdrop-blur-xs">
              Instant Doorstep Delivery
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to hit the road in Bhubaneswar?
            </h3>
            <p className="mt-2 text-rose-100 text-sm sm:text-base">
              Book your sanitized self-drive car in under 2 minutes. Free airport delivery and unlimited KMs packages available.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <Link
              to="/book"
              className="px-6 py-3.5 bg-white text-red-600 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition-transform active:scale-95 text-sm sm:text-base flex items-center gap-2"
            >
              <span>Book A Car Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917008732102"
              className="px-6 py-3.5 bg-red-950/60 hover:bg-red-950/80 border border-white/20 text-white font-semibold rounded-xl transition-colors text-sm sm:text-base flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Decorative car silhouette */}
          <div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none hidden lg:block">
            <img src="/assets/img/car/mahindra-thar.png" alt="Car silhouette" className="w-96" />
          </div>
        </div>

        {/* Footer 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block">
              <Logo className="h-12" variant="dark" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              DriveIT is Bhubaneswar's most trusted self-drive car rental company. Experience absolute privacy, zero security deposit options, and doorstep delivery across Odisha.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Govt. Registered & Comprehensive Insured Fleet</span>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                title="Follow DriveIT on Facebook"
                className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 flex items-center justify-center transition-all hover:scale-110 shadow-sm active:scale-95 group cursor-pointer"
              >
                <FacebookIcon className="w-5 h-5 drop-shadow-sm transition-transform group-hover:scale-110" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                title="Follow DriveIT on Instagram"
                className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#ed3474]/50 hover:bg-[#ed3474]/10 flex items-center justify-center transition-all hover:scale-110 shadow-sm active:scale-95 group cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5 drop-shadow-sm transition-transform group-hover:scale-110" />
              </a>
              <a 
                href="https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20am%20interested%20in%20booking%20a%20car" 
                target="_blank" 
                rel="noreferrer"
                title="Chat with DriveIT on WhatsApp"
                className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 flex items-center justify-center transition-all hover:scale-110 shadow-sm active:scale-95 group cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 drop-shadow-sm transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-tight">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-red-400 transition-colors"
                >
                  Home Page
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-red-400 transition-colors"
                >
                  About DriveIT
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-red-400 transition-colors"
                >
                  Explore Fleet
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-red-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-red-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-red-400 transition-colors"
                >
                  Book A Car
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cars */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-tight">Top Self-Drive Cars</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/book?car=mahindra-thar" className="hover:text-red-400 transition-colors">Mahindra Thar 4x4</Link>
              </li>
              <li>
                <Link to="/book?car=thar-roxx" className="hover:text-red-400 transition-colors">Thar Roxx (Automatic)</Link>
              </li>
              <li>
                <Link to="/book?car=scorpio-n" className="hover:text-red-400 transition-colors">Mahindra Scorpio-N</Link>
              </li>
              <li>
                <Link to="/book?car=maruti-ertiga" className="hover:text-red-400 transition-colors">Maruti Suzuki Ertiga</Link>
              </li>
              <li>
                <Link to="/book?car=hyundai-venue" className="hover:text-red-400 transition-colors">Hyundai Venue</Link>
              </li>
              <li>
                <Link to="/book?car=maruti-swift" className="hover:text-red-400 transition-colors">Maruti Swift (₹1699/d)</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-tight">Bhubaneswar Hub</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Bhubaneswar Airport, Railway Station, Master Canteen & Patia, Odisha</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:+917008732102" className="hover:text-white transition-colors">
                  +91 7008732102
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href="mailto:info@driveit.co.in" className="hover:text-white transition-colors">
                  info@driveit.co.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open 24 Hours / 7 Days</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} DriveIT Self Drive Cars. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-400">Terms & Conditions</Link>
            <Link to="/about" className="hover:text-slate-400">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-400">Help & Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
