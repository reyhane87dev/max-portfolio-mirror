'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const smootherRef = useRef<ScrollSmoother | null>(null)

  // Init smoother
  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      speed: 0.8,
      effects: true,
      smoothTouch: 1,
      normalizeScroll: true,
    })

    return () => {
      smootherRef.current?.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  // Handle hash links
  useEffect(() => {
    const scrollToHash = (hash: string) => {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)

      if (el && smootherRef.current) {
        smootherRef.current.scrollTo(el, true)
      }
    }

    // On page load
    if (window.location.hash) {
      setTimeout(() => {
        scrollToHash(window.location.hash)
      }, 300)
    }

    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a')

      if (
        link?.hash &&
        link.href.includes(window.location.pathname)
      ) {
        e.preventDefault()
        scrollToHash(link.hash)
        window.history.pushState({}, '', link.hash)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
    }
      
