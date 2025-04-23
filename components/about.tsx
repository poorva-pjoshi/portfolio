"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6 md:p-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg mb-6"
              >
                A Data Enthusiast with experience delivering insights across healthcare, insurance, and technology
                sectors. Proficient in building business intelligence dashboards, analyzing large datasets, and
                optimizing operations with Python, SQL and Tableau. Proven ability to improve data accuracy and apply
                problem-solving skills to support strategic planning.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg mb-8"
              >
                Based in Boston, MA, I'm passionate about transforming complex data into actionable insights that drive
                business decisions. I'm currently pursuing my Master's in Analytics at Northeastern University while
                working as a Data Analytics Intern at Amalgam Rx.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button asChild className="gap-2">
                  <Link href="https://www.linkedin.com/in/poorva-joshi-pj/" target="_blank">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="https://github.com/poorva-pjoshi" target="_blank">
                    <Github className="h-5 w-5" />
                    GitHub
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
