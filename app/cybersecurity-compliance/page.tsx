"use client"

import { Shield, Lock, Eye, FileText, Users, Database, AlertTriangle, CheckCircle, Award, Globe, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  {
    name: "ISO 27001:2013",
    description: "Information Security Management System certification",
    issuer: "International Organization for Standardization",
    validUntil: "2025-12-31",
    icon: Award,
    status: "Active"
  },
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control 2 audit report",
    issuer: "AICPA",
    validUntil: "2025-06-30",
    icon: FileText,
    status: "Active"
  },
  {
    name: "GDPR Compliance",
    description: "General Data Protection Regulation compliance",
    issuer: "European Union",
    validUntil: "Ongoing",
    icon: Shield,
    status: "Compliant"
  },
  {
    name: "CCPA Compliance",
    description: "California Consumer Privacy Act compliance",
    issuer: "State of California",
    validUntil: "Ongoing",
    icon: Eye,
    status: "Compliant"
  }
]

const securityFrameworks = [
  {
    name: "NIST Cybersecurity Framework",
    description: "Comprehensive cybersecurity risk management framework",
    implementation: "Full Implementation",
    icon: Shield
  },
  {
    name: "OWASP Top 10",
    description: "Web application security risks mitigation",
    implementation: "All Controls Implemented",
    icon: Globe
  },
  {
    name: "CIS Controls",
    description: "Center for Internet Security critical security controls",
    implementation: "20/20 Controls Active",
    icon: CheckCircle
  },
  {
    name: "SANS 20 Critical Controls",
    description: "Essential cybersecurity controls for effective defense",
    implementation: "Fully Deployed",
    icon: Zap
  }
]

const technicalControls = [
  {
    category: "Network Security",
    controls: [
      "Next-generation firewalls with deep packet inspection",
      "Intrusion Detection and Prevention Systems (IDS/IPS)",
      "Network segmentation and micro-segmentation",
      "VPN with multi-factor authentication",
      "DDoS protection and mitigation"
    ]
  },
  {
    category: "Data Protection",
    controls: [
      "AES-256 encryption for data at rest",
      "TLS 1.3 for data in transit",
      "Database encryption and tokenization",
      "Secure key management (HSM)",
      "Data loss prevention (DLP) systems"
    ]
  },
  {
    category: "Access Management",
    controls: [
      "Multi-factor authentication (MFA)",
      "Role-based access control (RBAC)",
      "Privileged access management (PAM)",
      "Single sign-on (SSO) integration",
      "Regular access reviews and deprovisioning"
    ]
  },
  {
    category: "Monitoring & Response",
    controls: [
      "24/7 Security Operations Center (SOC)",
      "Security Information and Event Management (SIEM)",
      "Endpoint Detection and Response (EDR)",
      "Threat intelligence integration",
      "Automated incident response workflows"
    ]
  }
]

export default function CybersecurityCompliancePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Cybersecurity Compliance
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-red-100">
              Comprehensive security measures and compliance standards that protect your data and ensure regulatory adherence.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Security Certifications & Compliance
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our commitment to security is validated by industry-leading certifications
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {certifications.map((cert) => (
            <Card key={cert.name} className="text-center">
              <CardHeader>
                <cert.icon className="mx-auto h-12 w-12 text-red-600" />
                <CardTitle className="text-lg">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{cert.description}</CardDescription>
                <div className="space-y-2 text-sm">
                  <p><strong>Issuer:</strong> {cert.issuer}</p>
                  <p><strong>Valid Until:</strong> {cert.validUntil}</p>
                  <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {cert.status}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Frameworks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Security Frameworks
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityFrameworks.map((framework) => (
              <Card key={framework.name}>
                <CardHeader>
                  <framework.icon className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle className="text-lg">{framework.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">{framework.description}</CardDescription>
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {framework.implementation}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Controls */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Technical Security Controls
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {technicalControls.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.controls.map((control, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{control}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Details */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Detailed Compliance Information</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Risk Management</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>Our comprehensive risk management program includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Risk Assessments:</strong> Quarterly comprehensive risk assessments across all systems and processes</li>
                  <li><strong>Threat Modeling:</strong> Systematic identification and analysis of potential security threats</li>
                  <li><strong>Vulnerability Management:</strong> Continuous scanning and remediation of security vulnerabilities</li>
                  <li><strong>Business Continuity:</strong> Disaster recovery and business continuity planning with regular testing</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Incident Response</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>Our 24/7 incident response capabilities ensure rapid detection and response:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Detection:</strong> Real-time monitoring with automated threat detection</li>
                  <li><strong>Response Time:</strong> Initial response within 15 minutes of detection</li>
                  <li><strong>Containment:</strong> Immediate isolation and containment procedures</li>
                  <li><strong>Recovery:</strong> Systematic recovery and restoration processes</li>
                  <li><strong>Lessons Learned:</strong> Post-incident analysis and improvement implementation</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Data Classification & Handling</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>We implement a comprehensive data classification system:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Public:</strong> Information that can be freely shared</li>
                  <li><strong>Internal:</strong> Information for internal use only</li>
                  <li><strong>Confidential:</strong> Sensitive information requiring protection</li>
                  <li><strong>Restricted:</strong> Highly sensitive information with strict access controls</li>
                </ul>
                <p>Each classification level has specific handling, storage, and transmission requirements.</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Security</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>All third-party vendors and partners must meet our security standards:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Security Assessments:</strong> Comprehensive security evaluations before engagement</li>
                  <li><strong>Contractual Requirements:</strong> Security clauses in all vendor contracts</li>
                  <li><strong>Ongoing Monitoring:</strong> Regular security reviews and assessments</li>
                  <li><strong>Incident Coordination:</strong> Joint incident response procedures</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Training & Awareness</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>Security awareness is fundamental to our security posture:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Regular Training:</strong> Monthly security awareness training for all staff</li>
                  <li><strong>Phishing Simulations:</strong> Quarterly phishing simulation exercises</li>
                  <li><strong>Security Champions:</strong> Dedicated security champions in each department</li>
                  <li><strong>Incident Reporting:</strong> Clear procedures for reporting security incidents</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Audit & Compliance Monitoring</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>Continuous monitoring ensures ongoing compliance:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Internal Audits:</strong> Quarterly internal security audits</li>
                  <li><strong>External Audits:</strong> Annual third-party security assessments</li>
                  <li><strong>Penetration Testing:</strong> Bi-annual penetration testing by certified professionals</li>
                  <li><strong>Compliance Reporting:</strong> Regular compliance status reports to stakeholders</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Security Team</h3>
              <div className="text-gray-600 dark:text-gray-300 space-y-4">
                <p>For security-related inquiries, incident reporting, or compliance questions:</p>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <p><strong>Security Team:</strong> security@iorbitlab.africa</p>
                  <p><strong>Incident Reporting:</strong> incident@iorbitlab.africa</p>
                  <p><strong>Compliance Officer:</strong> compliance@iorbitlab.africa</p>
                  <p><strong>Emergency Hotline:</strong> +234 80-6255-8567 (24/7)</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
