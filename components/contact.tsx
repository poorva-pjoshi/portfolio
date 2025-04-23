"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "joshi.po@northeastern.edu",
    href: "mailto:joshi.po@northeastern.edu",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+1 (617) 708-7750",
    href: "tel:+16177087750",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Boston, MA, USA",
    href: null,
  },
]

const socialLinks = [
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/poorva-joshi-pj/",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/poorva-pjoshi",
  },
]

export default function Contact() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">{item.icon}</div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <Link href={item.href} className="font-medium hover:text-primary transition-colors">
                            {item.value}
                          </Link>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((link, index) => (
                      <Button key={index} variant="outline" size="icon" asChild className="rounded-full">
                        <Link href={link.href} target="_blank" aria-label={link.label}>
                          {link.icon}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
