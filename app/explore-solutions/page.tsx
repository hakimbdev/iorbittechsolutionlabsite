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
    relatedSolutions: [2, 3],
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
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg",
    category: "Data Analytics",
    relatedSolutions: [1, 3],
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
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg",
    category: "Machine Learning",
    relatedSolutions: [1, 2],
    features: [
      "Custom ML Models",
      "Process Automation",
      "Pattern Recognition",
      "Predictive Maintenance"
    ]
  }
]

export default function ExploreSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Explore Our Solutions
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover how our innovative solutions can transform your business
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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

                {/* Related Solutions */}
                <div className="mt-8">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Related Solutions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.relatedSolutions.map((relatedId) => {
                      const relatedSolution = solutions.find(s => s.id === relatedId)
                      return relatedSolution ? (
                        <Link
                          key={relatedId}
                          href={`/explore-solutions/${relatedId}`}
                          className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                        >
                          {relatedSolution.title}
                        </Link>
                      ) : null
                    })}
                  </div>
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
    </div>
  )
} 