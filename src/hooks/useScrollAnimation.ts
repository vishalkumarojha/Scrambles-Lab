"use client"

import { useEffect, useRef, useState } from "react"

export const useScrollAnimation = (threshold = 0.1, staggerDelay = 100) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const validThreshold = typeof threshold === "number" && isFinite(threshold) ? threshold : 0.1

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, we can stop observing
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: validThreshold,
        rootMargin: "50px 0px -50px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

export const useHoverEffect = () => {
  const [isHovered, setIsHovered] = useState(false)

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  }

  return { isHovered, hoverProps }
}
