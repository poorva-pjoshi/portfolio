"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educations = [
  {
    institution: "Northeastern University",
    location: "Boston, MA",
    degree: "Master of Professional Studies in Analytics",
    gpa: "GPA: 3.9/4.0",
    period: "Sept 2023 – Jun 2025",
  },
  {
    institution: "Visveswaraya Technological University",
    location: "India",
    degree: "Bachelor of Engineering in Electronics and Communication",
    gpa: "",
    period: "Aug 2016 – Aug 2020",
  },
]

export default function Education() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-t-4 border-t-primary">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{edu.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-1">{edu.degree}</h4>
                  {edu.gpa && <p className="text-sm text-muted-foreground mb-3">{edu.gpa}</p>}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
