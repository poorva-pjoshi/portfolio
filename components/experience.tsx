"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, Award } from "lucide-react"

const experiences = [
  {
    title: "Data Analytics Intern",
    company: "Amalgam Rx",
    location: "Delaware (Remote)",
    period: "September 2024 – April 2025",
    description: [
      "Analyzed 15M healthcare records by pre-aggregating data with PostgreSQL and validating multiple BI Dashboards using SQL Server to optimize Colorectal Cancer Screening operations.",
      "Designed dynamic dashboards in Tableau and LookerStudio to test AI chatbot interactions and track key caregiver engagement metrics for an Alzheimer's support app, improving overall user experience by 25%.",
      "Leveraged Python and A/B Testing in Excel to measure the effect of metadata changes on provider acceptance rates, reducing clinical decision support errors by 15%.",
    ],
    award: null,
  },
  {
    title: "Data Analyst, Certified SDET",
    company: "Infosys Limited",
    location: "India",
    period: "June 2021 – July 2023",
    description: [
      "Built ETL pipelines using SQL in Dbeaver to integrate insurance data from 10+ sources, supporting strategic business decisions and saving $100k in operational costs.",
      "Migrated over 50 database objects as part of a global system upgrade, achieving 95% data validation accuracy through automated data quality checks and rigorous testing.",
      "Created 10+ PowerBI dashboards to enhance decision-making by providing real-time insights for stakeholders.",
    ],
    award: "Rise Insta Award for achieving deliverables as the youngest and sole contributor in the team.",
  },
  {
    title: "Business Analyst",
    company: "IMA Management & Technology",
    location: "Australia (Remote)",
    period: "May 2020 – April 2021",
    description: [
      "Led the development of a corporate website by gathering and analyzing business requirements, collaborating with cross-functional teams, and cutting project turnaround time by 30%.",
      "Migrated client-related project reports to SharePoint, by performing data management duties, including data entry, cleaning, and retrieval tasks to improve data accuracy and consistency by 99%.",
      "Authored detailed user guides, conducted gap analyses, and identified areas for process improvements to refine future projects.",
    ],
    award: null,
  },
]

export default function Experience() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-[-0.5px] hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0" : "md:pl-12"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute top-6 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 
                              left-[-10px] md:left-auto md:right-auto 
                              ${index % 2 === 0 ? 'md:left-[-10px]' : 'md:right-[-10px]'}"
              ></div>

              <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <BriefcaseIcon className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs font-normal">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.award && (
                    <div className="mt-4 flex items-start gap-2 p-3 bg-primary/5 rounded-md">
                      <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm italic">{exp.award}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
