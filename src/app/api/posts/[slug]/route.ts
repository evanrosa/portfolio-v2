export const runtime = 'nodejs'

import { getPostBySlug } from '@/lib/api'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(post)
}
