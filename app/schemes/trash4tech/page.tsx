"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Recycle, Zap, Users, Target, ArrowRight, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Sustainability Focus",
    description: "Transforming plastic waste into valuable resources and reducing environmental impact",
    icon: Recycle
  },
  {
    title: "Tech Skills Development",
    description: "Comprehensive technology training programs for career advancement",
    icon: Zap
  },
  {
    title: "Community Empowerment",
    description: "Building a community of environmentally conscious tech professionals",
    icon: Users
  },
  {
    title: "Career Opportunities",
    description: "Creating pathways to meaningful tech careers with impact",
    icon: Target
  }
]

const programs = [
  {
    name: "Plastic For Tech Skills (P4TS)",
    description: "Exchange collected plastic waste for comprehensive technology training and professional development.",
    link: "/Projects/p4ts",
    highlights: ["Hands-on training", "Industry certifications", "Job placement support"]
  },
  {
    name: "Skills For Impact Sponsorship (S4IS)",
    description: "Sponsored technology education for deserving candidates committed to creating sustainable impact.",
    link: "/Projects/s4is",
    highlights: ["Sponsored education", "Mentorship program", "Career guidance"]
  }
]

export default function Trash4TechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: Logo and Text */}
            <div>
              <div className="mb-8">
                <Image
                  src="https://res.cloudinary.com/da8ptobvx/image/upload/v1770043494/Trash4TechLogo_riylrl.png"
                  alt="Trash4Tech Logo"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Trash4Tech Initiative
              </h1>
              <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                Bridging the gap between environmental sustainability and technological innovation. Transform plastic waste into skills, opportunities, and meaningful careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/Projects/p4ts">
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-bold rounded-lg shadow-xl w-full sm:w-auto">
                    Explore P4TS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/Projects/s4is">
                  <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 text-lg font-bold rounded-lg shadow-xl border border-emerald-500 backdrop-blur-sm w-full sm:w-auto">
                    Learn About S4IS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/da8ptobvx/image/upload/v1770043533/photorealistic-water-bottle_pbysky.jpg"
                alt="Recyclable Water Bottle"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Trash4Tech
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <Award className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Creating a sustainable future where environmental action and tech skill development go hand in hand, empowering communities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 dark:border-teal-800">
              <CardHeader>
                <Recycle className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  To transform plastic waste into valuable tech skills, creating economic opportunities while advancing environmental sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-cyan-200 dark:border-cyan-800">
              <CardHeader>
                <Zap className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Reducing plastic waste while equipping individuals with in-demand tech skills for sustainable careers and positive global impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-emerald-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Initiative in Action
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Gallery Image 1 */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <Image
                src="https://res.cloudinary.com/da8ptobvx/image/upload/v1770043495/plastic-waste_vcg8u7.jpg"
                alt="Plastic Waste Collection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Waste Collection</p>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <Image
                src="https://res.cloudinary.com/da8ptobvx/image/upload/v1770043533/photorealistic-water-bottle_pbysky.jpg"
                alt="Recyclable Materials"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Recyclable Materials</p>
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <Image
                src="https://res.cloudinary.com/da8ptobvx/image/upload/v1770043499/top-view-plastic-bottles_resized_puiq8m.jpg"
                alt="Plastic Bottles"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Exchange Program</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Programs
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <Card key={program.name} className="border-emerald-200 dark:border-emerald-800 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{program.name}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Highlights:</p>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={program.link}>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Meet the Founder
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-emerald-200 dark:border-emerald-800 overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                {/* Founder Image */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                  <Image
                    src="https://res.cloudinary.com/da8ptobvx/image/upload/v1769814635/ChatGPT_Image_Jan_29_2026_07_49_47_AM_flnnw1.png"
                    alt="Abdulhakim Ahmad - Founder of Trash4Tech"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Founder Info */}
                <div className="p-8 md:p-10">
                  <div className="mb-4">
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">
                      Founder & Visionary
                    </p>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white mt-2">
                      Abdulhakim Ahmad
                    </h3>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Abdulhakim Ahmad is the innovative founder of the Trash4Tech Project, a pioneering initiative that bridges environmental sustainability with technological advancement. With a passion for creating social impact and environmental consciousness, he envisioned a program that transforms plastic waste into valuable tech skills and career opportunities.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Visionary leader committed to sustainable tech solutions</p>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Dedicated to empowering communities through technology</p>
                    </div>
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Driving positive environmental and social impact</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    "Trash4Tech is more than a project—it's a movement to prove that sustainability and innovation can go hand in hand, creating opportunities for all."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How Trash4Tech Works
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "1", title: "Collect", desc: "Gather recyclable plastic materials" },
              { step: "2", title: "Exchange", desc: "Trade plastics for training credits" },
              { step: "3", title: "Learn", desc: "Enroll in tech skill programs" },
              { step: "4", title: "Succeed", desc: "Earn certifications & find careers" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white font-bold text-lg mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Trash4Tech Movement
          </h2>
          <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
            Be part of a global initiative transforming waste into opportunities. Choose your path and start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Projects/p4ts">
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 font-bold rounded-lg shadow-lg w-full sm:w-auto">
                Start with P4TS
              </Button>
            </Link>
            <Link href="/Projects/s4is">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6 font-bold rounded-lg shadow-lg border border-emerald-500 w-full sm:w-auto">
                Explore S4IS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
