"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./Card"

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{edu.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-1">{edu.degree}</h4>
                  {edu.gpa && <p className="text-sm text-muted-foreground mb-3">{edu.gpa}</p>}
                  <div className="flex items-center text-sm text-muted-foreground">
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
                      className="mr-2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
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
