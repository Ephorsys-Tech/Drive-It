import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollToTop Component
 * 1. Automatically scrolls to top (0, 0) upon any route navigation (e.g. from Contact to Home).
 * 2. Displays a sleek floating 'Scroll to Top' button when scrolled down > 300px.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 1. Guaranteed top scroll on route transitions
  useEffect(() => {
    // Prevent browser from restoring scroll position down the page
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top instantly on page navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Small backup timeout to handle dynamic DOM mount heights
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
    }, 40);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 2. Track scroll position for floating action button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-6 right-5 sm:right-7 z-50 p-3 sm:p-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white shadow-[0_8px_30px_rgba(234,27,37,0.45)] hover:shadow-[0_12px_40px_rgba(234,27,37,0.7)] border border-white/20 transition-all duration-300 transform cursor-pointer group active:scale-90 ${
        showScrollTop
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
