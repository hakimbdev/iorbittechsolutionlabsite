"use client"

import { Shield, Lock, Eye, FileText, Users, Database, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const complianceStandards = [
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance for EU data protection",
    icon: Shield,
    status: "Compliant"
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management systems",
    icon: Lock,
    status: "Certified"
  },
  {
    name: "SOC 2",
    description: "Service Organization Control 2 for security, availability, and confidentiality",
    icon: FileText,
    status: "Compliant"
  },
  {
    name: "CCPA",
    description: "California Consumer Privacy Act compliance for data privacy rights",
    icon: Eye,
    status: "Compliant"
  }
]

const securityMeasures = [
  {
    title: "Data Encryption",
    description: "End-to-end encryption for all data transmission and storage",
    icon: Lock
  },
  {
    title: "Access Control",
    description: "Multi-factor authentication and role-based access controls",
    icon: Users
  },
  {
    title: "Data Backup",
    description: "Regular automated backups with secure off-site storage",
    icon: Database
  },
  {
    title: "Incident Response",
    description: "24/7 monitoring and rapid incident response protocols",
    icon: AlertTriangle
  }
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy & Cybersecurity Compliance
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
              Your privacy and data security are our top priorities. Learn how we protect your information and maintain compliance with global standards.
            </p>
            <div className="mt-6 text-sm text-blue-200">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Compliance Standards
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We adhere to the highest international standards for data protection and cybersecurity
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {complianceStandards.map((standard) => (
            <Card key={standard.name} className="text-center">
              <CardHeader>
                <standard.icon className="mx-auto h-12 w-12 text-blue-600" />
                <CardTitle className="flex items-center justify-center gap-2">
                  {standard.name}
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{standard.description}</CardDescription>
                <div className="mt-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  {standard.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Security Measures
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityMeasures.map((measure) => (
              <Card key={measure.title}>
                <CardHeader>
                  <measure.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">{measure.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{measure.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Information We Collect</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p><strong>Personal Information:</strong> Name, email address, phone number, company information, and professional details when you contact us or use our services.</p>
                <p><strong>Technical Information:</strong> IP address, browser type, device information, and usage data to improve our services and security.</p>
                <p><strong>Service Data:</strong> Information related to cybersecurity assessments, data analysis projects, and software development requirements.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide cybersecurity, data analysis, and software engineering services</li>
                  <li>Communicate about projects, updates, and partnership opportunities</li>
                  <li>Improve our services and develop new solutions</li>
                  <li>Comply with legal obligations and maintain security</li>
                  <li>Process payments and manage client relationships</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Data Protection & Security</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>As a cybersecurity-focused company, we implement industry-leading security measures:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using AES-256 encryption</li>
                  <li><strong>Access Controls:</strong> Multi-factor authentication and role-based access for all systems</li>
                  <li><strong>Regular Audits:</strong> Quarterly security assessments and penetration testing</li>
                  <li><strong>Incident Response:</strong> 24/7 monitoring with immediate breach notification protocols</li>
                  <li><strong>Data Minimization:</strong> We collect only necessary data and delete it when no longer needed</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Your Rights</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>Under GDPR, CCPA, and other privacy laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request copies of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Sharing & Third Parties</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We do not sell your personal data. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Trusted partners who assist in delivering our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Partners:</strong> With your consent for partnership services</li>
                </ul>
                <p>All third parties are contractually bound to protect your data with the same standards we maintain.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. International Transfers</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>As an African-based company serving global clients, we may transfer data internationally. We ensure:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Adequate protection through approved transfer mechanisms</li>
                  <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                  <li>Regular assessment of destination country data protection laws</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Cookies & Tracking</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ensure website functionality and security</li>
                  <li>Analyze website performance and user experience</li>
                  <li>Remember your preferences and settings</li>
                </ul>
                <p>You can control cookie settings through your browser preferences.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Data Retention</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We retain personal data only as long as necessary for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing our services and maintaining client relationships</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Resolving disputes and enforcing agreements</li>
                </ul>
                <p>Data is securely deleted when no longer needed, following our data retention schedule.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Contact Information</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>For privacy-related questions, data requests, or security concerns, contact us:</p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <p><strong>Data Protection Officer:</strong> privacy@iorbitlab.africa</p>
                  <p><strong>Security Team:</strong> security@iorbitlab.africa</p>
                  <p><strong>General Inquiries:</strong> info@iorbitlab.africa</p>
                  <p><strong>Address:</strong> Suite 167 Gwarinpa, Abuja, Nigeria</p>
                  <p><strong>Phone:</strong> +234 80-6255-8567</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Updates to This Policy</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Notify you of significant changes via email or website notice</li>
                  <li>Update the "Last updated" date at the top of this policy</li>
                  <li>Maintain previous versions for reference</li>
                </ul>
                <p>Continued use of our services after updates constitutes acceptance of the revised policy.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
