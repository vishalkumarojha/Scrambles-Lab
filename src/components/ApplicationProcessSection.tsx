"use client"

import type React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useState, useEffect, useRef } from "react"

const ApplicationProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useScrollAnimation(sectionRef)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // Calculate progress through the section
      const sectionStart = sectionTop - windowHeight / 2
      const sectionEnd = sectionTop + sectionHeight - windowHeight / 2
      const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)))

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const steps = [
    {
      title: "Preliminary Results",
      description:
        "We are currently evaluating your application. You can expect to hear from us via email between June 1st, 2025 & August 27th, 2025.",
      position: { left: true, top: 0 },
    },
    {
      title: "Candidate Selection",
      description: "If selected, you will receive an email with a payment link to confirm your spot in the program.",
      position: { left: false, top: 25 },
    },
    {
      title: "Personal Interviews",
      description:
        "If your candidature is shortlisted, we will provide you with available time slots for your interview.",
      position: { left: true, top: 50 },
    },
    {
      title: "First Interaction",
      description:
        "Once you confirm your participation in the fellowship, we will send you an onboarding email along with access to an exclusive resource library.",
      position: { left: false, top: 75 },
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 relative min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Already applied?</h2>
          <p className="text-lg text-gray-700">Take a look at the further proceedings</p>
        </div>

        <div className="relative max-w-5xl mx-auto h-[800px]">
          {/* Central Tree Trunk - Vertical Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 rounded-full">
            <div
              className="w-full bg-gradient-to-b from-lime-400 to-lime-500 rounded-full transition-all duration-500 ease-out shadow-lg shadow-lime-400/30"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: scrollProgress > 0 ? "0 0 20px rgba(163, 230, 53, 0.5)" : "none",
              }}
            />
          </div>

          {/* Tree Branches and Steps */}
          {steps.map((step, index) => {
            const isActive = scrollProgress >= index / (steps.length - 1)
            const stepProgress = Math.max(0, Math.min(1, (scrollProgress - index / (steps.length - 1)) * steps.length))

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  top: `${step.position.top}%`,
                  left: step.position.left ? "10%" : "60%",
                  right: step.position.left ? "60%" : "10%",
                }}
              >
                {/* Branch Line */}
                <div className="relative">
                  <div
                    className={`absolute ${step.position.left ? "right-0" : "left-0"} top-1/2 w-20 h-0.5 transition-all duration-500`}
                    style={{
                      backgroundColor: isActive ? "#a3e635" : "#d1d5db",
                      boxShadow: isActive ? "0 0 10px rgba(163, 230, 53, 0.5)" : "none",
                      transform: `scaleX(${isActive ? stepProgress : 0})`,
                      transformOrigin: step.position.left ? "right" : "left",
                    }}
                  />

                  {/* Connection Node */}
                  <div
                    className={`absolute ${step.position.left ? "right-20" : "left-20"} top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 hover:scale-125`}
                    style={{
                      backgroundColor: isActive ? "#a3e635" : "#ffffff",
                      borderColor: isActive ? "#a3e635" : "#d1d5db",
                      boxShadow: isActive ? "0 0 15px rgba(163, 230, 53, 0.6)" : "none",
                    }}
                  />
                </div>

                {/* Step Content */}
                <div
                  className={`transition-all duration-1000 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <div
                      className={`inline-block px-6 py-3 rounded-full mb-4 transition-all duration-500 hover:scale-110 shadow-lg cursor-pointer ${
                        isActive
                          ? "bg-lime-400 text-gray-900 shadow-lime-400/30"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-lime-400"
                      }`}
                      style={{
                        boxShadow: isActive ? "0 8px 25px rgba(163, 230, 53, 0.3)" : "0 4px 15px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p
                      className={`text-sm max-w-xs mx-auto leading-relaxed transition-all duration-300 ${
                        isActive ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ApplicationProcessSection
