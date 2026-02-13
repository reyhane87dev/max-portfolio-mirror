import { gsap } from "gsap";
export default function animation() {
  const tickGroup = document.querySelector(".signature .ticks") as SVGGElement;

  const numberEl = document.querySelector(".edition-number") as HTMLSpanElement;

  const TOTAL_TICKS = 60;
  const RADIUS = 45;
  const CENTER = 60;

  for (let i = 0; i < TOTAL_TICKS; i++) {
    const angle = (i / TOTAL_TICKS) * Math.PI * 2;

    const x1 = CENTER + Math.cos(angle) * RADIUS;
    const y1 = CENTER + Math.sin(angle) * RADIUS;

    const x2 = CENTER + Math.cos(angle) * (RADIUS - 8);
    const y2 = CENTER + Math.sin(angle) * (RADIUS - 8);

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", `${x1}`);
    line.setAttribute("y1", `${y1}`);
    line.setAttribute("x2", `${x2}`);
    line.setAttribute("y2", `${y2}`);

    tickGroup.appendChild(line);
  }

  const ticks = gsap.utils.toArray<SVGLineElement>(".signature .ticks line");


  const path = document.querySelector(".signature svg path") as SVGPathElement;

  gsap.set(".signature .content span", {
    x: 200,
    opacity: 0,
  });

  gsap.set(".signature section", {
    opacity: 0,
  });

  gsap.set(path, {
    strokeDasharray: path!.getTotalLength(),
    strokeDashoffset: path!.getTotalLength(),
  });

  gsap.to(".white-ball", {
    // animation for all the white balls
    opacity: 1,
    repeat: Infinity,
    yoyo: true,
  });

  // time line 
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".signature",
        start: "top top",
        pin: true,
        scrub: true,
      },
      duration: 1,
    })
    .to(".signature", {
      backgroundColor: "#bbb",
    })
    .to(
      ".signature section",
      {
        opacity: 1,
        duration: 5,
      },
      "<"
    )
    .to(
      ".signature .content span",
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
      },
      "<"
    )
    .to(path, {
      strokeDashoffset: 0,
      duration: 2,
    })
    .to(
      ticks,
      {
        opacity: 1,
        ease: "easeInOut",
        stagger: {
          each: 0.02,
        },
        onUpdate: function () {
          const progress = this.progress();
          const newValue = 1 + Math.floor(progress * 1);

          numberEl.textContent = newValue.toString();
        },
      },
      ">"
    );
}
