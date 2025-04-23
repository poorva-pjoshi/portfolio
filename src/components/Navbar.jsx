"use client"

import { useState, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import { ModeToggle } from "./ModeToggle"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <HashLink to="#home" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
            Poorva Joshi
          </HashLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                to={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </HashLink>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <button className="ml-2 p-2 rounded-md hover:bg-secondary/50" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden py-4 px-2 space-y-3">
            {navItems.map((item) => (
              <HashLink
                key={item.name}
                to={item.href}
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </HashLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
