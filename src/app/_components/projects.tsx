"use client"

import { useState, useRef } from "react"
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
            id: "real-time-analytics",
            title: "Real-time Analytics Pipeline",
            description:
                "Designed and implemented a scalable real-time analytics pipeline processing 2TB+ of daily event data from multiple sources. The system provides near real-time insights with sub-second latency for critical business metrics.",
            category: "data-pipeline",
            image: "/placeholder.svg?height=600&width=800",
            technologies: [
                { name: "Apache Kafka", type: "tool" },
                { name: "Apache Spark", type: "tool" },
                { name: "Python", type: "language" },
                { name: "AWS Kinesis", type: "cloud" },
                { name: "Snowflake", type: "database" },
                { name: "Airflow", type: "tool" },
                { name: "Terraform", type: "tool" },
            ],
            role: "Lead Data Engineer",
            contributions: [
                "Architected and built end-to-end data pipeline with 99.99% uptime",
                "Implemented data quality monitoring reducing error rates by 75%",
                "Optimized Spark jobs resulting in 40% cost reduction",
            ],
            links: {
                github: "https://github.com",
                documentation: "https://docs.example.com",
            },
            featured: true,
        },
        {
            id: "data-warehouse",
            title: "Enterprise Data Warehouse Migration",
            description:
                "Led the migration of a legacy on-premise data warehouse to a modern cloud-based solution, enabling faster analytics and reducing operational costs by 60%. Implemented a robust data modeling approach with dbt.",
            category: "data-warehouse",
            image: "/placeholder.svg?height=600&width=800",
            technologies: [
                { name: "Snowflake", type: "database" },
                { name: "dbt", type: "tool" },
                { name: "Python", type: "language" },
                { name: "SQL", type: "language" },
                { name: "AWS Glue", type: "cloud" },
                { name: "Airflow", type: "tool" },
            ],
            role: "Data Architect",
            contributions: [
                "Designed dimensional data models for finance and marketing domains",
                "Created automated testing framework with 95% coverage",
                "Reduced query times from minutes to seconds",
            ],
            links: {
                github: "https://github.com",
                live: "https://example.com",
            },
            featured: true,
        },
        {
            id: "ml-data-platform",
            title: "ML Feature Engineering Platform",
            description:
                "Built a centralized feature store and data platform to support machine learning initiatives across the organization. The platform standardized feature engineering and enabled rapid ML model development.",
            category: "machine-learning",
            image: "/placeholder.svg?height=600&width=800",
            technologies: [
                { name: "Python", type: "language" },
                { name: "Feast", type: "tool" },
                { name: "Kubernetes", type: "cloud" },
                { name: "PostgreSQL", type: "database" },
                { name: "Redis", type: "database" },
                { name: "Docker", type: "tool" },
            ],
            role: "Data Platform Engineer",
            contributions: [
                "Designed feature store architecture supporting 200+ ML features",
                "Implemented CI/CD pipeline for feature deployment",
                "Created documentation and training for data scientists",
            ],
            links: {
                github: "https://github.com",
                documentation: "https://docs.example.com",
            },
            featured: false,
        },
        {
            id: "data-quality",
            title: "Automated Data Quality Framework",
            description:
                "Developed a comprehensive data quality monitoring framework that automatically detects anomalies and data issues across the data ecosystem. The system reduced manual QA effort by 80% and improved data reliability.",
            category: "data-pipeline",
            image: "/placeholder.svg?height=600&width=800",
            technologies: [
                { name: "Great Expectations", type: "tool" },
                { name: "Python", type: "language" },
                { name: "Airflow", type: "tool" },
                { name: "Prometheus", type: "tool" },
                { name: "Grafana", type: "tool" },
                { name: "AWS Lambda", type: "cloud" },
            ],
            role: "Data Quality Engineer",
            contributions: [
                "Built automated testing suite with 1000+ data quality checks",
                "Created alerting system integrated with PagerDuty",
                "Developed custom data quality dashboards for stakeholders",
            ],
            links: {
                github: "https://github.com",
            },
            featured: true,
        },
        {
            id: "analytics-dashboard",
            title: "Executive Analytics Dashboard",
            description:
                "Created an interactive analytics dashboard providing real-time business insights to executive leadership. The solution consolidated data from multiple sources and presented key metrics in an intuitive interface.",
            category: "data-analytics",
            image: "/placeholder.svg?height=600&width=800",
            technologies: [
                { name: "Tableau", type: "tool" },
                { name: "SQL", type: "language" },
                { name: "BigQuery", type: "database" },
                { name: "dbt", type: "tool" },
                { name: "Python", type: "language" },
            ],
            role: "Analytics Engineer",
            contributions: [
                "Designed data models optimized for dashboard performance",
                "Implemented incremental data refresh reducing latency by 90%",
                "Created custom visualizations for complex KPIs",
            ],
            links: {
                live: "https://example.com",
                documentation: "https://docs.example.com",
            },
            featured: false,
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
                        Featured <span className="text-blue-600">Projects</span>
                    </h2>
                    <div className="mb-4 mx-auto h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                    <p className="text-lg text-muted-foreground">Explore my data engineering projects and technical solutions</p>
                </motion.div>

                <Tabs defaultValue="all" className="w-full">
                    <div className="mb-8 flex justify-center">
                        <TabsList className="bg-blue-50 dark:bg-gray-800/50">
                            <TabsTrigger value="all">All Projects</TabsTrigger>
                            <TabsTrigger value="data-pipeline">Data Pipelines</TabsTrigger>
                            <TabsTrigger value="data-warehouse">Data Warehousing</TabsTrigger>
                            <TabsTrigger value="data-analytics">Analytics</TabsTrigger>
                            <TabsTrigger value="machine-learning">ML Engineering</TabsTrigger>
                        </TabsList>
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
    getTechIcon: (type: Technology["type"]) => JSX.Element | null
    getCategoryIcon: (category: Project["category"]) => JSX.Element | null
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
            <Card className="group h-full overflow-hidden border-blue-100 transition-all hover:shadow-md dark:border-blue-900/30 dark:bg-gray-900">
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
                                className="bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900"
                                onClick={(e) => {
                                    e.preventDefault()
                                    onViewDetails()
                                }}
                            >
                                <Maximize2 className="mr-1 h-4 w-4" />
                                View Details
                            </Button>
                        </div>
                    </div>
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-blue-600 dark:bg-gray-900/90">
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
                                    className="rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-500"
                                    aria-label="GitHub Repository"
                                >
                                    <Github className="h-4 w-4" />
                                </Link>
                            )}
                            {project.links.live && (
                                <Link
                                    href={project.links.live}
                                    target="_blank"
                                    className="rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-500"
                                    aria-label="Live Project"
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
    getTechIcon: (type: Technology["type"]) => JSX.Element | null
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
                        onClick={onClose}
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

                    <div className="mb-6">
                        <h3 className="mb-3 text-lg font-semibold">Project Architecture</h3>
                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-blue-100 dark:border-blue-900/30">
                            {/* This would be a project architecture diagram */}
                            <div className="flex h-full w-full items-center justify-center bg-blue-50 dark:bg-gray-800/50">
                                <p className="text-center text-muted-foreground">
                                    Project architecture diagram would be displayed here
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {project.links.github && (
                            <Button asChild className="bg-[#24292e] hover:bg-[#1b1f23] dark:bg-[#24292e]/90 dark:hover:bg-[#24292e]">
                                <Link href={project.links.github} target="_blank">
                                    <Github className="mr-2 h-4 w-4" />
                                    View Repository
                                </Link>
                            </Button>
                        )}
                        {project.links.live && (
                            <Button asChild className="bg-blue-600 hover:bg-blue-700">
                                <Link href={project.links.live} target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Project
                                </Link>
                            </Button>
                        )}
                        {project.links.documentation && (
                            <Button
                                asChild
                                variant="outline"
                                className="border-blue-200 hover:bg-blue-50 dark:border-blue-900/30 dark:hover:bg-blue-900/20"
                            >
                                <Link href={project.links.documentation} target="_blank">
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

