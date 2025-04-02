export const runtime = 'nodejs'

import { getPostBySlug } from '@/lib/api'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const resolvedParams = await params
    const { slug } = resolvedParams
    const post = getPostBySlug(slug)

    if (!post) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(post)
}