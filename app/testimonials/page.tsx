"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "David Wilson",
    position: "CEO, TechStart Inc.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg",
    quote: "Working with iOrbit Tech has been transformative for our business. Their AI solutions have helped us scale our operations efficiently while maintaining quality.",
    rating: 5
  },
  {
    name: "Lisa Chen",
    position: "Operations Manager, Global Retail",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365263/5_rr2jvv.jpg",
    quote: "The data analytics platform provided by iOrbit Tech has given us invaluable insights into our customer behavior. It's been instrumental in our growth strategy.",
    rating: 5
  },
  {
    name: "James Martinez",
    position: "CTO, FinTech Solutions",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg",
    quote: "The machine learning solutions have revolutionized our fraud detection system. We've seen a significant reduction in fraudulent activities.",
    rating: 5
  },
  {
    name: "Rachel Thompson",
    position: "Data Science Lead, Healthcare Corp",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg",
    quote: "The AI-powered diagnostic tools have improved our accuracy and efficiency in patient care. It's been a game-changer for our medical team.",
    rating: 5
  },
  {
    name: "Alex Kumar",
    position: "Product Director, E-commerce Platform",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365263/5_rr2jvv.jpg",
    quote: "The recommendation engine has significantly improved our customer engagement and sales. The team at iOrbit Tech has been exceptional.",
    rating: 5
  },
  {
    name: "Sophia Lee",
    position: "Innovation Manager, Manufacturing Co.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg",
    quote: "The predictive maintenance system has saved us millions in operational costs. The ROI has been incredible.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Hear what our clients have to say about their experience working with
              iOrbit Tech Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="w-6 h-6 text-amber-600 opacity-20 absolute -top-2 -left-2" />
                    <p className="text-gray-600 italic pl-4">{testimonial.quote}</p>
                  </div>
                  <div className="flex mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the transformative power of our AI and data solutions
            for your business.
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
} 