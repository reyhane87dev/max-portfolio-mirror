"use client";
import WavyText from "@/feature/global/components/wavy-text";
import { useGSAP } from "@gsap/react";
import animation from "./animation";
export default function Footer() {
  useGSAP(animation, []);
  return (
    <footer>
      <ul className="section-links">
        <li>
          <WavyText>ABOUT</WavyText>
        </li>
        <li>
          <WavyText>AWARDS</WavyText>
        </li>
        <li>
          <WavyText>WORKS</WavyText>
        </li>
        <li>
          <WavyText>EXPERTISE</WavyText>
        </li>
      </ul>
      <div className="name">REYHANE87DEV</div>
      <ul className="social-media">
        <li>Linkdin</li>
        <li>Telegram</li>
        <li>WhatsApp</li>
      </ul>
      <div className="email">EMAIL:REYHANE87DEV@GMAIL.COM</div>
      <div className="job">CREATIVE FRONTEND DEVELOPER</div>

      <div className="bottom">
        <p>
          2025 .All right reserved. Max Milkin <br />
          Any reproduction, distribution, or use of the materials without
          permission is prohibited.
        </p>
        <span className="design">WEBSITE DESIGN - www.olhalazarieva.com</span>
        <span className="pill border-slate-700">
          fres <div className="white-ball bg-slate-700"></div>{" "}
        </span>
      </div>
    </footer>
  );
}
