"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, LineChart, Settings, Shield } from "lucide-react"

const mlServices = [
  {
    title: "Custom ML Models",
    description: "Tailored machine learning solutions for your specific needs",
    icon: Brain,
    features: ["Predictive Models", "Classification Systems", "Recommendation Engines"]
  },
  {
    title: "Deep Learning",
    description: "Advanced neural networks for complex problem solving",
    icon: Code,
    features: ["Neural Networks", "Computer Vision", "Natural Language Processing"]
  },
  {
    title: "ML Infrastructure",
    description: "Robust infrastructure for ML model deployment",
    icon: Database,
    features: ["Model Deployment", "Scalable Systems", "Cloud Integration"]
  },
  {
    title: "ML Operations",
    description: "End-to-end ML lifecycle management",
    icon: Settings,
    features: ["Model Monitoring", "Performance Tracking", "Continuous Integration"]
  },
  {
    title: "ML Analytics",
    description: "Comprehensive analytics for ML systems",
    icon: LineChart,
    features: ["Model Analytics", "Performance Metrics", "Insight Generation"]
  },
  {
    title: "ML Security",
    description: "Secure and compliant ML solutions",
    icon: Shield,
    features: ["Data Protection", "Model Security", "Compliance"]
  }
]

export default function MachineLearning() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Harness the power of machine learning to drive innovation and growth
              in your business.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Machine Learning Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive machine learning solutions to help you stay ahead of the curve
              and drive business innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our ML Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to developing and deploying machine learning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Problem Definition",
                description: "Understand your business needs and objectives"
              },
              {
                step: "02",
                title: "Data Preparation",
                description: "Collect and preprocess relevant data"
              },
              {
                step: "03",
                title: "Model Development",
                description: "Build and train ML models"
              },
              {
                step: "04",
                title: "Deployment",
                description: "Deploy and monitor ML solutions"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Leverage Machine Learning?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our machine learning solutions can help you achieve
            your business goals and drive innovation.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
} 