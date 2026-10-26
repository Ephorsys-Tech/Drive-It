import React from 'react';
import PolaroidLineCarousel from '@/components/ui/polaroid-line-carousel';
import { Camera, MoveHorizontal } from 'lucide-react';

const ROADTRIP_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    title: 'Puri Marine Drive',
    caption: 'Golden sea breeze & coastal curves between Konark and Puri.',
    alt: 'Puri Marine Drive Road Trip',
  },
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    title: 'Deomali Peak Hairpins',
    caption: 'Climbing Odisha’s highest elevation through misty rolling clouds.',
    alt: 'Deomali mountain drive',
  },
  {
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    title: 'Simlipal Forest Trail',
    caption: 'Thar 4x4 expedition exploring deep green sal tree reserves.',
    alt: 'Simlipal 4x4 trail',
  },
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    title: 'Chilika Lagoon Escapes',
    caption: 'Tranquil afternoon shores watching migratory flamingos.',
    alt: 'Chilika Lake self-drive trip',
  },
  {
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
    title: 'Golden Hour on NH-16',
    caption: 'Cruising back into Bhubaneswar with zero stress & unlimited kms.',
    alt: 'Highway golden hour cruise',
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    title: 'Daringbadi Pine Groves',
    caption: 'The Kashmir of Odisha — cold morning air and silent mountain passes.',
    alt: 'Daringbadi forest road',
  },
];

export default function AboutPolaroidRoadtrips() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Traveler Memories & Stories</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Captured On <span className="text-red-500">The Road</span>
        </h2>

        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
          From sun-drenched coastal highways to lush hill roads, every self-drive adventure with DriveIT creates lasting memories. Drag the line to explore snapshots from our community.
        </p>

        {/* Interactive hint for mobile, tablet, and PC */}
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800">
          <MoveHorizontal className="w-3.5 h-3.5 text-red-400 animate-pulse" />
          <span>Drag string or click photo to swing prints • Mobile, Tablet & PC ready</span>
        </div>
      </div>

      {/* Polaroid Line Carousel Container - fully responsive */}
      <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[620px] overflow-hidden select-none">
        <PolaroidLineCarousel
          slides={ROADTRIP_SLIDES}
          height="100%"
          cardWidth={290}
          sag={52}
          swing={1.1}
          autoplay={5000}
          string="#c8bca8"
          background="#0b0f19"
          ink="#ffffff"
          ariaLabel="Customer road trip memory photos"
        />
      </div>
    </section>
  );
}
