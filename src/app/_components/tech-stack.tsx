"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Technology {
    name: string
    description: string
}

interface TechStackProps {
    title: string
    description: string
    technologies: Technology[]
}

export default function TechStack({ title, description, technologies }: TechStackProps) {
    return (
        <Card className="border-blue-100 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:backdrop-blur-md">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-1 p-4 border border-blue-100 rounded-lg dark:border-slate-800"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant="outline"
                                    className="font-medium bg-blue-50 text-blue-700 border-blue-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
                                >
                                    {tech.name}
                                </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </motion.div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

