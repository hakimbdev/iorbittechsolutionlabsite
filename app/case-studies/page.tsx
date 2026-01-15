"use client"

import Image from 'next/image'
import Link from 'next/link'

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Automation",
    description: "Implemented an intelligent chatbot system that reduced response time by 80% and improved customer satisfaction scores.",
    category: "Artificial Intelligence",
    images: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1749319567/technology-human-touch-background-modern-remake-creation-adam_zdxm59.jpg",
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg"
    ],
    results: [
      "80% reduction in response time",
      "95% customer satisfaction rate",
      "60% cost reduction in customer service"
    ]
  },
  {
    id: 2,
    title: "Predictive Analytics for Retail",
    description: "Developed a machine learning model to predict inventory needs and optimize supply chain management.",
    category: "Machine Learning",
    images: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1748431361/Educational_Data_Analytics_Dashboard_yqg4am.jpg",
      
    ],
    results: [
      "30% reduction in inventory costs",
      "25% improvement in stock availability",
      "40% reduction in supply chain delays"
    ]
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Created an interactive dashboard for real-time business analytics and reporting.",
    category: "Data Analytics",
    images: [
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1748431361/mutlti_lingual_ztybls.jpg",
      
    ],
    results: [
      "50% faster decision-making process",
      "75% improvement in data accessibility",
      "90% user adoption rate"
    ]
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Explore how we've helped businesses transform through technology
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800"
            >
              {/* Image Gallery */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src={study.images[0]}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                {/* Thumbnail Gallery */}
                <div className="absolute bottom-0 left-0 right-0 flex space-x-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {study.images.map((image, index) => (
                    <div key={index} className="relative h-16 w-16 overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`${study.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {study.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{study.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{study.description}</p>
                
                {/* Results */}
                <div className="mt-6">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Read More Button */}
                <div className="mt-6">
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Read Full Case Study
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