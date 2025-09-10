"use client"

import type React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-4xl lg:text-5xl font-bold mb-12 text-white hover:text-lime-400 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          About Scramble Labs
        </h2>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed hover:text-white transition-colors duration-500 cursor-default">
            <span className="text-lime-400 italic font-semibold hover:text-lime-300 transition-colors duration-300">
              Scramble Labs
            </span>{" "}
            is more than just a learning program. It's a launchpad for future marketing leaders. You'll dive into
            real-world marketing challenges, learn directly from top CMOs, and build a strong network of mentors and
            peers who are where you want to go. If you're ready to grow, lead, and make your mark in the marketing
            world, this is where it starts.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
