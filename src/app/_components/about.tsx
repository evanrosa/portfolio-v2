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
import Link from "next/link"
import { sendGTMEvent } from "@next/third-parties/google"

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

    const skillsData = [
        {
            category: "Data Processing & ETL",
            icon: <Settings className="h-5 w-5" />,
            skills: ["Apache Airflow", "Apache Spark", "Apache Kafka", "Apache Flink", "SQLMesh", "ETL Pipelines"],
        },
        {
            category: "Cloud & Storage",
            icon: <Database className="h-5 w-5" />,
            skills: ["Google BigQuery", "Google Cloud Storage", "Google Composer", "Google Dataflow", "Databricks", "Amazon Redshift", "Postgres", "MongoDB", "Firebase", "Kubernetes", "Terraform (Currently learning)", "Docker", "CI/CD"],
        },
        {
            category: "Languages & Frameworks",
            icon: <FileCode className="h-5 w-5" />,
            skills: ["Python", "SQL", "REST APIs", "Jupyter Notebooks", "Pandas", "PySpark", "TypeScript"],
        },
        {
            category: "Data Visualization & BI",
            icon: <Server className="h-5 w-5" />,
            skills: ["Apache Superset", "Looker", "Data Modeling", "Pandas", "Tableau", "PowerBI"],
        },
        {
            category: "Analytics & Monitoring",
            icon: <Terminal className="h-5 w-5" />,
            skills: ["Google Analytics", "Google Tag Manager", "SEO", "A/B Testing"],
        },
    ]

    const experienceData = [
        {
            role: "Lead Data Engineer",
            company: "Digital Turbine",
            period: "May 2020 - November 2024",
            description: (
                <div className="space-y-2 text-muted-foreground">
                    <ul className="space-y-2">
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Optimized GCS, Composer, and BigQuery ETL pipelines by refactoring legacy workflows, reducing processing time, cutting data costs by over $100K, and enhancing scalability across 20+ content products.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Developed and optimized batch data pipelines using Apache Airflow, Spark, SQL, and Python, supporting 10M daily active users and over 3B monthly ad impressions. Experimented with Flink for enhanced real-time streaming performance.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Integrated Looker with BigQuery and other data sources to create interactive dashboards, improving data accessibility for stakeholders.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Developed API-based data ingestion pipelines, improving ETL efficiency, reducing processing time and data maintenance complexity.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Maintained Databricks workflows, working with notebooks to troubleshoot Spark-based pipeline issues and ensure 100% uptime for critical data operations.</span>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            role: "Associate Lead Analyst",
            company: "Booz Allen Hamilton",
            period: "March 2015 - May 2020",
            description: (
                <div className="space-y-2 text-muted-foreground">
                    <ul className="space-y-2">
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Managed analytics for multiple HHS and NIH government websites under the Digital Analytics Program (DAP), driving performance and user engagement improvements through SEO audits, A/B testing, and goal funneling strategies.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Developed and managed marketing tag strategies using Google Analytics and Google Tag Manager, ensuring 100% data accuracy and alignment with client objectives.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Spearheaded the development of data warehousing solutions to understand key trends, enabling data-driven decision-making and actionable insights.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Regularly analyzed website metrics and delivered comprehensive analytics reports that shaped and enhanced client strategies, aligning with organizational goals.</span>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            role: "Data Analyst",
            company: "The American Chemical Society",
            period: "December 2010 - May 2015",
            description: (
                <div className="space-y-2 text-muted-foreground">
                    <ul className="space-y-2">
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Oversaw daily operations of the ACS Web Stats System, supporting marketing and sales analytics. Created monthly and annual reports to deliver strategic insights for editorial and marketing teams.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Analyzed ad performance across Google Search, YouTube, Google Analytics, Business Object, and external platforms to optimize campaign effectiveness.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Implemented metrics dashboards with Tableau and Google Data Studio for real-time web traffic monitoring.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Automated monthly and quarterly analytics reporting, reducing manual effort by 50%.</span>
                        </li>
                        <li className="flex">
                            <span className="mr-4">•</span>
                            <span>Migrated analytics infrastructure from legacy Google Analytics to Universal Analytics, ensuring seamless tracking and improved reporting.</span>
                        </li>
                    </ul>
                </div>
            ),
        },
    ]
    return (
        <section
            ref={containerRef}
            id="about"
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
                        About <span className="text-blue-600 dark:text-yellow-500">Me</span>
                    </h2>
                    <div className="mb-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400"></div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        Transforming complex data challenges into scalable, efficient solutions
                    </p>
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

                    {/* Image and Personal Info - 5 columns */}
                    <motion.div variants={itemVariants} className="lg:col-span-5">
                        <Card className="border-blue-100 bg-white shadow-md dark:border-yellow-500/20 dark:bg-gray-900">
                            <CardContent className="p-4 sm:p-6">
                                <div className="relative w-full overflow-hidden rounded-xl aspect-[4/5] mb-4">
                                    <Image
                                        src="/assets/portfolio/pic.jpeg"
                                        alt="Evan Rosa - Lead Data Engineer"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                <h3 className="mb-4 text-xl font-bold">My Journey</h3>
                                <p className="mb-4 text-muted-foreground">
                                    With almost 15 years of experience in the data space, I've transitioned from analyst roles into architecting scalable batch and real-time data infrastructure that supports millions of users and billions of events. I specialize in building modern data platforms powered by Airflow, Spark, Kafka, Flink, and cloud-native tools.
                                </p>
                                <p className="mb-6 text-muted-foreground">
                                    My work focuses on optimizing ETL workflows, enhancing data accessibility, and driving cost-efficiency for high-impact teams across marketing, product, and engineering. I'm passionate about designing systems that turn complex data into clean, reliable insights—and thrive on tackling infrastructure challenges that unlock business growth.
                                </p>

                                <div className="flex flex-col gap-3 sm:flex-row sm:justify-start sm:gap-4">
                                    <Button
                                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900"
                                        asChild
                                    >
                                        <Link
                                            href="https://drive.google.com/file/d/1eVJJDfaARY-l-4cmbPSjqzHHlEwo-pSb/view?usp=sharing"
                                            target="_blank"
                                            onClick={() => sendGTMEvent({ event: 'button_click_about_section', value: 'resume' })}
                                        >
                                            Download Resume
                                        </Link>
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full sm:w-auto border-blue-600/20 text-blue-600 hover:bg-blue-50/50 hover:text-blue-700 dark:border-yellow-500/20 dark:text-yellow-500 dark:hover:bg-yellow-500/10 dark:hover:text-yellow-400"
                                        aria-label="Contact"
                                        asChild
                                    >
                                        <Link
                                            href="#contact"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const element = document.getElementById('contact');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                                sendGTMEvent({ event: 'button_click_about_section', value: 'contact' });
                                            }}
                                        >
                                            Contact Me
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Professional Details - 7 columns */}
                    <motion.div variants={itemVariants} className="lg:col-span-7">
                        {/* Skills */}
                        <Card className="mb-8 border-blue-100 bg-white shadow-md dark:border-yellow-500/20 dark:bg-gray-900">
                            <CardContent className="p-6">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-yellow-500/20 dark:text-yellow-500">
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
                        <Card className="mb-8 border-blue-100 bg-white shadow-md dark:border-yellow-500/20 dark:bg-gray-900">
                            <CardContent className="p-6">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-yellow-500/20 dark:text-yellow-500">
                                        <Briefcase className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Professional Experience</h3>
                                </div>

                                <div className="relative ml-2 border-l-2 border-blue-200 pl-6 dark:border-yellow-500/30">
                                    {experienceData.map((experience, index) => (
                                        <div key={index} className="mb-8 relative">
                                            <div className="absolute -left-9 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-200 bg-white dark:border-yellow-500/30 dark:bg-gray-900">
                                                <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-yellow-500"></div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h4>
                                                <div className="mb-2 flex items-center text-muted-foreground">
                                                    <span>{experience.company}</span>
                                                    <span className="mx-2">•</span>
                                                    <span className="text-sm">{experience.period}</span>
                                                </div>
                                                {experience.description}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Education & Certifications */}
                        <Card className="border-blue-100 bg-white shadow-md dark:border-yellow-500/20 dark:bg-gray-900">
                            <CardContent className="p-6">
                                <div className="mb-6 flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-yellow-500/20 dark:text-yellow-500">
                                        <GraduationCap className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Education & Certifications</h3>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-bold">B.S.B.A. in Business Administration</h4>
                                        <p className="text-muted-foreground">Western New England University</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-2 sm:hidden">
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm px-3 py-1 dark:from-yellow-500 dark:to-yellow-400 dark:text-gray-900">
                                            <Award className="mr-1 h-3 w-3" /> GCP (In Progress)
                                        </Badge>
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm px-3 py-1 dark:from-yellow-500 dark:to-yellow-400 dark:text-gray-900">
                                            <Award className="mr-1 h-3 w-3" /> GA: Data Sci
                                        </Badge>
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm px-3 py-1 dark:from-yellow-500 dark:to-yellow-400 dark:text-gray-900">
                                            <Award className="mr-1 h-3 w-3" /> GA: Full Stack
                                        </Badge>
                                    </div>

                                    <div className="hidden sm:flex flex-wrap gap-2 pt-2">
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm px-3 py-1 dark:from-yellow-500 dark:to-yellow-400 dark:text-gray-900">
                                            <Award className="mr-1 h-3 w-3" /> Google Professional Data Engineer (In Progress)
                                        </Badge>
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm px-3 py-1 dark:from-yellow-500 dark:to-yellow-400 dark:text-gray-900">
                                            <Award className="mr-1 h-3 w-3" /> General Assembly Certified Data Science Graduate
                                        </Badge>
                                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm px-3 py-1 dark:from-yellow-500 dark:to-yellow-400 dark:text-gray-900">
                                            <Award className="mr-1 h-3 w-3" /> General Assembly Certified Full Stack Developer Graduate
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

