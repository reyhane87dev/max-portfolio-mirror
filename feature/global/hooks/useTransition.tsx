// hooks/useTransition.ts
"use client";

import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useRef } from "react";

export function useTransition() {
  const router = useRouter();
  const transitionRef = useRef<gsap.core.Timeline | null>(null);

  const startTransition = (targetPath: string) => {
    if (transitionRef.current?.isActive()) return;

    const overlay = document.querySelector(".transition-screen");
    if (!overlay) {
      router.push(targetPath);
      return;
    }

    const text = new SplitType(".transition-screen span");
    
    gsap.set(overlay, { y: "100vh" });
    gsap.set(text.chars, { opacity: 0, x: -20 });

    // فقط انیمیشن ورود
    transitionRef.current = gsap
      .timeline({
        onComplete: () => {
          router.push(targetPath);
        },
      })
      .to(overlay, { 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .to(text.chars, { 
        opacity: 1, 
        x: 0, 
        stagger: 0.05, 
        duration: 0.5 
      }, "-=0.3");
  };

  return { startTransition };
}