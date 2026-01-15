"use client"

import Link from "next/link"
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import styles from './home.module.css'

const partners = [
  {
    name: "Moolu Ventures Capital LP",
    logo: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748521341/Mooluventure_eptj9b.png",
    description: "Venture Capital Partner"
  },
  {
    name: "National Information Technology Development Agency",
    logo: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748459510/nitda_nigeria_cover_hez46v.jpg",
    description: "Government Technology Partner"
  },
  {
    name: "GITEX AFRICA Morocco",
    logo: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748459511/GITEX_AFRICA_Morocco_r3hfq8.png",
    description: "Technology Exhibition Partner"
  },
  {
    name: "AI Everything Germany",
    logo: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748459510/AI_Everything_Germany_pfllsg.png",
    description: "AI Innovation Partner"
  },

]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dc5qncppu/image/upload/v1749319567/technology-human-touch-background-modern-remake-creation-adam_zdxm59.jpg"
            alt="Technology background"
            fill
            priority
            quality={100}
            className="object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              IORBIT LAB Africa
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-200">
              A software agency specializing in Cybersecurity, Data Analysis, and Software Engineering solutions for forward-thinking brands. We also provide Partnership Services for Marketing Digital Products & Services.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/solutions"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Explore Solutions
              </Link>
              <Link
                href="/case-studies"
                className="rounded-md bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
              {/* First Set */}
              <div className="flex space-x-8">
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cybersecurity</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Comprehensive security solutions to protect your digital assets</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Analysis</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Transform your data into actionable insights and strategic decisions</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineering</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Custom software solutions built with cutting-edge technologies</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Partnership Services</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Marketing digital products & services to scale your business</p>
                  </div>
                </div>
              </div>
              {/* Duplicate Set for Infinite Scroll Effect */}
              <div className="flex space-x-8">
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cybersecurity</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Comprehensive security solutions to protect your digital assets</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Analysis</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Transform your data into actionable insights and strategic decisions</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineering</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Custom software solutions built with cutting-edge technologies</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72">
                  <div className="rounded-lg bg-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Partnership Services</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Marketing digital products & services to scale your business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Compliance Section */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Security & Compliance First
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Your data security and privacy are our top priorities. We maintain the highest standards of cybersecurity compliance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cybersecurity-compliance"
                className="inline-flex items-center justify-center rounded-md border border-red-600 bg-white px-6 py-3 text-base font-medium text-red-600 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 dark:bg-gray-800 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                Security Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Robotics Highlight Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              World of Robotics
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Explore cutting-edge robotics and AI innovations that are reshaping the future of technology
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Yamaha Motoroid 2: AI-Powered Revolution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Witness the world's first artificial intelligence motorbike that combines autonomous balancing, intelligent rider interaction, and advanced AI decision-making capabilities.
                  </p>
                  <Link
                    href="/robotics"
                    className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Explore Robotics World
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl mb-2">🤖</div>
                        <div className="text-lg font-semibold">AI Robotics</div>
                        <div className="text-sm opacity-90">Innovation Showcase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Highlight Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Latest Stories
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover our journey through major tech events and innovations that shape Africa's digital future
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/da8ptobvx/image/upload/v1758051492/1000003726_wk5z8i.jpg"
                  alt="GITEX Tech Event 2025 - Abuja"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  GITEX Tech Event 2025
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Our participation in Nigeria's premier technology event across Abuja and Lagos
                </p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  2025 • Abuja & Lagos
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/da8ptobvx/image/upload/v1758051492/uraz_lhp5te.jpg"
                  alt="Innovation Showcase"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Innovation Showcase
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Demonstrating cutting-edge cybersecurity solutions to industry leaders
                </p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  2025 • Tech Innovation
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/da8ptobvx/image/upload/v1758051488/1000004560_x3qhjg.jpg"
                  alt="Partnership Networking"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Partnership Networking
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Building strategic partnerships with technology companies and agencies
                </p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  2025 • Business Growth
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/stories"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              View All Stories
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Partners Section */}
      <div className="bg-white dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Technology Partners
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Collaborating with industry leaders to drive innovation and excellence
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex flex-col items-center"
              >
                <div className="relative h-32 w-full overflow-hidden rounded-lg bg-white p-4 transition-all duration-300 hover:shadow-lg">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className={`transition-transform duration-300 group-hover:scale-105 ${
                      partner.name === "Polkadot Africa" ? "object-contain object-center" : "object-contain"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
