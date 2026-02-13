"use client";
import { useGSAP } from "@gsap/react";
import animation from "./animation";
import { memo } from "react";

function Expertise() {
  useGSAP(animation, []);
  return (
    <div id="expertise" className="expertise">
      <section>
        <div className="flex-between">
          <span>{"(EXPERTISE.)"}</span>
          <span>{"[N.005]"}</span>
        </div>
        <ul className="skills">
          <li>/ UI\UX DESIGN</li>
          <span>.</span>
          <li>/ WEB DESIGN</li>
          <span>.</span>
          <li>/ DEVELOPMENT</li>
          <span>.</span>
          <li>/ 3D GRAPHICS</li>
        </ul>
        <div className="pill-container ">
          <div className=" mt-10">
            <button className="pill border-white">/ LANDING PAGES</button>
            <button className="pill border-white">/ CORPORATE WEBSITES</button>
          </div>
          <div>
            <button className="pill border-white">
              / PERSONAL BRAND SITES
            </button>
            <button className="pill border-white">/ E-COMMERCE / STORES</button>
          </div>
          <div>
            <button className="pill border-white">
              / SHOWCASE / AWARDS SITES
            </button>
            <button className="pill border-white">/ NEWS & COMMUNITIES</button>
          </div>
        </div>
        <ul className="tools">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JAVASCRIPT</li>
          <li>GSAP</li>
          <li>THREE JS</li>
          <li>REACT</li>
          <li>REACT THREE FIBER</li>
          <li>BLENDER</li>
          <li>WORDPRESS</li>
        </ul>
        <div className="flex-between bottom">
          <span>+</span>
          <span>+</span>
        </div>
      </section>
    </div>
  );
}
export default memo(Expertise);
