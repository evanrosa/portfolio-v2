"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggler"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About Section */}
          <motion.div className="md:col-span-5 lg:col-span-4" variants={itemVariants}>
            <div className="flex items-center mb-4">
              <div className="mr-2 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="text-xl font-bold">Portfolio</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Showcasing my journey as a developer, designer, and creative problem solver. This portfolio represents my
              passion for building beautiful, functional, and accessible web experiences.
            </p>
            <div className="flex space-x-3">
              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="https://github.com/evanrosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Button size="icon" variant="outline" className="rounded-full h-9 w-9">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="https://www.linkedin.com/in/evan-rosa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Button size="icon" variant="outline" className="rounded-full h-9 w-9">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="mailto:evandanrosa@gmail.com" aria-label="Email Me">
                  <Button size="icon" variant="outline" className="rounded-full h-9 w-9">
                    <Mail className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="md:col-span-3 lg:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="md:col-span-4 lg:col-span-3" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Data Engineering</span>
              </li>
              <li>
                <span className="text-muted-foreground">Data Science</span>
              </li>
              <li>
                <span className="text-muted-foreground">Data Visualization</span>
              </li>
              <li>
                <span className="text-muted-foreground">Data Analysis and Analytics</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="md:col-span-12 lg:col-span-3" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to my newsletter for the latest updates on projects, blog posts, and more.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Email address"
              />
              <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700" aria-label="Subscribe">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section with Copyright */}
        <motion.div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© {currentYear} evro.dev. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/sitemap" className="hover:text-blue-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

