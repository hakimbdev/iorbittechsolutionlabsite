'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const solutions = [
  {
    id: 1,
    title: "AI-Powered Customer Service",
    description: "Transform your customer service with intelligent automation and 24/7 support.",
    longDescription: "Our AI-powered customer service solution revolutionizes how businesses interact with their customers. By leveraging advanced natural language processing and machine learning algorithms, we provide a seamless, efficient, and personalized customer experience that operates 24/7.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749319567/technology-human-touch-background-modern-remake-creation-adam_zdxm59.jpg",
    category: "Artificial Intelligence",
    relatedSolutions: [2, 3],
    features: [
      "Natural Language Processing",
      "24/7 Automated Support",
      "Multi-language Support",
      "Real-time Analytics"
    ],
    benefits: [
      "Reduced response time by 80%",
      "Increased customer satisfaction",
      "Lower operational costs",
      "Scalable support system"
    ],
    useCases: [
      "E-commerce customer support",
      "Technical support automation",
      "FAQ handling",
      "Order status inquiries"
    ]
  },
  {
    id: 2,
    title: "Predictive Analytics Platform",
    description: "Make data-driven decisions with our advanced analytics and forecasting tools.",
    longDescription: "Our Predictive Analytics Platform empowers businesses to make informed decisions by analyzing historical data and identifying patterns. The platform provides accurate forecasts and insights that help optimize operations and drive growth.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg",
    category: "Data Analytics",
    relatedSolutions: [1, 3],
    features: [
      "Real-time Data Processing",
      "Customizable Dashboards",
      "Advanced Forecasting",
      "Business Intelligence"
    ],
    benefits: [
      "Improved decision-making",
      "Better resource allocation",
      "Increased operational efficiency",
      "Competitive advantage"
    ],
    useCases: [
      "Sales forecasting",
      "Inventory management",
      "Customer behavior analysis",
      "Market trend prediction"
    ]
  },
  {
    id: 3,
    title: "Machine Learning Solutions",
    description: "Leverage the power of machine learning to optimize your business processes.",
    longDescription: "Our Machine Learning Solutions help businesses automate complex processes and make intelligent predictions. By implementing custom ML models, we enable organizations to gain valuable insights and improve operational efficiency.",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg",
    category: "Machine Learning",
    relatedSolutions: [1, 2],
    features: [
      "Custom ML Models",
      "Process Automation",
      "Pattern Recognition",
      "Predictive Maintenance"
    ],
    benefits: [
      "Automated decision-making",
      "Reduced manual intervention",
      "Improved accuracy",
      "Cost optimization"
    ],
    useCases: [
      "Quality control automation",
      "Fraud detection",
      "Process optimization",
      "Predictive maintenance"
    ]
  }
]

export default function SolutionPage() {
  const params = useParams()
  const solution = solutions.find(s => s.id === Number(params.id))

  if (!solution) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Solution Not Found</h1>
          <Link href="/explore-solutions" className="mt-4 inline-block text-blue-600 hover:text-blue-500">
            Return to Solutions
          </Link>
        </div>
      </div>
    )
  }

  const relatedSolutions = solutions.filter(s => solution.relatedSolutions.includes(s.id))

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {solution.category}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              {solution.longDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Features */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {solution.features.map((feature, index) => (
                  <div key={index} className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Benefits</h2>
              <ul className="space-y-4">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Use Cases</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {solution.useCases.map((useCase, index) => (
                  <div key={index} className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{useCase}</h3>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Related Solutions */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Solutions</h2>
              <div className="space-y-6">
                {relatedSolutions.map((related) => (
                  <Link
                    key={related.id}
                    href={`/explore-solutions/${related.id}`}
                    className="block rounded-lg bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:bg-gray-800"
                  >
                    <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{related.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{related.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 