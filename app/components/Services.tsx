"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Database, Code, Users, Brain, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const services = [
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets, infrastructure, and sensitive data from evolving cyber threats.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    features: ["Threat Detection", "Security Audits", "Incident Response"],
  },
  {
    title: "Data Analysis",
    description:
      "Transform your raw data into actionable insights and strategic decisions through advanced analytics and visualization techniques.",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    features: ["Data Mining", "Statistical Analysis", "Business Intelligence"],
  },
  {
    title: "Software Engineering",
    description:
      "Custom software solutions built with cutting-edge technologies to meet your specific business requirements and scale with your growth.",
    icon: Code,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    features: ["Web Development", "Mobile Apps", "API Integration"],
  },
  {
    title: "Partnership Services",
    description:
      "Strategic marketing partnerships to help you launch, scale, and sustain digital products effectively in competitive markets.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    features: ["Digital Marketing", "Product Launch", "Market Growth"],
  },

]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Mobile Responsive */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-xs sm:text-sm font-semibold text-blue-700 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Our Expertise
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 px-2">
            <span className="gradient-text-animated">Revolutionary</span>
            <br />
            <span className="text-gray-800">Services</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            We provide cutting-edge technology solutions that transform businesses and drive innovation across
            industries with AI-powered excellence.
          </p>
        </div>

        {/* Services Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Image Section - Mobile Responsive */}
              <div className="relative overflow-hidden h-40 sm:h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                ></div>

                {/* Icon - Mobile Responsive */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg sm:shadow-xl transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                </div>

                {/* Floating Badge - Hidden on mobile */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                  <div className="px-2 py-1 sm:px-3 sm:py-1 bg-white/90 rounded-full text-xs font-bold text-gray-800">Premium</div>
                </div>
              </div>

              {/* Content - Mobile Responsive */}
              <CardHeader className="pb-2 p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</CardDescription>

                {/* Features - Mobile Responsive */}
                <div className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-xs sm:text-sm text-gray-500">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-2 sm:mr-3 flex-shrink-0`}></div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA - Mobile Responsive */}
                <div className="pt-3 sm:pt-4">
                  <div className="flex items-center text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 group cursor-pointer text-sm sm:text-base">
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Mobile Responsive */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4">
          <div className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:animate-spin" />
            <span className="hidden xs:inline">Explore All Services</span>
            <span className="xs:hidden">All Services</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
