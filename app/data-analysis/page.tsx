"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart, TrendingUp, Database, FileText } from "lucide-react"

const services = [
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights",
    icon: BarChart,
    features: ["Real-time Dashboards", "KPI Tracking", "Performance Analytics"]
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions",
    icon: LineChart,
    features: ["Trend Analysis", "Forecasting Models", "Risk Assessment"]
  },
  {
    title: "Data Visualization",
    description: "Present complex data in clear, compelling ways",
    icon: PieChart,
    features: ["Interactive Charts", "Custom Reports", "Visual Analytics"]
  },
  {
    title: "Market Analysis",
    description: "Understand market trends and customer behavior",
    icon: TrendingUp,
    features: ["Market Research", "Competitor Analysis", "Customer Insights"]
  },
  {
    title: "Data Management",
    description: "Organize and optimize your data infrastructure",
    icon: Database,
    features: ["Data Warehousing", "ETL Processes", "Data Quality"]
  },
  {
    title: "Reporting Solutions",
    description: "Comprehensive reporting for better decision making",
    icon: FileText,
    features: ["Automated Reports", "Custom Dashboards", "Data Export"]
  }
]

export default function DataAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Data Analysis Solutions
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 md:mb-8 px-4">
              Unlock the power of your data with advanced analytics and insights
              that drive business growth.
            </p>
            <button className="bg-white text-purple-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 text-sm sm:text-base">
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our Data Analysis Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Comprehensive data analysis solutions to help you make informed decisions
              and drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 flex-shrink-0" />
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Our Data Analysis Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              A systematic approach to transforming your data into valuable insights
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Data Collection",
                description: "Gather and organize your data from multiple sources"
              },
              {
                step: "02",
                title: "Data Processing",
                description: "Clean and prepare data for analysis"
              },
              {
                step: "03",
                title: "Analysis",
                description: "Apply advanced analytics techniques"
              },
              {
                step: "04",
                title: "Insights",
                description: "Generate actionable insights and recommendations"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Let's discuss how our data analysis solutions can help you make better
            decisions and drive business growth.
          </p>
          <button className="bg-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 text-sm sm:text-base">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
} 