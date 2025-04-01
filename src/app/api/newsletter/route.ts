import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabaseAdmin } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { email } = await req.json()

    if (!email || !email.includes("@")) {
        return NextResponse.json({ message: 'Invalid email address' }, { status: 400 })
    }

    try {
        // Check for existing subscriber
        const { data: existing } = await supabaseAdmin.from('subscribers').select('*').eq('email', email).single()

        if (existing) {
            return NextResponse.json({ message: 'Already subscribed' }, { status: 200 })
        }

        // Store new subscriber in Supabase
        const { error: insertError } = await supabaseAdmin
            .from('subscribers')
            .insert([{ email, subscribed_at: new Date().toISOString() }])

        if (insertError) {
            console.error('Supabase insert error:', insertError)
            return NextResponse.json({ message: 'Failed to store subscriber' }, { status: 500 })
        }

        // Send a confirmation email to the subscriber
        await resend.emails.send({
            from: 'The Inner Join <theinnerjoin@evro.dev>',
            to: email,
            subject: 'Thanks for subscribing!',
            html: `<p>You're now subscribed to The Inner Join. Expect the good stuff soon. 🧠</p>`,
        })

        // Send a notification to yourself
        await resend.emails.send({
            from: 'The Inner Join <ctheinnerjoin@evro.dev>',
            to: 'evandanrosa@gmail.com',
            subject: 'New Newsletter Subscriber',
            html: `<p>${email} just subscribed to your blog 🚀</p>`,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, error }, { status: 500 })
    }
}