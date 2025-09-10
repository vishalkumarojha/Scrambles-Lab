"use client"

import type React from "react"
import { useState } from "react"
import { useScrollDirection } from "../hooks/useScrollDirection"

const Header: React.FC = () => {
  const scrollDirection = useScrollDirection()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 ease-in-out ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-xl sm:text-2xl font-bold text-lime-400">SCRAMBLE LABS</div>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
            <span>Powered by</span>
            <div className="flex items-center space-x-1 hover:scale-105 transition-transform duration-300">
              <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-teal-400 font-medium">Metvy</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white transition-colors hover:scale-105 duration-300">
            Our Fellows
          </button>
          <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lime-400/30">
            Apply to C3
          </button>
        </div>

        <button
          className="md:hidden flex flex-col space-y-1 p-2 hover:scale-110 transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-lime-400 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-lime-400 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-lime-400 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800 transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 pb-2 border-b border-gray-700">
            <span>Powered by</span>
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 bg-teal-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-teal-400 font-medium">Metvy</span>
            </div>
          </div>
          <button className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2 hover:bg-gray-800/50 rounded">
            Our Fellows
          </button>
          <button className="block w-full bg-lime-400 text-black py-3 rounded-full font-semibold hover:bg-lime-300 transition-colors min-h-[44px] hover:scale-105 duration-300">
            Apply to C3
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
