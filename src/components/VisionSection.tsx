"use client"

import type React from "react"
import { useRef } from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const VisionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useScrollAnimation(sectionRef)

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://github.com/notion-vit/NotionCommunityVITB/blob/main/assets/grouppic.jpeg?raw=true?raw=true&w=640&q=75")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div
        className={`relative z-10 text-center max-w-4xl mx-auto px-6 ${isVisible ? "scale-in visible" : "scale-in"}`}
      >
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white">
          Master the strategies top <span className="text-lime-400">CMOs</span>
          <br />
          use to build a vision.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-lime-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-300 transition-colors">
            Apply to C3
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors">
            Learn more
          </button>
        </div>

        <div className="flex items-center justify-center space-x-2 text-gray-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Next cohort starts from 1st September</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-300 mb-8">Join the Network of Top 3% Folks from</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-16 opacity-60">
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                <img src="/bajaj-logo.png" alt="Bajaj" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                <img src="/jj-logo.jpg" alt="Johnson & Johnson" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                <img src="/kenvue-logo.jpg" alt="Kenvue" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                <img src="/cultfi-logo.jpg" alt="Cult.fi" className="h-8 w-auto object-contain" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                <img src="/bajaj-logo.png" alt="Bajaj" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                <img src="/jj-logo.jpg" alt="Johnson & Johnson" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                <img src="/kenvue-logo.jpg" alt="Kenvue" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-12 w-24 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex-shrink-0">
                <img src="/cultfi-logo.jpg" alt="Cult.fi" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default VisionSection
