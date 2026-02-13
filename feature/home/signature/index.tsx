"use client";
import { useGSAP } from "@gsap/react";
import animation from "./animation";
import { memo } from "react";

function Signature() {
  useGSAP(animation, []);

  return (
    <div className="signature">
      <section>
        {/* top */}
        <div className="flex-between">
          <span>[N.001]</span>
          <div className="pill">
            dev <span className="white-ball"></span>
          </div>
        </div>
        {/* center */}
        <div className="content">
          {/* text */}
          <p>
            <span>IN CODE AND IN LIFE,</span>
            <br />
            <span className="mr-10">I STRIVE</span>
            <span> TO KEEP ONLY </span>
            <br />
            <span>WHAT MATTERS AND REMOVE THE REST</span> <br />
            <span>WHAT STAYS IS STRONGER, CLEARER,</span> <br />
            <span className="ml-50 ">AND MORE </span>
            <br />
            <span className="ml-40">MEANINGFULL.</span>
          </p>
          {/* signature */}
          <svg
            viewBox="0 0 400 400"
          >
            <path
              style={{
                fill: "none",
                stroke: "rgb(0, 0, 0)",
                strokeWidth: "2px",
              }}
              d="M 79.381 232.99 L 385.567 163.918 L 205.155 332.99 C 205.155 332.99 57.732 493.814 192.783 312.371 C 327.834 130.928 167.01 288.66 167.01 288.66 L 195.876 247.423 L 111.34 340.206 L 362.887 55.67"
            ></path>
          </svg>
        </div>
        {/* bottom */}
        <div className="flex-between">
          {/* edition-counter */}
          <div className="edition-counter ">
            <svg viewBox="0 0 120 120" className="progress-ring">
              <g className="ticks" />
            </svg>
            <span className="edition-number  ">1</span>
          </div>
          <span className="">EDITION_2.0</span>
        </div>
      </section>
    </div>
  );
}
export default  memo(Signature)