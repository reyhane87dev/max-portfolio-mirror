import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function animation() {
  const matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: "(max-width:599px)",
      isDesktop: "(min-width:600px)",
    },
    (context) => {
      const { isMobile } = context.conditions as { isMobile: boolean };

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            toggleActions: "play reverse reverse play",
          },
        })
        .from(".hero img", {
          scale: isMobile ? 1 : 1.2,
          duration: 1.5,
          ease: "easeInOut",
        })
        .from(".hero p", {
          delay: 0.5,
          translateY: isMobile ? 80 : 0,
          translateX: isMobile ? 0 : 80,
          opacity: 0,
          duration: 1,
        });
    }
  );
}
