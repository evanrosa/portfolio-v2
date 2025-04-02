"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"
import ServiceModal from "./service-modal"
import { motion } from "framer-motion"
import { sendGTMEvent } from "@next/third-parties/google"

interface ServiceCardProps {
    icon: ReactNode
    title: string
    description: string
    detailedContent: ReactNode
}

export default function ServiceCard({ icon, title, description, detailedContent }: ServiceCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
            >
                <Card className="h-full transition-all hover:shadow-md border-blue-100 bg-white dark:border-slate-800 dark:bg-slate-900/80 dark:backdrop-blur-md">
                    <CardHeader className="pb-2">
                        <div className="text-blue-600 mb-4 dark:text-yellow-500">{icon}</div>
                        <h3 className="text-xl font-bold">{title}</h3>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant="ghost"
                            className="p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-white"
                            size="sm"
                            onClick={() => {
                                setIsModalOpen(true)
                                sendGTMEvent({ event: 'service_card_click', value: title })
                            }}
                        >
                            <span className="flex items-center gap-1">
                                Learn more <ArrowRight className="h-3 w-3" />
                            </span>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>

            <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title} icon={icon}>
                {detailedContent}
            </ServiceModal>
        </>
    )
}

