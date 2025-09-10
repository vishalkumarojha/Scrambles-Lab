"use client"

import { useState, useEffect } from "react"

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? "down" : "up"

      // Only update if scroll direction changed and scrolled more than 10px
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction)
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0)
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => window.removeEventListener("scroll", updateScrollDirection)
  }, [scrollDirection, lastScrollY])

  return scrollDirection
}
