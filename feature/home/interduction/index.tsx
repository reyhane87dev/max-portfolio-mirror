"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import TextAnimation from "@/feature/global/components/wavy-text";

import animation from "./animation";
import { memo } from "react";

function Interduction() {
  useGSAP(animation, []);

  return (
    <div className="interduction ">
      <section>
        {/* top */}
        <div>
          <div className="top">
            <span>(ABOUT.)</span>
            <span>[N.002]</span>
          </div>
          <div className="vertical-bar"></div>
        </div>
        {/* large text in the background */}
        <div className="background-text">
          <span className="-top-5 left-0 ">FUNDAM</span>
          <span className="top-25 left-0 ">MENTALS</span>
          <span className="top-65  right-0 ">OF WEB</span>
          <span className="top-95  right-0 ">DEVELOP</span>
          <span className="top-130  right-0 ">MENT</span>
        </div>
        {/* content ,including image and text */}
        <div className="content-container">
          <div className="content">
            <Image
              className="w-50"
              src="/max.jpg"
              alt="max milkin image"
              width={600}
              height={800}
            />
            <p>
              Hi, I’m Max - a Creative Frontend Developer.My focus is on
              building sleek, animated, and immersive experiencesthat transform
              simple websites into something extraordinary.
            </p>
          </div>
        </div>
        {/* bottom */}
        <div className="bottom">
          <span className="horizontal-bar"></span>
          <button className="pill border-slate-500">
            <TextAnimation>ABOUT ME</TextAnimation>
          </button>
          <span className="sm:block hidden">[N.002]</span>
        </div>
      </section>
    </div>
  );
}
export default memo(Interduction);
