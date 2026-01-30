"use client"

import Link from "next/link"
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import styles from './home.module.css'
import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const heroImages = [
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1769758117/1769320988542_bqo3zj.png",
    alt: "Iorbit Tech Solutions Lab - Innovation 1"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1769758090/1769321003418_cmjo5z.png",
    alt: "Iorbit Tech Solutions Lab - Innovation 2"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1769756149/ChatGPT_Image_Jan_29_2026_07_49_47_AM_hdnizt.png",
    alt: "Iorbit Tech Solutions Lab - Innovation 3"
  }
]

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
  {
    name: "Queen Amina Medical Integration",
    logo: "https://res.cloudinary.com/da8ptobvx/image/upload/v1769775153/Queen_Amina_Medical_Integration_gou5yl.png",
    description: "Healthcare Technology Partner"
  },
  {
    name: "Trash2Cash",
    logo: "https://res.cloudinary.com/da8ptobvx/image/upload/v1769775153/eTrash2Cash_lu5kbg.png",
    description: "Environmental Technology Partner"
  },
  {
    name: "Profit2People",
    logo: "https://res.cloudinary.com/da8ptobvx/image/upload/v1769776946/Profit2People_z9ube0.png",
    description: "Social Impact Partner"
  },
]

export default function Home() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-play functionality
  useEffect(() => {
    if (!api) {
      return
    }

    const autoplay = setInterval(() => {
      api.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(autoplay)
  }, [api])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Slider */}
      <div className="relative h-screen w-full overflow-hidden">
        <Carousel
          setApi={setApi}
          className="h-full w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-screen">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-screen">
                <div className="relative h-full w-full">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    priority={index === 0}
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
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="left-4 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm" />
          <CarouselNext className="right-4 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm" />
        </Carousel>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 pointer-events-auto">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Iorbit Tech Solutions Lab
            </h1>
            <p className="mt-4 text-lg text-white sm:text-xl">
               Welcome to a Revolutionary Software Development Agency
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

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-12"
                  : "bg-white/50 hover:bg-white/75 w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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

      {/* Technologies Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Technologies
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Explore our cutting-edge technology solutions and innovations that drive digital transformation
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Technology Card 1 */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/da8ptobvx/image/upload/v1769779770/lll_thb5y9.png"
                    alt="AI & Machine Learning"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    AI & Machine Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Advanced artificial intelligence and machine learning solutions for intelligent automation
                  </p>
                </div>
              </div>

              {/* Technology Card 2 */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/da8ptobvx/image/upload/v1769779764/images_dyhc9g.jpg"
                    alt="Cloud Computing"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Cloud Computing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Scalable cloud infrastructure and services for modern business operations
                  </p>
                </div>
              </div>

              {/* Technology Card 3 */}
              <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/da8ptobvx/image/upload/v1769780918/Code_Workplace_brktti.jpg"
                    alt="Software Development"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Software Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Custom software solutions built with modern technologies and best practices
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Link
                href="/robotics"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Explore All Technologies
              </Link>
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
