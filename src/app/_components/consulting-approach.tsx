"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle2, LightbulbIcon, SearchIcon, BarChart4, Settings, Zap } from "lucide-react"

export default function ConsultingApproach() {
    const steps = [
        {
            icon: <SearchIcon className="h-8 w-8" />,
            title: "Discovery & Assessment",
            description:
                "I begin by understanding your business objectives, current data landscape, and challenges. This involves a thorough assessment of your existing data infrastructure, processes, and pain points.",
            outcomes: [
                "Comprehensive understanding of your business needs",
                "Detailed assessment of current data infrastructure",
                "Identification of key challenges and opportunities",
                "Documentation of data sources and systems",
            ],
        },
        {
            icon: <LightbulbIcon className="h-8 w-8" />,
            title: "Strategy & Solution Design",
            description:
                "Based on the discovery phase, I develop a tailored strategy and solution architecture that addresses your specific needs. This includes detailed technical specifications, implementation roadmap, and success metrics.",
            outcomes: [
                "Customized data engineering strategy",
                "Detailed solution architecture",
                "Technology selection recommendations",
                "Implementation roadmap with clear milestones",
            ],
        },
        {
            icon: <Settings className="h-8 w-8" />,
            title: "Implementation & Development",
            description:
                "I work closely with your team to implement the designed solution. This may involve building data pipelines, optimizing data warehouses, implementing data governance frameworks, or setting up real-time analytics systems.",
            outcomes: [
                "Efficient and scalable implementation",
                "Knowledge transfer to your team",
                "Comprehensive documentation",
                "Regular progress updates and demonstrations",
            ],
        },
        {
            icon: <BarChart4 className="h-8 w-8" />,
            title: "Testing & Validation",
            description:
                "Every solution undergoes rigorous testing to ensure it meets the defined requirements and quality standards. This includes performance testing, data quality validation, and user acceptance testing.",
            outcomes: [
                "Verified data accuracy and reliability",
                "Optimized performance and scalability",
                "Validated business requirements",
                "Documented test results and quality metrics",
            ],
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Deployment & Optimization",
            description:
                "Once validated, the solution is deployed to production. I provide ongoing support to ensure smooth operation and help optimize the solution based on real-world performance and evolving business needs.",
            outcomes: [
                "Smooth transition to production",
                "Performance monitoring and optimization",
                "Continuous improvement recommendations",
                "Knowledge transfer and training",
            ],
        },
    ]

    return (
        <section id="approach" className="py-16">
            <div className="mx-auto mb-12 max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    My Consulting <span className="text-blue-600 dark:text-yellow-500">Approach</span>
                </h2>
                <div className="mb-4 h-1 w-20 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-yellow-500 dark:to-yellow-400"></div>
                <p className="text-base sm:text-lg text-muted-foreground">
                    A structured methodology focused on delivering tangible business value
                </p>
            </div>

            <div className="relative ml-4 pl-8 border-l-2 border-blue-200 dark:border-gray-800 md:ml-0 md:pl-0 md:border-l-0">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-12 relative md:grid md:grid-cols-5 md:gap-8 md:items-start"
                    >
                        {/* Step number and icon */}
                        <div className="hidden md:flex md:flex-col md:items-center md:col-span-1">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-3 dark:bg-gray-800 dark:text-gray-300">
                                {step.icon}
                            </div>
                            <div className="text-lg font-bold text-blue-600 dark:text-gray-300">Step {index + 1}</div>
                        </div>

                        {/* Step content */}
                        <Card className="md:col-span-4 border-blue-100/50 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg dark:border-slate-700/50 dark:from-slate-800/90 dark:to-slate-900/90 dark:backdrop-blur-md dark:shadow-slate-900/20">
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-3">
                                    <div className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-gray-800 dark:text-gray-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-muted-foreground">{step.description}</p>
                                <div>
                                    <h4 className="font-semibold text-sm uppercase text-blue-600 tracking-wider mb-2 dark:text-gray-300">
                                        Key Deliverables
                                    </h4>
                                    <ul className="space-y-1">
                                        {step.outcomes.map((outcome, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 dark:text-gray-300" />
                                                <span>{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

