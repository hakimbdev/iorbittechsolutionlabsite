"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"

const successStories = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechCorp",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg",
    quote: "The AI solutions provided by iOrbit Tech have transformed our customer service operations. We've seen a remarkable improvement in efficiency and customer satisfaction.",
    results: [
      "90% reduction in response time",
      "75% increase in customer satisfaction",
      "50% reduction in operational costs"
    ]
  },
  {
    name: "Michael Chen",
    position: "Operations Director, Global Manufacturing",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365263/5_rr2jvv.jpg",
    quote: "The predictive maintenance system has revolutionized our manufacturing process. We've significantly reduced downtime and improved overall efficiency.",
    results: [
      "85% reduction in equipment downtime",
      "60% decrease in maintenance costs",
      "40% increase in production efficiency"
    ]
  },
  {
    name: "Emma Rodriguez",
    position: "Data Analytics Lead, Financial Services",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg",
    quote: "The data analytics platform has given us unprecedented insights into our business operations. It's been a game-changer for our decision-making process.",
    results: [
      "70% improvement in data processing speed",
      "55% increase in actionable insights",
      "35% growth in revenue"
    ]
  }
]

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-pink-100 mb-8">
              Hear from our clients about their journey to success with our
              innovative AI and data solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold">{story.name}</CardTitle>
                      <CardDescription className="text-gray-600">{story.position}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-pink-600 opacity-20 absolute -top-2 -left-2" />
                    <p className="text-gray-600 italic pl-6">{story.quote}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {story.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our growing list of successful clients and transform your business
            with our innovative solutions.
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
} 