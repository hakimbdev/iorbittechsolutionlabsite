"use client"

import { GraduationCap, Heart, Lightbulb, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const programPillars = [
  {
    title: "Skills Development",
    description: "Comprehensive training in cutting-edge technology and software development",
    icon: GraduationCap
  },
  {
    title: "Social Impact",
    description: "Empowering underprivileged individuals to transform their lives through technology",
    icon: Heart
  },
  {
    title: "Innovation Focus",
    description: "Fostering creativity and problem-solving skills for real-world challenges",
    icon: Lightbulb
  },
  {
    title: "Career Growth",
    description: "Providing pathways to sustainable employment and entrepreneurship",
    icon: TrendingUp
  }
]

const eligibilityCriteria = [
  "Individuals from underserved communities",
  "Demonstrated passion for technology and learning",
  "Commitment to completing the training program",
  "Willingness to contribute to community development",
  "Basic literacy and numeracy skills"
]

const sponsorshipBenefits = [
  "Full tuition coverage for tech training programs",
  "Access to learning materials and resources",
  "Mentorship from industry professionals",
  "Internship and job placement assistance",
  "Networking opportunities with tech community",
  "Certificate upon successful completion"
]

export default function S4ISPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Skills For Impact Sponsorship (S4IS)
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
              Empowering talented individuals from underserved communities with world-class technology education and career opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Program Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About the Sponsorship
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The Skills For Impact Sponsorship (S4IS) program is IORBIT TECH SOLUTIONS LAB's commitment to social responsibility and inclusive growth. We provide full scholarships to talented individuals who lack financial resources but possess the passion and potential to excel in technology careers.
          </p>
        </div>

        {/* Program Pillars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Program Pillars
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {programPillars.map((pillar) => (
              <Card key={pillar.title} className="h-full">
                <CardHeader>
                  <pillar.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Two Column Section */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {/* Eligibility Criteria */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Eligibility Criteria</CardTitle>
              <CardDescription>Who can apply for the S4IS sponsorship</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{criteria}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Sponsorship Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sponsorship Benefits</CardTitle>
              <CardDescription>What you receive as a sponsored participant</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {sponsorshipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Impact
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Lives Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600 dark:text-gray-300">Employment Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Partner Organizations</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Apply for Sponsorship
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            If you're passionate about technology and ready to transform your life, apply for the S4IS sponsorship program today. Limited slots available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

