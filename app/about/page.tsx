import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Iorbit Tech Solutions Lab",
  description: "Learn about Iorbit Tech Solutions Lab, a software agency specializing in delivering Software Engineering solutions for forward-thinking brands, Governmental Organizations, Non-Governmental Organizations and SMEs.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-100">
              A software agency specializing in delivering Software Engineering solutions like Website Developments, Software Architecture, Building Organizational Email System, AI-powered Solutions, Product Design, 3D Animations and Video Creations for Advertisement, Odoo and Zoho Configurations for forward-thinking brands, Governmental Organizations, Non-Governmental Organizations and SMEs.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To empower organizations across Africa and beyond with innovative software engineering solutions that drive digital transformation, enhance operational efficiency, and create lasting impact in their communities.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To be Africa's leading technology solutions provider, recognized for excellence in software engineering, innovation, and our commitment to building sustainable digital ecosystems for businesses and organizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Comprehensive software engineering solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Website Developments",
                description: "Custom web applications and responsive websites built with modern technologies"
              },
              {
                title: "Software Architecture",
                description: "Scalable and robust software architecture design for enterprise solutions"
              },
              {
                title: "Organizational Email System",
                description: "Professional email systems setup and management for organizations"
              },
              {
                title: "AI-powered Solutions",
                description: "Intelligent automation and AI-driven applications for business optimization"
              },
              {
                title: "Product Design",
                description: "User-centered design solutions that enhance user experience and engagement"
              },
              {
                title: "3D Animations & Video Creations",
                description: "Professional 3D animations and video content for advertisement and marketing"
              },
              {
                title: "Odoo Configurations",
                description: "Complete Odoo ERP implementation and customization services"
              },
              {
                title: "Zoho Configurations",
                description: "Zoho suite setup and integration for streamlined business operations"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Who We Serve
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Delivering excellence across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Forward-thinking Brands
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Innovative companies seeking cutting-edge technology solutions
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Governmental Organizations
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Public sector institutions driving digital transformation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                NGOs & SMEs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Non-profits and small-to-medium enterprises making an impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

