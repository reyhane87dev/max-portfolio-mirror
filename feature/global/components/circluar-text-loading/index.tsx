"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface CircularTextLoadingProps {
  onComplete?: () => void;
  duration?: number;
}

const CircularTextLoading: React.FC<CircularTextLoadingProps> = ({
  onComplete,
  duration = 5000,
}) => {
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const words = ["MAX MILKIN", "FRONTEND", "REACT", "WORDPRESS", "MINIMALIST"];

  useEffect(() => {
    function setTrueIsMounted() {
      setIsMounted(true);
    }
    setTrueIsMounted();
  }, []);

  useEffect(() => {
    if (!isMounted || !circlesRef.current) return;

    const container = circlesRef.current;
    container.innerHTML = "";

    const circleElements: HTMLDivElement[] = [];

    const isMobile = window.innerWidth < 768;

    words.forEach((word, wordIndex) => {
      const chars = word.split("");
      const radius = isMobile ? 40 + wordIndex * 22 : 70 + wordIndex * 38;

      const angleStep = (Math.PI * 2) / chars.length;
      const startAngle = wordIndex * 0.2;

      const circleDiv = document.createElement("div");
      circleDiv.className = "absolute";
      circleDiv.style.width = "100%";
      circleDiv.style.height = "100%";
      circleDiv.style.position = "absolute";
      circleDiv.style.left = "0";
      circleDiv.style.top = "0";
      circleDiv.setAttribute("data-circle", wordIndex.toString());

      chars.forEach((char, charIndex) => {
        const angle = startAngle + charIndex * angleStep;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = angle * (180 / Math.PI) + 90;

        const span = document.createElement("span");
        span.textContent = char;
        span.setAttribute("data-loading-char", "true");
        span.setAttribute("data-circle-index", wordIndex.toString());
        span.style.position = "absolute";
        span.style.left = "50%";
        span.style.top = "50%";
        span.style.transform = `translate(-50%, -50%) translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${rotation.toFixed(2)}deg)`;

        if (isMobile) {
          span.style.fontSize = wordIndex === 0 ? "14px" : "12px";
        } else {
          span.style.fontSize = wordIndex === 0 ? "18px" : "16px";
        }

        span.style.fontWeight = "800";
        span.style.color = "#3C2A1F";
        span.style.opacity = "0.95";
        span.style.whiteSpace = "nowrap";
        span.style.letterSpacing = "0px";
        span.style.textShadow = "2px 2px 4px rgba(0,0,0,0.1)";
        span.className = `loading-char`;

        circleDiv.appendChild(span);
      });

      container.appendChild(circleDiv);
      circleElements.push(circleDiv);
    });

    circleElements.forEach((circle, index) => {
      gsap.to(circle, {
        rotation: 360,
        duration: isMobile ? 15 + index * 3 : 20 + index * 5,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
    });

    const chars = document.querySelectorAll(`[data-loading-char="true"]`);
    gsap.to(chars, {
      letterSpacing: isMobile ? "+=8px" : "+=14px",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.02,
    });

    return () => {
      gsap.killTweensOf([circleElements, chars]);
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const startTime = Date.now();
    let frame: number;

    const update = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setPercentage(Math.floor(progress * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [isMounted, duration]);

  // انیمیشن پایان و حذف از DOM
  useEffect(() => {
    if (!isMounted || percentage !== 100) return;

    const chars = document.querySelectorAll(`[data-loading-char="true"]`);
    const circles = document.querySelectorAll(`[data-circle]`);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        if (onComplete) onComplete();
      },
    });

    tl.to(
      chars,
      {
        letterSpacing: "30px",
        opacity: 0,
        duration: 0.8,
        stagger: 0.01,
        ease: "power3.out",
      },
      0
    )
      .to(
        circles,
        {
          rotation: "+=180",
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        0
      )
      .to(
        numberRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        0
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.8,
        },
        0
      );

    return () => {
      tl.kill();
    };
  }, [percentage, isMounted, onComplete]);

  if (!isMounted || !isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#FAF3E8] flex items-center justify-center z-[100]"
      style={{ zIndex: 9999 }}
    >
      <div
        ref={circlesRef}
        className="relative w-[350px] h-[350px] md:w-[600px] md:h-[600px] flex items-center justify-center"
      />

      <div ref={numberRef} className="absolute z-10">
        <div className="text-center">
          <div className="text-xl md:text-3xl font-light text-[#5C4033] tracking-widest">
            {percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularTextLoading;
