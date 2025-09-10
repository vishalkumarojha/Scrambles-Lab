"use client"
import type React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const CTASection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/10 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex flex-col lg:flex-row min-h-[300px]">
            {/* Left side - Dark */}
            <div className="flex-1 bg-gray-800 p-8 lg:p-12 flex items-center justify-center relative hover:bg-gray-700 transition-colors duration-500">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 mb-4 text-lg hover:text-lime-400 transition-colors duration-300">
                  Haven't applied yet?
                </p>
                <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight hover:text-lime-400 transition-colors duration-500">
                  Start your <span className="font-semibold">CMO</span>
                  <br />
                  <span className="font-semibold">Journey</span>
                </h2>
              </div>

              {/* Curved separator */}
              <div className="absolute right-0 top-0 bottom-0 w-16 hidden lg:block">
                <svg
                  className="w-full h-full text-white"
                  viewBox="0 0 64 300"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,0 Q32,150 0,300 L64,300 L64,0 Z" />
                </svg>
              </div>
            </div>

            {/* Right side - Light */}
            <div className="flex-1 bg-white p-8 lg:p-12 flex items-center justify-center hover:bg-gray-50 transition-colors duration-500">
              <div className="text-center">
                <p className="text-gray-700 mb-4 text-lg hover:text-gray-900 transition-colors duration-300">
                  Get exclusive access to
                  <br />
                  the fellowship at just
                </p>
                <div className="text-4xl font-bold text-gray-900 mb-6 hover:text-lime-600 hover:scale-110 transition-all duration-300">
                  ₹49,999
                </div>
                <button className="bg-lime-400 hover:bg-lime-300 hover:scale-105 hover:shadow-lg text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
