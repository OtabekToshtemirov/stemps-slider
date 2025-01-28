"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { SliderProps } from "@/types/slider"
import { SliderControls } from "./controls"

export function Slider({ slides, initialSlide = 0 }: SliderProps) {
    const [currentSlide, setCurrentSlide] = useState(initialSlide)

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h2 className="text-4xl font-light text-violet-400 border-b border-violet-400">1.0</h2>
                <h1 className="text-2xl font-light text-violet-400 mt-2">Наши услуги</h1>
            </div>
            <SliderControls
                total={slides.length}
                current={currentSlide}
                onSelect={setCurrentSlide}
                onPrevious={handlePrev}
                onNext={handleNext}
            />
            <div className="relative overflow-hidden w-full">
                <div 
                    className="flex gap-6 w-full justify-start transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(${-currentSlide * (412 + 24)}px)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <motion.div
                            key={slide.id}
                            className={`w-[412px] shrink-0 transition-all duration-300 ${
                                index === currentSlide 
                                    ? "scale-100 opacity-100" 
                                    : "scale-95 opacity-70"
                            }`}
                        >
                            {/* #F0F0F0  cardni rangi shunday bo'lishi kerak */}
                            <div className="bg-[#F0F0F0] p-6 mt-4 rounded shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex pb-6">
                                    <div className="mb-4 mr-4 w-12">{slide.icon}</div>
                                    <h3 className="text-xl font-medium mb-2">{slide.title}</h3>
                                </div>

                                <p className="text-gray-600 text-sm">{slide.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
