"use client"

import type React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center pt-16 sm:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div
          className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white hover:text-lime-400 transition-colors duration-500">
            Learn <span className="text-lime-400 italic">Marketing</span> from
            <br />
            First Principles
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl hover:text-white transition-colors duration-300">
            Through a structured curriculum, live mentorship with seasoned CMOs, and curated networking opportunities,
            we bridge the knowledge gap for individuals to take their next big step in their marketing journeys.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-lime-400 hover:shadow-2xl hover:shadow-lime-400/20 transition-all duration-500 hover:scale-105">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-400 text-xs sm:text-sm mb-2 hover:text-lime-400 transition-colors duration-300">
                HAVEN'T APPLIED ?
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white hover:text-lime-400 transition-colors duration-300">
                Break into <span className="text-lime-400 italic">Marketing</span>
              </h3>
              <p className="text-gray-300 mt-4 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Get exclusive access to the
                <br />
                fellowship at just
              </p>
              <div className="text-4xl sm:text-5xl font-bold text-lime-400 mt-4 mb-6 hover:scale-110 transition-transform duration-300">
                ₹49,999
              </div>
            </div>

            <button className="w-full bg-lime-400 text-black py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-lime-300 hover:scale-105 hover:shadow-lg transition-all duration-300 min-h-[44px]">
              Apply to C3
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
