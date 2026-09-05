'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Gentle fade-up as sections enter the viewport.
 *
 * Content is visible by default. Only elements that are BELOW the fold when the
 * route renders are hidden and then revealed, so a JS failure — or a browser
 * without IntersectionObserver — can never leave a page blank.
 *
 * Re-runs on every route change, because the App Router keeps this component
 * mounted across navigations.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const show = (el: HTMLElement) => {
      el.classList.add('armed', 'in');
    };

    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
    );

    els.forEach((el) => {
      if (el.classList.contains('in')) return;
      const rect = el.getBoundingClientRect();
      // Already on screen (or above it) — show immediately, never hide.
      if (rect.top < window.innerHeight * 0.95) {
        show(el);
        return;
      }
      el.classList.add('will-reveal');
      // Arm the transition a frame later so the hide is instant and only the
      // reveal animates.
      requestAnimationFrame(() => el.classList.add('armed'));
      io.observe(el);
    });

    // Failsafe: nothing stays hidden for longer than a few seconds.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal.will-reveal').forEach(show);
    }, 4000);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
