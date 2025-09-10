"use client"

import type React from "react"
import { useState } from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  const faqs = [
    {
      question: "What happens after I apply for the program?",
      answer:
        "After you apply, our team will review your application within 2-3 business days. If selected, you'll receive an email with next steps including a preliminary interview and assessment.",
    },
    {
      question: "What is the cost of this fellowship?",
      answer:
        "Scramble Labs costs ₹49,999 for the complete program. This includes all curriculum materials, mentorship sessions, networking events, and certification upon completion.",
    },
    {
      question: "What is the duration of this fellowship?",
      answer:
        "The fellowship runs for 12 weeks with 4-6 hours of commitment per week. This includes live sessions, self-paced learning, assignments, and mentorship calls.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-lime-400 mb-4">FAQs</h2>
          <p className="text-lg text-gray-400">Here's everything you may ask...</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white pr-4">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {openFAQ === index && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
