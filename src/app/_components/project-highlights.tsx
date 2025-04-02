"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectHighlightProps {
    title: string
    industry: string
    tags: string[]
    challenge: string
    solution: string
    outcomes: string[]
    technologies: string[]
}

export default function ProjectHighlight({
    title,
    industry,
    tags,
    challenge,
    solution,
    outcomes,
    technologies,
}: ProjectHighlightProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <Card className="h-full border-blue-100 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:backdrop-blur-md">
                <CardHeader className="pb-2">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                            <h3 className="text-xl font-bold">{title}</h3>
                            <p className="text-sm text-muted-foreground">{industry}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-sm uppercase text-blue-600 tracking-wider mb-1 dark:text-yellow-500">
                                Challenge
                            </h4>
                            <p className="text-sm">{challenge}</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-sm uppercase text-blue-600 tracking-wider mb-1 dark:text-yellow-500">
                                Solution
                            </h4>
                            <p className="text-sm">{solution}</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-sm uppercase text-blue-600 tracking-wider mb-1 dark:text-yellow-500">
                                Outcomes
                            </h4>
                            <ul className="space-y-1">
                                {outcomes.map((outcome, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 dark:text-yellow-500" />
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-2 border-t border-blue-100 dark:border-yellow-500/20">
                            <h4 className="font-semibold text-sm uppercase text-blue-600 tracking-wider mb-1 dark:text-yellow-500">
                                Technologies
                            </h4>
                            <div className="flex flex-wrap gap-1">
                                {technologies.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                        className="text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

