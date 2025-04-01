"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/app/_components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ExternalLink, Github, Linkedin, Twitter, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PortfolioContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                            Let's Connect
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Interested in working together? I'm always open to discussing new projects, creative ideas or
                            opportunities to be part of your vision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <ContactForm />
                        </div>

                        <div className="space-y-6">
                            <Card className="overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
                                        <p className="text-muted-foreground">
                                            Feel free to reach out for collaborations or just a friendly hello
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <Mail className="h-5 w-5 text-blue-600 mr-3" />
                                            <Link href="mailto:evandanrosa@gmail.com" className="text-muted-foreground hover:text-blue-600 transition-colors">evandanrosa@gmail.com</Link>
                                        </div>

                                        <div className="flex items-center">
                                            <Phone className="h-5 w-5 text-blue-600 mr-3" />
                                            <Link href="tel:301-300-7602" className="text-muted-foreground hover:text-blue-600 transition-colors">301-300-7602</Link>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-3">Connect with me</h4>
                                        <div className="flex space-x-4">
                                            <Link
                                                href="https://github.com/evanrosa"
                                                target="_blank"
                                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <Github className="h-5 w-5" />
                                            </Link>

                                            <Link
                                                href="https://www.linkedin.com/in/evan-rosa/"
                                                target="_blank"
                                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin className="h-5 w-5" />
                                            </Link>


                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">Currently</h3>
                                    <div className="space-y-2">
                                        <p className="text-muted-foreground">
                                            <span className="inline-block w-24 font-medium">Location:</span>
                                            Washington, DC Metro Area
                                        </p>
                                        <p className="text-muted-foreground">
                                            <span className="inline-block w-24 font-medium">Availability:</span>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                Open to Work
                                            </span>
                                        </p>
                                        <p className="text-muted-foreground">
                                            <span className="inline-block w-24 font-medium">Looking for:</span>
                                            Full-time opportunities
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

