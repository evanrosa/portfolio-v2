"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDownCircle, Database, ExternalLink, Github, Linkedin, Mail, Server, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataEngineerVisual from "./svg/data-eng-viz"
import { sendGTMEvent } from '@next/third-parties/google'
import { Badge } from "@/components/ui/badge"

export default function DataEngineerIntro() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleProjectsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const element = document.getElementById('projects')
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        sendGTMEvent({ event: 'button_click_intro_section', value: 'projects' })
    }

    if (!mounted) return null

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/3 h-[500px] w-[500px] md:h-[600px] md:w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
                <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.1" />
                    <path d="M0,20 L100,80" fill="none" stroke="currentColor" strokeWidth="0.1" />
                    <path d="M0,80 L100,20" fill="none" stroke="currentColor" strokeWidth="0.1" />
                    <path d="M20,0 L80,100" fill="none" stroke="currentColor" strokeWidth="0.1" />
                    <path d="M80,0 L20,100" fill="none" stroke="currentColor" strokeWidth="0.1" />
                </svg>
            </div>

            <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
                    {/* Text content */}
                    <motion.div
                        className="flex flex-col justify-center md:col-span-7"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-4 inline-flex items-center rounded-full border border-border/40 bg-background/50 px-3 py-1 text-sm backdrop-blur-sm dark:bg-slate-900/50 dark:border-slate-800">
                            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                            Open to new data engineering opportunities
                        </div>

                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="block">Evan Rosa</span>
                            <span className="mt-1 block bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400 bg-clip-text text-transparent">
                                Data Engineer
                            </span>
                        </h1>

                        <p className="mb-6 max-w-2xl text-base sm:text-lg text-muted-foreground dark:text-slate-300">
                            I build robust data pipelines and scalable data infrastructure that transform raw data into valuable
                            insights that you care about. With expertise in distributed systems, ETL processes, and cloud platforms, I help organizations
                            harness the full potential of their data to drive business growth.
                        </p>

                        <div className="mb-6 flex flex-row flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
                            <Button
                                size="lg"
                                className="flex-1 min-w-[140px] sm:flex-none sm:w-auto rounded-full bg-blue-600 px-6 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900"
                                onClick={handleProjectsClick}
                            >
                                View Projects
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="flex-1 min-w-[140px] sm:flex-none sm:w-auto rounded-full border-blue-600/20 px-6 text-blue-600 hover:bg-blue-50/50 hover:text-blue-700 dark:border-yellow-500/20 dark:text-yellow-500 dark:hover:bg-yellow-500/10 dark:hover:text-yellow-400"
                                asChild
                            >
                                <Link
                                    href="https://drive.google.com/file/d/1eVJJDfaARY-l-4cmbPSjqzHHlEwo-pSb/view?usp=sharing"
                                    target="_blank"
                                    onClick={() => sendGTMEvent({ event: 'button_click_intro_section', value: 'resume' })}
                                >
                                    Download Resume
                                </Link>
                            </Button>
                        </div>


                        <div className="flex gap-4">
                            {[{ icon: Github, href: 'https://github.com/evanrosa', label: 'github' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/evan-rosa/', label: 'linkedin' },
                            { icon: BookOpen, href: 'https://medium.com/@evan-rosa', label: 'medium' },
                            { icon: Mail, href: 'mailto:evandanrosa@gmail.com', label: 'email' },
                            ].map(({ icon: Icon, href, label }) => (
                                <Button
                                    key={label}
                                    variant="outline"
                                    size="lg"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/50 hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-yellow-500 dark:hover:text-yellow-500"
                                    asChild
                                >
                                    <Link href={href} target="_blank" onClick={() => sendGTMEvent({ event: 'button_click_intro_section', value: label })}>
                                        <Icon className="h-5 w-5" />
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual content */}
                    <motion.div
                        className="relative mx-auto flex items-center justify-center md:col-span-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative flex items-center justify-center w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-2xl border border-border/40 bg-background/50 p-2 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50">
                            <DataEngineerVisual className="w-full h-full object-contain" />
                            <div className="hidden sm:block">
                                {[
                                    { text: 'Python & SQL', className: 'top-10 right-5', delay: 0.6 },
                                    { text: 'Apache Kafka & Flink', className: 'bottom-24 right-5', delay: 0.6 },
                                    { text: 'Apache Spark & Airflow', className: 'top-24 left-5', delay: 0.8 },
                                    { text: 'Big Query & GCS', className: 'bottom-5 left-1/4', delay: 1.0 },
                                ].map(({ text, className, delay }) => (
                                    <motion.div
                                        key={text}
                                        className={`absolute ${className} rounded-full border border-border/40 bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay, duration: 0.5 }}
                                    >
                                        {text}
                                    </motion.div>
                                ))}
                            </div>




                            {/* Icons */}
                            <div className="absolute -left-5 -top-5 flex h-14 w-14 items-center justify-center rounded-lg border border-blue-600/20 bg-background/80 dark:border-yellow-500/20 dark:bg-slate-900/80">
                                <Database className="h-7 w-7 text-blue-600/60 dark:text-yellow-500/60" />
                            </div>
                            <div className="absolute -bottom-5 -right-5 flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-500/20 bg-background/80 dark:border-yellow-500/20 dark:bg-slate-900/80">
                                <Server className="h-7 w-7 text-cyan-500/60 dark:text-yellow-500/60" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <button
                        onClick={() => {
                            const element = document.getElementById('about')
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                        className="text-blue-600/70 hover:text-blue-600 transition-colors dark:text-yellow-500/70 dark:hover:text-yellow-500"
                        aria-label="Scroll to About section"
                    >
                        <ArrowDownCircle className="h-10 w-10" />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}
