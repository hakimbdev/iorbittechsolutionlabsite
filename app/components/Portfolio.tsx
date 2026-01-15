"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { ExternalLink, Github, Award, TrendingUp, Users, Zap } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "AI-Powered Learning Ecosystem",
    description:
      "Revolutionary LMS platform serving 100K+ students globally with personalized AI tutoring, adaptive assessments, and real-time progress analytics.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    gradient: "from-blue-500 to-cyan-500",
    stats: [
      { icon: Users, value: "100K+", label: "Active Users" },
      { icon: TrendingUp, value: "85%", label: "Improvement Rate" },
      { icon: Award, value: "#1", label: "EdTech Platform" },
    ],
    tags: ["AI/ML", "Education", "React", "Python"],
  },
  {
    title: "Next-Gen Fraud Detection Engine",
    description:
      "Advanced ML system processing 10M+ transactions daily with 99.7% accuracy, reducing fraud losses by $50M annually for major fintech clients.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-purple-500 to-pink-500",
    stats: [
      { icon: Zap, value: "99.7%", label: "Accuracy" },
      { icon: TrendingUp, value: "$50M", label: "Saved Annually" },
      { icon: Users, value: "10M+", label: "Daily Transactions" },
    ],
    tags: ["Machine Learning", "Fintech", "Real-time", "Security"],
  },
  {
    title: "GenAI Content Studio",
    description:
      "Comprehensive content creation platform leveraging GPT-4 and DALL-E, generating 1M+ pieces of content monthly for global brands.",
    image:
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-green-500 to-teal-500",
    stats: [
      { icon: TrendingUp, value: "1M+", label: "Content Pieces" },
      { icon: Users, value: "500+", label: "Global Brands" },
      { icon: Award, value: "95%", label: "Client Satisfaction" },
    ],
    tags: ["GenAI", "Content", "GPT-4", "Creative"],
  },
  {
    title: "Enterprise Email Intelligence",
    description:
      "AI-powered email marketing platform with predictive analytics, achieving 40% higher engagement rates and $100M+ in client revenue.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    gradient: "from-orange-500 to-red-500",
    stats: [
      { icon: TrendingUp, value: "40%", label: "Higher Engagement" },
      { icon: Award, value: "$100M+", label: "Client Revenue" },
      { icon: Users, value: "1000+", label: "Enterprise Clients" },
    ],
    tags: ["Email Marketing", "Analytics", "Enterprise", "SaaS"],
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="portfolio"
      className="py-32 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-sm font-semibold text-indigo-700 mb-6">
            <Award className="w-4 h-4 mr-2" />
            Success Stories
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            <span className="text-gray-800">Our</span>
            <br />
            <span className="gradient-text-animated">Portfolio</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've transformed businesses across industries with innovative AI solutions that deliver
            measurable results and drive growth.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                ></div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors duration-200">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors duration-200">
                    <Github className="w-5 h-5 text-gray-700" />
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-6xl font-black text-white/20">{String(index + 1).padStart(2, "0")}</div>
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <CardDescription className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </CardDescription>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors duration-300"
                    >
                      <stat.icon
                        className={`w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300`}
                      />
                      <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <Award className="w-5 h-5 mr-3 group-hover:animate-pulse" />
            View All Projects
            <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
