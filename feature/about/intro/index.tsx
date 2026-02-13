"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import animation from "./animation";


export default function Intro() {
  useGSAP(animation, []);
  return (
    <section className="intro">
      <div>(ABOUT ME.)</div>
      <h2>A CREATIVE FRONTEND DEVELOPER</h2>
      <Image
        src="/young-max.jpg"
        alt="max's childhood"
        width={200}
        height={300}
      />
      <p>Max future frontend developer</p>
    </section>
  );
}
