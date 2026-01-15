"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Code, Database, LineChart, Settings, Shield } from "lucide-react"

const solutions = [
  {
    title: "Security Assessment & Auditing",
    description: "Comprehensive security evaluations to identify vulnerabilities and strengthen your defenses",
    icon: Shield,
    features: ["Vulnerability Scanning", "Penetration Testing", "Security Compliance", "Risk Assessment"]
  },
  {
    title: "Threat Detection & Response",
    description: "Advanced monitoring and rapid response systems to protect against cyber threats",
    icon: Settings,
    features: ["24/7 Monitoring", "Incident Response", "Threat Intelligence", "Forensic Analysis"]
  },
  {
    title: "Data Protection & Privacy",
    description: "Secure your sensitive data with encryption and privacy compliance solutions",
    icon: Database,
    features: ["Data Encryption", "Privacy Compliance", "Access Control", "Data Loss Prevention"]
  },
  {
    title: "Security Training & Awareness",
    description: "Educate your team on cybersecurity best practices and threat awareness",
    icon: Brain,
    features: ["Security Training", "Phishing Simulation", "Policy Development", "Awareness Programs"]
  },
  {
    title: "Network Security",
    description: "Comprehensive network protection and infrastructure security solutions",
    icon: Code,
    features: ["Firewall Management", "Network Monitoring", "Intrusion Prevention", "VPN Solutions"]
  },
  {
    title: "Compliance & Governance",
    description: "Ensure regulatory compliance and establish robust security governance",
    icon: LineChart,
    features: ["GDPR Compliance", "ISO 27001", "Security Policies", "Audit Support"]
  }
]

export default function CybersecuritySolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Cybersecurity Solutions for Modern Business
            </h1>
            <p className="text-lg sm:text-xl text-red-100 mb-6 md:mb-8 px-4">
              Protect your digital assets with comprehensive cybersecurity solutions
              designed to defend against evolving threats and ensure business continuity.
            </p>
            <button className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-red-50 transition-colors duration-300 text-sm sm:text-base">
              Secure Your Business
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our AI Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Comprehensive AI solutions tailored to meet your specific business needs
              and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <solution.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{solution.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Let's discuss how our AI solutions can help you achieve your business goals
            and stay ahead of the competition.
          </p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  )
} 