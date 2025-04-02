// app/api/posts/[slug]/route.ts
export const runtime = 'nodejs'

import { getPostBySlug } from '@/lib/api'
import { NextResponse } from 'next/server'

export async function GET(
    req: Request,
    context: { params: { slug: string } }
) {
    const post = getPostBySlug(context.params.slug)

    if (!post) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(post)
}
