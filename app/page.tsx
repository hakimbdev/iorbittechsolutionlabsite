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
      {/* Hero Section with Slider - Mobile Optimized */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0 hero-carousel">
          <Carousel
            setApi={setApi}
            className="h-full w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="h-full ml-0" data-carousel-container="true">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full pl-0 basis-full" data-carousel-item="true">
                  <div className="relative h-full w-full">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      quality={100}
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Hidden on mobile */}
            <CarouselPrevious className="hidden sm:flex left-2 sm:left-4 h-10 w-10 sm:h-12 sm:w-12 bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm z-20" />
            <CarouselNext className="hidden sm:flex right-2 sm:right-4 h-10 w-10 sm:h-12 sm:w-12 bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm z-20" />
          </Carousel>
        </div>

        {/* Content Overlay - Mobile Responsive */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="mx-auto max-w-7xl w-full text-center sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white px-2">
              Iorbit Tech Solutions Lab
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white px-4 max-w-3xl mx-auto">
               Welcome to a Revolutionary Software Development Agency
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Link
                href="/solutions"
                className="rounded-md bg-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors touch-target"
              >
                Explore Solutions
              </Link>
              <Link
                href="/case-studies"
                className="rounded-md bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors touch-target"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 touch-target ${
                current === index
                  ? "bg-white w-8 sm:w-12"
                  : "bg-white/50 hover:bg-white/75 w-2 sm:w-3"
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

      {/* Technologies Section - Mobile Optimized */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white px-2">
              Technologies
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300 px-4">
              Explore our cutting-edge technology solutions and innovations that drive digital transformation
            </p>
          </div>
          <div className="mx-auto mt-8 sm:mt-12 max-w-6xl">
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Technology Card 1 */}
              <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/da8ptobvx/image/upload/v1769779770/lll_thb5y9.png"
                    alt="AI & Machine Learning"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    AI & Machine Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Advanced artificial intelligence and machine learning solutions for intelligent automation
                  </p>
                </div>
              </div>

              {/* Technology Card 2 */}
              <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/da8ptobvx/image/upload/v1769779764/images_dyhc9g.jpg"
                    alt="Cloud Computing"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Cloud Computing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Scalable cloud infrastructure and services for modern business operations
                  </p>
                </div>
              </div>

              {/* Technology Card 3 */}
              <div className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/da8ptobvx/image/upload/v1769780918/Code_Workplace_brktti.jpg"
                    alt="Software Development"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Software Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Custom software solutions built with modern technologies and best practices
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button - Mobile Optimized */}
            <div className="text-center mt-8 sm:mt-12 px-4">
              <Link
                href="/robotics"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200 touch-target w-full sm:w-auto"
              >
                Explore All Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stories Highlight Section - Mobile Optimized */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white px-2">
              Our Latest Stories
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300 px-4">
              Discover our journey through major tech events and innovations that shape Africa's digital future
            </p>
          </div>
          <div className="mx-auto mt-8 sm:mt-12 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/da8ptobvx/image/upload/v1758051492/1000003726_wk5z8i.jpg"
                  alt="GITEX Tech Event 2025 - Abuja"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  GITEX Tech Event 2025
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 sm:mb-4">
                  Our participation in Nigeria's premier technology event across Abuja and Lagos
                </p>
                <div className="flex items-center text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  2025 • Abuja & Lagos
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/da8ptobvx/image/upload/v1758051492/uraz_lhp5te.jpg"
                  alt="Innovation Showcase"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Innovation Showcase
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 sm:mb-4">
                  Demonstrating cutting-edge cybersecurity solutions to industry leaders
                </p>
                <div className="flex items-center text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  2025 • Tech Innovation
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/da8ptobvx/image/upload/v1758051488/1000004560_x3qhjg.jpg"
                  alt="Partnership Networking"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Partnership Networking
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 sm:mb-4">
                  Building strategic partnerships with technology companies and agencies
                </p>
                <div className="flex items-center text-xs sm:text-sm text-blue-600 dark:text-blue-400">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  2025 • Business Growth
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 text-center px-4">
            <Link
              href="/stories"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 touch-target w-full sm:w-auto"
            >
              View All Stories
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Partners Section - Mobile Optimized */}
      <div className="bg-white dark:bg-gray-800 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white px-2">
              Our Partners
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 dark:text-gray-300 px-4">
              Collaborating with industry leaders to drive innovation and excellence
            </p>
          </div>
          <div className="mx-auto mt-8 sm:mt-12 md:mt-16 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex flex-col items-center px-2"
              >
                <div className="relative h-28 sm:h-32 w-full overflow-hidden rounded-lg bg-white p-3 sm:p-4 transition-all duration-300 hover:shadow-lg">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className={`transition-transform duration-300 group-hover:scale-105 ${
                      partner.name === "Polkadot Africa" ? "object-contain object-center" : "object-contain"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center px-2">
                  {partner.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center px-2">
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
