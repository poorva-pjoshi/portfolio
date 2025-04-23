"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "./Button"

export default function Hero() {
  const titles = ["Data Analyst", "Business Intelligence Engineer", "Business Analyst", "Data Scientist"]
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false)

      // After typing is done, wait before starting to erase
      const erasingTimer = setTimeout(() => {
        setIsTyping(true)

        // After erasing, move to next title
        const nextTitleTimer = setTimeout(() => {
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        }, 2000) // Wait after erasing before showing next title

        return () => clearTimeout(nextTitleTimer)
      }, 5000) // How long to display the full text

      return () => clearTimeout(erasingTimer)
    }, 12000) // Typing duration

    return () => clearTimeout(typingTimer)
  }, [currentTitleIndex, titles.length])

  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <p className="text-primary font-medium mb-2">Hi there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Poorva Joshi</h1>
            <div className="h-16 md:h-20 flex items-center">
              <div className="typewriter-container">
                <motion.h2
                  key={currentTitleIndex}
                  initial={{ width: 0 }}
                  animate={{ width: isTyping ? "0%" : "100%" }}
                  transition={{
                    duration: isTyping ? 1 : 3.5,
                    ease: "easeInOut",
                  }}
                  className="text-xl md:text-2xl lg:text-3xl text-primary font-medium overflow-hidden whitespace-nowrap border-r-2 border-primary"
                >
                  {titles[currentTitleIndex]}
                </motion.h2>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mt-6 mb-8">
              A Data Enthusiast with experience delivering insights across healthcare, insurance, and technology
              sectors. Proficient in building business intelligence dashboards, analyzing large datasets, and optimizing
              operations.
            </p>
            <Button className="group flex items-center gap-2" size="lg">
              <span>View Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img src="https://via.placeholder.com/320" alt="Poorva Joshi" className="object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl" />
    </div>
  )
}
