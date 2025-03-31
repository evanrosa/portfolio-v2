"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
    Award,
    Briefcase,
    ChevronRight,
    Database,
    FileCode,
    GraduationCap,
    Server,
    Settings,
    Terminal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutMeSection() {
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

    // Data Engineering Skills grouped by category
    const skillsData = [
        {
            category: "Data Processing",
            icon: <Settings className="h-5 w-5" />,
            skills: ["Apache Spark", "Apache Hadoop", "Apache Kafka", "Stream Processing with Flink"],
        },
        {
            category: "Data Storage",
            icon: <Database className="h-5 w-5" />,
            skills: ["Amazon Redshift", "Google BigQuery", "Postgres", "MongoDB", "Firebase"],
        },
        {
            category: "Languages & Frameworks",
            icon: <FileCode className="h-5 w-5" />,
            skills: ["Python", "SQL", "PySpark", "dbt", "Pandas"],
        },
        {
            category: "Cloud & Infrastructure",
            icon: <Server className="h-5 w-5" />,
            skills: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform (Currently learning)", "CI/CD"],
        },
        {
            category: "Orchestration & Monitoring",
            icon: <Terminal className="h-5 w-5" />,
            skills: ["Airflow", "Grafana", "DataDog"],
        },
    ]

    // Experience timeline data
    const experienceData = [
        {
            role: "Senior Data Engineer",
            company: "Data Insights Inc.",
            period: "2021 - Present",
            description:
                "Lead engineer for the company's data lake architecture. Designed and implemented cloud-native ETL pipelines processing 5TB+ daily data volumes with 99.9% reliability.",
        },
        {
            role: "Data Engineer",
            company: "TechCorp Solutions",
            period: "2018 - 2021",
            description:
                "Developed and maintained real-time data processing systems using Apache Kafka and Spark Streaming. Reduced data processing latency by 70%.",
        },
        {
            role: "Data Analyst",
            company: "Analytics First",
            period: "2016 - 2018",
            description:
                "Performed data analysis and created dashboards to drive business decisions. Transitioned to engineering by automating ETL processes that saved 20+ hours weekly.",
        },
    ]

    return (
        <section
            ref={containerRef}
            id="about"
            className="relative w-full overflow-hidden bg-gradient-to-b from-white to-blue-50 px-4 py-24 dark:from-gray-950 dark:to-gray-900"
        >
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <svg className="absolute right-0 top-1/4 h-64 w-64 rotate-90 text-blue-500/5" viewBox="0 0 200 200">
                    <path
                        fill="currentColor"
                        d="M30.5,-51.2C39.2,-46.9,45.7,-37.7,51.1,-27.9C56.6,-18.1,61.1,-7.5,58.6,1.4C56.1,10.4,46.6,17.7,39.6,26.2C32.5,34.7,27.9,44.3,20.7,49.8C13.5,55.3,3.8,56.8,-3.9,52.5C-11.7,48.2,-17.4,38.1,-22.5,30.7C-27.6,23.3,-32.1,18.5,-39.2,11.5C-46.3,4.4,-56,-4.8,-58.8,-16.1C-61.5,-27.4,-57.2,-40.7,-48.2,-45.8C-39.2,-50.8,-25.5,-47.5,-14.2,-46.1C-3,-44.7,5.9,-45.2,14.5,-46.1C23,-47,31.1,-48.4,30.5,-51.2Z"
                        transform="translate(100 100)"
                    />
                </svg>
                <svg className="absolute left-0 top-3/4 h-64 w-64 text-cyan-500/5" viewBox="0 0 200 200">
                    <path
                        fill="currentColor"
                        d="M54.9,-76.7C71.4,-69.7,85.4,-54.7,92.1,-37.4C98.9,-20.1,98.4,-0.3,93.1,17.3C87.8,34.8,77.8,50.3,64.4,61.4C50.9,72.5,34.1,79.3,16.8,80.9C-0.5,82.5,-18.3,78.9,-33.8,71.2C-49.3,63.4,-62.5,51.5,-73.8,36.3C-85.1,21.1,-94.6,2.7,-90.3,-12.7C-86.1,-28.1,-68.2,-40.6,-52.2,-47.7C-36.1,-54.9,-22,-56.7,-7.7,-62.5C6.7,-68.4,21.3,-78.2,38.5,-83.7C55.7,-89.1,75.6,-90.1,54.9,-76.7Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    className="mx-auto mb-16 max-w-2xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        About <span className="text-blue-600">Me</span>
                    </h2>
                    <div className="mb-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
                    <p className="text-lg text-muted-foreground">
                        Transforming complex data challenges into scalable, efficient solutions
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid gap-12 lg:grid-cols-12 lg:gap-8"
                >
                    {/* Image and Personal Info - 5 columns */}
                    <motion.div variants={itemVariants} className="lg:col-span-5">
                        <div className="relative mx-auto max-w-md lg:max-w-full">
                            <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-3 shadow-lg dark:border-blue-900/30 dark:bg-gray-900">
                                {/* Data-themed decorative elements */}
                                <div className="absolute left-0 top-0 h-32 w-32 rounded-br-full bg-gradient-to-br from-blue-600/10 to-cyan-500/10"></div>
                                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-full bg-gradient-to-tl from-blue-600/10 to-cyan-500/10"></div>

                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                                    <Image
                                        src="/placeholder.svg?height=800&width=640"
                                        alt="Alex Johnson - Data Engineer"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Data points overlay */}
                                <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-30" viewBox="0 0 100 100">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.circle
                                            key={i}
                                            cx={15 + (i % 7) * 12}
                                            cy={10 + Math.floor(i / 7) * 15}
                                            r="0.5"
                                            fill={i % 3 === 0 ? "#0284c7" : "#06b6d4"}
                                            initial={{ opacity: 0.2 }}
                                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: i * 0.1,
                                                repeatType: "reverse",
                                            }}
                                        />
                                    ))}
                                </svg>
                            </div>

                            <Card className="mx-auto mt-6 border-blue-100 bg-white shadow-md dark:border-blue-900/30 dark:bg-gray-900">
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-xl font-bold">My Journey</h3>
                                    <p className="mb-4 text-muted-foreground">
                                        With over 7 years in the data field, I've evolved from analyzing data to building robust data
                                        infrastructure that powers business intelligence at scale. My passion lies in creating efficient
                                        data pipelines that transform raw information into actionable insights.
                                    </p>
                                    <p className="text-muted-foreground">
                                        I thrive on solving complex data challenges and staying at the forefront of data engineering
                                        technologies and best practices.
                                    </p>

                                    <div className="mt-6 flex gap-4">
                                        <Button className="bg-blue-600 hover:bg-blue-700">Download CV</Button>
                                        <Button
                                            variant="outline"
                                            className="border-blue-600/20 text-blue-600 hover:bg-blue-50/50 hover:text-blue-700 dark:border-blue-500/30 dark:hover:bg-blue-900/20"
                                        >
                                            Contact Me
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Professional Details - 7 columns */}
                    <motion.div variants={itemVariants} className="lg:col-span-7">
                        {/* Skills */}
                        <Card className="mb-8 border-blue-100 bg-white shadow-md dark:border-blue-900/30 dark:bg-gray-900">
                            <CardContent className="p-6">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50">
                                        <ChevronRight className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Technical Expertise</h3>
                                </div>

                                <div className="space-y-6">
                                    {skillsData.map((category, index) => (
                                        <div key={index}>
                                            <div className="mb-2 flex items-center">
                                                <div className="mr-2 text-blue-600">{category.icon}</div>
                                                <h4 className="font-medium">{category.category}</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <Badge
                                                        key={skillIndex}
                                                        variant="secondary"
                                                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Experience Timeline */}
                        <Card className="mb-8 border-blue-100 bg-white shadow-md dark:border-blue-900/30 dark:bg-gray-900">
                            <CardContent className="p-6">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50">
                                        <Briefcase className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Professional Experience</h3>
                                </div>

                                <div className="relative ml-2 border-l-2 border-blue-200 pl-6 dark:border-blue-900/70">
                                    {experienceData.map((experience, index) => (
                                        <div key={index} className="mb-8 relative">
                                            <div className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-200 bg-white dark:border-blue-900/70 dark:bg-gray-900">
                                                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h4>
                                                <div className="mb-2 flex items-center text-muted-foreground">
                                                    <span>{experience.company}</span>
                                                    <span className="mx-2">•</span>
                                                    <span className="text-sm">{experience.period}</span>
                                                </div>
                                                <p className="text-muted-foreground">{experience.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Education & Certifications */}
                        <Card className="border-blue-100 bg-white shadow-md dark:border-blue-900/30 dark:bg-gray-900">
                            <CardContent className="p-6">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50">
                                        <GraduationCap className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Education & Certifications</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-bold">M.S. in Computer Science</h4>
                                        <p className="text-muted-foreground">Stanford University, 2016</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600">
                                            <Award className="mr-1 h-3 w-3" /> AWS Certified Data Analytics
                                        </Badge>
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600">
                                            <Award className="mr-1 h-3 w-3" /> Google Professional Data Engineer
                                        </Badge>
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600">
                                            <Award className="mr-1 h-3 w-3" /> Databricks Certified Engineer
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

