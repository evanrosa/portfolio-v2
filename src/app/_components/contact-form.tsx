"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import { sendGTMEvent } from "@next/third-parties/google"
const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    inquiryType: z.enum(["job", "project", "collaboration", "other"], {
        required_error: "Please select an inquiry type",
    }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            inquiryType: "project",
            message: "",
        },
    })

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })


            const result = await res.json()


            if (!res.ok) {
                throw new Error(result.error || result.details || "Failed to send message")
            }

            toast.success("Message sent!", {
                description: "Thanks for reaching out. I'll get back to you soon.",
            })

            form.reset()
        } catch (error) {
            console.error("Form submission error:", error)
            toast.error("Something went wrong", {
                description: error instanceof Error ? error.message : "Your message couldn't be sent. Please try again later.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full dark:bg-slate-900 dark:border-slate-800">
            <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="dark:text-slate-100">Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your name"
                                                className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="dark:text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="dark:text-slate-100">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="your.email@example.com"
                                                className="dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="dark:text-red-400" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="inquiryType"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="dark:text-slate-100">What's this about?</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-wrap gap-4"
                                        >
                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="job" className="dark:border-slate-700" />
                                                </FormControl>
                                                <FormLabel className="font-normal cursor-pointer dark:text-slate-300">Job Opportunity</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="project" className="dark:border-slate-700" />
                                                </FormControl>
                                                <FormLabel className="font-normal cursor-pointer dark:text-slate-300">Project Inquiry</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="collaboration" className="dark:border-slate-700" />
                                                </FormControl>
                                                <FormLabel className="font-normal cursor-pointer dark:text-slate-300">Collaboration</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="other" className="dark:border-slate-700" />
                                                </FormControl>
                                                <FormLabel className="font-normal cursor-pointer dark:text-slate-300">Other</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage className="dark:text-red-400" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="dark:text-slate-100">Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell me about your project, job opportunity, or just say hi..."
                                            className="min-h-32 resize-none dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="dark:text-red-400" />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white"
                            disabled={isSubmitting}
                            onClick={() => sendGTMEvent({ event: 'button_click_contact_form', value: 'send_message' })}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

