"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

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
        }, 1000) // Wait after erasing before showing next title

        return () => clearTimeout(nextTitleTimer)
      }, 4000) // How long to display the full text

      return () => clearTimeout(erasingTimer)
    }, 1500) // Typing duration

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
              From Data to Insights. From Insights to Action
            </p>
            <Button className="group" size="lg">
              <span>View Resume</span>
              <FileText className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Poorva Joshi"
                fill
                className="object-cover"
                priority
              />
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
