"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/app/_components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, Phone, BookOpen } from "lucide-react"
import Link from "next/link"
import { sendGTMEvent } from "@next/third-parties/google"

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
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 md:text-4xl">
                            Let's Connect
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground dark:text-slate-300">
                            Interested in working together? I'm always open to discussing new projects, creative ideas or
                            opportunities to be part of your vision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <ContactForm />
                        </div>

                        <div className="space-y-6">
                            <Card className="overflow-hidden dark:bg-slate-900 dark:border-slate-800">
                                <CardContent className="p-6">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2 dark:text-slate-100">Get In Touch</h3>
                                        <p className="text-muted-foreground dark:text-slate-300">
                                            Feel free to reach out for collaborations or just a friendly hello
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center mb-3">
                                            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                                            <Link onClick={() => sendGTMEvent({ event: 'button_click_contact_section', value: 'email' })} href="mailto:evandanrosa@gmail.com" className="text-muted-foreground hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">evandanrosa@gmail.com</Link>
                                        </div>

                                        <div className="flex items-center">
                                            <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                                            <Link onClick={() => sendGTMEvent({ event: 'button_click_contact_section', value: 'phone' })} href="tel:301-300-7602" className="text-muted-foreground hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">301-300-7602</Link>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-3 dark:text-slate-100">Connect with me</h4>
                                        <div className="flex space-x-4">
                                            <Link
                                                onClick={() => sendGTMEvent({ event: 'button_click_contact_section', value: 'github' })}
                                                href="https://github.com/evanrosa"
                                                target="_blank"
                                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <Github className="h-5 w-5 dark:text-slate-300" />
                                            </Link>

                                            <Link
                                                onClick={() => sendGTMEvent({ event: 'button_click_contact_section', value: 'linkedin' })}
                                                href="https://www.linkedin.com/in/evan-rosa/"
                                                target="_blank"
                                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin className="h-5 w-5 dark:text-slate-300" />
                                            </Link>

                                            <Link
                                                onClick={() => sendGTMEvent({ event: 'button_click_contact_section', value: 'medium' })}
                                                href="https://medium.com/@evan-rosa"
                                                target="_blank"
                                                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                                                aria-label="Medium Blog"
                                            >
                                                <BookOpen className="h-5 w-5 dark:text-slate-300" />
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="dark:bg-slate-900 dark:border-slate-800">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 dark:text-slate-100">Currently</h3>
                                    <div className="space-y-2">
                                        <p className="text-muted-foreground dark:text-slate-300">
                                            <span className="inline-block w-24 font-medium dark:text-slate-200">Location:</span>
                                            Washington, DC Metro Area
                                        </p>
                                        <p className="text-muted-foreground dark:text-slate-300">
                                            <span className="inline-block w-24 font-medium dark:text-slate-200">Availability:</span>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                                                Open to Work
                                            </span>
                                        </p>
                                        <p className="text-muted-foreground dark:text-slate-300">
                                            <span className="inline-block w-24 font-medium dark:text-slate-200">Looking for:</span>
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

