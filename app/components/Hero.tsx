"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Sparkles, Zap, Target, Play } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Floating Particles - Reduced for mobile performance */}
        <div className="absolute inset-0 hidden sm:block">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Interactive Glow Effect - Hidden on mobile for performance */}
        <div
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transition-all duration-300 hidden lg:block"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-8 sm:mb-12 lg:mb-0 animate-slide-in-left text-center lg:text-left">
          {/* Main Heading - Mobile Responsive */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-white">
            <span className="block">Welcome to</span>
            <span className="gradient-text-animated text-shadow block">IORBIT TECH SOLUTIONS LAB</span>
            <span className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl block mt-2">Africa</span>
          </h1>

          {/* Subtitle - Mobile Responsive */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
            A software agency specializing in Cybersecurity, Data Analysis, and Software Engineering solutions for forward-thinking brands.
            Your partner in digital transformation and growth.
          </p>

          {/* CTA Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
            <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 neon-glow w-full sm:w-auto">
              <Zap className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
              <span className="hidden xs:inline">Explore Our Services</span>
              <span className="xs:hidden">Our Services</span>
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-base sm:text-lg font-bold shadow-2xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto">
              <Play className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
              Watch Demo
            </Button>
          </div>

          {/* Stats - Mobile Responsive Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-md xs:max-w-none mx-auto lg:mx-0">
            {[
              { number: "500+", label: "Tech Solutions", icon: Target },
              { number: "98%", label: "Client Satisfaction", icon: Zap },
              { number: "100+", label: "Global Partners", icon: Sparkles },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400 mr-1 sm:mr-2 group-hover:animate-pulse" />
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white">{stat.number}</div>
                </div>
                <div className="text-blue-200 text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - 3D Image - Mobile Responsive */}
        <div className="lg:w-1/2 animate-slide-in-right perspective-1000 w-full max-w-lg mx-auto lg:mx-0">
          <div className="relative transform-style-3d hover:rotate-y-12 transition-transform duration-700 px-4 sm:px-0">
            {/* Glow Effect - Reduced on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-30 sm:opacity-40 animate-pulse-slow"></div>

            {/* Main Image - Mobile Responsive */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI and Data Science Innovation"
                width={900}
                height={650}
                className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-white/20 hover-lift w-full h-auto"
                priority
              />

              {/* Floating Elements - Mobile Responsive */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float shadow-lg sm:shadow-xl">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </div>

              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center animate-float shadow-lg sm:shadow-xl"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mobile Responsive */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-white rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/60 text-xs mt-1 sm:mt-2 text-center hidden sm:block">Scroll to explore</p>
      </div>
    </section>
  )
}
