"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ChevronRight, Database, GitBranch, BarChart2, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { sendGTMEvent } from "@next/third-parties/google"

export default function ConsultancySection() {
    const containerRef = useRef<HTMLElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const servicesData = [
        {
            title: "Data Pipeline Architecture",
            icon: <GitBranch className="h-5 w-5" />,
            description:
                "Custom-designed batch and streaming data pipelines that scale with your business needs and optimize for cost efficiency.",
            technologies: ["Apache Airflow", "Apache Kafka", "Apache Spark", "SQLMesh", "Apache Flink"],
        },
        {
            title: "Data Infrastructure Optimization",
            icon: <Layers className="h-5 w-5" />,
            description:
                "Refactoring and optimizing existing data workflows to reduce costs, improve reliability, and enhance performance.",
            technologies: ["Python", "SQL", "Apache Iceberg", "Nessie", "Cloud Optimization"],
        },
        {
            title: "Analytics & Visualization",
            icon: <BarChart2 className="h-5 w-5" />,
            description:
                "Implementation of comprehensive analytics solutions and interactive dashboards to unlock actionable insights.",
            technologies: ["Apache Superset", "Looker", "Google Analytics", "Google Tag Manager"],
        },
    ]

    return (
        <section
            ref={containerRef}
            id="consultancy"
            className="relative w-full overflow-hidden bg-gradient-to-b from-white to-blue-50 px-4 py-20 sm:px-6 lg:px-8 dark:from-gray-950 dark:to-gray-900"
        >
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <svg className="absolute right-0 top-1/4 h-40 w-40 sm:h-64 sm:w-64 rotate-90 text-blue-500/5" viewBox="0 0 200 200">
                    <path
                        fill="currentColor"
                        d="M30.5,-51.2C39.2,-46.9,45.7,-37.7,51.1,-27.9C56.6,-18.1,61.1,-7.5,58.6,1.4C56.1,10.4,46.6,17.7,39.6,26.2C32.5,34.7,27.9,44.3,20.7,49.8C13.5,55.3,3.8,56.8,-3.9,52.5C-11.7,48.2,-17.4,38.1,-22.5,30.7C-27.6,23.3,-32.1,18.5,-39.2,11.5C-46.3,4.4,-56,-4.8,-58.8,-16.1C-61.5,-27.4,-57.2,-40.7,-48.2,-45.8C-39.2,-50.8,-25.5,-47.5,-14.2,-46.1C-3,-44.7,5.9,-45.2,14.5,-46.1C23,-47,31.1,-48.4,30.5,-51.2Z"
                        transform="translate(100 100)"
                    />
                </svg>
                <svg className="absolute left-0 top-3/4 h-40 w-40 sm:h-64 sm:w-64 text-cyan-500/5" viewBox="0 0 200 200">
                    <path
                        fill="currentColor"
                        d="M54.9,-76.7C71.4,-69.7,85.4,-54.7,92.1,-37.4C98.9,-20.1,98.4,-0.3,93.1,17.3C87.8,34.8,77.8,50.3,64.4,61.4C50.9,72.5,34.1,79.3,16.8,80.9C-0.5,82.5,-18.3,78.9,-33.8,71.2C-49.3,63.4,-62.5,51.5,-73.8,36.3C-85.1,21.1,-94.6,2.7,-90.3,-12.7C-86.1,-28.1,-68.2,-40.6,-52.2,-47.7C-36.1,-54.9,-22,-56.7,-7.7,-62.5C6.7,-68.4,21.3,-78.2,38.5,-83.7C55.7,-89.1,75.6,-90.1,54.9,-76.7Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>

            <div className="mx-auto max-w-7xl">
                <motion.div
                    className="mx-auto mb-16 max-w-2xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Data Engineering <span className="text-blue-600 dark:text-yellow-500">Consultancy</span>
                    </h2>
                    <div className="mb-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400"></div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        Turn your complex data challenges into strategic business advantages
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8"
                >
                    {/* Data Solutions and CTA - 5 columns */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
                        <Card className="border-blue-100/50 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg dark:border-slate-700/50 dark:from-slate-900/80 dark:to-slate-900/80 dark:backdrop-blur-md dark:shadow-slate-900/20">
                            <CardContent className="p-6">
                                <div className="mb-4 flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-yellow-500/20 dark:text-yellow-500">
                                        <Database className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-bold">Data Solutions</h3>
                                </div>

                                <p className="mb-4 text-muted-foreground">
                                    With nearly 15 years of data engineering experience, I help businesses build scalable, efficient data
                                    pipelines and infrastructure that deliver real value and solve complex data challenges.
                                </p>

                                <div>
                                    <h4 className="mb-2 font-medium">Core Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "Python",
                                            "SQL",
                                            "Apache Airflow",
                                            "Apache Kafka",
                                            "Apache Spark",
                                            "SQLMesh",
                                            "Apache Flink",
                                            "Apache Superset",
                                            "Looker",
                                            "Apache Iceberg",
                                            "Nessie",
                                            "Google Analytics",
                                            "Google Tag Manager",
                                        ].map((tech, index) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                                className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* CTA Card */}
                        <Card className="border-blue-100/50 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg dark:border-slate-700/50 dark:from-slate-800/90 dark:to-slate-900/90 dark:backdrop-blur-md dark:shadow-slate-900/20">
                            <CardContent className="p-6">
                                <div className="flex flex-col">
                                    <div className="flex items-center">
                                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-yellow-500/20 dark:text-yellow-500">
                                            <ChevronRight className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ready to transform your data infrastructure?</h3>
                                    </div>
                                    <p className="mt-2 mb-6 text-muted-foreground">
                                        Let's discuss how my expertise can help your organization build scalable, efficient solutions.
                                    </p>
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto group bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-600"
                                        asChild
                                    >
                                        <Link
                                            href="https://calendly.com/evandanrosa/30min"
                                            onClick={() => sendGTMEvent({ event: "button_click_consultancy_section", value: "get_in_touch" })}
                                        >
                                            Get in Touch
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Services - 7 columns */}
                    <motion.div variants={itemVariants} className="lg:col-span-7">
                        <div className="space-y-8">
                            {servicesData.map((service, index) => (
                                <Card
                                    key={index}
                                    className="border-blue-100/50 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg dark:border-slate-700/50 dark:from-slate-900/80 dark:to-slate-900/80 dark:backdrop-blur-md dark:shadow-slate-900/20"
                                >
                                    <CardContent className="p-6">
                                        <div className="mb-4 flex items-center">
                                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-yellow-500/20 dark:text-yellow-500">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                        </div>
                                        <p className="mb-4 text-muted-foreground">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    variant="secondary"
                                                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

