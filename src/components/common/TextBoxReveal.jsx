import React, { useEffect, useRef, useState } from 'react';
import TextReveal from './TextReveal';

/**
 * TextBoxReveal Component
 * Complete animated text-box block for section intros.
 * Supports: badge, animated title, description paragraph, and action links.
 */
export default function TextBoxReveal({
  badge,
  badgeIcon: BadgeIcon,
  badgeClass = 'bg-red-50 text-red-600 border border-red-200/80',
  title,
  titleClass = 'text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight',
  highlight = '',
  highlightClass = 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500',
  description,
  descriptionClass = 'text-slate-600 text-sm sm:text-base leading-relaxed',
  align = 'center', // 'center' | 'left'
  action,
  className = '',
  delay = 0,
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.7 && rect.bottom > 50) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const isLeft = align === 'left';

  return (
    <div
      ref={containerRef}
      className={`${className} ${
        isLeft ? 'text-left' : 'text-center mx-auto'
      }`}
    >
      {/* 1. Animated Badge */}
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${badgeClass} ${
            isVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 translate-y-3'
          }`}
        >
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 shrink-0" />}
          <span>{badge}</span>
        </div>
      )}

      {/* 2. Word-by-Word Staggered Animated Title */}
      {title && (
        <TextReveal
          text={title}
          highlight={highlight}
          highlightClass={highlightClass}
          as="h2"
          className={titleClass}
        />
      )}

      {/* 3. Smooth Unblurring Subtitle */}
      {description && (
        <p
          className={`mt-3 font-medium transition-all duration-800 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${descriptionClass} ${
            isVisible
              ? 'opacity-100 translate-y-0 blur-none'
              : 'opacity-0 translate-y-5 blur-[4px]'
          }`}
        >
          {description}
        </p>
      )}

      {/* 4. Action Button / Link */}
      {action && (
        <div
          className={`mt-5 transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          {action}
        </div>
      )}
    </div>
  );
}
