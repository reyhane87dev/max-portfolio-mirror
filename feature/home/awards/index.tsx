"use client";
import Image from "next/image";
import data from "@/feature/home/awards/data";
import { useGSAP } from "@gsap/react";
import animation from "./animation";
import { memo } from "react";
function Awards() {
  useGSAP(animation, []);

  return (
    <div id="awards" className="awards">
      <section>
        <span className="large-number">18</span>

        <div className="sm:flex hidden justify-end">
          <span>[N.003]</span>
        </div>
        <div className="sm:block hidden mt-10">(AWARDS.)</div>

        <p>
          Awards are part of the success <br />
          I share with my clients — <br />
          through websites built to win <br />
        </p>
        <h3 className="title ">
          MY PROJECTS
          <span>
            HAVE RECEIVED
            <br />
            INTERNATIONAL RECOGINITION
          </span>
        </h3>
        <ul>
          {data.map(({ title, description, number }, index) => {
            return (
              <li key={index}>
                <span>{number}X</span>
                <span>{title}</span>
                <span>{description}</span>
              </li>
            );
          })}
        </ul>
      </section>
      <Image
        src="/awards-bg.png"
        width={2000}
        height={1000}
        className="mt-10"
        alt="awards bg"
      />
    </div>
  );
}
export default memo(Awards)