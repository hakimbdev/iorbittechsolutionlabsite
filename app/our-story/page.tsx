"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Award, Users, Globe, Lightbulb } from "lucide-react"

const milestones = [
  {
    year: "2020",
    title: "Our Beginning",
    description: "Founded with a vision to revolutionize the tech industry through innovative AI solutions.",
    icon: Lightbulb
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded our operations to serve clients across multiple continents.",
    icon: Globe
  },
  {
    year: "2022",
    title: "Team Growth",
    description: "Built a team of expert AI engineers, data scientists, and industry specialists.",
    icon: Users
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for innovation and excellence in AI solutions.",
    icon: Award
  }
]

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing boundaries to create cutting-edge solutions."
  },
  {
    title: "Excellence",
    description: "Committed to delivering the highest quality in everything we do."
  },
  {
    title: "Integrity",
    description: "Building trust through honest and transparent relationships."
  },
  {
    title: "Collaboration",
    description: "Working together to achieve extraordinary results."
  }
]

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              From humble beginnings to becoming a global leader in AI and data solutions,
              discover the journey of iOrbit Tech Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To empower businesses with innovative AI and data solutions that drive growth,
              efficiency, and transformation in the digital age.
            </p>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <milestone.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.year}</h3>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-teal-600">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A diverse group of experts passionate about technology and innovation,
              working together to create the future of AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Abdulhakim Ahmad",
                  position: "CEO",
                  image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg"
                },
                {
                  name: "Adamu Abdullahi",
                  position: "Technical Advisor",
                  image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365263/5_rr2jvv.jpg"
                },
                {
                  name: "Ilham Maaruf",
                  position: "Brand Analyst",
                  image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our mission to transform businesses through innovative
            AI and data solutions.
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
} 