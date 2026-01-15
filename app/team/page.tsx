'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const founders = [
  {
    name: "Abdulhakim Ahmad",
    role: "Founder & Lead Technologist",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748265942/pp1_ek8kwj.jpg",
    bio: "Software Engineer with expertise in AI, React, Node.js, and cloud technologies. Passionate about creating innovative solutions and leading teams to success.",
    github: "https://github.com/hakimbdev",
    linkedin: "https://www.linkedin.com/in/abdulhakim-ahmad-413b2514b/",
    email: "ceo@iorbitlab.africa",
    achievements: [
      "Led development of multiple enterprise applications",
      "Expert in cloud architecture and deployment",
      "Strong focus on code quality and best practices"
    ]
  },
  {
    name: "Ilham Maaruf",
    role: "Brand Analyst",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg",
    bio: "Expertize inData Analytics and Marketing",
    linkedin: "https://www.linkedin.com/in/ilham-maaruf/",
    email: "ilham@iots.com",
    achievements: [
      "Marketing Specialist"
    ]
  },
  {
    name: "Adamu Bala Abdullahi",
    role: "Technical Advisor",
    image: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365263/5_rr2jvv.jpg",
    bio: "Frontend Developer with expertise in React, TypeScript, and UI/UX design. Dedicated to creating beautiful and intuitive user experiences.",
    linkedin: "https://www.linkedin.com/in/adam-abdullahi-bala-655983124/",
    email: "adamubala@iots.com",
    achievements: [
      "TypeScript and React expert",
      "Passionate about accessibility and UX"
    ]
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Team Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder) => (
            <div 
              key={founder.name} 
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 dark:bg-gray-800"
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  priority
                  quality={90}
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                    founder.name === "Adamu Bala Abdullahi" ? "object-top" : "object-center"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{founder.name}</h3>
                <p className="mt-1 text-lg font-medium text-blue-600 dark:text-blue-400">{founder.role}</p>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{founder.bio}</p>
                
                {/* Achievements */}
                <div className="mt-6">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {founder.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex space-x-4">
                  {founder.github && (
                    <Link 
                      href={founder.github} 
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-6 w-6" />
                    </Link>
                  )}
                  <Link 
                    href={founder.linkedin} 
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link 
                    href={`mailto:${founder.email}`} 
                    className="text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                  >
                    <Mail className="h-6 w-6" />
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