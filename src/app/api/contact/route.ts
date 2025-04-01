import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { name, email, message, inquiryType } = await req.json()

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured')
            return NextResponse.json(
                { error: 'Email service is not configured' },
                { status: 500 }
            )
        }

        if (!name || !email || !message || !inquiryType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const data = await resend.emails.send({
            from: 'The Inner Join <theinnerjoin@evro.dev>',
            to: 'evandanrosa@gmail.com',
            subject: `New ${inquiryType} inquiry from ${name}`,
            replyTo: email,
            html: `
                <h2>New Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Type:</strong> ${inquiryType}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        })

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error('Email sending error:', error)
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        )
    }
}
