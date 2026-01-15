import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Zap } from "lucide-react"

const stats = [
  { icon: Users, label: "Team Members", value: "50+" },
  { icon: Award, label: "Projects Completed", value: "200+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
  { icon: Zap, label: "Years of Experience", value: "10+" },
]

export default function About() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 px-2">
            About IORBIT TECH SOLUTIONS LAB
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Founded in 2019 and incorporated in 2025, IORBIT TECH SOLUTIONS LAB (also known as iOrbit Tech Solutions Lab) has been at the forefront of artificial intelligence innovation, helping
            brands transform their operations through cutting-edge technology solutions.
          </p>
        </div>

        {/* Stats Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
              <CardContent className="p-4 sm:p-6">
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission/Vision and Why Choose Us - Mobile Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Mission and Vision */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                To empower forward-thinking brands across Africa with comprehensive cybersecurity, data analysis, and software engineering solutions,
                while providing strategic partnership services that drive digital product success and sustainable growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Vision</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                To be Africa's leading software agency, fostering digital transformation and innovation through secure,
                data-driven solutions that create lasting value for businesses and communities.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/15 transition-colors duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose IORBIT TECH SOLUTIONS LAB?</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm sm:text-base leading-relaxed">
                  Expert team specializing in cybersecurity, data analysis, and software engineering
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm sm:text-base leading-relaxed">
                  Comprehensive partnership services for digital product marketing
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm sm:text-base leading-relaxed">
                  Data-driven insights and strategic market growth solutions
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm sm:text-base leading-relaxed">
                  Dedicated support for launching and scaling digital products
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
