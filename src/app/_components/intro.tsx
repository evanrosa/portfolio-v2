"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDownCircle, Database, ExternalLink, Github, Linkedin, Mail, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DataEngineerVisual from "./svg/data-eng-viz"
import { sendGTMEvent } from '@next/third-parties/google'

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
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
            {/* Background elements - data-themed */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />

                {/* Data flow lines - subtle background element */}
                <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.1" />
                    <path d="M0,20 L100,80" fill="none" stroke="currentColor" strokeWidth="0.1" />
                    <path d="M0,80 L100,20" fill="none" stroke="currentColor" strokeWidth="0.1" />
                    <path d="M20,0 L80,100" fill="none" stroke="currentColor" strokeWidth="0.1" />
                    <path d="M80,0 L20,100" fill="none" stroke="currentColor" strokeWidth="0.1" />
                </svg>
            </div>

            <div className="container mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-12 md:gap-8">
                    {/* Text content - takes 7 columns on desktop */}
                    <motion.div
                        className="flex flex-col justify-center md:col-span-7"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center rounded-full border border-border/40 bg-background/50 px-3 py-1 text-sm backdrop-blur-sm dark:bg-slate-900/50 dark:border-slate-800">
                            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                            Open to new data engineering opportunities
                        </div>

                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-100 md:text-6xl lg:text-7xl">
                            <span className="block">Evan Rosa</span>
                            <span className="mt-1 block bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400 bg-clip-text text-transparent">
                                Data Engineer
                            </span>
                        </h1>

                        <p className="mb-8 max-w-xl text-lg text-muted-foreground dark:text-slate-300">
                            I build robust data pipelines and scalable data infrastructure that transform raw data into valuable
                            insights. With expertise in distributed systems, ETL processes, and cloud platforms, I help organizations
                            harness the full potential of their data.
                        </p>

                        <div className="mb-8 flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="rounded-full bg-blue-600 px-6 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900"
                                onClick={handleProjectsClick}
                            >
                                View Projects
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-full border-blue-600/20 px-6 text-blue-600 hover:bg-blue-50/50 hover:text-blue-700 dark:border-yellow-500/20 dark:text-yellow-500 dark:hover:bg-yellow-500/10 dark:hover:text-yellow-400"
                                asChild
                            >
                                <Link
                                    href="https://drive.google.com/file/d/1eVJJDfaARY-l-4cmbPSjqzHHlEwo-pSb/view?usp=sharing" target="_blank" onClick={() => sendGTMEvent({ event: 'button_click_intro_section', value: 'resume' })}>Download Resume</Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-6">
                            <Button
                                variant="outline"
                                size="lg"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/50 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-yellow-500 dark:hover:text-yellow-500"
                                aria-label="GitHub"
                                asChild
                            >
                                <Link
                                    href="https://github.com/evanrosa"
                                    target="_blank" onClick={() => sendGTMEvent({ event: 'button_click_intro_section', value: 'github' })}>
                                    <Github className="h-5 w-5" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/50 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-yellow-500 dark:hover:text-yellow-500"
                                aria-label="LinkedIn"
                                asChild
                            >
                                <Link
                                    href="https://www.linkedin.com/in/evan-rosa/"
                                    target="_blank" onClick={() => sendGTMEvent({ event: 'button_click_intro_section', value: 'linkedin' })}>
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/50 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-yellow-500 dark:hover:text-yellow-500"
                                aria-label="Email"
                                asChild
                            >
                                <Link
                                    href="mailto:evandanrosa@gmail.com"
                                    target="_blank" onClick={() => sendGTMEvent({ event: 'button_click_intro_section', value: 'email' })}>
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual section - takes 5 columns on desktop */}
                    <motion.div
                        className="relative flex items-center justify-center md:col-span-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Data-themed decorative elements */}
                            <div className="absolute -left-6 -top-6 flex h-16 w-16 items-center justify-center rounded-lg border border-blue-600/20 bg-background/80 dark:border-yellow-500/20 dark:bg-slate-900/80">
                                <Database className="h-8 w-8 text-blue-600/60 dark:text-yellow-500/60" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 flex h-16 w-16 items-center justify-center rounded-lg border border-cyan-500/20 bg-background/80 dark:border-yellow-500/20 dark:bg-slate-900/80">
                                <Server className="h-8 w-8 text-cyan-500/60 dark:text-yellow-500/60" />
                            </div>

                            {/* Image container with data visualization overlay */}
                            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-2xl border border-border/40 bg-background/50 p-2 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50">
                                <DataEngineerVisual />

                                {/* Data engineering skill badges */}
                                <motion.div
                                    className="absolute right-5 top-10 rounded-full border border-border/40 bg-background/80 px-4 py-2 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <span className="text-sm font-medium dark:text-slate-200">Python & SQL</span>
                                </motion.div>

                                <motion.div
                                    className="absolute right-5 bottom-25 rounded-full border border-border/40 bg-background/80 px-4 py-2 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <span className="text-sm font-medium dark:text-slate-200">Apache Kafka & Flink</span>
                                </motion.div>

                                <motion.div
                                    className="absolute left-5 top-30 rounded-full border border-border/40 bg-background/80 px-4 py-2 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    <span className="text-sm font-medium dark:text-slate-200">Apache Spark & Airflow</span>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-5 left-1/4 rounded-full border border-border/40 bg-background/80 px-4 py-2 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                >
                                    <span className="text-sm font-medium dark:text-slate-200">Big Query & GCS</span>
                                </motion.div>
                            </div>

                            {/* Data flow animation overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                                <svg className="h-full w-full opacity-30" viewBox="0 0 400 400">
                                    <motion.path
                                        d="M0,200 Q100,100 200,200 Q300,300 400,200"
                                        fill="none"
                                        stroke="rgba(6, 182, 212, 0.5)"
                                        strokeWidth="1"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{
                                            duration: 2,
                                            delay: 1.2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "loop",
                                            repeatDelay: 1,
                                        }}
                                    />
                                    <motion.path
                                        d="M0,150 Q100,250 200,150 Q300,50 400,150"
                                        fill="none"
                                        stroke="rgba(37, 99, 235, 0.5)"
                                        strokeWidth="1"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{
                                            duration: 2,
                                            delay: 1.5,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "loop",
                                            repeatDelay: 1,
                                        }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
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

