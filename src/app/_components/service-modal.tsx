"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { ReactNode } from "react"


interface ServiceModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    icon: ReactNode
    children: ReactNode
}

export default function ServiceModal({ isOpen, onClose, title, icon, children }: ServiceModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl border-blue-100 dark:border-slate-800 dark:bg-slate-900/80 dark:backdrop-blur-md">
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        <div className="text-blue-600 dark:text-yellow-500">{icon}</div>
                        <DialogTitle className="text-2xl">{title}</DialogTitle>
                    </div>
                    <DialogDescription className="text-muted-foreground">
                        Detailed information about this service offering
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">{children}</div>
            </DialogContent>
        </Dialog>
    )
}

