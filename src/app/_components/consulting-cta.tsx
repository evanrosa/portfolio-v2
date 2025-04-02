"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { sendGTMEvent } from "@next/third-parties/google"

export default function ContactCTA() {
    return (
        <section className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Card className="border-blue-100/50 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg dark:border-slate-700/50 dark:from-slate-800/90 dark:to-slate-900/90 dark:backdrop-blur-md dark:shadow-slate-900/20">
                    <CardHeader className="space-y-4">
                        <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Ready to Transform Your <span className="text-blue-600 dark:text-yellow-500">Data Infrastructure</span>?
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                            Let's discuss how my data engineering expertise can help your organization
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            className="flex flex-col items-center text-center p-6 bg-white/80 rounded-lg border border-blue-100/50 shadow-sm dark:bg-slate-900/80 dark:border-slate-700/50 dark:backdrop-blur-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-yellow-500/20">
                                <Mail className="h-8 w-8 text-blue-600 dark:text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email Inquiry</h3>
                            <p className="text-muted-foreground mb-4">
                                Send a detailed description of your project needs
                            </p>
                            <Button
                                asChild
                                variant="secondary"
                                size="sm"
                                className="mt-auto bg-white text-blue-600 hover:bg-blue-50 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-600"
                            >
                                <Link onClick={() => sendGTMEvent({ event: 'button_click_consultation', value: 'send_email' })} href="mailto:evan@evandanrosa.com">
                                    Send Email
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center text-center p-6 bg-white/80 rounded-lg border border-blue-100/50 shadow-sm dark:bg-slate-900/80 dark:border-slate-700/50 dark:backdrop-blur-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-yellow-500/20">
                                <Calendar className="h-8 w-8 text-blue-600 dark:text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Schedule a Call</h3>
                            <p className="text-muted-foreground mb-4">
                                Book a 30-minute consultation to discuss your project
                            </p>
                            <Button
                                asChild
                                variant="secondary"
                                size="sm"
                                className="mt-auto bg-white text-blue-600 hover:bg-blue-50 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-600"
                            >
                                <Link onClick={() => sendGTMEvent({ event: 'button_click_consultation', value: 'schedule_call' })} href="https://calendly.com/evandanrosa/30min" target="_blank" rel="noopener noreferrer">
                                    Book Now
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="flex flex-col items-center text-center p-6 bg-white/80 rounded-lg border border-blue-100/50 shadow-sm dark:bg-slate-900/80 dark:border-slate-700/50 dark:backdrop-blur-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-yellow-500/20">
                                <MessageSquare className="h-8 w-8 text-blue-600 dark:text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quick Chat</h3>
                            <p className="text-muted-foreground mb-4">
                                Have a quick question? Let's chat about it
                            </p>
                            <Button
                                asChild
                                variant="secondary"
                                size="sm"
                                className="mt-auto bg-white text-blue-600 hover:bg-blue-50 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-600"
                            >
                                <Link onClick={() => sendGTMEvent({ event: 'button_click_consultation', value: 'linkedin' })} href="https://www.linkedin.com/in/evan-rosa/" target="_blank" rel="noopener noreferrer">
                                    Start Chat on LinkedIn
                                </Link>
                            </Button>
                        </motion.div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <p className="text-center text-muted-foreground max-w-2xl">
                            I typically respond within 24 hours. For urgent inquiries, please mention "URGENT" in your message
                            subject.
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </section>
    )
}

