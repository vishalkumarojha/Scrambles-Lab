"use client"

import type React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const RightForYouSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  const criteria = [
    "See marketing as both a creative art and a strategic science.",
    "Value content marketing for its structure, and measurable outcomes.",
    "Are committed to continuous learning and growth, beyond basic certifications.",
    "Are ready to take initiative and actively engage with experienced mentors.",
    "Are naturally curious and actively analyze ads instead of skipping them.",
    "Consider Instagram, YouTube, and LinkedIn as powerful marketing tools.",
  ]

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl lg:text-5xl font-bold text-center mb-16 text-white hover:text-lime-400 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          The fellowship is right for you if you
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {criteria.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-800/30 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-lime-400 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/20 transition-all duration-500 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 hover:bg-lime-300 hover:scale-110 transition-all duration-300">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RightForYouSection
