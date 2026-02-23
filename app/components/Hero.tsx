"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1769758117/1769320988542_bqo3zj.png",
    alt: "Iorbit Tech Solutions Lab - Community"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1769758090/1769321003418_cmjo5z.png",
    alt: "Iorbit Tech Solutions Lab - Innovation"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1769756149/ChatGPT_Image_Jan_29_2026_07_49_47_AM_hdnizt.png",
    alt: "Iorbit Tech Solutions Lab - Technology"
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setAutoPlay(false)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length)
    setAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoPlay(false)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slider Images */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay - Subtle for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-20"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          Iorbit Tech Solutions Lab
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 text-white/95 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-medium whitespace-nowrap">
          Experience the Revolutionary Software Development Agency
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 sm:px-12 py-4 sm:py-5 text-lg font-bold rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 w-full sm:w-auto">
            Explore Solutions
          </Button>
          <Button className="bg-gray-900/90 hover:bg-gray-950 text-white px-10 sm:px-12 py-4 sm:py-5 text-lg font-bold rounded-lg shadow-2xl border border-gray-700 backdrop-blur-md transition-all duration-300 w-full sm:w-auto">
            View Case Studies
          </Button>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-40">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
