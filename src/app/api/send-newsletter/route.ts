import fs from 'fs'
import path from 'path'
import { Resend } from 'resend'
import supabase from '@/lib/supabase'
import { NextResponse } from 'next/server'
import { remark } from 'remark'
import html from 'remark-html'
import matter from 'gray-matter'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { searchParams } = new URL(req.url)
    const issue = searchParams.get("issue")

    if (!issue) {
        return NextResponse.json({ message: "Missing issue number" }, { status: 400 })
    }

    const filename = `issue-${issue}.md`
    const filePath = path.join(process.cwd(), 'newsletters', filename)

    try {
        // 1. Read and parse frontmatter
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { content, data } = matter(fileContent)

        // 2. Convert Markdown to HTML
        const processedContent = await remark().use(html).process(content)
        const emailHTML = processedContent.toString()

        // 3. Pull subject from frontmatter or fallback
        const subject = data.subject || `🧠 The Inner Join #${issue}`

        // 4. Fetch subscribers
        const { data: subscribers, error } = await supabase.from('subscribers').select('email')
        if (error) throw error

        // 5. Send to all subscribers
        for (const { email } of subscribers) {
            await resend.emails.send({
                from: 'The Inner Join <contact@theinnerjoin.dev>',
                to: email,
                subject,
                html: emailHTML,
            })
        }

        return NextResponse.json({ success: true, sent: subscribers.length })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ success: false, error: err }, { status: 500 })
    }
}
