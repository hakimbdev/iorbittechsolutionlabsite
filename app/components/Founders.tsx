"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

const founders = [
  {
    name: "Abdulhakim Ahmad",
    title: "CEO",
    description:
      "Former AI Expert at Google DeepMind with 15+ years in artificial intelligence and machine learning.",
    image:
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1749308419/image0_1_qmhfmk.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
    achievements: ["Software Engineer", "Artificial Intelligence Expert", "15+ Years AI"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Adamu Abdullahi",
    title: "Technical Advisor",
    description:
      "Former Principal Engineer at Microsoft Azure with expertise in cloud architecture and scalable systems.",
    image:
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365263/5_rr2jvv.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
    achievements: ["Strategist", "Microsoft Azure", "Cloud Expert"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Ilham Maaruf",
    title: "Brand Analyst",
    description:
      "Brand Analysis.",
    image:
      "https://res.cloudinary.com/dc5qncppu/image/upload/v1748276042/1747071940377_mwdn27.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
    achievements: ["Data Analytics", "Marketing", "12+ Years Data"],
    gradient: "from-emerald-500 to-teal-500",
  },
]

export default function Founders() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our leadership team combines decades of experience from top tech companies with a passion for innovation and
            excellence in artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden hover:scale-105"
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center relative z-10">
                  <div className="relative mx-auto mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${founder.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      width={150}
                      height={150}
                      className="relative rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{founder.name}</CardTitle>
                  <CardDescription
                    className={`text-lg font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}
                  >
                    {founder.title}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed">{founder.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${founder.gradient} text-white`}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={founder.linkedin}
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={founder.twitter}
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={founder.github}
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
