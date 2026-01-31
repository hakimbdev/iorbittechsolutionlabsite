"use client"

import Image from 'next/image'
import { Recycle, Code, Users, Target, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const programBenefits = [
  {
    title: "Environmental Impact",
    description: "Turn plastic waste into opportunities while contributing to a cleaner environment",
    icon: Recycle
  },
  {
    title: "Tech Skills Training",
    description: "Learn in-demand software development and technology skills",
    icon: Code
  },
  {
    title: "Community Building",
    description: "Join a community of environmentally conscious tech enthusiasts",
    icon: Users
  },
  {
    title: "Career Opportunities",
    description: "Gain skills that open doors to tech career opportunities",
    icon: Target
  }
]

const howItWorks = [
  "Collect recyclable plastic materials from your community",
  "Exchange collected plastics at designated collection points",
  "Receive training credits based on the quantity collected",
  "Enroll in our comprehensive tech skills training programs",
  "Complete courses and earn certifications",
  "Access job placement and career support services"
]

export default function P4TSPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Recycle className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Plastic For Tech Skills (P4TS)
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-green-100">
              Transform plastic waste into valuable tech skills. Exchange recyclable plastics for comprehensive technology training and build a sustainable future.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Program Overview with Image */}
        <div className="mb-16">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/da8ptobvx/image/upload/v1769814635/ChatGPT_Image_Jan_29_2026_07_49_47_AM_flnnw1.png"
                alt="Plastic For Tech Skills Program"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                About the Program
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Plastic For Tech Skills (P4TS) Program bridges these two issues by allowing participants to exchange collected plastic waste for access to quality tech training.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                This approach creates a sustainable, socially impactful, and environmentally conscious learning model.
              </p>
            </div>
          </div>
        </div>

        {/* Program Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Program Benefits
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {programBenefits.map((benefit) => (
              <Card key={benefit.title} className="h-full">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/10 dark:to-teal-900/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the P4TS program today and start your journey toward a rewarding tech career while making a positive environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/A94HkPHpeytRXsdU6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Eligible Plastics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">PET bottles and containers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">HDPE containers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Clean plastic packaging</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Training Programs Available</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Web Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Software Engineering</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">AI & Machine Learning</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

