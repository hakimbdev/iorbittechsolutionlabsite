import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Iorbit Tech Solutions Lab",
  description: "Learn about Iorbit Tech Solutions Lab, a software agency specializing in delivering Software Engineering solutions for forward-thinking brands, Governmental Organizations, Non-Governmental Organizations and SMEs.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Mobile Optimized */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white px-2">
              About Us
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-100 px-4 leading-relaxed">
              A software agency specializing in delivering Software Engineering solutions like Website Developments, Software Architecture, Building Organizational Email System, AI-powered Solutions, Product Design, 3D Animations and Video Creations for Advertisement, Odoo and Zoho Configurations for forward-thinking brands, Governmental Organizations, Non-Governmental Organizations and SMEs.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section - Mobile Optimized */}
      <div className="py-12 sm:py-16 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To empower organizations across Africa and beyond with innovative software engineering solutions that drive digital transformation, enhance operational efficiency, and create lasting impact in their communities.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                To be Africa's leading technology solutions provider, recognized for excellence in software engineering, innovation, and our commitment to building sustainable digital ecosystems for businesses and organizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section - Mobile Optimized */}
      <div className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white px-2">
              What We Do
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
              Comprehensive software engineering solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-lg bg-white dark:bg-gray-800 p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Serve Section - Mobile Optimized */}
      <div className="py-12 sm:py-16 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white px-2">
              Who We Serve
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
              Delivering excellence across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center p-5 sm:p-6">
              <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🏢</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Forward-thinking Brands
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Innovative companies seeking cutting-edge technology solutions
              </p>
            </div>

            <div className="text-center p-5 sm:p-6">
              <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🏛️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Governmental Organizations
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Public sector institutions driving digital transformation
              </p>
            </div>

            <div className="text-center p-5 sm:p-6">
              <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">🤝</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                NGOs & SMEs
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Non-profits and small-to-medium enterprises making an impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

