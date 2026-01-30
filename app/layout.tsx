import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import { Github, Twitter, Linkedin } from 'lucide-react'
import type { Metadata } from 'next'
import Chatbot from './components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iorbit Tech Solutions Lab',
  description: 'A software agency specializing in delivering Software Engineering solutions like Website Developments, Software Architecture, Building Organizational Email System, AI-powered Solutions, Product Design, 3D Animations and Video Creations for Advertisement, Odoo and Zoho Configurations for forward-thinking brands, Governmental Organizations, Non-Governmental Organizations and SMEs.',
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/da8ptobvx/image/upload/w_16,h_16,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: 'https://res.cloudinary.com/da8ptobvx/image/upload/w_32,h_32,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: 'https://res.cloudinary.com/da8ptobvx/image/upload/w_48,h_48,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        url: 'https://res.cloudinary.com/da8ptobvx/image/upload/w_64,h_64,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
    shortcut: 'https://res.cloudinary.com/da8ptobvx/image/upload/w_32,h_32,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png',
    apple: [
      {
        url: 'https://res.cloudinary.com/da8ptobvx/image/upload/w_180,h_180,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: 'https://res.cloudinary.com/da8ptobvx/image/upload/w_152,h_152,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        url: 'https://res.cloudinary.com/da8ptobvx/image/upload/w_120,h_120,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png',
        sizes: '120x120',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/da8ptobvx/image/upload/w_16,h_16,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/da8ptobvx/image/upload/w_32,h_32,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="https://res.cloudinary.com/da8ptobvx/image/upload/w_48,h_48,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="https://res.cloudinary.com/da8ptobvx/image/upload/w_64,h_64,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/da8ptobvx/image/upload/w_180,h_180,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://res.cloudinary.com/da8ptobvx/image/upload/w_152,h_152,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://res.cloudinary.com/da8ptobvx/image/upload/w_120,h_120,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/da8ptobvx/image/upload/w_32,h_32,c_fill,q_auto,f_auto/v1758048165/Blue_Black_Modern_Business_Card-removebg-preview_gesfy3.png" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} h-full bg-gray-50 dark:bg-gray-900`}>
        <div className="min-h-full flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Iorbit Tech Solutions Lab</h3>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    A software agency specializing in delivering Software Engineering solutions like Website Developments, Software Architecture, Building Organizational Email System, AI-powered Solutions, Product Design, 3D Animations and Video Creations for Advertisement, Odoo and Zoho Configurations for forward-thinking brands, Governmental Organizations, Non-Governmental Organizations and SMEs.
                  </p>
                  <div className="mt-6 flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                      <span className="sr-only">Twitter</span>
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                      <span className="sr-only">GitHub</span>
                      <Github className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/iorbitlabafrica/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="/services" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Cybersecurity
                      </a>
                    </li>
                    <li>
                      <a href="/robotics" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        World of AI
                      </a>
                    </li>
                    <li>
                      <a href="/stories" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Stories
                      </a>
                    </li>
                    <li>
                      <a href="/data-analysis" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Data Analysis
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Software Engineering
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Partnership Services
                      </a>
                    </li>
                    <li>
                      <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/cybersecurity-compliance" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200">
                        Security Compliance
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      Email: clientsupport@iotsl.com.ng
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      Phone: +234 80-6255-8567
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      Address 1: Suite 302A Bahamas Plaza, Gudu Area, FCT, Abuja, Nigeria.
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300">
                      Address 2: Near DHL Office, Azare, Bauchi, Nigeria.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                  © {new Date().getFullYear()} Iorbit Tech Solutions Lab. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
        <Chatbot />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbaseConfig = {
                chatbotId: "YOUR_CHATBOT_ID"
              }
            `,
          }}
        />
        <script
          src="https://www.chatbase.co/embed.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
