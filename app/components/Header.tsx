"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ["services", "portfolio", "about", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    {
      name: "Services",
      href: "#services",
      submenu: ["AI Solutions", "Machine Learning", "Data Analysis"],
    },
    {
      name: "Portfolio",
      href: "#portfolio",
      submenu: ["Case Studies", "Success Stories", "Testimonials"],
    },
    { name: "About", href: "#about", submenu: ["Our Story", "Team", "Vision"] },
    {
      name: "Contact",
      href: "#contact",
      submenu: ["Get in Touch", "Support", "Careers"],
    },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-blue-200 shadow-lg"
          : "bg-white/5 backdrop-blur-sm border-b border-white/10 mt-4"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <div className="relative flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-wider">iO</span>
                <span className="absolute -bottom-1 w-4 h-1 bg-white/50 rounded-full"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold group-hover:gradient-text transition-all duration-300 relative">
                <span className={`${isScrolled ? "text-blue-600" : "text-white"}`}>
                  iOrbit Tech
                </span>
              </span>
              <span className="text-sm font-medium ${isScrolled ? 'text-blue-500/80' : 'text-white/80'}">
                Solutions Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 font-medium transition-all duration-300 relative ${
                    isScrolled
                      ? "text-blue-600 hover:text-blue-800"
                      : "text-white/90 hover:text-white"
                  } ${
                    activeSection === item.name.toLowerCase() ? "text-blue-500" : ""
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300
                    ${isScrolled ? "bg-blue-600" : "bg-white"}
                    ${
                      activeSection === item.name.toLowerCase()
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 opacity-0 invisible 
                             group-hover:opacity-100 group-hover:visible transition-all duration-300 transform 
                             group-hover:translate-y-0 translate-y-2">
                  <div className="pt-4">
                    <div className="bg-white rounded-lg shadow-xl p-2 border border-gray-100">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
                                   rounded-lg transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isScrolled ? "text-blue-600" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav
            className={`py-4 px-6 ${
              isScrolled ? "bg-white/95" : "bg-black/20"
            } backdrop-blur-xl border-t ${
              isScrolled ? "border-blue-200" : "border-white/10"
            }`}
          >
            {menuItems.map((item) => (
              <div key={item.name} className="mb-4">
                <Link
                  href={item.href}
                  className={`block text-lg font-medium mb-2 ${
                    isScrolled
                      ? activeSection === item.name.toLowerCase()
                        ? "text-blue-800"
                        : "text-blue-600 hover:text-blue-800"
                      : "text-white/90 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                <div className="pl-4 space-y-2">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className={`block text-sm ${
                        isScrolled
                          ? "text-gray-600 hover:text-blue-600"
                          : "text-white/70 hover:text-white"
                      } transition-colors duration-200`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
