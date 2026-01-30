"use client"

import { Cpu, Zap, Brain, Sparkles, Rocket, Network, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const aiFields = [
  {
    title: "Artificial Intelligence (AI)",
    description: "Intelligent systems that simulate human cognitive functions and decision-making",
    icon: Brain,
    applications: ["Machine Learning", "Deep Learning", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Generative AI",
    description: "AI systems that create new content, from text to images and code",
    icon: Sparkles,
    applications: ["Text Generation", "Image Synthesis", "Code Generation", "Creative AI"]
  },
  {
    title: "Large Language Models (LLMs)",
    description: "Advanced neural networks trained on vast amounts of text data",
    icon: MessageSquare,
    applications: ["ChatGPT", "GPT-4", "Claude", "Gemini", "LLaMA"]
  },
  {
    title: "Natural Language Processing",
    description: "AI technology that enables computers to understand and process human language",
    icon: Network,
    applications: ["Sentiment Analysis", "Language Translation", "Text Summarization", "Chatbots"]
  }
]

const innovations = [
  {
    title: "Artificial Super Intelligence (ASI)",
    description: "Next-generation AI surpassing human intelligence across all domains",
    icon: Rocket,
    highlight: "The future of cognitive computing"
  },
  {
    title: "Machine Learning Models",
    description: "Algorithms that learn from data to make predictions and decisions",
    icon: Cpu,
    highlight: "Powering intelligent automation"
  },
  {
    title: "Neural Networks",
    description: "Deep learning architectures inspired by the human brain",
    icon: Brain,
    highlight: "Enabling complex pattern recognition"
  },
  {
    title: "AI-Powered Solutions",
    description: "Intelligent applications transforming business operations",
    icon: Zap,
    highlight: "Driving digital transformation"
  }
]

const futureApplications = [
  "Conversational AI Assistants",
  "Intelligent Document Processing",
  "AI-Driven Business Intelligence",
  "Automated Content Creation",
  "Predictive Maintenance Systems",
  "Smart Recommendation Engines",
  "AI-Enhanced Cybersecurity",
  "Intelligent Process Automation"
]

export default function RoboticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Brain className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              World of AI
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-purple-100">
              Exploring the cutting-edge world of Artificial Intelligence, Machine Learning, Large Language Models, and intelligent systems transforming our digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* AI Technologies Overview */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Software Artificial Intelligence Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover the revolutionary AI technologies powering the future of software development and intelligent automation
          </p>
        </div>

        {/* AI Fields */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our AI Expertise
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aiFields.map((field) => (
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
            AI Innovations
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
              Future of AI
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              IORBIT TECH SOLUTIONS LAB is at the forefront of AI innovation, developing intelligent solutions that transform businesses and empower organizations across Africa and beyond.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {futureApplications.map((application, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{application}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid gap-6 sm:grid-cols-3 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600 dark:text-gray-300">AI Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">ML Models Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-300">Innovation Focus</div>
              </div>
            </div>
          </div>
        </div>

        {/* IORBIT TECH SOLUTIONS LAB's Role */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            IORBIT TECH SOLUTIONS LAB's AI Vision
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              As a leading technology company in Africa, IORBIT TECH SOLUTIONS LAB is committed to advancing AI and machine learning technologies that address real-world challenges. From developing intelligent automation solutions to building cutting-edge AI-powered applications, we're shaping the future of software intelligence.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our AI Services
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Custom AI solutions and intelligent applications</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">LLM Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Large Language Model implementation and fine-tuning</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Security</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Cybersecurity for AI systems and data protection</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ML Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced machine learning and predictive analytics</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Consulting</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Strategic AI implementation and transformation guidance</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Training</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">AI and Machine Learning skills development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
