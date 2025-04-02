// app/api/posts/[slug]/route.ts
export const runtime = 'nodejs'

import { getPostBySlug } from '@/lib/api'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    const { slug } = params
    const post = getPostBySlug(slug)

    if (!post) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(post)
}
