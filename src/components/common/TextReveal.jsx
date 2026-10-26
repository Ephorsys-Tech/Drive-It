import React, { useEffect, useRef, useState } from 'react';

/**
 * TextReveal Component
 * Splits text into words and animates each word up with a mask unpeel + unblur stagger
 * as the user scrolls into the section.
 */
export default function TextReveal({
  text,
  className = '',
  as: Component = 'h2',
  highlight = '',
  highlightClass = 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 font-black',
  staggerMs = 40,
  delayMs = 0,
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75 && rect.bottom > 50) {
      const timer = setTimeout(() => setIsVisible(true), delayMs);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delayMs);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  const words = (text || '').split(' ');

  return (
    <Component
      ref={containerRef}
      className={`${className} overflow-hidden leading-tight`}
    >
      {words.map((word, idx) => {
        const isHighlighted =
          highlight &&
          word.toLowerCase().replace(/[^a-z0-9]/g, '').includes(
            highlight.toLowerCase().replace(/[^a-z0-9]/g, '')
          );

        return (
          <span
            key={idx}
            className="inline-block overflow-hidden mr-[0.24em] align-top py-0.5 last:mr-0"
          >
            <span
              className={`inline-block transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? 'translate-y-0 opacity-100 blur-none'
                  : 'translate-y-[120%] opacity-0 blur-[6px]'
              } ${isHighlighted ? highlightClass : ''}`}
              style={{
                transitionDelay: `${idx * staggerMs}ms`,
                willChange: 'transform, opacity, filter',
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
