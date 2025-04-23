"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Child Welfare Data Analytics Initiative",
    description:
      "Created engaging Tableau dashboards for KARA's book \"America's Children in 100 Charts\", using data visualization techniques to research large datasets from 2015-2022 including the impact of COVID-19 on child abuse reporting.",
    period: "Apr 2024 – Jun 2024",
    tags: ["Tableau", "Data Visualization", "Research"],
    links: {
      demo: "https://public.tableau.com",
      github: null,
    },
  },
  {
    title: "NYC Tree Health Forecasting",
    description:
      "Crafted PowerBI and Tableau dashboards to analyze urban tree data, using big data technologies like Hadoop to perform data loading and data cleaning. Engineered predictive models using PySpark and Python with Decision Tree and Random Forest algorithms.",
    period: "Apr 2024 – May 2024",
    tags: ["PowerBI", "Hadoop", "PySpark", "Machine Learning"],
    links: {
      demo: null,
      github: "https://github.com/poorva-pjoshi",
    },
  },
  {
    title: "Stay or Stray, Data Science Hub Hackathon",
    description:
      "Led a team of 3 members, and secured a Bronze medal among 54 competing teams in a 2-week-long Datathon. Attained an F1-score of 0.8653 by leveraging advanced machine learning techniques.",
    period: "March 2024 – Apr 2024",
    tags: ["Machine Learning", "Team Leadership", "Hackathon"],
    links: {
      demo: "https://example.com/results",
      github: null,
    },
  },
  {
    title: "Healthcare Data Analysis",
    description:
      "Analyzed patient data to identify trends in treatment outcomes and optimize resource allocation. Created interactive dashboards to visualize key metrics for stakeholders.",
    period: "Jan 2024 – Feb 2024",
    tags: ["Python", "SQL", "Data Analysis", "Healthcare"],
    links: {
      demo: null,
      github: "https://github.com/poorva-pjoshi",
    },
  },
  {
    title: "Insurance Claims Prediction",
    description:
      "Developed a machine learning model to predict insurance claim outcomes based on historical data. Improved prediction accuracy by 18% compared to previous models.",
    period: "Nov 2023 – Dec 2023",
    tags: ["Machine Learning", "Python", "Scikit-learn"],
    links: {
      demo: null,
      github: "https://github.com/poorva-pjoshi",
    },
  },
  {
    title: "Business Intelligence Dashboard",
    description:
      "Created comprehensive BI dashboards for tracking key performance indicators across multiple business units. Implemented automated data refresh processes to ensure up-to-date insights.",
    period: "Sept 2023 – Oct 2023",
    tags: ["PowerBI", "SQL", "Data Visualization"],
    links: {
      demo: "https://example.com/dashboard",
      github: null,
    },
  },
]

export default function Projects() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-0">
                  {project.links.github && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.links.github} target="_blank">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button asChild size="sm">
                      <Link href={project.links.demo} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
