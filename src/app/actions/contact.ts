"use server"

import { z } from "zod"

const contactFormSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    inquiryType: z.enum(["job", "project", "collaboration", "other"]),
    message: z.string().min(10),
})

type ContactResponse = {
    success: boolean
    message: string
}

export async function submitPortfolioContact(formData: FormData): Promise<ContactResponse> {
    try {
        // Extract form data
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const inquiryType = formData.get("inquiryType") as string
        const message = formData.get("message") as string

        // Validate form data
        const validatedData = contactFormSchema.parse({
            name,
            email,
            inquiryType,
            message,
        })

        // Here you would typically:
        // 1. Send yourself an email notification
        // 2. Store the inquiry in a database
        // 3. Set up an auto-responder

        // For demonstration, we'll just simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Return success response
        return {
            success: true,
            message: "Thanks for reaching out! I'll get back to you soon.",
        }
    } catch (error) {
        console.error("Contact form error:", error)

        // Handle validation errors
        if (error instanceof z.ZodError) {
            return {
                success: false,
                message: "Please check your information and try again.",
            }
        }

        // Handle other errors
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        }
    }
}

