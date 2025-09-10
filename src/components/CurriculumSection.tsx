"use client"

import type React from "react"
import { useRef, useState } from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const CurriculumSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isVisible = useScrollAnimation(sectionRef)
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null) // Default to all weeks closed

  const weeks = [
    {
      week: 1,
      lessons: 4,
      hours: "5-6 hours",
      content: {
        "Marketing Teams in AI Age": [
          "What talent to upskill, build and hire in the new AI Age",
          "What's the role of a CMO now vs in the past",
          "What role does Marketing play in overall Business",
        ],
        "Brand Strategy Development": ["Creating a Brand Strategy", "Aligning with Business Goals"],
        "Brand Positioning": [
          "Category Design & Mental Real Estate",
          "Archetypes & Consumer Identity Alignment",
          "Positioning in a Fragmented, AI-Driven World",
          "Positioning vs. Differentiation vs. Perception",
          "Brand Key",
          "Differentiation/Distiction Vs availability (mental and physical)",
        ],
        "Marketing: Driver of Innovation": ["How Marketing can drive Innovation"],
      },
    },
    { week: 2, lessons: 4, hours: "5-6 hours", content: {} },
    { week: 3, lessons: 4, hours: "5-6 hours", content: {} },
    { week: 4, lessons: 4, hours: "5-6 hours", content: {} },
    { week: 5, lessons: 4, hours: "5-6 hours", content: {} },
    { week: 6, lessons: 4, hours: "5-6 hours", content: {} },
  ]

  const toggleWeek = (weekNumber: number) => {
    setExpandedWeek(expandedWeek === weekNumber ? null : weekNumber)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Learn <span className="text-lime-400 italic">Marketing</span> from
                <br />
                First Principles
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Through a structured curriculum, live mentorship with seasoned CMOs, and curated networking
                opportunities, we bridge the knowledge gap for individuals to take their next big step in their
                marketing journeys.
              </p>
            </div>

            <div className={`space-y-4 ${isVisible ? "fade-in visible" : "fade-in"}`}>
              {weeks.map((item, index) => (
                <div
                  key={item.week}
                  className="border border-gray-700 rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-lime-400/10 transition-all duration-300"
                >
                  <div
                    className={`bg-gray-800/30 p-4 md:p-6 flex items-center justify-between hover:bg-gray-800/50 transition-all duration-300 cursor-pointer ${
                      isVisible ? "slide-in-left visible" : "slide-in-left"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => toggleWeek(item.week)}
                  >
                    <div className="flex items-center space-x-4 md:space-x-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-600 hover:border-lime-400 transition-colors duration-300">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-lime-400 rounded flex items-center justify-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v6a2.5 2.5 0 01-2.5 2.5h-1.086a3 3 0 01-1.414-.586L8.5 12.5A1.5 1.5 0 007 11V4a1 1 0 012-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-white">Week - {item.week}</h3>
                        <p className="text-sm md:text-base text-gray-400">
                          {item.lessons} Lessons | {item.hours}
                        </p>
                      </div>
                    </div>

                    <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-110">
                      <svg
                        className={`w-4 h-4 md:w-5 md:h-5 text-gray-300 transition-transform duration-300 ${
                          expandedWeek === item.week ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {expandedWeek === item.week && Object.keys(item.content).length > 0 && (
                    <div className="bg-gray-100 p-6 md:p-8 animate-fadeIn">
                      {Object.entries(item.content).map(([topic, points]) => (
                        <div
                          key={topic}
                          className="mb-6 md:mb-8 last:mb-0 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300"
                        >
                          <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">{topic}</h4>
                          <ul className="space-y-2">
                            {points.map((point, pointIndex) => (
                              <li
                                key={pointIndex}
                                className="text-gray-600 flex items-start hover:text-gray-800 transition-colors duration-300"
                              >
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-80 flex-shrink-0 order-first lg:order-last">
            <div
              className={`bg-gray-900/90 border border-gray-600 rounded-2xl p-6 md:p-8 lg:sticky lg:top-8 hover:border-lime-400 hover:shadow-2xl hover:shadow-lime-400/20 transition-all duration-300 hover:scale-[1.02] ${
                isVisible ? "slide-in-right visible" : "slide-in-right"
              }`}
            >
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4 tracking-wide">HAVEN'T APPLIED ?</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Break into <span className="text-lime-400 italic">Marketing</span>
                </h3>
                <p className="text-gray-300 mb-6">Get exclusive access to the fellowship at just</p>

                <div className="mb-8">
                  <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">₹49,999</div>
                  <div className="flex justify-center items-center">
                    <svg
                      className="w-6 h-6 text-lime-400 mr-2 animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <svg
                      className="w-6 h-6 text-lime-400 mr-2 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <svg
                      className="w-6 h-6 text-lime-400 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>

                <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/30">
                  Apply to C3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurriculumSection
