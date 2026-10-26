import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global ScrollObserver Component
 * Automatically detects elements with scroll animation classes:
 * .text-reveal-scroll, .reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, [data-reveal]
 * Adds the 'is-visible' class when scrolled into view.
 */
export default function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    let observer;
    let mutationObserver;

    const SELECTOR = '.text-reveal-scroll, .reveal-textbox, .reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, [data-reveal]';

    const observerCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    };

    observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    });

    const registerElements = () => {
      const targets = document.querySelectorAll(SELECTOR);
      targets.forEach((el) => {
        if (el.classList.contains('is-visible')) return;

        const rect = el.getBoundingClientRect();
        // Only mark elements immediately visible if they are already in the top 45% of the viewport (Hero only)
        if (rect.top < window.innerHeight * 0.45 && rect.bottom > 60) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    };

    // Run after paint
    const timer = setTimeout(registerElements, 80);

    // Also observe new DOM nodes if components render dynamically
    mutationObserver = new MutationObserver(() => {
      registerElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
}
