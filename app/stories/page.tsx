"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Users, Award, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const gitexStories = [
  {
    id: 1,
    title: "GITEX Tech Event 2025 - Abuja",
    location: "Abuja, Nigeria",
    date: "2025",
    description: "IORBIT LAB Africa's participation in the prestigious GITEX Tech Event, showcasing our cybersecurity and software engineering solutions.",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1758051492/1000003726_wk5z8i.jpg",
    category: "Tech Event"
  },
  {
    id: 2,
    title: "Innovation Showcase - GITEX 2025",
    location: "Abuja, Nigeria", 
    date: "2025",
    description: "Demonstrating cutting-edge cybersecurity solutions and data analysis capabilities to industry leaders and potential partners.",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1758051492/uraz_lhp5te.jpg",
    category: "Innovation"
  },
  {
    id: 3,
    title: "Partnership Networking - GITEX",
    location: "Victoria Island, Lagos",
    date: "2025", 
    description: "Building strategic partnerships and exploring collaboration opportunities with technology companies and government agencies.",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1758051488/1000004560_x3qhjg.jpg",
    category: "Networking"
  },
  {
    id: 4,
    title: "Tech Leadership Summit",
    location: "Abuja, Nigeria",
    date: "2025",
    description: "Engaging with tech leaders and discussing the future of cybersecurity and digital transformation in Africa.",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1758051487/amin_dayekh_vzosu2.jpg",
    category: "Leadership"
  },
  {
    id: 5,
    title: "GITEX Exhibition Floor",
    location: "Victoria Island, Lagos", 
    date: "2025",
    description: "Our exhibition booth attracting visitors interested in our comprehensive software engineering and partnership services.",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1758051487/1000023287_vbnadr.jpg",
    category: "Exhibition"
  },
  {
    id: 6,
    title: "Technology Demonstrations",
    location: "Abuja, Nigeria",
    date: "2025",
    description: "Live demonstrations of our cybersecurity tools and data analysis platforms to potential clients and partners.",
    image: "https://res.cloudinary.com/da8ptobvx/image/upload/v1758051486/1000023262_e0yhou.jpg",
    category: "Demo"
  }
]

const eventHighlights = [
  {
    icon: Users,
    title: "500+ Attendees",
    description: "Connected with industry professionals"
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Acknowledged for innovation in cybersecurity"
  },
  {
    icon: MapPin,
    title: "2 Cities",
    description: "Events in Abuja and Lagos"
  },
  {
    icon: Calendar,
    title: "Multi-Day Event",
    description: "Comprehensive tech showcase"
  }
]

export default function StoriesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Tech Event', 'Innovation', 'Networking', 'Leadership', 'Exhibition', 'Demo']
  
  const filteredStories = selectedCategory === 'All' 
    ? gitexStories 
    : gitexStories.filter(story => story.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredStories.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredStories.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Stories
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
              Discover IORBIT LAB Africa's journey through major tech events, partnerships, and innovations that shape the future of technology in Africa.
            </p>
          </div>
        </div>
      </div>

      {/* GITEX 2025 Feature Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            GITEX Tech Event 2025
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our participation in Nigeria's premier technology event across Abuja and Victoria Island, Lagos
          </p>
        </div>

        {/* Event Highlights */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {eventHighlights.map((highlight, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <highlight.icon className="mx-auto h-12 w-12 text-blue-600" />
                <CardTitle className="text-lg">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{highlight.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stories Gallery */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story, index) => (
            <Card key={story.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onClick={() => openLightbox(index)}
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    {story.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{story.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {story.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {story.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{story.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Impact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              GITEX 2025 Impact
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Our participation in GITEX Tech Event 2025 across Abuja and Victoria Island (Lagos) marked a significant milestone in IORBIT LAB Africa's journey. We showcased our cutting-edge cybersecurity solutions, demonstrated our data analysis capabilities, and established valuable partnerships that continue to drive innovation in the African tech ecosystem.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">New Partnerships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600 dark:text-gray-300">Business Connections</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Speaking Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-white bg-opacity-20 p-2 text-white hover:bg-opacity-30 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white bg-opacity-20 p-2 text-white hover:bg-opacity-30 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white bg-opacity-20 p-2 text-white hover:bg-opacity-30 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="relative">
              <Image
                src={filteredStories[selectedImage].image}
                alt={filteredStories[selectedImage].title}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-bold text-white mb-2">
                  {filteredStories[selectedImage].title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {filteredStories[selectedImage].description}
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {filteredStories[selectedImage].location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {filteredStories[selectedImage].date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
