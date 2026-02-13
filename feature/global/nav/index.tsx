"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useRouter, usePathname } from "next/navigation";
import tabList from "./data";
import Hamburgar from "./icons/Hamburgar";
import Close from "./icons/Close";
import WavyText from "@/feature/global/components/wavy-text";
import { useTransition } from "@/feature/global/hooks/useTransition";
import animation from "./animation";

export default function Nav() {
  const [isClosed, setIsClosed] = useState(true);
  const { startTransition } = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  useGSAP(animation, [isClosed]);

  const handleAboutClick = () => {
    setIsClosed(true);
    startTransition("/about");
  };

  const handleHashLink = (url: string) => {
    setIsClosed(true);

    const hash = url.split("#")[1];

    if (pathname) {
      startTransition(url);
    } else if (hash) {
      router.push(`/#${hash}`);
    } else {
      router.push(url);
    }
  };

  return (
    <header>
      <nav className="relative">
        <h1 className="brand">
          <WavyText>MAX MILKIN</WavyText>
        </h1>
        <ul className="desktop-menu">
          <li onClick={handleAboutClick}>
            <WavyText>ABOUT</WavyText>
          </li>
          {tabList.map((tab, index) => (
            <li onClick={() => handleHashLink(tab.url)} key={index}>
              <WavyText>{tab.title}</WavyText>
            </li>
          ))}
        </ul>

        {!isClosed && (
          <ul className="mobile-menu">
            <li onClick={handleAboutClick}>
              <WavyText>ABOUT</WavyText>
            </li>
            {tabList.map((tab, index) => (
              <li onClick={() => handleHashLink(tab.url)} key={index}>
                <WavyText>{tab.title}</WavyText>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={() => setIsClosed((prev) => !prev)}
          className="sm:hidden right-6 absolute"
        >
          {isClosed ? <Hamburgar /> : <Close />}
        </button>
      </nav>
    </header>
  );
}
