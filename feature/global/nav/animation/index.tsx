import { gsap } from "gsap";

export default function animation() {
    gsap.set(".transition-overlay", {
      y: "100vh",
    });

    gsap
      .timeline()
      .from(".mobile-menu", {
        opacity: 100,
      })
      .from(".mobile-menu li", {
        stagger: 0.1,
        x: 100,
        opacity: 0,
      });
}
