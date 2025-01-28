'use client'

import { Slider } from "@/components/slider/slider"
import { slides } from "@/data/slides"
import { useState } from "react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="font-semibold text-xl">STEMPS</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                О школе
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Курсы
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Библиотека
              </a>
              <a href="#" className="text-violet-600 hover:text-violet-700">
                Вход
              </a>
            </div>
            <button 
              className="md:hidden p-2" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  О школе
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Курсы
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  Библиотека
                </a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-violet-600 hover:text-violet-700 hover:bg-gray-50">
                  Вход
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Slider slides={slides} />
    </main>
  )
}
