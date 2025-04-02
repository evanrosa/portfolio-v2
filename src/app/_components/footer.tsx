"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggler"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { sendGTMEvent } from "@next/third-parties/google"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubscribe = async () => {
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setEmail("")
        toast.success("Successfully subscribed to newsletter!")
        sendGTMEvent({ event: 'button_click_footer', value: 'subscribe' })
      } else {
        setStatus("error")
        toast.error(data.message || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      toast.error("An error occurred. Please try again.")
    }
  }


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    sendGTMEvent({ event: 'button_click_footer', value: sectionId })
  }

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
    <footer className="w-full border-t bg-background dark:bg-slate-900 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
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
              <h3 className="text-xl font-bold bg-gradient-to-r bg-blue-600 dark:bg-yellow-500  bg-clip-text text-transparent">&#60;evan.rosa/&#62;</h3>
            </div>
            <p className="text-muted-foreground dark:text-slate-300 mb-4">
              Showcasing my journey as a data engineer and creative problem solver. This portfolio represents my
              passion for building clean, scalable, and maintainable data pipelines.
            </p>
            <div className="flex space-x-3">
              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="https://github.com/evanrosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  onClick={() => sendGTMEvent({ event: 'button_click_footer', value: 'github' })}
                >
                  <Button size="icon" variant="outline" className="rounded-full h-9 w-9 dark:border-slate-700 dark:hover:bg-slate-800">
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
                  onClick={() => sendGTMEvent({ event: 'button_click_footer', value: 'linkedin' })}
                >
                  <Button size="icon" variant="outline" className="rounded-full h-9 w-9 dark:border-slate-700 dark:hover:bg-slate-800">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link href="mailto:evandanrosa@gmail.com" aria-label="Email Me" onClick={() => sendGTMEvent({ event: 'button_click_footer', value: 'email' })}>
                  <Button size="icon" variant="outline" className="rounded-full h-9 w-9 dark:border-slate-700 dark:hover:bg-slate-800">
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
            <h3 className="text-lg font-semibold mb-4 dark:text-slate-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  onClick={() => sendGTMEvent({ event: 'button_click_footer', value: 'Home' })}
                  href="/"
                  className="text-muted-foreground hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-muted-foreground hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="text-muted-foreground hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  onClick={(e) => handleNavClick(e, "blog")}
                  className="text-muted-foreground hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-muted-foreground hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="md:col-span-4 lg:col-span-3" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 dark:text-slate-100">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground dark:text-slate-300">Data Engineering</span>
              </li>
              <li>
                <span className="text-muted-foreground dark:text-slate-300">Data Science</span>
              </li>
              <li>
                <span className="text-muted-foreground dark:text-slate-300">Data Visualization</span>
              </li>
              <li>
                <span className="text-muted-foreground dark:text-slate-300">Data Analysis and Analytics</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="md:col-span-12 lg:col-span-3" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 dark:text-slate-100">Stay Updated</h3>
            <p className="text-muted-foreground dark:text-slate-300 mb-4">
              Subscribe to my newsletter for the latest updates on projects, blog posts, and more.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={handleSubscribe}
                disabled={status === "loading"}
                className="rounded-l-none bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white"
                aria-label="Subscribe"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section with Copyright */}
        <motion.div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center dark:border-slate-800"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground dark:text-slate-400 mb-4 md:mb-0">© {currentYear} evro.dev. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground dark:text-slate-400">
            <Link href="https://www.evro.dev/sitemap.xml" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

