// components/SmoothScroll.tsx
'use client'
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      smooth: 2,
      speed: 0.8,
      effects: true,
      smoothTouch: 1,
      normalizeScroll: true,
    });

    return () => {
      smootherRef.current?.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // هندل هش لینک‌ها
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el && smootherRef.current) {
            smootherRef.current.scrollTo(el, { duration: 1.5 });
          }
        }, 500);
      }
    };

    handleHash();

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      if (link?.hash && link.href.includes(window.location.pathname)) {
        e.preventDefault();
        const id = link.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el && smootherRef.current) {
          smootherRef.current.scrollTo(el, { duration: 1.5 });
          window.history.pushState({}, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}