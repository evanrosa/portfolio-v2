"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    ArrowUpRight,
    Code2,
    Database,
    ExternalLink,
    FileCode,
    Github,
    LineChart,
    Maximize2,
    Server,
} from "lucide-react"
import { sendGTMEvent } from "@next/third-parties/google"

// Project data structure
interface Technology {
    name: string
    type: "database" | "language" | "cloud" | "tool"
}

interface Project {
    id: string
    title: string
    description: string
    category: "data-pipeline" | "data-warehouse" | "data-analytics" | "machine-learning"
    image: string
    architecture: string
    technologies: Technology[]
    role: string
    contributions: string[]
    links: {
        github?: string
        live?: string
        documentation?: string
    }
    featured: boolean
}

export default function ProjectsSection() {
    const [activeProject, setActiveProject] = useState<string | null>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    // Sample project data
    const projects: Project[] = [
        {
            id: "stock-market-etl",
            title: "Stock Market ETL Pipeline",
            description: "Designed and implemented an automated ETL pipeline to ingest, transform, and store AAPL stock data using Apache Airflow, Apache Spark, and MinIO, ensuring efficient data integration and real-time processing.",
            category: "data-pipeline",
            image: "/assets/portfolio/stock-etl.png",
            architecture: "/assets/portfolio/stock-etl-architecture.png",
            technologies: [
                { name: "Apache Airflow", type: "tool" },
                { name: "Apache Spark", type: "tool" },
                { name: "MinIO", type: "database" },
                { name: "Python", type: "language" },
                { name: "Parquet", type: "database" },
            ],
            role: "Lead Data Engineer",
            contributions: [
                "Orchestrated ETL workflows using Apache Airflow",
                "Developed high-performance data transformations with Apache Spark",
                "Integrated MinIO for scalable object storage",
                "Optimized data processing efficiency",
                "Implemented comprehensive logging and monitoring",
            ],
            links: {
                github: "https://github.com/evanrosa/airflow-demo",
            },
            featured: true,
        },
        {
            id: "digital-turbine-etl",
            title: "BigQuery ETL Pipelines for Digital Turbine",
            description: "Designed and optimized BigQuery ETL pipelines for scalable, high-performance data processing, supporting over 10M daily users and enabling analytics for 3B+ monthly ad impressions.",
            category: "data-warehouse",
            image: "/assets/portfolio/dt-etl.png",
            architecture: "/assets/portfolio/dt-etl-architecture.png",
            technologies: [
                { name: "Google BigQuery", type: "database" },
                { name: "Apache Airflow", type: "tool" },
                { name: "Apache Flink", type: "tool" },
                { name: "Apache Spark", type: "tool" },
                { name: "Python", type: "language" },
                { name: "SQL", type: "language" },
                { name: "Databricks", type: "tool" },
            ],
            role: "Lead Data Engineer",
            contributions: [
                "Optimized BigQuery ETL pipelines, reducing costs by $100K+ annually",
                "Refactored legacy workflows for improved scalability",
                "Built real-time & batch data pipelines",
                "Led Databricks workflow optimizations",
                "Integrated API-based data ingestion pipelines",
            ],
            links: {
                live: "https://digitalturbine.com/",
            },
            featured: true,
        },
        {
            id: "epl-prediction",
            title: "English Premier League Match Outcome Prediction",
            description: "Developed a comprehensive data pipeline to scrape, process, and analyze English Premier League match data, employing machine learning techniques to predict match outcomes.",
            category: "machine-learning",
            image: "/assets/portfolio/epl.png",
            architecture: "/assets/portfolio/epl-architecture.png",
            technologies: [
                { name: "Python", type: "language" },
                { name: "Scikit-Learn", type: "tool" },
                { name: "Pandas", type: "tool" },
                { name: "Web Scraping", type: "tool" },
                { name: "Machine Learning", type: "tool" },
            ],
            role: "Lead Data Engineer",
            contributions: [
                "Implemented web scraping for EPL match data collection",
                "Developed feature engineering for team and player statistics",
                "Applied machine learning algorithms for outcome prediction",
                "Evaluated model performance with key metrics",
                "Optimized models through hyperparameter tuning",
            ],
            links: {
                github: "https://github.com/evanrosa/EPL_Footie_ML",
            },
            featured: true,
        },
        {
            id: "subscription-analytics",
            title: "Real-Time Subscription and Revenue Analytics",
            description: "Built an end-to-end real-time data pipeline for tracking subscription metrics, revenue trends, and customer churn using Kafka, BigQuery, SQLMesh, and Preset.",
            category: "data-analytics",
            image: "/assets/portfolio/realtime.png",
            architecture: "/assets/portfolio/realtime-architecture.png",
            technologies: [
                { name: "Apache Kafka", type: "tool" },
                { name: "Google BigQuery", type: "database" },
                { name: "SQLMesh", type: "tool" },
                { name: "Preset", type: "tool" },
                { name: "Python", type: "language" },
            ],
            role: "Lead Data Engineer",
            contributions: [
                "Developed real-time event-driven architecture with Kafka",
                "Integrated BigQuery for scalable data warehousing",
                "Implemented SQLMesh for data transformation",
                "Automated data ingestion workflows",
                "Designed interactive dashboards in Preset",
            ],
            links: {
                github: "https://github.com/evanrosa/pipe_demo",
            },
            featured: true,
        },
        {
            id: "flight-analytics",
            title: "Real-Time Flight Analytics",
            description: "Developing an end-to-end streaming and batch pipeline to analyze flight trends, airline performance, and visitor influx in Puerto Rico using Kafka, Flink, Spark, and Airflow.",
            category: "data-pipeline",
            image: "/assets/portfolio/flight.png",
            architecture: "/assets/portfolio/flight-architecture.png",
            technologies: [
                { name: "Apache Kafka", type: "tool" },
                { name: "Apache Flink", type: "tool" },
                { name: "Apache Spark", type: "tool" },
                { name: "Apache Airflow", type: "tool" },
                { name: "Apache Superset", type: "tool" },
            ],
            role: "Lead Data Engineer",
            contributions: [
                "Built real-time event-driven architecture with Kafka",
                "Developed Flink-based streaming analytics",
                "Designed scalable batch analytics with Spark",
                "Orchestrated automated workflows with Airflow",
                "Implemented interactive dashboards in Superset",
            ],
            links: {
                github: "https://github.com/evanrosa/pr_tour",
            },
            featured: true,
        },
        {
            id: "soccer-data-pipeline",
            title: "Streaming and Batch Experiments",
            description: "Designing real-time streaming and batch workflows for soccer match data using Kafka, Flink, Spark, and Airflow to enable high-velocity data ingestion, transformation, and analytics at scale.",
            category: "data-pipeline",
            image: "/assets/portfolio/stream-batch.png",
            architecture: "/assets/portfolio/stream-batch-architecture.png",
            technologies: [
                { name: "Apache Kafka", type: "tool" },
                { name: "Apache Flink", type: "tool" },
                { name: "Apache Spark", type: "tool" },
                { name: "Apache Airflow", type: "tool" },
                { name: "Confluent", type: "tool" },
                { name: "SportsRadar API", type: "tool" },
            ],
            role: "Lead Data Engineer",
            contributions: [
                "Engineered scalable real-time data ingestion with Kafka",
                "Implemented Flink for stream processing",
                "Optimized distributed computation with Spark",
                "Integrated Confluent for streaming management",
                "Developed APIs for data source integration",
            ],
            links: {
                github: "https://github.com/evanrosa/football_etl",
            },
            featured: true,
        },
        {
            id: "wine-prediction",
            title: "Wine Review Rating Prediction",
            description: "Developed a data pipeline to preprocess and analyze wine reviews, using machine learning models to predict ratings based on price, region, and variety, achieving an RMSE of 2.3.",
            category: "machine-learning",
            image: "/assets/portfolio/wine.png",
            architecture: "/assets/portfolio/wine-arch.jpg",
            technologies: [
                { name: "Python", type: "language" },
                { name: "Pandas", type: "tool" },
                { name: "Scikit-Learn", type: "tool" },
                { name: "Machine Learning", type: "tool" },
                { name: "Data Preprocessing", type: "tool" },
            ],
            role: "Lead Data Engineer",
            contributions: [
                "Developed scalable ETL pipeline for wine review data",
                "Applied advanced data preprocessing techniques",
                "Implemented predictive models with Random Forest",
                "Optimized model performance through hyperparameter tuning",
                "Achieved RMSE of 2.3 in rating predictions",
            ],
            links: {
                github: "https://github.com/evanrosa/wine-ML-capstone-2018",
            },
            featured: true,
        },
    ]

    // Get technology type icon
    const getTechIcon = (type: Technology["type"]) => {
        switch (type) {
            case "database":
                return <Database className="h-3 w-3" />
            case "language":
                return <FileCode className="h-3 w-3" />
            case "cloud":
                return <Server className="h-3 w-3" />
            case "tool":
                return <Code2 className="h-3 w-3" />
            default:
                return null
        }
    }

    // Get category icon
    const getCategoryIcon = (category: Project["category"]) => {
        switch (category) {
            case "data-pipeline":
                return <ArrowUpRight className="h-5 w-5" />
            case "data-warehouse":
                return <Database className="h-5 w-5" />
            case "data-analytics":
                return <LineChart className="h-5 w-5" />
            case "machine-learning":
                return <Server className="h-5 w-5" />
            default:
                return null
        }
    }

    // Get technology badge color
    const getTechBadgeClass = (type: Technology["type"]) => {
        switch (type) {
            case "database":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
            case "language":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
            case "cloud":
                return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300"
            case "tool":
                return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
        }
    }

    // Animation variants
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

    // Handle project modal
    const openProjectDetails = (id: string) => {
        setActiveProject(id)
        document.body.style.overflow = "hidden"
    }

    const closeProjectDetails = () => {
        setActiveProject(null)
        document.body.style.overflow = "auto"
    }

    // Get active project
    const getActiveProject = () => {
        return projects.find((project) => project.id === activeProject)
    }

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-24 dark:from-gray-900 dark:to-gray-950"
        >
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <svg className="absolute left-0 top-0 h-64 w-64 rotate-180 text-blue-500/5" viewBox="0 0 200 200">
                    <path
                        fill="currentColor"
                        d="M30.5,-51.2C39.2,-46.9,45.7,-37.7,51.1,-27.9C56.6,-18.1,61.1,-7.5,58.6,1.4C56.1,10.4,46.6,17.7,39.6,26.2C32.5,34.7,27.9,44.3,20.7,49.8C13.5,55.3,3.8,56.8,-3.9,52.5C-11.7,48.2,-17.4,38.1,-22.5,30.7C-27.6,23.3,-32.1,18.5,-39.2,11.5C-46.3,4.4,-56,-4.8,-58.8,-16.1C-61.5,-27.4,-57.2,-40.7,-48.2,-45.8C-39.2,-50.8,-25.5,-47.5,-14.2,-46.1C-3,-44.7,5.9,-45.2,14.5,-46.1C23,-47,31.1,-48.4,30.5,-51.2Z"
                        transform="translate(100 100)"
                    />
                </svg>
                <svg className="absolute bottom-0 right-0 h-64 w-64 text-cyan-500/5" viewBox="0 0 200 200">
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
                        Featured <span className="text-blue-600 dark:text-yellow-500">Projects</span>
                    </h2>
                    <div className="mb-4 mx-auto h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400"></div>
                    <p className="text-lg text-muted-foreground">Explore my data engineering projects and technical solutions</p>
                </motion.div>

                <Tabs defaultValue="all" className="w-full">
                    <div className="mb-8 flex justify-center">
                        <div className="w-full max-w-[90vw] overflow-hidden rounded-lg bg-blue-50 dark:bg-gray-800/50">
                            <div className="overflow-x-auto scrollbar-hide">
                                <TabsList className="inline-flex min-w-full justify-center bg-blue-50 dark:bg-gray-800/50">
                                    <TabsTrigger
                                        onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: 'tab_all' })}
                                        value="all"
                                        className="whitespace-nowrap px-4 py-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-yellow-500/20 dark:data-[state=active]:text-yellow-500"
                                    >
                                        All Projects
                                    </TabsTrigger>
                                    <TabsTrigger
                                        onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: 'tab_data_pipeline' })}
                                        value="data-pipeline"
                                        className="whitespace-nowrap px-4 py-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-yellow-500/20 dark:data-[state=active]:text-yellow-500"
                                    >
                                        Data Pipelines
                                    </TabsTrigger>
                                    <TabsTrigger
                                        onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: 'tab_data_warehouse' })}
                                        value="data-warehouse"
                                        className="whitespace-nowrap px-4 py-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-yellow-500/20 dark:data-[state=active]:text-yellow-500"
                                    >
                                        Data Warehousing
                                    </TabsTrigger>
                                    <TabsTrigger
                                        onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: 'tab_data_analytics' })}
                                        value="data-analytics"
                                        className="whitespace-nowrap px-4 py-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-yellow-500/20 dark:data-[state=active]:text-yellow-500"
                                    >
                                        Analytics
                                    </TabsTrigger>
                                    <TabsTrigger
                                        onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: 'tab_machine_learning' })}
                                        value="machine-learning"
                                        className="whitespace-nowrap px-4 py-2 data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-yellow-500/20 dark:data-[state=active]:text-yellow-500"
                                    >
                                        ML Engineering
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                        </div>
                    </div>

                    <TabsContent value="all" className="mt-0">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    variants={itemVariants}
                                    onViewDetails={() => openProjectDetails(project.id)}
                                    getTechBadgeClass={getTechBadgeClass}
                                    getTechIcon={getTechIcon}
                                    getCategoryIcon={getCategoryIcon}
                                />
                            ))}
                        </motion.div>
                    </TabsContent>

                    {["data-pipeline", "data-warehouse", "data-analytics", "machine-learning"].map((category) => (
                        <TabsContent key={category} value={category} className="mt-0">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            >
                                {projects
                                    .filter((project) => project.category === category)
                                    .map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            variants={itemVariants}
                                            onViewDetails={() => openProjectDetails(project.id)}
                                            getTechBadgeClass={getTechBadgeClass}
                                            getTechIcon={getTechIcon}
                                            getCategoryIcon={getCategoryIcon}
                                        />
                                    ))}
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

            {/* Project Details Modal */}
            {activeProject && (
                <ProjectDetailsModal
                    project={getActiveProject()!}
                    onClose={closeProjectDetails}
                    getTechBadgeClass={getTechBadgeClass}
                    getTechIcon={getTechIcon}
                />
            )}
        </section>
    )
}

// Project Card Component
interface ProjectCardProps {
    project: Project
    variants: any
    onViewDetails: () => void
    getTechBadgeClass: (type: Technology["type"]) => string
    getTechIcon: (type: Technology["type"]) => React.ReactNode
    getCategoryIcon: (category: Project["category"]) => React.ReactNode
}

function ProjectCard({
    project,
    variants,
    onViewDetails,
    getTechBadgeClass,
    getTechIcon,
    getCategoryIcon,
}: ProjectCardProps) {
    return (
        <motion.div variants={variants}>
            <Card className="group h-full overflow-hidden border-blue-100 transition-all hover:shadow-md dark:border-yellow-500/20 dark:bg-gray-900">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <Button
                                size="sm"
                                variant="secondary"
                                className="bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900 dark:text-yellow-500"
                                onClick={(e) => {
                                    e.preventDefault()
                                    onViewDetails()
                                    sendGTMEvent({ event: 'button_click_projects_section', value: `${project.category}_${project.id}_view_details` })
                                }}
                            >
                                <Maximize2 className="mr-1 h-4 w-4" />
                                View Details
                            </Button>
                        </div>
                    </div>
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-blue-600 dark:bg-gray-900/90 dark:text-yellow-500">
                        {getCategoryIcon(project.category)}
                    </div>
                </div>
                <CardContent className="p-5">
                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((tech, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className={`flex items-center gap-1 ${getTechBadgeClass(tech.type)}`}
                            >
                                {getTechIcon(tech.type)}
                                {tech.name}
                            </Badge>
                        ))}
                        {project.technologies.length > 5 && (
                            <Badge variant="outline" className="border-blue-200 dark:border-blue-800">
                                +{project.technologies.length - 5} more
                            </Badge>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{project.role}</span>
                        <div className="flex gap-2">
                            {project.links.github && (
                                <Link
                                    href={project.links.github}
                                    target="_blank"
                                    className="rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-yellow-500"
                                    aria-label="GitHub Repository"
                                    onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: `${project.category}_${project.id}_github` })}
                                >
                                    <Github className="h-4 w-4" />
                                </Link>
                            )}
                            {project.links.live && (
                                <Link
                                    href={project.links.live}
                                    target="_blank"
                                    className="rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-yellow-500"
                                    aria-label="Live Project"
                                    onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: `${project.category}_${project.id}_live` })}
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

// Project Details Modal Component
interface ProjectDetailsModalProps {
    project: Project
    onClose: () => void
    getTechBadgeClass: (type: Technology["type"]) => string
    getTechIcon: (type: Technology["type"]) => React.ReactNode
}

function ProjectDetailsModal({ project, onClose, getTechBadgeClass, getTechIcon }: ProjectDetailsModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <motion.div
                className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-white shadow-xl dark:bg-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
            >
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                    <button
                        onClick={() => {
                            sendGTMEvent({ event: 'button_click_projects_section', value: `${project.category}_${project.id}_close_modal` })
                            onClose()
                        }}
                        className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                        aria-label="Close modal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h2 className="text-2xl font-bold text-white md:text-3xl">{project.title}</h2>
                        <p className="text-white/80">{project.role}</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="mb-6">
                        <h3 className="mb-2 text-lg font-semibold">Project Overview</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="mb-3 text-lg font-semibold">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className={`flex items-center gap-1 ${getTechBadgeClass(tech.type)}`}
                                >
                                    {getTechIcon(tech.type)}
                                    {tech.name}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="mb-3 text-lg font-semibold">My Contributions</h3>
                        <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                            {project.contributions.map((contribution, index) => (
                                <li key={index}>{contribution}</li>
                            ))}
                        </ul>
                    </div>

                    {/* <div className="mb-6">
                        <h3 className="mb-3 text-lg font-semibold">Project Architecture</h3>
                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-blue-100 dark:border-blue-900/30">
                            <Image
                                src={project.architecture}
                                alt={`${project.title} Architecture Diagram`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div> */}

                    <div className="flex flex-wrap gap-3">
                        {project.links.github && (
                            <Button asChild className="bg-[#24292e] hover:bg-[#1b1f23] dark:bg-[#24292e]/90 dark:hover:bg-[#24292e]">
                                <Link href={project.links.github} target="_blank" onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: `${project.category}_${project.id}_github` })}>
                                    <Github className="mr-2 h-4 w-4" />
                                    View Repository
                                </Link>
                            </Button>
                        )}
                        {project.links.live && (
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-gray-900">
                                <Link href={project.links.live} target="_blank" onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: `${project.category}_${project.id}_live` })}>
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Project
                                </Link>
                            </Button>
                        )}
                        {project.links.documentation && (
                            <Button
                                asChild
                                variant="outline"
                                className="border-blue-200 hover:bg-blue-50 dark:border-yellow-500/20 dark:text-yellow-500 dark:hover:bg-yellow-500/10 dark:hover:text-yellow-400"
                            >
                                <Link href={project.links.documentation} target="_blank" onClick={() => sendGTMEvent({ event: 'button_click_projects_section', value: `${project.category}_${project.id}_documentation` })}>
                                    <FileCode className="mr-2 h-4 w-4" />
                                    Documentation
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

