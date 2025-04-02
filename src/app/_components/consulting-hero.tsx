"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { sendGTMEvent } from '@next/third-parties/google'

export default function ConsultingHero() {
    return (
        <section className="py-20 text-center lg:text-left">
            <motion.div
                className="mx-auto mb-16 max-w-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Data Engineering <span className="text-blue-600 dark:text-yellow-500">Consulting Services</span>
                </h1>
                <div className="mb-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400"></div>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Expert guidance in designing and implementing scalable data pipelines, data architecture, and marketing
                    technology solutions that drive business value.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                            size="lg"
                            className="gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900"
                            asChild
                        >
                            <Link onClick={() => sendGTMEvent({ event: 'consultation_click', value: 'schedule_consultation' })} href="https://calendly.com/evandanrosa/30min" target="_blank" rel="noopener noreferrer">
                                Schedule a Consultation <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-blue-600/20 text-blue-600 hover:bg-blue-50/50 hover:text-blue-700 dark:border-yellow-500/20 dark:text-yellow-500 dark:hover:bg-yellow-500/10 dark:hover:text-yellow-400"
                            onClick={() => {
                                const element = document.getElementById('approach')
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' })
                                }
                                sendGTMEvent({ event: 'consultation_click', value: 'view_approach' })
                            }}
                        >
                            View My Approach
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/5 z-10 dark:from-yellow-500/20 dark:to-yellow-500/5"></div>
                    <Image src="/assets/consultant.png" alt="Data Engineering Visualization" width={1200} height={800} />
                </motion.div>
            </div>

            <motion.div
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800/90 dark:to-slate-900/90 dark:backdrop-blur-md border border-blue-100/50 dark:border-slate-700/50 shadow-lg dark:shadow-slate-900/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 dark:text-yellow-500">15+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 dark:text-yellow-500">20+</p>
                    <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 dark:text-yellow-500">10+</p>
                    <p className="text-sm text-muted-foreground">Petabytes of Data</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 dark:text-yellow-500">100%</p>
                    <p className="text-sm text-muted-foreground">Client Focus</p>
                </div>
            </motion.div>
        </section>
    )
}

