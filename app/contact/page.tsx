import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Mobile Optimized */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white px-2">
              Contact Us
            </h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">
              Get in touch with our team to discuss your project or ask any questions
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Contact Information - Mobile Optimized */}
          <div className="rounded-xl sm:rounded-2xl bg-white p-5 sm:p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              We'd love to hear from you. Here's how you can reach us.
            </p>

            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 break-words">
                    <a href="mailto:clientsupport@iotsl.com.ng" className="hover:text-blue-600 transition-colors">
                      clientsupport@iotsl.com.ng
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    <a href="tel:+2348062558567" className="hover:text-blue-600 transition-colors">
                      +234 80-6255-8567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <div className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 space-y-3 sm:space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Address 1:</p>
                      <p className="leading-relaxed">
                        Suite 302A Bahamas Plaza<br />
                        Gudu Area, FCT<br />
                        Abuja, Nigeria
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Address 2:</p>
                      <p className="leading-relaxed">
                        Near DHL Office<br />
                        Azare, Bauchi<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    Business Hours
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Mobile Optimized */}
          <div className="rounded-xl sm:rounded-2xl bg-white p-5 sm:p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Send us a Message
            </h2>
            <form className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2.5 sm:py-2 text-base sm:text-sm"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2.5 sm:py-2 text-base sm:text-sm"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2.5 sm:py-2 text-base sm:text-sm"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2.5 sm:py-2 text-base sm:text-sm"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-4 py-3 sm:py-2.5 text-base sm:text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors touch-target"
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