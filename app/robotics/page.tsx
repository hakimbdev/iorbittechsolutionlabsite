"use client"

import { Bot, Cpu, Zap, Brain, Cog, Rocket, Shield, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const roboticsFields = [
  {
    title: "Artificial Intelligence",
    description: "Advanced AI systems powering autonomous decision-making in robotics",
    icon: Brain,
    applications: ["Machine Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"]
  },
  {
    title: "Autonomous Systems",
    description: "Self-operating robotic systems for various industries and applications",
    icon: Bot,
    applications: ["Autonomous Vehicles", "Drones", "Industrial Automation", "Smart Manufacturing"]
  },
  {
    title: "IoT Integration",
    description: "Connected robotics systems with real-time data processing and control",
    icon: Globe,
    applications: ["Smart Cities", "Connected Factories", "Remote Monitoring", "Edge Computing"]
  },
  {
    title: "Cybersecurity for Robotics",
    description: "Securing robotic systems against cyber threats and vulnerabilities",
    icon: Shield,
    applications: ["Robot Security", "Network Protection", "Data Encryption", "Threat Detection"]
  }
]

const innovations = [
  {
    title: "AI-Powered Motorcycles",
    description: "Revolutionary AI integration in two-wheeled transportation",
    icon: Rocket,
    highlight: "Yamaha Motoroid 2 - World's first AI motorbike"
  },
  {
    title: "Industrial Automation",
    description: "Smart manufacturing with robotic process automation",
    icon: Cog,
    highlight: "Reducing production costs by up to 40%"
  },
  {
    title: "Healthcare Robotics",
    description: "Medical robots for surgery, rehabilitation, and patient care",
    icon: Zap,
    highlight: "Precision surgery with minimal invasive procedures"
  },
  {
    title: "Smart Infrastructure",
    description: "Robotic systems for smart city development and maintenance",
    icon: Cpu,
    highlight: "Automated infrastructure monitoring and repair"
  }
]

const futureApplications = [
  "Autonomous Transportation Networks",
  "Smart Agricultural Systems",
  "Space Exploration Robotics",
  "Environmental Monitoring Drones",
  "Disaster Response Robots",
  "Personal Assistant Robots",
  "Educational Robotics Platforms",
  "Security and Surveillance Systems"
]

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Bot className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              World of Robotics
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-purple-100">
              Exploring the cutting-edge intersection of artificial intelligence, robotics, and autonomous systems that are reshaping our world.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Video Section - Yamaha Motoroid 2 */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Revolutionary AI Innovation
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Witness the future of transportation with Yamaha Motoroid 2 - The world's first artificial intelligence motorbike
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Yamaha Motoroid 2: AI-Powered Motorcycle
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Experience the groundbreaking fusion of artificial intelligence and motorcycle engineering. The Yamaha Motoroid 2 represents a paradigm shift in transportation technology, featuring autonomous balancing, intelligent rider interaction, and advanced AI decision-making capabilities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Brain className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Advanced AI Neural Networks</span>
                </div>
                <div className="flex items-center">
                  <Bot className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Autonomous Balancing System</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Real-time Environmental Analysis</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <iframe 
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7373971713799258112?compact=1" 
                  height="399" 
                  width="100%" 
                  frameBorder="0" 
                  allowFullScreen 
                  title="Yamaha Motoroid 2 - World's first AI motorbike"
                  className="rounded-lg"
                  style={{ minWidth: '320px', maxWidth: '504px', margin: '0 auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Robotics Fields */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Robotics Expertise
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {roboticsFields.map((field) => (
              <Card key={field.title} className="h-full">
                <CardHeader>
                  <field.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">{field.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{field.description}</CardDescription>
                  <div className="space-y-2">
                    {field.applications.map((app, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Robotics Innovations
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {innovations.map((innovation) => (
              <Card key={innovation.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <innovation.icon className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-lg">{innovation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{innovation.description}</CardDescription>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-purple-700 dark:text-purple-300">
                      {innovation.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Applications */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Future of Robotics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              IORBIT LAB Africa is at the forefront of robotics innovation, developing solutions that will transform industries and improve lives across the continent and beyond.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {futureApplications.map((application, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center">
                  <Rocket className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{application}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid gap-6 sm:grid-cols-3 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Robotics Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-300">AI Algorithms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Innovation Focus</div>
              </div>
            </div>
          </div>
        </div>

        {/* IORBIT LAB Africa's Role */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            IORBIT LAB Africa's Robotics Vision
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              As a leading technology company in Africa, IORBIT LAB Africa is committed to advancing robotics and AI technologies that address real-world challenges. From cybersecurity for robotic systems to developing autonomous solutions for African markets, we're building the future of intelligent automation.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Robotics Services
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Custom AI algorithms for robotic applications</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">System Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Seamless integration of robotic systems</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security Solutions</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Cybersecurity for robotic networks</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced analytics for robotic data</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Consulting</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Strategic robotics implementation guidance</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Training</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Robotics and AI skills development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
