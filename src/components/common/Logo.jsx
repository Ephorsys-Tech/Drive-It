import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = "h-10 sm:h-12 lg:h-13", showText = false, variant = "light" }) {
  return (
    <Link
      to="/"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-flex items-center group transition-transform duration-200 hover:scale-[1.03]"
    >
      <img 
        src="/assets/img/logo/logo5.png" 
        alt="DriveIT Self Drive Cars" 
        className={`${className} w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          variant === 'dark' ? 'bg-white rounded-xl p-1.5 shadow-sm' : ''
        }`}
      />
      {showText && (
        <div className="flex flex-col text-left ml-2.5">
          <span className={`text-xl font-extrabold tracking-tight leading-none ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            DRIVE<span className="text-red-600">IT</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
            Self Drive Cars
          </span>
        </div>
      )}
    </Link>
  );
}
