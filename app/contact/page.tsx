import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Get in touch with our team to discuss your project or ask any questions
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We'd love to hear from you. Here's how you can reach us.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    <a href="mailto:contact@iorbit.tech" className="hover:text-blue-600">
                      contact@iots.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    <a href="tel:+1234567890" className="hover:text-blue-600">
                      +234 80-6255-8567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Suite 167 <br />
                    Gwarinpa, Abuja<br />
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Business Hours
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Send us a Message
            </h2>
            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 