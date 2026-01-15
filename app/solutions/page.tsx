'use client'

import Image from 'next/image'
import Link from 'next/link'

const solutions = [
  {
    id: 1,
    title: "AI-Powered Customer Service",
    description: "Transform your customer service with intelligent automation and 24/7 support.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749319567/technology-human-touch-background-modern-remake-creation-adam_zdxm59.jpg",
    category: "Artificial Intelligence",
    features: [
      "Natural Language Processing",
      "24/7 Automated Support",
      "Multi-language Support",
      "Real-time Analytics"
    ]
  },
  {
    id: 2,
    title: "Predictive Analytics Platform",
    description: "Make data-driven decisions with our advanced analytics and forecasting tools.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748431361/Educational_Data_Analytics_Dashboard_yqg4am.jpg",
    category: "Data Analytics",
    features: [
      "Real-time Data Processing",
      "Customizable Dashboards",
      "Advanced Forecasting",
      "Business Intelligence"
    ]
  },
  {
    id: 3,
    title: "Machine Learning Solutions",
    description: "Leverage the power of machine learning to optimize your business processes.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748431595/AI_Prompt_Engineering_Tool_oawnnn.jpg",
    category: "Machine Learning",
    features: [
      "Custom ML Models",
      "Process Automation",
      "Pattern Recognition",
      "Predictive Maintenance"
    ]
  }
]

const categories = [
  {
    name: "Artificial Intelligence",
    description: "Intelligent solutions powered by cutting-edge AI technology",
    icon: "🤖"
  },
  {
    name: "Data Analytics",
    description: "Transform your data into actionable insights",
    icon: "📊"
  },
  {
    name: "Machine Learning",
    description: "Automate and optimize with advanced ML algorithms",
    icon: "🧠"
  }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 dark:from-blue-900/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Innovative Solutions for Modern Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover how our cutting-edge technology solutions can transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
          Our Solution Categories
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
          Featured Solutions
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800"
            >
              {/* Solution Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Solution Content */}
              <div className="p-6">
                <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {solution.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{solution.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{solution.description}</p>
                
                {/* Features */}
                <div className="mt-6">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <div className="mt-6">
                  <Link
                    href={`/explore-solutions/${solution.id}`}
                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-blue-600 px-6 py-16 sm:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
                Contact us today to learn how our solutions can help you achieve your business goals.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 