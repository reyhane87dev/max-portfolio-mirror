"use client";
import { useGSAP } from "@gsap/react";
import animation from "./animation";
import ConfirmButton from "./components/ConfirmButton";
import SelectBudget from "./components/SelectBudget";
import { memo } from "react";

function Contact() {
  useGSAP(animation, []);

  return (
    <div id="contact" className="contact">
      <section>
        <div className="flex-col-center gap-6">
          <span className="text-white text-xs">{`[ N.006 ]`}</span>
          <span className="mt-4 text-xs">{`( CONTACT FORM. )`}</span>
          <p className="text-xl md:text-3xl">LETS MAKE YOUR PROJECT SPECIAL</p>
          <div className="black-bar"></div>
        </div>

        <div className="form-container">
          <input placeholder="YOUR NAME" type="text" />
          <input type="email" placeholder="YOUR EMAIL" />
          <textarea placeholder="YOUR MESSAGE" />
          <SelectBudget />
          <ConfirmButton />
        </div>
      </section>
    </div>
  );
}
export default memo(Contact);
