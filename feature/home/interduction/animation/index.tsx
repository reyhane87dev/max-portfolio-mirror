import { gsap } from "gsap";
import SplitType from "split-type";

export default function animation() {
  const scrollTrigger = {
    trigger: ".interduction",
    start: "top top",
    scrub: true,
  };

  gsap.from(".interduction .background-text span", {
    y: -200,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: { ...scrollTrigger, pin: true },
  });

  gsap.from(".interduction img", {
    scale: 0.5,
    scrollTrigger,
  });

  const text = new SplitType(".interduction .content p");

  text.chars!.forEach((char, index) => {
    gsap.set(char, {
      x: index % 2 == 0 ? 200 : -200,
      y: Math.random() * -300,
      opacity: 0,
    });
  });
  gsap.to(text.chars, {
    x: 0,
    y: 0,
    opacity: 1,
    scrollTrigger,
  });
}
