import { Code, Database, Shield, Users } from 'lucide-react'

const services = [
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets, infrastructure, and sensitive data from evolving cyber threats and vulnerabilities.",
    icon: Shield,
    features: [
      "Security audits & assessments",
      "Threat detection & response",
      "Vulnerability management",
      "Compliance & governance"
    ]
  },
  {
    title: "Data Analysis",
    description: "Transform your raw data into actionable insights and strategic decisions through advanced analytics, visualization, and business intelligence solutions.",
    icon: Database,
    features: [
      "Business intelligence",
      "Data visualization",
      "Statistical analysis",
      "Real-time dashboards"
    ]
  },
  {
    title: "Software Engineering",
    description: "Custom software solutions built with cutting-edge technologies to meet your specific business requirements and scale with your growth.",
    icon: Code,
    features: [
      "Web application development",
      "Mobile app development",
      "API development & integration",
      "System architecture design"
    ]
  },
  {
    title: "Partnership Services",
    description: "Strategic marketing partnerships to help you launch, scale, and sustain digital products effectively in competitive markets.",
    icon: Users,
    features: [
      "Digital product marketing",
      "Go-to-market strategy",
      "Partnership development",
      "Market growth consulting"
    ]
  },

]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Specialized solutions in Cybersecurity, Data Analysis, Software Engineering, and Partnership Services for forward-thinking brands
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Key Features:
                </h4>
                <ul className="mt-2 space-y-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-600 px-6 py-12 sm:px-12 sm:py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Ready to Get Started?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 