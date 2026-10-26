'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Zap, Car } from 'lucide-react';

export interface ParallaxComponentProps {
  title?: string;
  badge?: string;
  subtitle?: string;
  showContent?: boolean;
}

export function ParallaxComponent({
  title = "DRIVE BEYOND",
  badge = "Self-Drive Freedom Across Odisha",
  subtitle = "Puri Beaches • Konark Highway • Koraput Hills • Chilika Lagoon",
  showContent = true
}: ParallaxComponentProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    let tickerCallback: ((time: number) => void) | null = null;
    let lenis: Lenis | null = null;

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top top",
          end: "bottom top",
          scrub: 0.5
        }
      });

      const layers = [
        { layer: "1", yPercent: 40 },
        { layer: "2", yPercent: 25 },
        { layer: "3", yPercent: 15 },
        { layer: "4", yPercent: -5 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    try {
      lenis = new Lenis();
      lenis.on('scroll', ScrollTrigger.update);
      tickerCallback = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    } catch (err) {
      console.warn('Lenis smooth scroll initialization skipped:', err);
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="parallax relative w-full overflow-hidden bg-slate-950" ref={parallaxRef}>
      
      {/* 3D Multi-Layer Visual Header */}
      <section className="parallax__header relative w-full h-[52vh] sm:h-[65vh] md:h-[78vh] lg:h-[84vh] flex items-center justify-center overflow-hidden">
        <div className="parallax__visuals relative w-full h-full flex items-center justify-center">
          
          <div className="parallax__black-line-overflow absolute inset-0 pointer-events-none" />

          {/* Multi-Layer Parallax Elements */}
          <div data-parallax-layers className="parallax__layers relative w-full h-full flex items-center justify-center overflow-hidden">
            
            {/* Layer 1: Distant Sky & Mountains */}
            <img
              src="https://cdn.21st.dev/assets/mirror/a4/a43f4eae3459c461345ee676f12d6e1ddca65e8a5279a5af00d475b17ff83aea.webp"
              loading="eager"
              width="800"
              data-parallax-layer="1"
              alt="Mountain Sky Horizon"
              className="parallax__layer-img absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none scale-105"
            />

            {/* Layer 2: Midground Mountain Ridge */}
            <img
              src="https://cdn.21st.dev/assets/mirror/50/50ca6a0d36d2780bfcb469d6db7eaec0be7e0d2961ba69a63d2a1473b040338d.webp"
              loading="eager"
              width="800"
              data-parallax-layer="2"
              alt="Midground Mountain Ridge"
              className="parallax__layer-img absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none scale-105"
            />

            {/* Layer 3: Floating Bold Display Title (Nestled Between Midground & Foreground) */}
            <div data-parallax-layer="3" className="parallax__layer-title relative z-10 text-center px-4 max-w-4xl mx-auto select-none pointer-events-none">
              {badge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-red-600/30 border border-red-500/40 text-red-200 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest backdrop-blur-md mb-2 sm:mb-4 shadow-xl">
                  <Compass className="w-3.5 h-3.5 text-red-400" />
                  <span>{badge}</span>
                </div>
              )}

              <h2 className="parallax__title text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white drop-shadow-[0_20px_45px_rgba(0,0,0,0.9)] leading-[0.95]">
                {title}
              </h2>

              {subtitle && (
                <p className="mt-2 sm:mt-3 text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-200 font-bold max-w-lg mx-auto drop-shadow-md">
                  {subtitle}
                </p>
              )}
            </div>

            {/* Layer 4: Modern 4x4 Car (Mahindra Thar Roxx) replacing the original man silhouette */}
            <div
              data-parallax-layer="4"
              className="absolute bottom-0 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-[10%] md:right-[15%] z-20 w-[240px] xs:w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px] pointer-events-none select-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)]"
            >
              <img
                src="/assets/img/car/thar-roxx.png"
                alt="Mahindra Thar 4x4 Modern Car"
                className="w-full h-auto object-contain pointer-events-none select-none"
                onError={(e) => {
                  e.currentTarget.src = '/assets/img/car/mahindra-thar.png';
                }}
              />
            </div>

          </div>

          {/* White shadow/wash gradient completely removed as requested */}
        </div>
      </section>

      {/* Feature Badges & Direct Booking Bar */}
      {showContent && (
        <section className="parallax__content relative z-30 bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto">
            
            {/* Quick Benefits Highlights Bar with Scroll Reveal */}
            <div className="reveal-on-scroll grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-black text-xs sm:text-sm text-slate-900">20+ Sanitized Cars</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Thar, Scorpio, Creta, Swift</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-black text-xs sm:text-sm text-slate-900">Zero Deposit Option</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Drive without heavy locks</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-black text-xs sm:text-sm text-slate-900">Free Airport Handover</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">BBI arrival gate in 15 mins</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-black text-xs sm:text-sm text-slate-900">Unlimited KMs</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium">No distance limits on trip</span>
                </div>
              </div>
            </div>

            {/* CTA action bar */}
            <div className="reveal-scale delay-150 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white shadow-xl border border-slate-800">
              <div className="text-center sm:text-left">
                <h3 className="text-sm sm:text-base md:text-lg font-black text-white">
                  Ready To Explore Odisha’s Best Scenic Routes?
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Pick your favorite self-drive car with instantaneous online booking & automated Fastag.
                </p>
              </div>

              <Link
                to="/cars"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 shrink-0 group"
              >
                <span>Browse Fleet Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}

export default ParallaxComponent;
