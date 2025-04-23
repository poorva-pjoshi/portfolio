"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, BarChart4, Database, Wrench, BrainCircuit } from "lucide-react"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["Python", "R", "SQL", "Java", "C#", "JSON"],
  },
  {
    name: "Data Visualization",
    icon: <BarChart4 className="h-5 w-5" />,
    skills: ["Tableau", "PowerBI", "LookerStudio", "Python (Matplotlib, Seaborn)"],
  },
  {
    name: "Frameworks",
    icon: <Database className="h-5 w-5" />,
    skills: ["NumPy", "Pandas", "Scikit-learn", "Hadoop", "PySpark"],
  },
  {
    name: "Software Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Snowflake", "Git", "Microsoft Excel (Pivot Table, VLOOKUP)", "JIRA", "Confluence", "Google Analytics"],
  },
  {
    name: "Other Skills",
    icon: <BrainCircuit className="h-5 w-5" />,
    skills: [
      "Hypothesis Testing",
      "Machine Learning",
      "Artificial Intelligence",
      "SQL Server",
      "VS Code",
      "Agile",
      "Scrum",
      "Communication Skills",
    ],
  },
]

export default function Skills() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                    <h3 className="text-lg font-medium">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-background">
                        {skill}
                      </Badge>
                    ))}
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
