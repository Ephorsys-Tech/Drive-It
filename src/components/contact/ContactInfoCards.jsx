import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function ContactInfoCards() {
  const cards = [
    {
      icon: Phone,
      title: 'Call Directly',
      detail: '+91 7008732102',
      sub: 'Speak with our rental manager',
      href: 'tel:+917008732102',
      btnText: 'Call Now',
      color: 'text-red-500',
      bg: 'bg-red-50'
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp Booking',
      detail: '+91 7008732102',
      sub: 'Fastest KYC & instant confirmations',
      href: 'https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20want%20to%20rent%20a%20car',
      btnText: 'Chat on WhatsApp',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'driveitcarandbike@gmail.com',
      sub: 'For corporate contracts & receipts',
      href: 'mailto:driveitcarandbike@gmail.com',
      btnText: 'Send Email',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: MapPin,
      title: 'Main Delivery Hubs',
      detail: 'BBI Airport & Railway Station',
      sub: 'Patia, Khandagiri, Bhubaneswar',
      href: '#map',
      btnText: 'View On Map',
      color: 'text-amber-500',
      bg: 'bg-amber-50'
    }
  ];

  return (
    <div className="reveal-on-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-8 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      {cards.map((c, idx) => {
        const Icon = c.icon;
        return (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl ${c.bg} ${c.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
              <p className="text-sm font-extrabold text-slate-800 mt-1 break-all">{c.detail}</p>
              <p className="text-xs text-slate-500 mt-1">{c.sub}</p>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100">
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{c.btnText}</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
