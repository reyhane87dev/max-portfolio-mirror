'use client'
import "@/styles/base.css";
import "@/styles/components.css";
import "@/styles/utilities.css";
import Nav from "@/feature/global/nav";
import CircularTextLoading from "@/feature/global/components/circluar-text-loading";
import SmoothScroll from '@/feature/global/components/smooth-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hasAnimatedExit = useRef(false);

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.fade-up').forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => gsap.to(el, { y: 0, opacity: 1, duration: 1 }),
        onLeaveBack: () => gsap.to(el, { y: 30, opacity: 0, duration: 0.5 }),
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  useEffect(() => {
    hasAnimatedExit.current = false;
    
    const overlay = document.querySelector(".transition-screen");
    if (!overlay) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (hasAnimatedExit.current) return;
        hasAnimatedExit.current = true;
        
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(overlay, { y: "100vh" });
          }
        });

        tl.to(overlay, {
          y: "-100vh",
          duration: 0.8,
          ease: "power3.in"
        });
      });
    });

  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>Max Milkin - Creative Frontend Developer</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <div className="transition-screen">
          <span >PLEASE HOLD ON</span>
        </div>
        
        <CircularTextLoading />
        
        <Nav />
        
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}