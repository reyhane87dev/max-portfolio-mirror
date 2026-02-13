import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function animation(
  yearRef: React.RefObject<HTMLDivElement | null>
) {

  if (!yearRef.current) return

  const counter = { value: 2019 }
  const endValue = 2026

  gsap.to(counter, {
    value: endValue,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.last',
      start: 'top 70%',
      scrub : true,
    },
    onUpdate: () => {
      yearRef.current!.textContent = `2019 ${Math.floor(counter.value)}`
    },
  })

  // انیمیشن قبلی محتوا
  gsap.from('.last .content', {
    y: 400,
    opacity: 0,
    scrollTrigger: {
      trigger: '.last',
      start: 'top top',
    },
  })
}
