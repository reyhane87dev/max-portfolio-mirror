"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import animation from "./animation";

function Last() {
  const yearRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    animation(yearRef);
  }, []);

  return (
    <section className="last">
      <div ref={yearRef} className="background-text ">
        2019 2025
      </div>

      <div className="content">
        <p className="text-xl xl:text-4xl w-80 xl:w-120">
          FOR ME, A WEBSITE IS NOT JUST CODE ON SCREEN.
        </p>
        <p className="lg:text-lg w-80">
          {`SINCE 2020 I'VE BEEN DEDICATED TO BUILDING DIGITAL EXPERIENCES DEFINED BY SMOOTH ANIATIONS MINIMALISTIC INTERFACES, AND IMPPERSIVE 3D`}
        </p>
      </div>

      <div className="image-container">
        <Image
          className="w-40 lg:w-60"
          src="/max-about-page.jpg"
          alt="max milkin - frontend developer"
          width={200}
          height={300}
        />
      </div>
    </section>
  );
}

export default Last;
