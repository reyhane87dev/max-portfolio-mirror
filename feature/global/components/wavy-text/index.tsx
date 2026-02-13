"use client";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { memo, useRef } from "react";

function WavyText({ children }: { children: string }) {
  const animation = useRef<gsap.core.Tween>(null);
  const text = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const { chars } = new SplitType(text.current!);

    animation.current = gsap.to(chars, {
      stagger: 0.1,
      opacity: 0.6,
      scale: 1.2,
      paused: true,
    });
  }, []);

  return (
    <span
      ref={text}
      onMouseEnter={() => animation.current?.play()}
      onMouseLeave={() => animation.current?.reverse()}
      className={"cursor-pointer "}
    >
      {children}
    </span>
  );
}
 
export default  memo(WavyText)